import {AsyncStorage} from "react-native";
import {accessToken} from "./authentication.service";

export const jobsService = {
    getAll
};

async function getAll() {
    const accessToken = AsyncStorage.getItem(accessToken);
    const host = "https://zj-dev-main.zenjob.org/zj-js-challenge";
    const requestOptions = {
        method: "GET",
        headers: {
            Authorization: "Bearer " + accessToken
        }
    };
    try {
        const response = await fetch(`${host}/api/offers/`, requestOptions);
        const responseData = await response.json();
        return responseData.offers;
    }
    catch (error) {
        return alert("An error occurred");
    }
}
