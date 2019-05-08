let _no = 1;

class Student {
  constructor(name = 'student') {
    this.name = name;
    this.no = _no++;
  }
}