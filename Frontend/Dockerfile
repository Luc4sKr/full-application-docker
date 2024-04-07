# 1. For build React app
FROM node:21.7.1 AS development

WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm ci

COPY . /app
ENV CI=true
ENV PORT=3000

FROM development AS build
RUN npm run build

FROM development as dev-envs

COPY --from=gloursdocker/docker / /

# 2. For Nginx setup
FROM nginx:alpine
COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]