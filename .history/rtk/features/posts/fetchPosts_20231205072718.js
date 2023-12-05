const { createAsyncThunk } = require("@reduxjs/toolkit");
const { default: fetch } = require("node-fetch");

// create async post
const fetchVideo = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await fetch("http://localhost:9000/videos");
    const posts = await response.json();
    return posts;
});

module.exports = fetchVideo;