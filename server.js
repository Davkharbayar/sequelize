const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const db = require('./configs/db.config.js');



//Sequelize database sync 
db.sequelize.sync({force: false}).then(() => {
    console.log('Drop and Resync with { force: false }');
  });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
app.use(cors());
app.use(express.static('public'));
app.use('./assets/images', express.static('public'));
app.options("*",function(req,res,next){
    res.header("Access-Control-Allow-Origin", req.get("Origin")||"*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
      res.status(200).end();
  });
  

//route 
require('./api/routes/system_users.route.js')(app);


app.listen(port, function(){
    console.log(`Сервер ${port} порт дээр асаалттай байна.`);
})