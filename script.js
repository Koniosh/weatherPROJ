const apiKey="6f0eb205ab2a22a635ecc95b65a75687";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const bg=document.querySelector(".bg");

const search=document.querySelector(".inpt input");
const btn=document.querySelector(".search .srch");
const btn2=document.querySelector(".inpt i");
const icon=document.querySelector(".mid .icon img");
const location2=document.querySelector(".locate");
const temperature2=document.querySelector(".temp");
const humidity2=document.querySelector(".info1");
const windSpeed2=document.querySelector(".infoo");


async function checkWeather(city){
    const response= await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data= await response.json();
    console.log(data);
    
   location2.innerHTML=data.name;
   temperature2.innerHTML=Math.round(data.main.temp) + '˚C';
   humidity2.innerHTML=data.main.humidity +'%';
   windSpeed2.innerHTML=data.wind.speed +'Km/H';

if(data.weather[0].main=="Clouds"){
    icon.src="clouds.png";
    bg.src="photo.jpeg";
}else if(data.weather[0].main=="Clear"){
    icon.src="clear.png";
    bg.src="clear.webp";
 }else if(data.weather[0].main=="Rain"){
    icon.src="rain.png";
    bg.src="rain.jpg";
 }else if(data.weather[0].main=="Mist"){
    icon.src="mist.png";
    bg.src="mist.jpg";
 }else if(data.weather[0].main=="Drizzle"){
    icon.src="drizzle.png";
    bg.src="rain.jpg";
 }else if(data.weather[0].main=="Snow"){
    icon.src="snow.png";
    bg.src="snow.jpg";
 }
 
}
btn.addEventListener("click", ()=>{
    checkWeather(search.value);
});
btn2.addEventListener("click", ()=>{
    search.value="";
    bg.src="photo.jpeg";
    icon.src="clouds.png";
    location2.innerHTML="Enter City";
    temperature2.innerHTML="~ ˚C";
    humidity2.innerHTML="~~ %";
    windSpeed2.innerHTML="~~ Km/h";
   classList.add("city");
});