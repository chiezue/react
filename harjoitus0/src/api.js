import axios from "axios";

const BASE_URL = "http://localhost:3001/items";

export const getAllItems = () => axios.get(BASE_URL);

export const getItem = (id) => axios.get(`${BASE_URL}/${id}`);

export const addItem = (item) => axios.post(BASE_URL, item);

export const updateItem = (id, item) => axios.put(`${BASE_URL}/${id}`, item);

export const deleteItem = (id) => axios.delete(`${BASE_URL}/${id}`);
