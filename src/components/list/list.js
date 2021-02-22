import React from 'react';
import { Box } from '../_utils/box';
import { PressedBox } from '../_utils/pressedBox';
import { CardSection } from '../card/cardSection';

import "./styles.scss";


export const List = (props) => {
    const { data } = props;

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
        <Box classname="list" theme="dark">
            <div className="list__header">
                {getLastUpdated()}
            </div>
            <div className="list__body">
                <div className="list__image">
                    <PressedBox classname="noTopMargin">
                        <img alt="" src={countryInfo.flag}  width="120px"  height="90px" /> 
                    </PressedBox>
                    <div className="country_name">{country}</div>
                </div>
                <CardSection 
                    title="TOTAL"
                    data={data}
                    color="newpink"
                    classname="list__section"
                />
                <CardSection
                    title="TODAY"
                    data={data}
                    color="purple"
                    classname="list__section"
                />
                <CardSection
                    title="PER MILLIONS"
                    data={data}
                    color="warning"
                    classname="list__section"
                />
            </div>
        </Box>
    )
}