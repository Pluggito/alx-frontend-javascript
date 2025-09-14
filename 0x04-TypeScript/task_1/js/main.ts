interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName && this.lastName;
  }
}

const teacher1: Teacher = {
  firstName: "Jane",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "Lagos",
  contract: false,
};

// Director interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

const director1: Director = {
  firstName: "James",
  lastName: "Daveson",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

function printTeacher(firstName: string, lastName: string): string {
    const { firstName: firstN, lastName:lastN } = { firstName, lastName };
  return `${firstName}. ${lastName}`;
}

const student: StudentClassInterface = new StudentClass("Alice", "Smith");

// Demo logs (optional)
console.log(director1);
console.log(teacher1);
console.log(printTeacher("J", "Doe")); // J. Doe
console.log(student.displayName()); // Alice
console.log(student.workOnHomework()); // Currently working