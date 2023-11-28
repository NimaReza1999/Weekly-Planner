import React from 'react';
import './Header.css';

export default function Header() {

    return (
    <div className="navBar">
        <div className="month-container">
        <label htmlFor="months">
            Select Month <span className='month-arrow'>🔽</span>
        </label>
            <ul name="month-selection" id="month-selection">
                <MonthOptions/>
            </ul>
        </div>
        <h1> Weekly Planner </h1>
        <div className="week-container">
            <label htmlFor="week-selection">
                Select Week <span className='week-arrow'>🔽</span>
            </label>
        <ul name="month-selection" id="month-selection">
                <WeekSelection/>
        </ul>
        </div>
    </div>
  )
}

function MonthOptions() {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        months.map((month) => <li>{month}</li>)
    )
}

function WeekSelection() {

    const weeks = ["First", "Second", "Third", "Fourth", "Fivth"];
    return (
        weeks.map((week) => <li>{week}</li>)
    )
}
