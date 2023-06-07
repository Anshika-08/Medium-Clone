const mongoose = require("mongoose");

const url =
  "mongodb+srv://anshikaaggarwal364:ZQOfIilkCKuUd3Uj@cluster0.zc8hhfr.mongodb.net/?retryWrites=true&w=majority";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
