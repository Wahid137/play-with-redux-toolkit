const store = require("./rtk/app/store");
const { fetchVideo } = require("./rtk/features/videos/fetchVideo");

store.subscribe(() => {
    const videoInfo = store.getState().video;
    console.log(videoInfo)

})

// dispatch action
store.dispatch(fetchVideo())