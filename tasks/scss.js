import gulp from "gulp";
import autoPrefixer from "gulp-autoprefixer";
import rename from "gulp-rename";
import csso from "gulp-csso";
import webpCss from "gulp-webp-css";

import dartSass from "sass";
import gulpSass from "gulp-sass";

import path from "../config/path.js ";
import conf, { isProd } from "../config/conf.js";

const sass = gulpSass(dartSass);

const scss = () => {
    return gulp
        .src(path.scss.src, { sourcemaps: isProd })
        .pipe(sass())
        .pipe(webpCss())
        .pipe(autoPrefixer())
        .pipe(gulp.dest(path.scss.dest))
        .pipe(csso())
        .pipe(rename(conf.rename))
        .pipe(gulp.dest(path.scss.dest, { sourcemaps: isProd }));
};

export default scss;
