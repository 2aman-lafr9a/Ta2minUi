pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Building...'
        sh 'docker compose up -d --build'
      }
    }

    stage('Test') {
      steps {
        echo 'Testing...'
        sh 'echo "No test cases"'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploying...'
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