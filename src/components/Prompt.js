import {Component, useEffect, useState} from 'react'
import {Container, Form, Button, Card} from 'react-bootstrap'

const {Configuration, OpenAIApi} = require("openai");


class Prompt extends Component {
    constructor(props) {
        super(props);
        this.state = {
             heading: [],
            response: [],
        }
    }

    onFormSubmit = e => {
        e.preventDefault();

        const formData = new FormData(e.target),
            formDataObj = Object.fromEntries(formData.entries());
        console.log(formDataObj.promptName);

        ///OPENAI
        const configuration = new Configuration({
            apiKey: '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',
        });
        const openai = new OpenAIApi(configuration);

        openai.createCompletion("text-curie-001", {
            prompt: `Write a detailed explanation for ${formDataObj.promptName}`,
            temperature: 0.8,
            max_tokens: 200,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
            .then((response) => {
                this.setState({
                    heading: this.state.heading.concat(`AI Content Suggestions for: ${formDataObj.promptName}`),
                    response: this.state.response.concat(`${response.data.choices[0].text}`)
                })
            })
            .catch(err => {
                console.log(`error ${err}`)
            });     
            const [response, setResponse] = useState(localStorage.getItem('response') );
              
                useEffect(() => {
                  localStorage.setItem('response', JSON.stringify(response));
                }, [response]);
    };


    render() {
        return (
            <div>
                <Container>
                    <br/>
                    <h4>AI Content Generator</h4>
                    <br/>
                    <Form onSubmit={this.onFormSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>What would you like to generate content for?</Form.Label>
                            <Form.Control
                                type="text"
                                name="promptName"
                                placeholder="Enter Prompt"/>
                            <Form.Text className="text-muted">
                                Enter as much information as possible for more accurate content generation.
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" size="lg" type="submit">
                            Get AI Suggestions
                        </Button>
                    </Form>
                    <br/>
                    <br/>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                            </Card.Title>
                           
                            {this.state.response.map((response,index) =>(<h5>{this.state.heading[index]} <br/><br/> {response} <br/><br/></h5>)).reverse()}
                           
                            <br/>
                            <br/>
                    
                            <br/>
                            <br/>
                            <Card.Text>
                                
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Prompt
