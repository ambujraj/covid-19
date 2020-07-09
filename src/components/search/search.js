import React, { useState } from 'react';
import { InputBox } from '../_utils/InputBox';
import { SwitchButton } from "../_utils/switchButton";

import "./styles.scss";

export const Search = ({ search, view }) => {  
    const [active, setActive] = useState(true); 

    const handleClick = (checkActive, checkView) => {
        if(!checkActive) 
            setActive(!active);
        view(checkView);
    }

    return (
        <div className="header">
            <div className="header__right">
                <InputBox 
                    placeholder = "Search by Country Name"
                    getvalue={search}
                />
            </div>
            <div className="header__left">
                <div onClick={() => handleClick(active, "grid")}>
                    <SwitchButton 
                        active={active}
                        icon="grid_on"
                        theme="dark"
                    />
                </div>
                <div onClick={() => handleClick(!active, "list")}>
                    <SwitchButton 
                        active={!active}
                        icon="list"
                        theme="dark"
                    />
                </div>
            </div>
        </div>
    )
}