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

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const months = ["January","February","March","April","May","June","July","August","September","October","November", "December"];

let windInKph ;
  let windInMph;
  let precipMM;
  let precipIN;
  let visKm;
  let visMiles;
  let pastDates;


  let lati ;
  let longi ;
//=====================================Function to fetch data according to geolocation =======================================

  navigator.geolocation.getCurrentPosition(function (position){
   console.log(position);
   lati=position.coords.latitude;
   longi=position.coords.longitude;
   console.log("lati "+lati);
   console.log("longi "+longi);
   getCurrentLocationPastData();
  
  })

$(".searchBtn").click(function () {


    let searchedLocation = textField.val();

    getday1afterdata(searchedLocation);
    getday2afterdata(searchedLocation);
    getday3afterdata(searchedLocation);


 });



// Click btn function for fahrenheitBtn
 $(".tempInFahrenheit-day1after").click(function (){
   $(".temp-value-day1after").text(tmpF+"°");
   $(this).css("color","#f77f00");
   $(".tempInCelcius-day1after").css("color","black");
   // document.tmpF.style.color='#ffc8dd';
   // tmpF.style.color = "#ffc8dd";
 });

 // Click btn function for celciusBtn
 $(".tempInCelcius-day1after").click(function (){
   $(".temp-value-day1after").text(tmpC+"°");
   $(this).css("color","#f77f00");
   $(".tempInFahrenheit-day1after").css("color","black");

 });

  // Click btn function for wind-kphBtn

 $(".wind-kph-day1after").click(function (){
   $(".windvalue-day1after").text("Wind : "+windInKph+" ");
   $(this).css("color","#f77f00");
   $(".wind-mph-day1after").css("color","black");

 });

  // Click btn function for wind-mphBtn

 $(".wind-mph-day1after").click(function (){
   $(".windvalue-day1after").text("Wind : "+windInMph+"000 ");
   $(this).css("color","#f77f00");
   $(".wind-kph-day1after").css("color","black");

 });

   // Click btn function for precip_mmBtn
 $(".precip_mm-day1after").click(function (){
   $(".rainvalue-day1after").text("Percipitation : "+precipMM+" ");
   $(this).css("color","#f77f00");
   $(".precip_in-day1after").css("color","black");

 });

    // Click btn function for precip_mmBtn
    $(".precip_in-day1after").click(function (){
      $(".rainvalue-day1after").text("Percipitation : "+precipIN+" ");
      $(this).css("color","#f77f00");
      $(".precip_mm-day1after").css("color","black");
   
    });

   // Click btn function for vis_kmBtn
$(".vis_km-day1after").click(function (){
    $(".visibilityValue-day1after").text("Visibility : "+visKm+" ");
   $(this).css("color","#f77f00");
   $(".vis_miles-day1after").css("color","black");
      
});

 // Click btn function for vis_kmBtn
   $(".vis_miles-day1after").click(function (){
   $(".visibilityValue-day1after").text("Visibility : "+visMiles+" ");
   $(this).css("color","#f77f00");
   $(".vis_km-day1after").css("color","black");
      
});

// =====================================================Button click function for 3daysbefore weather data=================================================== 

// =====================================================Button click function for 2daysbefore weather data=================================================== 

// Click btn function for fahrenheitBtn
$(".tempInFahrenheit-day2after").click(function (){
   $(".temp-value-day2after").text(tmpF+"°");
   $(this).css("color","#f77f00");
   $(".tempInCelcius-day2after").css("color","black");
   // document.tmpF.style.color='#ffc8dd';
   // tmpF.style.color = "#ffc8dd";
 });

 // Click btn function for celciusBtn
 $(".tempInCelcius-day2after").click(function (){
   $(".temp-value-day2after").text(tmpC+"°");
   $(this).css("color","#f77f00");
   $(".tempInFahrenheit-day2after").css("color","black");

 });

  // Click btn function for wind-kphBtn

 $(".wind-kph-day2after").click(function (){
   $(".windvalue-day2after").text("Wind : "+windInKph+" ");
   $(this).css("color","#f77f00");
   $(".wind-mph-day2after").css("color","black");

 });

  // Click btn function for wind-mphBtn

 $(".wind-mph-day2after").click(function (){
   $(".windvalue-day2after").text("Wind : "+windInMph+"000 ");
   $(this).css("color","#f77f00");
   $(".wind-kph-day2after").css("color","black");

 });

   // Click btn function for precip_mmBtn
 $(".precip_mm-day2after").click(function (){
   $(".rainvalue-day2after").text("Percipitation : "+precipMM+" ");
   $(this).css("color","#f77f00");
   $(".precip_in-day2after").css("color","black");

 });

    // Click btn function for precip_mmBtn
    $(".precip_in-day2after").click(function (){
      $(".rainvalue-day2after").text("Percipitation : "+precipIN+" ");
      $(this).css("color","#f77f00");
      $(".precip_mm-day2after").css("color","black");
   
    });

   // Click btn function for vis_kmBtn
