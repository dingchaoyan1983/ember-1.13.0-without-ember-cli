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
    .pipe(gulp.dest('dest/templates'));
});

gulp.task('models', function() {
  return gulp.src(SRC.MODELS)
    .pipe(gulp.dest('dest/models'));
});

gulp.task('routes', function() {
  return gulp.src(SRC.ROUTES)
    .pipe(gulp.dest('dest/routes'));
});

gulp.task('controllers', function() {
  return gulp.src(SRC.CONTROLLERS)
    .pipe(gulp.dest('dest/controllers'));
});

gulp.task('app', function() {
  return gulp.src(SRC.APP)
    .pipe(gulp.dest('dest/'));
});

gulp.task('default', ['templates', 'models', 'controllers', 'routes', 'app'])