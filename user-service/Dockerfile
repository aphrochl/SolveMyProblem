# Dockerfile
FROM node:14

# Create and set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 3001

# Command to run the application
CMD ["npm", "start"]
