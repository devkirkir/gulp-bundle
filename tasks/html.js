import gulp from "gulp";
import fileInclude from "gulp-file-include";
import htmlmin from "gulp-htmlmin";
import webpHtml from "gulp-webp-html";

import path from "../config/path.js";
import conf from "../config/conf.js";

const html = () => {
    return gulp
        .src(path.html.src)
        .pipe(fileInclude())
        .pipe(webpHtml())
        .pipe(htmlmin(conf.htmlMin))
        .pipe(gulp.dest(path.html.dest));
};

export default html;
