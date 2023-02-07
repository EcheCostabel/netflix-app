import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/UserSlice'
import priceReducer from '../features/PriceSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        price: priceReducer,
    }
})