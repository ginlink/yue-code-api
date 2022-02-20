#!/bin/sh
yarn

yarn build

docker build -t ginlink/yue-code-api:latest .

docker login --username $DOCKER_ACCESS_NAME -p $DOCKER_ACCESS_TOKEN

docker push ginlink/yue-code-api:latest
