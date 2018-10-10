import {
    SET_HEADER_LINKS,
    SET_NAV_BAR_LINKS
} from './types';

export function setHeaderLinks(links) {
    return ({
        type: SET_HEADER_LINKS,
        payload: links
    });
}

export function setNavBarLinks(links) {
    return ({
        type: SET_NAV_BAR_LINKS,
        payload: links
    });
}