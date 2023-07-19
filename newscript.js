const apikey = "ddef0a2d8519be3fbb6cc385eb0c5360";
const apiurl1 = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiurl2 = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q="

const searchbox = document.querySelector(".search input");
const searchbutton = document.querySelector(".search button");
const icon =  document.querySelector(".icon");

async function getweather(city){
    const response = await fetch(apiurl1+city+`&appid=${apikey}`);
    var data = await response.json();
    document.querySelector(".place").innerHTML = data.name;
    document.querySelector(".tempvalue").innerHTML = Math.round(data.main.temp) +  "°c";
    document.querySelector("#humidity").innerHTML = data.main.humidity;
    document.querySelector("#wind").innerHTML = data.wind.speed;
    document.querySelector("#cloud_status").innerHTML =  data.weather[0].main;
    console.log(data);

    if(data.weather[0].main == "Clouds"){
        icon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Rain"){
        icon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Haze"){
        icon.src = "images/haze.png";
    }
    else if(data.weather[0].main == "Clear"){
        icon.src = "images/sunny.png";
    }
    else if(data.weather[0].main == "Mist"){
        icon.src = "images/mist.png";
    }
    else if(data.weather[0].main == "Fog"){
        icon.src = "images/fog.png";
    }
}

async function getforecast(city){
    const response = await fetch(apiurl2+city+`&appid=${apikey}`);
    var data = await response.json();
    console.log(data);

    const weekday = ["Sunday","Monday","Tuesday","Wed","Thursday","Friday","Saturday"];
    const d = new Date();
    let day1 = weekday[(d.getDay()+1)%7];
    let day2 = weekday[(d.getDay()+2)%7];
    let day3 = weekday[(d.getDay()+3)%7];
    let day4 = weekday[(d.getDay()+4)%7];
    let day5 = weekday[(d.getDay()+5)%7];

    document.querySelector("#day1").innerHTML = day1;
    document.querySelector("#day2").innerHTML = day2;
    document.querySelector("#day3").innerHTML = day3;
    document.querySelector("#day4").innerHTML = day4;
    document.querySelector("#day5").innerHTML = day5;

    document.querySelector("#avgtemp1").innerHTML = Math.round((data.list[5].main.temp_min+data.list[5].main.temp_max)/2)+  "°c";
    document.querySelector("#avgtemp2").innerHTML = Math.round((data.list[10].main.temp_min+data.list[10].main.temp_max)/2)+  "°c";
    document.querySelector("#avgtemp3").innerHTML = Math.round((data.list[15].main.temp_min+data.list[15].main.temp_max)/2)+  "°c";
    document.querySelector("#avgtemp4").innerHTML = Math.round((data.list[20].main.temp_min+data.list[20].main.temp_max)/2)+  "°c";
    document.querySelector("#avgtemp5").innerHTML = Math.round((data.list[25].main.temp_min+data.list[25].main.temp_max)/2)+  "°c";

    document.querySelector("#condition1").innerHTML = data.list[5].weather[0].main;
    document.querySelector("#condition2").innerHTML = data.list[10].weather[0].main;
    document.querySelector("#condition3").innerHTML = data.list[15].weather[0].main;
    document.querySelector("#condition4").innerHTML = data.list[20].weather[0].main;
    document.querySelector("#condition5").innerHTML = data.list[25].weather[0].main;

}

getweather("ahmedabad");
getforecast("ahmedabad");

// search on click :
searchbutton.addEventListener("click", ()=>{
    getweather(searchbox.value);
    getforecast(searchbox.value);
})


//search on clicking enter :
searchbox.addEventListener("keypress",(e)=> {
    if(e.key == "Enter"){
        document.getElementById("submit").click();
    }
})