FROM node

COPY . /server
WORKDIR /server

RUN ["npm","install"]
EXPOSE 3000
RUN ["node","server.js"]