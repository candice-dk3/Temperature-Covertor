document.addEventListener("DOMContentLoaded", function() {
    const convertButton = document.getElementById("convert");
    const convertedValueElement = document.getElementById("convertedValue");

    convertButton.addEventListener("click", function() {
        const temperature = parseFloat(document.getElementById("temperature").value);
        const conversionType = document.getElementById("conversionType").value;

        if (!isNaN(temperature)) {
            let convertedTemperature;

            if (conversionType === "CtoF") {
                convertedTemperature = (temperature * 9/5) + 32;
            } else if (conversionType === "FtoC") {
                convertedTemperature = (temperature - 32) * 5/9;
            }

            convertedValueElement.textContent = convertedTemperature.toFixed(2);
        } else {
            convertedValueElement.textContent = "Invalid input";
        }
    });
});