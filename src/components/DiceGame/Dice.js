import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dice extends Component {
    render() {
        const { arrDice, total } = this.props;
        return (
            <div className="container mt-5">
                <div className="row text-center">
                    <div className="col-4 ">
                        <button
                            className="bg-danger" style={{ border: 'none' }}
                            onClick={() => this.props.choice('TAI')}
                        >
                            <div className="p-5 bg-danger text-white w-100 h-100" style={{ fontSize: 50 }}>TÀI</div>
                        </button>
                    </div>
                    <div className="col-4 align-self-center">
                        {arrDice.map((item, index) => {
                            return <img key={index} src={item.image} alt="{item}" style={{ width: '30%' }} />
                        })}
                        <h3>Result: {total >= 11 ? `${total} - TAI` : `${total} - XIU`}</h3>
                    </div>
                    <div className="col-4">
                        <button
                            className="bg-dark" style={{ border: 'none' }}
                            onClick={() => this.props.choice('XIU')}
                        >
                            <div className="p-5 bg-dark text-white w-100 h-100" style={{ fontSize: 50 }}>XỈU</div>
                        </button>
                    </div>
                </div>

            </div>
        )
    }
};
const mapStateToProps = (state) => {
    return {
        arrDice: state.diceReducer.arrDice,
        total: state.diceReducer.totalPoint,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        choice: (value) => {
            dispatch({ type: 'PLAYER_CHOOSE', payload: value });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dice);
