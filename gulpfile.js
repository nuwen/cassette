const {series, src, dest, watch} = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const gulpPostCSS = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const rename = require('gulp-rename');


sass.compiler = require('node-sass');

function gulpSASS(cb) {
  return src("./styles/main.scss")
  .pipe(sassGlob())
  .pipe(sass().on("error", sass.logError))
  .pipe(dest("./css"));
}

function postCSS(cb) {
  let plugins = [
    autoprefixer({
      grid: true,
      browsers: ["last 5 version", "ie 6-8", "Firefox > 20"]
    }),
    cssnano()
  ];

  return src("./styles/css/main.css")
    .pipe(gulpPostCSS(plugins))
    .pipe(rename({extname: ".min.css"}))
    .pipe(dest("./src/"));
}

exports.default = series(gulpSASS, postCSS);
watch(["./styles/**/*.scss"], series(gulpSASS, postCSS));
