FROM node

WORKDIR /app/shopping_ms

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8003

CMD ["npm", "start"]