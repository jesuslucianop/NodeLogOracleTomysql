require('dotenv').config();

const config = {
  db: {
    /* do not put password or any sensitive info here, done only for demo */
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    multipleStatements: true,
    waitForConnections: true,
    queueLimit: 0
  },
  options: {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Reembolso Agil Log Swagger",
        version: "1.0.0",
        description: `ReembolsoAgilLog SWAGGER `
      },
      servers: [
        {
          url: `${process.env.SERVER}`
        }
      ]
    },
    apis: ["./src/routes/*js"]
  }
};

module.exports = config;