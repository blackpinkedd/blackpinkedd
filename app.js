const express = require('express');
const cors = require('cors');
const { readdir } = require('fs/promises');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req,res) =>{
    res.send("Welcome... use /q?name={name}")
})

var group = require("./BP/group.js")
var groupV2 = require("./BP/GroupV2")

app.get('/group', (req,res) =>{
    res.send(group)
})

app.get('/groupV2', (req,res) =>{
    res.send(groupV2)
})

app.get('/r', (req,res) =>{ 
    //Randomizer

    var jennie = require('./Images/Jennie') 
var jisoo = require('./Images/Jisoo')
const lisa = require('./Images/Lisa');
const rose = require('./Images/Rose');

var jenRandom = jennie.Images[Math.floor(Math.random()*jennie.Images.length)].url;
var jenRandom2 = jennie.Images[Math.floor(Math.random()*jennie.Images.length)].url;

var jisRandom = jisoo.Images[Math.floor(Math.random()*jisoo.Images.length)].url;
var jisRandom2 = jisoo.Images[Math.floor(Math.random()*jisoo.Images.length)].url;

var liliRandom = lisa.Images[Math.floor(Math.random()*lisa.Images.length)].url;
var liliRandom2 = lisa.Images[Math.floor(Math.random()*lisa.Images.length)].url;

var roseRandom = rose.Images[Math.floor(Math.random()*rose.Images.length)].url;
var roseRandom2 = rose.Images[Math.floor(Math.random()*rose.Images.length)].url;

var randomArr = {
    Random : [
       {
          url : liliRandom2
       },
       {
         url: jisRandom
       },
       {
          url: jisRandom2 
       },
       {
          url : jenRandom 
       },
       {
          url : roseRandom2
       },  
       {
          url : roseRandom
       },  
       {
          url : jenRandom2 
       },  
       {  
          url : liliRandom 
       },
    ]

}

res.send(randomArr)
})

app.get('/q', (req,res) =>{
    var inpName = req.query.name.toLowerCase();
    var inpAge = req.query.age;
    //console.log(inpAge);
const folder = './Images/';

const findByName = async (dir, name) => {

const matchedFiles = [];

const files = await readdir(dir);

var newFiles = files;

    //const filename = path.parse(file).name.toLowerCase();

    /*if (filename.startsWith(name)) {
        matchedFiles.push(file);
    }*/
   
let extArrCount = 0
let strCount = 0

var verify = " ";
var related = [];
//i = qarr length; j = qarr[i] length

for (let i = 0; i < newFiles.length; i++) { //qarr length; run times 2
   
    //console.log(newFiles[i].length);
    
    for (let j = 0; j < newFiles[i].length ; j++) { //qarr[i] length
             var temp = newFiles[i].toLowerCase().split('')
             
            // console.log(inpName[extArrCount] , temp[j]);

            if(inpName[extArrCount] === temp[j]){
               verify = newFiles[i]
            }
               if(verify === (newFiles[i])){
                    verify = verify
            }

   //console.log("Exited without entering while");
               while(inpName[strCount] === temp[j]){
                   //console.log(inpName[strCount]);
                   extArrCount++;
                   strCount++
               }
               
            

    }

    if(newFiles[i].toLowerCase().match(verify)){
        related[i] = newFiles[i]
    }
}
//console.log("extArrCount : " + extArrCount)
console.log("related",related)

matchedFiles.push(verify,related);
return matchedFiles;

};
findByName(folder, inpName).then((files) => {
console.log(files)
    
    console.log(inpName, "Search matches => ",files)
 if(files[0] == ' ')
 res.json({ error: 'Not Found'})
 else{
    res.header("Content-Type",'application/json');
    var qFileNormal = require(`./Images/${files[0]}`);
    var v2Res = files[0];//the query string - used for v2
    v2Res = v2Res.replace('.js', 'V2'); //Replacing
    var qFileV2 = require(`./Images/ImagesV2/${v2Res}`)
    //res.sendFile(__dirname + '/Images/'+files[0]);
    if(inpAge >= 18){
     res.send(qFileV2)
    }else{
    res.send(qFileNormal)
}
 }
})
})

app.listen(8080, () => {
    console.log(`Server started on port: 8080`);
});