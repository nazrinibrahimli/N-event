
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>
    {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove("show")

        }
    })
})


const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el)=>observer.observe(el));



function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    var today = new Date();
    var h = today.getHours()+3; //I added +3 to show remaning time, like deadline
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + " | "+"  " + m +"  "+ " | " + s ; 
    t = setTimeout(function() {
      startTime()
    }, 500);
  }
  startTime();

function functionNav(){
  var x= document.getElementById("navBar");
  if(x.className==="myNav"){
    x.className+=" responsive";
  }
  else{
    x.className= "myNav"
  }
}



/* Calendar* */
const louvre = new Date("2023-07-25");
var hh=louvre.getFullYear



var arrayOfEvents = [

  {
      "date": "12.05",
      "title": "",
      "time": "11:00"
  },
  {
    "date": "12.05",
    "title": "",
    "time": "11:00"
  },
  {
    "date": "12.05",
    "title": "",
    "time": "11:00"
  },
  {
    "date": "12.05",
    "title": "",
    "time": "11:00"
  }

];

var app = document.querySelector('#dates');
app.innerHTML = '<ul>' + arrayOfEvents.map(function (wizard) {
	return '<li>' + wizard + '</li>';
}).join('') + '</ul>';