pipeline {
    agent any

    tools {nodejs "Node8"}

    stages {
        stage('Clean Up') {
            steps {
                echo 'Clean Up'
            }
        }
        stage('Angular Build') {
            steps{
                sh "npm install"
                sh "ng build --prod"
            }
        }
        stage('Docker Compose') {
            steps{
                sh "docker-compose -d up"
            }
        }
    }
}