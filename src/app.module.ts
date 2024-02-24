import { Module } from '@nestjs/common';

import { VehiclesModule } from './vehicles/vehicles.module';

import { ConfigModule,ConfigService } from '@nestjs/config';

@Module({
  imports: [VehiclesModule, ConfigModule.forRoot({ isGlobal:true}),
  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
