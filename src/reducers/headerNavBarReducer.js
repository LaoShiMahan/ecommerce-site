import {
    SET_HEADER_LINKS,
    SET_NAV_BAR_LINKS
} from '../actions/types';

const INITIAL_STATE = {
    headerLinks: [],
    navBarLinks: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_HEADER_LINKS:
            return {
                ...state,
                headerLinks: action.payload
            };
        case SET_NAV_BAR_LINKS:
            return {
                ...state,
                navBarLinks: action.payload
            };
        default:
            return state;
    }
}