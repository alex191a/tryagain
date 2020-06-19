
const express = require("express");
const mysql = require("mysql");
const app = express();
const bodyParser = require("body-parser")
const path = require('path');
const cors = require("cors");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
 database: "infoskaerm",
});

con.connect((dberr) => {
  if(dberr){ console.log(dberr); return; }
  else console.log('Connection to Database established');
});
app.get("/GETall", function(req, res) {
  con.query(
    "SELECT arduino.Id, arduino.Area, arduino.Floor, arduino.Room, monitoring.CO2, monitoring.Temp, monitoring.created, arduino.updated FROM arduino LEFT JOIN monitoring ON arduino.Id=monitoring.arduino_id AND arduino.updated = monitoring.created GROUP BY arduino.Id ORDER BY monitoring.created DESC;",
    function(err, result, fields) {
      if (err) throw err;
      res.send(result);
    }
  );
});

app.get('/user/:id', function(req, res) {
  const id = req.params.id;

con.query(
  "SELECT arduino.id, arduino.area, arduino.floor, arduino.room, monitoring.co2, monitoring.temp FROM arduino INNER JOIN monitoring ON arduino.id=monitoring.arduino_id WHERE arduino.id=9 ORDER BY monitoring.created ASC", [id],
    function(err, result, fields) {
      if (err) throw err;
      res.send(result);
    }
  );
});

app.post("/ChosenDate", (req, res) => {
  con.query("CALL ChosenDate(?,?,?);", [req.body.Id, req.body.var1, req.body.var2], (dberr, dbres) => res.send(dbres));
});

app.post("/AverageByTimestamp", (req, res) => {
  con.query("CALL AverageByTimestamp(?,?,?);", [req.body.Id, req.body.var1, req.body.var2], (dberr, dbres) => res.send(dbres) );
});
 
app.post("/arduino", function(req, res) { 
const name = req.body.name; 
const nameparts = name.split("_");
const area = nameparts[0];
const floor = nameparts[1];
const room = nameparts[2];
const co2 = req.body.data.co2; 
const temp = req.body.data.temp;

    con.query("SELECT id FROM arduino WHERE area = ? AND floor = ? AND room = ? ", [area, floor, room], function(err, result, fields){ 
      if (err) throw err;
        var arduinoId = -1;
          if (result.length > 0){
            arduinoId = result[0].Id; 
              insertMonitoringData(arduinoId, co2, temp, res);
                  }
              else {
            con.query("INSERT INTO arduino (area, floor, room) VALUES (?,?,?)", [area, floor, room], function(err, result, fields){ 
          if (err) throw err;
        arduinoId = result.insertId;
      insertMonitoringData(arduinoId, co2, temp, res);
    });
  }
});
    function insertMonitoringData(arduinoId, co2, temp, res) {
        con.query("INSERT INTO monitoring (arduino_id, co2, temp) VALUES (?, ?, ?)", [arduinoId, co2, temp], function(err, result, fields){
          res.send("Success!");
            });
          con.query("UPDATE arduino SET updated = CURRENT_TIMESTAMP() WHERE id = ?", [arduinoId], function(err, result, fields) {
        con.query("DELETE FROM arduino WHERE updated <= TIMESTAMPADD(DAY, -7, CURRENT_DATE)");
      });
    }
  });


app.listen(42000, () => {
  console.log("Server is running at 42000 port!");
});
