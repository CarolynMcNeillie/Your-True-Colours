//////Define thoughtfulPrompts array to hold random thought prompts to the first two user prompts

//This constant will hold values for red, green, and blue when they are passed in by the user
const userColours = {
    red: '',
    green: '',
    blue: ''
}

// define fortune object with fortunes assigned to each possible color value
////////create multiple fortunes for each colour key (a object full of objects?)

const colourMeaning = {
    red: `<p>Red is so rad</p>`,
    orange: `<p>Orange you glad I didn't say banana?`,
    green: `Green with envy.`,
    blue: `Don't feel blue.`,
    turquoise: `So pretty.`,
    purple: `Purple people eater.`,
    white: `Like Dove soap.`,
}

$(function() {

    //Get each input (radio in this case) on the page, and loop through each one
    $('body').find('input[type="radio"]').each(function(i, el) {
        //Define a random 1 or 0 within the function
        let randomVal = Math.round(Math.random());
        // //Set each input with the random value
        $(el).val(randomVal);
        this.checked = false;
    });

    //////Assign random string from thoughtfulPrompts array to the three prompts

    //When the user clicks "Start" show the first prompt 
    $('#start').on('click', function() {
        $('.title').removeClass('current');
        $('.firstPrompt').addClass('current');

        $('.firstPrompt span').fadeIn();

    });

    $('span').on('click', function() {
        $('.firstPrompt').removeClass('current');
        $('.firstSelection').addClass('current');

    });



    //when the user selects for selection 1, pass the value of the selection into "red" on the userColours object

    $('input#finish').on('click', function() {

        for (let colour in userColours) {

            if (userColours[colour] == 1) {
                userAuraArray.push(colour);
            }
        }



        let thisID;

        $('.selection1 input').on('change', function(e) {
            e.preventDefault();
            userColours.red = $(this).val();
            let thisID = ((this).id); //gets the id of the selected radio input
            $(`label[for=${thisID}] span`).toggleClass('fa-circle-o fa-circle');
            //I need to work out how to tie this to the selected radio though!
        });

        // THIS ONE WORKS BUT DOESN'T ATTACH TO CHECKED
        // $('label.thisID').on('click', function() {
        //     console.log('Carolyn, you did a thing!');
        //     console.log(this);
        //     let checkBox = $(this).find('.fa');
        //     checkBox.toggleClass('fa-circle fa-asterisk')
        // });

        //when the user selects for question 2, pass the value of the selection into "green" on the userColours object

        $('.selection2 input').on('change', function(e) {
            e.preventDefault();
            userColours.green = $(this).val();
            let thisID = ((this).id); //gets the id of the selected radio input
            $(`label[for=${thisID}] span`).toggleClass('fa-circle-o fa-circle');
            //I need to work out how to tie this to the selected radio though!
        });

        //when the user selects for question 3, pass the value of the selection into "blue" on the userColours object

        $('.selection3 input').on('change', function(e) {
            e.preventDefault();
            userColours.blue = $(this).val();
            let thisID = ((this).id); //gets the id of the selected radio input
            $(`label[for=${thisID}] span`).toggleClass('fa-circle-o fa-circle');
            //I need to work out how to tie this to the selected radio though!
        });

        //When the user clicks a button make array UserAuraArray from userColours keys with a value of 1

        const userAuraArray = []
        let userAura;

        $('input#finish').on('click', function() {

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

            //change the color of the page 
            $("body").addClass(`${userAura}`);

            $('.userAura').html(`<h1>${userAura}</h1><p>${colourMeaning[userAura]}</p><p>Share on twitter</p><p>Do it again</p>`);
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
});