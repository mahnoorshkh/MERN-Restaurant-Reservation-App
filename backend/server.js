import app from "./app.js";
//process.env.PORT ENVIRONMENT VARIABLE ARE USED IN THIS WAY
app.listen(process.env.PORT, () => {
  console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
});
