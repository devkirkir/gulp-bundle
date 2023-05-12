const pathSrc = "./src";
const pathDest = "./public";

const path = {
    root: pathDest,

    html: {
        src: [`${pathSrc}/index.html`, `${pathSrc}/pages/*.html`],
        watch: `${pathSrc}/**/*.html`,
        dest: pathDest,
    },

    pug: {
        src: [`${pathSrc}/index.pug`, `${pathSrc}/pages/*.pug`],
        watch: `${pathSrc}/**/*.pug`,
        dest: pathDest,
    },

    scss: {
        src: `${pathSrc}/scss/*.scss`,
        watch: `${pathSrc}/**/*.scss`,
        dest: `${pathDest}/css`,
    },

    js: {
        src: `${pathSrc}/js/*.js`,
        watch: `${pathSrc}/**/*.js`,
        dest: `${pathDest}/js`,
    },

    img: {
        src: `${pathSrc}/img/*.{png,jpg,jpeg,svg}`,
        watch: `${pathSrc}/**/*.{png,jpg,jpeg,svg}`,
        dest: `${pathDest}/img`,
    },

    fonts: {
        src: `${pathSrc}/fonts/*.{ttf,otf,woff,woff2,ttc,otc,svg}`,
        watch: `${pathSrc}/fonts/*.{ttf,otf,woff,woff2,ttc,otc,svg}`,
        dest: `${pathDest}/fonts`,
    },
};

export default path;
