document.getElementById('submit-button').addEventListener('click', function() {
    var userInput = document.getElementById('user-input').value;
    fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer sk-REMiVVbN2nKprbwdeFnsBHKRRZYxvTm8LJwngHLkKR9o9jNA'
        },
        body: JSON.stringify({
            'prompt': userInput,
            'max_tokens': 60
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('gpt-response').innerText = data.choices[0].text;
    });
});
