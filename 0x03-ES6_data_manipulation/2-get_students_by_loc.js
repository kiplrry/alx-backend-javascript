import getListStudents from './0-get_list_students';

export default function getStudentsByLocation(arr = getListStudents(), city) {
  return arr.filter((ele) => ele.location === city);
}
