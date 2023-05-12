import gulp from "gulp";
import gulpPug from "gulp-pug";

import path from "../config/path.js";

const pug = () => {
    return gulp
        .src(path.pug.src, { allowEmpty: true })
        .pipe(gulpPug())
        .pipe(gulp.dest(path.pug.dest));
};

export default pug;
