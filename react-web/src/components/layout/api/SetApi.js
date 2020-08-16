import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

class SetApi extends Component {
    constructor(props) {
        super(props)
        this.state = {
            response: JSON.stringify({ "response": "No response" }),
            server: "http://1989d4c32ff8.ngrok.io"
        }
    }
    componentDidMount() {
        axios.get(this.state.server)
            .then(data => this.setState({ response: JSON.stringify(data.data) }))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div className="container">
                <div className="row text-center">
                    <div className='col-4' />
                    <div className="col-8">
                        <h4>{this.props.language === "en" ? "Set API" : "Создать API"}</h4>
                        <p style={{ "textIndent": "2rem" }}>
                            {this.props.language === "en" ? "By Using 'REST Framework', 'FastAPI' you can set your own API server. And then use it in a frontend. For example." : "Исплоьзуя 'REST Framework', 'FastAPI' можно создать свой собственный API сервер. И затем использовать для работы фронтэнда. Вот например."}
                        </p>
                        <p>{this.state.response}</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    language: state.properties.language
})

export default connect(mapStateToProps, null)(SetApi)