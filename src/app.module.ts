import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './modules/products/products.module';
import { ConfigModule } from '@nestjs/config';
console.log('MONGODB_URI:', process.env.MONGODB_URI);

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'config.env',
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
