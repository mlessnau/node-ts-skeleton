const del = require('del');
const gulp = require('gulp');
const mocha = require('gulp-mocha');
const shell = require('gulp-shell');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('./tsconfig.json');
const targetDir = tsProject.config.compilerOptions.outDir;

gulp.task('clean', () => {
  return del(targetDir);
});

gulp.task('build', ['clean'], () => {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest(targetDir));
});

gulp.task('test', () => {
  return gulp.src('**/*.spec.ts')
    .pipe(mocha({
      'recursive': true,
      'require': 'ts-node/register',
      'reporter': 'dot',
      'watch-extension': 'ts'
    }));
});

gulp.task('test:coverage', shell.task('./node_modules/.bin/nyc gulp test'));
