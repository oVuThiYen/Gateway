import axios from "axios";

const request = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    Accept: "application/json",
  },
});

function handleErrorResponse({ error: any }) {
  // switch (status) {
  //   default:
  //     break;
  // }
  console.log(error);
}

// function getToken() {
//   return localStorage.getItem(authConstant.tokenName);
// }

request.interceptors.request.use((config) => {
  // const token = getToken();
  return {
    ...config,
    headers: {
      ...config.headers,
      // Authorization: `${token}`,
    },
  };
});

request.interceptors.response.use(
  (response) => response.data,
  (error) => {
    handleErrorResponse({ error });
    return Promise.reject(error.response);
  }
);

export { request };
