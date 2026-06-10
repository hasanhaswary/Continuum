const { addonBuilder, serveHTTP } =
    require("stremio-addon-sdk");

const {
    handleStreamRequest
} = require("./handlers/streamHandler");

const builder = new addonBuilder({
    id: "com.hasan.continuum",
    version: "1.0.1",
    name: "Continuum",
    description: "Fast streaming via multiple http providers",
    logo: "utils\\logo.png",
    resources: ["stream"],
    types: ["movie", "series"],
    catalogs: []
});

builder.defineStreamHandler(({ type, id }) => {
    return handleStreamRequest(type, id);
});

serveHTTP(builder.getInterface(), {
    port: 7000
});

console.log("Addon running on port 7000");