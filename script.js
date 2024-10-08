let weather={
    "apikey":"e33094260e64eac3f391e986982c367c",
    fetchweather: function(city){
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid="
            + this.apikey
            )
            .then((Response)=>Response.json())
            .then((data)=>this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name}=data;
        const {icon,description}=data.weather[0];
        const {temp,humidity}=data.main;
        const {speed}=data.wind;
        // console.log(name,icon,description,temp,humidity,speed)
        document.querySelector(".city").innerText= "Weather in " + name;
        document.querySelector(".icon").src =  
            "https://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".description").innerText=description;
        document.querySelector(".temp").innerText=temp + "°C";    
        document.querySelector(".humidity").innerText="Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText="Wind Speed: " + speed + "km/hr";
        document.querySelector(".weather").classList.remove("loading");
    },
    search: function(){
        this.fetchweather(document.querySelector(".search-bar").value);
    }
};

document
    .querySelector(".search button")
    .addEventListener("click", function () {
        weather.search();
    });

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});

weather.fetchweather("bhimtal");