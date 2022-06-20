import express from "express";
import axios from "axios";
import cors from "cors"

const server = express();
server.use(cors());



server.listen(5000);