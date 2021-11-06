import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn } 
from 'typeorm';

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    create_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;
}