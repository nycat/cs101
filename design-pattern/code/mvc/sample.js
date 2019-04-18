import Student from './Student';
import StudentController from './StudentController';
import StudentView from './StudentView';

function showSample() {
  const model = new Student('Kathy');
  const view = new StudentView();
  const controller = new StudentController(model, view);

  controller.updateView();

  // controller manuplates model
  controller.setStudentName('Kate');

  // model updates view
  controller.updateView();
}
