const { configureStore } = require("@reduxjs/toolkit");
const { createLogger } = require("redux-logger");

const logger = createLogger();

const store = configureStore({
    reducer: {
        posts: PostReducer
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
})

module.exports = store