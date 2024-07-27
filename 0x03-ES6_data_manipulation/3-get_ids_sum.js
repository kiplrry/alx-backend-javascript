import getListStudents from './0-get_list_students';

export default function getStudentIdsSum(list = getListStudents()) {
  return list.reduce((curr, next) => curr + next.id, 0);
}
