import {
    SET_HEADER_LINKS,
    SET_NAV_BAR_LINKS
} from '../actions/types';

const INITIAL_STATE = {
    headerLinks: [
        {
            title: "Hey"
        },
        {
            title: "Yo"
        }
    ],
    navBarLinks: [
        {
            title: "Account"
        },
        {
            title: "Purchases"
        }
    ]
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_HEADER_LINKS:
            return {
                ...state,
                
            };
        case SET_NAV_BAR_LINKS:
            return {
                ...state,

            };
        default:
            return state;
    }
}