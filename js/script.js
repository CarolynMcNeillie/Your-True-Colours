const colours = {}

// CONSTANTS
colours.userColours = { //holds inputs passed in from user
    red: '',
    green: '',
    blue: ''
}
const userAuraArray = []
let userAura;
let thisPrompt = '.firstPrompt';
let thisSelection = '.firstSelection';

//////Define thoughtfulPrompts array to hold random thought prompts to the first two user prompts
//////Assign random string from thoughtfulPrompts array to the three prompts

colours.colourMeaning = { //holds values for fortune at end
    red: `<p>Red is so rad</p>`,
    orange: `<p>Orange you glad I didn't say banana?`,
    green: `Green with envy.`,
    blue: `Don't feel blue.`,
    turquoise: `So pretty.`,
    purple: `Purple people eater.`,
    white: `Like Dove soap.`,
}

////////create multiple fortunes for each colour key (a object full of objects?)

colours.assignRandomValues = function() { //assigns value of 1 or 0 to each select input on page
    $('body').find('input[type="radio"]').each(function(i, el) {
        //Define a random 1 or 0 within the function
        let randomVal = Math.round(Math.random());
        // //Set each input with the random value
        $(el).val(randomVal);
        //reset the toggle
        this.checked = false;
    });
}

colours.start = function() {
    //When the user clicks "Start" show the first prompt 
    $('#start').on('click', function() {
        $('.title').removeClass('current');
        $('.firstPrompt').addClass('current');
    });
}

colours.clickNext = function() {
    $('.next').on('click', function() {
        $(thisPrompt).removeClass('current');
        $(thisSelection).addClass('current');

    });
}

colours.collectUserInputRed = function() {
    $('.selection1 input').on('change', function(e) { //when a toggle is selected
        e.preventDefault(); //stops the page reloading
        colours.userColours.red = $(this).val(); //sets the value of the colour
        let thisID = ((this).id); //gets the id of the selected radio input
        $(`label[for=${thisID}] span`).toggleClass('fa-circle-o fa-circle'); //changes the toggle icon
        //I need to work out how to tie this to the selected radio though!
        thisPrompt = '.secondPrompt';
        thisSelection = '.secondSelection';
        $('.firstSelection').removeClass('current');
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
        thisPrompt = '.thirdPrompt';
        thisSelection = '.thirdSelection';
        $('.secondSelection').removeClass('current');
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
        $('.thirdSelection').removeClass('current');
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

        if (userAuraArray.length == 0) { //if the array is empty
            userAura = "white";
        } else if (userAuraArray.length === 1) { //if there is only one colour in the array
            userAura = userAuraArray[0];
        } else if (userAuraArray.length === 3) { //if the array is full
            userAura = "white"; //otherwise, blend!
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

        //pull in the copy associated with the colour in question
        $('.userAura').html(`<h1>${userAura}</h1><p>${colours.colourMeaning[userAura]}</p>`);
    });
}


colours.init = function() {
    colours.assignRandomValues();
    colours.start();
    colours.clickNext();
    colours.collectUserInputRed();
    colours.collectUserInputGreen();
    colours.collectUserInputBlue();
    colours.clickFinish();
}


$(function() {

    colours.init();







    // $('span').on('click', function() {
    //     $('.firstPrompt').removeClass('current');
    //     $('.firstSelection').addClass('current');

    // });



    //when the user selects for selection 1, pass the value of the selection into "red" on the colors.userColours object

    // $('input#finish').on('click', function() {

    //     for (let colour in colors.userColours) {

    //         if (colours.userColours[colour] == 1) {
    //             userAuraArray.push(colour);
    //         }
    //     }



    // THIS ONE WORKS BUT DOESN'T ATTACH TO CHECKED
    // $('label.thisID').on('click', function() {
    //     console.log('Carolyn, you did a thing!');
    //     console.log(this);
    //     let checkBox = $(this).find('.fa');
    //     checkBox.toggleClass('fa-circle fa-asterisk')
    // });

    //when the user selects for question 2, pass the value of the selection into "green" on the colours.userColours object



    //when the user selects for question 3, pass the value of the selection into "blue" on the colours.userColours object

    // $('.selection3 input').on('change', function(e) {
    //     e.preventDefault();
    //     colours.userColours.blue = $(this).val();
    //     let thisID = ((this).id); //gets the id of the selected radio input
    //     $(`label[for=${thisID}] span`).toggleClass('fa-circle-o fa-circle');
    //     //I need to work out how to tie this to the selected radio though!
    //     console.log($(this).val());
    // });

    //When the user clicks a button make array UserAuraArray from colours.userColours keys with a value of 1










    // if the userColor = red || green || blue, done
    // if: red & green & blue = white
    //if red & green = yellow
    //if red & blue = purple
    //if green & blue = turquoise

    // print color to the screen
    // change background colour to gradient corresponding to the aura colour
    // print corrosponding fortune to screen

    //////pull a random corrosponding forunte and print to the screen

    // allow the user to share on twitter


});