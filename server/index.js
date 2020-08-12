require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./knex");
const path = require("path")
const bodyParser = require('body-parser');
const cors = require('cors')


const PORT = process.env.PORT || 9000;

app.use(cors())

app.use(express.static(path.resolve(__dirname, "..", "build")));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

(async () => {
    try {
        console.log("Running migrations...");
        await db.migrate.latest;

        console.log("Starting express...");
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`);
        });
    } catch (err) {
        console.error("Error starting app!", err);
        process.exit(-1);
    }
})();


app.get("/transactions", async (req, res) => {
    try {
        const transactions = await db.select().table("transactions");
        res.json(transactions);
    } catch (err) {
        console.log("Error loading transactions!", err);
        res.sendStatus(500);
    }
});

app.post("/transactions/add", async (req, res) => {
    try {
        console.log("this is req.body", req.body);
        await db("transactions").insert(req.body);
        console.log("success");
        res.sendStatus(200);
    } catch (err) {
        console.error("Error adding transaction!", err);
        res.sendStatus(500);
    }
});

app.delete("/transactions/:id", async (req, res) => {
    try {
        console.log("this is req.body", req.body);
        await db("transactions").where({id: req.params.id}).del();
        console.log("success");
        res.sendStatus(200);
    } catch (err) {
        console.error("Error adding transaction!", err);
        res.sendStatus(500);
    }
});