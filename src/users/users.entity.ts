import { MooBaseEntity } from 'src/commons/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class UserEntity extends MooBaseEntity {
  @Column({ length: 30, nullable: false, unique: true })
  username: string;

  avtar: string;

  @Column({ length: 240 })
  bio: string;

  @Column({ name: 'follower_count', default: 0 })
  followerCount: number;

  @Column({ name: 'followee_count', default: 0 })
  followee_count: number;

  @Column('boolean', { default: false })
  verified: boolean;
}
