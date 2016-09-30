gulp       = require 'gulp'
autowatch  = require 'gulp-autowatch'
source     = require 'vinyl-source-stream'
buffer     = require 'vinyl-buffer'
babel      = require 'gulp-babel'

gulp.task 'babel', ->
  # babel_ = babel 
  #   presets: ['es2015']

  gulp.src './src/app.js'
    .pipe babel()
    .pipe (gulp.dest './public')

gulp.task 'watch', ->
  autowatch gulp,
    server: './public/*.js'
    babel: './src/app.js'

gulp.task 'server', -> require './server'

gulp.task 'default', [ 'watch', 'server', 'babel' ]





 