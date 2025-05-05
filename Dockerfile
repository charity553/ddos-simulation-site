# Step 1: Build the React app
# Use the official Node.js image to build the React app
FROM node:20 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Step 2: Set up the web server to serve the built React app
# Use a lightweight web server to serve the React app
FROM nginx:alpine

# Copy the build files from the previous step to the Nginx container
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 so the app can be accessed
EXPOSE 80

# Command to run Nginx in the background
CMD ["nginx", "-g", "daemon off;"]
