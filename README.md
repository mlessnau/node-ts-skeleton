# Node TypeScript Skeleton

## What it does

The project skeleton integrates:
* npm
* gulp
* typescript
* mocha
* chai
* nyc / istanbul
* tslint

### Gulp tasks

* ```gulp clean``` - delete all build artefacts
* ```gulp build``` - transpile all .ts files ({src,test}/**/*.ts -> build)
* ```gulp test``` - runs ```test:tslint``` and ```test:coverage```
* ```gulp test:spec``` - run mocha tests
* ```gulp test:coverage``` - run ```test:spec``` and generate reporting for ```.ts``` files
* ```gulp test:tslint``` - run ```tslint```
* ```gulp tdd``` - watches and runs ```test:coverage``` in a loop

## Installation

### Prerequisites

1. Install gulp-cli globally via ```npm install gulp-cli -g```

### Installation steps

1. clone the repo ```git clone https://github.com/mlessnau/node-ts-skeleton.git```
2. run the install script ```node-ts-skeleton/install.sh <dir>``` (replace ```<dir>``` with the target directory of your project)
3. change the details in the ```<dir>/package.json``` file
