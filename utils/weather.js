const dotenv=require("dotenv")
const axios=require("axios")
dotenv.config({path:"../.env"})
const weatherApiKey = process.env.OPENWEATHERMAP_API_KEY

async function getWeatherData(city) {
    try{
        const info=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`)
        const description=info.data.weather[0].description
        const temp=info.data.main.temp
        const msg=`Temperature: ${temp}°C, Description: ${description}`; 
        return msg

    }catch(error) {
        console.error('Error fetching weather data:', error.message);
        throw new Error('Unable to fetch weather information.');
    }
    
}



module.exports=getWeatherData

