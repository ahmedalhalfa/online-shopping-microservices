FROM node

WORKDIR /app/product_ms

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8002

CMD ["npm", "start"]