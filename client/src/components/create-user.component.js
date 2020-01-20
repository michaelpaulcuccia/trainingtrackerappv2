import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        //binds 'this' to each method 
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
        }
    }

    onChangeUsername(event) {
        this.setState({
            username: event.target.value
        });
    }

    onSubmit(event) {
        event.preventDefault();

        const user = {
            username: this.state.username,
        }

        console.log(user)

        axios.post('/users/add', user)
            .then(res => console.log(res.data));

        //after you submit user, will keep you on the same page/route to add more users
        // this.setState({
        //     user: ''
        // })

        //after you submit training, refreshes page
        window.location = '/create';
    }

    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}