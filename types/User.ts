type User = {
    id: {
      value: string;
    },
    location: {
      street: {
        number: string,
        name: string
      },
      city: string,
      state: string,
      country: string,
      postcode: string
    },
    name: {
      first: string;
      last: string;
    },
    picture: {
      medium: string;
    },
    email: string,
    gender: string,
    phone: string,
    cell: string,
    nat: string
  }
  
  export default User