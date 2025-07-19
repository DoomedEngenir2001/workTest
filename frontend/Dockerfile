FROM node:alpine as build
# Copy custom Nginx configuration
COPY package.json package.json
FROM nginx:stable-alpine
COPY  /build /usr/share/nginx/html
COPY  nginx.conf /etc/nginx/conf.d/default.conf
# Copy project to nginx
COPY /build /usr/share/nginx/html/
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]