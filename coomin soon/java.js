const seconds = document.querySelector(".seconds.number");
minutes = document.querySelector(".minutes.number");
hours = document.querySelector(".hours.number");
days = document.querySelector(".days.number");
console.log(seconds,minutes,hours,days)


let secvalue = 60;
minvalue = 60;
hourvalue = 2;
dayvalue = 9;

const timefunction = setintervel(()=>{

  secvalue--;

  if(secvalue== 0){
    minvalue--;
    Secvalue = 60;
    console.log()
  }

  Console.log(secvalue);
  Seconds.textcontent = secvalue;
  minutes.textcontent = secvalue;
}, 1000);