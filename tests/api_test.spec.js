import {test,expect} from '@playwright/test';
var session_id;
test.describe.configure({mode:'parallel'});
test('API_Get' , async({request})=>{
const response = await request.get('http://rahulshettyacademy.com/maps/api/place/get/json?key=qaclick123&place_id=bb99b59fa33221dce964889a3f173887');
console.log(await response.json());
expect (response.status()).toBe(200);

});

test('API_Post', async ({ request }) => {
  const response = await request.post(
    'https://rahulshettyacademy.com/maps/api/place/add/json',
    {
      params: {
        key: 'qaclick123'
      },
      data: {
        location: {
          lat: -38.383494,
          lng: 33.427362
        },
        accuracy: 50,
        name: 'Frontline house',
        phone_number: '(+91) 983 893 3937',
        address: '29, side layout, cohen 09',
        types: ['shoe park', 'shop'],
        website: 'http://google.com',
        language: 'French-IN'
      },
      data: {
        location: {
          lat: -38.383494,
          lng: 33.427362
        },
        accuracy: 50,
        name: 'Dream house',
        phone_number: '(+91) 9871559448',
        address: '29, side layout, cohen 09',
        types: ['shoe park', 'shop'],
        website: 'http://google.com',
        language: 'English-IN'
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  console.log(await response.json()); // safer than .body()
  expect(response.status()).toBe(200);
  var id = await response.json();
session_id = id.place_id;

});

test('API_Put', async ({ request }) => {
  const response = await request.post(
    'https://rahulshettyacademy.com/maps/api/place/add/json',
    {
      params: {
        key: 'qaclick123',
        place_id: 'session_id'
      },
      data: {
        location: {
          lat: -38.383494,
          lng: 33.427362
        },
        accuracy: 50,
        name: 'My house',
        phone_number: '(+91) 983 893 3937',
        address: '29, side layout, cohen 09',
        types: ['shoe park', 'shop'],
        website: 'http://google.com',
        language: 'French-IN'
      },
      data: {
        location: {
          lat: -38.383494,
          lng: 33.427362
        },
        accuracy: 50,
        name: 'Dream house',
        phone_number: '(+91) 9871559448',
        address: '29, Civil Lines, Bunglow 09',
        types: ['shoe park', 'shop'],
        website: 'http://google.com',
        language: 'English-IN'
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  console.log(await response.json()); // safer than .body()
  expect(response.status()).toBe(200);
 // var id = await response.json();
//place_id = id.place_id;

});

test('API_Delete', async ({ request }) => {
  const response = await request.delete(
    'https://rahulshettyacademy.com/maps/api/place/delete/json',
    {
      params: { key: 'qaclick123' },
      data: {
        place_id: session_id
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  console.log(await response.json());
  expect(response.status()).toBe(200);
});