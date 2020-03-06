#!/bin/bash

source .env.prod
yarn run build
gcloud app deploy --project my-rocket-app app-prod.yaml
