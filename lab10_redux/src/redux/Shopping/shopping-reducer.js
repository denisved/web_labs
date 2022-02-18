import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
        brand: "Mercedes", 
        fuelConsumption: "1.9", 
        id: 1, 
        maxSpeed: "200 km/hour", 
        model: "AMG", 
        price: 30000, 
        year: "2021"
    },
    {
        brand: "BMW", 
        fuelConsumption: "1.5", 
        id: 2, 
        maxSpeed: "225 km/hour", 
        model: "M5", 
        price: 25000,
        year: "2020"
    }
],
  cart: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            const item = state.products.find(prod => prod.id === action.payload.id)
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)
            return {
                ...state,
                cart: inCart 
                ? state.cart.map(item => item.id === action.payload.id ? {...item, qty: item.qty + 1} : item) 
                : [...state.cart, {...item, qty: 1}],
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            };
        case actionTypes.ADJUST_ITEM_QTY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: action.payload.qty} : item)
            }
        default:
            return state
    }
};

export default shopReducer;