const mongoose = require("mongoose"); //#Here  import mongoose
const connectToDb = async () => {
    mongoose.connect(process.env.MONGO_URI)
    .then((conn) => {//#Here  connect to DB
        console.log(`Connected to DB: ${conn.connection.host}`);
    })
    .catch((err) => {
        console.log(err.message);
        process.exit(1)
    })
}
module.exports = connectToDb;
