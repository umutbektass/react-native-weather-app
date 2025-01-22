import { apiKey } from "@/constants"
import axios from "axios"


type ForecastParams  = {
    cityName:string,
    days?:string
}

type LocationParams = {
    cityName:string,
}


 const forecastEndPoint = (params:ForecastParams )=> `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`;
 const locationsEndPoint = (params:LocationParams)=> `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`;

 const apiCall = async (endPoint:string)=>{
    const options = {
        method:'GET',
        url:endPoint
    }
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log("error: ",error)
        return null;
    }
 }

 export const fetchWeatherForecast=(params:ForecastParams ) =>{
    return apiCall(forecastEndPoint(params))
 }

 export const fetchLocations=(params:LocationParams) =>{
    return apiCall(locationsEndPoint(params))
 }