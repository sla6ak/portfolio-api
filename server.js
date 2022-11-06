const app = require("./api/app");

const { PORT = 5000 } = process.env;

async function start() {
  try {
    app.listen(PORT, () => {
      console.log(`Use port ${PORT}`);
    });
  } catch (error) {
    console.log(error.massage);
    process.exit(1);
  }
}

start();
