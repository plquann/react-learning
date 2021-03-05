import React, { Component } from 'react';
import Dice from './Dice';
import GameState from './GameState';
import './DiceGame.css';

export default class DiceGame extends Component {
    render() {
        return (
            <div className="bgDiceGame">
                <h1 className="text-center mt-3">DICE GAME</h1>
                <Dice/>
                <GameState/>
            </div>
        )
    }
}
