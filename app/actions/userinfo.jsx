import * as actionTypes from '../constants/userinfo'

export function update(data){
    return{
        type:actionTypes.USER_UPDATE,
        data
    }
}