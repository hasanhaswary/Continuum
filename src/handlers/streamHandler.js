const {
    parseStremioId
} = require("../utils/parseStremioId");

function buildVidfastUrl(type, imdbId, season, episode) {

    if (type === "movie") {
        return `https://vidfast.pro/movie/${imdbId}?autoPlay=true`;
    }

    return `https://vidfast.pro/tv/${imdbId}/${season}/${episode}?autoPlay=true`;
}

async function handleStreamRequest(type, id) {

    try {

        const {
            imdbId,
            season,
            episode
        } = parseStremioId(id);

        const url = buildVidfastUrl(
            type,
            imdbId,
            season,
            episode
        );

        return {
            streams: [
                {
                    title: "▶ VidFast",
                    externalUrl: url
                }
            ]
        };

    } catch (error) {

        console.error("Stream error:", error);

        return {
            streams: []
        };
    }
}

module.exports = {
    handleStreamRequest
};