const {src,dest,watch} = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sass = (require('gulp-sass'))(require('sass'));
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');

let fnHTML = () => {
    return src('./src/html/**/*.html')
    .pipe(htmlmin())
    .pipe(dest('./dist/html'));
}
let fncss = () =>   {
    return src('./src/sass/**/*.scss')
    .pipe(sass())
    .pipe(rename({suffix : '.min'}))
    .pipe(dest('./dist/css'));
}
let fnjs = () => {
    return src('./src/js/**/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rename({suffix : '.min'}))
    .pipe(dest('./dist/js'));
}
let fnimg = () => {
    return src('./src/**/*')
    .pipe(imagemin())
    .pipe(dest('./dist/img'));
}
let fnfont = ()=>{
    return src('./src/font/**/*')
    .pipe(dest('./dist/font'));
}
let fnData = ()=>{
    return src('./src/data/**/*')
    .pipe(dest('./dist/data'));
}
let fnlib = () =>{
    return src('./src/lib/**/*')
    .pipe(dest('./dist/lib'));
}
let fnwatch = ()=>{
    watch('./src/html/**/*.html',fnHTML);
    watch('./src/img/**/*',fnimg);
    watch('./src/js/**/*.js',fnjs);
    watch('./src/sass/**/*.scss',fncss);
    watch('./src/font/**/*',fnfont);
    watch('./src/data/**/*',fnData);
}
exports.html = fnHTML;
exports.css = fncss;
exports.js = fnjs;
exports.img = fnimg;
exports.font = fnfont;
exports.data = fnData;
exports.lib = fnlib;
exports.watch = fnwatch;