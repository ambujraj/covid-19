import React from "react";
import "./styles.scss";

export const PressButton = (props) => {
    return (
        <button class="c-button c-button--active" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart c-button__icon">
                <line x1="12" y1="20" x2="12" y2="10"> </line>
                <line x1="18" y1="20" x2="18" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="16"></line>
            </svg>
            <span class="c-button__label">Graph</span>
        </button>
    )
}