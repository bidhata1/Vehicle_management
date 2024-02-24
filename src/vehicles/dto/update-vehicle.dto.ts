import { PartialType } from '@nestjs/mapped-types';
import { CreateVehicleDto } from './create-vehicle.dto';
import { IsNotEmpty } from "class-validator";
export class UpdateVehicleDto extends PartialType(CreateVehicleDto) {


    
    
  
        
     /*   @IsNotEmpty()
        quote:string;
        @IsNotEmpty()
        name:string;
        @IsNotEmpty()
        position:string;
        @IsNotEmpty()
        img:Image;
    }
*/
}
