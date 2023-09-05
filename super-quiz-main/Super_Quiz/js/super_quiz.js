$(function () {
   const playNow = document.querySelector('#play-now');
   const addQuestion = document.querySelector('#add-question');
   const startQuiz = document.querySelector('#start-quiz');
   const quizPage = document.querySelector('.quiz-page');
   const choices = document.querySelector('#choices-div');
   const main = document.querySelector('.main-page');
   const questionInput = document.querySelector('.question-input');
   const welcome = document.querySelector('.header');
   const questionDiv = document.querySelector('#question-div');
   const nextQuestionButton = document.querySelector('#next-question');
   const scoreDiv = document.querySelector('#score-div');
   let numCorrect = 0;
   let numIncorrect = 0;
   let questionBank = [];// questionBank array
   let correct;
   let counter = 0; /*question counter*/
   let pulledQuestions = [];
   let qObject;
   /* Question constructor*/
   function Question(questionText, answers, correctAnswer) {
      this.questionText = questionText,
         this.answers = answers,
         this.correctAnswer = correctAnswer
   }/* end of Question constructor*/
   /* start of questions*/
   let q1 = new Question(
      'Who was the lead guitar play for the Grateful Dead?', ['Jerry Garcia', 'Eric Clapton', 'Jeff Beck', 'Jimmy Page'], 0)
   let q2 = new Question(
      'What year was the famous Chicago Fire?', ['1901', '1871', '1795', '1895'], 1)
   let q3 = new Question(
      'What year did the Detroit Tigers become a Major League Baseball team?', ['1888', '1913', '1901', '1925'], 2)
   let q4 = new Question(
      'What year did the Detroit Red Wings begin playing?', ['1926', '1905', '1935', '1900'], 0)
   let q5 = new Question(
      'What year was the fire in Detroit that nearly destroyed the entire city?', ['1805', '1818', '1793', '1765'], 0)
   let q6 = new Question(
      'What year was Apple Computer Inc. founded?', ['1969', '1983', '1976', '1986'], 2)
   let q7 = new Question(
      'Who is the current lead singer of the Rolling Stones?', ['Keith Richards', 'Mick Jagger', 'Brian Jones', 'Charlie Watt'], 1)
   let q8 = new Question(
      'Who was the original singer for Genesis?', ['Phil Collins', 'Tony Banks', 'Peter Gabriel', 'Bono'], 2)
   let q9 = new Question(
      'What Michigan city was Madonna born in?', ['Rochester Hills', 'West Bloomfield', 'Bay City', 'Sterling Heights'], 2)
   let q10 = new Question(
      'Which name is NOT the name of a band?', ['Quicksilver Messenger Service', 'The Ace of   Cups', 'Tripsichord Music Box', 'Jenkum'], 3)
   let q11 = new Question(
      'Which person is NOT from Michigan?', ['Bob Segar', 'Iggy Pop', 'Jimi Hendrix', 'Madonna'], 2)
   let q12 = new Question(
      'The MC5 formed and what Michigan college?', ['Central Michigan University', 'Wayne State University', 'University of Michigan', 'Michigan State University'], 1)
   let q13 = new Question(
      'The Allman Brothers Band claim what state as home?', ['Florida', 'North Carolina', 'Georgia', 'Alabama'], 2)
   let q14 = new Question(
      'What musical movement is said to have started in Detroit?', ['Punk Rock', 'Thrash Metal', 'Progressive Rock', 'Techno'], 3)
   let q15 = new Question(
      'The Detroit Red Wings have won how many Stanley Cups?', ['5', '9', '13', '11'], 3)
   let q16 = new Question(
      'The Detroit Tigers have won how many World Series Titles?', ['6', '4', '3', '2'], 1)
   let q17 = new Question(
      'The Chicago Cubs have won how many World Series Titles?', ['3', '1', '6', '5'], 0)
   let q18 = new Question(
      'Which choice is NOT a religion?', ['Pastafarianism', 'Catholicism', 'Asatru', 'Humanism'], 3)
   /* end of questions*/
   questionBank.push(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18)
   /*START OF PLAYNOW*/
   playNow.addEventListener('click', () => {
      main.classList.add('hide');
      quizPage.classList.remove('hide');
   }) /*END OF PLAYNOW*/
   /*START OF ADDQUESTION*/
   addQuestion.addEventListener('click', () => {
      main.classList.add('hide');
      questionInput.classList.remove('hide');
      welcome.classList.add('hide');
   }) /*END OF ADDQUESTION*/
   /* START OF SUBMIT YOUR QUESTION*/
   $('form').on('submit', function (e) {
      e.preventDefault();
      if ($('#userQuestion').val() === '' || $('#userAnswer0').val() === '' || $('#userAnswer1').val() === '' || $('#userAnswer2').val() === '' || $('#userAnswer3').val() === '' || $('#answer-select').val() === '') {
         alert('All fields must be completed.')
      } else {
         let userQuestion = new Question($('#userQuestion').val(), [$('#userAnswer0').val(), $('#userAnswer1').val(), $('#userAnswer2').val(), $('#userAnswer3').val()], parseInt($('#answer-select').val()))
         $('#userQuestion, #userAnswer0, #userAnswer1, #userAnswer2, #userAnswer3, #answer-select').val('')
         questionBank.push(userQuestion)
         questionInput.classList.add('hide');
         main.classList.remove('hide');
         welcome.classList.remove('hide');
      }
   }) /*END OF SUBMIT YOUR QUESTION*/
   /* BEGINNING OF START QUIZ BUTTON*/
   startQuiz.addEventListener('click', () => {
      startQuiz.classList.add('hide');
      questionDiv.classList.remove('hide');
      document.getElementById('choices-div').classList.remove('hide');
      nextQuestion()
   }) /*END OF START QUIZ BUTTON*/
   /*BEGINNING OF NEXT QUESTION BUTTON*/
   nextQuestionButton.addEventListener('click', () => {
      if (counter === 10) {
         quizPage.classList.add('hide');
         scoreDiv.classList.remove('hide');
         nextQuestionButton.classList.add('hide');
         document.querySelector('#retakeQuiz').classList.remove('hide');
      } else {
         nextQuestion()
         nextQuestionButton.classList.add('hide');
         scoreDiv.classList.add('hide');
         document.querySelector('#retakeQuiz').classList.add('hide');
      }
      choices.classList.remove('hide');
   })
   function nextQuestion() {
      let currentQ;
      if (questionBank.length > 18) {
         currentQ = questionBank.splice(questionBank.length - 1, 1)
      } else {
         let random = Math.round(Math.random() * questionBank.length - 1);
         currentQ = questionBank.splice(random, 1);
         qObject = currentQ[0];
      }
      pulledQuestions.push(qObject);
      questionDiv.textContent = currentQ[0].questionText;
      document.querySelector('#answer0').textContent = currentQ[0].answers[0];
      document.querySelector('#answer1').textContent = currentQ[0].answers[1];
      document.querySelector('#answer2').textContent = currentQ[0].answers[2];
      document.querySelector('#answer3').textContent = currentQ[0].answers[3];
      correct = currentQ[0].correctAnswer;
   }
   $('#choices-div button').on('click', (event) => {
      counter++;
      if (parseInt(event.target.dataset.index) === correct) {
         numCorrect++;
      } else {
         numIncorrect++;
      }
      let score = Math.round(numCorrect / 10 * 100);
      choices.classList.add('hide');
      nextQuestionButton.classList.remove('hide');
      scoreDiv.classList.remove('hide');
      document.querySelector('#retakeQuiz').classList.add('hide');
      document.querySelector('#correct').textContent = numCorrect;
      document.querySelector('#incorrect').textContent = numIncorrect;
      document.querySelector('#totalScore').textContent = score + '%';
   })
   /* START OF REFERSH THE PAGE*/
   function refresh() {
      numCorrect = 0;
      numIncorrect = 0;
      counter = 0;
      questionBank = questionBank.concat(pulledQuestions);
      pulledQuestions = [];
      console.log(questionBank)
   }
   $('#retakeQuiz').on('click', () => {
      scoreDiv.classList.add('hide');
      main.classList.remove('hide');
      refresh();
   })/* END OF REFERSH THE PAGE*/
}); /*END OF READY */