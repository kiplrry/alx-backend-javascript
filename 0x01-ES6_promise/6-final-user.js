import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  const signup = await signUpUser(firstName, lastName).then((resolve) => ({ status: 'fulfilled', value: resolve })).catch((rej) => ({ status: 'fulfilled', value: rej }));
  const upload = await uploadPhoto(filename).then((resolve) => ({ status: 'fulfilled', value: resolve })).catch((rej) => ({ status: 'fulfilled', value: rej }));
  return [upload, signup];
}
