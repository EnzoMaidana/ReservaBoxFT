import axios from 'axios'

export function getBox(){
    const box = [
        {"num": 1},
        {"num": 2},
        {"num": 3},
        {"num": 4},
        {"num": 5},
        {"num": 6},
        {"num": 7},
        {"num": 8},
        {"num": 9},
        {"num": 10},
        {"num": 11},
        {"num": 12},
        {"num": 13},
        {"num": 14}
    ]

    return function (dispatch){
    return dispatch({
        type: 'GET_BOX',
        payload: box
    })}
}