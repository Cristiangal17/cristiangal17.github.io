$(document).ready(function(){
    $('#contact_me_submit').on('click', function(e){

        e.preventDefault();
        var first_name = $("#contact_form_first_name").val();
        var last_name = $("#contact_form_last_name").val();
        var email = $('#contact_form_email').val();
        var phone = $('#contact_form_number').val();
        var option = $('#contact_form_input_option').val();
        var reason = $('#ReasonForContactTextArea').val();
        alert(first_name + " - " + last_name  + " - " + email  + " - " + phone
            + " - " + option + " - " + reason);


    });
});