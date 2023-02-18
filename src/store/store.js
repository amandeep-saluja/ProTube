import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import videoInfoSlice from './videoInfoSlice';
import chatSlice from './chatSlice';

const store = configureStore({
    reducer: {
        app: appSlice,
        videoInfo: videoInfoSlice,
        chat: chatSlice,
    },
});

export default store;
