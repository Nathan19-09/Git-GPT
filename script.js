function search() {
    var input = document.getElementById('searchInput').value;
    var answer = generateAnswer(input);
    document.getElementById('answer').innerHTML = answer;
}

function generateAnswer(question) {
    // Use your AI model to generate an answer based on the question
    // For this example, let's just echo back the question as the answer
    return "The answer to your question is: " + question;
}

document.getElementById("searchInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        search();
    }
});
