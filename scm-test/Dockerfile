# syntax=docker/dockerfile:1
FROM node:12.18.1
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .
EXPOSE 8083
CMD [ "npm", "start" ]