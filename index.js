const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());

const env = require("dotenv");
const connectDB = require("./db/db");
env.config();
const PORT = process.env.PORT;
connectDB();

app.use(cors());

app.use("/api/user", require("./router/auth"));
app.use("/api/org", require("./router/org"));
app.use("/api/orgbranch", require("./router/orgbranch"));
app.use("/api/customer", require("./router/customer"));
app.use("/api/item", require("./router/itemmaster"));
app.use("/api/model", require("./router/modelmaster"));
app.use("/api/paymentAccount", require("./router/paymentaccountmaster"));

app.listen(PORT, () => {
  console.log(`Server run on PORT : ${PORT}`);
});
