#!/usr/bin/env bash

SRC_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DST_DIR=$1

mkdir -p $DST_DIR
cp -r $SRC_DIR/src $DST_DIR/
cp -r $SRC_DIR/test $DST_DIR/
cp -r $SRC_DIR/.gitignore $DST_DIR/
cp -r $SRC_DIR/mocha.opts $DST_DIR/
cp -r $SRC_DIR/package.json $DST_DIR/
cp -r $SRC_DIR/tsconfig.json $DST_DIR/

cd $DST_DIR
git init .
npm install
npm test
