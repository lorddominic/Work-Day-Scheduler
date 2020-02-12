$(document).ready(function () {

    //on click function for the save button - when the save button is clicked you want to pull of values of the text box and id off of text box
    $(".saveBtn").on("click", function () {

        // store values in variables
        var hour = $(this)
            .parent()
            .attr("id");
        var text = $(this)
            .siblings(".description")
            .val()
            .trim();

        console.log("text: ", text);
        console.log("hour: ", hour);

        // set local storage with this values
        localStorage.setItem(hour, text);

    });

    //a function that updates the background colors 
    function updateBackground() {

        //get the time using moment.js


        // compare the current time with the time block time 


        //add and remove classes based off of if the current time is before or after the block time




    }

    updateBackground();


    //get values from local storage and set the text areas

    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));






});






