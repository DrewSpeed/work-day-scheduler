var today = moment().format("dddd, MMMM Do");


// select currentDay and replace with today's date
$("#currentDay").text($(this).text().replace("", today));

//loop to create separate rows for each hour
for (var i=8; i<=17; i++) {

    // add form rows for columns to sit in
    formRow = $('<form class="row" id="' + i + '">');
    endForm = $('</form>');
 

    $(".container").append(formRow);
    

    //create display hour with added meridian
    meridian = ""
    if (i < 12) {
        meridian=" AM"
    } else {
        meridian =" PM"
    }

    if (i <= 12) {
        hour=i;
    } else {
        hour = i-12;
    }

    displayHour = hour + meridian

    // add field for displayHour to sit
    hourField = $("<div class='col-1 hour'><p class='time-block'>" + displayHour + "</p></div>");
   


    //add input textarea to each row
    inputField = $("<div class='col-10'><textarea class='userInput' name='userInput'> </textarea></div>");


    currentTime = moment().format("HH");
    smallTime = moment().format("hh");

    //add save field
   saveField = $("<button class='col-1 saveBtn' id='save" + i + "'><i class='far fa-save fa-lg'></i></button>");



   // append above additions to the page
      $(formRow).append(hourField, inputField, saveField);



// colorize each row per time of day

if (i < currentTime) {
    $("textarea").last().addClass("past");
} else if (i == currentTime) {
    $("textarea").last().addClass("present");
} else {
    $("textarea").last().addClass("future");
}

    }


