import React from "react";

const DataVisualization = ({ forecast }) => {
    if (!forecast || forecast.length === 0) return <p>No data to display</p>;

    const width = 600;
    const height = 300;
    const padding = 50;

    const temperatures = forecast.map((d) => parseFloat(d.avg));
    const maxTemp = Math.max(...temperatures);
    const minTemp = Math.min(...temperatures);

    const getY = (temp) =>
        height - padding - ((temp - minTemp) / (maxTemp - minTemp)) * (height - 2 * padding);

    const getX = (i) =>
        padding + (i * (width - 2 * padding)) / (forecast.length - 1);

    const curve = forecast
        .map((d, i) => {
            const x = getX(i);
            const y = getY(d.avg);
            if (i === 0) {
                return `M${x},${y}`;
            } else {
                return `L${x},${y}`;
            }
        })
        .join(" ");

    return (
        <svg
            viewBox={`0 0 ${width} ${height}`}
            style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(to bottom, #eef9ff, #dfefff)",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                overflow: "visible",
            }}
        >
            <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#007bff" />
                    <stop offset="100%" stopColor="#6610f2" />
                </linearGradient>
                <linearGradient id="chartAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#007bff" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#007bff" stopOpacity="0" />
                </linearGradient>
            </defs>

            {/* Grid lines */}
            <g stroke="#dfe4ea" strokeDasharray="5, 5">
                {[...Array(5)].map((_, i) => {
                    const y = padding + (i * (height - 2 * padding)) / 4;
                    return <line key={i} x1={padding} y1={y} x2={width - padding} y2={y} />;
                })}
            </g>

            {/* Axes */}
            <line
                x1={padding}
                y1={height - padding}
                x2={width - padding}
                y2={height - padding}
                stroke="#333"
                strokeWidth="2"
            />
            <line
                x1={padding}
                y1={padding}
                x2={padding}
                y2={height - padding}
                stroke="#333"
                strokeWidth="2"
            />

            {/* Area under line */}
            <path
                d={`${curve} L${getX(forecast.length - 1)},${height - padding} L${getX(0)},${height - padding} Z`}
                fill="url(#chartAreaGradient)"
            />

            {/* Line Path */}
            <path
                d={`${curve}`}
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                strokeLinecap="round"
            />

            {/* Dots and Labels */}
            {forecast.map((d, i) => {
                const x = getX(i);
                const y = getY(d.avg);

                return (
                    <g key={i} textAnchor="middle">
                        {/* Dot */}
                        <circle
                            cx={x}
                            cy={y}
                            r={6}
                            fill="#007bff"
                            stroke="#fff"
                            strokeWidth="2"
                            style={{
                                transition: "transform 0.2s ease",
                            }}
                        />
                        {/* Temperature Label */}
                        <text
                            x={x}
                            y={y - 12}
                            fontSize="12"
                            fill="#333"
                            fontWeight="bold"
                            style={{
                                textShadow: "1px 1px 3px #fff",
                            }}
                        >
                            {d.avg}°
                        </text>
                        {/* Date Label */}
                        <text x={x} y={height - padding + 15} fontSize="10" fill="#333">
                            {d.date.slice(5)}
                        </text>
                    </g>
                );
            })}
        </svg>
    );
};

export default DataVisualization;