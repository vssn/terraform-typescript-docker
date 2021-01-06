import { App } from 'cdktf';
import { DockerStack } from './src/DockerStack';
import * as path from 'path';

if (!process.env.SHARED_FOLDER_PATH) {
  console.info('SHARED_FOLDER_PATH not provided in env. Using project example path.');
}

const sharedFolderPath = process.env.SHARED_FOLDER_PATH || path.resolve('sites-available-example');
const app = new App();

new DockerStack(app, 'terraform-typescript-docker', sharedFolderPath);
app.synth();
