var f1_ = 0;
var f2_ = 0;
var ph = 0;
var pw = 0
var pt = 0;
var pl = 0;
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
function f2()
{
        document.querySelector(".cmd").style.display = "none";
}
function f3()
{
    document.querySelector(".cmd").style.display = "flex";
    document.querySelector(".web").style.background = "rgb(12, 149, 190)";
}
function f4()
{
    document.querySelector(".cmd").style.display = "none";
    document.querySelector(".web").style.background = "#fff";
}