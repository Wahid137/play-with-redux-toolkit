const { createSlice } = require("@reduxjs/toolkit");
const { fetchVideo, fetchRelatedVideos } = require("./fetchVideo");
// const { fetchVideos } = require("./thunk");

const initialState = {
    loading: false,
    videos: [],
    error: "",
    objectLoaded: false,
};

const videoSlice = createSlice({
    name: "video",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchVideo.pending, (state, action) => {
            state.loading = true;
            state.error = "";
            state.videos = [];
        });

        builder.addCase(fetchVideo.fulfilled, (state, action) => {
            state.loading = false;
            state.videos = action.payload;
            state.error = "";
            state.objectLoaded = true;
        });

        builder.addCase(fetchVideo.rejected, (state, action) => {
            state.loading = false;
            state.videos = [];
            state.error = action.error.message;
        });

        // /*   builder.addCase(fetchRelatedVideos.pending, (state, action) => {
        //       state.loading = true;
        //       state.error = "";
        //       state.videos = [];
        //       state.objectLoaded = false;
        //   });

        //   builder.addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        //       state.loading = false;
        //       state.videos = action.payload;
        //       state.error = "";
        //       state.objectLoaded = false;
        //   });

        //   builder.addCase(fetchRelatedVideos.rejected, (state, action) => {
        //       state.loading = false;
        //       state.videos = [];
        //       state.error = action.error.message;
        //       state.objectLoaded = false;
        //   }); */
    },
});

module.exports = videoSlice.reducer;
module.exports.videoSliceActions = videoSlice.actions;