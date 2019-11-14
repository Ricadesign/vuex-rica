import * as cart from "./cart";
export const RETRIEVE_ITEMS_ACTION = 'retrieveItems';
export const ADD_ITEM_CART_ACTION = 'addItemToCart';
export const REMOVE_ITEM_CART_ACTION = 'removeItemToCart';
export const UPDATE_ITEM_CART_ACTION = 'updateItemCart';
export const INCREASE_ITEM_CART_ACTION = 'increaseItemCart';
export const DECREASE_ITEM_CART_ACTION = 'decreaseItemCart';

export const actions = {
    [RETRIEVE_ITEMS_ACTION](context){
        cart.getItems().then(res => res.data)
            .then(items => {
                return Object.keys(items).map((key) => items[key]);
            }).then(items => {
            context.commit('retrieveItems', items);
        });
    },
    [ADD_ITEM_CART_ACTION](context, item){
        cart.addItem(item).then(() => {
            context.commit('addItemToCart', item);
        });
    },
    [REMOVE_ITEM_CART_ACTION](context, id){
        cart.removeItem(id).then(() => {
            context.commit('removeItemToCart', id);
        });
    },
    [UPDATE_ITEM_CART_ACTION](context, payload){
        cart.updateItemQuantity(payload.id, payload.quantity).then(() => {
            context.commit('updateItemCart', payload.id, payload.quantity);
        })
    },
    [INCREASE_ITEM_CART_ACTION](context, id){
        cart.increaseItem(id).then(() => {
            context.commit('increaseItemCart', id);
        })
    },
    [DECREASE_ITEM_CART_ACTION](context, id){
        cart.decreaseItem(id).then(() => {
            context.commit('decreaseItemCart', id);
        })
    },
}