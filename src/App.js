
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Header />
        <main>
          <Switch>
            <Route exact path="/" render={props =>
              <Home />
            } />
            <Route exact path="/dashboard" render={props =>
              <Dashboard />
            } />
            <Route exact path="/signup" render={props =>
              <Signup {...props}/>
            } />
            <Route exact path="/login" render={props =>
              <Login />
            } />
        </Switch>
        </main>
      <Footer />
    </div>
  );
}

export default App;
