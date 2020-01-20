import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditTraining extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeInstructional = this.onChangeInstructional.bind(this);
        this.onChangeOpenmat = this.onChangeOpenmat.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            type: '',
            instructional: false,
            openmat: false,
            date: new Date(),
            users: []
        }
    }


    componentDidMount() {
        axios.get('/training/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    username: response.data.username,
                    type: response.data.type,
                    instructional: response.data.instructional,
                    openmat: response.data.openmat,
                    date: new Date(response.data.date)
                })
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('/users/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.username),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    onChangeUsername(event) {
        this.setState({
            username: event.target.value
        })
    }

    onChangeType(event) {
        this.setState({
            type: event.target.value
        })
    }

    onChangeInstructional() {
        this.setState({
            instructional: false
        });
    }

    onChangeOpenmat() {
        this.setState({
            openmat: false
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        })
    }


    onSubmit(event) {
        event.preventDefault();

        const training = {
            username: this.state.username,
            type: this.state.type,
            instructional: this.state.instructional,
            openmat: this.state.openmat,
            date: this.state.date
        }

        console.log(training);

        axios.post('/training/update/' + this.props.match.params.id, training)
            .then(res => console.log(res.data));

        window.location = '/';
    }



    render() {
        return (
            <div>
                <h3>Edit Training Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function (user) {
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                    </option>;
                                })
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Type: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.type}
                            onChange={this.onChangeType}
                        />
                    </div>

                    <div className="form-group">
                        <label>Instructional </label>
                        <input
                            type="checkbox"
                            className="form-control"
                            value={this.state.instructional}
                            onChange={this.onChangeInstructional}
                        />
                    </div>

                    <div className="form-group">
                        <div className="form-group">
                            <label>Open Mat </label>
                            <input
                                type="checkbox"
                                className="form-control"
                                value={this.state.openmat}
                                onChange={this.onChangeOpenmat}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Edit Training Log" className="btn btn-primary" />
                    </div>
                </form>

            </div>
        )
    }
    
}

