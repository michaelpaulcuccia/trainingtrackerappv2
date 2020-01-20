import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class CreateTraining extends Component {
    constructor(props) {
        super(props);

        //binds 'this' to each method 
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeInstructional = this.onChangeUsername.bind(this);
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
        axios.get('/users/')
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        users: res.data.map(user => user.username),
                        username: res.data[0].username
                    })
                }
            })
    }

    onChangeUsername(event) {
        this.setState({
            username: event.target.value
        });
    }

    onChangeType(event) {
        this.setState({
            type: event.target.value
        });
    }

    handleCheck = (event, clickCheckbox) => {
        this.setState({ instructional: clickCheckbox ? event.target.checked : event.target.value });
    };

    handleCheckTwo = (event, clickCheckbox) => {
        this.setState({ openmat: clickCheckbox ? event.target.checked : event.target.value });
    };

    onChangeInstructional() {
        this.setState({
            instructional: true
        });
    }

    onChangeOpenmat() {
        this.setState({
            openmat: true
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

        axios.post('/training/add', training)
            .then(res => console.log(res.data));

        //after you submit training, refreshes page
        window.location = '/';

    }



    render() {
        return (
            <div>
                <h3>Create New Training Log</h3>
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
                        <label>Description (technique, rounds, etc.): </label>
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
                            // onChange={this.onChangeInstructional}
                            onChange={event => this.handleCheck(event, 'instructional', true)}
                        />
                    </div>

                    <div className="form-group">
                        <div className="form-group">
                            <label>Open Mat </label>
                            <input
                                type="checkbox"
                                className="form-control"
                                value={this.state.openmat}
                                // onChange={this.onChangeOpenmat}
                                onChange={event => this.handleCheckTwo(event, 'openmat', true)}
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
                        <input type="submit" value="Create Training Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}