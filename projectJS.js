// Get form element
const mealPlanForm = document.getElementById("mealPlanForm");

// Event listener for form
mealPlanForm.addEventListener("submit", function (event)
{
    // Prevent default form submission
    event.preventDefault();

    // Retrieve email input value
    let email = document.getElementById("email").value;

    // validate email address
    if (isValidEmail(email))
    {
        // If valid, call function
        generateMealPlan();
    } else
    {
        // If invalid, display error message
        alert("Invalid email address. Try again.");
        document.getElementById("email").focus();
    }
});



// Function to validate email address
function isValidEmail(email)
{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}



// Class for Days with Meals for each day
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



// Function that generates popup window with meal plan
function generateMealPlan()
{
    let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    // Retrieve elements using loop
    for (let i = 0; i < daysOfWeek.length; i++)
    {
        let day = daysOfWeek[i];

        let breakfastId = day.toLowerCase() + "_breakfast";
        let snack1Id = day.toLowerCase() + "_snack1";
        let lunchId = day.toLowerCase() + "_lunch";
        let snack2Id = day.toLowerCase() + "_snack2";
        let dinnerId = day.toLowerCase() + "_dinner";

        // Create new object
        window[day] = new Day(
            document.getElementById(breakfastId).value,
            document.getElementById(snack1Id).value,
            document.getElementById(lunchId).value,
            document.getElementById(snack2Id).value,
            document.getElementById(dinnerId).value
        );
    }

    // Variable that contains content
    let content = "<!DOCTYPE HTML><html><head><title>My Weekly Meal Plan</title>";
    content += "<style>h1 {font-family:\"Cambria\",\"Georgia\"; text-align: center;} p {font-family:\"Cambria\",\"Georgia\"; text-indent: 50px;}";
    content += "h2 {font - family: \"Cambria\",\"Georgia\"; text-decoration: underline; text-indent: 15px;}</style></head >";
    content += "<body><h1>MY WEEKLY MEAL PLAN</h1>";
    content += "<p><strong>Created by: </strong>" + document.getElementById("name").value + "</p>";
    content += "<p><strong>Email address: </strong>" + document.getElementById("email").value + "</p>";
    content += "<p><strong>Goal of the Week: </strong>" + document.getElementById("goal").value + "</p><br>";

    // Loop to display meals for each day of the week
    for (var i = 0; i < daysOfWeek.length; i++)
    {
        let day = daysOfWeek[i];
        content += "<h2>" + day.toUpperCase() + "</h2>";
        content += "<p><strong>Breakfast:</strong> " + window[day].breakfast + "</p>";
        content += "<p><strong>Snack 1:</strong> " + window[day].snack1 + "</p>";
        content += "<p><strong>Lunch:</strong> " + window[day].lunch + "</p>";
        content += "<p><strong>Snack 2:</strong> " + window[day].snack2 + "</p>";
        content += "<p><strong>Dinner:</strong> " + window[day].dinner + "</p><br>";
    }
    // Print and Download buttons
    content += "<button type=\"button\" onclick = window.print() > Print Planner</button>"
    content += "<a onclick=\"this.href = 'data:text/html;charset=UTF-8,' + encodeURIComponent(document.documentElement.outerHTML)\" href=\"#\" download=\"MyMealPlan.htm\">";
    content += "<button>Download</button></a>";
    content += "</body></html>";

    // Create and populate popup window
    flyWindow = window.open('', 'My Meal Plan', 'resizable=yes, toolbar=no, menubar=no, width=500, height=700, left=500, top=100');
    flyWindow.document.write(content);
    flyWindow.document.close();
}
