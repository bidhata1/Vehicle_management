import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Vehicle } from '@prisma/client'; // Import the type for your Prisma model

@Injectable()
export class VehiclesService {
  constructor(private prisma: PrismaService) {}

  async create(createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    return this.prisma.vehicle.create({ data: createVehicleDto });
  }

  async findAll(): Promise<Vehicle[]> {
    return this.prisma.vehicle.findMany();
  }

  async findOne(id: number): Promise<Vehicle | null> {
    return this.prisma.vehicle.findUnique({ where: { id } });
  }

  async update(id: number, updateVehicleDto: UpdateVehicleDto): Promise<Vehicle> {
    return this.prisma.vehicle.update({ where: { id }, data: updateVehicleDto });
  }

  async remove(id: number): Promise<Vehicle> {
    return this.prisma.vehicle.delete({ where: { id } });
  }
}
