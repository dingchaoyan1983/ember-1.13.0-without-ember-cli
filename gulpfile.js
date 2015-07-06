var concat = require('gulp-concat');
var gulp = require('gulp');
var htmlbars = require('gulp-htmlbars-compiler');
var compiler = require('./bower_components/ember/ember-template-compiler');


var SRC = {
  TEMPLATES: ['app/templates/**/*.{hbs,html}'],
  CONTROLLERS: ['app/controllers/**/*.js'],
  MODELS: ['app/models/**/*.js'],
  ROUTES: ['app/routes/**/*.js'],
  APP: ['app/*.js']
};

gulp.task('templates', function() {
  return gulp.src(SRC.TEMPLATES)
    .pipe(htmlbars({compiler: compiler}))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('dist/templates'));
});

gulp.task('models', function() {
  return gulp.src(SRC.MODELS)
    .pipe(gulp.dest('dist/models'));
});

gulp.task('routes', function() {
  return gulp.src(SRC.ROUTES)
    .pipe(gulp.dest('dist/routes'));
});

gulp.task('controllers', function() {
  return gulp.src(SRC.CONTROLLERS)
    .pipe(gulp.dest('dist/controllers'));
});

gulp.task('app', function() {
  return gulp.src(SRC.APP)
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['templates', 'models', 'controllers', 'routes', 'app'])