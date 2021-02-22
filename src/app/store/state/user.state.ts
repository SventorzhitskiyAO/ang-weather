import {UserInterface} from '../../user/shared/interfaces/user.interface';

export interface UserState {
  users: UserInterface[] ;
  selectedUser: UserInterface;
  userLoginName: string;
}

export const initialUserState: UserState = {
  users: [],
  selectedUser: null,
  userLoginName: null
};
