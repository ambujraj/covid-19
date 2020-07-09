import React from 'react';
import { PressedBox } from '../_utils/pressedBox';

export const CardText = ({ data }) => {
    const { label, value, color } = data;

    return (
        <PressedBox classname="card__text">
            <div className={`card__label ${color}`}>{label}</div>
            <div className={`card__value ${color}`}>{value}</div>
         </PressedBox>
    )
}

CardText.defaultProps = {
    data: [{
        label: null,
        value: null,
        color: null
    }]
};