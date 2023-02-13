import mongoose from "mongoose";

import app from "./app";

const PORT = process.env.PORT || 3000;

mongoose.set("strictQuery", true);
mongoose.connect(`mongodb://${process.env.BD_HOST}:${process.env.BD_PORT_DEFAULT}/${process.env.BD_DB}`).then(() => {
  app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
    console.log("Banco de Dados conect");
  });
}).catch(err => console.error(err));

app;
