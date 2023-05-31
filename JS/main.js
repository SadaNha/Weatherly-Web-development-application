submit.click(function () {

    // let searchedLocation = textField.val();
 
    fetch(
       `http://api.weatherapi.com/v1/current.json?q=panadura&key=e0939844aa0b4acaaa3153652233005`,
       {
          method : "GET",
          mode : "cors"
       }
    ).then(response => {
       return response.json();
    }).then(data => {
       console.log(data);
    //    lc.text(data.location.name);
    //    wind.text(data.current.wind_kph);
    //    temp.text(data.current.temp_c);
    })
 });