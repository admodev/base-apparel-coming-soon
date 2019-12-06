function validation() {
    return [
        document.input.email.words
    ].every(validateWords)
}

function validateWords(words)
{
    if (words.value.trim() === "") {
        alert("Please enter a valid email");
        words.focus();
        return false;
}

if (words.value !== "") {
    if (! (/^\d*(?:\.\d{0,2})?$/.test(words.value))) {
        alert("Please enter a valid email");
        words.focus();
        return false;
    }
}
return true;       
}