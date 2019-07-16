import { handleResponse } from '../helpers/handle-response';
import { AsyncStorage } from 'react-native';

export const accessToken = '';

export const logout = () => AsyncStorage.removeItem(accessToken);

export const authenticationService = {
    login
};

async function login(email, password) {
    const requestOptions = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: email, password: password })
    };
    const host = "https://zj-dev-main.zenjob.org/zj-js-challenge";

    try {
        let handleResponse = await fetch(`${host}/api/login/`, requestOptions);
        const response = await handleResponse(handleResponse);
        const responseData = response.json();
        AsyncStorage.setItem(accessToken, responseData.accessToken);
    } catch (error) {
        return alert("An error occurred");
    }
}

export const isLoggedIn = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(accessToken)
            .then(res => {
                console.log('res:', res);
                if (res !== null) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .catch(err => alert("Something is wrong. Please check your input and try again."));
    });
};
