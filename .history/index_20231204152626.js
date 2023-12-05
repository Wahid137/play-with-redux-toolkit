const store = require("./rtk/app/store");
const { fetchPosts } = require("./rtk/features/posts/postSlice");

store.subscribe(() => {

})

// dispatch action
store.dispatch(fetchPosts())