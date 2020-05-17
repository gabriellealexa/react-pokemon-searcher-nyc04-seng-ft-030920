import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      front: '',
      back: ''
    }
  }

  handleInputs = (e) => {
    this.setState({
    [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleAddPokemon(this.state)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleInputs} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleInputs} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="front" onChange={this.handleInputs} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="back" onChange={this.handleInputs} />
          </Form.Group>
          <Form.Button onSubmit={this.handleSubmit}>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
