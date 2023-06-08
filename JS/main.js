const btn = $("#searchBtn");
const town = $("#town");
const province = $("#province");
const country = $("#country");
// const im = $("#conimg");
const textField = $(".searchlocation");
let im = document.getElementById("#conimg");
let tmpF = $(".fahrenheit");
let tmpC = $(".celcius");
let myArray;
var num;

let lati ;
let longi ;
//=====================================Function to fetch data according to geolocation =======================================

navigator.geolocation.getCurrentPosition(function (position){
   console.log(position);
   lati=position.coords.latitude;
   longi=position.coords.longitude;
   console.log("lati "+lati);
   console.log("longi "+longi);

 //------------------------------- Function to fetch data -------------------------------------------------------

 let searchedLocation = textField.val();
 console.log(searchedLocation);
 fetch(

   // ${searchedLocation}
   `http://api.weatherapi.com/v1/current.json?q=${lati},${longi}&key=e0939844aa0b4acaaa3153652233005`,
    {
       method : "GET",
       mode : "cors"
    }
 ).then(response => {
    return response.json();
 }).then(data => {
    console.log(data);

   $(".conditiondescription").text(data.current.condition.text);
    $(".dateAndTime").text((new Date(data.location.localtime)).toDateString()+" "+getTwelveHourAndMinuteFormat(new Date(data.location.localtime)));
    $(".town").text(data.location.name+",    ");
    $(".region").text(data.location.region);
    $(".country").text(data.location.country);

tmpF=data.current.temp_f;
tmpC=data.current.temp_c;
 $(".temp-value-inner").text(tmpC+"°");
 $(".celcius").css("color","#f77f00");
 $(".windvalue").text(data.current.wind_kph+" kph");
 $(".rainvalue").text(data.current.precip_mm+" mm");
 $(".humidityvalue").text(data.current.humidity+" %");
 document.querySelector("#conimg").src = data.current.condition.icon;
// $("#conimg").src=data.current.condition.icon;

 // ================================= Hourly weather ============================================================

 fetch(

   `http://api.weatherapi.com/v1/forecast.json?q=${lati},${longi}&key=e0939844aa0b4acaaa3153652233005`,
   {
      method : "GET",
      mode : "cors"
   }
).then(response => {
   return response.json();
  }).then(data1 => {

   let currentHour =new Date(data1.location.localtime).getHours();
  //--------------------------------- hour 1 -------------------------------------------------- 
     //$("#hour1").text(new Date(data1.forecast.forecastday[0].hour[0].time).getHours()+".00 ");
     $("#hour1").text(getTwelveHourFormat(new Date(data1.forecast.forecastday[0].hour[currentHour+1].time)));

     const tem =data1.forecast.forecastday[0].hour[currentHour+1].temp_c;
     $("#hour1Value").text(data1.forecast.forecastday[0].hour[currentHour+1].temp_c+"°C");
     document.querySelector("#hour1image").src = data1.forecast.forecastday[0].hour[currentHour+1].condition.icon;
    
  //--------------------------------- hour 2 -------------------------------------------------- 
  $("#hour2").text(getTwelveHourFormat(new Date(data1.forecast.forecastday[0].hour[currentHour+2].time)));
     //const tem =data2.forecast.forecastday[0].hour[0].temp_c;
     $("#hour2Value").text(data1.forecast.forecastday[0].hour[currentHour+2].temp_c+"°C");
     document.querySelector("#hour2image").src = data1.forecast.forecastday[0].hour[currentHour+2].condition.icon;
    
  //--------------------------------- hour 3 -------------------------------------------------- 
  $("#hour3").text(getTwelveHourFormat(new Date(data1.forecast.forecastday[0].hour[currentHour+3].time)));
     $("#hour3Value").text(data1.forecast.forecastday[0].hour[currentHour+3].temp_c+"°C");
      document.querySelector("#hour3image").src = data1.forecast.forecastday[0].hour[currentHour+3].condition.icon;

  //--------------------------------- hour 4 -------------------------------------------------- 
  $("#hour4").text(getTwelveHourFormat(new Date(data1.forecast.forecastday[0].hour[currentHour+4].time)));
     $("#hour4Value").text(data1.forecast.forecastday[0].hour[currentHour+4].temp_c+"°C");
     document.querySelector("#hour4image").src = data1.forecast.forecastday[0].hour[currentHour+4].condition.icon;

  //--------------------------------- hour 5 -------------------------------------------------- 
  $("#hour5").text(getTwelveHourFormat(new Date(data1.forecast.forecastday[0].hour[currentHour+5].time)));
   $("#hour5Value").text(data1.forecast.forecastday[0].hour[currentHour+5].temp_c+"°C");
   document.querySelector("#hour5image").src = data1.forecast.forecastday[0].hour[currentHour+5].condition.icon;

   //--------------------------------- hour 6 -------------------------------------------------- 
   $("#hour6").text(getTwelveHourFormat(new Date(data1.forecast.forecastday[0].hour[currentHour+6].time)));
   $("#hour6Value").text(data1.forecast.forecastday[0].hour[currentHour+6].temp_c+"°C");
   document.querySelector("#hour6image").src = data1.forecast.forecastday[0].hour[currentHour+6].condition.icon;
  })

 });

});

