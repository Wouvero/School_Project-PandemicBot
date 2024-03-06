const mysql = require('mysql');
const express = require('express');
const bodyParser= require('body-parser');
const cors= require('cors');
const app = express();
require('dotenv').config();

let connection;
var dbConfig={
    host:"eu-cdbr-west-01.cleardb.com",
    user :"b83ab983f72f75",
    password:"ff383763",
    database:"heroku_d6dda919b570247"
};

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

function handleDisconnect() {
    connection = mysql.createConnection(dbConfig);
    connection.connect(function(err) {
        if(err) {
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000);
        }
    });
    connection.on('error', function(err) {
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnect();
        } else {
            throw err;
        }
    });
}

app.get("/api/get",(req,res)=>{
    const select = "SELECT * FROM opiniontable";
    connection.query(select,(err,result)=>{
        let values={
            total:result.length,
            adaptation:{terrible:0,
                        bad:0,
                        ok:0,
                        good:0,
                        great:0
            },
            betterForm:{no:0, yes:0},
            evaluationSchool:{no:0, yes:0},
            interruptingStudies:{no:0, yes:0},
            personalScale:{1:0, 2:0, 3:0, 4:0,5:0},
            remainForm:{no:0, yes:0}
        };

        for (let i = 0; i < result.length; i++) {
            if(result[i].adaptation==="bad"){
                values.adaptation.bad++;
            }
            else if(result[i].adaptation==="good"){
                values.adaptation.good++;
            }
            else if(result[i].adaptation==="great"){
                values.adaptation.great++;
            }
            else if(result[i].adaptation==="terrible"){
                values.adaptation.terrible++;
            }
            else{
                values.adaptation.ok++;
            }

            if(result[i].betterForm==="yes"){
                values.betterForm.yes++;
            }
            else{
                values.betterForm.no++;
            }

            if(result[i].evaluationSchool==="yes"){
                values.evaluationSchool.yes++;
            }
            else{
                values.evaluationSchool.no++;
            }

            if(result[i].interruptingStudies==="yes"){
                values.interruptingStudies.yes++;
            }
            else{
                values.interruptingStudies.no++;
            }

            if(result[i].remainForm==="yes"){
                values.remainForm.yes++;
            }
            else{
                values.remainForm.no++;
            }

            if(result[i].personalScale===1){
                values.personalScale["1"]++;
            }
            else if(result[i].personalScale===2){
                values.personalScale["2"]++;
            }
            else if(result[i].personalScale===3){
                values.personalScale["3"]++;
            }
            else if(result[i].personalScale===4){
                values.personalScale["4"]++;
            }
            else{
                values.personalScale["5"]++;
            }
        }
        console.log(values);
        res.send(values);
    })

})

app.post('/api/post',(req,res) => {

    const adaptation=req.body.slots.adaptation;
    const betterForm=req.body.slots.betterForm;
    const evaluationSchool=req.body.slots.evaluationSchool;
    const interruptingStudies=req.body.slots.interruptingStudies;
    const personalScale=req.body.slots.personalScale;
    const remainForm=req.body.slots.remainForm;

    const insert = "INSERT INTO opiniontable (adaptation, betterForm, evaluationSchool, interruptingStudies, personalScale, remainForm) VALUES (?,?,?,?,?,?)";
    connection.query(insert,[adaptation, betterForm, evaluationSchool, interruptingStudies, personalScale, remainForm],(err,result)=>{
        if(err) console.log(err);
    })
});

app.listen(process.env.PORT || 3001, function() {
   console.log('Server is running on port 3001');
});
handleDisconnect();