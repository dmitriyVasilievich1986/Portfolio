import React, { Fragment } from 'react'
import Timer from './Timer'

function Frontend() {
    return (
        <div className="list-group">
            <ul className="list-group list-group-flush">
                <Fragment>
                    <li className="list-group-item mt-3"><Timer /></li>
                </Fragment>
            </ul>
        </div>
    )
}

export default Frontend