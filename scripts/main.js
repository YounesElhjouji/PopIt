
var canvas = document.getElementById("canvas");
var stats = document.getElementById("stats");
var news = document.getElementById("news");
var nList = document.getElementById("notifList");
var ctx = canvas.getContext("2d");

//Parameters
var radius = 3.5;
var speed = 0.8;
var time = 0;
var yearLen = 80;
var startAge = 18;
var stopAge = 60;
var oldAge = 60;
var pubeAge = 15;
var peakAge = 40;
var stopTime = 0.6*yearLen;
var stopRecover = 0.6*yearLen;
var isPause = 0;
var isReset = 0;
var isNews = 0;
var isChart = 1;
var initialPop = 60;
var lifeExpect = 77;
var lifeVariance = 20;

//Statistics
var year  = 16;
var births= 0 ;
var deaths= 0 ;
var lives = 0;
var avgLife = 0;
var yearsInGraph = 30;
var popTrack = new Array(yearsInGraph);

for (var i=0;i<yearsInGraph;i++){
    popTrack[i]=initialPop;
}

// Colors
var unborn="lightgrey";
var smallBoy="#0099ff";
var boy="#0066ff";
var oldMan="#0052cc";
var smallGirl="#ff60c5";
var girl="#ff0066";
var oldLady="#e6005c";

//Define relationship
function Relationship(male, female){
	this.male = male;
	this.female = female;
	this.maxDuration = Math.min(male.maxRelDur,female.maxRelDur);
}


//Population
var circles = new Array ();

