import * as actionTypes from '../constants/userinfo'

export function reducer(state={},action)
{
    switch(action.type){
        case actionTypes.USER_UPDATE:
            console.log('actionTypes.USER_UPDATE==',action)
            return action.data
        default:
            console.log('actionTypes.default==',action)
            return state
    }
}

