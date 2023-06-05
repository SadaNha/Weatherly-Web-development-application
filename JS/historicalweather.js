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

$(".searchBtn").click(function () {

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
         let month = months[d.getMonth()];

         console.log(day);
         $(".weathercard3-date").text(day+",  "+month+" "+d.getDay()+", "+d.getFullYear());


         // $(".weathercard3-date").text(day+"  "+data.location.localtime.substr(11,5));

         $(".weather-status").text(data.current.condition.text);
      //  $(".dateAndTime").text(data.location.localtime+" "+t1);
       $(".town-region").text(data.location.name+",    "+data.location.region);
      //  $(".region").text(data.location.region);
       $(".country").text(data.location.country);
   
   //   im.(data.current.condition.icon);
    //    wind.text(data.current.wind_kph);
   //  const tt=$(".temp-value-inner");
   
   tmpF=data.current.temp_f;
   tmpC=data.current.temp_c;
   windInKph =data.current.wind_kph;
  windInMph =data.current.wind_mph;
    $(".temp-value-day3before").text(tmpC+"°");
    $(".tempInCelcius-day3before").css("color","#f77f00");


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
       `http://api.weatherapi.com/v1/forecast.json?key=e0939844aa0b4acaaa3153652233005&dt=2023-06-05&q=galle`,
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






    
   // $("#conimg").src=data.current.condition.icon;

// console.log(myArray);
//    console.log(parseInt(myArray)+1);
//    if((num>=0) & (num <=12) ){
//       console.log(myArray+"AM");
//    }else{
//       console.log(myArray+"PM");
//    }

//   hourly forcaste


    });

   //  // Hourly weather for 1st hour

   //  fetch(

   //    // ${searchedLocation}
   //     `http://api.weatherapi.com/v1/forecast.json?q=panadura&key=e0939844aa0b4acaaa3153652233005&hour=${num+1}`,
   //     {
   //        method : "GET",
   //        mode : "cors"
   //     }
   //  ).then(response => {
   //     return response.json();
   //    }).then(data1 => {

   //       let t1;
   //       if((num+1)>=12 & (num+1)<=24){
   //          t1="PM";
   //       }
   //       else{
   //          t1="AM";
   //       }
   //       $("#hour1").text((num+1).toString()+".00 "+t1);
   //       const tem =data1.forecast.forecastday[0].hour[0].temp_c;
   //       $("#hour1Value").text(data1.forecast.forecastday[0].hour[0].temp_c+"°C");
   //       document.querySelector("#hour1image").src = data1.forecast.forecastday[0].hour[0].condition.icon;
        
   //       console.log((num+1)+"PM");
   //       console.log(tem);
   //    })

   //    // Hourly weather for 2nd hour

   //    fetch(

         
   //        `http://api.weatherapi.com/v1/forecast.json?q=panadura&key=e0939844aa0b4acaaa3153652233005&hour=${(num+2)}`,
   //        {
   //           method : "GET",
   //           mode : "cors"
   //        }
   //     ).then(response => {
   //        return response.json();
   //       }).then(data2 => {

   //          console.log("second hr :"+(num+2));
   //          let t1;
   //          if((num+2)>=12 & (num+2)<=24){
   //             t1="PM";
   //          }
   //          else{
   //             t1="AM";
   //          }
   //          $("#hour2").text((num+2).toString()+".00 "+t1);
   //          const tem =data2.forecast.forecastday[0].hour[0].temp_c;
   //          $("#hour2Value").text(data2.forecast.forecastday[0].hour[0].temp_c+"°C");
   //          document.querySelector("#hour2image").src = data2.forecast.forecastday[0].hour[0].condition.icon;
           
   //          console.log((num+2)+"AM");
   //          console.log(tem);
   //       })

   //        // Hourly weather for 3nd hour

   //    fetch(

         
   //       `http://api.weatherapi.com/v1/forecast.json?q=panadura&key=e0939844aa0b4acaaa3153652233005&hour=${num+3}`,
   //       {
   //          method : "GET",
   //          mode : "cors"
   //       }
   //    ).then(response => {
   //       return response.json();
   //      }).then(data3 => {

   //       let t1;
   //       if((num+3)>=12 & (num+3)<=24){
   //          t1="PM";
   //       }
   //       else{
   //          t1="AM";
   //       }
   //         $("#hour3").text((num+3).toString()+".00 "+t1);
   //         const tem =data3.forecast.forecastday[0].hour[0].temp_c;
   //         $("#hour3Value").text(data3.forecast.forecastday[0].hour[0].temp_c+"°C");
   //         document.querySelector("#hour3image").src = data3.forecast.forecastday[0].hour[0].condition.icon;
          
   //         console.log((num+3)+"AM");
   //         console.log(tem);
   //      })

   //         // Hourly weather for 4th hour

   //    fetch(

         
   //       `http://api.weatherapi.com/v1/forecast.json?q=panadura&key=e0939844aa0b4acaaa3153652233005&hour=${num+4}`,
   //       {
   //          method : "GET",
   //          mode : "cors"
   //       }
   //    ).then(response => {
   //       return response.json();
   //      }).then(data4 => {

   //       let t1;
   //       if((num+4)>=12 & (num+4)<=24){
   //          t1="PM";
   //       }
   //       else{
   //          t1="AM";
   //       }
   //         $("#hour4").text((num+4).toString()+".00 "+t1);
   //         const tem =data4.forecast.forecastday[0].hour[0].temp_c;
   //         $("#hour4Value").text(data4.forecast.forecastday[0].hour[0].temp_c+"°C");
   //         document.querySelector("#hour4image").src = data4.forecast.forecastday[0].hour[0].condition.icon;
          
   //         console.log((num+2)+"AM");
   //         console.log(tem);
   //      })
   //        // Hourly weather for 5th hour

   //      fetch(

         
   //       `http://api.weatherapi.com/v1/forecast.json?q=panadura&key=e0939844aa0b4acaaa3153652233005&hour=${num+5}`,
   //       {
   //          method : "GET",
   //          mode : "cors"
   //       }
   //    ).then(response => {
   //       return response.json();
   //      }).then(data5 => {
   //       let t1;
   //       if((num+5)>=12 & (num+5)<=24){
   //          t1="PM";
   //       }
   //       else{
   //          t1="AM";
   //       }
   //         $("#hour5").text((num+5).toString()+".00 "+t1);
   //         const tem =data5.forecast.forecastday[0].hour[0].temp_c;
   //         $("#hour5Value").text(data5.forecast.forecastday[0].hour[0].temp_c+"°C");
   //         document.querySelector("#hour5image").src = data5.forecast.forecastday[0].hour[0].condition.icon;
          
   //         console.log((num+2)+"AM");
   //         console.log(tem);
   //      })

   //         // Hourly weather for 6th hour

   //         fetch(

         
   //          `http://api.weatherapi.com/v1/forecast.json?q=panadura&key=e0939844aa0b4acaaa3153652233005&hour=${num+6}`,
   //          {
   //             method : "GET",
   //             mode : "cors"
   //          }
   //       ).then(response => {
   //          return response.json();
   //         }).then(data6 => {
   //          let t1;
   //       if((num+6)>=12 & (num+6)<=24){
   //          t1="PM";
   //       }
   //       else{
   //          t1="AM";
   //       }
   //            $("#hour6").text((num+6).toString()+".00 "+t1);
   //            const tem =data6.forecast.forecastday[0].hour[0].temp_c;
   //            $("#hour6Value").text(data6.forecast.forecastday[0].hour[0].temp_c+"°C");
   //            document.querySelector("#hour6image").src = data6.forecast.forecastday[0].hour[0].condition.icon;
             
   //            console.log((num+2)+"AM");
   //            console.log(tem);
   //         })
 });

 

// Click btn function for fahrenheitBtn
 $(".tempInFahrenheit-day3before").click(function (){
   $(".temp-value-day3before").text(tmpF+"°");
   $(this).css("color","#f77f00");
   $(".tempInCelcius-day3before").css("color","black");
   // document.tmpF.style.color='#ffc8dd';
   // tmpF.style.color = "#ffc8dd";
 });

 // Click btn function for celciusBtn
 $(".tempInCelcius-day3before").click(function (){
   $(".temp-value-day3before").text(tmpC+"°");
   $(this).css("color","#f77f00");
   $(".tempInFahrenheit-day3before").css("color","black");

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