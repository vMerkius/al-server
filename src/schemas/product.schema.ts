import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ collection: 'products' })
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  priceMax: number;

  @Prop({ required: true })
  priceMin: number;

  @Prop(
    raw([
      {
        date: { type: String },
        saleCount: { type: Number },
        revenue: { type: Number },
      },
    ]),
  )
  dailyStat: Record<string, any>[];

  @Prop()
  photo: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
