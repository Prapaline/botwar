FROM node:latest
WORKDIR /app
COPY back/package*.json /app
RUN npm install
COPY back/ /app
EXPOSE 3000
CMD ["node", "server.js"]