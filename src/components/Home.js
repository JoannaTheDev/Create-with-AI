import React from 'react'
import { Component } from 'react'
import Display from './Display'
import { Container, Row} from 'react-bootstrap'

class Home extends Component {
  render() {
    return (
      <div> 
          <br/>
          <Container>
          <br/>
          <h1>Artificial Intelligence with OpenAI</h1>
        <p>Interested in seeing how AI content works? Start by clicking 'Get Started' below to create AI content.</p>

        <Row>
            
            <Display
                title="Generate content with Prompts"
                text="Click the button below to get started"
                theLink ="/Prompt" />
          
        </Row>

          </Container>
        </div>
)
}
}

export default Home