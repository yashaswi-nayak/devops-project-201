pipeline {
    agent any

    tools {nodejs "Node10"}

    stages {
        stage('CleanUp') {
            steps {
                echo 'Clean Up'
            }
        }
        stage('Docker Build') {
            steps{
                sh "npm install"
                sh "docker build -t my-angular-app ."
            }
        }
        stage('Docker Deploy'){
            steps {
                sh "docker run -d -p 80:4200 --name angular-app my-angular-app:latest"
            }
        }
    }
}