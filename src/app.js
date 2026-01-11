import express from "express";
import mailRoutes from "./routes/mail.routes.js"

const app = express();

app.use(express.json());

// Test route
app.get("/", (req, res, next) => {
  res.status(200).json({ message: "Hello world!" });
});

// Send Email route
app.use("/api/mail", mailRoutes);

export default app;
