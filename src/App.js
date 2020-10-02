import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ArticlePage from './pages/ArticlePage';
import PortfolioPage from './pages/PortfolioPage';


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
         <NavBar className="border-bottom" bg="transparent" expand="lg">
          <NavBar.Brand>benjamin charles</NavBar.Brand>
          <NavBar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <NavBar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/articles">Articles</Link>
              <Link className="nav-link" to="/portfolio">Portfolio</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
            </Nav>
          </NavBar.Collapse>
         </NavBar>
         <Route path="/" exact render={() => <HomePage title={this.state.home.title}/>} subTitle={this.state.home.subTitle} flavorText={this.state.home.flavorText}/>
         <Route path="/articles" exact render={() => <ArticlePage title={this.state.article.title}/>}/>
         <Route path="/portfolio" exact render={() => <PortfolioPage title={this.state.portfolio.title}/>} />
         <Route path="/about" exact render={() => <AboutPage title={this.state.about.title}/>}/>
         <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title}/>}/>
         <Footer />
       </Container>
      </Router>
      );
    }
}

export default App;
