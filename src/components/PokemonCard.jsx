

function PokemonCard({pokemonList, pokemonIndex}){
    let pokemon = pokemonList[pokemonIndex];
    let condition = pokemon.imgSrc ? <img src={pokemon.imgSrc}/> : <p>???</p>
    return (
    <figure>{condition}<figcaption>{pokemon.name}</figcaption></figure> 
    );
}




export default PokemonCard;