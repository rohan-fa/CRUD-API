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
users.js
### users.js 
after creating the routes
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
users.js
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
in post method we can no longer use browser, browser only makes get req. need postman for that 
### Postman 
```
http://localhost:5000 //make a get request

```
making a post req in postman 
inside body
```
POST res http://localhost:5000/users

{
    "firstName" : "chubby",
    "lastName" : "larry",
    "age" : 324
}
```
```
router.post('/', (req, res) => {
    console.log('POST ROUTES');

    console.log(req.body);
    //with pust we can add the value to an array 
    res.send('shoqw me');
});
```
after writing this code go to the postman and resend the request
and see in the terminal the output 
now we can put (req.body) in constant as we know whats in there

```
npm install uuid

```
as we gave snow other people can have the same name so we need unique id for that 

So just copied an id from website imported it and ID should place under the user we just created 
```
router.post('/', (req, res) => {

    const user = req.body;
    const userId = uuidv4(); 

    const userWithId = { ...user, id: userId } //we made an object, we just included the current user, and added with the property id and added the value on id.

    users.push(userWithId);     //instead of pushing user we just push the user with id
```
after simplification 
```

    const user = req.body;

    users.push({...user, id: uuidv4()});     //instead of pushing user we just push the user with id
```
as we only mentioned the lines only once. So I was easier to shoetend it
### Now get the Id 
```
router.get('/:id', (req, res) => {
    res.send("GET Id route");
});
```
```
/:id
```
This id hits anything you write. so to retrieve the exact user Id, ex: /users/2 => can we retrieve the 2 in this callback function. we can it stored in => req.params [params is the parameter to our function]. In this case the only param we do have is the 
```
:id
```
so we going to have an object and the id: 2
```
/users/2 => req.params { id: 2}
```
we dont want to send the id as in the code. we want to send the user data for a specific id. for that to work we neen to find a user in our user database that has the same id. 
```
router.get('/:id', (req, res) => {

    const { id  } = req.params;
    
    console.log(req.params);
    res.send(req.params);
});
```
so we can do 
```
users.find((user) => user.id === id);
```
in here we get each user and what are we searching for? well we are searching for if a user that id is equal to the id that there the destructured one. if that the case then we are going to get the user. 
```

router.get('/:id', (req, res) => {

    const { id  } = req.params;
    
    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
});
```
### Delete the user
now we want to remove that element from that array. for that we need to use filter function.for that we get each user for each iteration. with that filter function whatever is return is true? it keeps that user in the array. but if that is false it removes from that array. 
```
// id to delete 123

//john 123
// jane 321
```
so now we go into the function (user) user is john. and his id 123. the id we want to delete is also 123. since we have unequal operator where and these two are equal. this going to return false. 
```
users = users.filter((user) => !user.id === id);
```
working fine in the postman
```
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    
    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted from the database`);
});
```
last thing is left to do is update
### PUT 
for overwrite something. if you want change everything in the user? that's the method
### PATCH 
use for partially modify something like age, name

if statement to check if there is any firstName. Then set the user.firstName . user means which we found to update. to be simply firstName. then we can repeate this for everything. 
```
router.patch('/:id', (req, res) => {
    const {id} = req.params;

    const { firstName, lastName, age } = req.body;
    
    const user = users.find((user) => used.id === id);

    if(firstName){
        user.firstName = firstName; 
    }

    if(lastName){
        user.lastName = lastName; 
    }
    if(age){
        user.age = age; 
    }
});
````
for this we can change many properties of a user









