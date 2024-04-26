import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const res = await Promise.all(
    [uploadPhoto(), createUser()],
  ).then((resolve) => resolve, () => [null, null]);
  return { photo: res[0], user: res[1] };
}
