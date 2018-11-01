var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
  return gulp.src('src/cvLuis/sass/*.scss')
  //.pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false}))
  //.pipe(sourcemaps.write())
  .pipe(gulp.dest('src/cvLuis/css'))
  .pipe(reload({ stream: true }));
});

gulp.task('html', function(){
  return gulp.src('src/cvLuis/*.html')
  .pipe(reload({stream: true}));
});

gulp.task('serve', ['html', 'sass'], function(){
  console.log('\nDesarrollado por Luis Guillermo Morales Raya\n');
  console.log('\nhttp://www.luis-morales.com\n');
  browserSync({
    server: {
      baseDir: ['src/cvLuis/css', 'src/cvLuis']
    }
  });
  gulp.start('watch');
});

gulp.task('watch', function(){
  gulp.watch('src/cvLuis/sass/*.scss', ['sass']);
  gulp.watch('src/cvLuis/sass/extras*.scss', ['sass']);
  gulp.watch('src/cvLuis/*.html', ['html']);
});
gulp.task('fonts', function () {
  return gulp.src($.mainBowerFiles())
    .pipe($.filter('**/*.{otf,eot,svg,ttf,woff,woff2}'))
    .pipe($.flatten())
    .pipe(gulp.dest(path.join(conf.paths.dist, '/cvLuis/font/')));
});