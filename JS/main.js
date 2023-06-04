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
       $(".town").text(data.location.name+",    ");
       $(".region").text(data.location.region);
       $(".country").text(data.location.country);
   //   im.(data.current.condition.icon);
    //    wind.text(data.current.wind_kph);
   //  const tt=$(".temp-value-inner");

   tmpF=data.current.temp_f;
   tmpC=data.current.temp_c;
    $(".temp-value-inner").text(tmpC+"°");
    $(".celcius").css("color","#023e8a");
    $(".windvalue").text(data.current.wind_kph+" kph");
    $(".rainvalue").text(data.current.precip_mm+" mm");
    $(".humidityvalue").text(data.current.humidity+" %");
    document.querySelector("#conimg").src = data.current.condition.icon;
   // $("#conimg").src=data.current.condition.icon;
const arr = data.location.localtime;
myArray= arr.substr(arr.indexOf(" ")+1,2);
 num = parseInt(myArray);
console.log(myArray);
   console.log(parseInt(myArray)+1);
   if((num>=0) & (num <=12) ){
      console.log(myArray+"AM");
   }else{
      console.log(myArray+"PM");
   }

//   hourly forcaste


    });

    fetch(

      // ${searchedLocation}
       `http://api.weatherapi.com/v1/forecast.json?q=panadura&key=e0939844aa0b4acaaa3153652233005&hour=2`,
       {
          method : "GET",
          mode : "cors"
       }
    ).then(response => {
       return response.json();
      }).then(data1 => {
         $("#hour1").text((num+1).toString()+".00 AM");
         const tem =data1.forecast.forecastday[0].hour[0].temp_c;
         $("#hour1Value").text(tem);
         document.querySelector("#hour1image").src = data1.forecast.forecastday[0].hour[0].condition.icon;
        
         console.log((num+1)+"PM");
         console.log(tem);
      })
 });


 $(".fahrenheit").click(function (){
   $(".temp-value-inner").text(tmpF+"°");
   $(this).css("color","#023e8a");
   $(".celcius").css("color","black");
   // document.tmpF.style.color='#ffc8dd';
   // tmpF.style.color = "#ffc8dd";
 });
 $(".celcius").click(function (){
   $(".temp-value-inner").text(tmpC+"°");
   $(this).css("color","#023e8a");
   $(".fahrenheit").css("color","black");

 });