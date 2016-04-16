FROM alpine
RUN apk update && apk upgrade
RUN apk add nodejs
RUN npm install --save botkit
RUN npm install --save should
RUN npm install --save mocha -g
RUN mkdir -p /opt/sembot
ADD ./src/ /opt/sembot/
CMD token=$TOKEN node /opt/sembot/sembot.js
