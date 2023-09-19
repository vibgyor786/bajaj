// Importing express module
const express = require('express');
const app = express();
const port=process.env.PORT || 3000;
app.use(express.json());
var bodyParser = require('body-parser')

// var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

function isNumeric(s) {
    return !isNaN(s - parseFloat(s));
}
function isCharLetter(char) {
    return char.toLowerCase() !== char.toUpperCase();
  }
// parse application/json
app.use(bodyParser.json())
app.get('/', (req, res) => {
res.status(200).send({
    working:1
   })
});
app.get('/bfhl', (req, res) => {
res.status(200).send({
    operation_code:1
   })
});

app.post('/bfhl', (req, res) => {
// console.log(req.body)
let data=req.body.data;
if(data.length==0){
    res.status(200).send({
        status:false,
        error:"Input array is empty"
    })
}
let arrl=[]
let arrn=[]
let obj={

user_id: "ganeshsahu_18032002", 
email : "ganesh.sahu2020@vitstudent.ac.in",
roll_number:"20BEE0124",

}
let maxc=''
for(var i=0;i<data.length;i++){
if(isCharLetter(data[i]) && data[i].length==1){
    arrl.push(data[i])
    if(data[i]>maxc){
        maxc=data[i]
    }
}
if(isCharLetter(data[i]) && data[i].length>1){
    obj.status=false
    obj.error="One string is containing more than one character"
res.status(200).send(obj)
}

if(isNumeric(data[i])){
    arrn.push(data[i])
}
}
let objx={
    status:true,
    user_id: "ganeshsahu_18032002", 
email : "ganesh.sahu2020@vitstudent.ac.in",
roll_number:"20BEE0124",
numbers: arrn,
alphabets: arrl,
highest_alphabet:maxc

}
res.status(200).send(objx);
});

app.listen(port, () => {
console.log('Our express server is up on port 3000');
});
