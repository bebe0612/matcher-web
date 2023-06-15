import { UserDto } from "@/src/types/user-dto";

export type MessageDto = {
  id: number;
  me: boolean;
  user: UserDto;
  body: string;
};
