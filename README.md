## Overview

Fullstack web application to enable URL shortening.

### Project prerequisites 

You will need the following things properly installed on your computer.
* MySQL Ver 8.0.31 for Win64 on x86_64 (MySQL Community Server - GPL)
* NodeJS v16.17.1
* npm v8.15.0

Do ensure that the database, dotenv and dependency setup is performed before running the application.

### Database setup
1. Open an instance of the command line client. 
2. Run `mysql -u <username> -p` and enter your password when prompted.
3. Create a new database with `CREATE DATABASE <database_name>;`
4. Confirm its creation with `SHOW DATABASES;`, then exit the command line client by typing `exit`

### Dotenv setup

#### `/backend/.env`
* MYSQL_USERNAME = < mysql username >
* MYSQL_PASSWORD = < mysql password >
* MYSQL_DATABASE = < database_name from above >
* MYSQL_HOST = < mysql host>
* MYSQL_PORT = < mysql port>
* TYPEORM_SYNC* = < true | false >
* API_PORT = < api port to expose >

*If set to `true`, database schema changes in `/backend/src/typeorm/Urls.ts` will be dynamically synced with the database. 

#### `/frontend/.env`
* REACT_APP_BASE_API = < backend base api endpoint >

### Installing dependencies
1. Open an instance of the command line client.
2. Change directory to `/backend. Run the command `npm install`
3. Return tho the root directory, then to `/frontend`. Run the command `npm install`

### Running the application locally
1. Open two instances of the command line client.
2. For the first instance:
		a. Change directory to `/backend`
		b. Run the command `npm run start`
3. For the second instance:
		a. Change directory to `/frontend`
		b. Run the command `npm start`

4. Once the backend and frontend servers are running, visit http://localhost:3000
