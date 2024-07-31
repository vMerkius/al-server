import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ collection: 'products' })
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop()
  price: number;

  @Prop()
  priceMax: number;

  @Prop()
  priceMin: number;

  @Prop(
    raw({
      date: { type: String },
      saleCount: { type: Number },
      revenue: { type: Number },
    }),
  )
  dailyStat: Record<string, any>;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
