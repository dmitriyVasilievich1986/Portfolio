import React, { Component, Fragment } from 'react'
import GetApi from './GetApi'
import SetApi from './SetApi'

function Api() {
    return (
        <div className="list-group">
            <ul className="list-group list-group-flush">
                <Fragment>
                    <li className="list-group-item mt-3"><GetApi /></li>
                    <li className="list-group-item mt-3"><SetApi /></li>
                </Fragment>
            </ul>
        </div>
    )
}

export default Api