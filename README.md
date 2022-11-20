# CRUD movie reviews app 

For this moment I consider this app a boilerplate for easy start for fullstack
To get started install both branches in separate folders


# There are 2 branches in this repo:
## 1. server (MySQL DB, Node.js/Express, TS)
To get all dependencies type ```npm i``` in terminal. For simplicity there are one main index.ts file that conveniently holds basic ```get, post, put, delete``` HTTP methods to address your MySQL DB via string SQL commands. 
Express, mysql, cors, bodyParser libraries provides the rest, but I really should transfer to Prisma later when i'll learn it. When you're done writing backend type ```tsc``` command to compile TS to JS, Your code in dist folder now.

To run the server in package.json I added scripts like 
```npm start``` = ```node ./dist/index.js```
```npm dev``` = ```nodemon ./dist/index.js``` (so you won't need to restart the server all the time)

## 2. client (React/TS, scss)
Basic React project that handles server interaction, not that interesting because React is relatively simple for me. 

I'm mostly focused on comprehending the backend part for this project because I'm new to it.