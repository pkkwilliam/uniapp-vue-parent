const PUBLIC_REQUEST_ITEM = "/public/item/v1";
const BUYER = "/user/item/buy/v1";
const SELLER = "/user/item/sell/v1";
const USER_ADDRESS = "/user/address/v1";

// Address
export const ADD_ADDRESS = (address) => ({
  body: JSON.stringify(address),
  hasMock: false,
  method: "POST",
  url: `${USER_ADDRESS}`,
});

export const DELETE_ADDRESS = (address) => ({
  body: JSON.stringify(address),
  hasMock: false,
  method: "DELETE",
  url: `${USER_ADDRESS}`,
});

export const GET_ADDRESS_ALL = () => ({
  hasMock: false,
  method: "GET",
  url: `${USER_ADDRESS}/all`,
});

export const UPDATE_ADDRESS = (address) => ({
  body: JSON.stringify(address),
  hasMock: false,
  method: "PUT",
  url: `${USER_ADDRESS}`,
});

// Auth
export const SMS_REQUEST_VERIFICATION = (body) => ({
  body: JSON.stringify(body),
  hasMock: true,
  method: "POST",
  url: "/login/sms/request_verification",
});

export const SMS_VERIFY = (body) => ({
  body: JSON.stringify(body),
  hasMock: false,
  method: "POST",
  url: "/login/sms/verify",
});

// Category
export const GET_CATEGORIES = () => ({
  hasMock: false,
  method: "GET",
  url: "/getCategories",
});

// Event
export const GET_EVENTS = () => ({
  hasMock: false,
  method: "GET",
  url: "/getEvents",
});

// Item
export const GET_ITEM = (itemId) => ({
  hasMock: false,
  method: "GET",
  url: `?itemId=${itemId}`,
});

export const GET_ITEMS = (pageRequest) => ({
  hasMock: false,
  method: "GET",
  url: `${PUBLIC_REQUEST_ITEM}/get_items?pageRequest=${pageRequest}`,
});

// User Profile

export const GET_USER_PROFILE = () => ({
  hasMock: false,
  method: "GET",
  url: "/api/v1/user_profile",
});
