import React, { useContext } from 'react';
import { ThemeContext } from '../../themecontext';
import "./styles.scss";

export const SwitchButton = ({ active = "", icon }) => {
    const { theme } = useContext(ThemeContext);
    const btnClass = active ? "switch-active" : "";
    return (
        <div className={`switch-btn switch-btn--${theme} ${btnClass}--${theme} `} >
            <i className="material-icons">{icon}</i>
        </div>
    )
}