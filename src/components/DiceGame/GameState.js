import React, { Component } from 'react'
import {connect } from 'react-redux';

class GameState extends Component {
    render() {
        const {stateGame} = this.props;
        return (
            <div className="container text-center mt-5">
                <div className="display-4">
                    Chosen: <span className="text-success">{stateGame.chosen}</span>
                </div>
                <div className="display-4">
                    Goals: <span className="text-warning">{stateGame.goals}</span>
                </div>
                <div className="display-4">
                    Rounds: <span className="text-primary">{stateGame.rounds}</span>
                </div>
                <div className="display-4">
                    <button  
                        className="btn btn-success p-3"
                        onClick={() => this.props.dispatch({type: 'PLAY_GAME'})}
                        >Play Game</button>
                </div>
            </div>
        )
    }
};
const mapStateToProps = (state) => { //root Reducer
    return {
        stateGame: state.diceReducer,
    };
};



export default  connect(mapStateToProps)(GameState);
