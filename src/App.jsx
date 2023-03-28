import './App.css'
import PropTypes from "prop-types";
import { useState } from 'react';
// import MyTitle from './components/MyTitle';
import PokemonCard from './components/PokemonCard';
import NavBar from './components/NavBar';



function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  
  return (
    <div>
      <PokemonCard list={pokemonList} index={pokemonIndex} />
      <NavBar setIndex={setPokemonIndex} pIndex={pokemonIndex} list={pokemonList}/>
    </div>
  );
}



const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

pokemonList:PropTypes.shape({
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
})




export default App;
