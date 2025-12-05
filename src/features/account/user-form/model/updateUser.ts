import { updateUser } from '@/app/actions/update-user';
import { UserSettingsSchemaData } from '@/shared/schemes/userSettingSchemes';
import { toast } from 'react-toastify';

export async function updateUserData(
  data: UserSettingsSchemaData & { password?: string },
  $id: string,
) {
  if (!data) return;

  if (data.phone) {
  }
  const result = await updateUser({ ...data, userId: $id });
  result.map((item) => item.reason && toast.error(item.reason.message));
}
