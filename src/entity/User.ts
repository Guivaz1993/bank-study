import { randomUUID } from "crypto";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class User {
  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  @PrimaryColumn("text", { unique: true })
  id: string = randomUUID();

  @Column("string", { length: 100 })
  name: string;

  @Column("text", { unique: true })
  email: string;

  @Column("text")
  password: string;

  @Column("datetime", { nullable: false })
  created_at: Date = new Date();

  @Column("datetime", { nullable: false })
  updated_at: Date = new Date();
}
