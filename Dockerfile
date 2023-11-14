FROM node:21

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci
RUN npm install -g nodemon


COPY . .

ENTRYPOINT ["npm", "run", "dev"]