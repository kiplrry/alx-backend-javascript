import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([
    createUser(),
    uploadPhoto(),
  ]).then((res) => {
    const ob = { ...res[0], ...res[1] };
    console.log(ob.body, ob.firstName, ob.lastName);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
