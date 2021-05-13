import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { RestaurantModule } from './restaurants/restaurants.module';

@Module({
  imports: [RestaurantModule, GraphQLModule.forRoot({ autoSchemaFile: true })],
  controllers: [],
  providers: [],
})
export class AppModule { }
