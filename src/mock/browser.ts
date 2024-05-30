import { setupWorker } from "msw/browser";
import { handlers } from "./api/handler.js";

export const worker = setupWorker(...handlers);
