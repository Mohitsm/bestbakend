import dotenv from "dotenv";
dotenv.config({ path: "../.env" });




import connectDB from "./config/db.js";
import { app } from "./index.js";
connectDB()
.then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`✅ Server is running on port ${process.env.PORT}`);
  });
})
.catch((error) => {
  console.error(`❌ Error: ${error.message}`);
  process.exit(1);
});
