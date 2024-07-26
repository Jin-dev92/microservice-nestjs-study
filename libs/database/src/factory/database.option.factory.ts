import { ConfigService } from '@nestjs/config';
import { MongooseModuleFactoryOptions } from '@nestjs/mongoose/dist/interfaces/mongoose-options.interface';

export const databaseOptionFactory = (
  configService: ConfigService,
): Promise<MongooseModuleFactoryOptions> | MongooseModuleFactoryOptions => {
  const uri = `mongodb://${configService.get('DB_HOST')}/${configService.get('DB_DATABASE')}`;
  return {
    uri,
    retryAttempts: 5,
  };
};
