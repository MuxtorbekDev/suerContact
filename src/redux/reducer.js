const initialState = [
  {
    id: 0,
    name: "Odilov Jasur",
    email: "tesemailt@test.com",
    phone: 4567891230,
    date: "2021-02-02",
    city: "Qarshi",
    perman: true,
  },
  {
    id: 1,
    name: "Boburov Anvar",
    email: "ematopil@email.com",
    phone: 12345267890,
    date: "2022-02-02",
    city: "pune",
    perman: true,
  },
  {
    id: 2,
    name: "Test Name",
    email: "test@test.com",
    phone: 4567891230,
    date: "2021-02-02",
    city: "Qarshi",
    perman: true,
  },
  {
    id: 3,
    name: "ism zur",
    email: "testtest@test.com",
    phone: 4567891230,
    date: "2021-02-02",
    city: "Qarshi",
    perman: true,
  },
];

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "DELETE_CONTACT":
      const contactFilter = state.filter((contact) =>
        contact.id === action.payload ? null : contact
      );
      state = contactFilter;
      return state;
    case "UPDATE_CONTACT":
      const contactUpdate = state.filter((contact) =>
        contact.id === action.payload.id
          ? Object.assign(contact, action.payload)
          : contact
      );
      state = contactUpdate;
      return state;
    case "RESET_CONTACT":
      state = [{ name: null, email: null, phone: null }];
      return state;
    default:
      return state;
  }
};
