FROM node AS builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app
RUN ["ng","build","--prod"]

FROM nginx
COPY --from=builder dist/myapp/ /usr/share/nginx/html
COPY --from=builder nginx.conf /etc/nginx/nginx.conf
EXPOSE 80