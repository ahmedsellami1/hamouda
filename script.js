document.getElementById("quiz-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche la soumission du formulaire
    let score = 0;

    const answers = {
        q1: "b",
        q2: "c",
        q3: "a",
        q4: "c",
        q5: "a"
    };

    Object.keys(answers).forEach((question) => {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (userAnswer && userAnswer.value === answers[question]) {
            score++;
        }
    });

    alert(`Votre score est : ${score} / ${Object.keys(answers).length}`);
});
