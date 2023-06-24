import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './navBar/navBar';
import './navBar/navBar.css';
import Container from './Container/container';
import  './Container/container.css';
import Footer from './footer/footer';
import  './footer/footer.css';
// import App from './App';
import About from './pages/AboutPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <div>
      <NavBar /> 
      <Container />
      <Footer />
      <Route exact path="/" component={() => <div>Hello world!</div>} />
      <Route path="/about" component={About} />
      {/* <App /> */}
    </div>
  </Router>
);
