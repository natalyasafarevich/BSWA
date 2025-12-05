'use server';
import { createAdminClient } from '@/shared/module/appwrite-ssr';

type UpdateProps = {
  genres: string[];
  nick: string;
  userId: string;
  password?: string;
  name?: string;
  phone?: string;
};

export async function updateUser(data: UpdateProps) {
  const { users } = await createAdminClient();

  const promises = [
    data.name && users.updateName({ userId: data.userId, name: data.name }),
    data.phone && users.updatePhone({ userId: data.userId, number: data.phone ?? '' }),
    users.updateLabels(data.userId, data.genres),
  ].filter(Boolean);

  const results = await Promise.allSettled(promises);

  return results.map((r) =>
    r.status == 'fulfilled' ? { status: 'ok' } : { status: 'error', reason: r.reason },
  );
}
