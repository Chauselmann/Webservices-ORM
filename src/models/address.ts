export interface AddressSchema {
  street: string;

  suite: string;

  city: string;

  zipcode: string;

  geo: {lat: string; lng: string};
}

class Address {
  street: string;

  suite: string;

  city: string;

  zipcode: string;

  geo: {lat: string; lng: string};

  constructor(
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string;
      lng: string;
    },
  ) {
    this.street = street;
    this.suite = suite;
    this.city = city;
    this.zipcode = zipcode;
    this.geo = geo;
  }
}

export default Address;
