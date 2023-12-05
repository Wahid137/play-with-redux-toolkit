const store = require("./rtk/app/store")
const { fetchVideo, fetchRelatedVideos } = require("./rtk/features/videos/fetchVideo");


const fetchMoreVideos = () => {

    const tags = store.getState().video.videos?.tags;

    let str = "";
    tags &&
        tags.forEach((element) => {
            str += `tags_like=${element}&`;
        });
    str = str.substring(0, str.length - 1);
    tags && store.dispatch(fetchRelatedVideos(str));
};


store.subscribe(() => {
    const videoInfo = store.getState().video;

    var loaded = false;
    if (!loaded && videoInfo.objectLoaded) {
        loaded = false
        fetchMoreVideos();
    }
});

store.dispatch(fetchVideo());