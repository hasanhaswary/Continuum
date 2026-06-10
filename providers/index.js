const fs =
    require("fs");

const path =
    require("path");

const providers = [];

const files =
    fs.readdirSync(__dirname);

for (const file of files) {

    if (
        file === "index.js" ||
        !file.endsWith(".js")
    ) {
        continue;
    }

    providers.push(
        require(
            path.join(
                __dirname,
                file
            )
        )
    );
}

module.exports =
    providers;