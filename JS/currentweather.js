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


  let lati ;
  let longi ;


  var favoritemovie = sessionStorage.getItem("favoriteMovie");
console.log(favoritemovie);
//=====================================Function to fetch data according to geolocation =======================================

  navigator.geolocation.getCurrentPosition(function (position){
    console.log(position);
    lati=position.coords.latitude;
    longi=position.coords.longitude;
    console.log("lati "+lati);
    console.log("longi "+longi);

  //------------------------------- Function to fetch data -------------------------------------------------------

  fetch(

   // ${searchedLocation}
    //`http://api.weatherapi.com/v1/current.json?q=${searchedLocation}&key=e0939844aa0b4acaaa3153652233005`,
    `http://api.weatherapi.com/v1/current.json?q=${lati},${longi}&key=e0939844aa0b4acaaa3153652233005`,
    {
       method : "GET",
       mode : "cors"
    }
 ).then(response => {
    return response.json();
 }).then(data => {
   console.log("lati "+lati);
    console.log(data);
    console.log("click is ok");
    const arr = data.location.localtime;
    myArray= arr.substr(arr.indexOf(" ")+1,2);
     num = parseInt(myArray);
    let t1;
      if((num+4)>=12 & (num+4)<=24){
         t1="PM";
      }
      else{
         t1="AM";
      }
      let d = new Date(data.location.localtime.substr(0,10));
      // let d = new Date("2023-06-04")
      let day = weekday[d.getDay()];
      console.log(day);
      

      $(".conditiondescription").text(data.current.condition.text);
   //  $(".dateAndTime").text(data.location.localtime+" "+t1);
    $(".town-region").text(data.location.name+",    "+data.location.region);
   //  $(".region").text(data.location.region);
    $(".country").text(data.location.country);
    $(".dayofWeek").text(day+"  "+data.location.localtime.substr(11,5));
//   im.(data.current.condition.icon);
 //    wind.text(data.current.wind_kph);
//  const tt=$(".temp-value-inner");

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
    `http://api.weatherapi.com/v1/forecast.json?key=e0939844aa0b4acaaa3153652233005&q=${lati},${longi}`,
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

   //------------------------------- Function to fetch data -------------------------------------------------------

//=====================================Function to fetch data according to geolocation =======================================



  });

  

  $(".homePage").click(function (){
   window.location.href = "index.html";
  })

$(".searchBtn").click(function () {
   window.location.href = "index.html";

    let searchedLocation = textField.val();
    console.log(searchedLocation);
    fetch(

      // ${searchedLocation}
       //`http://api.weatherapi.com/v1/current.json?q=${searchedLocation}&key=e0939844aa0b4acaaa3153652233005`,
       `http://api.weatherapi.com/v1/current.json?q=${searchedLocation}&key=e0939844aa0b4acaaa3153652233005`,
       {
          method : "GET",
          mode : "cors"
       }
    ).then(response => {
       return response.json();
    }).then(data => {
      console.log("lati "+lati);
       console.log(data);
       console.log("click is ok");
       const arr = data.location.localtime;
       myArray= arr.substr(arr.indexOf(" ")+1,2);
        num = parseInt(myArray);
       let t1;
         if((num+4)>=12 & (num+4)<=24){
            t1="PM";
         }
         else{
            t1="AM";
         }
         let d = new Date(data.location.localtime.substr(0,10));
         // let d = new Date("2023-06-04")
         let day = weekday[d.getDay()];
         console.log(day);
         

         $(".conditiondescription").text(data.current.condition.text);
      //  $(".dateAndTime").text(data.location.localtime+" "+t1);
       $(".town-region").text(data.location.name+",    "+data.location.region);
      //  $(".region").text(data.location.region);
       $(".country").text(data.location.country);
       $(".dayofWeek").text(day+"  "+data.location.localtime.substr(11,5));
   //   im.(data.current.condition.icon);
    //    wind.text(data.current.wind_kph);
   //  const tt=$(".temp-value-inner");
   
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