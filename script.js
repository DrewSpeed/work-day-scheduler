var today = moment().format("dddd, MMMM Do");

// select currentDay and replace with today variable
$("#currentDay").text($(this).text().replace("", today));



