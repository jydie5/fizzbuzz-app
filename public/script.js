// public/script.js
document.getElementById('start-button').addEventListener('click', () => {
    fetch('/api/fizzbuzz')
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('fizzbuzz-result');
            resultDiv.textContent = data.result.join('\n');
        })
        .catch(error => {
            console.error('Error fetching FizzBuzz:', error);
        });
});
