pipeline {
    agent any

    tools {nodejs "Node10"}

    stages {
        stage('Clean Up') {
            steps {
                sh "npm cache clean"
            }
        }
        stage('Angular Build') {
            steps{
                sh "npm install"
                // sh "ng build --prod"
            }
        }
    }
}