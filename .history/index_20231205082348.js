const store = require("./rtk/app/store");
const { fetchVideo } = require("./rtk/features/videos/fetchVideo");

var loaded = false;
store.subscribe(() => {
    const videoInfo = store.getState().video;
    console.log("Fuck", videoInfo)

})

// dispatch action
store.dispatch(fetchVideo())