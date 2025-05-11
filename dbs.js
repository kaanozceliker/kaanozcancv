const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const conn = () => {
  mongoose
    .connect(process.env.DB_URL, {
      dbName: "myblog",
    })
    .then(() => {
      console.log("DB baglandi");
    })
    .catch((hata) => {
      console.log(hata);
    });
};

module.exports = conn;
