import React from 'react'
import CurrentDay from '../CurrentDay';
import CurrentDayDescription from '../CurrentDayDescription';
import UpcomingDaysForecast from '../UpcomingDaysForecast';

export default function Forecast( { forecast } ) {
    return (
        <div>
            <CurrentDay {...forecast.currentDay} />
        </div>
    )
}
