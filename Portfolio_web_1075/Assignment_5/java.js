let messageCount = 0;

function postFunction() {
    const Input = document.getElementById('text1').value.trim();
    if (Input === '') {
        return;
    }

    messageCount++;

    if (messageCount === 1) {
        document.getElementById('topic1').innerHTML = Input;
    } else if (messageCount === 2) {
        document.getElementById('comment1').innerHTML = Input;
    } else if (messageCount === 3) {
        document.getElementById('comment2').innerHTML = Input;
    }

    // Clear the input field after posting.
    document.getElementById('text1').value = '';
}

function clearFunction() {
    document.getElementById('topic1').innerHTML = '';
    document.getElementById('comment1').innerHTML = '';
    document.getElementById('comment2').innerHTML = '';
    messageCount = 0;
}