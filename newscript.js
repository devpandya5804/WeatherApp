const apikey = "ddef0a2d8519be3fbb6cc385eb0c5360";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbutton = document.querySelector(".search button");
const icon =  document.querySelector(".icon");

async function getweather(city){
    const response = await fetch(apiurl+city+`&appid=${apikey}`);
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
}

getweather("ahmedabad");

// search on click :
searchbutton.addEventListener("click", ()=>{
    getweather(searchbox.value);
})


//search on clicking enter :
searchbox.addEventListener("keypress",(e)=> {
    if(e.key == "Enter"){
        document.getElementById("submit").click();
    }
})