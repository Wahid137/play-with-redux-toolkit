const { createAsyncThunk } = require("@reduxjs/toolkit");
const { default: fetch } = require("node-fetch");

// create async post
const fetchPosts = () => {
    createAsyncThunk("posts/fetchPosts", async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users?_limit=5");
        const posts = await response.json();
        return posts;
    });
}

module.exports = fetchPosts;