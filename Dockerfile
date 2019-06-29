FROM node AS builder

LABEL maintainer="Yashaswi Nayak"

COPY package.json package-lock.json ./
RUN npm i && mkdir /ng-app && mv ./node_modules ./ng-app
WORKDIR /ng-app
COPY . .
RUN $(npm bin)/ng build --prod --output-path=dist


FROM nginx
COPY --from=builder /ng-app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80