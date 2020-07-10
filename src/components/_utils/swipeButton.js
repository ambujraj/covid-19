import React, { useContext } from 'react';
import { ThemeContext } from '../../themecontext';
import "./styles.scss";

export const SwipeButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleTheme = () => {
        toggleTheme();
    }

    return (
        <div className="swipe">
            <div className="swipe__text">Switch Theme</div>
            <div className={`swipe__btn swipe__btn--${theme}`}>
                <input id="switch-2" type="checkbox" onChange={handleTheme} />
                <label htmlFor="switch-2"></label>
            </div>
        </div>
    )
}