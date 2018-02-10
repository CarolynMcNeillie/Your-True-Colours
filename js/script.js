// MAYBE I CAN USE
// $('.current').fadeOut();
//I think we need to fadeIn current on load. Currently .current is set opacity 0 to try to set up for this

// CONSTANTS
colours.userColours = { //holds inputs passed in from user
    red: '',
    green: '',
    blue: ''
}

//global variables
const userAuraArray = []
let userAura;

//select and display three prompts from the array
colours.assignPrompts = function() {
    for (let i = 1; i < 4; i = i + 1) {
        let randomVal = Math.floor(Math.random() * colours.prompts.length);
        $((`.prompts${i}`)).text(colours.prompts[randomVal]);
        colours.prompts.splice([randomVal], 1); //make sure the same one isn't displayed twice

    }
}

colours.assignRandomValues = function() { //assigns value of 1 or 0 to each select input on page
    $('body').find('input[type="radio"]').each(function(i, el) {
        //Define a random 1 or 0 within the function
        let randomVal = Math.floor(Math.random() * 2);
        console.log(randomVal);
        // //Set the a random value on the 
        $(el).val(randomVal);
        //reset the toggle
        this.checked = false;
    });
}

colours.start = function() {
    //When the user clicks "Start" show the first prompt 
    $('#start').on('click', function() {
        $('.current').fadeOut(600, function() {
            $('.title').removeClass('current');
            $('.firstPrompt').addClass('current');
        });
    });
}

colours.collectUserInputRed = function() {
    $('.selection1 input').on('change', function(e) { //when a toggle is selected
        e.preventDefault(); //stops the page reloading
        colours.userColours.red = $(this).val(); //sets the value of the colour
        let thisID = ((this).id); //gets the id of the selected radio input
        $(`label[for=${thisID}] span`).toggleClass('fa-circle-o fa-circle'); //changes the toggle icon
        console.log($(this).val());
        $('.firstPrompt').removeClass('current');
        $('.secondPrompt').addClass('current');
    });
}

colours.collectUserInputGreen = function() {
    $('.selection2 input').on('change', function(e) {
        e.preventDefault();
        colours.userColours.green = $(this).val();
        let thisID = ((this).id);
        $(`label[for=${thisID}] span`).toggleClass('fa-circle-o fa-circle');
        console.log($(this).val());
        // thisPrompt = '.secondPrompt'; // sets the stage for the arrows I got rid off
        // thisSelection = '.thirdelection'; // sets the stage for the arrows I got rid off
        $('.secondPrompt').removeClass('current');
        $('.thirdPrompt').addClass('current');
    });
}

colours.collectUserInputBlue = function() {
    $('.selection3 input').on('change', function(e) {
        e.preventDefault();
        colours.userColours.blue = $(this).val();
        let thisID = ((this).id);
        $(`label[for=${thisID}] span`).toggleClass('fa-circle-o fa-circle');
        console.log($(this).val());
        $('.thirdPrompt').removeClass('current');
        $('.lastInput').addClass('current');
    });
}

colours.clickFinish = function() {
    $('input#finish').on('click', function() { //when the Finish button is clicked

        for (let colour in colours.userColours) { // iterate over the userColours object

            if (colours.userColours[colour] == 1) {
                userAuraArray.push(colour); //create an array that only holds colours with value of 1
            }

            $('.lastInput').removeClass('current');
            $('.aura').addClass('current');
        }

        //Determine the final shade and store it in userAura
        //if none selected = white
        //if the userColor = red || green || blue, done
        //if all selected = yellow
        //if red & green & blue = white
        //if red & green = orange
        //if red & blue = purple
        //if green & blue = turquoise

        if (userAuraArray.length == 0) { //if the array is empty
            userAura = "white";
        } else if (userAuraArray.length === 1) { //if there is only one colour in the array
            userAura = userAuraArray[0];
        } else if (userAuraArray.length === 3) { //if the array is full
            userAura = "yellow"; //otherwise, blend!
        } else if (userAuraArray.indexOf("red") > -1 && userAuraArray.indexOf("green") > -1) {
            userAura = "orange";
        } else if (userAuraArray.indexOf("red") > -1 && userAuraArray.indexOf("blue") > -1) {
            userAura = "purple";
        } else if (userAuraArray.indexOf("green") > -1 && userAuraArray.indexOf("blue") > -1) {
            userAura = "turquoise";
        } else {
            console.log('Error in converting the userAuraArray to a final colour userAura!')
        }

        //change the color of the page 
        $("body").addClass(`${userAura}`);

        // pull in the copy associated with the colour in question
        $('.colourName').text(userAura);
        $('.colourMeaning').html(`<p>${colours.colourMeaning[userAura]}</p>`);


        //Add a tweet button to colour name
        $('.twitter').html(colours.twitter[userAura]);

        //Change the title and image metadata for Facebook Sharing
        $('meta')[3].content = `images/${userAura}.jpg`
        $('meta')[5].content = `My aura is ${userAura}. What's yours?`;
    });
}



colours.init = function() {
    colours.assignRandomValues(); //assign random 1 or 0 values to the user inputs
    colours.assignPrompts(); //select and display three prompts from the array
    colours.start(); //listens for user click on start button
    colours.collectUserInputRed(); //listens for user input - red
    colours.collectUserInputGreen(); //listens for user input - green
    colours.collectUserInputBlue(); //listens for user input - blue
    colours.clickFinish(); //calculates final colour and displays on the screen
}

$(function() {
    colours.init();
});