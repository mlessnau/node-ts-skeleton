const del = require('del');
const env = require('gulp-env');
const gulp = require('gulp');
const mocha = require('gulp-mocha');
const shell = require('gulp-shell');
const ts = require('gulp-typescript');
const tslint = require('tslint');
const gulpTslint = require('gulp-tslint');

gulp.task('clean', () => {
  const tsProject = ts.createProject('./tsconfig.json');
  const targetDir = tsProject.config.compilerOptions.outDir;
  return del(targetDir);
});

gulp.task('build', ['clean'], () => {
  const tsProject = ts.createProject('./tsconfig.json');
  const targetDir = tsProject.config.compilerOptions.outDir;
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest(targetDir));
});

gulp.task('test:spec', () => {
  const mochaOptions = require('./mocha.json');
  env({vars: {NODE_ENV: 'test'}});
  return gulp.src('**/*.spec.ts')
    .pipe(mocha(mochaOptions))
    .on('error', function (error) { this.emit('end', error); });
});

gulp.task('test:coverage', shell.task('./node_modules/.bin/nyc gulp test:spec'));

gulp.task('test:tslint', () => {
  const tslintProgram = tslint.Linter.createProgram("./tsconfig.json");
  return gulp.src('src/**/*.ts', {base: '.'}).pipe(gulpTslint({tslintProgram}));
});

gulp.task('test', ['test:tslint', 'test:coverage']);

gulp.task('tdd', ['test:spec'], () => {
  gulp.watch(['src/**/*.*', 'test/**/*.*'], ['test:spec']);
});
