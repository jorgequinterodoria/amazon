
export const initialState = {
    basket: [],
    user: null,
}

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0)


export const actionTypes = {
    SET_BASKET: "ADD_TO_BASKET",
    REMOVE_BASKET: "REMOVE_TO_BASKET",
    SET_USER: "SET_USER",
    EMPTY_BASKET: "EMPTY_BASKET",
}

const reducer = (state, action) => {

    switch (action.type) {
        case actionTypes.EMPTY_BASKET:
            return {
                ...state,
                basket: [],
            }
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            }
        case actionTypes.SET_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        case actionTypes.REMOVE_BASKET:
            let newBasket = [...state.basket]
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id)
            if (index >= 0) {
                newBasket.splice(index, 1)
            }
            else {
            }
            return {
                ...state,
                basket: newBasket,
            }
        default:
            return state;
    }
}

export default reducer