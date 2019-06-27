pipeline {
    agent none
    stages {
        stage('CleanUp') {
            steps {
                echo 'Clean Up'
            }
        }
        stage('Docker Build') {
            steps{
                sh "sudo docker build -t my-angular-app ."
            }
        }
        stage('Docker Deploy'){
            steps {
                sh "sudo docker run -d -p 80:4200 --name angular-app my-angular-app:latest"
            }
        }
    }
}