import { DynamicModule, Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
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
        MongooseModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: databaseOptionFactory,
        }),
      ],
      exports: [DatabaseModule],
    };
  }
}
