import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemons}) {
  return (
    <Card.Group itemsPerRow={6}>
      {pokemons.map((p)=><PokemonCard 
                          key={p.id}
                          pokemons={p}/>)}
    </Card.Group>
  );
}

export default PokemonCollection;
