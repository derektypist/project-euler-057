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