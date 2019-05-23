

module.exports = function(app){
    const usercontroller = require('../controllers/system_users.controller.js')
    

/**
 * @swagger
 *
 * /api/users:
 *   get:
 *     tags : 
 *       - users 
 *     description: Хэрэглэгчийн жагсаалтыг буцаах
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 */


    app.get('/api/users', usercontroller.userlist);

/**
 * @swagger
 *
 * /api/users:
 *   post:
 *     tags : 
 *       - users 
 *     description: Хэрэглэгч бүртгэх
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 */


app.post('/api/users', usercontroller.createuser);


/**
 * @swagger
 *
 * /api/users/{id}:
 *   get:
 *     tags : 
 *       - users 
 *     description: Хэрэглэгч бүртгэх
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 */


app.get('/api/users/:id', usercontroller.usersfindbyid);



/**
 * @swagger
 *
 * /api/users:
 *   put:
 *     tags : 
 *       - users 
 *     description: Хэрэглэгчийн мэдээлэл засах
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 */


app.put('/api/users', usercontroller.updateuser);



 }
