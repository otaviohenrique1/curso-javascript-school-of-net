let gulp = require('gulp');
let sass = require('gulp-sass');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');
let imagemin = require('gulp-imagemin');
let pngquant = require('imagemin-pngquant');
let htmlmin = require('gulp-htmlmin');
let gls = require('gulp-live-server');
let jshint = require('gulp-jshint');
let stylish = require('jshint-stylish');
let less = require('gulp-less');
let LessPluginCleanCss = require('less-plugin-clean-css');
let cleancss = new LessPluginCleanCss({ advanced: true });

gulp.task('default', ['sass', 'less', 'js', 'htmlmin', 'image', 'watch', 'server']);

gulp.task('sass', function() {
    return gulp.src('./assets/src/sass/**/*.scss')
        .pipe(concat('style.min.css'))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'))
});

gulp.task('js', function() {
    return gulp.src('./assets/src/js/**/*.js')
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./assets/js'))
});

gulp.task('image', function() {
    return gulp.src('./assets/src/img/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./assets/img'))
});

gulp.task('htmlmin', function() {
    return gulp.src('./_html/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./'))
});

gulp.task('watch', function() {
    gulp.watch('./assets/src/sass/**/*.scss', ['sass']);
    gulp.watch('./assets/src/js/**/*.js', ['js']);
    gulp.watch('./assets/src/img/**/*', ['image']);
    gulp.watch('./_html/**/*.html', ['htmlmin']);
    gulp.watch('./assets/src/less/**/*.less', ['less']);
});

gulp.task('server', function() {
    let server = gls.static('./', 8000);
    server.start();
    gulp.watch('./assets/css/**/*.css', function(file) {
        gls.notify.apply(server, [file])
    });
    gulp.watch('./assets/js/**/*.js', function(file) {
        gls.notify.apply(server, [file])
    });
    gulp.watch('./assets/img/*', function(file) {
        gls.notify.apply(server, [file])
    });
    gulp.watch('./*.html', function(file) {
        gls.notify.apply(server, [file])
    });
});

gulp.task('lint', function() {
    return gulp.src('./assets/src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
});

gulp.task('less', function() {
    return gulp.src('./assets/src/less/**/*.less')
        .pipe(concat('styleLess.min.css'))
        .pipe(less())
        .pipe(gulp.dest('./assets/css'))
});