FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Copy packages.json
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install dependencies only for production
RUN npm i

# Copy all tsconfig
COPY tsconfig*.json ./

# Copy all src
COPY src ./src

# Build library
RUN npm run build:main

# Run server.js
CMD [ "node", "build/main/server.js" ]
