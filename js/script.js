// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the value of the input field
    let num = document.getElementById("mynumber").value;
    // Check if input is valid
    if (isNaN(num) || num.length == 0 || num<10 || num>10000 || (num.length > 1 && num[0] == "0") || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 10 and 10000.  Do not include leading zeros.`;
    } else {
        txt += `You have entered the number ${num}. <p>`;
        txt += `In the first ${num} expansions, ${squareRootConvergents(num)} fraction(s) contain a numerator with more digits than the denominator.`
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

/*
    Function to return the number of fraction(s) containing a numerator with
    more digits than the denominator in the first n expansions
    squareRootConvergents(10)   returns 1
    squareRootConvergents(100)  returns 15
    squareRootConvergents(1000) returns 153
*/
function squareRootConvergents(n) {
    function countDigits(number) {
        let counter = 0;
        while (number > 0) {
            counter++;
            number = number/10n;
        }
        return counter;
    }

    // Need to use BigInts for numerator and denominator
    let numerator = 3n;
    let denominator = 2n;
    let moreDigitsInNumerator = 0;
    for (let i=2;i<=n;i++) {
        [numerator, denominator] = [numerator + 2n * denominator, denominator + numerator];
        if (countDigits(numerator) > countDigits(denominator)) moreDigitsInNumerator++;
    }
    return moreDigitsInNumerator;
}