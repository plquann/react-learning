const initialState = {
    chosen: 'TAI',
    goals: 0,
    rounds: 0,
    totalPoint: 0,
    arrDice: [
        { point: 1, image: './img/1.png' },
        { point: 1, image: './img/1.png' },
        { point: 1, image: './img/1.png' },
    ],
};

export const diceReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PLAYER_CHOOSE': {
            state.chosen = action.payload;

            return { ...state };
        }
        case 'PLAY_GAME': {
            let arrDiceRandom = [];
            for (let i = 0; i < 3; i++) {
                let rand = Math.floor(Math.random() * 6) + 1;
                arrDiceRandom = [...arrDiceRandom, { point: rand, image: `./img/${rand}.png` }];
            };
            state.arrDice = arrDiceRandom;

            const totalPoint = arrDiceRandom.reduce((sum, item, index) => {
                return sum += item.point;
            }, 0);

            if ((totalPoint >= 11 && state.chosen === 'TAI') || (totalPoint < 11 && state.chosen === 'XIU'))
                state.goals += 1;

            state.rounds += 1;

            return { ...state, totalPoint:totalPoint };
        }
        default:
            return { ...state };
    }
}