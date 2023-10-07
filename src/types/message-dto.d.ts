import { UserDto } from "@/src/types/user-dto";

export interface MessageDto {
  date: Date;
  id: number;
  me: boolean;
  user: string;
  body: string;
};