const { db } = require("./db");
const app = require("./app");
const seed = require("../script/seed");

const PORT = process.env.PORT || 8080;

const init = async () => {
  try {
    if (process.env.NODE_ENV !== "production") {
      console.log("server was hit");
      if (process.env.SEED === "true") {
        await seed();
      } else {
        await db.sync();
      }
    } else {
      // In production, ensure database is synced without seeding
      await db.sync();
    }

    // Start listening only if not running in development mode
    if (process.env.NODE_ENV !== "development") {
      app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
    }
  } catch (ex) {
    console.error("An error occurred during initialization:", ex);
    process.exit(1); // Exit with non-zero code to indicate failure
  }
};

init();
