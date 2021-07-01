import React from 'react';
import bgimg from './background.png'
import Axios from 'axios';
import { Container} from "rsuite";
import Mainbody from './components/body';
import Navbarm from './components/Navbar';
import './App.css';


class App extends React.Component {
state={
coords:{
  latitude:19.0760,
  longitude:72.8777
},
data :{},
inputData:""
}
  componentDidMount(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) =>{
      let newCoords={
        latitude:position.coords.latitude,
        longitude:position.coords.longitude
      }
      this.setState({coords:newCoords});
      //api
      Axios.get(`https://api.weatherstack.com/current?access_key=e661087fd4b5a412566e469bc196a694&query=${this.state.coords.latitude},${this.state.coords.longitude}`).then(res=>{
        let weatherData ={
          location: res.data.location.name,
          temperature: res.data.current.temperature,
          description:res.data.current.weather_descriptions[0],
          region:res.data.location.region,
          country:res.data.location.country,
          wind_speed:res.data.current.wind_speed,
          pressure:res.data.current.pressure,
          precip:res.data.current.precip,
          humidity:res.data.current.humidity,
          img:res.data.current.weather_icons
        }

        this.setState({data:weatherData});
      })
      })
    } else{
      console.log("doesn't works") 
    }
  }


  changeRegion = (value) => {
    this.setState({ inputData: value })  
  }

  changeWeather =(e) => {
    e.preventDefault();
    Axios.get(`http://api.weatherstack.com/current?access_key=e661087fd4b5a412566e469bc196a694&query=${this.state.inputData}`).then(res => {
      let weatherData = {
        location: res.data.location.name,
        temperature: res.data.current.temperature,
        description: res.data.current.weather_descriptions[0],
        region: res.data.location.region,
        country: res.data.location.country,
        wind_speed: res.data.current.wind_speed,
        pressure: res.data.current.pressure,
        precip: res.data.current.precip,
        humidity: res.data.current.humidity,
        img: res.data.current.weather_icons
      }

      this.setState({ data: weatherData });

    })
  }
  
  render(){
  return (
    <div className="App">
      <div className="App-header" style={{backgroundImage: `url(${bgimg})`}} >
      <Container className="mcard">
       <Navbarm changeRegion={this.changeRegion} changeWeather={this.changeWeather}/>
      <Mainbody weatherData={this.state.data} changeRegion={this.changeRegion} changeLocation={this.changeLocation}  />
      </Container>
      </div>
    </div>
  );
}
}

export default App;
