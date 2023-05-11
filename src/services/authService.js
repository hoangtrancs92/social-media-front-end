import {ApiCaller} from "../utils/api/api";
import {URLS} from "../utils/api/url";

export const login = async ({}, payload) => {
    try {
        const res = await ApiCaller('user').post(URLS.USER_LOGIN(), payload);
        return res;
    } catch (error) {
        console.error(error);
    }
};
