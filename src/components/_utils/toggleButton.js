import React from 'react';
import "./styles.scss";

export const ToggleButton = () => {
    return (
        <label className="label">
            <div className="toggle">
                <input className="toggle-state" type="checkbox" name="check" value="check" />
                <div className="indicator"></div>
            </div>
        </label>
    )
}