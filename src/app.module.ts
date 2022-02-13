import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { TestModule } from './module/test/test.module';
import { User111Module } from './module/user111/user111.module';

@Module({
  imports: [
    TestModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'mysql',
          entities: [join(__dirname, './**/*.entity{.ts,.js}')],
          host: configService.get('DB_HOST', '0.0.0.0'),
          port: configService.get<number>('DB_PORT', 3306),
          username: configService.get('DB_USER', 'root'),
          password: configService.get('DB_PASSWD', 'root'),
          database: configService.get('DB_DATABASE', 'none'),
          charset: 'utf8mb4',
          timezone: '+08:00',
          synchronize: true,
        };
      },
    }),
    User111Module,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
