import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { databaseOptionFactory } from '@app/database/factory';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: databaseOptionFactory,
    })],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {
}