$(".searchBtn").click(function () {

   window.location.href = "currentweather.html";

    let searchedLocation = textField.val();
    console.log(searchedLocation);
    fetch(

      // ${searchedLocation}
       `http://api.weatherapi.com/v1/current.json?q=galle&key=e0939844aa0b4acaaa3153652233005`,
       {
          method : "GET",
          mode : "cors"
       }
    ).then(response => {
       return response.json();
    }).then(data => {

      var favoritemovie = "Shrek";
sessionStorage.setItem("favoriteMovie", favoritemovie);
       console.log(data);
       const arr = data.location.localtime;
       myArray= arr.substr(arr.indexOf(" ")+1,2);
        num = parseInt(myArray);

        let dd = new Date(data.location.localtime);
        let hr = dd.getHours();
        console.log("Sanjeewa");
        console.log("hour :"+hr);
       let t1;
         if((num+4)>=12 & (num+4)<=24){
            t1="PM";
         }
         else{
            t1="AM";
         }

         $(".conditiondescription").text(data.current.condition.text);
       $(".dateAndTime").text(data.location.localtime+" "+t1);
       $(".town").text(data.location.name+",    ");
       $(".region").text(data.location.region);
       $(".country").text(data.location.country);
   
   tmpF=data.current.temp_f;
   tmpC=data.current.temp_c;
    $(".temp-value-inner").text(tmpC+"°");
    $(".celcius").css("color","#f77f00");
    $(".windvalue").text(data.current.wind_kph+" kph");
    $(".rainvalue").text(data.current.precip_mm+" mm");
    $(".humidityvalue").text(data.current.humidity+" %");
    document.querySelector("#conimg").src = data.current.condition.icon;

    });

    // ================================= Hourly weather ============================================================

    fetch(

       `http://api.weatherapi.com/v1/forecast.json?q=${lati},${longi}&key=e0939844aa0b4acaaa3153652233005`,
       {
          method : "GET",
          mode : "cors"
       }
    ).then(response => {
       return response.json();
      }).then(data1 => {

         let currentHour =new Date(data1.location.localtime).getHours();
      //--------------------------------- hour 1 -------------------------------------------------- 
         //$("#hour1").text(new Date(data1.forecast.forecastday[0].hour[0].time).getHours()+".00 ");
         $("#hour1").text(getTwelveHourFormat(new Date(data1.forecast.forecastday[0].hour[currentHour+1].time)));

         const tem =data1.forecast.forecastday[0].hour[currentHour+1].temp_c;
         $("#hour1Value").text(data1.forecast.forecastday[0].hour[currentHour+1].temp_c+"°C");
         document.querySelector("#hour1image").src = data1.forecast.forecastday[0].hour[currentHour+1].condition.icon;
        
      //--------------------------------- hour 2 -------------------------------------------------- 
      $("#hour2").text(getTwelveHourFormat(new Date(data1.forecast.forecastday[0].hour[new Date(data1.location.localtime).getHours()+2].time)));
         //const tem =data2.forecast.forecastday[0].hour[0].temp_c;
         $("#hour2Value").text(data1.forecast.forecastday[0].hour[1].temp_c+"°C");
         document.querySelector("#hour2image").src = data1.forecast.forecastday[0].hour[1].condition.icon;
        
      //--------------------------------- hour 3 -------------------------------------------------- 
      $("#hour3").text(getTwelveHourFormat(new Date(data1.forecast.forecastday[0].hour[new Date(data1.location.localtime).getHours()+3].time)));
         $("#hour3Value").text(data1.forecast.forecastday[0].hour[2].temp_c+"°C");
          document.querySelector("#hour3image").src = data1.forecast.forecastday[0].hour[2].condition.icon;

      //--------------------------------- hour 4 -------------------------------------------------- 
      $("#hour4").text(getTwelveHourFormat(new Date(data1.forecast.forecastday[0].hour[new Date(data1.location.localtime).getHours()+4].time)));
         $("#hour4Value").text(data1.forecast.forecastday[0].hour[3].temp_c+"°C");
         document.querySelector("#hour4image").src = data1.forecast.forecastday[0].hour[3].condition.icon;

      //--------------------------------- hour 5 -------------------------------------------------- 
      $("#hour5").text(getTwelveHourFormat(new Date(data1.forecast.forecastday[0].hour[new Date(data1.location.localtime).getHours()+5].time)));
       $("#hour5Value").text(data1.forecast.forecastday[0].hour[4].temp_c+"°C");
       document.querySelector("#hour5image").src = data1.forecast.forecastday[0].hour[4].condition.icon;

       //--------------------------------- hour 6 -------------------------------------------------- 
       $("#hour6").text(getTwelveHourFormat(new Date(data1.forecast.forecastday[0].hour[new Date(data1.location.localtime).getHours()+6].time)));
       $("#hour6Value").text(data1.forecast.forecastday[0].hour[5].temp_c+"°C");
       document.querySelector("#hour6image").src = data1.forecast.forecastday[0].hour[5].condition.icon;
      })
      
    })     

 $(".fahrenheit").click(function (){
   $(".temp-value-inner").text(tmpF+"°");
   $(this).css("color","#f77f00");
   $(".celcius").css("color","black");
   // document.tmpF.style.color='#ffc8dd';
   // tmpF.style.color = "#ffc8dd";
 });
 $(".celcius").click(function (){
   $(".temp-value-inner").text(tmpC+"°");
   $(this).css("color","#f77f00");
   $(".fahrenheit").css("color","black");

 });
 //----------------Function to get twelve hours time -------------------------

function getTwelveHourFormat(d){

let intValueofHour = parseInt(d.getHours());
if(intValueofHour%12 ==12){
   return intValueofHour+".00 AM";

}
else{
   if(intValueofHour==12) return (intValueofHour)+".00 PM";
   else return (intValueofHour%12)+".00 PM";
}
 }

  //----------------Function to get twelve hours time with minutes -------------------------

function getTwelveHourAndMinuteFormat(d){

   let intValueofHour = parseInt(d.getHours());
   console.log(d);
   console.log(d.getHours());
   if(intValueofHour%12 ==12){
      console.log(intValueofHour+"."+d.getMinutes()+" AM");
      return intValueofHour+":"+d.getMinutes()+" AM";
   
   }
   else{
      if(intValueofHour==12) return (intValueofHour)+":"+d.getMinutes()+" PM";
      else return (intValueofHour%12)+":"+d.getMinutes()+" PM";
   }
    }