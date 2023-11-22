# MERN Stack Steps

## Express and MongoDB
1. create backend file with server.js
2. Node modules for express, dotenv, nodemon, mongoose, and express-async-handler
3. set up server.js
4. set up .env file
8. connect mongoDB
5. set up routes
6. create controllers
7. set up errorhandler and async error handling

## JWT Authentication
1. create user model (name, email, password)
2. set up user routes and controllers
3. set up password hashing when registering user and compare when logging in
4. set up jwt generation with jwt secret and add to payload passed back when registering and logging in
5. create authmiddleware that decrypts jwt and passes auth'd user to the request object
6. change routes to be protect. They can now use the user in the request object for whatever
7. Updated controller functions to make sure goals could only be accessed/changed by the correct user (also changed goal schema to include an associated user)