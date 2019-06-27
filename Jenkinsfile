pipeline {
    agent any

    tools {nodejs "Node10"}

    stages {
        stage('Clean Up') {
            steps {
                sh "docker rm -vf angular-app"
            }
        }
        stage('Angular Build') {
            steps{
                sh "npm install"
                sh "ng build --prod"
            }
        }
        stage('Docker Build-Run') {
            steps{
                sh "docker build -t my-angular-app ."
                sh "docker run -d -p 51008:80 --name angular-app my-angular-app:latest"
            }
        }
    }
}