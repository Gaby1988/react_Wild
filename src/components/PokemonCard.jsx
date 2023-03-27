function PokemonCard(props){
    let pokemon = props.pokemonList[0];
    let condition = pokemon.imgSrc ? <img src={pokemon.imgSrc}/> : <p>???</p>
    return <figure>{condition}<figcaption>{pokemon.name}</figcaption></figure>
    
}




export default PokemonCard;