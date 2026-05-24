pipeline {
    agent any

    environment {
        SONAR_TOKEN = credentials('SONAR_TOKEN')
    }

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
                sh '''
                docker run --rm \
                  --network="taskflow-devops_default" \
                  -v "$(pwd):/usr/src" \
                  sonarsource/sonar-scanner-cli \
                  -Dsonar.host.url="http://taskflow-sonarqube:9000" \
                  -Dsonar.token="${SONAR_TOKEN}"
                '''
            }
        }

        stage('Docker Compose Build') {
            steps {
                sh 'docker compose -f compose.yaml build'
            }
        }
    }
}