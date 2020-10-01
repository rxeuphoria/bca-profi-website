import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/Navbar';
import './App.css';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      title: 'benjamin charles',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'Articles', path: '/articles'},
        {title: 'Portfolio', path: '/portfolio'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Some title',
        subTitle: 'Subtitle here',
        flavorText: 'flavor here'
      },
      about: {
        title: 'About Me'
      },
      article: {
        title: 'writings'
      },
      portfolio: {
        title: 'in progress and in action'
      },
      contact: {
        title: 'reach me'
      }
    }
  }
  render() {
    return (
      <Router>
       <Container className="p-3" fluid={true}>
         <NavBar className="border-bottom">
          <NavBar.Brand>benjamin charles</NavBar.Brand>
         </NavBar>
       </Container>
      </Router>
      );
    }
}

export default App;
