const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit")
const { default: fetch } = require("node-fetch")
const fetchVideo = require("./fetchVideo")


const initialState = {
    loading: false,
    video: [],
    error: "",
}


const videoSlice = createSlice({
    name: 'video',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchVideo.pending, (state, action) => {
            state.loading = true;
            state.error = ""

        })

        builder.addCase(fetchVideo.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            state.posts = action.payload
        })

        builder.addCase(fetchVideo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.posts = [];

        })
    }
})

module.exports = videoSlice.reducer;
module.exports.videoSliceActions = videoSlice.actions;
