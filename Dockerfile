FROM nginx

COPY dist/myapp/ /usr/share/nginx/html

EXPOSE 80