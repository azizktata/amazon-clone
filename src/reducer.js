

export const initialState = {
    basket:[]
}

export const getBasketTotal = (basket)=>
basket?.reduce((amount, item)=> parseFloat(item.price) + amount, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case "Add_To_Basket":
            return {
                ...state,
                basket:[...state.basket, action.item]
            };
        default:
            return state;
    }
}
export default reducer;