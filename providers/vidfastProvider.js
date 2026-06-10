module.exports = {

    name: "VidFast",

    supportsMovie() {
        return true;
    },

    supportsSeries() {
        return true;
    },

    async getMovieStreams(imdbId) {

        return [
            {
                name: "VidFast",
                title: "VidFast",
                externalUrl:
                    `https://vidfast.pro/movie/${imdbId}?autoPlay=true`
            }
        ];
    },

    async getEpisodeStreams(
        imdbId,
        season,
        episode
    ) {

        return [
            {
                name: "VidFast",
                title: `VidFast S${season}E${episode}`,
                externalUrl:
                    `https://vidfast.pro/tv/${imdbId}/${season}/${episode}?autoPlay=true`
            }
        ];
    }
};