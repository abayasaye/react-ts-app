import IUser from "../models/user-model";

export const addUserService = async (): Promise<any> => {
  try {
    return await fetch(
      "https://my-json-server.typicode.com/Jeck99/fake-server/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        }),
      }
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
addUserService;
