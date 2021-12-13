import {v4 as uuidv4} from "uuid";
let users = [];

//Get all the Users
export const getUsers = (req, res) => {
    res.send(users.map((u) => u));
};

//Get a user with a specific id
export const getUser = (req, res) => {
    let {id} = req.params;
    let currentUser = users.find((user) => user.id === id);
    res.send(currentUser);
};

//Delete a user with a specific id
export const deleteUser = (req, res) => {
    let {id} = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User deleted successfully`);
};

//Update a user with a specific id
export const updateUser = (req, res) => {
    let {id} = req.params;
    let {firstName, lastName, age} = req.body;
    let userToBeUpdated = users.find(user => user.id === id);

    if(firstName) userToBeUpdated.firstName = firstName;
    if(lastName) userToBeUpdated.lastName = lastName;
    if(age) userToBeUpdated.age = age;
    res.send(`User updated successfully`);
}

//Create new user
export const createUser = (req, res) => {
    let currentUser = {
        id:uuidv4(),
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        age:req.body.age
    };
    users.push(currentUser);
    res.send(`User created successfully!`);
};