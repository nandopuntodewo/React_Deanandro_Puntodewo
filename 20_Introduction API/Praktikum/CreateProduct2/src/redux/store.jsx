// redux/store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // Buat file reducer sesuai kebutuhan Anda

const store = createStore(rootReducer);

export default store;
