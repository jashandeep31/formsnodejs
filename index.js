const express = require("express");
const mongoose = require("mongoose");
const app = express();
const formRoutes = require("./routes/formRoutes");
const cors = require("cors");
app.use(cors());
app.use(express.json());

mongoose
    .connect(
        "mongodb+srv://jashan1659:Sqptel2UOhz2Vxhr@cluster0.nxtf177.mongodb.net/?retryWrites=true&w=majority",
        // "mongodb://mongo:XxKLXCNk4V04Y37vwtQn@containers-us-west-200.railway.app:7235",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("Connected to MongoDB"));

app.get("/", (req, res) => {
    res.send("Hello World! got updated");
});

app.use("/api/form", formRoutes);
app.listen(8000, () => console.log("Listening on port 3000"));
