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

let windInKph ;
let windInMph;
let precipMM;
let precipIN;
let visKm;
let visMiles;

var searchedLocation = localStorage.getItem("LocationRequired");
   alert("The Value Received is " + searchedLocation);
   getLocationData(searchedLocation);

$(".searchBtn").click(function () {
  // window.location.href = "index.html";

    let searchedLocation = textField.val();
    console.log(searchedLocation);
    getLocationData(searchedLocation);    

 });

// Click btn function for fahrenheitBtn
 $(".fahrenheit").click(function (){
   $(".temp-value-inner").text(tmpF+"°");
   $(this).css("color","#f77f00");
   $(".celcius").css("color","black");
   // document.tmpF.style.color='#ffc8dd';
   // tmpF.style.color = "#ffc8dd";
 });

 // Click btn function for celciusBtn
 $(".celcius").click(function (){
   $(".temp-value-inner").text(tmpC+"°");
   $(this).css("color","#f77f00");
   $(".fahrenheit").css("color","black");

 });

  // Click btn function for wind-kphBtn

 $(".wind-kph").click(function (){
   $(".windvalue").text("Wind : "+windInKph+" ");
   $(this).css("color","#f77f00");
   $(".wind-mph").css("color","black");

 });

  // Click btn function for wind-mphBtn

 $(".wind-mph").click(function (){
   $(".windvalue").text("Wind : "+windInMph+"000 ");
   $(this).css("color","#f77f00");
   $(".wind-kph").css("color","black");

 });

   // Click btn function for precip_mmBtn
 $(".precip_mm").click(function (){
   $(".rainvalue").text("Percipitation : "+precipMM+" ");
   $(this).css("color","#f77f00");
   $(".precip_in").css("color","black");

 });

    // Click btn function for precip_mmBtn
    $(".precip_in").click(function (){
      $(".rainvalue").text("Percipitation : "+precipIN+" ");
      $(this).css("color","#f77f00");
      $(".precip_mm").css("color","black");
   
    });

   // Click btn function for vis_kmBtn
$(".vis_km").click(function (){
    $(".visibilityValue").text("Visibility : "+visKm+" ");
   $(".vis_km").css("color","#f77f00");
   $(".vis_miles").css("color","black");
      
});

 // Click btn function for vis_kmBtn
   $(".vis_miles").click(function (){
   $(".visibilityValue").text("Visibility : "+visMiles+" ");
   $(".vis_miles").css("color","#f77f00");
   $(".vis_km").css("color","black");
      
});

//============================= get data of searched location ================================================

function getLocationData(searchedLocation){
   fetch(

       `http://api.weatherapi.com/v1/current.json?q=${searchedLocation}&key=e0939844aa0b4acaaa3153652233005`,
       {
          method : "GET",
          mode : "cors"
       }
    ).then(response => {
       return response.json();
    }).then(data => {
 
         let d = new Date(data.location.localtime);
         let day = weekday[d.getDay()];
         console.log(day);
         
   
         $(".conditiondescription").text(data.current.condition.text);
         $(".town-region").text(data.location.name+",    "+data.location.region);
         $(".country").text(data.location.country);
         $(".dayofWeek").text(day+"  "+getTwelveHourAndMinuteFormat(new Date(data.location.localtime)));
         tmpF=data.current.temp_f;
         tmpC=data.current.temp_c;
         windInKph =data.current.wind_kph;
         windInMph =data.current.wind_mph;
          $(".temp-value-inner").text(tmpC+"°");
         $(".celcius").css("color","#f77f00");
         $(".windvalue").text("Wind : "+windInKph+" ");
         $(".wind-kph").css("color","#f77f00");
         precipMM = data.current.precip_mm;
         precipIN = data.current.precip_in;
         console.log(precipMM+"   "+precipIN);
         $(".rainvalue").text("Percipitation : "+precipMM+" ");
         $(".precip_mm").css("color","#f77f00");
   
         $(".humidityvalue").text("Humidity : "+data.current.humidity+" %");
   
         visKm =data.current.vis_km;
         visMiles =data.current.vis_miles;
         $(".visibilityValue").text("Visibility : "+visKm+" ");
         $(".vis_km").css("color","#f77f00");
    
         document.querySelector("#conditionimage").src = data.current.condition.icon;
   
   fetch(
   
      // ${searchedLocation}
       `http://api.weatherapi.com/v1/forecast.json?key=e0939844aa0b4acaaa3153652233005&q=${searchedLocation}`,
       {
          method : "GET",
          mode : "cors"
       }
    ).then(response => {
       return response.json();
      }).then(data1 => {
         $(".sunrise-text").text("Sunrise "+data1.forecast.forecastday[0].astro.sunrise);
         $(".sunset-text").text("Sunset  "+" "+data1.forecast.forecastday[0].astro.sunset);
         // console.log("Sunrise  "+data1.forecast.forecastday[0].astro.sunrise);
      })
   
   
    }); 
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