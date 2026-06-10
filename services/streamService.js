const providers =
    require("../providers");

async function getStreams({
    type,
    imdbId,
    season,
    episode
}) {

    const streams = [];

    for (const provider of providers) {

        try {

            let providerStreams = [];

            if (
                type === "movie" &&
                provider.supportsMovie()
            ) {

                providerStreams =
                    await provider.getMovieStreams(
                        imdbId
                    );
            }

            if (
                type === "series" &&
                provider.supportsSeries()
            ) {

                providerStreams =
                    await provider.getEpisodeStreams(
                        imdbId,
                        season,
                        episode
                    );
            }

            streams.push(
                ...providerStreams
            );

        } catch (error) {

            console.error(
                `${provider.name} failed`,
                error.message
            );
        }
    }

    return streams;
}

module.exports = {
    getStreams
};