function parseStremioId(id) {

    const parts =
        id.split(":");

    return {

        imdbId:
            parts[0],

        season:
            parts[1]
                ? Number(parts[1])
                : null,

        episode:
            parts[2]
                ? Number(parts[2])
                : null
    };
}

module.exports = {
    parseStremioId
};