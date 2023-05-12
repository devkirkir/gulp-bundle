import gulp from "gulp";

import browserSync from "browser-sync";

import clear from "./tasks/clear.js";
import html from "./tasks/html.js";
import pug from "./tasks/pug.js";
import scss from "./tasks/scss.js";
import js from "./tasks/js.js";
import img from "./tasks/img.js";
import fonts from "./tasks/fonts.js";

import path from "./config/path.js";

const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root,
        },
    });
};

const watcher = () => {
    gulp.watch(path.html.watch, html).on("all", browserSync.reload);
    gulp.watch(path.pug.watch, pug).on("all", browserSync.reload);
    gulp.watch(path.scss.watch, scss).on("all", browserSync.reload);
    gulp.watch(path.js.watch, js).on("all", browserSync.reload);
    gulp.watch(path.img.watch, img).on("all", browserSync.reload);
    gulp.watch(path.fonts.watch, fonts).on("all", browserSync.reload);
};

export const watch = gulp.series(gulp.parallel(watcher, server));

export const build = gulp.series(
    clear,
    gulp.parallel(html, pug, scss, js, img, fonts)
);

export const dev = gulp.series(build, watch);
