document.getElementById('quizForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    
    const selectedQuiz = document.getElementById('quiz').value;
  
    // Check if a quiz is selected
    if (!selectedQuiz) {
      alert('Please select a quiz.');
      return;
    }
  
    // Redirect to the corresponding quiz page
    const quizPageMap = {
      sdg: 'sdg.html',
      maths: 'maths.html',
      science: 'science.html',
      computerscience: 'computerscience.html',
      coding: 'coding.html',
      arts: 'arts.html',
      english: 'english.html',
      socialscience: 'socialscience.html',
      randomquiz: 'randomquiz.html'
    };
  
    // Redirect to the selected quiz page
    const quizPage = quizPageMap[selectedQuiz];
    if (quizPage) {
      window.location.href = quizPage;
    } else {
      alert('Selected quiz page not found!');
    }
  });
  