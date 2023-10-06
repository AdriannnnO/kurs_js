const { createPool } = require('mysql')

const pool = createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"test",
})

pool.query(`select * from zakupy`, (eer, result, fields)=>{
    if (eer){
        return console.log("huj ci w pizde" + eer);
    }
    return console.log(result)
})

module.exports = pool;