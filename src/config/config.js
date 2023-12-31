import dotenv from "dotenv";
import { Command } from "commander";


const program = new Command();
program
    .option("-m, --mode <mode>", "Work mode", "Production")
    .option("-p <port>", "server port", 8080);

program.parse();

dotenv.config({
    path: program.opts().mode === "dev" ? "./.env.dev" : "./.env.prod",
});

export default {
    app: {
        PORT: process.env.PORT || 8080,
        ADMIN_EMAIL: process.env.ADMIN_EMAIL,
        ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
        PERSISTENCE: process.env.PERSISTENCE||"MONGO",
    },
    mongo: {
        URL: process.env.MONGO_URL || "localhost:27017",
    },
    JWT: {
        COOKIE: process.env.JWT_COOKIE,
        SECRET: process.env.JWT_SECRET,
    },
};