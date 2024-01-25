function calculateAlphabetFrequency(string) {
    const frequency = {};

    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        // Ignore non-alphabetic characters
        if (/^[a-zA-Z]$/.test(char)) {
            frequency[char] = (frequency[char] || 0) + 1;
        }
    }

    return frequency;
}


const inputString = "dummy @@ bolobb hello";
const alphabetFrequencies = calculateAlphabetFrequency(inputString);
console.log(alphabetFrequencies);
