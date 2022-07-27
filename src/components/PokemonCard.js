import React from "react";
import { Card } from "semantic-ui-react";
import {useState} from "react";

function PokemonCard({pokemons}) 
{
  const [frontORback, setFrontOrBack]=useState(false);

  const toggleFrontOrBack = ()=> {return setFrontOrBack(frontORback=>!frontORback)}

  return (
    <Card onClick={toggleFrontOrBack}>
      <div>
        <div className="image">
          <img src={frontORback ? pokemons.sprites.back : pokemons.sprites.front} alt={pokemons.name} />
        </div>
        <div className="content">
          <div className="header">{pokemons.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemons.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
