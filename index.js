const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = 3000;

io.on("connection",  ()=> {
    console.log("a user connected :D");
    // socket.on("chat message", msg => {
    //     console.log(msg);
    //     io.emit("chat message", msg);
    // });

    io.emit("flex", Math.random())
});

app.get("/", (req, res) => {
    console.log(JSON.stringify(req.headers))
    res.send("This is home page.");

 });

server.listen(port, () => console.log("server running on port:" + port));
// 