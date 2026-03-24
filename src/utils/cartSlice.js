import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // older version of redux. It doesn't allow to mutate the state.
            // It will not work in redux-toolkit
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;

            // This works in redux-toolkit. But not needed here.
            // const newState = {
            //     ...state,
            //     items: [...state.items, action.payload]
            // };
            // return newState;

            // here, we HAVE to mutate the state

            //this wont work, we cannot read the log correctly
            // console.log(state);

            //this will log the message
            // console.log(current(state));
            state.items?.push(action.payload)
        },
        removeItem: (state) => {
            state.items?.pop();
        },
        clearCart: (state) => {
            if (state.items) {
                //RTK - either Mutate the existing state or return a new state (like below return)
                state.items.length = 0; // state = []

                //or
                // return { items: [] }; // this new object will be replaced inside originalState = []
            }
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
