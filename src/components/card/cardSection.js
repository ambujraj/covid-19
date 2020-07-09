import React from 'react';
import { ToggleButton } from '../_utils/toggleButton';
import { CardText } from './cardText';
import { Box } from '../_utils/box';

const colors = {
    deathsColor: "red",
    casesColor: "blue",
    recoveredColor: "green",
    testsColor: "orange",
    criticalColor: "pink",
    activeColor: "purple"
}

export const CardSection = (props) => {
    const { title, color, classname, data: { 
        cases,
        recovered,
        active,
        tests,
        deaths,
        critical,
        todayDeaths,
        todayCases,
        casesPerOneMillion,
        deathsPerOneMillion,
        testsPerOneMillion
    }} = props;

    let content_data = [];

    if(title === "TODAY") {
        content_data.push({
            label: "Deaths",
            value: todayDeaths,
            color: colors.deathsColor
        });
        content_data.push({
            label: "Cases",
            value: todayCases,
            color: colors.casesColor
        });
    }

    if(title === "TOTAL") {
        content_data.push({
            label: "Cases",
            value: cases,
            color: colors.casesColor
        });
        content_data.push({
            label: "Recovered",
            value: recovered,
            color: colors.recoveredColor
        });

        content_data.push({
            label: "Active",
            value: active,
            color: colors.activeColor
        });

        content_data.push({
            label: "Deaths",
            value: deaths,
            color: colors.deathsColor
        });

        content_data.push({
            label: "Tests",
            value: tests,
            color: colors.testsColor
        });
        content_data.push({
            label: "Critical",
            value: critical,
            color: colors.criticalColor
        });
    }

    if(title === "PER MILLIONS") {
        content_data.push({
            label: "Cases",
            value: casesPerOneMillion,
            color: "blue"
        });
        content_data.push({
            label: "Tests",
            value: testsPerOneMillion,
            color: colors.testsColor
        });
        content_data.push({
            label: "Deaths",
            value: deathsPerOneMillion,
            color: colors.deathsColor
        });
    }

    const mapContentData = () => {
        return content_data.map((item, key) => <CardText data={item} key={key} />);
    }

    const boxStyles = {
        padding: "8px 12px"
    }

    return (
        <Box styles={boxStyles} classname={classname}>
            <div className="card__section__header">
                <div className={`card__title ${color}`}>{title} </div>
                <div className="togggle_btn">
                    {/*<ToggleButton />*/}
                </div>
            </div>
            <div className="card__content">
                {mapContentData()}                  
            </div>
        </Box>
    )
}