/*
document.getElementById("btn").onclick= function click() {
    var newsD = document.getElementById('news');
    var chartsD = document.getElementById('charts');
    var news = document.getElementById('newsTab');
    var charts = document.getElementById('chartsTab');
    console.log(news.className);
    console.log(charts.className);
    if (newsD.style.display=='none'){
        newsD.style.display='block';
        charts.className = charts.className.replace(" active","");
        console.log(charts.className);
        chartsD.style.display='none';
        news.className+= " active";
    }else{
        newsD.style.display='none';
        news.className = news.className.replace(" active","");
        chartsD.style.display='block';
        charts.className+= " active";
        console.log(charts.className);
    }
}

var tabs = document.getElementsByClassName("nav-link");
for (var i=0;i<tabs.length;i++){
    tabs[i].onclick = pickTab(tabs[i].event,tabs[i].getAttribute('id').replace("Tab",""))
}*/

function pickTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("nav-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}