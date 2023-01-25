import { BASE_URL } from "./config";
import axios from "axios";
export const apiService = axios.create({
  baseURL: BASE_URL,
});

apiService.interceptors.request.use(
  function (request) {
    // Do something before request is sent
    console.log("Request sent" + request);
    return request;
  },
  function (error) {
    // Do something with request error
    console.log("Request error" + error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
apiService.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("Response: " + response);
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("Response error: " + error);
    return Promise.reject(error);
  }
);
