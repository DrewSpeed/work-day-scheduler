var today = moment().format("dddd, MMMM Do");


// select currentDay and replace with today's date
$("#currentDay").text($(this).text().replace("", today));

//loop to create separate rows for each hour
for (var i=8; i<=17; i++) {
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

    // add form rows for columns to sit in
    formRow = $('<form class="row">');
    $(".container").append(formRow);

    // add Time of day column to each row
    hourField = $("<div class='col-1 hour'><p class='time-block'>" + displayHour + "</p></div>");
   

    //add input textarea to each row
    inputField = $("<div class='col-10 description'><textarea id='input" + i + "'> </textarea></div>");
    
   saveField = $("<button class='col-1 saveBtn' id='save" + i + "'><i class='far fa-save fa-lg'></i></button>");

      $(formRow).append(hourField, inputField, saveField);
     

    }