import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn } 
from 'typeorm';

@Entity()
export class Tasks{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({
        default: false
    })
    finished: boolean;

    @CreateDateColumn()
    create_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;
}