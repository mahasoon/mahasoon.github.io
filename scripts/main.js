var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    var myH1  =document.querySelector('h1');
    if(mySrc === 'images/d2.png')
 {
      myImage.setAttribute ('src','images/d3.png');
      myH1.textContent="Mof in Crete";
    }
if(mySrc==='images/d3.png')
 {
      myImage.setAttribute ('src','images/d2.png');
      myH1.textContent="Cath in Crete";
    }
}

myButton1.onclick=function(){setUserName();}

var myButton1=document.querySelector("button");
var myH2=document.querySelector("h2");

function setUserName(){
var myName=prompt('Please enter your name');
localStorage.setItem('name', myName);
myH2.textContent=myName;
}

if(!localStorage.getItem('name'))
{
setUserName();
}
else
{
var storedName=localStorage.getItem('name');
myH2.textContent=storedName;
}

