import gulp from "gulp";
import rename from "gulp-rename";
import babel from "gulp-babel";
import webpack from "webpack-stream";

import path from "../config/path.js ";
import conf, { isProd } from "../config/conf.js";

const js = () => {
    return gulp
        .src(path.js.src, { sourcemaps: isProd })
        .pipe(webpack(conf.webpack))
        .pipe(babel())
        .pipe(rename(conf.rename))
        .pipe(gulp.dest(path.js.dest, { sourcemaps: isProd }));
};

export default js;
