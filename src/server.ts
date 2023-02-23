import app from "./app";
import "dotenv/config";
import { env } from "process";

const PORT = env.PORT ?? 3000;
const HOSTNAME = env.HOSTNAME || "http://localhost";

app.listen(PORT, () => console.log(`Running on ${HOSTNAME}:${PORT}`));
