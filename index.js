import express from "express";
import cors from "cors"
import fs from "fs"

const server = express();
server.use(cors());
server.use(express.json());

let users = JSON.parse(fs.readFileSync("usersDatabase.json", "utf-8"));

server.post("/sign-up", (req, res)=>{
    const {username, avatar} = req.body;
    if(!username||!avatar){
        res.status(400).send("Name or Avatar required!");
        return;
    }
    users.user.push({
        username,
        avatar
    })

    fs.writeFileSync("usersDatabase.json", JSON.stringify(users, null, 2));
    res.status(200).send("OK")
})

server.post("/tweets", (req, res)=>{
    const {username, tweet} = req.body;
    if(!username||!tweet){
        res.status(400).send("Name or tweet required!");
        return;
    }
    users.tweets.push({
        username,
        tweet
    })

    fs.writeFileSync("usersDatabase.json", JSON.stringify(users, null, 2));
    res.status(200).send("OK")
})

server.listen(5000, ()=>{
    console.log("Servidor Acessado")});