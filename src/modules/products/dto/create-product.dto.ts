import { IsString, IsNumber, IsArray } from 'class-validator';

export class CreateProductDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly price: number;

  @IsNumber()
  readonly priceMax: number;

  @IsNumber()
  readonly priceMin: number;

  @IsArray()
  readonly dailyStat: {
    date: string;
    saleCount: number;
    revenue: number;
  }[];
}
