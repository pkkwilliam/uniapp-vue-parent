const MOCK = true;

export async function execute(service) {
  const { hasMock, method, mockResponse, url } = service;
  if (MOCK) {
    return mockResponse;
  }
  const serviceResponse = await fetch(url, {
    method,
  });
  const response = getResult(serviceResponse);
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
    return;
  }
}
