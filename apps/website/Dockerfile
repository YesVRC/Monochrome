FROM node:slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

#copy source
COPY . .

#build
RUN npm run build

EXPOSE 3000

CMD ["node", "build/index.js"]