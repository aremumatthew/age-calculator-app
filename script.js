function calcAge(){
  let year = document.getElementById("year").value;
  let y = new Date;
  let currentyear = y.getFullYear()
  let display = document.querySelector('.years');
  display.innerHTML = `${currentyear - year}`; 
  let month = document.getElementById("month").value;
  let m = new Date;
  let currentmonth = m.getMonth() + 1;
  let display2 = document.querySelector('.months');
  display2.innerHTML = `${currentmonth - month}`;
  
  let day = document.getElementById("days").value;
  let d = new Date;
  let currentday = d.getDate();
  let display3 = document.querySelector('.days');
  display3.innerHTML = `${currentday - day}`;

}