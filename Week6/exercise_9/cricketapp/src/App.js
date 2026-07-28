import React from "react";

import ListofPlayers from "./Components/ListofPlayers";
import Scorebelow70 from "./Components/Scorebelow70";
import OddPlayers from "./Components/OddPlayers";
import EvenPlayers from "./Components/EvenPlayers";
import ListofIndianPlayers from "./Components/IndianPlayers";

function App() {

  const players = [
    { name: "Virat Kohli", score: 95 },
    { name: "Rohit Sharma", score: 88 },
    { name: "Shubman Gill", score: 76 },
    { name: "KL Rahul", score: 68 },
    { name: "Hardik Pandya", score: 72 },
    { name: "Ravindra Jadeja", score: 65 },
    { name: "R Ashwin", score: 80 },
    { name: "Mohammed Shami", score: 50 },
    { name: "Jasprit Bumrah", score: 91 },
    { name: "Mohammed Siraj", score: 60 },
    { name: "Kuldeep Yadav", score: 75 }
  ];

  const IndianTeam = [
    "Virat",
    "Rohit",
    "Gill",
    "Rahul",
    "Hardik",
    "Jadeja"
  ];

  const T20players = [
    "Virat",
    "Rohit",
    "Hardik"
  ];

  const RanjiPlayers = [
    "Pujara",
    "Rahane",
    "Sarfaraz"
  ];

  const IndianPlayers = [...T20players, ...RanjiPlayers];

  var flag = true;

  if (flag === true) {

    return (
      <div>
        <h1>List of Players</h1>

        <ListofPlayers players={players} />

        <hr />

        <h1>List of Players having Scores Less than 70</h1>

        <Scorebelow70 players={players} />

      </div>
    );

  } else {

    return (

      <div>

        <div>

          <h1>Indian Team</h1>

          <h2>Odd Players</h2>

          {OddPlayers(IndianTeam)}

          <hr />

          <h2>Even Players</h2>

          {EvenPlayers(IndianTeam)}

        </div>

        <hr />

        <div>

          <h1>List of Indian Players Merged</h1>

          <ListofIndianPlayers IndianPlayers={IndianPlayers} />

        </div>

      </div>

    );

  }

}

export default App;