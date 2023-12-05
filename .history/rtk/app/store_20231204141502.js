const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        posts: PostReducer
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
})