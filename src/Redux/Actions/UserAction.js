import { UserType } from "../Types/UserType";

export const addUserChoise = (UserChoise) => {
  return {
    type: UserType.USERCHOISE,
    payload: UserChoise,
  };
};
