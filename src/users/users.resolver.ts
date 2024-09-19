import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './types/user.model';
import { Query } from '@nestjs/graphql';
import { CreateUser } from './inputs/CreateUser.input';

@Resolver()
export class UsersResolver {

    constructor(private _userService: UsersService) {}

    @Query(() => [User],{name:"allUsers"})
    find(): User[] {
      return this._userService.findAll();
    }
  
    @Query(() => User)
    findOne(name: string): User {
      return this._userService.findOne(name);
    }
  
    @Mutation(() => User)
    create(@Args("user") user: CreateUser): User {
      return this._userService.create(user);
    }
}
