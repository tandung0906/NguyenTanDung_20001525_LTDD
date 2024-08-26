function printForecast(arr) {
    let forecastStr = ''; // Initialize an empty string

    for (let i = 0; i < arr.length; i++) {
        forecastStr += `... ${arr[i]}°C in ${i + 1} days `;
    }

    console.log(forecastStr + "...");
}

// Test Data 1
printForecast([17, 21, 23]); // Output: "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..."

// Test Data 2
printForecast([12, 5, -5, 0, 4]); // Output: "... 12°C in 1 days ... 5°C in 2 days ... -5°C in 3 days ... 0°C in 4 days ... 4°C in 5 days ..."
