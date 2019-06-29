FROM node

LABEL maintainer="Yashaswi Nayak"

COPY . /server
WORKDIR /server

RUN ["npm","install"]
EXPOSE 3000
CMD ["npm","start"]