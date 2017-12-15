
function ImageClicked( ) {

    if(document.getElementById("SummaryContentCol").style.display == "none"){
        document.getElementById("SummaryContentCol").style.display = ""
        document.getElementById("ContentColumn").style.display = "none"

    }
    else{
        document.getElementById("SummaryContentCol").style.display = "none"
        document.getElementById("ContentColumn").style.display = ""
    }

}