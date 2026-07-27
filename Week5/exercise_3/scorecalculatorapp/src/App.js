import React from "react";
import CalculateScore from "./Components/CalculateScore";

function App() {

    return (

        <div>

            <CalculateScore
                Name="Rakshana"
                School="Bannari Amman Institute of Technology"
                Total={480}
                Goal={6}
            />

        </div>

    );

}

export default App;