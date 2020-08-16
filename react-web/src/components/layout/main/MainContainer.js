import React, { Component } from 'react'
import { connect } from 'react-redux'

class MainContainer extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="card-deck mt-4" style={{ "marginBottom": "3rem", "height": "10cm" }}>
                        <div className="card">
                            <div className="card-header text-center">
                                <h5 className="card-title">{this.props.language === "ru" ? "Фронтэнд" : "Frontend"}</h5>
                            </div>
                            <div className="card-body text-center">
                                <div className='p-3'>
                                    <img src='static/react.png' />
                                    <img src='static/redux.png' />
                                    <img src='static/html.png' />
                                    <img src='static/css.png' />
                                    <img src='static/js.png' />
                                </div>
                                <p className="p-3">
                                    {this.props.language === "ru" ?
                                        'Для рарзработки фротэнда сайта я использую "HTML", "CSS", "JavaScript", "React", "Redux".' :
                                        'To develop frontend my sites i`m using "HTML", "CSS", "JavaScript", "React", "Redux".'
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header text-center">
                                <h5 className="card-title">{this.props.language === "ru" ? "Бакэнд" : "Backend"}</h5>
                            </div>
                            <div className="card-body text-center">
                                <div className='p-3'>
                                    <img src='static/python.png' />
                                    <img src='static/dj.png' />
                                </div>
                                <p className="p-3">
                                    {this.props.language === "ru" ?
                                        'Для рарзработки бакэнда сайта я использую "Python", "Django", "Rest Framework", "Flask".' :
                                        'To develop backend my sites i`m using "Python", "Django", "Rest Framework", "Flask".'
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center" style={{ "marginBottom": "5cm", "height": "10cm" }}>
                    <div className="card">
                        <div className="card-header text-center">
                            <h5 className="card-title">{this.props.language === "ru" ? "Сервер" : "Server"}</h5>
                        </div>
                        <div className="card-body text-center">
                            <div className='p-3'>
                                <img src='static/nginx.png' />
                                <img src='static/docker.png' />
                                <img src='static/heroku.png' />
                            </div>
                            <p className="p-3">
                                {this.props.language === "ru" ?
                                    'Для запуска рабочего сайта я использую "Nginx", "Gunicorn", "Docker".' :
                                    'To deplay working sites i`m using "Nginx", "Gunicorn", "Docker".'
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    language: state.properties.language
})

export default connect(mapStateToProps, null)(MainContainer)