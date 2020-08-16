import { CHANGE_LANGUAGE, GET_PROPERTIES } from './types'
import axios from 'axios'

export const changeLanguage = (newLanguage) => dispatch => {
    const data = {
        language: newLanguage
    }
    axios.put('/api/properties/1/', data)
        .then(data => dispatch({
            type: CHANGE_LANGUAGE,
            payload: data.data.language
        }))
        .catch(err => console.log(err))
}

export const getLanguage = () => dispatch => {
    axios.get('/api/properties')
        .then(data => dispatch({
            type: GET_PROPERTIES,
            payload: data.data[0].language
        }))
        .catch(err => console.log(err))

}