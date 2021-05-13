import { ArgsType, Field } from '@nestjs/graphql';
import { Length } from 'class-validator';

@ArgsType()
export class CreateRestaurantDto {
  @Field(type => String)
  @Length(5, 10)
  name: string;

  @Field(type => Boolean)
  isVegan: boolean;

  @Field(type => String)
  address: string;

  @Field(type => String)
  ownersName: string;
}