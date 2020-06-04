$(document).ready(function() {
  $("#age-btn").submit(function(event){
    event.preventDefault();
    const age = parseInt($("#age").val());
  });
votingAge();

});


function votingAge() {

if(age < 16) {
  $("#minor").show();
}
else if(age >= 16 || < 18) {
  $("#prereg").show();
}
else(age >= 18) {
  $("#adult").show();
}

};