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

# Installation

1. clone the repo ```git clone https://github.com/mlessnau/node-ts-skeleton.git```
2. run the install script ```node-ts-skeleton/install.sh <dir>``` (replace ```<dir>``` with the target directory of your project)
3. change the details in the ```<dir>/package.json``` file