//Get names
var maleNames = ["Abdulkarim","Adam","Younes","Aharon","Alasdair","Aldrich","Alexander","Alfredo","Allie","Alvin","Amos","Andreas","Angel","Antin","Anurag","Ari","Arnie","Arturo","Aub","Austen","Avrom","Bancroft","Barnebas","Barrie","Bartholomeus","Bary","Beau","Benjamin","Bentley","Bernardo","Bill","Blake","Boris","Brandy","Briggs","Bronson","Bryon","Burt","Caldwell","Carlie","Carter","Cesar","Chancey","Chas","Chev","Christof","Churchill","Claudio","Clemens","Clinten","Cole","Conroy","Cornelius","Crawford","Cyrille","Damon","Darby","Darren","David","Dawson","Demetrius","Derrek","Dewey","Dimitri","Dmitri","Donn","Douglass","Duffie","Durward","Earle","Edgardo","Efram","Eliot","Elnar","Emanuel","Emmit","Enrico","Erhard","Ernie","Ethelbert","Everard","Fairfax","Ferdinand","Filmore","Flin","Fonzie","Fox","Franky","Frederick","Friedrich","Gail","Garey","Garth","Gaston","Geof","Gerald","Gerrard","Gibb","Gilberto","Giovanne","Goddard","Goose","Grant","Griffin","Gunther","Guy","Hale","Hamilton","Hank","Harland","Hart","Haskel","Haywood","Hendrick","Herby","Herrick","Hewet","Hillard","Hobart","Horst","Humphrey","Hy","Iggy","Immanuel","Irvine","Isidore","Jack","Jameson","Jasper","Jean-Pierre","Jeffrey","Jereme","Jeromy","Jessee","Jo","Joe","Johnathon","Jordan","Joshua","Jude","Julius","Kane","Keil","Kendall","Kermit","Kingsley","Konrad","Kurt","Langston","Lawerence","Lazlo","Lemmy","Leonerd","Lev","Lincoln","Llewellyn","Lorne","Lucian","Luke","Maddie","Malcolm","Marchall","Mark","Marsh","Martyn","Matias","Mattias","Max","Mayor","Mendie","Merrill","Michail","Micky","Milo","Mohamed","Montgomery","Morry","Moshe","Murray","Nate","Nealson","Nero","Newton","Nicky","Niles","Nolan","Norton","Odin","Ollie","Orren","Oscar","Otis","Padraig","Parrnell","Paten","Patty","Pennie","Pete","Phillipe","Piggy","Powell","Prince","Quigman","Quintus","Rainer","Ramsey","Ransell","Raymund","Reed","Reginauld","Renard","Reynard","Rich","Rickie","Rob","Rockwell","Rodge","Roger","Rollo","Ronny","Royce","Rudolf","Russel","Sal","Salvidor","Sanders","Sascha","Sawyere","Schroeder","Sebastiano","Seth","Shaughn","Sheffy","Shepherd","Shimon","Siddhartha","Silvain","Simone","Skippie","Sloane","Son","Spiros","Stanford","Stefan","Steven","Stinky","Sutton","Tabby","Taite","Tann","Teador","Temple","Terrell","Thadeus","Thedric","Thom","Thorsten","Timmy","Tobias","Tomas","Torin","Townie","Tray","Trevor","Tudor","Tymothy","Uli","Urban","Val","Vassili","Verney","Vincent","Vito","Wainwright","Waldon","Walt","Warner","Waylen","Welbie","Wesley","Whit","Wilburn","Willard","Wilmar","Winifield","Wittie","Woodie","Wyatt","Xever","Yancy","Zach","Zak","Zechariah","Zorro"];
var femaleNames = ["Abra","Adelaide","Adi","Adrian","Aeriell","Agnella","Aila","Aimee","Alana","Aleda","Alethea","Alfie","Alina","Alla","Allissa","Almeta","Alvina","Alyss","Amalle","Ambrosia","Amity","Anallese","Andrea","Anestassia","Angelica","Ania","Ann-Marie","Annabelle","Annamaria","Annetta","Anny","Antonia","Arabel","Ardella","Ardys","Arielle","Arlie","Ashlee","Astrix","Aubrey","Audrye","Aurelia","Austina","Avril","Bamby","Barbi","Bea","Beckie","Belita","Benedetta","Beret","Bernete","Berry","Berty","Bethina","Bettina","Bevvy","Binnie","Blakeley","Blithe","Bobby","Brana","Breanne","Bria","Brietta","Brita","Britte","Bryna","Cacilia","Callie","Camila","Candice","Caralie","Caril","Carlee","Carline","Carma","Carmine","Carolee","Caron","Caryn","Cassaundra","Catha","Cathleen","Catlaina","Ceciley","Celestina","Celisse","Charil","Charlena","Charmian","Chelsy","Cherilynn","Cheryl","Chriss","Christan","Christina","Cicely","Cindra","Claresta","Clarine","Claudia","Clemmie","Clotilda","Colleen","Conney","Constantina","Coralie","Corella","Corina","Cornelle","Corrinne","Crissie","Cristine","Cybil","Dacie","Daisey","Damara","Danica","Danita","Daphna","Darcy","Darlene","Dasie","Dawn","Debbi","Debra","Deerdre","Delia","Deloris","Denice","Desaree","Devinne","Dian","Didi","Dionis","Doll","Dominique","Donnamarie","Dorcas","Dorey","Dorit","Dorree","Doti","Dulcia","Dyane","Ealasaid","Eddy","Editha","Eilis","Elbertina","Eleonora","Elie","Elita","Ellene","Elnora","Elsi","Elwira","Emalia","Emili","Emmaline","Emogene","Enya","Erin","Erna","Esmerelda","Ester","Ethyl","Eulalie","Evania","Evita","Faina","Fanni","Farrand","Fay","Felecia","Fenelia","Fiann","Fina","Florance","Florice","Flossi","Francesca","Franky","Fredelia","Fulvia","Gabriella","Galina","Gayleen","Genia","Georgeanne","Georgie","Gerianna","Gert","Giana","Gillan","Ginni","Gisella","Glenine","Glory","Goldie","Grayce","Gretna","Guillema","Gussy","Gwenette","Gwynne","Halimeda","Hannie","Harmony","Hattie","Heddie","Helaine","Heloise","Hephzibah","Hestia","Hildegaard","Holly-Anne","Hyacinth","Idalia","Ileane","Ilyssa","Inessa","Ingunna","Irina","Isador","Issy","Jacinda","Jackqueline","Jacquetta","Jaleh","Jane","Janessa","Janifer","Jany","Jaymee","Jeanine","Jemimah","Jeniece","Jennica","Jermaine","Jessalyn","Jewel","Jillian","Joan","Jobie","Jodi","Joellyn","Jolee","Jonell","Jorie","Josephine","Joyan","Judie","Juliann","Juline","Justine","Kaitlin","Kalina","Kandy","Karen","Kariotta","Karlotta","Karoline","Kasey","Katalin","Katharyn","Kathlin","Katinka","Katy","Kaylyn","Kellen","Kelsi","Kerrie","Kettie","Kikelia","Kimmie","Kirby","Kissie","Konstance","Koressa","Krista","Kristine","Kylen","Lacie","Lanette","Lari","Latrena","Laurella","Lauryn","Lea","Lee","Leia","Lelia","Leola","Leontyne","Lethia","Lia","Libby","Liliane","Lilyan","Lindy","Linzy","Lisette","Liz","Lola","Lonnie","Lorelle","Lorianna","Lorraine","Lottie","Luce","Lucinda","Lula","Lust","Lyndsey","Lynnea","Mabel","Madel","Madelon","Mag","Magna","Maisie","Malissia","Malynda","Marabel","Marcie","Margalo","Marge","Margot","Mariann","Marie-Jeanne","Marijo","Mariquilla","Marja","Marleah","Marna","Marry","Martica","Maryanna","Marylinda","Matilda","Maureen","Maxie","Meagan","Meggy","Melanie","Melisa","Melli","Melody","Meredithe","Merle","Merrilee","Michaela","Michelle","Mildrid","Milzie","Minni","Miranda","Missy","Moina","Monica","Morgen","Muffin","Myrah","Myrtie","Nalani","Nanete","Naoma","Natalie","Neala","Nelia","Nert","Nesta","Nicholle","Nicolina","Nil","Nissie","Noelle","Nonah","Norina","Octavia","Odille","Olivette","Olympie","Ophelie","Orelia","Otha","Pam","Paola","Patti","Paulina","Peg","Penny","Perry","Petunia","Philippine","Phyllis","Pippy","Prissie","Querida","Rae","Raine","Randie","Raquela","Rea","Ree","Reiko","Renel","Rhea","Rhody","Rickie","Rivi","Robbyn","Robinia","Rodie","Ronna","Ros","Rosalinde","Rose","Rosemaria","Rosita","Roxanne","Rozanne","Rubina","Ruthy","Sadella","Sam","Sandra","Saree","Sashenka","Secunda","Seline","Shalna","Shani","Sharai","Sharna","Shawnee","Sheela","Shela","Shelly","Sherri","Shirl","Sianna","Sibyl","Silvana","Sioux","Sonia","Sophie","Stacy","Steffane","Stephi","Stormie","Susan","Sussi","Suzy","Sylvia","Taffy","Tamarra","Tana","Tarra","Tawsha","Tella","Teriann","Teryl","Theadora","Theresina","Tiana","Tiffy","Timmie","Tobe","Tomi","Tootsie","Tracey","Trish","Trudi","Ula","Ursula","Valene","Valida","Vania","Venita","Verina","Vicki","Vilma","Violet","Vittoria","Vivien","Wallis","Wendie","Willabella","Wilmette","Winni","Wynne","Yelena","Yonina","Zara","Zilvia","Zorana","Geeta"];

