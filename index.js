// const (fun1, X) = require("./module1")

// const (cal) = require("./module2")

// console.log("iam main module")

// console.log(obj.fun1());

// let a = 4;
// let b = 5;

// console.log(obj.X)

const http = require("http")
const server = http.createServer((req, res)=>{
    res.write("hello world")
    res.end("")
})
server.listen("3101",()=>{
    console.log("server is running")

})
