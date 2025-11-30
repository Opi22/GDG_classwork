const fs = require("node:fs");
const path=require("node:path");
function printPath(){
    console.log(__filename);
}
printPath();

function printExtention(_path){
    console.log(path.extname(_path));
}

printExtention(__filename); //output:  .js
printExtention("myHome.py"); //output: .py

function absolut(_path){
    console.log(path.isAbsolute(_path));
}
absolut(__dirname); //logs: true
absolut("home.txt"); //logs: false

function joinPath(pth1, pth2){
    console.log(path.join(pth1, pth2));
}
joinPath("GDG_classwork", "assignmnet2/index.js"); //outputs: GDG_classwork\assignmnet2\index.js


function parsFormat(_path){
    let parsed = path.parse(_path);
    console.log("parsed object:",parsed);
    let formated= path.format(parsed);
    console.log("formeted object:",formated);
}

parsFormat(__dirname);

//creating an Express server to Take user Data and log it on console:
const express =require("express");
const app= express()
const port= 3033
app.use(express.json());
app.listen(port, ()=>console.log(`server is running on port ${port}`));
app.post("/user", (req,res)=>{
    console.log("User send", req.body);
    res.json({message:"Signu Up secessfull"});
});
