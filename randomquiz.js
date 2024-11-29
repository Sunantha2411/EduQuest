const questions = [
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin"], answer: 0 },
    { question: "Who discovered gravity?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei"], answer: 0 },
    { question: "Which planet is known as the Red Planet?", options: ["Mars", "Venus", "Mercury"], answer: 0 },
    { question: "Who wrote 'Hamlet'?", options: ["William Shakespeare", "Charles Dickens", "J.K. Rowling"], answer: 0 },
    { question: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe"], answer: 1 },
    { question: "Which element has the symbol 'O'?", options: ["Oxygen", "Gold", "Iron"], answer: 0 },
    { question: "What is the square root of 81?", options: ["8", "9", "10"], answer: 1 },
    { question: "Who painted the 'Starry Night'?", options: ["Claude Monet", "Vincent van Gogh", "Pablo Picasso"], answer: 1 },
    { question: "What is the smallest prime number?", options: ["0", "1", "2"], answer: 2 },
    { question: "What is the process plants use to make food?", options: ["Photosynthesis", "Respiration", "Fermentation"], answer: 0 },
    { question: "What is the capital of Italy?", options: ["Rome", "Venice", "Milan"], answer: 0 },
    { question: "Who invented the telephone?", options: ["Alexander Graham Bell", "Nikola Tesla", "Thomas Edison"], answer: 0 },
    { question: "What is 5 squared?", options: ["15", "20", "25"], answer: 2 },
    { question: "Who was the first President of the United States?", options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln"], answer: 1 },
    { question: "Which gas do humans exhale?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide"], answer: 2 },
    { question: "What is the boiling point of water?", options: ["100°C", "0°C", "50°C"], answer: 0 },
    { question: "Who wrote '1984'?", options: ["George Orwell", "Aldous Huxley", "Ray Bradbury"], answer: 0 },
    { question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze"], answer: 1 },
    { question: "What is the chemical formula of water?", options: ["H2O", "CO2", "NaCl"], answer: 0 },
    { question: "Which planet is closest to the sun?", options: ["Mercury", "Venus", "Earth"], answer: 0 },
    { question: "What is the primary language spoken in Spain?", options: ["French", "Spanish", "Italian"], answer: 1 },
    { question: "Who painted the 'Mona Lisa'?", options: ["Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"], answer: 1 },
    { question: "What is the atomic number of carbon?", options: ["6", "8", "12"], answer: 0 },
    { question: "Which country is known for the Great Wall?", options: ["China", "Japan", "India"], answer: 0 },
    { question: "What is the capital of Japan?", options: ["Beijing", "Tokyo", "Seoul"], answer: 1 },
    { question: "Who is known as the 'Father of the Computer'?", options: ["Alan Turing", "Charles Babbage", "John von Neumann"], answer: 1 },
    { question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Pacific"], answer: 2 },
    { question: "Which is the smallest continent?", options: ["Antarctica", "Australia", "Europe"], answer: 1 },
    { question: "What is the freezing point of water?", options: ["0°C", "100°C", "32°F"], answer: 0 },
    { question: "Who wrote 'Pride and Prejudice'?", options: ["Jane Austen", "Emily Brontë", "Louisa May Alcott"], answer: 0 },
    { question: "What is the powerhouse of the cell?", options: ["Mitochondria", "Nucleus", "Chloroplast"], answer: 0 },
    { question: "Which organ is responsible for pumping blood?", options: ["Heart", "Lungs", "Liver"], answer: 0 },
    { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra"], answer: 2 },
    { question: "Which planet is the largest in our solar system?", options: ["Saturn", "Jupiter", "Uranus"], answer: 1 },
    { question: "What is the national animal of India?", options: ["Elephant", "Peacock", "Tiger"], answer: 2 },
    { question: "Who is the author of 'The Hobbit'?", options: ["C.S. Lewis", "J.R.R. Tolkien", "George R.R. Martin"], answer: 1 },
    { question: "What is the main ingredient in guacamole?", options: ["Avocado", "Tomato", "Cucumber"], answer: 0 },
    { question: "Which planet has rings?", options: ["Mars", "Saturn", "Venus"], answer: 1 },
    { question: "Which metal is liquid at room temperature?", options: ["Mercury", "Gold", "Silver"], answer: 0 },
    { question: "Who developed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Niels Bohr"], answer: 1 },
    { question: "What is the capital of Canada?", options: ["Toronto", "Ottawa", "Montreal"], answer: 1 },
    { question: "What is the symbol for potassium?", options: ["K", "P", "Pt"], answer: 0 },
    { question: "Which is the largest land animal?", options: ["Giraffe", "Elephant", "Hippopotamus"], answer: 1 },
    { question: "What is the primary gas found in Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide"], answer: 1 },
    { question: "Which city is known as the Big Apple?", options: ["Los Angeles", "Chicago", "New York City"], answer: 2 },
    { question: "What does DNA stand for?", options: ["Deoxyribonucleic Acid", "Dinucleotide Acid", "Deoxynucleic Acid"], answer: 0 },
    { question: "Who is the Greek god of the sea?", options: ["Zeus", "Poseidon", "Hades"], answer: 1 },
    { question: "What is the speed of light?", options: ["3,000 km/s", "300,000 km/s", "3,000,000 km/s"], answer: 1 },
    { question: "Who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "Mark Twain", "F. Scott Fitzgerald"], answer: 0 }
];
// Function to shuffle questions
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Select 5 random questions
  const randomQuestions = shuffle([...questions]).slice(0, 5);

  
  
  // Render questions to the DOM
  const quizContainer = document.getElementById("quiz");
  randomQuestions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.innerHTML = `
      <p>${index + 1}. ${q.question}</p>
      ${q.options.map((opt, i) => `
        <div class="option">
          <input type="radio" name="q${index}" value="${i}" id="q${index}_opt${i}"> ${opt}
        </div>
      `).join('')}
    `;
    quizContainer.appendChild(questionDiv);
  });
  
  
  // Submit button functionality
  document.getElementById("submit").addEventListener("click", () => {
    let score = 0;
    randomQuestions.forEach((q, index) => {
      // Get the selected answer for each question
      const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
      
      // If an option is selected, check if it's the correct one
      if (selectedOption && parseInt(selectedOption.value) === q.answer) {
        score++
      }
    });

    
    // Show the score as an alert
    alert(`You scored ${score}/${randomQuestions.length}`);
    
    localStorage.setItem('score', score);
    localStorage.setItem('quizName', 'Random Quiz');
  
    // Redirect to congratulations.html after the quiz is completed
    window.location.href = "congratulations.html";
  });