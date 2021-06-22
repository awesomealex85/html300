// jQuery Doc Ready
$(function () {
    // Set up some data and variables
    const data = [2,4,6,8],
        resultSum = $('.sum');
    // Click event on the submit input
    $('.submit1').on('click', function () {
        // Grab the input value and parse it into a number
        let input = $("[name='input1']");
        const val = input.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
            // Add our new number to the data array
            data.push(num);
            // Use reduce to convert our array of numbers into a single value - the sum of all of the numbers
            const sum = data.reduce((acc, curr) => acc + curr);
            // Add our new total to the page
            resultSum.text(sum);
            // Reset the input value to an empty string
            input.val('');
        }
    });
    $('.submit2').on('click', function () {
        // Grab the input value and parse it into a number
        let input = $("[name='input2']");
        const val = input.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
            // Add the value entered to each number in the array
            let sum = data.map(function(value){
              return value + num
            });
            // Displays the array with new values
            resultSum.text(sum);
            // Reset the input value to an empty string
            input.val('');
        }
    });
    $('.submit3').on('click', function () {
        // Grab the input value and parse it into a number
        let input = $("[name='input3']");
        const val = input.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
            // Find first value in array greater than number entered
            let sum = data.find(function(value){
              return value < num
            });
            // Add our new total to the page
            resultSum.text(sum);
            // Reset the input value to an empty string
            input.val('');
        }
    });
    $('.submit4').on('click', function () {
        // Grab the input value and parse it into a number
        let input = $("[name='input4']");
        const val = input.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
            // Returns all number in the array larger than the value entered
            let sum = data.filter(function(value){
              return value > num
            });
            resultSum.text(sum);
            // Reset the input value to an empty string
            input.val('');
        }
    });
});
