//////Define thoughtfulPrompts array to hold random thought prompts to the first two user prompts

const userColours = {
    red: '',
    green: '',
    blue: ''
}

//define object 'colour' to hold values for red, green, and blue as they are passed in
//write a function addColour I can use in callbacks to push the selected value of 

// define fortune object with fortunes assigned to each possible color value
////////create multiple fortunes for each colour key (a object full of objects?)

$(function() {

    //Get each input (radio in this case) on the page, and loop through each one
    $('body').find('input').each(function(i, el) {
        //Define a random 1 or 0 within the function
        let randomVal = Math.round(Math.random());
        //Set each input with the random value
        $('input').val(randomVal);
        console.log(el);
    });

    //////Assign random string from thoughtfulPrompts array to question1 & question2

    //write function to listen for the user to select one of the three options for question1. Call the addColour function to pass the value into the red: part of the object

    $('.question1').on('checked')

    //write function to listen for the user to select one of the three options for question2. Call the addColour function to pass the value into the green: part of the object

    //write function to listen for the user to select one of the three options for question3. Call the addColour function to pass the value into the blue: part of the object

    //write a function to turn the 'color' object into a string userColor containing only the keys with a value of 1 (or true?)

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