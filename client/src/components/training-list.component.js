import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Training = props => (
  <tr>
    <td>{props.training.username}</td> 
    <td>{props.training.type}</td>
    <td>{props.training.instructional ? 'Yes' : 'No' }</td>
    <td>{props.training.openmat ? 'Yes' : 'No' }</td>
    <td>{props.training.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/" + props.training._id}>edit</Link> | <a href="#" onClick={() => { props.deleteTraining(props.training._id) }}>delete</a>
    </td>
  </tr>
)

export default class TrainingList extends Component {
  constructor(props) {
    super(props);

    this.deleteTraining = this.deleteTraining.bind(this)

    this.state = {training: []};
  }

  componentDidMount() {
    axios.get('/training/')
      .then(response => {
        this.setState({ training: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteTraining(id) {
    axios.delete('/training/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      training: this.state.training.filter(el => el._id !== id)
    })
  }

  trainingList() {
    return this.state.training.map(currenttraining => {
      return <Training training={currenttraining} deleteTraining={this.deleteTraining} key={currenttraining._id}/>;
    })
  }

 
  render() {
    return (
      <div>
        <h3>Logged Training</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Training Details</th>
              <th>Class</th>
              <th>Open Mat</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            { this.trainingList() }
          </tbody>
        </table>
      </div>
    )
  }
}