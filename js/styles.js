$(document).ready(function() {
  $("form#age-info").submit(function(event){
    event.preventDefault();
    const age =  parseInt($("#age").val());
    
    if(age < 16) {
    $("#minor").show();
    $("#prereg").hide();
    $("#adult").hide();
    }
    else if(age >= 16 && age < 18) {
    $("#prereg").show();
    $("#minor").hide();
    $("#adult").hide();
    }
    else {
    $("#adult").show();
    $("#prereg").hide();
    $("#minor").hide();
    } 
    });
});


