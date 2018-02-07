//////Define thoughtfulPrompts array to hold random thought prompts to the first two user prompts

//This constant will hold values for red, green, and blue when they are passed in by the user
const userColours = {
    red: '',
    green: '',
    blue: ''
}

// define fortune object with fortunes assigned to each possible color value
////////create multiple fortunes for each colour key (a object full of objects?)


$(function() {

    //Get each input (radio in this case) on the page, and loop through each one
    $('body').find('input[type="radio"]').each(function(i, el) {
        //Define a random 1 or 0 within the function
        let randomVal = Math.round(Math.random());
        // //Set each input with the random value
        $(el).val(randomVal);
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

    //When the user clicks a button make array UserAuraArray from userColours keys with a value of 1

    const userAuraArray = []
    let userAura;

    $('input[type="submit"]').on('click', function() {

        for (let colour in userColours) {

            if (userColours[colour] == 1) {
                userAuraArray.push(colour);
            }
        }

        //Determine the final shade and store it in userAura

        if (userAuraArray.length === 0) {
            const userAura = "white";
            console.log(userAura);
        } else if (userAuraArray.length === 1) {
            userAura = userAuraArray[0];
            console.log(userAura);
        } else if (userAuraArray.length === 3) {
            userAura = "white";
            console.log(userAura);
        } else if (userAuraArray.indexOf("red") > -1 && userAuraArray.indexOf("green") > -1) {
            userAura = "orange";
            console.log(userAura);
        } else if (userAuraArray.indexOf("red") > -1 && userAuraArray.indexOf("blue") > -1) {
            userAura = "purple";
            console.log(userAura);
        } else if (userAuraArray.indexOf("green") > -1 && userAuraArray.indexOf("blue") > -1) {
            userAura = "turquoise";
            console.log(userAura);
        } else {
            console.log('You\'re going to have to work this out')
        }

        $('.userAura').html(`<h1>${userAura}</h1>`);
    });






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