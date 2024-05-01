// Definición de la clase Question
class Question {
  constructor(question, options, correctAnswer, userAnswer) {
    this.question = question;
    this.options = options;
    this.correctAnswer = correctAnswer;
    this.userAnswer = userAnswer;
  }

  isCorrectAnswer(option) {
    return option === this.correctAnswer;
  }
}

// Definición de la clase Quiz
class Quiz {
  constructor(questions) {
    this.questions = questions;
  }

  displayQuestions() {
    const form = document.getElementById('quizForm');
    this.questions.forEach((question, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.className = 'question';
      questionDiv.innerHTML = `<h3>${index + 1}. ${question.question}</h3>`;
      
      question.options.forEach((option, optionIndex) => {
        const optionInput = document.createElement('input');
        optionInput.type = 'radio';
        optionInput.name = `question${index}`;
        optionInput.value = option;
        
        const optionLabel = document.createElement('label');
        optionLabel.textContent = option;

        // Agregar evento change para aplicar estilos a la respuesta correcta
        optionInput.addEventListener('change', () => {
          if (question.isCorrectAnswer(option)) {
            optionLabel.style.fontWeight = 'bold';
            optionLabel.style.color = 'green';
          } else {
            optionLabel.style.fontWeight = 'normal'; // Revertir estilos si cambia la selección
            optionLabel.style.color = 'red';
          }
        });
        
        questionDiv.appendChild(optionInput);
        questionDiv.appendChild(optionLabel);
        questionDiv.appendChild(document.createElement('br'));
      });

      form.appendChild(questionDiv);
    });
  }
}

// Creación de instancias de las clases y ejecución del cuestionario
const questions = [
  new Question("¿Cuál es la capital de Francia?", ["París", "Londres", "Roma", "Chillan", "Talca"], "París", ""),
  new Question("¿Cuál es la capital de Inglaterra?", ["Madrid", "Londres", "Berlín", "Santiago", "La Serena"], "Londres", ""),
  new Question("¿Cuál es la capital de España?", ["Madrid", "Barcelona", "Sevilla"], "Madrid", ""),
  new Question("¿Cuál es la capital de Italia?", ["Milán", "Roma", "Nápoles"], "Roma", ""),
  new Question("¿Cuál es la capital de Alemania?", ["Hamburgo", "Berlín", "Múnich"], "Berlín", ""),
  new Question("¿Cuál es la capital de Rusia?", ["Moscú", "San Petersburgo", "Sochi"], "Moscú", ""),
  new Question("¿Cuál es la capital de Japón?", ["Osaka", "Tokio", "Yokohama"], "Tokio", ""),
  new Question("¿Cuál es la capital de Australia?", ["Sydney", "Melbourne", "Canberra"], "Canberra", ""),
];

const quiz = new Quiz(questions);
quiz.displayQuestions();
