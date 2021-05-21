const MOCK = true;
const LOCAL_DEVELOP = true;
const BASE_URL = LOCAL_DEVELOP
  ? "http://localhost:8083"
  : "http://localhost:8083";

export async function execute(service, userToken, saveUserToken) {
  const { body, hasMock, method, mockResponse, url } = service;

  if (MOCK && hasMock) {
    return;
  }

  const serviceResponse = await fetch(BASE_URL + url, {
    body,
    headers: getHeaders({}, userToken),
    method,
  });
  const response = getResult(serviceResponse);
  processHeader(serviceResponse, saveUserToken);
  return response;
}

async function getResult(response) {
  const { status } = response;
  if (status === 200) {
    const jsonResponse = await response.json();
    return jsonResponse;
  } else if (status === 202 || status === 204) {
    return;
  } else {
    // TODO get service errorCode and return message in json
    return Promise.reject();
  }
}

function getHeaders(headers, userToken) {
  headers = {
    "Content-Type": "application/json",
  };
  if (userToken) {
    headers = {
      ...headers,
      Authorization: "Bearer " + userToken,
    };
  }

  return headers;
}

function processHeader(response, saveUserToken) {
  const { headers } = response;
  const token = headers.get("Authorization");
  if (token) {
    saveUserToken(token);
  }
}
