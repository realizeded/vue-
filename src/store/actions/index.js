import {CHANGE_CITY} from '../mutation-types.js';
export default {
    changeCity({commit},city)
    {
        commit(CHANGE_CITY,city);
    }
}