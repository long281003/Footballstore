import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

// export interface CartState {
//     cartItems: CartItem[];

// }

// const initialState: CartState = {
//     cartItems: []
// }

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalPrice: 0
    },
    reducers: {
        add(state: any, action) {
            // state.item.push(action.payload)
            const { id, image, name, price } = action.payload;
            const itemIndex = state.items.findIndex((item: any) => item.id === id);
            if (itemIndex !== -1) {
                state.items[itemIndex].quantity += 1;
            } else {
                state.items.push({ id, image, name, price, quantity: 1 });
            }
            state.totalPrice += price;
        },
        remove(state: any, action) {
            const { id, price, quantity } = action.payload;
            state.items = state.items.filter((item: any) => item.id !== id);
            state.totalPrice -= price * quantity;
        },
        increaseQuantity(state: any, action) {
            state.value += 1;
        },
        decreaseQuantity(state: any, action) {
            state.value -= 1;
        },
        updateQuantity: (state: any, action) => {
            const { id, quantity } = action.payload;
            const itemIndex = state.items.findIndex((item: any) => item.id === id);
            state.items[itemIndex].quantity = quantity;
        },
        clearBasket: (state) => {
            state.items = [];
            state.totalPrice = 0;
        },
        updateTotalPrice: (state, action) => {
            state.totalPrice += action.payload;
        },


        // increment: (state, action: PayloadAction<Product>) => {
        //     const item = state.cartItems.find(
        //         (el) => el.product.id === action.payload.id
        //     );
        //     if (item) item.quantity;
        //     else {
        //         state.cartItems.push({
        //             product: action.payload,
        //             quantity: 1,
        //         });
        //     }
        // },
        // decrement: (state, action: PayloadAction<Product>) => {
        //     const item = state.cartItems.find(
        //         (el) => el.product.id = action.payload.id
        //     );
        //     if (item) item.quantity--;
        //     if (item?.quantity === 0) {
        //         state.cartItems = state.cartItems.filter(
        //             (el) => el.product.id = action.payload.id
        //         );
        //     }
        // }
    },
})

// const cartItems = (state: RootState) => state.cart.cartItems;
// const totalCartItemSelector = createSelector([cartItems], (cartItems) =>
//     cartItems.reduce((total: number, curr: CartItem) =>
//         total += curr.quantity, 0))

// export const totalPriceSelector = createSelector([cartItems], (cartItems) =>
//     cartItems.reduce((total: number, curr: CartItem) =>
//         (total += curr.quantity * curr.product.price), 0))

// export const productQtySelector = createSelector([cartItems, (cartItems, productId: number) => productId],
//     (cartItems, productId) => cartItems.find((el) => el.product.id === productId)?.quantity)

// export const { increment, decrement } = cartSlice.actions;
export const { add, remove, increaseQuantity,
    decreaseQuantity, updateQuantity, clearBasket, updateTotalPrice } = cartSlice.actions;

export default cartSlice.reducer