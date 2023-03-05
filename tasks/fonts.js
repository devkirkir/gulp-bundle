import gulp from "gulp";

import newer from "gulp-newer";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

import path from "../config/path.js";
import conf from "../config/conf.js";

const fonts = () => {
    return gulp
        .src(path.fonts.src)
        .pipe(newer(path.fonts.dest))
        .pipe(fonter(conf.fonter.formats))
        .pipe(gulp.dest(path.fonts.dest))
        .pipe(ttf2woff2())
        .pipe(gulp.dest(path.fonts.dest));
};

export default fonts;
