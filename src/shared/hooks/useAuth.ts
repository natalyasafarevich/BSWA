import { createSessionClient } from '../module/appwrite';

export const useAuth = () => {
  const getLoggedInUser = async () => {
    try {
      const { account } = await createSessionClient();
      return await account.get();
    } catch (error) {
      return null;
    }
  };
  return { getLoggedInUser };
};
