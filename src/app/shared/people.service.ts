import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import faker from 'faker';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

@Injectable()
export class PeopleService {

  maxItem = 100;

  constructor() { }

  fetch() {
    return Observable.of(this.mock());
  }

  mock() {
    return Array.from(Array(this.maxItem).keys()).map(this.fake);
  }

  fake() {
    return {
      "email": faker.internet.email(),
      "lastname": faker.name.lastname,
      "firstname": faker.name.firstname,
      "gender": (faker.random.number()%2===0)?"male":"female",
      //"photo": `https://randomuser.me/portraits/${(faker.random.number()%2===0)?"men":"women"}/${(Math.random()*10|0)}.jpg`,
      // "photo": faker.image.people(),
      "photo": "assets/images/profile.svg",
      "id": faker.random.uuid,
      "twitter": faker.internet.userName(),
      "slack": faker.internet.userName(),
      "github": faker.internet.userName(),
      "linkedin": faker.internet.userName(),
      "url": faker.internet.url(),
      "contactInfoPro": {
        "mail": faker.internet.email(),
        "fixedPhone": faker.phone.phoneNumber(),
        "mobilePhone": faker.phone.phoneNumber(),
        "street": faker.address.streetName,
        "postalCode": faker.address.zipCode,
        "city": faker.address.city
      },
      "functionName": faker.name.jobTitle(),
      "entity": faker.company.companyName(),
      "workcity": faker.address.city,
      "manager": faker.name.findName(),
      "department": faker.commerce.department(),
      "skills": faker.random.words,
      "entryDate": faker.date.past,
      "birthDate": faker.date.past
    };
  }
}