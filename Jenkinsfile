pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                // Add your build commands here
                docker build -t amanUi:todo .
            }
        }

        stage('Test') {
            steps {
                echo 'Testing...'
                // there no test cases
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // Add your deployment commands here
                docker run -d -p 3000:3000 amanUi:todo
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
