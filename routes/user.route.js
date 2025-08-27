import { Router } from "express";
import { createUser, getAllUser, getUser, updateUser, userDelete } from "../controllers/user.controller.js";

const routes = Router();

routes.post("/users", createUser);
routes.get("/users",getAllUser)
routes.get('/users/:id',getUser);
routes.delete("/users/:id",userDelete)
routes.patch("/users/:id",updateUser)

export default routes;