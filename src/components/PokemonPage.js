import React from "react";
import { useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import { useEffect } from "react";




function PokemonPage() 
{
  const [pokemons, setPokemon]=useState([])
  const [search, setSearch]=useState("");
 
  const searcResults = pokemons.filter(p=>
  {
    return p.name.toLowerCase().includes(search.toLowerCase());
  })

  const onAddPoke=(p)=>
  {
    setPokemon(pokemons=>{return[...pokemons, p]})
  }

  useEffect(()=>
  {
    fetch("http://localhost:3001/pokemon")
    .then((data)=>data.json())
    .then((data)=>{setPokemon(data)})
  }, []);

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={onAddPoke}/>
      <br />
      <Search setSearch={setSearch}/>
      <br />
      <PokemonCollection pokemons={searcResults}/>
    </Container>
  );
}

export default PokemonPage;
