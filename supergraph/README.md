# Supergraph

This part of the project configures Wundergraph Cosmo for development:

- compose.yaml: This file tells Cosmo about our subgraphs and how to discover the metadata needed to federate them.
- config.json: This is the output of composing the graph (see below)
- config.yaml: This tells the router what port to run on and where the config is.

## To run

1. Download the latest version of the Cosmo router for your platform from here: https://github.com/wundergraph/cosmo/releases
2. Place it in this directory.
3. Run it on a command line.
4. Access the router at http://localhost:10166

## How it was made

Once `config.yaml` is set up, you can use the cosmo CLI to compose while both subgraphs are running:

```console
$ wgc router compose -i compose.yaml -o config.json
```
