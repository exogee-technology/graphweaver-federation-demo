import { Entity, Field, ID, RelationshipField } from "@exogee/graphweaver";
import { MikroBackendProvider } from "@exogee/graphweaver-mikroorm";
import { Payment as OrmPayment } from "../entities";
import { connection } from "../database";
import { Agent } from "./agent";
import { Invoice } from "./invoice";

@Entity<Payment>("Payment", {
  provider: new MikroBackendProvider(OrmPayment, connection),
})
export class Payment {
  @Field(() => ID)
  id!: number;

  @Field(() => ID)
  agentId!: number;

  @Field(() => ID)
  invoiceId!: number;

  @Field(() => String)
  amount!: string;

  @Field(() => Boolean)
  reconciled = false;

  @Field(() => String, { nullable: true })
  notes?: string;

  @Field(() => String)
  paymentMethod!: string;

  @RelationshipField<Payment>(() => Agent, {
    id: "agentId",
  })
  owner!: Agent;

  @RelationshipField<Payment>(() => Invoice, {
    id: (payment) => payment.invoiceId,
  })
  invoice!: Invoice;
}
