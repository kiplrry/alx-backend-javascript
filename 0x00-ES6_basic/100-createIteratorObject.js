export default function createIteratorObject(report) {
  const arr = [];
  const arrs = Object.values(report.allEmployees);
  arrs.forEach((val) => {
    arr.push(...val);
  });
  return arr;
}
