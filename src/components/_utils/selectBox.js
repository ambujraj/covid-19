import React, { useContext } from 'react';
import { ThemeContext } from '../../themecontext';
import "./styles.scss";

export const SelectBox = ({ sortvalue }) => {
    const { theme } = useContext(ThemeContext);

    const handleChange = (e) => {
        sortvalue(e.target.value);
    }
    return (
        <div className="selectBox">
            <div className="selectBox__text">Sort By</div>
            <select className={`sort_by sort_by--${theme}`} onChange={handleChange}>
                <option value="country_asc">Country Name (A-Z)</option>
                <option value="country_desc">Country Name (Z-A)</option>

                <option value="cases_desc">Total Cases (highest to lowest)</option>
                <option value="cases_asc">Total Cases (lowest to highest)</option>

                <option value="deaths_desc">Total Deaths (highest to lowest)</option>
                <option value="deaths_asc">Total Deaths (lowest to highest)</option>

                <option value="todayCases_desc">Today Cases (highest to lowest)</option>
                <option value="todayCases_asc">Today Cases (lowest to highest)</option>

                <option value="todayDeaths_desc">Today Deaths (highest to lowest)</option>
                <option value="todayDeaths_asc">Today Deaths (lowest to highest)</option>

                <option value="active_desc">Active Deaths (highest to lowest)</option>
                <option value="active_asc">Active Deaths (lowest to highest)</option>

                <option value="recovered_desc">Recovered (highest to lowest)</option>
                <option value="recovered_asc">Recovered (lowest to highest) </option>
            </select>
        </div>
    )
}