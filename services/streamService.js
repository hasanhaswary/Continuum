const providers = require("../providers");

async function getStreams({ type, imdbId, season, episode }) {

    const streams = [];

    for (const provider of providers) {

        try {

            let result = [];

            if (type === "movie" && provider.supportsMovie()) {

                result = await provider.getMovieStreams(imdbId);
            }

            if (type === "series" && provider.supportsSeries()) {

                result = await provider.getEpisodeStreams(
                    imdbId,
                    season,
                    episode
                );
            }

            // IMPORTANT: push only stream objects
            if (Array.isArray(result)) {
                streams.push(...result);
            }

        } catch (err) {
            console.error(`${provider.name} failed`, err.message);
        }
    }

    return streams;
}

module.exports = {
    getStreams
};