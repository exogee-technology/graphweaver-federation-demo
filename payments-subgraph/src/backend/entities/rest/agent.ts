import { BaseEntity, Field } from "@exogee/graphweaver-rest";

export class Agent extends BaseEntity {
  @Field()
  name!: string;

  @Field()
  height!: string;

  @Field()
  birthYear!: string;

  @Field()
  gender!: string;

  @Field()
  url!: string;
}
