import { createSlice } from '@reduxjs/toolkit';
import { LIVE_MESSAGE_SPLICE } from '../constants';

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.splice(LIVE_MESSAGE_SPLICE, 1);
            state.messages.unshift(action.payload);
        },
    },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
