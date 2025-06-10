import React, {useState} from 'react';
import Select from 'react-select';

const SettingsPanel = ({onSettingsChange}) => {
    const [settings, setSettings] = useState({
        units: {value: 'metric', label: 'Metric'},
        refreshRate: {value: 30, label: '30 seconds'},
        displayOptions: {value: 'detailed', label: 'Detailed View'}
    });

    const unitOptions = [
        {value: 'metric', label: 'Metric'},
        {value: 'imperial', label: 'Imperial'}
    ];

    const refreshRateOptions = [
        {value: 15, label: '15 seconds'},
        {value: 30, label: '30 seconds'},
        {value: 60, label: '1 minute'}
    ];

    const displayOptions = [
        {value: 'detailed', label: 'Detailed View'},
        {value: 'minimal', label: 'Minimal View'}
    ];

    const handleSettingChange = (setting, value) => {
        const newSettings = {...settings, [setting]: value};
        setSettings(newSettings);
        onSettingsChange(newSettings);
    };

    return (
        <div className="settings-panel">
            <h2>Settings</h2>
            <div className="setting-group">
                <label>Units:</label>
                <Select
                    value={settings.units}
                    onChange={(value) => handleSettingChange('units', value)}
                    options={unitOptions}
                />
            </div>
            <div className="setting-group">
                <label>Refresh Rate:</label>
                <Select
                    value={settings.refreshRate}
                    onChange={(value) => handleSettingChange('refreshRate', value)}
                    options={refreshRateOptions}
                />
            </div>
            <div className="setting-group">
                <label>Display Options:</label>
                <Select
                    value={settings.displayOptions}
                    onChange={(value) => handleSettingChange('displayOptions', value)}
                    options={displayOptions}
                />
            </div>
        </div>
    );
};

export default SettingsPanel;
