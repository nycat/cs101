class StudentController {
  constructor(student, studentView) {
    this.model = student;
    this.view = studentView;
  }

  setStudentName (name = 'Student') {
    this.model.name = name;
  }

  setStudentNo (no = 1) {
    this.model.no = no;
  }

  updateView () {
    const model = this.model;
    const view = this.view;
    view.logStundentInfo(model.name, model.no);
  }
}
