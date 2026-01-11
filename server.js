import dotenv from "dotenv";
import app from "./src/app.js";
import cors from "cors"

dotenv.config();

app.use(cors())

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
