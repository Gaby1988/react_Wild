import './App.css'
import PropTypes from "prop-types";
import { useState } from 'react';
// import MyTitle from './components/MyTitle';
import PokemonCard from './components/PokemonCard';



function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleNext = () => {
    setPokemonIndex(pokemonIndex + 1)
  }
  const handlePrevious = () => {
    setPokemonIndex(pokemonIndex - 1)
  }
  const conditionButtonPrevious = pokemonIndex > 0 ? <button onClick={handlePrevious}>Précédent</button> : "";
const conditionButtonNext = pokemonIndex < pokemonList.length - 1 ? <button onClick={handleNext}>Suivant</button> : "";
  return (
    <div>
      <PokemonCard pokemonList={pokemonList} index={pokemonIndex} />
      <p>{pokemonIndex}</p>
      {conditionButtonPrevious}
      {conditionButtonNext}
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
