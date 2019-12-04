FROM node:11.4.0
WORKDIR /usr/src/app
COPY /package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]
EXPOSE 8081
