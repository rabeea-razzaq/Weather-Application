const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();


app.use(cors());
dotenv.config({path:__dirname +'/secret.env' });
app.use(bodyParser.json());

app.post('/get-Weather', async (req,res,next)=>{ 
     const weather = req.body.weather;
     const response = await fetch('http://api.weatherstack.com/current?access_key='+ process.env.api_key + '&query='+weather);
     const parsed = await response.json();
     const {current , request} = parsed;
     const data = {
          temperature: current.temperature,
          weather_description:current.weather_descriptions[0],
          weather_icon:current.weather_icons[0],
          wind_speed:current.wind_speed,
          wind_pressure: current.pressure,
          humidity:current.humidity,
          feelslike:current.feelslike,
          visibility:current.visibility,
          precip:current.precip,
          location:request.query,

     }
     res.status(200).json(data);
});
const port = process.env.PORT || 5000

app.listen(port);
console.log('connected');