import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/currentUser", () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json({
      id: 1,
      name: "John Cena",
      username: "john.cena",
      email: "john@email.com",
      password: "test",
      dob: "19/10/90",
      presentAddress: "House 123",
      permanentAddress: "House 234",
      city: "Newyork",
      postal: "40120",
      country: "Canada",
      role: "CEO",
      imageUrl: "/assets/current_user.jpg",
    });
  }),
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
  http.get("/users", () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json([
      {
        id: 1,
        name: "John Cena",
        role: "CEO",
        imageUrl: "/assets/user1.jpg",
      },
      {
        id: 2,
        name: "Michel John",
        role: "Designer",
        imageUrl: "/assets/user2.jpg",
      },
      {
        id: 3,
        name: "Livia Bator",
        role: "Engineer",
        imageUrl: "/assets/user3.jpg",
      },
      {
        id: 4,
        name: "Eddy Bob",
        role: "Director",
        imageUrl: "/assets/user4.jpg",
      },
      {
        id: 5,
        name: "Sofie Jim",
        role: "CTO",
        imageUrl: "/assets/user5.jpg",
      },
    ]);
  }),
];
