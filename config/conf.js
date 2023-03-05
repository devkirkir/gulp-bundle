export const isProd = process.argv.includes("--prod");

const conf = {
    fonter: {
        formats: ["ttf", "woff", "svg"],
    },

    htmlMin: { collapseWhitespace: isProd },

    webpack: {
        mode: isProd ? "production" : "development",
    },

    rename: { suffix: ".min" },
};

export default conf;
