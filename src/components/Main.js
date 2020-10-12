import React from 'react';
import CityWeather from './CityWeather'
import Twitter from './Twitter'

class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            city: 'Sydney'
        }
    }

    // get data from children component
    callbackFunction = (childData) => {
        this.setState({
            city: childData,
        });
        // console.log(this.state.city);
    }
    

    render(){
        return <main>
            <div className="card">
                <div className="card__main">
                    {/* we can pass in a callback function to child component */}
                    <CityWeather parentCallback = {this.callbackFunction}/>
                    {/* <h1>{this.state.city}</h1> */}
                </div>
                <div className="card__details">
                    <div className="card__details_left">
                        <Twitter city={this.state.city} key={this.state.city}/>
                    </div>
                    <div className="card__details_right">
                        {/* <ForcastList/> */}
                    </div>
                </div>
            </div>
        </main>;
    }
}

export default Main;