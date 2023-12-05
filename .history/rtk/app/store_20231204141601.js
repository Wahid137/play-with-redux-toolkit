const { configureStore } = require("@reduxjs/toolkit");
const { createLogger } = require("redux-logger")

const store = configureStore({
    reducer: {
        posts: PostReducer
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
})

module.exports = store