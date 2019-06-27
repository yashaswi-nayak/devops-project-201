pipeline {
    agent any

    tools {nodejs "Node10"}

    environment {
        CURR_VER = "${currentBuild.number}"
        PRE_VER  = "${currentBuild.previousBuild.getNumber()}"
    }

    stages {
        stage('Angular Build') {
            steps{
                sh "npm install"
                sh "ng build --prod"
            }
        }
        stage('Docker Build') {
            steps{
                sh "sudo docker build -t my-angular-app:${env.CURR_VER} ."
            }
        }

       stage('Docker Clean Up'){
           steps {
                sh "echo \$(sudo docker kill angular-app)"
                sh "echo \$(sudo docker rm -vf angular-app)"
                sh "echo \$(sudo docker rmi my-angular-app:${env.PRE_VER})"
            }
       }

       stage('Docker Deploy') {
           steps {
               sh "docker run -d -p 51008:80 --name angular-app my-angular-app:${env.CURR_VER}"
           }
       }
    }
}