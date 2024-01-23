pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                // Add your build commands here
                sh 'docker build -t amanUi .'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing...'
                // Add your test commands here
                sh 'echo "No test cases"'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // Add your deployment commands here
                sh 'docker run -d -p 3000:3000 amanUi'
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded! Trigger further actions if needed.'
        }
        failure {
            echo 'Pipeline failed! Handle failure scenarios.'
        }
    }
}
