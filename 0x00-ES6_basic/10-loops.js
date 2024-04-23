export default function appendToEachArrayValue(array, appendString) {
  const array2 = [];
  for (const elem of array) {
    const word = appendString + elem;
    array2.push(word);
  }

  return array2;
}
