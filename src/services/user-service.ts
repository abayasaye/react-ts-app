import IUser from "../models/user-model";

export const UserService = async (): Promise<any> => {
  try {
    return await fetch(
      "https://my-json-server.typicode.com/Jeck99/fake-server/users"
    )
      .then((response: Response) => response.json())
      .then((res) => {
        let usersArray: IUser[] = res;
        return usersArray;
      });
  } catch (error) {
  } finally {
  }
};
UserService;
