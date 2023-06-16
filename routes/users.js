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
    console.log(users);
    res.send('hello');
});

router.post('/', (req, res));

export default router;