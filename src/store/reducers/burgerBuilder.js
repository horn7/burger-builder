import * as actionTypes from '../actions/actionTypes';

const initalState = {
    ingredients: null,
    totalPrice: 4,
    error: false
};

const INGREDIENTS_PRICE = {
    salad: 0.4,
    bacon: 1.2,
    cheese: 0.6,
    meat: 3
};

const reducer = (state = initalState, action) => {
    switch(action.type){
        case actionTypes.ADD_INGREDIENT: 
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENTS_PRICE[action.ingredientName]
            };
        case actionTypes.REMOVE_INGREDIENT: 
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENTS_PRICE[action.ingredientName]
            };
        case actionTypes.SET_INGREDIENT: 
            return {
                ...state,
                ingredients: action.ingredients,
                totalPrice: 4
            };
        case actionTypes.FETCH_INGREDIENT_FAILED:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
};

export default reducer;