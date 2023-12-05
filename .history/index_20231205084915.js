const store = require("./rtk/app/store")
const { fetchVideo, fetchRelatedVideos } = require("./rtk/features/videos/fetchVideo");


/* const fetchMoreVideos = () => {
    const tags = store.getState().video.videos?.tags;
    let str = "";
    tags &&
        tags.forEach((element) => {
            str += `tags_like=${element}&`;
        });
    str = str.substring(0, str.length - 1);
    tags && store.dispatch(fetchRelatedVideos(str));
}; */

var loaded = false;
store.subscribe(() => {
    // const videoInfo = store.getState().video;
    // console.log("ok", videoInfo)

    /*  if (!loaded && videoInfo.objectLoaded) {
         loaded = true;
         fetchMoreVideos();
     } */
});

store.dispatch(fetchVideo());