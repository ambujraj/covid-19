import React from 'react';
import { Button } from "../_utils/button";
import { PressedBox } from '../_utils/pressedBox';
import { Box } from '../_utils/box';
import { CardSection } from './cardSection';

import "./styles.scss";

export const Card = (props) => {
    const { data, theme } = props;
    const { 
        countryInfo,
        country,
        updated
    } = data;

    const getLastUpdated = () => {
        if(updated > 0) {
            const dates = new Date(updated);
            return (
                <div className="dates">
                    Last Updated:  {`${dates.toUTCString()}`}
                </div>
            );
        }
        return null;
    }

    return (
        <Box classname="card">
            <div className="card__header">
                <PressedBox classname="flag flag--circular">
                    <img alt="" src={countryInfo.flag}  width="90px"  height="90px" style={{ borderRadius: "50%" }} /> 
                </PressedBox>
                <div className="card__update__details">
                        <div className="updated">{getLastUpdated()}</div>
                        <div className="country_name">{country}</div>
                        <div className="graph__view">
                            <div className="view-btn">
                            {/* <PressButton /> */}
                            </div>
                        </div>
                    </div>
            </div>
                <div className="card__body">
                    <CardSection
                        title="TOTAL"
                        data={data}
                        color="newpink"
                        classname="card__section"
                    />
                    <CardSection
                        title="TODAY"
                        data={data}
                        color="green"
                        classname="card__section"
                    />
                    <CardSection
                        title="PER MILLIONS"
                        data={data}
                        color="warning"
                        classname="card__section"
                    />
                </div>
                {/*
                <div className="card__bottom">
                    <Button text="Detailed View" />
                </div>
                */}
        </Box>
    )
}
