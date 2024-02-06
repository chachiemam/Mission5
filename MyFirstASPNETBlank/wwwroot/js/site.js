/* $("#calculateBtn").click(function () {
    var hours = parseFloat($("#hours").val());
    var hourlyRate = parseFloat($("#hourlyRate").val());
    
    alert("This worked");

    if (isNaN(hours) || isNaN(hourlyRate) || hours <= 0 || hourlyRate <= 0) {
        alert("Please enter valid positive numbers for hours and hourly rate.");
        return;
    }

    var total = hours * hourlyRate;
    $("#total").text("Total: $" + total.toFixed(2));
}); */

function CalculateRate()
{
    var hours = parseFloat($("#hours").val());
    var hourlyRate = parseFloat($("#hourlyRate").val());
    alert("This worked");
    if (isNaN(hours) || isNaN(hourlyRate) || hours <= 0 || hourlyRate <= 0) {
        alert("Please enter valid positive numbers for hours and hourly rate.");
        return;
    }

    var total = hours * hourlyRate;
    $("#total").html("Total: $" + total.toFixed(2));
}