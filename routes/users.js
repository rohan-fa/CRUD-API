import express from "express";

const router = express.Router();


const users = [
    {
        firstName: "Rohan",
        lastName: "Farzana",
        age: 25
    },
    {
        firstName: "snow",
        lastName: "lexi",
        age: 25
    }
]

//all routes in here are starting with /users
router.get('/', (req, res) => {
    res.send(users);    //let send some usefull thing so the user can see
});

router.post('/', (req, res) => {

    const user = req.body;

    users.push(user);

    //with pust we can add the value to an array 
    res.send(`user with the name ${user.firstName} added to the database`);
});


export default router;