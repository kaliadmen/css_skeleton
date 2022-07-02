const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')
const rename = require('gulp-rename');

function buildStyles(){
    return src('dragon_spider/**/*.scss')
        //compile css
        .pipe(sass())
        //rename output file
        .pipe(rename('styles.css'))
        //purge unused css
        .pipe(purgecss({content: ['*.html']}))
        //put css file in destination
        .pipe(dest('css'))
}

function watchTask(){
    watch(['dragon_spider/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)