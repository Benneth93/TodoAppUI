#stage 1
FROM node:latest as node

WORKDIR /app

COPY package.json /app/package.json


#stage 2
RUN npm install -g @angular/cli
RUN npm install
COPY . .

EXPOSE 4200

CMD ["npm", "run", "startdocker"]