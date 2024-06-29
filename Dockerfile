# Use the official node image as a base
FROM node:18

# Set the working directory
LABEL maintainer="Hanuman"

WORKDIR /usr/cf

COPY ./package.json ./package.json


COPY . .

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

RUN npm run build


# Start the Vite dev server
CMD ["npm", "run", "preview"]
