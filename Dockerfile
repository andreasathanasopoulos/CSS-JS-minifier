FROM node:lts

RUN apt-get update -qq && apt-get install -y build-essential

RUN mkdir /src

RUN npm install grunt-cli -g

WORKDIR /src

ADD src/package.json /src/package.json
RUN npm install

ADD src/Gruntfile.js /src/Gruntfile.js

CMD ["grunt"]