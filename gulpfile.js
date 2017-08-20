let gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	htmlmin = require('gulp-htmlmin'),
	htmlImport = require('gulp-html-import'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	cssnano = require('gulp-cssnano'),
	rename = require('gulp-rename'),
	del = require('del'),
	prefix = require('gulp-autoprefixer'),
	imagemin = require('gulp-imagemin'),
	concatCss = require('gulp-concat-css'),
    babel  = require('gulp-babel'),
    sassGlob = require('gulp-sass-glob');;


//templates
gulp.task('templ', function() {
 	return gulp.src('./dev/**/*.html')
 	.pipe(htmlImport('./dev/html/'))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./prod/'))
    .pipe(browserSync.reload({stream: true}))
});


//styles
gulp.task('styles', function () {
	gulp.src('./dev/scss/style.scss')
	.pipe(sassGlob())
    .pipe(sass({
            errLogToConsole: true,
            includePaths: ['./dev/scss'],
            outputStyle: 'compressed'
        }))
    .pipe(prefix("last 5 version"))
    .pipe(gulp.dest('./dev/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('css-minify', ['styles'], function () {
	return gulp.src([
		'dev/css/normalize.css',
		'dev/css/magnifier.css',
        'dev/css/style.css',
        'dev/css/slick.css',
        'dev/css/slick-theme.css',
        'dev/css/animate.css',
        'dev/css/jquery-ui.css'
	])
        .pipe(concatCss("style.css"))
		.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('prod/css'))
	.pipe(browserSync.reload({stream: true}))
});

//browser-sync

gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: 'prod',
			index: "product.html"
		},
		notify: false
	})
});

//images
gulp.task('images', function () {
    gulp.src('./dev/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./prod/images'));
});

//video

gulp.task('video', function () {
	gulp.src('./dev/video/**/*')
		.pipe(gulp.dest('./prod/video'))
});


//scripts
gulp.task('libs', function () {
		gulp.src([
			'node_modules/jquery/dist/jquery.min.js',
			'node_modules/moment/min/moment.min.js',
			'node_modules/magnifier.js/magnifier.js',
			'node_modules/slick-carousel/slick/slick.min.js',
			'node_modules/wowjs/dist/wow.min.js',
			'node_modules/jquery-ui-dist/jquery-ui.min.js'
		])
	    .pipe(concat('lib.js'))
	    .pipe(uglify())
	    .pipe(gulp.dest('prod/js'))
	    .pipe(gulp.dest('dev/js/lib'))
    });

gulp.task('scripts', function () {
     gulp.src('dev/js/*.js')
		 .pipe(babel({presets: ['es2015']}))
    .pipe(concat('functions.js'))
    .pipe(uglify())
    .pipe(gulp.dest('prod/js'))
    .pipe(browserSync.reload({stream: true}))
});


//clean
gulp.task('clean', function () {
	return del.sync('prod');
});


gulp.task('watch', ['browser-sync', 'styles', 'libs', 'css-minify', 'templ', 'scripts'], function () {
	gulp.watch('dev/scss/**/*.scss', ['styles'])
	gulp.watch('dev/js/lib/**/*.js', browserSync.reload)
	gulp.watch('dev/js/**/*.js', ['scripts'])
	gulp.watch('dev/**/*.html', ['templ']);
	gulp.watch('dev/css/**/*.css', ['css-minify'])
});


gulp.task('default', ['styles', 'scripts', 'templ']);
gulp.task('dev', ['default', 'watch']);
gulp.task('prod', ['default', 'images']);