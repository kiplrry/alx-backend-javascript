import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const pic = uploadPhoto();
  const user = createUser();

  return Promise
    .all([pic, user]).then((resolve) => {
      console.log(`${resolve[0].body} ${resolve[1].firstName} ${resolve[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
