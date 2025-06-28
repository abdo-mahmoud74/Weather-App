const apiKey="6b37e3b2c93b0c37562c0073b88dcd48";
const apiValue="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchInput=document.querySelector("#search-input");
const searchBtn=document.querySelector("#search-btn")
const weatherIcon=document.querySelector(".weather-icon");

async function getWeather(city) {
    const response= await fetch(apiValue+city+`&appid=${apiKey}`);
    var data=await response.json();

   if(data.weather[0].main=="Clouds"){
    weatherIcon.src="img/clouds.png"

   }else if(data.weather[0].main=="Clear"){
     weatherIcon.src="img/clear.png"
   }
   else if(data.weather[0].main=="Rain"){
    weatherIcon.src="img/rain.png"
  }
  else if(data.weather[0].main=="Drizz"){
    weatherIcon.src="img/drizzle.png"
  }
  else if(data.weather[0].main=="Mist"){
    weatherIcon.src="img/mist.png"
  }
  document.querySelector(".weather").style.display ="block"


    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +`<sup>o</sup>c`;
    document.querySelector(".humidity").innerHTML=data.main.humidity+'%';
    document.querySelector(".Wind").innerHTML=data.wind.speed +` Km/h ` ;
}
searchBtn.addEventListener("click",()=>{
    getWeather(searchInput.value);
    searchInput.value="";
})
