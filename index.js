const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");
const fs = require("fs");


const app = express();
const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "home.html"));
});

app.get("/Jules", (req, res) => {
    res.sendFile(join(__dirname, "home.html"));
});

app.get("/Liam", (req, res) => {
    res.sendFile(join(__dirname, "home2.html"));
});

app.get("/Chloe", (req, res) => {
    res.sendFile(join(__dirname, "home.html"));
});

app.get("/Geoff", (req, res) => {
    res.sendFile(join(__dirname, "home.html"));
});

app.get("/Suraj", (req, res) => {
    res.sendFile(join(__dirname, "home.html"));
});



io.on("connection", (socket) => {
    console.log("a user connected");

    fs.readFile('messages/global_message.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        const liam_message = JSON.parse(data); //now it an object
        io.emit("globalmessage", liam_message.message.toString());
    }});

    fs.readFile('messages/global_message_time.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        const liam_message = JSON.parse(data); //now it an object
        io.emit("globalmessagetime", liam_message.message.toString());
    }});

    fs.readFile('messages/liam_message.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        const liam_message = JSON.parse(data); //now it an object
        io.emit("liammessage", liam_message.message.toString());
    }});

    fs.readFile('messages/liam_message_time.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        const liam_message = JSON.parse(data); //now it an object
        io.emit("liammessagetime", liam_message.message.toString());
    }});

    fs.readFile('messages/jules_message.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        const liam_message = JSON.parse(data); //now it an object
        io.emit("julesmessage", liam_message.message.toString());
    }});

    fs.readFile('messages/jules_message_time.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        const liam_message = JSON.parse(data); //now it an object
        io.emit("julesmessagetime", liam_message.message.toString());
    }});

    fs.readFile('messages/geoff_message.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        const liam_message = JSON.parse(data); //now it an object
        io.emit("geoffmessage", liam_message.message.toString());
    }});

    fs.readFile('messages/geoff_message_time.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        const liam_message = JSON.parse(data); //now it an object
        io.emit("geoffmessagetime", liam_message.message.toString());
    }});

    fs.readFile('messages/chloe_message.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        const liam_message = JSON.parse(data); //now it an object
        io.emit("chloemessage", liam_message.message.toString());
    }});

    fs.readFile('messages/chloe_message_time.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        const liam_message = JSON.parse(data); //now it an object
        io.emit("chloemessagetime", liam_message.message.toString());
    }});

    fs.readFile('messages/suraj_message.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        const liam_message = JSON.parse(data); //now it an object
        io.emit("surajmessage", liam_message.message.toString());
    }});

    fs.readFile('messages/suraj_message_time.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        const liam_message = JSON.parse(data); //now it an object
        io.emit("surajmessagetime", liam_message.message.toString());
    }});

    socket.on("globalmessage", (msg) => {
        console.log("message: " + msg);
        io.emit("globalmessage", msg);
        const content = {
            message: msg
        };
        fs.writeFile('messages/global_message.json', JSON.stringify(content), err => {
            if (err) {
              console.error(err);
            }
            // file written successfully
          });
    });

    socket.on("globalmessagetime", (msg) => {
        console.log("time submitted: " + msg);
        io.emit("globalmessagetime", msg);
        const content = {
            message: msg
        };
        fs.writeFile('messages/global_message_time.json', JSON.stringify(content), err => {
            if (err) {
              console.error(err);
            }
            // file written successfully
          });
    });


    socket.on("liammessage", (msg) => {
        console.log("message: " + msg);
        io.emit("liammessage", msg);
        const content = {
            message: msg
        };
        fs.writeFile('messages/liam_message.json', JSON.stringify(content), err => {
            if (err) {
              console.error(err);
            }
            // file written successfully
          });
    });

    socket.on("liammessagetime", (msg) => {
        console.log("time submitted: " + msg);
        io.emit("liammessagetime", msg);
        const content = {
            message: msg
        };
        fs.writeFile('messages/liam_message_time.json', JSON.stringify(content), err => {
            if (err) {
              console.error(err);
            }
            // file written successfully
          });
    });

    socket.on("geoffmessage", (msg) => {
        console.log("message: " + msg);
        io.emit("geoffmessage", msg);
        const content = {
            message: msg
        };
        fs.writeFile('messages/geoff_message.json', JSON.stringify(content), err => {
            if (err) {
              console.error(err);
            }
            // file written successfully
          });
    });

    socket.on("geoffmessagetime", (msg) => {
        console.log("time submitted: " + msg);
        io.emit("geoffmessagetime", msg);
        const content = {
            message: msg
        };
        fs.writeFile('messages/geoff_message_time.json', JSON.stringify(content), err => {
            if (err) {
              console.error(err);
            }
            // file written successfully
          });
    });

    socket.on("julesmessage", (msg) => {
        console.log("message: " + msg);
        io.emit("julesmessage", msg);
        const content = {
            message: msg
        };
        fs.writeFile('messages/jules_message.json', JSON.stringify(content), err => {
            if (err) {
              console.error(err);
            }
            // file written successfully
          });
    });

    socket.on("julesmessagetime", (msg) => {
        console.log("time submitted: " + msg);
        io.emit("julesmessagetime", msg);
        const content = {
            message: msg
        };
        fs.writeFile('messages/jules_message_time.json', JSON.stringify(content), err => {
            if (err) {
              console.error(err);
            }
            // file written successfully
          });
    });

    socket.on("chloemessage", (msg) => {
        console.log("message: " + msg);
        io.emit("chloemessage", msg);
        const content = {
            message: msg
        };
        fs.writeFile('messages/chloe_message.json', JSON.stringify(content), err => {
            if (err) {
              console.error(err);
            }
            // file written successfully
          });
    });

    socket.on("chloemessagetime", (msg) => {
        console.log("time submitted: " + msg);
        io.emit("chloemessagetime", msg);
        const content = {
            message: msg
        };
        fs.writeFile('messages/liam_message_time.json', JSON.stringify(content), err => {
            if (err) {
              console.error(err);
            }
            // file written successfully
          });
    });

    socket.on("surajmessage", (msg) => {
        console.log("message: " + msg);
        io.emit("surajmessage", msg);
        const content = {
            message: msg
        };
        fs.writeFile('messages/suraj_message.json', JSON.stringify(content), err => {
            if (err) {
              console.error(err);
            }
            // file written successfully
          });
    });

    socket.on("surajmessagetime", (msg) => {
        console.log("time submitted: " + msg);
        io.emit("surajmessagetime", msg);
        const content = {
            message: msg
        };
        fs.writeFile('messages/suraj_message_time.json', JSON.stringify(content), err => {
            if (err) {
              console.error(err);
            }
            // file written successfully
          });
    });
});

server.listen(process.env.PORT || 3000, () =>
    console.log("app is on this shitty site http://localhost:3000")
);
