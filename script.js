function getDate(){
    var days = new Array(8);
    days[1] = "Sunday";
    days[2] = "Monday";
    days[3] = "Tuesday";
    days[4] = "Wednesday";
    days[5] = "Thursday";
    days[6] = "Friday";
    days[7] = "Saturday";
    var months = new Array(13);
    months[1] = "1";
    months[2] = "2";
    months[3] = "3";
    months[4] = "4";
    months[5] = "5";
    months[6] = "6";
    months[7] = "7";
    months[8] = "8";
    months[9] = "9";
    months[10] = "10";
    months[11] = "11";
    months[12] = "12";
    var dateObj = new Date(document.lastModified);
    var wday = days[dateObj.getDay() + 1];
    var lmonth = months[dateObj.getMonth() + 1];
    var date = dateObj.getDate();
    var fyear = dateObj.getYear();
    var hr = dateObj.getHours();
    var mn = dateObj.getMinutes();
    var sec = dateObj.getSeconds();
    if (fyear < 2000) { 
        fyear = fyear + 1900;
        document.write("<font face=Arial /*color=#666699*/ size=1>"  + "Last  modified: " + hr + ":" + mn + ":" + sec + ", " + date + "." +  lmonth + "." + fyear + ".");
    }
    return;
}

function blink() {
    var blinks = document.getElementsByTagName('blink');
    for (var i = blinks.length - 1; i >= 0; i--) {
        var s = blinks[i];
        s.style.visibility = (s.style.visibility === 'visible') ? 'hidden' : 'visible';
    }
    window.setTimeout(blink, 500);
}
if (document.addEventListener) document.addEventListener("DOMContentLoaded", blink, false);
else if (window.addEventListener) window.addEventListener("load", blink, false);
else if (window.attachEvent) window.attachEvent("onload", blink);
else window.onload = blink;

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                         m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-43936502-1', 'auto');
ga('send', 'pageview');
