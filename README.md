# Node TypeScript Skeleton

The project skeleton integrates:
* npm
* typescript
* mocha
* chai
* nyc / istanbul

The project skeleton offers:
* npm tasks
  * ```clean``` - delete all build artefacts
  * ```build``` - transpile all .ts files ({src,test}/**/*.ts -> build)
  * ```test``` - run mocha tests
  * ```test:coverage``` - run mocha tests and generate reporting for ```.ts``` files
