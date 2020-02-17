const
    scssPath = './app/scss/*.scss',
    phpPath = './../../**/*.php',

    { src, dest, watch } = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    bs = require('browser-sync').create();

function scssTask(){
 return src(scssPath)
     .pipe(sourcemaps.init())
     .pipe(sass({
         outputStyle: 'compressed'
     }))
     .pipe(autoprefixer())
     .pipe(sourcemaps.write('.'))
     .pipe(dest('./dist'))
     .pipe(bs.stream())
}

function watchTask(){
    bs.init({
        proxy: 'media/',
        port: 8080
    });
    watch(scssPath).on('change', function(file){
        const date = new Date();
        console.log(`${file} изменен в ${date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}:${date.getSeconds()}`);
        scssTask()
    });
    watch(phpPath).on('change', function(file){
        console.log(file);
        bs.reload();
    })
}

exports.default = watchTask;