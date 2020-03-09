#!/bin/bash

version=$(git rev-parse --abbrev-ref HEAD | iconv -t ascii//TRANSLIT | sed -E 's/[^a-zA-Z0-9]+/-/g' | sed -E 's/^-+|-+$//g' | tr A-Z a-z)
echo "Deploying new demo version ${version}"

echo "export APP_VERSION=\"$(git rev-parse --short=8 HEAD)\"" > ./.env.build
echo "export GRAPHQL_BACKEND_ENDPOINT=\"https://${version}-dot-demo-backend-dot-joblist-qa.appspot.com/graphql\"" >> ./.env.build

source .env.demo
source .env.build

yarn run build

yes | gcloud app deploy --project my-rocket-app app-demo.yaml
