# CRUD movie reviews app 

For this moment I consider this app a boilerplate for easy start for fullstack.
To get started install both branches in separate folders.
`Deployment on gh-pages isn't working because of local DB & you need to install this project locally to run the project`


# There are 2 branches in this repo:
## 1. server (MySQL DB, Node.js/Express, TS)
To get all dependencies type ```npm i``` in terminal. For simplicity there are one main index.ts file that conveniently holds basic ```get, post, put, delete``` HTTP methods to address your MySQL DB via string SQL commands. 
Express, mysql, cors, bodyParser libraries provides the rest, but I really should transfer to Prisma later when i'll learn it. 

When you're done writing backend type ```tsc``` command to compile TS to JS, Your code will be in dist folder now.

To run the server in package.json I added these scripts:
| shortcut | command |
| ------ | ------ |
| npm start | node ./dist/index.js |
| npm run dev| nodemon ./dist/index.js |
||(so you won't need to restart the server all the time)|




## 2. client (React/TS, scss)
Axios for server interaction; sass for styling; TypeScript for convenience. There are 3 pages for now: Reveiws, Login and Register. They are located in `./src/Pages` folder.
On Reveiw page you can post movie and review that ends up in MySQL. Also you can edit and delete review. Reveiws list sorted by movieName.
On register you know what happend 😊. Your data sends to rout then to SQL; E-mail field has reg ex user has to type correct email. On Login you type your data if it's in DB you reciev msg Authed else There is no such user, but for now it doesn'd really autharize you. In future it will.


I'm mostly focused on comprehending the backend part for this project because I'm used to frontend and new to backend.