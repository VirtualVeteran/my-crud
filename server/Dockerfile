FROM node:alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first to install dependencies
COPY package*.json ./

# Install both the dependencies and nodemon
RUN npm install && npm install -g nodemon

# Copy the rest of the application code
COPY . .

# Expose the app port
EXPOSE 5000

# Command to start the application with nodemon
CMD ["npx", "nodemon", "index.js"]
