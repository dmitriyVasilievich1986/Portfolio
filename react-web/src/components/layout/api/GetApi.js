import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

class GetApi extends Component {
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
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=${this.state.apikey}&units=metric`)
            .then(data =>
                this.setState({
                    temperature: parseInt(data.data.main.temp),
                    weather: `http://openweathermap.org/img/wn/${data.data.weather[0].icon}@2x.png`
                }))
    }
    render() {
        return (
            < div className="container" >
                <div className="row text-center">
                    <div className="col-8">
                        <h4>{this.props.language === "en" ? "Getting API" : "Получение ответа от API"}</h4>
                        <p style={{ "textIndent": "2rem" }}>
                            {this.props.language === "en" ?
                                "By using 'Axios', 'Fetch' or 'Python requests' you can get data from server.You can use received data, for example, to make weather application." :
                                "Использую 'Axios', 'Fetch' or 'Python requests' можно получать данные с сервера. Вы можеете использовать полученные данные, например чтобы сделать приложение для отсдеживания погоды."}</p>
                        <div className="d-inline-flex">
                            <img src={this.state.weather} />
                            <h5 className="p-3 mt-3">{this.props.language === "en" ? "Moscow" : "Москва"}: {this.state.temperature}</h5>
                        </div>
                        <div className='col-4' />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    language: state.properties.language
})

export default connect(mapStateToProps, null)(GetApi)