$(document).ready(function(){
  // Hide the overlay by default
$('#overmode').css("visibility", "visible");
$(".modal-overlay").hide();
$('.subjContent').hide(); // hides all with class 'subjContent'


// Hide the overlay using the close button
 $(".modal-overlay, .icon-close").click(function () {
 $(".modal-overlay").hide(1000);
 $('.subjContent').hide(); // hides all with class 'subjContent'
 });

// after clicking a button take the ID of that button + 'Frame' and add it to var subjectselected
// show the overlay and the element with id subjectselected


$(".subjectBtn").click(function() {
  var buttonIdPlz = this.id;
  var subjectselected = buttonIdPlz + "Frame";
  $(".modal-overlay").show(2000);
  $("#" + subjectselected).show(1000);
});

});

