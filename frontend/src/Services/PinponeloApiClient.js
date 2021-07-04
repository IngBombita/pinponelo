import AxiosHttpClient from "./AxiosHttpClient";

export default class PinponeloApiClient {
    constructor() {
        this.client = new AxiosHttpClient();
    }

    register = ({email, password, username}) => {
        return this.client.post('/register', {email, password})
    };
}