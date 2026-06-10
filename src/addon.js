const { addonBuilder, serveHTTP } = require("stremio-addon-sdk");

const builder = new addonBuilder({
    id: "com.hasan.continuum",
    version: "1.0.0",
    name: "Continuum",
    description: "Fast streaming via multiple http providers",
    logo: "utils\\logo.png",
    resources: ["stream"],
    types: ["movie", "series"],
    catalogs: []
});

builder.defineStreamHandler(async ({ type, id }) => {
    return {
        streams: []
    };
});

serveHTTP(builder.getInterface(), {
    port: 7000
});

console.log("Addon running on port 7000");