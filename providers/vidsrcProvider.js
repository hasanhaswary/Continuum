module.exports = {

    name: "VidSrc",

    supportsMovie() {
        return true;
    },

    supportsSeries() {
        return true;
    },

    async getMovieStreams(imdbId) {

        return [
            {
                name: "VidSrc",
                title: "VidSrc",
                externalUrl:
                    `https://vidsrc.xyz/embed/movie/${imdbId}`
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
                name: "VidSrc",
                title: "VidSrc",
                externalUrl:
                    `https://vidsrc.xyz/embed/tv/${imdbId}/${season}/${episode}`
            }
        ];
    }
};