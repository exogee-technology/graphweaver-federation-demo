# Music Subgraph Graphweaver Project

This project is the Music Subgraph. It was created by doing the following:

```console
$ npx graphweaver@latest init
? What would your like to call your new project? music-subgraph
? Which Graphweaver backends will you need? MikroORM - SQLite Backend
? OK, we're ready- I'm going to create a new app in "/Users/kevin/development/federation-example/music-subgraph" - is that OK? yes
All Done!
Make sure you cd to the new project directory, then run pnpm install and pnpm start.
$ cd music-subgraph
$ pnpm i
$ npx graphweaver@latest import sqlite
? What is the database name? Chinook_Sqlite.sqlite
⠋ Introspecting...Fetching database schema...
Building metadata...
Closing database connection...
Database connection closed.

Import Summary:
┌─────────┬───────────────┬───────────────────────────────────────────┬──────────────────────────────────┐
│ (index) │     name      │              entityFilePath               │          schemaFilePath          │
├─────────┼───────────────┼───────────────────────────────────────────┼──────────────────────────────────┤
│    0    │    'Album'    │    'backend/entities/sqlite/album.ts'     │    'backend/schema/album.ts'     │
│    1    │   'Artist'    │    'backend/entities/sqlite/artist.ts'    │    'backend/schema/artist.ts'    │
│    2    │  'Customer'   │   'backend/entities/sqlite/customer.ts'   │   'backend/schema/customer.ts'   │
│    3    │  'Employee'   │   'backend/entities/sqlite/employee.ts'   │   'backend/schema/employee.ts'   │
│    4    │    'Genre'    │    'backend/entities/sqlite/genre.ts'     │    'backend/schema/genre.ts'     │
│    5    │   'Invoice'   │   'backend/entities/sqlite/invoice.ts'    │   'backend/schema/invoice.ts'    │
│    6    │ 'InvoiceLine' │ 'backend/entities/sqlite/invoice-line.ts' │ 'backend/schema/invoice-line.ts' │
│    7    │  'MediaType'  │  'backend/entities/sqlite/media-type.ts'  │  'backend/schema/media-type.ts'  │
│    8    │  'Playlist'   │   'backend/entities/sqlite/playlist.ts'   │   'backend/schema/playlist.ts'   │
│    9    │    'Track'    │    'backend/entities/sqlite/track.ts'     │    'backend/schema/track.ts'     │
└─────────┴───────────────┴───────────────────────────────────────────┴──────────────────────────────────┘

Imported 10 entities, creating the above files in your Graphweaver project.

? Overwrite this file backend/schema/index.ts? yes
? Overwrite this file backend/database.ts? yes
24 files have been successfully created in the project.
```

To enable federation we need to pass a subgraph name to the Graphweaver Constructor in `backend/index.ts`:

```typescript
export const graphweaver = new Graphweaver({
  federationSubgraphName: "music",
});
```

And now you're ready!

```console
$ pnpm start
```

The admin area should be accessible at http://localhost:9000

The Chinook_Sqlite.sqlite file is in the repository and was sourced from here: https://github.com/lerocha/chinook-database
