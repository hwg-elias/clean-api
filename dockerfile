FROM node:18

WORKDIR /usr/src/clean-api

COPY ./package.json .
RUN npm install --production --legacy-peer-deps