// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// console.log(fs);
// fs.appendFile('greeting.txt','Hi' + user.username + '!\n',()=>{
//    console.log("file is created")
// ;})
// const notes = require('./notes.js');
// console.log('server file is loaded');
// var age = notes.age;
// console.log(age);
//  var result = notes.addNumber(age + 12,13);
//  console.log(result);
// const notes = require('./notes.js');
// var _= require('lodash');
// console.log('server file is available');
// var age = notes.age;
//   app.get('/idli',(req,res)=>{
//    var customized_idli = {
//       name:'rava idli',
//       size: '10cm diameter',
//       is_sambhar: true,
//       is_chutney: false
//   }
//   res.send(customized_idli);
//  });

//  app.get('/items',(req,res)=>{
//    res.send('data is saved');
//  });

// var data = ["person","person",1,2,1,2,'name','age','2'];
// var filter = _.uniq(data);
// console.log(filter);

// console.log(_.isString(true));

// const jsonString = '{"name": "John","age": 30,"city":"New York"}';
//  const jsonObject = JSON.parse(jsonString);
//  console.log(jsonObject.name);

// const objectToConvert = {
//     name : "Alice",
//     age : 28
// };
// const json = JSON.stringify(objectToConvert);
// console.log(json);

// console.log(typeof json);

const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/',function(req,res){
   res.send('Welcome to our hotel');
});

app.get('/chicken',function(req,res){
   res.send('sure sir, i would love to serve chicken');
})

const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);

app.listen(5000,()=>{
   console.log('listening on port 5000');
});

// const db = mongoose.connection;
