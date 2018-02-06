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
        // //Set each input with the random value
        $(el).val(randomVal);
        // console.log(el);
        console.log(i, el);
    });

    //////Assign random string from thoughtfulPrompts array to question1 & question2

    //when the user selects for question 1, pass the value of the selection into "red" on the userColours object

    $('.question1 input').on('change', function(e) {
        e.preventDefault();
        console.log(`The content of "red" is ${userColours.red}`);
        userColours.red = $(this).val();
        console.log(`The content of "red" is ${userColours.red}`);
    });

    //when the user selects for question 2, pass the value of the selection into "green" on the userColours object

    $('.question2 input').on('change', function(e) {
        e.preventDefault();
        console.log(`The content of "green" is ${userColours.green}`);
        userColours.green = $(this).val();
        console.log(`The content of "green" is ${userColours.green}`);
    });

    //when the user selects for question 3, pass the value of the selection into "blue" on the userColours object

    $('.question3 input').on('change', function(e) {
        e.preventDefault();
        console.log(`The content of "blue" is ${userColours.blue}`);
        userColours.blue = $(this).val();
        console.log(`The content of "blue" is ${userColours.blue}`);
    });

    //write a function to turn the 'color' object into a string userColor containing only the keys with a value of 1 (or true?)

    let userHue = userColours.tostring();
    console.log(userHue);

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