var gulp = require('gulp'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    browserSync = require('browser-sync');

gulp.task('sass', function(){ // Создаем таск "sass"
    return gulp.src('app/sass/**/*.sass') //все sass из sass и доч
        .pipe(sass()) // Преобр Sass в CSS через gulp-sass
        .pipe(gulp.dest('app/css')) // Выгруж рез-та в app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем
});

gulp.task('pug', function(){ // Создаем таск "pug"
    return gulp.src('app/pug/**/*.pug')
        .pipe(pug()) // Преобразуем в html
        .pipe(gulp.dest('app/')) // Выгруж рез-та в app/pug
        .pipe(browserSync.reload({stream: true})) // Обновляем
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync', 'sass', 'pug'], function() {
    gulp.watch('app/pug/**/*.pug', ['pug']);
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});
