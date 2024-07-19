import { Field, ID, Entity } from "@exogee/graphweaver";
import { AccessorParams, RestBackendProvider } from "@exogee/graphweaver-rest";

import { Agent as RestAgent } from "../entities";
import { fetch } from "../rest-client";

type ObjectWithId = {
  id: string;
};

const hasId = (obj: unknown): obj is ObjectWithId => {
  return typeof (obj as ObjectWithId).id === "string";
};

const isObject = (value: unknown) => {
  return value != null && typeof value === "object";
};

// This is a simple in-memory filter function that can be used to filter the star wars people from the admin ui
export const inMemoryFilterFor =
  (filter: Record<string, any>) => (item: Record<string, any>) => {
    if (filter._or) {
      filter = { id_in: filter._or.map((person: any) => person.id) };
    }

    for (const [filterKey, filterValue] of Object.entries(filter || {})) {
      if (isObject(filterValue) && hasId(filterValue)) {
        // If we have an filter with an object and an ID then flatten the object and map it
        // For example: { account: { id: '123' } } to { accountId: '123' }
        if (filterValue?.id !== item?.[`${filterKey}Id`]) {
          return false;
        }
      } else {
        const [key, operator] = filterKey.split("_");
        if (operator === "in") {
          if (!filterValue.includes(item[key])) {
            return false;
          }
        } else if (
          item[key] === null ||
          item[key] === undefined ||
          item[key] !== filterValue
        ) {
          return false;
        }
      }
    }
    return true;
  };

const provider = new RestBackendProvider("Customer", {
  find: async ({ filter }: AccessorParams) => {
    const results = await fetch<RestAgent>(`/people`);

    for (const person of results) {
      const [_, __, id] = (
        new URL(person.url).pathname.split("/") || []
      ).filter((part) => part);
      person.birthYear = (person as any).birth_year;
      (person as RestAgent & { id: string }).id = id || person.url;
    }

    if (filter) {
      const memoryFilter = inMemoryFilterFor(filter);
      return results.filter(memoryFilter);
    }

    return results;
  },
});

@Entity("Agent", {
  provider,
  adminUIOptions: { readonly: true },
})
export class Agent {
  @Field(() => ID)
  id!: string;

  @Field(() => String, { adminUIOptions: { summaryField: true } })
  name!: string;

  @Field(() => String, { nullable: true })
  birthYear?: string;

  @Field(() => String, { nullable: true })
  gender?: string;

  @Field(() => String, { nullable: true })
  height?: string;
}
