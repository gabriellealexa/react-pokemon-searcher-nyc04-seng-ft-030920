import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  constructor(){
    super()
    this.state = {
    }

  };

  render() {
    return (
      <Card.Group itemsPerRow={6}>

        { this.props.poke.map((pokemon) => {
          return (
              <PokemonCard
                    key={pokemon.id}
                    pokemon={pokemon} />
          )}
        ) }

      </Card.Group>
    )
  }
}

export default PokemonCollection
