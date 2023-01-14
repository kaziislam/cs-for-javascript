const isPalindrome = (word) => {
    let reverseWord = ''

    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }
    return (word === reverseWord);
}

isPalindrome('water');