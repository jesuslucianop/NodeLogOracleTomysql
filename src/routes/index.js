const reembolso = require("./reembolso.routes");
const bodyParser = require("body-parser");


const router = (app) => {
  app.use(bodyParser.json());

  app.use("/reembolso", reembolso);
};

module.exports = router;
