FROM node:10-alpine
LABEL Marcos de Matos Machado : 1.1

RUN ln -s /usr/local/bin/node /usr/bin/nodejs
RUN ln -s /usr/local/bin/node /usr/bin/node

WORKDIR /opt/
ADD ./docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
RUN mkdir /opt/node-test-middle
WORKDIR /opt/node-test-middle

CMD ["/bin/sh","/docker-entrypoint.sh"]