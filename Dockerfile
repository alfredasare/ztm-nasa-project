FROM node:lts-alpine

WORKDIR /app

# Copy just package.json file to /app directory
COPY package*.json ./

# Copy both package.json and package lock
COPY client/package*.json client/
RUN npm run install-client --only=production

COPY server/package*.json server/
RUN npm run install-server --only=production

COPY client/ client/
RUN npm run build --prefix client

COPY server/ server/

USER node

CMD ["npm", "start", "--prefix", "server"]

EXPOSE 8000