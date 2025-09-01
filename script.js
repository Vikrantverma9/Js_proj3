 const quizData = [
      { q: "2 + 2 = ?", a: ["3","4","5"], correct: 1 },
      { q: "Capital of India?", a: ["Delhi","Mumbai","Kolkata"], correct: 0 }
    ];

    const quiz = document.getElementById('quiz');
    const submitBtn = document.getElementById('submit');

    // Inject questions before button
    submitBtn.insertAdjacentHTML('beforebegin',
      quizData.map((item, index) => {
        let html = `<p>${item.q}</p>`;
        item.a.forEach((ans, i) => {
          html += `<label><input type="radio" name="q${index}" value="${i}">${ans}</label><br>`;
        });
        return html;
      }).join("")
    );

    // Score checking
    submitBtn.addEventListener('click', () => {
      let score = 0;
      quizData.forEach((item, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === item.correct) score++;
      });
      alert(`Your score: ${score}/${quizData.length}`);
    });