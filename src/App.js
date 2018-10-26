import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Right from './components/Right';
import Left from './components/Left';
import RightOther from './components/RightOther';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
          <BrowserRouter>
              <div>
                  <Route path="/" component={Header} />
                  <Route path="/" component={NavBar} />
                  <Route path="/" component={Main} />
                  <Route path="/" component={Right} />
                  <Route path="/" component={Left} />
                  <Route path="/" component={RightOther} />
                  <Route path="/" component={Footer} />
              </div>
          </BrowserRouter>
    );
  }
}

export default App;
