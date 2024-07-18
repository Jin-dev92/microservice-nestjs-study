import { DynamicModule, Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { databaseOptionFactory } from '@app/database/factory';

@Module({
  // imports: [],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {
  static register(modelName: 'user'): DynamicModule {
    return {
      module: DatabaseModule,
      imports: [
        ConfigModule.forRoot({
          envFilePath: `apps/${modelName}/.env`,
        }),
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: databaseOptionFactory,
        }),
      ],
      exports: [DatabaseModule],
    };
  }
}
