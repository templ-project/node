@Library('my-jenkins-shared') _

def modules = [:]
pipeline {
  agent {
    label 'master' // test-1
  }

  environment {
    NVM_DIR = "${HOME}/.nvm"
    NODE_VERSIONS = "11 12 13 14 15"
    NODE_VERSION_DEFAULT = "14"
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

    stage('Code Analysis') {
      steps {
        script {
          sh """
            . ~/.bashrc > /dev/null;
            set -ex;
            for version in ${NODE_VERSIONS}; do \\
              nvm use \$version; \\
              npm run prettier:write; \\
              npm run lint:write; \\
              npm run jscpd; \\
              npm run depcruise; \\
            done
            """
        }
      }
    }

    stage('Code UnitTests') {
      steps {
        script {
          sh """
            . ~/.bashrc > /dev/null;
            set -ex;
            for version in ${NODE_VERSIONS}; do \\
              nvm use \$version; \\
              npm run test; \\
            done
            """
        }
      }
    }

    stage('Code Docs') {
      steps {
        script {
          sh """
            . ~/.bashrc > /dev/null;
            set -ex;
            nvm use ${NODE_VERSION_DEFAULT}; \\
            npm run docs;
            """
        }
      }
    }

    // stage('SonarCloud ') {
    //   steps {
    //     script {
    //       withCredentials([
    //         string(credentialsId: 'sonar_server_host', variable: 'SONAR_HOST'),
    //         string(credentialsId: 'sonar_server_login', variable: 'SONAR_LOGIN')
    //       ]) {
    //         sh """
    //           . ~/.bashrc > /dev/null;
    //           set -ex;
    //           nvm use ${NODE_VERSION_DEFAULT}; \\
    //           npm run sonar -- -Dsonar.host.url=${SONAR_HOST} -Dsonar.login=${SONAR_LOGIN};
    //           """
    //       }
    //     }
    //   }
    // }
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
