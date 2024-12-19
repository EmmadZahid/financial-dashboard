import { http, HttpResponse } from "msw";

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get("/recentTransactions", () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json([
      {
        id: 1,
        type: "card",
        amount: "-850",
      },
      {
        id: 2,
        type: "paypal",
        amount: "2500",
      },
      {
        id: 3,
        type: "dollar",
        amount: "3000",
      },
    ]);
  }),
  http.get("/cards", () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json([
      {
        id: 1,
        type: "platinum",
        amount: "5,123",
        cardNo: "1234567812345678",
        name: "John Cena",
        validity: "10/23",
      },
      {
        id: 2,
        type: "basic",
        amount: "2,500",
        cardNo: "1234567812345678",
        name: "Michel John",
        validity: "10/23",
      },
      {
        id: 3,
        type: "platinum",
        amount: "3,000",
        cardNo: "1234567812345678",
        name: "Eddy Bob",
        validity: "10/23",
      },
      {
        id: 4,
        type: "platinum",
        amount: "3,000",
        cardNo: "1234567812345678",
        name: "Eddy Bob",
        validity: "10/23",
      },
      {
        id: 5,
        type: "basic",
        amount: "3,000",
        cardNo: "1234567812345678",
        name: "Eddy Bob",
        validity: "10/23",
      },
    ]);
  }),
];
