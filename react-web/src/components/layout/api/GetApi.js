import React, { Component } from 'react'
import axios from 'axios'

export default class GetApi extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city: "Moscow",
            temperature: 30,
            weather: "http://openweathermap.org/img/wn/10d@2x.png",
            apikey: "f70cab3c5a01bf814360b55b092a0057"
        }
    }
    componentDidMount() {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${this.state.apikey}&units=metric`)
            .then(data => {
                const newData = data.data
                this.setState({
                    temperature: parseInt(newData.main.temp),
                    weather: `http://openweathermap.org/img/wn/${newData.weather[0].icon}@2x.png`
                })
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div className="container">
                <div className="row text-center">
                    <div className="col-8">
                        <h4>Getting API</h4>
                        <p style={{ "textIndent": "2rem" }}>By using "Axios", "Fetch" or "Python requests" you can get data from server.
                                You can use received data, for example, to make weather application.</p>
                        <div className="d-inline-flex">
                            <img src={this.state.weather} />
                            <h5 className="p-3 mt-3">{this.state.city}: {this.state.temperature}</h5>
                        </div>
                        <div className='col-4' />
                    </div>
                </div>
            </div>
        )
    }
}
