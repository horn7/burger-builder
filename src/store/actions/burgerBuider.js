import * as actionTypes from './actionTypes';
import axios from '../../axios-order';

export const addIngredient = name => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}

export const removeIngredient = name => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

export const setIngredient = ingredients => {
    return {
        type: actionTypes.SET_INGREDIENT,
        ingredients: ingredients
    }
}

export const fetchIngredientFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENT_FAILED,
        error: true
    }
} 

export const initIngredient = () => {
    return dispach => {
        axios.get('https://burger-app-25f89.firebaseio.com/ingredients.json')
            .then(response => {
                dispach(setIngredient(response.data))
            }).catch(response => {
                dispach(fetchIngredientFailed())
            })
    }
}

