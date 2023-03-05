import gulp from "gulp";

import imagemin from "gulp-imagemin";
import webp from "gulp-webp";
import newer from "gulp-newer";

import gulpIf from "gulp-if";

import path from "../config/path.js";
import { isProd } from "../config/conf.js";

const img = () => {
    return gulp
        .src(path.img.src)
        .pipe(newer(path.img.dest))
        .pipe(webp())
        .pipe(gulp.dest(path.img.dest))
        .pipe(gulp.src(path.img.src))
        .pipe(newer(path.img.dest))
        .pipe(gulpIf(isProd, imagemin()))
        .pipe(gulp.dest(path.img.dest));
};

export default img;
