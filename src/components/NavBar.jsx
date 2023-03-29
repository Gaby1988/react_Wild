function NavBar(props) {
  

  return (
    <div>
      {props.pokemonList.map((pokemon, index) => (
        <button key={pokemon.name} onClick={() => props.setPokemonIndex(index)}>
          {pokemon.name}{console.log(pokemon)} {console.log(index)}
        </button>
      ))}
    </div>
  );
}

export default NavBar;


