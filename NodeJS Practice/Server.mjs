import { createServer } from "http";
import requestProcessor from "./processor.mjs";

createServer(requestProcessor).listen(7000);
