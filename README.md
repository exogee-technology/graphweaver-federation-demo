# Graphweaver Federation Demo

This repo demonstrates using two different [Graphweaver](https://graphweaver.com) instances as subgraph providers, then federating them using [Wundergraph Cosmo](https://wundergraph.com/).

Our example organisation has two different teams:

- Music Team: This team controls Albums, Artists, Tracks, Invoices, etc. The tables here come from the [Chinook example database](https://github.com/lerocha/chinook-database).
- Payments Team: This team controls Payments (which happen on Invoices from the Music Team) and Agents that own the payments. Agents are characters from the [Star Wars REST API](https://swapi.info/).

This is what it looks like all together:

```mermaid
flowchart
    supergraph(["Wundergraph Cosmo"])
    supergraph---music
    supergraph---payments

    music(["Graphweaver by Music Team"])

    music---e1(Albums)
	music---e2(Artists)
	music---e3(Customers)
	music---e4(Employees)
	music---e5(Genres)
	music---e6(Invoices)
	music---e7(InvoiceLines)
    music---e8(MediaTypes)
	music---e9(Playlists)
	music---e10(Tracks)

    payments([Graphweaver by Payments Team])
    payments---e20(Payments)
	payments---e21(Traces)
	payments---e22(Agents)


subgraph SQLite
    e1
    e2
    e3
    e4
    e5
    e6
    e7
    e8
    e9
    e10
end

subgraph PostgreSQL
    e20
    e21
end

subgraph REST
    e22
end
```

To get started:

1. Clone this repository
2. Install [node](https://nodejs.org/en). We recommend using [nvm](https://github.com/nvm-sh/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows) to do this.
3. Install [pnpm](https://pnpm.io/).
4. Go to each directory and run the setup instructions in that directory, starting with the subgraphs.
5. Once you've completed the steps in each directory, you're up! You can test that both subgraphs are responding with the following query:

```graphql
{
  payments {
    owner {
      name
    }
    invoice {
      billingCity
    }
    amount
  }
}
```

To resolve this query, Cosmo will go to the payments graph, retrieve the payment and owner information, then will use the ID it got from the payment to go to the music graph and retrieve invoice information.
