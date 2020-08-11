require("dotenv").config();
const fs = require("fs");
const db = require("../server/knex.js");

(async () => {
  try {
    const transactions = JSON.parse(fs.readFileSync("./data/transactions.json"));
    for (const transaction of transactions) {
      const id = transaction.id;
      const created_at = transaction.created_at;
      const year = transaction.year;
      const month = transaction.month;
      const type = transaction.type;
      const transac = transaction.transac;
      const result = await db("transactions").insert({
        id,
        created_at,
        year,
        month,
        type,
        transac
      });
      console.log(result);
    }
  } catch (err) {
    console.log("error insertig records", err);
  }
})();