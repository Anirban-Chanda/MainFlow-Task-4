
##### **MainFlow Services and Technologies**
###  Web Development Internship Task 4

## To DO List Web App

A Simple To Do App where users can:
* Add, Remove Tasks
* Mark tasks as Complete or Incomplete

### Dependendencies:

* **Database:** [MarkLogic](https://developer.marklogic.com/products/marklogic-server) to store data in XML format
* **Backend:** [Express JS](https://expressjs.com/)
* **Frontend:** [React](https://react.dev/)

---

### How to use:

Install the following
* [MarkLogic Server](https://developer.marklogic.com/products/marklogic-server)
* [Node JS](https://nodejs.org/)
* [Git](https://git-scm.com/downloads)


#### Create environment file:
After clonning this repository with `git`, Replace values as necessary or according to the database setup:
```
cd to-do-app
echo "
FRONTEND_URL=http://localhost:3000
BACKEND_PORT=3001
MARKLOGIC_USER=replace_user_name
MARKLOGIC_PASSWORD=replace_password
MARKLOGIC_HOST=localhost
MARKLOGIC_PORT=8000
MARKLOGIC_AUTH_TYPE=digest
MARKLOGIC_DATABASE=replace_database_name
" > .env
```
Make sure variables in `.env` are loaded into your environment depending on the OS.


#### Backend:
```
cd backend
npm install
npm start
```

#### Frontent:
```
cd frontend
echo "REACT_APP_BACKEND_URL=http://localhost:3001" > .env
npm install
npm run build
npm install -g serve
serve -s build
```

Open http://localhost:3000 or whichever host frontend is deployed to in a browser.