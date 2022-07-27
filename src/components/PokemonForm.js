import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddPokemon}) 
{

  function handleSubmit (e)
  {
    e.preventDefault();

    const newPokemon=
    {
      name:formData.name,
      hp:formData.hp,
      sprites:
      {
        front:formData.frontUrl,
        back:formData.backUrl
      }
    }

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    })
      .then((r) => r.json())
      .then(onAddPokemon);

  }
  

  const [formData, setFormData]= useState({
    name:"",
    hp:"",
    frontUrl:"",
    backUrl:""
  })

  const handleOnChange=(e)=>
  {
    const {name, value}= e.target;
   
    setFormData(formData=>{
      return {
        ...formData,
        [name]:value
      }
    })
  }
  
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            value={formData.name}
            onChange={handleOnChange}/>
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp"
            value={formData.hp}
            onChange={handleOnChange} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl}
            onChange={handleOnChange} 
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl}
            onChange={handleOnChange} 
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
