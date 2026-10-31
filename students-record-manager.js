// Part 5: Take-Home Assignment
// Student Records Manager

// 1. Create an array of at least 5 student objects
const students = [
  { name: "Amina", age: 22, course: "Web Development", score: 72 },
  { name: "goodness", age: 24, course: "JavaScript", score: 85 },
  { name: "Ngozi", age: 21, course: "HTML and CSS", score: 45 },
  { name: "Emeka", age: 23, course: "Python", score: 60 },
  { name: "Ada", age: 20, course: "Web Design", score: 38 }
];

// 2. Function to return a letter grade
function getGrade(score) {
  if (score >= 70) {
    return "A";
  } else if (score >= 60) {
    return "B";
  } else if (score >= 50) {
    return "C";
  } else {
    return "F";
  }
}

// 3. Function to display student information
function displayStudent(student) {
  console.log(
    `${student.name} (${student.age}) is studying ${student.course} and scored ${student.score} - Grade ${getGrade(student.score)}.`
  );
}

// 4. Use forEach to display every student
console.log("=== ALL STUDENTS ===");
students.forEach(displayStudent);

// 5. Use filter to find students who passed
const passedStudents = students.filter(student => student.score >= 50);

console.log("\n=== STUDENTS WHO PASSED ===");
passedStudents.forEach(displayStudent);

// 6. Use map to create an array of student names
const studentNames = students.map(student => student.name);

console.log("\n=== STUDENT NAMES ===");
console.log(studentNames);

// 7. BONUS: Calculate the average score
function averageScore(students) {
  const totalScore = students.reduce(
    (total, student) => total + student.score,
    0
  );

  return totalScore / students.length;
}

console.log("\n=== AVERAGE SCORE ===");
console.log(averageScore(students).toFixed(2));