**Project Name - Docker Compose DB**

**Description**

This project demonstrates the setup of a MongoDB database using Docker Compose.

**Requirements**
Docker: Ensure that Docker is installed on your machine.

**Installation**
1. Clone the repository:

git clone https://github.com/vidya0206/docker_compose_Db.git

2. Navigate to the project directory:
   
 cd docker_compose_Db

4. Start the Docker containers:

docker-compose up -d

4.Verify that the containers are running:

docker-compose ps

**Configuration**

Database Volume: The configuration uses a Docker volume to persist MongoDB data. Modify the docker-compose.yml file to specify a different volume or change the volume configuration as per requirements.

**Usage**

Accessing the MongoDB database Connect to the MongoDB instance using a MongoDB client. Connect to localhost on the specified port (default: 27017) using the credentials specified in the docker-compose.yml file.

**Maintenance**

Stopping the containers:

docker-compose down


**Contributing**

Contributions are welcome! If you encounter any issues or have suggestions for improvement, please create a new issue or submit a pull request.



