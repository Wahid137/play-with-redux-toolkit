const store = require("./rtk/app/store");
const { fetchVideo } = require("./rtk/features/videos/fetchVideo");

store.subscribe(() => {

})

// dispatch action
store.dispatch(fetchVideo())