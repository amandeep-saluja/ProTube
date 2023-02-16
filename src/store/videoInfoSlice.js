import { createSlice } from '@reduxjs/toolkit';

const videoInfoSlice = createSlice({
    name: 'videoInfo',
    initialState: {
        videoInfo: {},
    },
    reducers: {
        addVideoInfo: (state, action) => {
            const id = action.payload.id;

            if (state.videoInfo[id]) {
                state.videoInfo[id] = action.payload.channelLogoUrl;
            } else if (action.payload.channelLogoUrl) {
                state.videoInfo[id] = action.payload.channelLogoUrl;
            }
        },
    },
});

export const { addVideoInfo } = videoInfoSlice.actions;
export default videoInfoSlice.reducer;
