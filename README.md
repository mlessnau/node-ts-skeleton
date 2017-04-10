# Node TypeScript Skeleton

## What it does

The project skeleton integrates:
* npm
* gulp
* typescript
* mocha
* chai
* nyc / istanbul

### Gulp tasks

* ```gulp clean``` - delete all build artefacts
* ```gulp build``` - transpile all .ts files ({src,test}/**/*.ts -> build)
* ```gulp test``` - run mocha tests
* ```gulp test:coverage``` - run mocha tests and generate reporting for ```.ts``` files

## Installation

### Prerequisites

1. Install gulp-cli globally via ```npm install gulp-cli -g```

### Installation steps

1. clone the repo ```git clone https://github.com/mlessnau/node-ts-skeleton.git```
2. run the install script ```node-ts-skeleton/install.sh <dir>``` (replace ```<dir>``` with the target directory of your project)
3. change the details in the ```<dir>/package.json``` file
