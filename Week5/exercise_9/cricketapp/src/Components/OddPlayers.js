import React from "react";

function OddPlayers(players) {

  const [first, , third, , fifth] = players;

  return (
    <div>
      <p>{first}</p>
      <p>{third}</p>
      <p>{fifth}</p>
    </div>
  );
}

export default OddPlayers;