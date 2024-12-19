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
];
