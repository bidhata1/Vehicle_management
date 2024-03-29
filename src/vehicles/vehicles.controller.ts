import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, NotFoundException } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Controller('vehicle')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Post()
  create(@Body() createVehicleDto: CreateVehicleDto) {
    
    return this.vehiclesService.create(createVehicleDto);
  }

  @Get()
  findAll() {
    
    return this.vehiclesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
   return this.vehiclesService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateVehicleDto: UpdateVehicleDto) {
  return this.vehiclesService.update(+id,updateVehicleDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
   return this.vehiclesService.remove(+id);
  }
}
