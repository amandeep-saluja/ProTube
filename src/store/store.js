import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import videoInfoSlice from './videoInfoSlice';

const store = configureStore({
    reducer: {
        app: appSlice,
        videoInfo: videoInfoSlice,
    },
});

export default store;
