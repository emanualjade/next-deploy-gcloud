#!/bin/bash

source .env.demo
yarn run build
gcloud app deploy --project my-rocket-app app-demo.yaml
