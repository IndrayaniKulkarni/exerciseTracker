//import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css";

import  Navbar from "./src/components/navbar.component.js";
import ExercisesList from "./src/components/exercises-list.component";
import EditExercise from "./src/components/edit-exercise.component";
import CreateExercise from "./src/components/create-exercise.component";
import CreateUser from "./src/components/create-user.component";
import ApexChart from "./src/components/time_chart.component";

import './App.css';
//react component
function App() {
  return (
    //below -component need to expand - describe
    <Router>
      <div className="container">
      <Navbar />
       <br />
       <Route path="/" exact component ={ExercisesList} />
       <Route path="/edit/:id" component ={EditExercise} />
       <Route path="/create" component={CreateExercise} />
       <Route path="/user" component={CreateUser} />
       <Route path="/graph/:username" component={ApexChart} />
      </div>
      
    </Router> 
  );
}

export default App;

