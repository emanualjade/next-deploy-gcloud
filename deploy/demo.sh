#!/bin/bash

source .env.demo
yarn run build
yes | gcloud app deploy --project my-rocket-app app-demo.yaml
