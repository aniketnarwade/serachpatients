import React from 'react';

import './App.css';
import WishMessage from "./components/WishMessage";
import WishCard from "./components/WishCard";
import StudentCard from "./components/StudentCard";
import SearchApp from "./components/SearchApp";
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Profile from "./components/Profile";

function App() {

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a href="/" className="navbar-brand">React with Props & State</a>
      </nav>

      {/* Functional Component*/}
      {/*<WishMessage msg="Good Morning" />
      <WishMessage msg="Good Afternoon" />
      <WishMessage msg="Good Evening" />*/}

      {/* Class Based  Component*/}
     {/* <WishCard msg="Good Morning" />
      <WishCard msg="Good Afternoon"/>
      <WishCard msg="Good Evening"/>*/}

      {/*<StudentCard/>*/}

        <Router>

            <Switch>
                <Route exact path="/" component={SearchApp}/>
                <Route exact path="/profile/:id" component={Profile}/>

            </Switch>
        </Router>


    </div>
  );
}

export default App;
