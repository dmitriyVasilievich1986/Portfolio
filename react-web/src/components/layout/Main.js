import React, { Component } from 'react'
import { connect } from 'react-redux'

class Main extends Component {
    render() {
        return (
            <div>
                <img src="/static/cover.png" style={{ "width": "100%" }} />
                <h1 className="text-center mt-3">{this.props.language === "en" ? "Hello, my name is Dmitriy" : "Привет, меня зовут Дмитрий"}</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    language: state.properties.language
})

export default connect(mapStateToProps, null)(Main)