FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ARG ENVIRONMENT=development

RUN if [ "$ENVIRONMENT" = "production" ]; then npm run build -- --configuration=production; else npm run build; fi

FROM nginx:alpine
COPY --from=build /app/dist/zine-eddinetoubal /usr/share/nginx/html


EXPOSE 80