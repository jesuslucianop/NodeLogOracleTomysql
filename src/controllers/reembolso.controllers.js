require("dotenv");
const axios = require("axios");
const FormData = require("form-data");
const {OracleDbconnection} = require("./database/OracleDBConnection");
const oracledb = require('oracledb');
const { AQ_DEQ_NAV_NEXT_TRANSACTION } = require("oracledb");
// import File System Module

const fs = require('fs');
// import xml2js Module
const {parseString} = require('xml2js');
var convert = require('xml-js');
  
  obtenerRequestReembolsoAgil =  (req, res) => {

    async function run() {
  
      let DB;
        try {
            DB = await oracledb.getConnection({
              user  :process.env.Ora_User,
              password: process.env.Ora_pass,
              connectString:process.env.CONNECTIONString,
            
            });

            
            const resu = await DB.execute(
              `SELECT REQUEST
              FROM log_reembolso_agil
              WHERE REQUEST IS NOT  NULL`,
              [],// bind value for :compania
              { extendedMetaData: true }
            );
            console.log("entro");
            //console.log(JSON.stringify(resu.rows[0]));
         // res.render('index.ejs', {persona: resu.rows });
         const regex = /'/i;
//console.log(resu.rows[0].replace(regex, ' '));
//console.log(resu.rows[0].toString());

        // console.log(resu.rows[0]);

         //console.dir(resu.metaData||resu.rows , { persona: null });
        // console.dir(resu. outBinds, { persona: null });
              //  res.send(resu.rows[0].toString());       
        //console.log("Conteo"+resu.rows.length);
     // await rs.close();
     var datps = [];
     resu.rows.forEach(element => {
      //console.log(element.toString());
      //sres.send(element.toString());   
      datps.push(element.toString());
});

var result2 = convert.xml2json(datps[0], {compact: true, spaces: 2, ignoreAttributes:true});
console.log(result2);
 
  //res.send(data);
//console.log(JSON.stringify(datps.toString()));
//console.log(datps.toString());
//res.send(datps.toString());   
/*
              for(let x=0; x< resu.rows.length; x++)
              {
                console.log(" conteo: " +x);
                console.log(resu.rows[x].toString());
              }*/
    } catch (err) {
      console.log("entro catch");
        console.error(err);
      } finally {
        if (DB) {
          try {
            await DB.close();
          } catch (err) {
            console.error(err);
          }
        }
      }
    }
    run();
  }
  


module.exports = {
  
  obtenerRequestReembolsoAgil
};
