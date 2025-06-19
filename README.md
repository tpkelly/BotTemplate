**Do not just fork this repository**

This is intended to be used as a template for creating other repositories from:
![image](https://github.com/user-attachments/assets/c3ebed2b-3454-4f41-9f3c-b6afaf6dda0a)

Contains all my default code for public-facing bots. Private bots use similar code, with a bit of extra config

Deployments use the following Action Repository secrets:
- DEPLOYMENT_PRIVATE_KEY: SSH RSA Private Key
- GC_INSTANCE: Name of the google cloud instance
- GC_PROJECT: Name of the project containing the Google Cloud instance
- GC_PROJECT_NUMER: ID of the Google Cloud Project
- GC_PROVIDER: Name of the Google Cloud login identity provider
- GC_SERVICE_USER: Username of the Google Cloud Service Account
- GC_SERVICE_ACCOUNT: Email address of the Google Cloud Service Account
- SSH_HOST: IP Address of the Google Cloud instance
- SSH_PORT: Port number of the Google Cloud instance (default 22 for SSH)
- SSH_USER: Username of the SSH login
- JSON_AUTH: Json file containing all auth credentials. See `auth.sample.json` for the expected format