//Initializing chart

var lbls = new Array(yearsInGraph);
for (j=0;j<yearsInGraph;j++) lbls[j]=j;
var startingData= {
    labels: new Array(yearsInGraph),
        datasets: [{
        data: popTrack,
        label: "Population",
        borderColor: "#3e95cd",
        fill: false
    }]
};
var chart = new Chart(document.getElementById("popChart"), {
    type: 'line',
    data: startingData,
    options: {
        elements: {point:{radius:.4}},
        title: {
            display: true,
            text: 'World Population Over Last 30 Years'
        }
    }
});
chart.options.animation.duration = 1000;
//Buttons functionalities
var pButton = document.getElementById("pauseButton");
var rButton = document.getElementById("resetButton");
//var nButton = document.getElementById("newsButton");
pButton.onclick = function (ev) {
    if(isPause===0){isPause=1; pButton.innerHTML="Resume";}
    else{isPause=0; pButton.innerHTML="Pause";drawBall();} };
rButton.onclick = function (ev) {
    reset(); drawBall(); };


function reset() {
    isReset = 1;
    births=0; deaths=0;
    circles = [];
    generateCircles(initialPop);
    notify("reset",[circles[0],circles[0],circles[0]]);
}

function drawBall() {
    if (time%yearLen===0){
        year++;
        updatePopTrack();
        if(isChart){
            chart.update();
        }
    }
    ctx.clearRect(0, 0, 900, 500);
    statistics();
    time++;
    for (i=0; i < circles.length; i++) {
        draw(circles[i]);
    }
    if (isPause===0 && isReset===0){
        setTimeout(drawBall, 10);
    }else if(isReset===1){
        isReset = 0;
    }
}

