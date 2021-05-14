# https://betterprogramming.pub/heres-how-you-can-use-docker-with-create-react-app-3ee3a972b04e
FROM node:alpine

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

CMD ["yarn", "start-cra"]
