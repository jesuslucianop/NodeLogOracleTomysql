const reembolso = require("./reembolso.routes");
const payment = require('./payment.routes');
const bodyParser = require("body-parser");


const router = (app) => {
  app.use(bodyParser.json());

  app.use("/payments", payment);
  app.use("/reembolso", reembolso);
};

module.exports = router;
