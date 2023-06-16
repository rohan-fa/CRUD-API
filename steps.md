# index.js 
run 
 npm install --save express
- go to package.json, after main write "type": "module" (it will allow us to import)
###  After running the server error showed
- for that we need to give the routing 
### lets create our first route
-after that lets install nodemon 
npm install --save-dev nodemon
### package.json
- remove the "test" and replace that with "start": "nodemon index.js"
### steps that we are going to do 
- GET /users [find the users]
- POST /users [create a user]
- GET /users/:id [find user details] 
- DELETE /users/:id [delete user]
- PATCH /users/:id [updates a user]

## Create routes  
### create folder name routes
- users.js
### users.js 
- after creating the routes
```
const router = express.Router();

router.get('/users', (res, req) => {
    res.send('jeei');
});
```
### go to the inddex.js
- import ./routes/users.js
- after bodyParser [app.use(bodyParser,json())]
```
app.use('/users')  //set the starting path for all the routes in the users file like there is something that all routes have
```
``` 
GET /users 
POST /users 
GET /users 
DELETE /users
PATCH /users 
```
### now in users file routes are working fine 
```
router.get('/', (req, res) => {
```
## lets create user schema
this will be representation of how the user data should look like 
### user.json
```
{
    "firstName": "Rohan",
    "lastName": "Farzana",
    "age": 25
}
```
- users.js
create an array 
```
const users = [
    {
        firstName: "Rohan",
        lastName: "Farzana",
        age: 25
    }
]
```
- in post method we can no longer use browser, browser only makes get req



