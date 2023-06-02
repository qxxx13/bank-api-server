const express = require("express");
const clientRouter = require("./routes/client.routes");
const bankRouter = require("./routes/bank.routes");
const atmRouter = require("./routes/atm.routes");
const operationsRouter = require("./routes/operations.routes");
const cors = require("cors");

const PORT = process.env.PORT || 8080;

const app = express();

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use("/api", clientRouter);
app.use("/api", bankRouter);
app.use("/api", atmRouter);
app.use("/api", operationsRouter);

app.listen(PORT, () => console.log("start"));
