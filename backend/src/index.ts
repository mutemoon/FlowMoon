import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./models/User";
import * as path from "path";
import { HttpServer } from "tsrpc";
import { serviceProto } from './shared/protocols/serviceProto';
import { Project } from "./models/Project";


// TypeORM 初始化
const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "111111",
    database: "FlowMoon",
    synchronize: false,
    logging: true,
    entities: [User, Project],
    subscribers: [],
    migrations: [],
})
AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        server.logger.log("数据库连接成功")
    })
    .catch((error) => console.log(error))


// Create the Server
export const server = new HttpServer(serviceProto, {
    port: 3060,
    // Remove this to use binary mode (remove from the client too)
    json: true
});

// Initialize before server start
async function init() {
    await server.autoImplementApi(path.resolve(__dirname, 'api'));

    // TODO
    // Prepare something... (e.g. connect the db)
};

// Entry function
async function main() {
    await init();
    await server.start();
}
main();