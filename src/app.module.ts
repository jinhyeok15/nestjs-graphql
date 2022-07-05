import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

const DEBUG_STATE = true;
const PLAYGROUND_STATE = true;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root1234',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: DEBUG_STATE,
      playground: PLAYGROUND_STATE,
      autoSchemaFile: 'schema.gql',
    }),
  ],
})
export class AppModule {}
