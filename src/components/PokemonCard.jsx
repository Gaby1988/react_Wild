const pokemon = "bulbasaur";
let i;
const pokemonList = [
    {
      name: pokemon,
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

function PokemonCard(){
    if( pokemonList[i].imgSrc ) {
        i = 0;
        return <figure><img src={pokemonList[i].imgSrc} alt="" /><figcaption>{pokemonList[i].name}</figcaption></figure>
    } else {
        i = 1;
        return <figure><p>???</p><figcaption>{pokemonList[i].name}</figcaption></figure>
    }

    
}


export default PokemonCard;