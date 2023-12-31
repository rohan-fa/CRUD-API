import { v4 as uuidv4 } from 'uuid';

let  users = [];


export const getUsers = (req, res) => {
    res.send(users);    //let send some usefull thing so the user can see
};

export const createUser = (req, res) => {

    const user = req.body;

    users.push({...user, id: uuidv4()});     //instead of pushing user we just push the user with id

    //with pust we can add the value to an array 
    res.send(`user with the name ${user.firstName} added to the database`);
};

export const getUser =  (req, res) => {

    const { id  } = req.params;
    
    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
};


export const deleteUser =  (req, res) => {
    const { id } = req.params;
    
    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted from the database`);
};

export const updateUser =  (req, res) => {
    const { id } = req.params;

    const { firstName, lastName, age } = req.body;
    
    const user = users.find((user) => user.id === id);

    if(firstName) user.firstName = firstName; 
    if(lastName) user.lastName = lastName; 
    if(age) user.age = age; 
    
    res.send(`user id has been ${id}, updated`);    

};

