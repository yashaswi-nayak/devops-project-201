FROM node

COPY . /server
WORKDIR /server

RUN ["npm","install"]
RUN ["node","server.js"]

EXPOSE 3000