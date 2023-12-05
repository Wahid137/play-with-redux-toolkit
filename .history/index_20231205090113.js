const store = require("./rtk/app/store")
const { fetchVideo, fetchRelatedVideos } = require("./rtk/features/videos/fetchVideo");


const fetchMoreVideos = () => {
    console.log("Click")
    // const tags = store.getState().video.videos?.tags;
    // let str = "";
    // tags &&
    //     tags.forEach((element) => {
    //         str += `tags_like=${element}&`;
    //     });
    // str = str.substring(0, str.length - 1);
    // tags && store.dispatch(fetchRelatedVideos(str));
};


store.subscribe(() => {
    const videoInfo = store.getState().video;
    console.log("ok", videoInfo.objectLoaded)

    if (videoInfo.objectLoaded) {
        fetchMoreVideos();
    }
});

store.dispatch(fetchVideo());