import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(){
    super()
    this.state = {
      side: 'front'
    }
  }

  handleClick = () => {
    this.state.side === 'front' ? 
        this.setState({
          side: 'back'
         })
          : 
        this.setState({
          side: 'front'
        })
  }


  render() {
    console.log(this.state.side)
    return (
      <Card>
        <div
          onClick={this.handleClick}>
          <div className="image">
            { this.state.side === 'front' ? <img src={this.props.pokemon.front } alt="oh no!" /> : <img src={this.props.pokemon.back} alt="oh no!" /> }
          </div>
          <div className="content">
            <div className="header">{ this.props.pokemon.name }</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
             { this.props.pokemon.hp }
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