function statistics() {
    stats.innerHTML=("Year : "+year);
    stats.innerHTML+=("<br>Pop : "+circles.length);
    stats.innerHTML+=("<br>Births : "+births);
    stats.innerHTML+=("<br>Deaths : "+deaths);
}

function ready(circle1) {
    var crowdFactor = Math.floor((circles.length-initialPop)/7);
    return rand(0,10)>crowdFactor;
}

function draw (circle){
    ageCircle(circle);
    circle.lastBirth++;
    if(circle.mov==="on"){
        circle.lastStop++;
        determineDir(circle);
        move(circle);
        if(circle.color==girl
                &&circle.lastBirth>3*yearLen
                && circle.age>startAge
                && circle.age<stopAge
                && circle.lastStop>stopRecover){
            for (j=0;j<circles.length;j++){
                if (circles[j].mov=="on"
                    && circles[j].lastStop>stopRecover
                        && circles[j].age>startAge
                        && circles[j].age<stopAge
                    && Math.abs(circles[j].x - circle.x)<radius*3
                    && Math.abs(circles[j].y - circle.y)<radius*3
                    && circle.gender!==circles[j].gender)
                {
                    notify("meeting",[circle,circles[j],circle]);
                    circle.mov="off"; circles[j].mov="off";
                    if (ready(circle)){
                        births++;
                        getPregnant(circle,circles[j]);
                        circle.lastBirth=0;
                    }
                }
            }
        }

    }else if (circle.timeStopped>stopTime){

        randomDir(circle);
        circle.mov="on";
        circle.timeStopped=0;
        circle.lastStop=0;
    }else{
        circle.timeStopped++;
    }

    ctx.beginPath();
    ctx.arc(circle.x,circle.y,radius+circle.size,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fillStyle=circle.color;
    ctx.fill();
    /*if(circle.mother!==null && circle.mother.age<circle.mother.deathAge){
        ctx.beginPath();
        ctx.moveTo(circle.x,circle.y);
        ctx.lineTo(circle.mother.x,circle.mother.y);
        ctx.lineWidth = 0.2;
        ctx.stroke();
    }*/
}

function randomName(gender) {
    if(gender==="boy"){
        return maleNames[rand(0,maleNames.length-1)];
    }
    return femaleNames[rand(0,femaleNames.length-1)];
}

function generateCircles(n){
    for (k=0;k<n;k++){
        var x1 = rand(10,890);
        var y1 = rand(10,490);
        var xx1=speed;
        var yy1=speed;
        var coln = Math.floor(Math.random() * 2) + 1;
        var col=smallBoy;
        var gend="boy";
        if(coln===1) {
            gend = "girl";
            col = smallGirl;
        }
        var death = Math.abs(Math.floor(randn_bm()*lifeVariance+lifeExpect));
        var randomAge = rand(15,18);
        var cir = {x:x1,y:y1,xx:xx1,yy:yy1,color:col,mov:"on",lastStop:100,timeStopped:0,
            age:randomAge,deathAge:death,size:0,lastBirth:0,gender:gend,name:randomName(gend),mother:null,father:null,
            isPregnant:0};
        notify("generate",[cir,cir,cir]);
        randomDir(cir);
        circles.push(cir);
    }
}
function getPregnant(mom,dad){
    var xx1=speed;
    var yy1=speed;
    var coln = Math.floor(Math.random() * 2) + 1;
    var col=unborn;
    var gend="boy";
    if(coln===1) {
        gend = "girl";
    }
    var death = Math.abs(Math.floor(randn_bm()*lifeVariance+lifeExpect));
    var baby = {x:mom.x,y:mom.y,xx:xx1,yy:yy1,color:col,mov:"on",lastStop:100,timeStopped:0,
        age:0,deathAge:death,size:0,lastBirth:0,gender:gend,name:randomName(gend),mother:mom,father:dad,
        isPregnant:0};
    mom.isPregnant=1;
    mom.size*=1.4;
    randomDir(baby);
    notify("pregnancy",[mom,dad,baby]);
    circles.push(baby);
}

function ageCircle(circle){
    if(time%yearLen===0){
        circle.age++;
        if ((circle.age>=pubeAge && circle.age<startAge && rand(1,4)===1) || circle.age===18){
            if (circle.gender==="boy")circle.color=boy;
            if (circle.gender==="girl")circle.color=girl;
        }
        if (circle.age<peakAge && !circle.isPregnant) {
            circle.size = circle.age/30;
        }else if (circle.age>=oldAge && rand(3,5)===5 && (circle.color===boy || circle.color===girl)){
            if (circle.color===boy)circle.color=oldMan;
            if (circle.color===girl)circle.color=oldLady;
            circle.size=(oldAge-10)/30;
            circle.xx/=2;
            circle.yy/=2;
        }
    }
    if (circle.age===circle.deathAge){
        deaths++;
        lives+=circle.age;
        notify("death",[circle,circle,circle]);
        circles.splice(circles.indexOf(circle),1);
        circle = null;
    }
}
function randomDir(circle){
    var coin = Math.floor(Math.random() * 2) + 1;
    if(coin==1){
        circle.xx=-circle.xx;
    }
    coin = Math.floor(Math.random() * 2) + 1;
    if(coin==1) {
        circle.yy = -circle.yy;
    }
}
function rand(a,b){
    var r = a + Math.floor(Math.random() * (b-a+1))
    return r;
}

function determineDir(circle) {
    var chance = rand(0,90);
    if (chance==10){
        randomDir(circle);
    }
}
function move(circle) {
    var mom =circle.mother;
    if (circle.age<2 && circle.mom!==null){
        circle.x=circle.mother.x;
        circle.y=circle.mother.y;
    }else if (circle.age==2){
        if (mom.isPregnant){
            mom.isPregnant=0;
            mom.size=mom.age/30;
            circle.color = circle.gender=="boy"? smallBoy:smallGirl;
            notify("birth",[circle.mother,circle.father,circle]);
        }
        circle.x=mom.x-2; circle.y=mom.y-2;
    }
    else{
        var dist = radius+circle.size;
        if (circle.x>=900-dist) circle.xx=-Math.abs(circle.xx); else if (circle.x<=dist) circle.xx=Math.abs(circle.xx);
        if (circle.y>=500-dist) circle.yy=-Math.abs(circle.yy); else if (circle.y<=dist) circle.yy=Math.abs(circle.yy);
        circle.y+=circle.yy;
        circle.x+=circle.xx;
    }
}


generateCircles(initialPop);
drawBall();



function notify(event,persons){
    if (isNews){
        var eventMap = {"generate": persons[0].name+" was generated\n",
            "pregnancy":persons[0].name+" and "+persons[1].name+" are pregnant",
            "birth": persons[0].name+" and "+persons[1].name+" just had a baby "+persons[2].gender+" named "+persons[2].name+"\n",
            "meeting": persons[0].name+" met with "+persons[1].name,
            "death": persons[0].name+" has died at the age of "+persons[0].age,
            "reset": "The world has been reborn"};
        var node = document.createElement('li');
        node.style.marginBottom = "6px";
        var textnode = document.createTextNode(eventMap[event]);
        node.appendChild(textnode);
        nList.insertBefore(node, nList.childNodes[0]);
        var list = document.querySelectorAll("#notifList li");
        console.log(list.length);
        /*if(nList.clientHeight>=100){
            var elem = list[list.length-1];
            elem.parentNode.removeChild(elem);
        }*/
    }
}


function randn_bm() {
    var u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
}


function updatePopTrack() {
    popTrack.shift();
    popTrack.push(circles.length);
}
/*
function updateLbls() {
    var j = 0;
    for (var i=yearsInGraph-1;i>=0;i++){
        lbls[j]=year-i;
        j++;
    }
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

    if($("#news")[0].style.display === "none"){
        updatePopTrack();
        chart.options.animation.duration = 0;
        chart.update();
        chart.options.animation.duration = 1000;
        isChart=1;isNews=0;
    }
    else{
        isNews=1;isChart=0;
    }
}
