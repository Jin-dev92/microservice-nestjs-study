import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseOptionFactory = (
  configService: ConfigService,
): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> => {
  return {
    type: 'mysql',
    host: configService.get('DB_HOST'),
    port: +configService.get('DB_PORT'),
    logging: true,
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_DATABASE'),
    retryDelay: Math.floor(Math.random() * 3 * 1000) + 3,
    retryAttempts: 3,
    entities: [
      `../entities/${configService.get('DB_DATABASE')}/*.entities{.ts,.js}`,
    ],
    migrations: [
      `../migrations/${configService.get('DB_DATABASE')}//migrations/*.js`,
    ],
    migrationsRun: false,
    synchronize: false,
  };
};
