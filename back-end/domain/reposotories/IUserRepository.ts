import { User } from "../entities/User";
import { CreateUserInputDto } from "../../application/dtos/User";

export interface IUserRepository {
  create(user: CreateUserInputDto): Promise<User>;
  // findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  // findAll(): Promise<User[]>;
  // update(id: string, user: User): Promise<User>;
  // delete(id: string): Promise<void>;
}
