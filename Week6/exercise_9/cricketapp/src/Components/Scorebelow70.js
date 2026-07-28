import React from "react";

function Scorebelow70(props) {

  const filteredPlayers = props.players.filter(
    player => player.score < 70
  );

  return (
    <div>
      {filteredPlayers.map((player, index) => (
        <p key={index}>
          {player.name} - {player.score}
        </p>
      ))}
    </div>
  );
}

export default Scorebelow70;