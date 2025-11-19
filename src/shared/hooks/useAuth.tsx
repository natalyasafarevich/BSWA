import { account } from '../module/appwrite';

export const useAuth = () => {
  const signUp = async (email: string, password: string, userId: string, name?: string) => {
    try {
      const user = await account.create({
        name,
        email,
        password,
        userId,
      });
      return user;
    } catch (e) {
      return (e as { message: string }).message;
    }
  };

  return { signUp };
};
