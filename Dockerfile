FROM node:21

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY wait-for-it.sh /usr/src/app/
RUN chmod +x /usr/src/app/wait-for-it.sh

CMD [ "node", "src/index.js" ]