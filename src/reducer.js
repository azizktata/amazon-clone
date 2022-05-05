

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
        case "Remove_From_Basket":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id=== action.id
            );
            let newBasket = [...state.basket]
            if(index>=0)
            {
                newBasket.splice(index,1)
            }

            return {
                 ...state,
                basket:newBasket
            }
            
        default:
            return state;
    }
}
export default reducer;