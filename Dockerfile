FROM node AS builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN ["npm" "install", "&&", "ng","build","--prod"]
COPY . /usr/src/app

FROM nginx
COPY --from=builder /usr/src/app/dist/myapp/ /usr/share/nginx/html
COPY --from=builder /usr/src/app/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80