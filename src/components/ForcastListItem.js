import React from 'react';

const ForcastListItem = (props) => {
    const { weekday, temp, icon, desc } = props.objInfo;
    // console.log(temp)
    return <>
        <h1>{weekday.toUpperCase()}</h1>
        {icon && <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon"></img>}
        {temp && <h3>{temp}&#176;</h3>}
        <p><small>{desc.toUpperCase()}</small></p>
    </>
}

export default ForcastListItem;