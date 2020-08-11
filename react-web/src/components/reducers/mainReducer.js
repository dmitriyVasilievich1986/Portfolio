import { GET_PROPERTIES, CHANGE_LANGUAGE } from '../actions/types'
import axios from 'axios'

const initState = {
    language: "en"
}

export default function (state = initState, action) {
    switch (action.type) {
        case GET_PROPERTIES:
        case CHANGE_LANGUAGE:
            return {
                state,
                language: action.payload
            }
        default:
            return state
    }
}