import { Entity, Field, ID } from "@exogee/graphweaver";

@Entity<Invoice>({
  name: "Invoice",
  apiOptions: {
    excludeFromBuiltInOperations: true,
    resolvableViaFederation: false,
  },
})
export class Invoice {
  @Field(() => ID, { primaryKeyField: true })
  invoiceId!: number;
}
