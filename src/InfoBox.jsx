import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./SearchBox.css"

function InfoBox({info}) {
    const IMG_URL = "https://images.unsplash.com/photo-1566927788611-72102cd26e14?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL = "https://scopeblog.stanford.edu/wp-content/uploads/2022/07/AdobeStock_268489083-1536x895.jpeg";
    const COLD_URL ="https://images.pexels.com/photos/30002448/pexels-photo-30002448.jpeg?cs=srgb&dl=pexels-felix-57767809-30002448.jpg&fm=jpg";
    const RAIN_URL = "https://static.vecteezy.com/system/resources/previews/042/146/565/non_2x/ai-generated-beautiful-rain-day-view-photo.jpg";

  return (
    <div className='InfoBox'>
      <div className='cardContainer'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image = {info.humidity>65 ? RAIN_URL : info.temp>24 ? HOT_URL : COLD_URL}
        title="weather"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city.toUpperCase()}{
            info.humidity>65 ? <ThunderstormIcon/> : info.temp>24 ? <WbSunnyIcon/> : <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Min Temperature = {info.tempMin}&deg;C</p>
          <p>Max Temperature = {info.tempMax}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>The weather can be described as <i><b>{info.weather}</b></i> and feels like <i><b>{info.feelsLike}&deg;C</b></i></p>
        </Typography>
      </CardContent>
      </Card>
      </div>
    </div>
  )
}

export default InfoBox