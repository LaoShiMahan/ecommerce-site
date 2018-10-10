import {
    SET_HEADER_LINKS,
    SET_NAV_BAR_LINKS
} from '../actions/types';

const INITIAL_STATE = {
    headerLinks: [
        {
            title: "This is a link"
        },
        {
            title: "Here is another sample link"
        }
    ],
    navBarLinks: [
        {
            title: "Account",
            active: true
        },
        {
            title: "Purchases",
            active: false
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