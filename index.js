require("dotenv");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const router = require("./src/routes");
const bodyParser = require("body-parser");
const config = require("./config");
const pr = require("./src/controllers/database");
const PORT = process.env.PORT || 4000;

const specs = swaggerJsDoc(config.options);
const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(
  cors({
    origin: process.env.ORIGIN,
    methods: ["GET", "POST"]
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

router(app);
//okL
app.listen(PORT, () => {
  console.log(`A NODE JS API is listenisn on port: ${PORT}`);


});
