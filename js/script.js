// CONSTANTS
colours.userColours = { //holds inputs passed in from user
    red: '',
    green: '',
    blue: ''
}
const userAuraArray = []
let userAura;


/////////////////////////////////////////////////
// this sets variables for the arrows I got rid of
// let thisPrompt = '.firstPrompt';
// let thisSelection = '.firstSelection';
/////////////////////////////////////////////////


colours.assignPrompts = function() {
    for (let i = 1; i < 4; i = i + 1) {
        let randomVal = Math.floor(Math.random() * colours.prompts.length);
        $((`.prompts${i}`)).text(colours.prompts[randomVal]);
        colours.prompts.splice([randomVal], 1);

    }
}

colours.assignRandomValues = function() { //assigns value of 1 or 0 to each select input on page
    $('body').find('input[type="radio"]').each(function(i, el) {
        //Define a random 1 or 0 within the function
        let randomVal = Math.floor(Math.random() * 2);
        console.log(randomVal);
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

/////////////////////////////////////////////////
//This controls the arrows I got rid of
// colours.clickNext = function() {
//     $('.next').on('click', function() {
//         $(thisPrompt).removeClass('current');
//         $(thisSelection).addClass('current');

//     });
// }
/////////////////////////////////////////////////

colours.collectUserInputRed = function() {
    $('.selection1 input').on('change', function(e) { //when a toggle is selected
        e.preventDefault(); //stops the page reloading
        colours.userColours.red = $(this).val(); //sets the value of the colour
        let thisID = ((this).id); //gets the id of the selected radio input
        $(`label[for=${thisID}] span`).toggleClass('fa-circle-o fa-circle'); //changes the toggle icon
        console.log($(this).val());
        //I need to work out how to tie this to the selected radio though!
        // thisPrompt = '.secondPrompt'; // sets the stage for the arrows I got rid off
        // thisSelection = '.secondSelection'; // sets the stage for the arrows I got rid off
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
        //if: red & green & blue = white
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

        //pull in the copy associated with the colour in question
        $('.userAura').html(`<h1>${userAura}</h1><p>${colours.colourMeaning[userAura]}</p>`);
    });
}

colours.init = function() {
    colours.assignRandomValues();
    colours.start();
    colours.assignPrompts();
    colours.collectUserInputRed();
    colours.collectUserInputGreen();
    colours.collectUserInputBlue();
    colours.clickFinish();
}



$(function() {

    colours.init();



    // print color to the screen
    // change background colour to gradient corresponding to the aura colour
    // print corrosponding fortune to screen

    //////pull a random corrosponding forunte and print to the screen

    // allow the user to share on twitter


});