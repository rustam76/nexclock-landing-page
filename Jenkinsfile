pipeline {
    agent any

    environment {
        APP_DIR = "/var/www/kostmu/landing-page-kostmu"
        IMAGE_NAME = "kosmu-landing"
        BRANCH = "master"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: "${BRANCH}", url: 'https://github.com/rustam76/landing-page-kostmu.git'
            }
        }

        stage('Update Code') {
            steps {
                script {
                    if (!fileExists("${APP_DIR}")) {
                        sh "sudo git clone https://github.com/rustam76/landing-page-kostmu.git ${APP_DIR}"
                    } else {
                        sh """
                            cd ${APP_DIR}
                            sudo git reset --hard
                            sudo git pull origin ${BRANCH}
                        """
                    }
                }
            }
        }

        stage('Tag Old Image') {
            steps {
                script {
                    def oldImage = sh(
                        script: "sudo docker images -q ${IMAGE_NAME}:latest",
                        returnStdout: true
                    ).trim()

                    if (oldImage) {
                        sh "sudo docker tag ${IMAGE_NAME}:latest ${IMAGE_NAME}:previous"
                        echo "Tagged old image as ${IMAGE_NAME}:previous"
                    } else {
                        echo "No previous image found, skipping rollback tagging"
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                dir("${APP_DIR}") {
                    sh "sudo docker compose build"
                }
            }
        }

        stage('Deploy Container') {
            steps {
                dir("${APP_DIR}") {
                    sh """
                        sudo docker compose down
                        sudo docker compose up -d
                    """
                }
            }
        }

        stage('Cleanup') {
            steps {
                sh "sudo docker image prune -f"
            }
        }
    }

    post {
        success {
            echo '✅ Deployment completed successfully'
        }
        failure {
            echo '❌ Deployment failed - Rolling back to previous version'
            script {
                def prevImage = sh(
                    script: "sudo docker images -q ${IMAGE_NAME}:previous",
                    returnStdout: true
                ).trim()

                if (prevImage) {
                    dir("${APP_DIR}") {
                        sh """
                            sudo docker compose down
                            sudo docker tag ${IMAGE_NAME}:previous ${IMAGE_NAME}:latest
                            sudo docker compose up -d
                        """
                    }
                    echo "🔄 Rolled back to previous image successfully"
                } else {
                    echo "⚠️ No previous image found to rollback"
                }
            }
        }
    }
}
