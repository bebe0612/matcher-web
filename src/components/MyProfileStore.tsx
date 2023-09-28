import { create } from "zustand"
import { UserDto } from "../types/user-dto"

interface IProfile {
  myProfile: UserDto;
  setMyProfile: (profile: UserDto) => void;
  removeProfile: () => void;
}

const nullProfile: UserDto = {
  createdDt: [],
  schoolName: '',
  yearOfAdmission: 0,
  id: -1,
  email: '',
  nickname: '',
}

const useMyProfile = create<IProfile>(set => ({
  myProfile: nullProfile,
  setMyProfile: (newProfile: UserDto) => set({ myProfile: newProfile }),
  removeProfile: () => set({ myProfile: nullProfile }),
}));

export default useMyProfile;