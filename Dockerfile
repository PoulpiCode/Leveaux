# Use an official Node.js image as the base image
FROM node:22-alpine

WORKDIR /usr/src/app/
# Set the working directory

# # Copy the rest of the application code

# Expose port 3000 for the Next.js app
EXPOSE 3000

# Start the Next.js development server
CMD ["npm", "run", "dev"]
