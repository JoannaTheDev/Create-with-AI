  import React from 'react'
  import { Component } from 'react'
  import 'bootstrap/dist/css/bootstrap.css'
  import { Navbar } from 'react-bootstrap'
  
  class Navigation extends Component {
  
    render() {
      return (
        <div>
           
          <Navbar bg="dark" variant="dark" sticky="top" expand="md" collapseOnSelect>
          <Navbar.Brand href="/">
          
           Content Generation with API
           
  
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
  
          </Navbar.Collapse>
          </Navbar>
       
        </div>
  
      )
    }
  }
  
   
  
  export default Navigation