var f1_ = 0;
var f2_ = 0;
var ph = 0;
var pw = 0
var pt = 0;
var pl = 0;
var fg1_ = 0;
var fg2_ = 0;
var pgh = 0;
var pgw = 0
var pgt = 0;
var pgl = 0;
function pls(){
var mp3__ = new Audio("./start.mp3");
mp3__.play();
}
pls();
function f1()
{
    if (f1_ == 0){
    ph = document.querySelector(".cmd").style.width;
    pw = document.querySelector(".cmd").style.height;
        pt = document.querySelector(".cmd").style.top;
        pl = document.querySelector(".cmd").style.left;
    document.querySelector(".cmd").style.width = "100%";
    document.querySelector(".cmd").style.height = "100%";
    f1_ = 1;
        document.querySelector(".cmd").style.top = "0%";
        document.querySelector(".cmd").style.left = "0%";
    }
    else
    {
        f1_ = 0;
        document.querySelector(".cmd").style.width = pw;
        document.querySelector(".cmd").style.height = ph;
        document.querySelector(".cmd").style.top = pt;
        document.querySelector(".cmd").style.left = pl;
    }
}

function fg1() {
    if (fg1_ == 0) {
        pgh = document.querySelector(".google").style.width;
        pgw = document.querySelector(".google").style.height;
        pgt = document.querySelector(".google").style.top;
        pgl = document.querySelector(".google").style.left;
        document.querySelector(".google").style.width = "100%";
        document.querySelector(".google").style.height = "100%";
        fg1_ = 1;
        document.querySelector(".google").style.top = "0%";
        document.querySelector(".google").style.left = "0%";
    }
    else {
        fg1_ = 0;
        document.querySelector(".google").style.width = pgw;
        document.querySelector(".google").style.height = pgh;
        document.querySelector(".google").style.top = pgt;
        document.querySelector(".google").style.left = pgl;
    }
}

function ff1() {
    if (fg1_ == 0) {
        pgh = document.querySelector(".file").style.width;
        pgw = document.querySelector(".file").style.height;
        pgt = document.querySelector(".file").style.top;
        pgl = document.querySelector(".file").style.left;
        document.querySelector(".file").style.width = "100%";
        document.querySelector(".file").style.height = "100%";
        fg1_ = 1;
        document.querySelector(".file").style.top = "0%";
        document.querySelector(".file").style.left = "0%";
    }
    else {
        fg1_ = 0;
        document.querySelector(".file").style.width = pgw;
        document.querySelector(".file").style.height = pgh;
        document.querySelector(".file").style.top = pgt;
        document.querySelector(".file").style.left = pgl;
    }
}

function f2()
{
        document.querySelector(".cmd").style.left = "-100%";
}

function fg2() {
    document.querySelector(".google").style.left = "-100%";
}

function ff2() {
    document.querySelector(".file").style.left = "-100%";
}

function f3()
{
    document.querySelector(".cmd").style.display = "flex";
    document.querySelector(".web").style.background = "rgb(12, 149, 190)";
    document.querySelector(".cmd").style.left = "30%";
}


function fg3() {
    document.querySelector(".web").style.background = "rgb(12, 149, 190)";
    document.querySelector(".google").style.left = "30%";
}

function ff3() {
    document.querySelector(".web").style.background = "rgb(12, 149, 190)";
    document.querySelector(".file").style.left = "30%";
    var inc = prompt("url");
    document.getElementById("fr_k9").setAttribute("src", inc);
}


function f4()
{
    document.querySelector(".cmd").style.left = "-100%";
    document.querySelector(".web").style.background = "#fff";
    document.getElementById("fr").setAttribute("src", "https://ultrontheai.github.io/Certificate/main.html");
}

function fg4() {
    document.querySelector(".google").style.left = "-100%";
    document.querySelector(".web").style.background = "#fff";
}

function ff4() {
    document.querySelector(".file").style.left = "-100%";
    document.querySelector(".web").style.background = "#fff";
}
