import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
@Entity({ name: 'user_account' })
export class UserAccountEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;
  @Field()
  @Column({ name: 'display_name' })
  displayName: string;
  @Field()
  @Column()
  picture: string;
  @Column({ name: 'created_at' })
  createdAt: Date;
}
