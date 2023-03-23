const express = require("express");
const mongoose = require("mongoose");
const app = express();
const formRoutes = require("./routes/formRoutes");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const port = 3000;

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
    res.send(
        "Hello World! Welcome to the GreenSweep API subscribe to our newsletter to get the latest updates"
    );
});

app.use("/api/form", formRoutes);
app.listen(port, () => console.log(`Listening on port ${port}`));
