import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
 
  constructor(){
    super()
    this.state = {
        pokemon: []
    }
    this.addPokemon = this.addPokemon.bind(this)
  }


  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(resp => resp.json())
      .then(collection => {

        let newArray = []
        
        collection.map(card => {
          let change = {};

          change.name = card.name 
          change.front = card.sprites.front
          change.back = card.sprites.back
          
          
          // set hp
          card.stats.map((stat) => {
            if (stat.name === "hp") {
              change.hp = stat.value
              } 
            })
            newArray.push(change)
            return newArray
          }) 

          this.setState({
            pokemon: newArray
          })
          // end map through collection
           }) // end last then statement
          } // end mount


          addPokemon = (newPoke) => {
            this.setState({
              pokemon: newPoke
            })
          }

  render() {

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm 
          handleAddPokemon={this.addPokemon} />
        <br />
        <Search onChange={() => console.log('🤔')} />
        <br />
        <PokemonCollection 
            poke={this.state.pokemon} />
      </Container>
    )
  }

}


export default PokemonPage
