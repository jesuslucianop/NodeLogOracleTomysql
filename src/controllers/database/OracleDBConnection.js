const oracledb = require("oracledb");
const config = require("../../../config");
require("dotenv");
const OracleDbconnection =  oracledb.getConnection(
    {
        user:process.env.Ora_User,
    password:process.env.Ora_pass, 
    connectString:process.env.CONNECTIONString
},function(err,connection){
    if (err) {
        // Error connecting to DB
    console.log("Se produjo un error al conectar" +err);
      
}
console.log("connection passed");
});
  

module.exports = {
    OracleDbconnection
  };