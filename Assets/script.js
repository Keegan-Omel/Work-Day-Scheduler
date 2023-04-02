$(document).ready(function() {
  var currentDay = dayjs().format("MMM DD, YYYY")
  $("#currentDay").text(currentDay)

  $('.saveBtn').on('click', function(event) {
    event.preventDefault();
    var timeBlockId = $(this).parent().attr('id');

    var userInput = $(this).siblings('textarea').val();

    localStorage.setItem(timeBlockId, userInput);

  });

  $('.time-block').each(function() {
    var currentHour = dayjs().hour();
    var timeBlockHour = parseInt($(this).attr('id'));

    if (timeBlockHour < currentHour) {
      $(this).addClass('past');
    } else if (timeBlockHour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
    
    var timeBlockId = $(this).attr('id');
    var savedUserInput = localStorage.getItem(timeBlockId);

    if (savedUserInput) {
      $(this).find('textarea').val(savedUserInput);
    }

  });

});