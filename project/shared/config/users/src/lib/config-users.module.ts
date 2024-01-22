import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

const ENV_USERS_FILE_PATH = 'apps/users/users.dev.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: ENV_USERS_FILE_PATH,
      load: [],
    }),
  ],
})
export class ConfigUsersModule {}
