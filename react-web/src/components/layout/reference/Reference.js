import React, { Component } from 'react'
import { connect } from 'react-redux'

class Reference extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: "http://my-dj-docker.herokuapp.com",
            gitHub: "https://github.com/dmitriyVasilievich1986?tab=repositories"
        }
    }
    render() {
        return (
            <div className="container mt-4">
                <div class="card mt-4">
                    <div class="card-body">
                        <h1 className="text-center">{this.props.language === "en" ? "Links:" : "Ссылки:"}</h1>
                    </div>
                </div>
                <div class="card mt-4">
                    <div class="card-body">
                        <h5 class="card-title">{this.props.language === "en" ? "Other sites:" : "Мои сайты:"}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{this.props.language === "en" ? "Todo" : "Список дел"}</h6>
                        <p class="card-text">
                            {this.props.language === "en" ? "Site to make up your own todo list. List stay preserved on server." : "Сайт для составления своего списка дел. Данные списка хранятся на сервере сайта."}
                        </p>
                        <a href={this.state.todo} class="card-link">{this.props.language === "en" ? "Todo" : "Список дел"}</a>
                    </div>
                </div>
                <div class="card mt-4">
                    <div class="card-body">
                        <h5 class="card-title">{this.props.language === "en" ? "GitHub link:" : "Ссылка на GitHub:"}</h5>
                        <a href={this.state.gitHub} class="card-link">GitHub</a>
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