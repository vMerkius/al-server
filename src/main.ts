import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Connection } from 'mongoose';
import { getConnectionToken } from '@nestjs/mongoose';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const mongooseConnection = app.get<Connection>(getConnectionToken());
  mongooseConnection.once('open', () => {
    Logger.log('Successfully connected to the database', 'Bootstrap');
  });

  mongooseConnection.on('error', (error) => {
    Logger.error('Database connection error', error, 'Bootstrap');
  });

  await app.listen(3000);
  Logger.log('Application is running on: http://localhost:3000', 'Bootstrap');
}
bootstrap();
