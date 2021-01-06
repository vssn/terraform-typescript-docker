import { Construct } from 'constructs';
import { TerraformStack } from 'cdktf';
import { Container, Image, DockerProvider } from '../.gen/providers/docker';

export class DockerStack extends TerraformStack {
    constructor(scope: Construct, name: string, sharedFolderPath: string) {
      super(scope, name);
  
      new DockerProvider(this, 'docker-provider', {});
  
      const dockerNginxImage = new Image(this, 'docker-nginx', {
        name: 'nginx:latest'
      })
  
      new Container(this, 'docker-container', {
        image: dockerNginxImage.latest,
        name: 'docker-container-nginx',
        ports: [
          { internal: 80, external: 8080 }
        ],
        volumes: [{
          containerPath: "/usr/share/nginx/html",
          hostPath: sharedFolderPath,
          readOnly: true
        }]
      })
    }
  }
  