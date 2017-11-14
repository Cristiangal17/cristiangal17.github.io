

function SendMyselfEmail( first_name, last_name, phone, email, reason, option){
    var myEmail = "crs_galindo213@yahoo.com";
    var theirEmail = myEmail;
    var subject = "";
    var body = "";
    var token = "b1d09dfd-0838-49dd-8a9a-5b76d4739b16";

    if(option == 0){
        subject = "You got a new Request to hang out!"
        body = "Hey Cristian\
        You got a hang out request from " + first_name + " " +last_name + ".\
        Contact them at " + phone + " or email them at " + email + ". Here is their reason\
        for wanting to hang out: "+ reason  + ".I hope you have lots of fun!\
        Don't forget to set up a date!"

    }
    if(option == 1){
        subject = "Someone is interested in your resume!"
        body = "Hey Cristian\
        You got new resume request from " + first_name + " " +last_name + ".\
        Contact them at " + phone + " or email them at " + email + ". Here is their reason\
        for wanting the resume: " + reason +  "I hope you get the job!\
        Don't forget to send the most up to date one"
    }
    if(option == 2){
        subject = "Someone is interested in your projects!"
        body = "Hey Cristian\
        You got a project information request from " + first_name + " " +last_name + ".\
        Contact them at " + phone + " or email them at " + email + ". Here is their reason\ \
        for wanting the project information: " + reason +"Goo get them\
        Don't forget to set up a date!"
    }
    if(option == 3){
        subject = "Someone is interested in talking to you"
        body = "Hey Cristian\
        You got a request to talk from " + first_name + " " +last_name + ".\
        Contact them at " + phone + " or email them at " + email + ". \
        Reason: "+ reason+ "Don't forget to set up a date!"

    }

    Email.send(myEmail,
        theirEmail,
        subject,
        body,
        {token: token});



}


function SendUserEmail(first_name, email, option){
var myEmail = "crs_galindo213@yahoo.com";
var theirEmail = email.trim();
var subject = "";
var body = "";
var token = "b1d09dfd-0838-49dd-8a9a-5b76d4739b16";

if(option == 0){
    subject = "Thank you for your interest in hanging out!";
    body = " Hello " + first_name + ", \
    Thank you for reaching out to me. I will get in contact with you to hang out as soon as I can. ";

}
if(option == 1){
    subject = "Thank you for your interest in my resume!";
    body = " Hello " + first_name + ", \
    Thank you for reaching out to me. I will get in contact with you to send you my resume as soon as I can. "

}
if(option == 2){
    subject = "Thank you for your interest in my projects!";
    body = " Hello " + first_name + ", \
    Thank you for reaching out to me. I will get in contact with you to talk about my projects as soon as I can. "

}
if(option == 3){
    subject = "Thank you for your interest in me!";
    body = " Hello " + first_name + ", \
    Thank you for reaching out to me. I will get in contact with you as soon as I can. "
}

Email.send(myEmail,
    theirEmail,
    subject,
    body,
    {token: token});


}


function sendEmail(){

var first_name = $("#contact_form_first_name").val();
var last_name = $("#contact_form_last_name").val();
var email = $('#contact_form_email').val();
var phone = $('#contact_form_number').val();
var option = $('#contact_form_input_option').val();
var reason = $('#ReasonForContactTextArea').val();
//        alert(first_name + " - " + last_name  + " - " + email  + " - " + phone
//            + " - " + option + " - " + reason);

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

SendMyselfEmail( first_name, last_name, phone, email, reason,  parseInt(option.trim()));
SendUserEmail(first_name, email, parseInt(option.trim()));

alert("An email was sent to Cristian! Thank you for your interest.");
};
