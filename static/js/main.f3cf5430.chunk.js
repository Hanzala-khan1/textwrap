(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(27)},23:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(13),r=a.n(c),o=(a(23),a(25),a(3));function m(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1];return l.a.createElement("div",{className:"td"},l.a.createElement("div",{className:"inner"},l.a.createElement("h1",{className:"mainh enter"}," Enter Your Text Here :"),l.a.createElement("textarea",{className:"texta",value:a,onChange:function(e){c(e.target.value)},placeholder:"Enter Your Text",id:"ct"}," "),l.a.createElement("button",{onClick:function(){var e=a.toUpperCase();c(e)},className:"btbt"},"  Convert to Uppercase"),l.a.createElement("button",{onClick:function(){var e=a.toLowerCase();c(e)},className:"btbt"}," convert to lower case "),l.a.createElement("button",{onClick:function(){navigator.clipboard.writeText(a)},className:"btbt"}," Copy Text"),l.a.createElement("button",{onClick:function(){c("")},className:"btbt"}," Clear text"),l.a.createElement("button",{onClick:function(){var e=document.createElement("a"),t=new Blob([document.getElementById("ct").value],{type:"text/plain;charset=utf-8"});e.href=URL.createObjectURL(t),e.download="myFile.txt",document.body.appendChild(e),e.click()},className:"btbt"}," Download In File"),l.a.createElement("div",null,l.a.createElement("h2",{className:"he"}," --- Your Text Summary ---"),l.a.createElement("p",{className:"pe"}," ",a.split(" ").length-1," words and ",a.length," characters"),l.a.createElement("h2",{className:"he"}," Your Text:"),l.a.createElement("p",{className:"pe bol"},"  ",a))))}var s=a(8);function u(){return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement("nav",{className:"navbar1",onScroll:function(){var e=document.getElementsByClassName("navbar1")[0];window.addEventListener("scroll",function(){e.classList.toggle("scroll",window.scrollY>60)})}},l.a.createElement("div",{className:"logo"},l.a.createElement("h1",{className:"mainhl"},"TextTutils")),l.a.createElement("div",{className:"menubar"},l.a.createElement("ul",{className:"res"},l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/",className:"lin"},"Home")," "),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/About",className:"lin"},"About")," "),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/Contact",className:"lin"},"Contact Us")," "))),l.a.createElement("div",{className:"ham",onClick:function(){document.getElementsByClassName("res")[0].classList.toggle("active")}},l.a.createElement("i",{className:"h"}," "),l.a.createElement("i",{className:"h"}," "),l.a.createElement("i",{className:"h"}," ")))))}function i(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"about-sec"},l.a.createElement("div",{className:"middle-about"},l.a.createElement("h1",{className:"about-h"}," About Us"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("h3",{className:"about-h3"},"Text Changer :"),l.a.createElement("p",{className:"about-text"}," This help to convert text into upper case and into lower case just by one click")),l.a.createElement("li",null,l.a.createElement("h3",{className:"about-h3"},"Text Downloader :"),l.a.createElement("p",{className:"about-text"}," This also help you to download text into a text file just by one click"))))))}function E(){return l.a.createElement("section",{className:"contact-sec"},l.a.createElement("div",{className:"contact-main"},l.a.createElement("input",{className:"inputc",placeholder:" Enter you Frist NAme"}),l.a.createElement("input",{className:"inputc",placeholder:"Enter you Last Name"}),l.a.createElement("input",{className:"inputc",placeholder:"Enter you Email"}),l.a.createElement("input",{className:"inputc",placeholder:"Enter you Contact"}),l.a.createElement("input",{className:"inputc",placeholder:"Description "}),l.a.createElement("button",{className:"formbt",onClick:function(){alert("form submitted")}},"Submit")))}var d=a(0);var b=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,null,l.a.createElement(u,null),l.a.createElement(d.c,null,l.a.createElement(d.a,{path:"/",element:l.a.createElement(m,null)}),l.a.createElement(d.a,{path:"/About",element:l.a.createElement(i,null)}),l.a.createElement(d.a,{path:"/Contact",element:l.a.createElement(E,null)}))))},p=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,28)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),l(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null))),p()}},[[14,3,2]]]);
//# sourceMappingURL=main.f3cf5430.chunk.js.map