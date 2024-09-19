import { Injectable } from '@nestjs/common';
import { User } from './types/user.model';
import { CreateUser } from './inputs/CreateUser.input';

@Injectable()
export class UsersService {




    users:User[]=[]

    findAll():User[]{
       return this.users
    }
   
   
    findOne(name:string):User{
   
       return this.users.find((user)=>user.name==name)
    }
   
    create(user:CreateUser):User{
       this.users.push(user);
   
       return user
    }
   





}
