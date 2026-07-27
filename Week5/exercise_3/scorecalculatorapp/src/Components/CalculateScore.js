import React from "react";
import "../Stylesheets/mystyle.css";

function CalculateScore(props) {

    const average = props.Total / props.Goal;

    return (
        <div className="box">
            <h1>Student Score Calculator</h1>

            <h2>Name : {props.Name}</h2>

            <h2>School : {props.School}</h2>

            <h2>Total Marks : {props.Total}</h2>

            <h2>Subjects : {props.Goal}</h2>

            <h2>Average Score : {average}</h2>
        </div>
    );
}

export default CalculateScore;