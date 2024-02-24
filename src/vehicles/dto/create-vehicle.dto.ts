import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty,IsString, isNotEmpty } from "class-validator";


export class CreateVehicleDto {
    @IsString()
    @ApiProperty()
    @IsNotEmpty()
     model:string;


    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    year:string;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    make: string;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    registration_number: string;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    current_status: string;
    
    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    location: string;
    


}
