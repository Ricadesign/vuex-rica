import axios from "axios";
const uri = '/api/cart';
export const addItem = item => axios.post(uri, item);
export const getItems = () => axios.get(uri);
export const removeItem = id => axios.delete(uri, {id});
export const updateItemQuantity = (id, quantity) => axios.put(uri, {id,quantity});
export const increaseItem = id => axios.put(`${uri}/increment`, {id, quantity:1});
export const decreaseItem = id => axios.put(`${uri}/increment`, {id, quantity:-1});