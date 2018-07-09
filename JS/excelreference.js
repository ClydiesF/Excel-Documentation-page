

// function execute when sidebar button is clicked
function openTopic(evt,topic) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("content");
    for ( i = 0; i<tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    buttons = document.getElementsByTagName("button");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace("active", "");
    }

    document.getElementById(topic).style.display = "block";
    evt.currentTarget.className = "active";

}