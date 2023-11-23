const checkButton = document.getElementById("checkButton");

checkButton.addEventListener("click", function () {
    const fullName = document.getElementById("fullName").value;
    const courseGrade = parseFloat(document.getElementById("courseGrade").value);

    if (!isNaN(courseGrade)) {
        alert("Hello, " + fullName + "!");

        if (courseGrade >= 60) {
            let letterGrade = '';
            if (courseGrade >= 90) {
                letterGrade = 'A';
            } else if (courseGrade >= 80) {
                letterGrade = 'B';
            } else if (courseGrade >= 70) {
                letterGrade = 'C';
            } else {
                letterGrade = 'D';
            }
            alert("Congratulations! You passed the course with a letter grade of " + letterGrade);
        } else {
            alert("Sorry, you failed the course.");
        }
    } else {
        alert("Invalid course grade. Please enter a valid number.");
    }
});
