import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { entities } from "./entities";

export const connection = {
  connectionManagerId: "postgresql",
  mikroOrmConfig: {
    entities: entities,
    driver: PostgreSqlDriver,
    dbName: "invoice-payments",
    host: "127.0.0.1",
    user: "postgres",
    password: "",
    port: 5432,
  },
};

export const connections = [connection];
