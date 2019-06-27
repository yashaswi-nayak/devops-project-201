## Dockerization of Angular App
Following steps are to be implemented in order for the dockerization process of angular application.

- [Dockerization of Angular App](#Dockerization-of-Angular-App)
  - [Docker + Docker Compose Installation](#Docker--Docker-Compose-Installation)
  - [Jenkins Installation](#Jenkins-Installation)
  - [Angular App Setup](#Angular-App-Setup)
  - [Jenkins Pipeline Setup](#Jenkins-Pipeline-Setup)
  - [Docker Deployment](#Docker-Deployment)

We will be using `Ubuntu 18.04 VM` for the process.
Follow the steps in order, if you do not want Continuous Deployment and Integration you can skip [step 2](#Jenkins-Installation) and [step 4](#Jenkins-Pipeline-Setup).

### Docker + Docker Compose Installation

1.  We will install Docker CE, follow the below steps for installing.
    
    ```$ sudo apt update```

    ```$ sudo apt install apt-transport-https ca-certificates curl software-properties-common```

    ```$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - ```

    ```$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable" ```

    ```$ sudo apt update ```

    ```$ apt-cache policy docker-ce ```

    ```$ sudo apt install docker-ce ```

    Verify the installation by running

    ```$ sudo systemctl status docker ```

2.  We will use Docker Compose 1.24.1, Fetch it from the repo using the command

    ```$ sudo curl -L https://github.com/docker/compose/releases/download/1.24.1/docker-compose-'uname -s'-'uname -m' -o /usr/local/bin/docker-compose```
3. Set permission for compose, using following command
    
    ```$ sudo chmod +x /usr/local/bin/docker-compose```
4. Verify installation using command
   
   ```$ docker-compose --version```

   For detailed reference, visit [here](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04) for Docker and [here](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04) for Docker Compose

### Jenkins Installation
Jenkins requires Java 8 to be installed on the system. Install Java 8 using the following command
    
```$ sudo apt install openjdk-8-jdk```

Verify if Java is running

```$ java -version```

Once Java is up and running. Run the following process in order for the Jenkins to be setup

1.  We add the repository key to our system
   
    ```$ wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -```

2. Append the package to `source.list` 
    
    ```$ sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'```

3. Update `apt` and instal jenkins

    ```$ sudo apt update```

    ```$ sudo apt install jenkins```
4. Starting Jenkins and Updating Firewall
    
    Staring Jenkins
    
    ```$ sudo systemctl start jenkins```
    
    Verifying if jenkins is running
    
    ```$ sudo systemctl start jenkins```
    
    Allowing the traffic through port `8080`
    
    ```$ sudo ufw allow 8080```
    
    Checking the port status
    
    ```$ sudo ufw status```

### Angular App Setup

An angular sample application has been created on Github. You can view the repo [here](https://github.com/YashaswiNayak99/devops-project-201)

Once cloned you can change the files and push it to the repo. On admin approval the changes will be integrated into the repo.

We have a Dockerfile. This file allows us to build the docker image and run it in the VM.


### Jenkins Pipeline Setup

The Jenkins Pipeline is built a custom `Jenkinsfile`. Here we specify the stages and step necessary for building the docker image of our angular app.

### Docker Deployment