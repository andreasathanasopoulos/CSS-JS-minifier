FROM node:lts

RUN apt-get update -qq && apt-get install -y build-essential

WORKDIR /src

ADD src/package.json .
ADD src/Gruntfile.js .

RUN npm install grunt-cli -g
RUN npm install

CMD ["grunt"]