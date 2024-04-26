class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isAvailable = true;
    }

    toggleAvailability() {
        this.isAvailable = !this.isAvailable;
    }
}

class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
        this.car = car;
        this.renterName = renterName;
        this.rentalStartDate = rentalStartDate;
        this.rentalEndDate = rentalEndDate;
    }

    calculateRentalDuration() {
        const durationInMilliseconds = this.rentalEndDate - this.rentalStartDate;
        const durationInDays = Math.floor(durationInMilliseconds / (1000 * 60 * 60 * 24));
        return durationInDays;
    }
}


const car1 = new Car("Toyota", "Premio", 2024);


const start_date = new Date(2024, 2, 11); 
const end_date = new Date(2024, 2, 20);
const rental1 = new Rental(car1, "Loice", start_date, end_date);
const duration = rental1.calculateRentalDuration();


console.log(`Car: ${car1.make} ${car1.model} (${car1.year})`);
console.log(`Renter: ${rental1.renterName}`);
console.log(`Rental duration: ${duration} days`);





//2
class Question {
    constructor(text, options, correctAnswer) {
    this.text = text;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }
  checkAnswer(userAnswer) {
    return userAnswer === this.correctAnswer;
  }
}
const question1 = new Question(
  "Which country is New York located at?",
  ["Kenya", "USA", "Tanzania", "South Africa"],
  "Paris"
);
const userAnswer = "Kenya";
console.log(question1.checkAnswer(userAnswer));

class Quiz {
  constructor() {
    this.questions = [];
    this.currentQuestionIndex = 0;
    this.score = 0;
  }
  addQuestion(question) {
    this.questions.push(question);
  }
  nextQuestion() {
    this.currentQuestionIndex++;
  }
  submitAnswer(userAnswer) {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (currentQuestion.checkAnswer(userAnswer)) {
      this.score++;
    }
    this.nextQuestion();
  }
}
