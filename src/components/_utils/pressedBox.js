import React, { useContext } from 'react';
import { ThemeContext } from '../../themecontext';
import "./styles.scss";

export const PressedBox = (props) => {
    const { children, styles, classname } = props;
    const { theme } = useContext(ThemeContext);

    return (
        <div 
            className={`pressed_box ${classname} pressed_box--${theme}`}
            style={styles}
        >
            {children}
        </div>
    )
}