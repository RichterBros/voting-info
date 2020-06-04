$(document).ready(function() {
  $("form#age-info").submit(function(event){
    event.preventDefault();
    const age =  parseInt($("#age").val());

    if(age < 16) {
    $("#minor").show();
    }
    else if(age >= 16 || age < 18) {
    $("#prereg").show();
    }
    else if(age >= 18) {
    $("#adult").show();
    } 
  });
});


