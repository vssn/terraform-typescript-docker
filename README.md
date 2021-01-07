# Example with Terraform CDK and Typescript

This example project runs a Docker Container with Nginx on your localhost:8080 and serves content from a shared folder. It utilizes the Terraform Cloud Development Kit, Typescript and the kreuzwerker/docker Provider

### Prerequisites
- Docker
- npm
- Terraform CDK

### Run the example
Make sure that Docker is running on your machine.

```
npm install
npm run get
npm run deploy
```

### Remove the generated Docker container and image
```
npm run destroy
```

### Troubleshooting
#### Configuring Terraform
You might be required to disable requests to the checkpoint api from Hashicorp. To do so, set the environment variable `CHECKPOINT_DISABLE` to any non-false value.
