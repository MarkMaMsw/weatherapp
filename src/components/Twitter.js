import React from 'react';

class Twitter extends React.Component{
    constructor(props){
        super();
        this.state = {
            city: props.city,
        }
    }

    componentDidMount(){
        console.log(this.state.city);
    }

    render(){
        return (<>{this.state.city}</>);
    }
}

export default Twitter;