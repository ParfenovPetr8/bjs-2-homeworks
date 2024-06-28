function Student(name, gender, age) { // Функция-конструктор Student
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.subject = null; // Предмет не установлен изначально
    this.marks = []; // Пустой массив для хранения оценок
};

Student.prototype.setSubject = function (subjectName) { // Метод для установки предмета
    this.subject = subjectName;
};

//Student.prototype.Marks = function (...marks) { // Метод для добавления оценок
Student.prototype.addMarks = function(...marksToAdd) {
    if (this.hasOwnProperty('marks')) { // Проверка, что студент не исключен (не удалено свойство marks)
        //this.marks.push(...marks);
        this.marks.push(...marksToAdd);
      } else {
        console.log(`${this.name} исключен из учебного процесса.`);
      }
};

Student.prototype.getAverage = function () { // Метод для вычисления среднего значения оценок
    if (!this.marks || this.marks.length === 0) {
        return 0;
      }
      const sum = this.marks.reduce((total, mark) => total + mark, 0);
      return sum / this.marks.length;
};

Student.prototype.exclude = function (reason) { // Метод для исключения студента
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
};

/* Пример использования
let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);

let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба');
console.log(student2);*/
