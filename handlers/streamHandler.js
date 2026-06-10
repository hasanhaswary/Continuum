const {
    parseStremioId
} = require("../utils/parseStremioId");

const {
    getStreams
} = require("../services/streamService");

async function handleStreamRequest(
    type,
    id
) {

    try {

        const {
            imdbId,
            season,
            episode
        } = parseStremioId(id);

        const streams =
            await getStreams({
                type,
                imdbId,
                season,
                episode
            });

        return {
            streams
        };

    } catch (error) {

        console.error(error);

        return {
            streams: []
        };
    }
}

module.exports = {
    handleStreamRequest
};