import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import MainContainer from './main/MainContainer'

class Main extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <img src="/static/cover.png" style={{ "width": "100%", "paddingBottom": "3cm" }} />
                    <h1 className="text-center pt-4 pb-4">{this.props.language === "en" ? "Hello, my name is Dmitriy" : "Привет, меня зовут Дмитрий"}</h1>
                </div>
                <div>
                    <MainContainer />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    language: state.properties.language
})

export default connect(mapStateToProps, null)(Main)