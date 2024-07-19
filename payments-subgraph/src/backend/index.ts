/* payments-subgraph Graphweaver Project */
import Graphweaver from "@exogee/graphweaver-server";
import { connection } from "./database";

import "./schema";

import { Trace } from "./entities";
import { MikroBackendProvider } from "@exogee/graphweaver-mikroorm";

export const traceProvider = new MikroBackendProvider(Trace, connection);

export const graphweaver = new Graphweaver({
  federationSubgraphName: "payments",
  openTelemetry: { traceProvider },
});

export const handler = graphweaver.handler();
