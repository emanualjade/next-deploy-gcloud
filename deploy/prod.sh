#!/bin/bash

source .env.prod
yarn run build
yes | gcloud app deploy --project my-rocket-app app-prod.yaml
