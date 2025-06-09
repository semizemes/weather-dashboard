import React from "react";

const DataVisualization = ({ forecast }) => {
    if (!forecast || forecast.length === 0) return <p>No data to display</p>;

    const width = 500;
    const height = 200;
    const padding = 40;

    // Extract values
    const temperatures = forecast.map(d => parseFloat(d.avg));
    const maxTemp = Math.max(...temperatures);
    const minTemp = Math.min(...temperatures);

    // Scale temps to SVG Y axis (invert Y because SVG origin is top-left)
    const getY = (temp) =>
        height - padding - ((temp - minTemp) / (maxTemp - minTemp)) * (height - 2 * padding);

    // X position spacing
    const getX = (i) =>
        padding + (i * (width - 2 * padding)) / (forecast.length - 1);

    // Generate points string for <polyline>
    const points = forecast.map((d, i) => `${getX(i)},${getY(d.avg)}`).join(" ");

    return (
        <svg width={width} height={height} style={{ background: "#f8f9fa" }}>
            {/* Axes */}
            <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#999" />
            <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#999" />

            {/* Line chart */}
            <polyline
                fill="none"
                stroke="#0d6efd"
                strokeWidth="2"
                points={points}
            />

            {/* Dots and labels */}
            {forecast.map((d, i) => (
                <g key={i}>
                    <circle
                        cx={getX(i)}
                        cy={getY(d.avg)}
                        r={4}
                        fill="#0d6efd"
                    />
                    <text x={getX(i)} y={height - 10} textAnchor="middle" fontSize="10">
                        {d.date.slice(5)} {/* show MM-DD */}
                    </text>
                    <text
                        x={getX(i)}
                        y={getY(d.avg) - 10}
                        textAnchor="middle"
                        fontSize="10"
                        fill="#333"
                    >
                        {d.avg}°
                    </text>
                </g>
            ))}
        </svg>
    );
};

export default DataVisualization;
