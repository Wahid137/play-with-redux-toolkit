const { createSlice } = require("@reduxjs/toolkit")
const { default: fetch } = require("node-fetch")
const fetchVideo = require("./fetchVideo")
const fetchRelatedVideo = require("./fetchVideo")


const initialState = {
    loading: false,
    videos: [],
    error: "",
    isObjectLoaded: false,
}


const videoSlice = createSlice({
    name: 'video',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchVideo.pending, (state, action) => {
            state.loading = true;
            state.error = "";
            state.videos = [];

        })

        builder.addCase(fetchVideo.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            state.videos = action.payload;
            isObjectLoaded = true;
        })

        builder.addCase(fetchVideo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.videos = [];

        })
        builder.addCase(fetchRelatedVideo.pending, (state, action) => {
            state.loading = true;
            state.error = "";
            state.videos = [];
            state.isObjectLoaded = false;


        })

        builder.addCase(fetchRelatedVideo.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            state.videos = action.payload;
            state.isObjectLoaded = false;
        })

        builder.addCase(fetchRelatedVideo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.videos = [];
            state.isObjectLoaded = false;

        })
    }
})

module.exports = videoSlice.reducer;
module.exports.videoSliceActions = videoSlice.actions;
