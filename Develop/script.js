//DEPENDENCIES

var today = moment();
$("#la").text(today.format("MM Do, YYYY"))
var rightnow = moment("6/28/21").format('MMMM Do YYYY');
$("#time").text(rightnow)
// STARTING DATA
//list of appointments
var appointments = [
    {
        time: 8,
        topic: "Dynamically Rendering with jQuery",
        duration: "1 hour" //make your times go to different colors...

    }
    {
        time: 9,
        topic: "Dynamically Rendering with jQuery",
        duration: "1 hour"

    }
    {
        time: 10,
        topic: "Dynamically Rendering with jQuery",
        duration: "1 hour"

    }
    {
        time: 11,
        topic: "Dynamically Rendering with jQuery",
        duration: "1 hour"

    }
    {
        time: 12,
        topic: "Dynamically Rendering with jQuery",
        duration: "1 hour"

    }
    {
        time: 13,
        topic: "Dynamically Rendering with jQuery",
        duration: "1 hour"

    }
    {
        time: 14,
        topic: "Dynamically Rendering with jQuery",
        duration: "1 hour"

    }
    {
        time: 15,
        topic: "Dynamically Rendering with jQuery",
        duration: "1 hour"

    }
    {
        time: 16,
        topic: "Dynamically Rendering with jQuery",
        duration: "1 hour"

    }
    {
        time: 17,
        topic: "Dynamically Rendering with jQuery",
        duration: "1 hour"

    }
]
//FUNCTIONS
//render appointments... also gonna need a event.preventdefault
function renderAppointments(){
    console.log("rendering appointments")
    //go thru list of appointments

}
var appointmentCard = $('<div class="cardappointment">');
var cardbody = $('<div class="cardbody">');

// USER INTERACTIONS

//INTIALIZATIONS
//render the appointment

renderAppointments();

//if moment() > id.value
//then set class to past

