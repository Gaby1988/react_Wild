

function PokemonCard(props){
    let pokemon = props.list[props.index];
    let condition = pokemon.imgSrc ? <img src={pokemon.imgSrc}/> : <p>???</p>
    return <figure>{condition}<figcaption>{pokemon.name}</figcaption></figure>   
}




export default PokemonCard;