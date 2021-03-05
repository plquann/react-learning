import React, { Component } from 'react'

export default class GameState extends Component {
    render() {
        return (
            <div className="container text-center mt-5">
                <div className="display-4">
                    Chosen: <span className="text-success">TAI</span>
                </div>
                <div className="display-4">
                    Goals: <span className="text-warning">5</span>
                </div>
                <div className="display-4">
                    Rounds: <span className="text-primary">10</span>
                </div>

            </div>
        )
    }
}
