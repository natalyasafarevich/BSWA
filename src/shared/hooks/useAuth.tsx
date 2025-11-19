import { account, ID } from '../module/appwrite';

export const useAuth = () => {
  const signUp = async (email: string, password: string, name?: string) => {
    try {
      const user = await account.create({
        name,
        email,
        password,
        userId: ID.unique(),
      });
      return user;
    } catch (e) {
      return (e as { message: string }).message;
    }
  };

  return { signUp };
};
