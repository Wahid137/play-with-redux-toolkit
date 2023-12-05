const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit")
const { default: fetch } = require("node-fetch")


const initialState = {
    loading: false,
    posts: [],
    error: "",
}

// create async post
const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users?_limit=5");
    const posts = await response.json();
    return posts;
});

const postSlice = createSlice({
    name: 'post',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.loading = true;
            state.error = ""

        })

        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            state.posts = action.payload

        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.posts = [];

        })
    }
})

module.exports = postSlice.reducer;
module.exports.fetchPosts = fetchPosts;
