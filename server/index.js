import express from "express";
import generalSettings from "./config.js";
import { router as router } from "./controllers/coffee-controllers.js"
import { logger } from "./middleware/logger.js";
import { deleteForbidden } from "./middleware/delete-forbidden.js";
import cors from 'cors'

const app = express();


app.use(cors())
app.use(logger)

app.use(express.json());
app.use("/", router);

app.listen(generalSettings.port);
console.log(`server is running on port ${generalSettings.port} localhost!`);