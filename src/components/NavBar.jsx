
function NavBar(props) {
 

  return (
    <div>
      {props.pokemonList.map((pokemon, index) => (
        
        <button key={pokemon.name} name={pokemon.name} onClick={(e) => {
          if (e.target.name === 'pikachu') {
            props.setPokemonIndex(index);
            alert("pika pikachu !!!");
          } else {
            props.setPokemonIndex(index);
          }
        }}>
          {pokemon.name} 
        </button>
      ))}
    </div>
  );
}

export default NavBar;