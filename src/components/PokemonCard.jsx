function PokemonCard(){
    let pokemon = pokemonList[0];
    let condition = pokemon.imgSrc ? <img src={pokemon.imgSrc}/> : <p>???</p>
    return <figure>{condition}<figcaption>{pokemon.name}</figcaption></figure>
    
}


const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

export default PokemonCard;