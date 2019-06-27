pipeline {
    agent any

    tools {nodejs "Node10"}

    stages {
        stage('Clean Up') {
            steps {
                echo 'Clean Up'
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