/* music-subgraph Graphweaver Project */
import Graphweaver from "@exogee/graphweaver-server";

import "./schema";

export const graphweaver = new Graphweaver({
  federationSubgraphName: "music",
});

export const handler = graphweaver.handler();
