FROM node

COPY . /angular
WORKDIR /angular/

RUN ["ng","serve","--prod"]

EXPOSE 4200