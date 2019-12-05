import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { UserAccountEntity } from './user-account.entity';

@Entity({ name: 'passport' })
export class UserPassportEntity {
  @PrimaryColumn()
  id: string;
  @Column({name: 'provider_name'})
  provider: string;
  @Column({ name: 'account_id' })
  accountId: number;
  @ManyToOne(() => UserAccountEntity)
  @JoinColumn({
    name: 'account_id',
  })
  account: UserAccountEntity;
  @Column({ type: 'jsonb' })
  meta: object;
  @Column({ name: 'created_at' })
  createdAt: Date;
}
