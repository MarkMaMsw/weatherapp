import React from 'react';
import ForcastListItem from './ForcastListItem';
import Axios from 'axios';
import moment from 'moment';

class ForcastList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            city: props.cityname,
            Following_days: [
                {
                    weekday: '',
                    temp: '',
                    icon: '',
                    desc: '',
                },
                {
                    weekday: '',
                    temp: '',
                    icon: '',
                    desc: '',
                },
                {
                    weekday: '',
                    temp: '',
                    icon: '',
                    desc: '',
                },
                {
                    weekday: '',
                    temp: '',
                    icon: '',
                    desc: '',
                },
                {
                    weekday: '',
                    temp: '',
                    icon: '',
                    desc: '',
                },
            ],
        }
    }

    async getForcast(cityname){
        // first call can get the location of city
        const api = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=744121095dafc332ca757ac48bffe015`;
        const { data } = await Axios.get(api);
        const { lat, lon } = data.coord
        // second call get forcast data in 7days
        const forcastApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=744121095dafc332ca757ac48bffe015`
        const respone = await Axios.get(forcastApi);
        // generate array
        const forcastArray = [];
        for (let i=1; i<6; i++){
            forcastArray.push({   
                weekday: moment.unix(respone.data.daily[i].dt).format("ddd"),
                temp: respone.data.daily[i].temp.day,
                icon: respone.data.daily[i].weather[0].icon,
                desc: respone.data.daily[i].weather[0].description,
            });
        }
        console.log(forcastArray);
        // set the state then
        this.setState({
            Following_days: [...forcastArray],
        });
    }

    componentDidMount(){
        this.getForcast(this.state.city);
    }

    render(){
        return <>
        <ul>
            {this.state.Following_days.map((obj) => <li><ForcastListItem objInfo={obj}/></li>)}
        </ul>
        </>;
    }
}

export default ForcastList;