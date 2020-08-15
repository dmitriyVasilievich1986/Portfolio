import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeLanguage, getLanguage } from '../actions/mainActions'
import Avatar from '@material-ui/core/Avatar'

class Navbar extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.getLanguage()
    }
    render() {
        return (
            <nav className="navbar navbar-dark navbar-expand-sm sticky-top" style={{ "backgroundColor": "#29445f" }}>
                <div className="container">
                    <Avatar src="/static/photo.jpg" />
                    <a className="navbar-brand ml-2" href="/">
                        {this.props.language === "en" ? "Dmitriy" : "Дмитрий"}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">{this.props.language === "en" ? "Home" : "Главная"}<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/api">API<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/frontend">Frontend<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/reference">{this.props.language === "en" ? "Reference" : "Ссылки"}<span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {this.props.language === "en" ? "Language" : "Язык"}</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" onClick={e => this.props.changeLanguage("en")}>En</a>
                                <a className="dropdown-item" onClick={e => this.props.changeLanguage("ru")}> Ru</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    language: state.properties.language
})

export default connect(mapStateToProps, { changeLanguage, getLanguage })(Navbar)