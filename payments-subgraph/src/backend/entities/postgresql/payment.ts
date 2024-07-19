import { Entity, Index, PrimaryKey, Property } from "@mikro-orm/core";

@Entity({ tableName: "payments" })
export class Payment {
  @PrimaryKey({ type: "number" })
  id!: number;

  @Index({ name: "payments_invoiceId" })
  @Property({ fieldName: "invoiceId", type: "number" })
  invoiceId!: number;

  @Property({ fieldName: "agentId", type: "number" })
  agentId!: number;

  @Property({ type: "numeric(10,2)" })
  amount!: string;

  @Property({ type: "boolean", default: false })
  reconciled = false;

  @Property({ type: "text", nullable: true })
  notes?: string;

  @Property({ fieldName: "paymentMethod", type: "string", length: 20 })
  paymentMethod!: string;
}
