import React, { Component } from 'react'
import { connect } from 'react-redux'

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 0,
            timer: "00:00:00",
            text: "Start",
            textRu: "Старт",
            timerOn: false
        }
        this.onClick = this.onClick.bind(this)
        this.tick = this.tick.bind(this)
        this.clear = this.clear.bind(this)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    tick() {
        const time = this.state.time + 1
        const addZero = num => {
            return num.toString().padStart(2, "0")
        }
        const h = parseInt(time / 3600)
        const m = parseInt((time - h * 3600) / 60)
        const s = parseInt(time - h * 3600 - m * 60)
        this.setState({ time: time, timer: `${addZero(h)}:${addZero(m)}:${addZero(s)}` })
    }
    onClick(e) {
        e.preventDefault()
        if (this.state.text === "Start") {
            this.setState({ text: "Pause", textRu: "Пауза" })
            this.interval = setInterval(e => this.tick(), 1000)
        } else {
            this.setState({ text: "Start", textRu: "Старт" })
            clearInterval(this.interval)
        }
    }
    clear(e) {
        clearInterval(this.interval)
        this.setState({ text: "Start", textRu: "Старт", time: 0, timer: "00:00:00" })
    }
    render() {
        return (
            <div className="container">
                <div className="row text-center">
                    <div className="col-8">
                        <h4>React</h4>
                        <p style={{ "textIndent": "2rem" }}>
                            {this.props.language === "en" ? "By using 'JavaScript', 'React' you can change your frontend appearance. To make for example timer." : "Используя 'JavaScript', 'React' вы можете изменять внешний вид страницы сайта. Можно, например, сделать таймер."}
                        </p>
                        <h3>{this.state.timer}</h3>
                        <div className="btn-group btn-group-sm" role="group">
                            <button onClick={this.onClick} className="btn btn-primary">{this.props.language === "en" ? this.state.text : this.state.textRu}</button>
                            <button onClick={this.clear} className="btn btn-danger">{this.props.language === "en" ? "Clear" : "Сброс"}</button>
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

export default connect(mapStateToProps, null)(Timer)