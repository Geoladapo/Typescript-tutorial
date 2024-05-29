class Department {
  //   private name: string;
  private employees: string[] = [];

  constructor(private name: string) {
    //     this.name = name;
  }

  describe() {
    console.log(`${this.name} is a nice department `);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const science = new Department('Science');
science.describe();

// singleton and private constructor
// Abstract classes
//  static properties and methods
