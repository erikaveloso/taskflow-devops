pipeline {
    agent any

    stages {
        stage('Install Backend') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Install Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm run build'
                }
            }
        }

        stage('SonarQube') {
            steps {
                echo 'Configure aqui o token e o servidor do SonarQube no Jenkins'
            }
        }

        stage('Docker Compose Build') {
            steps {
                sh 'docker compose -f compose.yaml build'
            }
        }
    }
}