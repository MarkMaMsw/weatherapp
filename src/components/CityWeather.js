import React from 'react';
import Axios from 'axios';

class CityWeather extends React.Component{
    constructor(){
        super();
        this.state = {
            cities: ['Sydney', 'Paris', 'Shanghai', 'London', 'Beijing'],
            city: 'Sydney',
            mainWeather: '',
            iconWeather: '',
            temp: '',
            wind: '',
            humity: '',
            isloading: true,
        }
        this.getWeather = this.getWeather.bind(this);
    }

    sendData = (cityname) => {
        this.props.parentCallback(cityname);
    }

    // async function to get weather information
    async getWeather(cityname) {
        const api = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=744121095dafc332ca757ac48bffe015`;
        const { data } = await Axios.get(api);
        const mainWeather = data.weather[0].main;
        const iconWeather = data.weather[0].icon;
        const temp = data.main.temp;
        const wind = data.wind.speed;
        const humity = data.main.humidity;
        // const city = data.name;
        this.setState({
            mainWeather,
            iconWeather,
            temp,
            wind,
            humity,
        });
        // console.log(mainWeather, iconWeather, temp, wind, humity, city);
        // console.log(this.state.mainWeather);
    }

    componentDidMount(){
        this.getWeather(this.state.city);
        this.sendData(this.state.city);
    }

    // handle change of the city select
    cityOnchange = (e) => {
        this.setState({
            city: e.target.value, 
        });
        this.getWeather(e.target.value);
        this.sendData(e.target.value);
    }

    render(){
        return <>
        <div className="card__main__left">
            <div className="card__main__lefttop">
                <h1>{this.state.temp}&#176;</h1>
                <img src={`http://openweathermap.org/img/wn/${this.state.iconWeather}@2x.png`} alt="weather icon"></img>
                <h3>{this.state.mainWeather}</h3>
            </div>
            <div className="card__main__leftbottom">
                <ul>
                    <li>
                        <h6>HUMIDITY</h6>
                        <h6>{this.state.humity}%</h6>
                    </li>
                    <li><div></div></li>
                    <li>
                        <h6>WIND</h6>
                        <h6>{this.state.wind} K/M</h6>
                    </li>
                </ul>
            </div>
        </div>
        <div className="card__main__right">
            <div className="card__main__right__cityselect">
                <select name="cities" onChange={this.cityOnchange}>
                    {this.state.cities.map((c) => <option value={c} key={c}>{c}</option>)}
                </select>
            </div>
            {/* <h1>{this.state.city}!!</h1> */}
        </div>
        </>;
    }
}

export default CityWeather;