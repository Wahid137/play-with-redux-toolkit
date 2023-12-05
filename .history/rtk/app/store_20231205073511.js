const { configureStore } = require("@reduxjs/toolkit");
const { createLogger } = require("redux-logger");
const { videoReducer } = require("../features/videos/fetchVideo");

const logger = createLogger();

const store = configureStore({
    reducer: {
        videos: 
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
})

module.exports = store