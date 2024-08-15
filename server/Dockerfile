FROM node:18.18.0-alpine

WORKDIR /usr/src/server

COPY package*.json ./

RUN npm install

COPY . .

RUN npx tsc

EXPOSE 3000 9229

CMD ["npm", "run", "dev"]
