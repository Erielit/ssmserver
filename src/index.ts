import app from "./config/express";

const main = (): void => {
  try {
    app.listen(app.get("port"));
    console.log(`Server running in ${app.get("port")}`);
  } catch (error) {
    console.log(error);
  }
};

main();
