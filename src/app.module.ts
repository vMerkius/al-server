import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './modules/products/products.module';
// const uri = process.env.MONGODB_URI;

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://vmekriu:ObxqT5BB2et1YWlE@alstock.zosx5e0.mongodb.net/AlStock',
    ),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
