const { createAsyncThunk } = require("@reduxjs/toolkit");
const { default: fetch } = require("node-fetch");



const fetchRelatedVideos = createAsyncThunk(
    "video/fetchRelatedVideos",
    async (queryText) => {
        const res = await fetch(`http://localhost:9000/videos?${queryText}`);
        const data = await res.json();

        //   data.sort((a, b) => {
        //     const viewsA = parseFloat(a.views);
        //     const viewsB = parseFloat(b.views);

        //     if (viewsA > viewsB) {
        //       return -1;
        //     } else if (viewsA < viewsB) {
        //       return 1;
        //     } else {
        //       return 0;
        //     }
        //   });

        return data;
    }
);

// create async post
const fetchVideo = createAsyncThunk("video/fetchVideo", async () => {
    const response = await fetch("http://localhost:9000/videos");
    const video = await response.json();
    return video;
});

module.exports.fetchVideo = fetchVideo;
module.exports.fetchRelatedVideos = fetchRelatedVideos;