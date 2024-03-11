// server/index.js
const express = require("express");
const mysql = require("mysql");
const cors = require("cors")

const connection = mysql.createConnection({
    host: "employee.cbo228gem2t2.us-east-2.rds.amazonaws.com",
    port: "3306",
    user: "edonson",
    password: "employeechocolate",
    database: "employee"
});

connection.connect(function(err) {
    if(!err) {
        console.log("Database is connected ... ");    
    } else {
        console.log("Error connecting database ... ");
    }
})

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors())

app.post("/api", (req, res) => {
    
    console.log(req)
    res.status(200).send("OK");
    var employee =  { "empid": ``, "fname": ``, "lname": ``, "pri_skill": ``, "location": `` };
    connection.query('', user, function (err, res) {
        if (err) throw err;
    });
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});