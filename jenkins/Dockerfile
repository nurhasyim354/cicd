FROM jenkins/jenkins:lts
MAINTAINER muhammadnur.hasyim@mitrais.com
USER root

RUN apt-get update && \
    apt-get -y install apt-transport-https \
      ca-certificates \
      curl \
      gnupg2 \
      software-properties-common && \
    curl -fsSL https://download.docker.com/linux/$(. /etc/os-release; echo "$ID")/gpg > /tmp/dkey; apt-key add /tmp/dkey && \
    add-apt-repository \
      "deb [arch=amd64] https://download.docker.com/linux/$(. /etc/os-release; echo "$ID") \
      $(lsb_release -cs) \
      stable" && \
   apt-get update && \
   apt-get -y install docker-ce

# install jenkins plugins
COPY ./jenkins-plugins /usr/share/jenkins/plugins
RUN while read i ; \ 
		do /usr/local/bin/install-plugins.sh $i ; \
	done < /usr/share/jenkins/plugins

# allows to skip Jenkins setup wizard
ENV JAVA_OPTS -Djenkins.install.runSetupWizard=false

VOLUME /var/jenkins_home 
