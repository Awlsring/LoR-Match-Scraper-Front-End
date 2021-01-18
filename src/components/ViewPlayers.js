import React, { Component } from 'react'
import '../App.css';

class ViewPlayers extends Component {
    constructor() {
        super();
        this.endpoint = 'https://fyzfuje068.execute-api.us-west-2.amazonaws.com/prod'
        this.resource = '/getPlayerEntries'

        this.state = {
            loading: true,
            results: null
        }
    }

    async componentDidMount() {
        const url = `${this.endpoint}${this.resource}`
        const response = await fetch(url)
        const data = await response.json()
        this.setState({
            results: data,
            loading: false
        })

        console.log(data)
    }
    
    render() {
        return (
            <div>
                <h2>Players</h2>
                <p>*History updated every hour*</p>
                {this.state.loading || !this.state.results ? (
                <div>loading...</div>
                 ) : (
                 <ul className="list-group">
                     {this.state.results.map(player => (
                         <li className="list-item">
                             {player["player_name"]}: Wins: {player["wins"]} - Losses {player["losses"]} | WR: {(100 * (player["wins"]/(player["losses"] + player["wins"]))).toFixed(2)}%
                         </li>
                     ))}
                 </ul>
                 )}
            </div>
        )
    }
}

export default ViewPlayers;