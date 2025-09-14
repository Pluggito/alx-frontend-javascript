interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number): Director | Teacher {
  if (salary < 500) {
    return new Teacher();
  }
  return new Director();
}

function isDirector(employee: Director | Teacher):
  employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

type Subjects = "Maths" | "History";

function teachClass(todayClass:Subjects): string {
  if(todayClass === "Maths") {
    return "Teaching Maths";
  }
  return "Teaching History";
}

console.log(teachClass('Maths'));
console.log(teachClass('History'));

const emp5 = createEmployee(200);
console.log(executeWork(emp5)); 

const emp4 = createEmployee(1000);
console.log(executeWork(emp4));

const emp1 = createEmployee(200);
const emp2 = createEmployee(1000);
const emp3 = createEmployee(500);