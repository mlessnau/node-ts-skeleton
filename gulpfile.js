const del = require('del');
const env = require('gulp-env');
const gulp = require('gulp');
const mocha = require('gulp-mocha');
const shell = require('gulp-shell');
const ts = require('gulp-typescript');
const tslint = require('tslint');
const gulpTslint = require('gulp-tslint');

const tsProject = ts.createProject('./tsconfig.json');
const targetDir = tsProject.config.compilerOptions.outDir;
const mochaOptions = require('./mocha.json');
const tslintProgram = tslint.Linter.createProgram("./tsconfig.json");

gulp.task('clean', () => {
  return del(targetDir);
});

gulp.task('build', ['clean'], () => {
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest(targetDir));
});

gulp.task('test', () => {
  env({vars: {NODE_ENV: 'test'}});
  return gulp.src('**/*.spec.ts').pipe(mocha(mochaOptions));
});

gulp.task('test:coverage', shell.task('./node_modules/.bin/nyc gulp test'));

gulp.task('test:tslint', () => {
  return gulp.src('src/**/*.ts', {base: '.'}).pipe(gulpTslint({tslintProgram}));
});

gulp.task('ci', ['build', 'test:tslint', 'test:coverage']);
