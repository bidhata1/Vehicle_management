import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class Vehicle {

    @ApiProperty()
@PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  model:string;

  @ApiProperty()
  @Column()
  year:string;

  @ApiProperty()
  //@Column({type:'bytea',nullable:true})
  make: string;

 @ApiProperty()
 registration_number: string;

 @ApiProperty()
 current_status: string;

 @ApiProperty()
 location: string;

  @ApiProperty()
  updatedAt: Date;  
}

