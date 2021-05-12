import {
  GET_CATEGORIES_MOCK_RESPONSE,
  GET_EVENTS_MOCK_RESPONSE,
  GET_ITEMS_MOCK_RESPONSE,
} from "./mockServiceResponse";

export const GET_CATEGORIES = () => ({
  hasMock: true,
  method: "GET",
  mockResponse: GET_CATEGORIES_MOCK_RESPONSE,
  url: "/getCategories",
});

export const GET_EVENTS = () => ({
  hasMock: true,
  method: "GET",
  mockResponse: GET_EVENTS_MOCK_RESPONSE,
  url: "/getEvents",
});

export const GET_ITEMS = (category, pageNumber) => ({
  hasMock: true,
  method: "GET",
  mockResponse: GET_ITEMS_MOCK_RESPONSE,
  url: `/getItems?category${category}`,
});
