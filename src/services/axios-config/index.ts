import axios from "axios";
import { errorInterceptor } from "./interceptors/Errorinterceptor";
import { responseinterceptor } from "./interceptors/Responseinterceptor";

const Api = axios.create({
    baseURL: "https://cadastro-pessoas-fake-api.herokuapp.com/person"
});

Api.interceptors.response.use(
    (response) => responseinterceptor(response),
    (error) => errorInterceptor(error),
);

export { Api };