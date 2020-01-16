import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import TrainingList from "./components/training-list.component";
import EditTraining from "./components/edit-training.component";
import CreateTraining from "./components/create-training.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <br />
        <Route path='/' exact component={TrainingList} />
        <Route path='/edit/:id' component={EditTraining} />
        <Route path='/create' component={CreateTraining} />
        <Route path='/user' component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
