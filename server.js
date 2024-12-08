const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const users = require("./models/users")
const responseController = require("./controllers/responseController")
const loginRouter = require("./routers/loginRouter");
const uploadBooksRouter = require('./routers/uploadBooksRouter')
const summaryRouter = require("./routers/summaryRouter")
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/appdb", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB successfully.");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1);
    }
}

main();

app.use("/login", loginRouter)
app.use("/uploadBooks", uploadBooksRouter)
app.use("/summary", summaryRouter)

app.listen(8115, () => {
    console.log("Server running on port 8115...");
});
