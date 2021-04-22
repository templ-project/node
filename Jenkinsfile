@Library('my-jenkins-shared') _

def modules = [:]
pipeline {
  agent {
    label 'master' // test-1
  }

  environment {
    NVM_DIR = "${HOME}/.nvm"
  }

  stages {
    stage('Info') {
      steps {
        echo "NVM lies in ${NVM_DIR}"

        script {
          telegramSend(message: 'Hello World', chatId: 608276470)
        }

        sh """
          set -ex;
          . ~/.bashrc;

          node --version;
          npm --version;
          """
      }
    }

    // Mocha

    stage('Testing CoffeeScript, EsLint, Mocha') {
      steps {
        script {
          testing('coffee', 'eslint', 'mocha')
        }
      }
    }
    stage('Testing CoffeeScript, EsLint/Airbnb, Mocha') {
      steps {
        script {
          testing('coffee', 'airbnb', 'mocha')
        }
      }
    }

    stage('Testing Flow, EsLint, Mocha') {
      steps {
        script {
          testing('flow', 'eslint', 'mocha')
        }
      }
    }
    stage('Testing Flow, EsLint/Airbnb, Mocha') {
      steps {
        script {
          testing('flow', 'airbnb', 'mocha')
        }
      }
    }

    stage('Testing JavaScript, EsLint, Mocha') {
      steps {
        script {
          testing('javascript', 'eslint', 'mocha')
        }
      }
    }
    stage('Testing JavaScript, EsLint/Airbnb, Mocha') {
      steps {
        script {
          testing('javascript', 'airbnb', 'mocha')
        }
      }
    }

    stage('Testing TypeScript, EsLint, Mocha') {
      steps {
        script {
          testing('typescript', 'eslint', 'mocha')
        }
      }
    }
    stage('Testing TypeScript, EsLint/Airbnb, Mocha') {
      steps {
        script {
          testing('typescript', 'airbnb', 'mocha')
        }
      }
    }

    // Jest

    stage('Testing CoffeeScript, EsLint, Jest') {
      steps {
        script {
          testing('coffee', 'eslint', 'jest')
        }
      }
    }
    stage('Testing CoffeeScript, EsLint/Airbnb, Jest') {
      steps {
        script {
          testing('coffee', 'airbnb', 'jest')
        }
      }
    }

    stage('Testing Flow, EsLint, Jest') {
      steps {
        script {
          testing('flow', 'eslint', 'jest')
        }
      }
    }
    stage('Testing Flow, EsLint/Airbnb, Jest') {
      steps {
        script {
          testing('flow', 'airbnb', 'jest')
        }
      }
    }

    stage('Testing JavaScript, EsLint, Jest') {
      steps {
        script {
          testing('javascript', 'eslint', 'jest')
        }
      }
    }
    stage('Testing JavaScript, EsLint/Airbnb, Jest') {
      steps {
        script {
          testing('javascript', 'airbnb', 'jest')
        }
      }
    }

    stage('Testing TypeScript, EsLint, Jest') {
      steps {
        script {
          testing('typescript', 'eslint', 'jest')
        }
      }
    }
    stage('Testing TypeScript, EsLint/Airbnb, Jest') {
      steps {
        script {
          testing('typescript', 'airbnb', 'jest')
        }
      }
    }
  }
  post {
    // https://www.jenkins.io/doc/pipeline/tour/post/
    // https://plugins.jenkins.io/telegram-notifications/
    failure {
      // withCredentials([
      //   string(credentialsId: 'jk_pipeline_report_to_email', variable: 'TO_EMAIL')
      // ]) {
      //   mail to: "${TO_EMAIL}",
      //       subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
      //       body: "Something is wrong with ${env.BUILD_URL}"
      // }

      withCredentials([
        string(credentialsId: 'jk_pipeline_report_to_telegram_token', variable: 'TL_TOKEN'),
        string(credentialsId: 'jk_pipeline_report_to_telegram_chatId', variable: 'TL_CHAT_ID')
      ]) {
        TelegramSendStatusFail(TL_TOKEN, TL_CHAT_ID)
      }
    }
    success {
      script {
        // withCredentials([
        //   string(credentialsId: 'jk_pipeline_report_to_email', variable: 'TO_EMAIL')
        // ]) {
        //   mail to: "${TO_EMAIL}",
        //       subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
        //       body: "Build finished with success: ${env.BUILD_URL}"
        // }

        withCredentials([
          string(credentialsId: 'jk_pipeline_report_to_telegram_token', variable: 'TL_TOKEN'),
          string(credentialsId: 'jk_pipeline_report_to_telegram_chatId', variable: 'TL_CHAT_ID')
        ]) {
          TelegramSendStatusOK(TL_TOKEN, TL_CHAT_ID)
        }
      }
    }
  }
}

def testing(def lang, def lint, def test) {
  sh """
    . ~/.bashrc > /dev/null;
    set -ex;
    for version in 11 12 13 14 15; do \\
      nvm use \$version; \\
      bash ./.scripts/travis-test.sh ${lang} ${lint} ${test}; \\
    done
    """
}
