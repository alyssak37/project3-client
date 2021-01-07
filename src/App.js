
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Login from './pages/Login';

import { Switch, Route } from 'react-router-dom';
// create 4 page components , login signup dashboard home
// define as function and export them 
// return a div with text content 
//import them into APP.js
// import switch from React Router then define various routes

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
              <Signup />
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
