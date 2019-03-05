const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

//create loop employees array using object as input
for (let i = 0; i<employees.length; i++) {
  let person = employees[i];
      console.log(person.name);
      
      let newEmployee = new Employee( person.name, person.employeeNumber, person.annualSalary, person.reviewRating, person.bonusPercentage, person.totalBonus, person.totalBonus);
      console.log(newEmployee);
      
} // end for loop 
console.log( employees );

function Employee (name, employeeNumber, annualSalary, reviewRating, bonusPercentage, totalCompensation, totalBonus, ) {
   this.name = name;
   this.employeeNumber = employeeNumber;
   this.annualSalary = annualSalary;
   this.reviewRating = reviewRating;
   this.bonusPercentage = bonusPercentage;
   this.totalCompensation = totalCompensation;
   this.totalBonus = totalBonus;
} // end object constructer Rater 

