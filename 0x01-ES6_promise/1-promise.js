export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const ob = { status: 200, body: 'Success' };
      resolve(ob);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
