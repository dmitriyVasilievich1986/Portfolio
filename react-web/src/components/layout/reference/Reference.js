import React, { Component } from 'react'
import { connect } from 'react-redux'

class Reference extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: "http://my-dj-docker.herokuapp.com",
            musicApp: "http://project-music-app.herokuapp.com",
            gitHub: "https://github.com/dmitriyVasilievich1986?tab=repositories"
        }
    }
    render() {
        return (
            <div className="container mt-4" style={{ "marginBottom": "3cm" }}>
                <div className="card-body">
                    <h1 className="text-center">{this.props.language === "en" ? "Links to my other work:" : "Ссылки на мои работы:"}</h1>
                </div>
                <div className="card mt-4">
                    <div className="card-header text-center">
                        <h5 className="card-title">{this.props.language === "en" ? "Other sites:" : "Мои сайты:"}</h5>
                    </div>
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <h6 className="card-subtitle mb-2 text-muted">{this.props.language === "en" ? "Todo" : "Список дел"}</h6>
                                <p className="card-text">
                                    {this.props.language === "en" ? "Site to make up your own todo list. List stay preserved on server." : "Сайт для составления своего списка дел. Данные списка хранятся на сервере сайта."}
                                </p>
                                <a href={this.state.todo} className="card-link">{this.props.language === "en" ? "Todo" : "Список дел"}</a>
                            </li>
                            <li className="list-group-item">
                                <h6 className="card-subtitle mb-2 text-muted">{this.props.language === "en" ? "Audio player" : "Аудио плеер"}</h6>
                                <p className="card-text">
                                    {this.props.language === "en" ? "Site with audio player." : "Сайт для проигрывания аудио файлов."}
                                </p>
                                <a href={this.state.musicApp} className="card-link">{this.props.language === "en" ? "Audio player" : "Аудио плеер"}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card mt-4">
                    <div className="card-header text-center">
                        <h5 className="card-title">{this.props.language === "en" ? "GitHub link:" : "Ссылка на GitHub:"}</h5>
                    </div>
                    <div className="card-body">
                        <a href={this.state.gitHub} className="card-link">GitHub</a>
                    </div>
                </div>
                <div className="card mt-4">
                    <div className="card-header text-center">
                        <h5 className="card-title">{this.props.language === "en" ? "Email:" : "Электронная почта:"}</h5>
                    </div>
                    <div className="card-body">
                        <p className="card-text">dmitriyvasil@gmail.com</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    language: state.properties.language
})

export default connect(mapStateToProps, null)(Reference)