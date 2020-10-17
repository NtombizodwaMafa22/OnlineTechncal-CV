import React from 'react';
import './index.css';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom'; 
import {Container, Navbar} from 'react-bootstrap';
import Footer from './components/Footer';
import Nav from 'react-bootstrap/Nav';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      title:"Ntombizodwa Mafa",
      headerLinks:[
        {title:'Name', path: '/'},
        {title:'About', path: '/about'},
        {title:'Contact', path: '/contact'}
      ],
      home:{
        title:'Hello,',
        subtitle:'Bsc Information Technology final Year student',
        text: 'Check out my projects',
        picture: './images/profile.jpg'
      },
      contact:{
        title:'Contact me'
      },
      about:{
        title:'About Me'
      }
    }
  }

  render(){
    return (
      <Router>
        <Container class="p-0" fluid={true}>
          <Navbar className="border"  expand="lg" color="white">
            <Navbar.Brand>Ntombizodwa Mafa</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toogle">
            <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>
           

        <Route path="/" exact render={() => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text} picture= {this.state.home.picture}/>} />
        <Route path="/about"  render={() => <AboutPage title={this.state.about.title} />}/>
        <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />  

         <Footer />
        </Container>
      </Router>
    );
  }
  
}

export default App;
