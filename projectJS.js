// Source: https://www.scaler.com/topics/email-validation-in-jquery/
// jQuery plugin to validate email address
$(document).ready(function ()
{
    // Regular expression for email validation
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Function to validate email
    function isValidEmail(email)
    {
        return emailPattern.test(email);
    }

    // Form submission handler
    $('#mealPlanForm').submit(function (event)
    {
        event.preventDefault(); // Prevent the form from submitting

        // Get the entered email address
        var email = $('#email').val();

        // Check if the email is valid
        if (isValidEmail(email))
        {
            // If email is valid, call generateMealPLan function
            generateMealPlan();
        }
    });
});



function generateMealPlan()
{
    // Create class for days with meals for each day
    class Day
    {
        constructor(breakfast, snack1, lunch, snack2, dinner)
        {
            this.breakfast = breakfast;
            this.snack1 = snack1;
            this.lunch = lunch;
            this.snack2 = snack2;
            this.dinner = dinner;
        }
    }

    // Retrieve elements first
    var Monday = new Day(
        document.getElementById("monday_breakfast").value,
        document.getElementById("monday_snack1").value,
        document.getElementById("monday_lunch").value,
        document.getElementById("monday_snack2").value,
        document.getElementById("monday_dinner").value
    );
    var Tuesday = new Day(
        document.getElementById("tuesday_breakfast").value,
        document.getElementById("tuesday_snack1").value,
        document.getElementById("tuesday_lunch").value,
        document.getElementById("tuesday_snack2").value,
        document.getElementById("tuesday_dinner").value
    );
    var Wednesday = new Day(
        document.getElementById("wednesday_breakfast").value,
        document.getElementById("wednesday_snack1").value,
        document.getElementById("wednesday_lunch").value,
        document.getElementById("wednesday_snack2").value,
        document.getElementById("wednesday_dinner").value
    );
    var Thursday = new Day(
        document.getElementById("thursday_breakfast").value,
        document.getElementById("thursday_snack1").value,
        document.getElementById("thursday_lunch").value,
        document.getElementById("thursday_snack2").value,
        document.getElementById("thursday_dinner").value
    );
    var Friday = new Day(
        document.getElementById("friday_breakfast").value,
        document.getElementById("friday_snack1").value,
        document.getElementById("friday_lunch").value,
        document.getElementById("friday_snack2").value,
        document.getElementById("friday_dinner").value
    );
    var Saturday = new Day(
        document.getElementById("saturday_breakfast").value,
        document.getElementById("saturday_snack1").value,
        document.getElementById("saturday_lunch").value,
        document.getElementById("saturday_snack2").value,
        document.getElementById("saturday_dinner").value
    );
    var Sunday = new Day(
        document.getElementById("sunday_breakfast").value,
        document.getElementById("sunday_snack1").value,
        document.getElementById("sunday_lunch").value,
        document.getElementById("sunday_snack2").value,
        document.getElementById("sunday_dinner").value
    );


    // Variable to contain content
    var content = "<!DOCTYPE HTML><html><head><title>My Weekly Meal Plan</title></head>";
    content += "<body><h1>MY WEEKLY MEAL PLAN</h1>";
    content += "<p>Created by: " + document.getElementById("name").value + "</p>";
    content += "<p>Email address: " + document.getElementById("email").value + "</p>";
    content += "<p>Goal of the Week: " + document.getElementById("goal").value + "</p><br>";
    // Monday
    content += "<h2>MONDAY</h2>";
    content += "<p><strong>Breakfast:</strong> " + Monday.breakfast + "</p>";
    content += "<p><strong>Snack 1:</strong> " + Monday.snack1 + "</p>";
    content += "<p><strong>Lunch:</strong> " + Monday.lunch + "</p>";
    content += "<p><strong>Snack 2:</strong> " + Monday.snack2 + "</p>";
    content += "<p><strong>Dinner:</strong> " + Monday.dinner + "</p>";
    // Tuesday
    content += "<h2>TUESDAY</h2>";
    content += "<p><strong>Breakfast:</strong> " + Tuesday.breakfast + "</p>";
    content += "<p><strong>Snack 1:</strong> " + Tuesday.snack1 + "</p>";
    content += "<p><strong>Lunch:</strong> " + Tuesday.lunch + "</p>";
    content += "<p><strong>Snack 2:</strong> " + Tuesday.snack2 + "</p>";
    content += "<p><strong>Dinner:</strong> " + Tuesday.dinner + "</p>";
    // Wednesday
    content += "<h2>WEDNESDAY</h2>";
    content += "<p><strong>Breakfast:</strong> " + Wednesday.breakfast + "</p>";
    content += "<p><strong>Snack 1:</strong> " + Wednesday.snack1 + "</p>";
    content += "<p><strong>Lunch:</strong> " + Wednesday.lunch + "</p>";
    content += "<p><strong>Snack 2:</strong> " + Wednesday.snack2 + "</p>";
    content += "<p><strong>Dinner:</strong> " + Wednesday.dinner + "</p>";
    // Thursday
    content += "<h2>THURSDAY</h2>";
    content += "<p><strong>Breakfast:</strong> " + Thursday.breakfast + "</p>";
    content += "<p><strong>Snack 1:</strong> " + Thursday.snack1 + "</p>";
    content += "<p><strong>Lunch:</strong> " + Thursday.lunch + "</p>";
    content += "<p><strong>Snack 2:</strong> " + Thursday.snack2 + "</p>";
    content += "<p><strong>Dinner:</strong> " + Thursday.dinner + "</p>";
    // Friday
    content += "<h2>FRIDAY</h2>";
    content += "<p><strong>Breakfast:</strong> " + Friday.breakfast + "</p>";
    content += "<p><strong>Snack 1:</strong> " + Friday.snack1 + "</p>";
    content += "<p><strong>Lunch:</strong> " + Friday.lunch + "</p>";
    content += "<p><strong>Snack 2:</strong> " + Friday.snack2 + "</p>";
    content += "<p><strong>Dinner:</strong> " + Friday.dinner + "</p>";
    // Saturday
    content += "<h2>SATURDAY</h2>";
    content += "<p><strong>Breakfast:</strong> " + Saturday.breakfast + "</p>";
    content += "<p><strong>Snack 1:</strong> " + Saturday.snack1 + "</p>";
    content += "<p><strong>Lunch:</strong> " + Saturday.lunch + "</p>";
    content += "<p><strong>Snack 2:</strong> " + Saturday.snack2 + "</p>";
    content += "<p><strong>Dinner:</strong> " + Saturday.dinner + "</p>";
    // Sunday
    content += "<h2>SUNDAY</h2>";
    content += "<p><strong>Breakfast:</strong> " + Sunday.breakfast + "</p>";
    content += "<p><strong>Snack 1:</strong> " + Sunday.snack1 + "</p>";
    content += "<p><strong>Lunch:</strong> " + Sunday.lunch + "</p>";
    content += "<p><strong>Snack 2:</strong> " + Sunday.snack2 + "</p>";
    content += "<p><strong>Dinner:</strong> " + Sunday.dinner + "</p>";
    content += "</body></html>";

    flyWindow = window.open('about:blank', 'My Meal Plan', 'width=500, height=600, left=200, top=200');
    flyWindow.document.write(content);
    flyWindow.document.close();

}


