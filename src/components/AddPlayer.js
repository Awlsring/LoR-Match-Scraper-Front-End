import React, { Component } from 'react'
import '../App.css';

class AddPlayer extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.endpoint = 'https://fyzfuje068.execute-api.us-west-2.amazonaws.com/prod'
        this.resource = '/AddPlayer'
        this.state = {
            responseText: ""
        }
    }
    
    handleSubmit(event) {
    event.preventDefault();

    if (!event.target.checkValidity()) {
        this.setState({
            responseText: "Both username and region tag are required."
        })
        return
    }

    this.setState({
        responseText: "checking.."
    })

    const data = new FormData(event.target);

    const username = `username=${data.get("username")}`
    const region = `region=${data.get("tag")}`

    const url = `${this.endpoint}${this.resource}?${username}&${region}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                responseText: data
            })
        })
    }

    render() {
        return (
            <form noValidate onSubmit={this.handleSubmit}>
                <h2>Add Player</h2>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Your in game name"
                    required/>

                <label htmlFor="tag">Region Tag</label>
                <input
                    id="tag"
                    name="tag"
                    type="text"
                    placeholder="ex. NA1" 
                    required/>
                <button>Submit</button>

                <p>{this.state.responseText}</p>
            </form>
        );
    }
}

export default AddPlayer;
