FROM node:18
WORKDIR /usr/src/clean-api
COPY ./package.json ./
RUN npm install --only=prod
COPY ./dist ./dist
EXPOSE 5000
CMD npm start
