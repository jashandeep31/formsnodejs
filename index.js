const express = require("express");
const mongoose = require("mongoose");
const app = express();
const formRoutes = require("./routes/formRoutes");

app.use(express.json());

mongoose
    .connect(
        "mongodb+srv://jashan1659:Sqptel2UOhz2Vxhr@cluster0.nxtf177.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("Connected to MongoDB"));

app.use("/api/form", formRoutes);
app.listen(3000, () => console.log("Listening on port 3000"));
