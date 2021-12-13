import express from "express";
import {getUsers, getUser, createUser, deleteUser, updateUser} from "../controllers/users.js";

const router = express.Router();

//Get request 
router.get(`/`, getUsers);

//Get request with a specific id
router.get('/:id', getUser);

//Post request 
router.post(`/adduser`, createUser);

//Delete request with a specific id
router.delete(`/:id`, deleteUser);

//Update request with a specific id
router.patch(`/:id`, updateUser);

export default router;