$(".vis_km-day2after").click(function (){
    $(".visibilityValue-day2after").text("Visibility : "+visKm+" ");
   $(this).css("color","#f77f00");
   $(".vis_miles-day2after").css("color","black");
      
});

 // Click btn function for vis_kmBtn
   $(".vis_miles-day2after").click(function (){
   $(".visibilityValue-day2after").text("Visibility : "+visMiles+" ");
   $(this).css("color","#f77f00");
   $(".vis_km-day2after").css("color","black");
      
});

// =====================================================Button click function for 2daysbefore weather data=================================================== 

// =====================================================Button click function for 1daysbefore weather data=================================================== 

// Click btn function for fahrenheitBtn
$(".tempInFahrenheit-day3after").click(function (){
   $(".temp-value-day3after").text(tmpF+"°");
   $(this).css("color","#f77f00");
   $(".tempInCelcius-day3after").css("color","black");
   // document.tmpF.style.color='#ffc8dd';
   // tmpF.style.color = "#ffc8dd";
 });

 // Click btn function for celciusBtn
 $(".tempInCelcius-day3after").click(function (){
   $(".temp-value-day3after").text(tmpC+"°");
   $(this).css("color","#f77f00");
   $(".tempInFahrenheit-day3after").css("color","black");

 });

  // Click btn function for wind-kphBtn

 $(".wind-kph-day3after").click(function (){
   $(".windvalue-day3after").text("Wind : "+windInKph+" ");
   $(this).css("color","#f77f00");
   $(".wind-mph-day3after").css("color","black");

 });

  // Click btn function for wind-mphBtn

 $(".wind-mph-day3after").click(function (){
   $(".windvalue-day3after").text("Wind : "+windInMph+"000 ");
   $(this).css("color","#f77f00");
   $(".wind-kph-day3after").css("color","black");

 });

   // Click btn function for precip_mmBtn
 $(".precip_mm-day3after").click(function (){
   $(".rainvalue-day3after").text("Percipitation : "+precipMM+" ");
   $(this).css("color","#f77f00");
   $(".precip_in-day3after").css("color","black");

 });

    // Click btn function for precip_mmBtn
    $(".precip_in-day3after").click(function (){
      $(".rainvalue-day3after").text("Percipitation : "+precipIN+" ");
      $(this).css("color","#f77f00");
      $(".precip_mm-day3after").css("color","black");
   
    });

   // Click btn function for vis_kmBtn
$(".vis_km-day3after").click(function (){
    $(".visibilityValue-day3after").text("Visibility : "+visKm+" ");
   $(this).css("color","#f77f00");
   $(".vis_miles-day3after").css("color","black");
      
});

 // Click btn function for vis_kmBtn
   $(".vis_miles-day3after").click(function (){
   $(".visibilityValue-day3after").text("Visibility : "+visMiles+" ");
   $(this).css("color","#f77f00");
   $(".vis_km-day3after").css("color","black");
      
});

// =====================================================Button click function for 1daysbefore weather data=================================================== 

// =====================================================Function to get any previous date in yyyy-mm-dd format=================================================== 

