import {CHANGE_CITY} from '../mutation-types.js';
export default {
    [CHANGE_CITY](state,city) {
        state.city = city;
        try {
            localStorage.setItem('city',city);
        }catch(e) {

        }
    }
}