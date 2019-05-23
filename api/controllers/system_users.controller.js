const db = require("../../configs/db.config.js");
const system_users = db.system_users;

//Бүх хэрэглэгчийн буцаах
exports.userlist = (req, res) => {
    system_users.findAll({}).then(results => {
    res.send(results);
   })
  
  };
  

 
//Хэрэглэгчийг id талбараар шүүх буцаах
exports.usersfindbyid = (req, res) => {
    system_users.findOne({where : {id : req.params.id}}).then(results => {  
    res.send(results);
   })
  
  };


exports.createuser = (req, res) => {
    system_users.create({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        mobile : req.body.mobile,
        password : req.body.password
    }).then(() =>{
        res.send('Хэрэглэгчийг хадгалав');
    })
}  
   


exports.updateuser = (req, res) => {
    system_users.findOne({where : {id : req.body.id}}).then(currentuser => {  
        if(currentuser != null){
            currentuser.update({
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                email : req.body.email,
                mobile : req.body.mobile,
                password : req.body.password
            }, {where : {id : req.body.id}}).then(updateduser => {
                res.send(updateduser);
            })
        }
       })
}  
