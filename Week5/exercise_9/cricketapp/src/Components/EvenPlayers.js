import React from "react";

function EvenPlayers(players) {

  const [, second, , fourth, , sixth] = players;

  return (
    <div>
      <p>{second}</p>
      <p>{fourth}</p>
      <p>{sixth}</p>
    </div>
  );
}

export default EvenPlayers;