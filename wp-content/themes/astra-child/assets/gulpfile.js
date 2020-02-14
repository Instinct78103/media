const
    scssPath = './app/scss/*.scss',

    { src, dest, watch } = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    //autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();


function scssTask(){
 return src(scssPath)
     .pipe(sourcemaps.init())
     .pipe(sass({
         outputStyle: 'compressed'
     }))
     /*.pipe(autoprefixer({
         browsers: ['last 2 versions'],
         cascade: false
     }))*/
     .pipe(sourcemaps.write('.'))
     .pipe(dest('./dist'))
     .pipe(browserSync.stream())
}

function watchTask(){
    browserSync.init({
            proxy: 'media/',
            port: 8080
    });
    watch(scssPath).on('change', function(file){
        const date = new Date();
        console.log(`${file} изменен в ${date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}:${date.getSeconds()}`)
        scssTask()
        browserSync.reload
    })
}

exports.default = watchTask
