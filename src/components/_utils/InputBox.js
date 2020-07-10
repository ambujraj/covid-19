import React, { useState, useContext } from 'react';
import _ from 'lodash';
import { ThemeContext } from "../../themecontext";
import "./styles.scss";

export const InputBox = ({ placeholder, getvalue }) => {
    const [value, setValue] =  useState('');
    const { theme } = useContext(ThemeContext);

    const fetchCountryName = _.debounce((input) => {
        getvalue(input);
    }, 1000)

    const handleChange = (e) => {
        const { value } = e.target;
        setValue(value);
        fetchCountryName(value);
    }

    return (
        <div className="search">
             <input 
                type="text"
                className={`search__input search__input--${theme}`}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />
            <div className="search__icon">
                <i className="material-icons">search</i>
            </div>
        </div>
       
    );
    }
