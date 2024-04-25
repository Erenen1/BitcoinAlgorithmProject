FROM node:18.18.0-alpine

COPY . /app

WORKDIR /app

RUN npm install 

CMD ["npm", "run","start"]