function init(weatherData){  
            console.log("Weather condition:", weatherData.weather[0].main);   
            switch(weatherData.weather[0].main){
               case 'Clear':
                document.body.style.backgroundImage="url('clear.jpg')";
                break;
               case 'Rain':
                document.body.style.backgroundImage="url('rain.jpg')";
                break;
               case 'Snow':
                document.body.style.backgroundImage="url('snow.jpg')";
                break;
               case 'Mist' :
                document.body.style.backgroundImage="url('mist.jpg')";
                 break;
               case 'Clouds':
                document.body.style.backgroundImage="url('cloud.jpg')";
                break;
               default:
                break; 
            }
        }
                async function getWeather(city){
                    const API_KEY="0085cbf4aa2a37e02757d32e97915962";
                    try{
                        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
                        if(!response.ok){
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        const data=await response.json();
                        document.getElementById('weatheroutput').textContent=`Temperature:${data.main.temp}${String.fromCharCode(176)}C`;
                        document.getElementById("weatheroutput1").textContent=`Pressure:${data.main.pressure}hpa`;
                        document.getElementById("weatheroutput2").textContent=`Humidity:${data.main.humidity}%`;
                        document.getElementById("weatheroutput3").textContent=`windspeed:${data.wind.speed}km/h`;
                        console.log(data);
                        init(data);
                      
                    }
                    catch (error){
                        console.log('Error fetching weather data:',error);
                        document.getElementById("weatheroutput").textContent=`Error:${error}`;
                    }
                }
        document.getElementById('button').addEventListener('click', function() {
        const city = document.getElementById('user').value;
        getWeather(city);
        
    });

       






























