function NavBar(props){
    // console.log(props);
    const handleNext = () => {
        props.setIndex(props.pIndex + 1)
      }
      const handlePrevious = () => {
        props.setIndex(props.pIndex - 1)
      }
      const conditionPrevious = props.pIndex > 0 ? <button onClick={handlePrevious}>Précédent</button> : "";
      const conditionNext = props.pIndex < props.list.length - 1 ?
        <button onClick={handleNext}>Suivant</button> : "";
       return <div>
        {conditionPrevious}
        {conditionNext}
        </div>
}

export default NavBar;