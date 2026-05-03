import express from "express";
import { userRouter } from "../infra/http/routes/userRoutes";

const app = express();
app.use(express.json());
app.use("/api/users", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
