function sendEmail(){

    var first_name = $("#contact_form_first_name").val();
    var last_name = $("#contact_form_last_name").val();
    var email = $('#contact_form_email').val();
    var phone = $('#contact_form_number').val();
    var option = $('#contact_form_input_option').val();
    var reason = $('#ReasonForContactTextArea').val();
    alert(first_name + " - " + last_name  + " - " + email  + " - " + phone
        + " - " + option + " - " + reason);

    // $.ajax({
    //     url: "https://formspree.io/crs_galindo213@yahoo.com",
    //     method: "POST",
    //     data: {message: "hello!"},
    //     dataType: "json"
    // });
    //
    // $.ajax({
    //     url: "https://formspree.io/" + email,
    //     method: "POST",
    //     data: {message: "hello!"},
    //     dataType: "json"
    // });

    var promise = $.getJSON("../cgi/SendEmail.php");
    alert("Here")
    promise.done(function(data) {
        console.log(data);
        // this will return back "text that needs to be in javascript"
    })
};