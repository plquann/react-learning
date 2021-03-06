const initialState = {
    cart: [
        // { code: 1, name: 'Iphone', price: 1000, image: './img/applePhone.jpg', quantity: 1 }
    ]
}

export const cartReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case 'ADD_TO_CART': {
            const index = state.cart.findIndex((itemCart) => itemCart.code === payload.code);
            if (index !== -1)
                return {
                    ...state, cart: state.cart.map((itemCart, pos) =>
                        index === pos ? { ...itemCart, quantity: itemCart.quantity + 1 } : itemCart)
                };

            return {
                ...state,
                cart: [...state.cart, payload]
            };
        }
        case 'DELETE_CART': {
            return {
                ...state,
                cart: state.cart.filter(itemCart => itemCart.code !== payload),
            };
        }
        case 'CHANGE_QUANTITY': {
            const index = state.cart.findIndex((itemCart) =>
                itemCart.code === payload.code);

            if (state.cart[index].quantity + payload.count === 0) {
                return {
                    ...state,
                    cart: state.cart.filter(itemCart => itemCart.code !== payload.code),
                }
            }
            return {
                ...state,
                cart: state.cart.map((itemCart) =>
                    itemCart.code === payload.code ? { ...itemCart, quantity: itemCart.quantity + payload.count } : itemCart)
            };
        }
        default:
            return { ...state };
    }
}

