import { UserDto } from "@/src/types/user-dto";

export interface MessageDto {
  id: number;
  me: boolean;
  user: string;
  body: string;
};