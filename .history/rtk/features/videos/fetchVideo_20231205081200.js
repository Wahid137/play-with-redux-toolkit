const { createAsyncThunk } = require("@reduxjs/toolkit");
const { default: fetch } = require("node-fetch");



const fetchRelatedVideos = createAsyncThunk("video/fetchRelatedVideos", async (queryText) => {
    const response = await fetch(`http://localhost:9000/videos?${queryText}`);
    const video = await response.json();


    return video;
})
// create async post
const fetchVideo = createAsyncThunk("video/fetchVideo", async () => {
    const response = await fetch("http://localhost:9000/videos");
    const video = await response.json();
    return video;
});

module.exports.fetchVideo = fetchVideo;