function formatDate(num) {

   const today = new Date()
   const previousDay = new Date(today)
   previousDay.setDate(previousDay.getDate() + num);
   const year = previousDay.toLocaleString('default', {year: 'numeric'});
   const month = previousDay.toLocaleString('default', {month: '2-digit'});
   const day = previousDay.toLocaleString('default', {day: '2-digit'});
 
   return [year, month, day].join('-');
 }

 // =====================================================Function to get any previous date in yyyy-mm-dd format===================================================
 
 function  getday1afterdata(searchedLocation){
  fetch(

    // ${searchedLocation}
     `http://api.weatherapi.com/v1/forecast.json?key=e0939844aa0b4acaaa3153652233005&q=${searchedLocation}&dt=${formatDate(1)}`,
     {
        method : "GET",
        mode : "cors"
     }
  ).then(response => {
     return response.json();
  }).then(data => {
    //  console.log(data);

     
       let d = new Date(data.forecast.forecastday[0].date.substr(0,10));
       let day = weekday[d.getDay()];
       let month = months[d.getMonth()];
       console.log("3daysbefore "+d);
       console.log(day);
       // Display location

       $(".town-region").text(data.location.name+",    "+data.location.region);
       $(".country").text(data.location.country);

       // $(".country").text(formatDate(2));

       //----------- Inside weather card- 1dayafter-------------------------------

       // Display date
       $(".weathercard1-date").text(day+",  "+month+" "+d.getDate()+", "+d.getFullYear());

       // Display condition image and temperature value

       document.querySelector("#conditionimage-day1after").src = data.forecast.forecastday[0].day.condition.icon;
     
       tmpF=data.forecast.forecastday[0].day.maxtemp_f;
       tmpC=data.forecast.forecastday[0].day.maxtemp_c;
       windInKph =data.forecast.forecastday[0].day.maxwind_kph;
       windInMph =data.forecast.forecastday[0].day.maxwind_mph;
       $(".temp-value-day1after").text(tmpC+"°");
       $(".tempInCelcius-day1after").css("color","#f77f00");

       // Display weather condition status
       $(".weather-status-day1after").text(data.forecast.forecastday[0].day.condition.text);

       // Display Other details like wind, percipitation and humidity
        
       $(".windvalue-day1after").text("Wind : "+windInKph+" ");
       $(".wind-kph-day1after").css("color","#f77f00");
        
       precipMM = data.forecast.forecastday[0].day.totalprecip_mm;
       precipIN = data.forecast.forecastday[0].day.totalprecip_in;
       console.log(precipMM+"   "+precipIN);
       $(".rainvalue-day1after").text("Percipitation : "+precipMM+" ");
       $(".precip_mm-day1after").css("color","#f77f00");

       $(".humidityvalue-day1after").text("Humidity : "+data.forecast.forecastday[0].day.avghumidity+" %");

       visKm =data.forecast.forecastday[0].day.avgvis_km;
       visMiles =data.forecast.forecastday[0].day.avgvis_miles;
       $(".visibilityValue-day1after").text("Visibility : "+visKm+" ");
       $(".vis_km-day1after").css("color","#f77f00");

  });
 }

 //=====================================

 function getday2afterdata(searchedLocation){
  fetch(

    // ${searchedLocation}
     `http://api.weatherapi.com/v1/forecast.json?key=e0939844aa0b4acaaa3153652233005&q=${searchedLocation}&dt=${formatDate(2)}`,
     {
        method : "GET",
        mode : "cors"
     }
  ).then(response => {
     return response.json();
  }).then(data => {
    //  console.log(data);
 
     
       let d = new Date(data.forecast.forecastday[0].date.substr(0,10));
       console.log("2daysbefore "+d);
       let day = weekday[d.getDay()];
       let month = months[d.getMonth()];
 
       console.log(day);
 
       //----------- Inside weather card- 2daysafter -------------------------------
 
       // Display date
       $(".weathercard2-date").text(day+",  "+month+" "+d.getDate()+", "+d.getFullYear());
 
       // Display condition image and temperature value
 
       document.querySelector("#conditionimage-day2after").src = data.forecast.forecastday[0].day.condition.icon;
     
       tmpF=data.forecast.forecastday[0].day.maxtemp_f;
       tmpC=data.forecast.forecastday[0].day.maxtemp_c;
       windInKph =data.forecast.forecastday[0].day.maxwind_kph;
       windInMph =data.forecast.forecastday[0].day.maxwind_mph;
       $(".temp-value-day2after").text(tmpC+"°");
       $(".tempInCelcius-day2after").css("color","#f77f00");
 
       // Display weather condition status
       $(".weather-status-day2after").text(data.forecast.forecastday[0].day.condition.text);
 
       // Display Other details like wind, percipitation and humidity
        
       $(".windvalue-day2after").text("Wind : "+windInKph+" ");
       $(".wind-kph-day2after").css("color","#f77f00");
        
       precipMM = data.forecast.forecastday[0].day.totalprecip_mm;
       precipIN = data.forecast.forecastday[0].day.totalprecip_in;
       console.log(precipMM+"   "+precipIN);
       $(".rainvalue-day2after").text("Percipitation : "+precipMM+" ");
       $(".precip_mm-day2after").css("color","#f77f00");
 
       $(".humidityvalue-day2after").text("Humidity : "+data.forecast.forecastday[0].day.avghumidity+" %");
 
       visKm =data.forecast.forecastday[0].day.avgvis_km;
       visMiles =data.forecast.forecastday[0].day.avgvis_miles;
       $(".visibilityValue-day2after").text("Visibility : "+visKm+" ");
       $(".vis_km-day2after").css("color","#f77f00");
 
  });
 }

 //=======================================

 function getday3afterdata(searchedLocation){
  fetch(

    // ${searchedLocation}
     `http://api.weatherapi.com/v1/forecast.json?key=e0939844aa0b4acaaa3153652233005&q=${searchedLocation}&dt=${formatDate(3)}`,
     {
        method : "GET",
        mode : "cors"
     }
  ).then(response => {
     return response.json();
  }).then(data => {
     console.log(data);
 
     
       let d = new Date(data.forecast.forecastday[0].date.substr(0,10));
       console.log("1daysbefore "+d);
       let day = weekday[d.getDay()];
       let month = months[d.getMonth()];
 
       console.log(day);
 
       //----------- Inside weather card- 3daysafter -------------------------------
 
       // Display date
       $(".weathercard3-date").text(day+",  "+month+" "+d.getDate()+", "+d.getFullYear());
 
       // Display condition image and temperature value
 
       document.querySelector("#conditionimage-day3after").src = data.forecast.forecastday[0].day.condition.icon;
     
       tmpF=data.forecast.forecastday[0].day.maxtemp_f;
       tmpC=data.forecast.forecastday[0].day.maxtemp_c;
       windInKph =data.forecast.forecastday[0].day.maxwind_kph;
       windInMph =data.forecast.forecastday[0].day.maxwind_mph;
       $(".temp-value-day3after").text(tmpC+"°");
       $(".tempInCelcius-day3after").css("color","#f77f00");
 
       // Display weather condition status
       $(".weather-status-day3after").text(data.forecast.forecastday[0].day.condition.text);
 
       // Display Other details like wind, percipitation and humidity
        
       $(".windvalue-day3after").text("Wind : "+windInKph+" ");
       $(".wind-kph-day3after").css("color","#f77f00");
        
       precipMM = data.forecast.forecastday[0].day.totalprecip_mm;
       precipIN = data.forecast.forecastday[0].day.totalprecip_in;
       console.log(precipMM+"   "+precipIN);
       $(".rainvalue-day3after").text("Percipitation : "+precipMM+" ");
       $(".precip_mm-day3after").css("color","#f77f00");
 
       $(".humidityvalue-day3after").text("Humidity : "+data.forecast.forecastday[0].day.avghumidity+" %");
 
       visKm =data.forecast.forecastday[0].day.avgvis_km;
       visMiles =data.forecast.forecastday[0].day.avgvis_miles;
       $(".visibilityValue-day3after").text("Visibility : "+visKm+" ");
       $(".vis_km-day3after").css("color","#f77f00");
 
  });
 }

 //====================
 function getCurrentLocationPastData(){
  fetch(

    // ${searchedLocation}
     `http://api.weatherapi.com/v1/current.json?key=e0939844aa0b4acaaa3153652233005&q=${lati},${longi}`,
     {
        method : "GET",
        mode : "cors"
     }
      ).then(response => {
           return response.json();
      }).then(data => {
  
    let searchedLocation = data.location.name;
    getday3afterdata(searchedLocation);
    getday2afterdata(searchedLocation);
    getday1afterdata(searchedLocation);

    ///return data.location.name;
});
 }