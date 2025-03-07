# Step 1: Use an official Node.js image as the base image
FROM node:14

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to optimize Docker build cache
COPY package*.json ./

# Step 4: Install the dependencies defined in package.json
RUN npm install

# Step 5: Copy the entire application code to the container
COPY . .

# Step 6: Expose the port your application will run on
EXPOSE 3000  
# Change this to your app's port if it's different

# Step 7: Set environment variables (optional)
# You can either pass these through .env files or Docker commands during container startup
# For example, you could use a Docker Compose file or pass variables via `docker run`
ENV DB_HOST=localhost
ENV DB_PORT=5432
ENV DB_USER=postgres
ENV DB_PASSWORD=arya
ENV DB_NAME=loan_forecasting

# Step 8: Start the application
CMD ["npm", "start"]
