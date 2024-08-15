# Titan Task Project

## How to Run the Project

### Prerequisites

Ensure all necessary environment variables are set up as the project includes validation checks for these variables. These are crucial for the operation of the services and integrations.

### Starting the Project

To run the project, navigate to the project directory and use Docker Compose:

```bash
cd titan-task/
docker-compose up -d --build
```

This command builds the Docker images and starts the containers in detached mode. Ensure Docker is installed on your system before running this command.

API Endpoints
The application exposes several RESTful endpoints grouped into three main categories:

1. Image Routes
   Fetch Random Image
   Method: GET
   Endpoint: /random-image
   Description: Fetches a random image. This endpoint is intended for demonstrating image retrieval functionality.

2. User Routes
   Get User Orders
   Method: GET
   Endpoint: /users/:id/orders
   Description: Retrieves all orders associated with a given user ID. Replace :id with the actual user ID to fetch their orders.

3. Order Routes
   Create Order
   Method: POST
   Endpoint: /orders
   Description: Creates a new order, according to user pk If a user does not exist in the system, we create a new user.
