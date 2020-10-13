import React from 'react';
// import Twit from 'twit';
// import Twitter from 'twitter-lite';

class TwitterFeed extends React.Component{
    constructor(props){
        super();
        this.state = {
            city: props.city,
            consumer_key:         "r5Yg752dseMKPX9OoyRN7yBCa",
            consumer_secret:      "1UwJV0aYLppiOZwClUgCZmB1zaR1OXyRLO9d9Bwu0399Jp29nW",
            timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
            strictSSL:            true,
            bearer_token: "AAAAAAAAAAAAAAAAAAAAAANIIgEAAAAAiH%2FDd8VislVVVOF1P7caTkeRt0c%3DaoauDUuYU77LUdTEDmJUBHybHLgD6GG9LSE3XX15CYLZ7x3gho",
            access_token: "1099850812166045696-sXsyhWzry9roOWzplEO5eLJAEFAm4N",
            access_token_secret: "tlEJqLeGtNuCnLzTrPFRzL1VWdbmeVeJC4mknSncy9vVn",
        }
    }

    componentDidMount(){
        // console.log(this.state.city);
        // const client = new Twitter({
        //     consumer_key: "r5Yg752dseMKPX9OoyRN7yBCa",
        //     consumer_secret: "1UwJV0aYLppiOZwClUgCZmB1zaR1OXyRLO9d9Bwu0399Jp29nW"
        // });
        // const app = new Twitter({
        //     bearer_token: this.state.bearer_token
        // });
        // const T = new Twit({
        //     access_token: '1099850812166045696-UdLEAuqsKDzfyVZSYDmpf82Hvv1crD',
        //     access_token_secret: 'HccYYFlzNdV3dI5GweQXXHp4aXghrjKaJN08jywHvVfJV',
        //     timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all requests.
        //     strictSSL: true,
        // });
        // T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
        //     console.log(data);
        // })
    }

    render(){
        return (<></>);
    }
}

export default TwitterFeed;