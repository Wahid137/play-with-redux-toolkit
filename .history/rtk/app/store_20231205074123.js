const { configureStore } = require("@reduxjs/toolkit");
const { createLogger } = require("redux-logger");
const { videoReducer } = require("../features/videos/videoSlice");

const logger = createLogger();

const store = configureStore({
    reducer: {
        videos: videoReducer
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
})

module.exports = store