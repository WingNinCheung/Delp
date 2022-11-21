"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = "Businesses";
    return queryInterface.bulkInsert(
      options,
      [
        {
          ownerId: 2,
          title: "Marufuku Ramen",
          imageUrl:
            "https://s3-media0.fl.yelpcdn.com/bphoto/MiTqphg_7eOhE4sMFh-_ZA/o.jpg",
          description: "Raman",
          address: "1581 Webster St",
          city: "San Francisco",
          state: "California",
          zipCode: 94115,
          lat: 37.78532,
          lng: -122.431389,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 3,
          title: "Unco Frank’s",
          imageUrl:
            "https://s3-media0.fl.yelpcdn.com/bphoto/3927FOHX4WgG9omqYlruHg/o.jpg",
          description: "Hawaiian",
          address: "443 Clement St",
          city: "San Francisco",
          state: "California",
          zipCode: 94118,
          lat: 37.78295,
          lng: -122.46381,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 4,
          title: "Mokuku",
          imageUrl:
            "https://s3-media0.fl.yelpcdn.com/bphoto/oitBIcssyUHEbmVecyNMyQ/o.jpg",
          description: "Shabu Shabu, Japanese",
          address: "332 Clement St",
          city: "San Francisco",
          state: "California",
          zipCode: 94103,
          lat: 37.78326,
          lng: -122.46292,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 5,
          title: "Daeho Kalbijjim & Beef Soup",
          imageUrl:
            "https://s3-media0.fl.yelpcdn.com/bphoto/C8VO_nCsvl9ld5Z_wE43Fg/o.jpg",
          description: "Korean, Soup, Noodles",
          address: "1620 Post St",
          city: "San Francisco",
          state: "California",
          zipCode: 94115,
          lat: 37.78575,
          lng: -122.42852,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 6,
          title: "Szechuan Cuisine",
          imageUrl:
            "https://www.chengduhouserent.com/wp-content/uploads/2018/10/hot.jpg",
          description: "Szechuan, Chinese",
          address: "1920 Irving St",
          city: "San Francisco",
          state: "California",
          zipCode: 94112,
          lat: 37.390644,
          lng: -122.024033,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 7,
          title: "The Italian Homemade Company",
          imageUrl:
            "https://s3-media0.fl.yelpcdn.com/bphoto/_qcdK6AaYatHTLiNNeO69Q/o.jpg",
          description: "Italian, Pasta",
          address: "1919 Union St",
          city: "San Francisco",
          state: "California",
          zipCode: 94123,
          lat: 37.79765,
          lng: -122.43101,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 8,
          title: "Boba Binge",
          imageUrl:
            "https://s3-media0.fl.yelpcdn.com/bphoto/2pXioWW0Vjx59dl3s2nF0Q/o.jpg",
          description: "Bubble Tea",
          address: "1004 Webster St",
          city: "Oakland",
          state: "California",
          zipCode: 94607,
          lat: 37.80079,
          lng: -122.2704,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 9,
          title: "Fu Niu Tang Noodle Talk",
          imageUrl:
            "https://s3-media0.fl.yelpcdn.com/bphoto/iYzmpYkCvc8tw2Nn91Y5Hg/o.jpg",
          description: "Chinese Noodles",
          address: "711 Saratoga Rd",
          city: "Sunnyvale",
          state: "California",
          zipCode: 94087,
          lat: 37.37188,
          lng: -122.03749,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 10,
          title: "Moku Yakitori-Ya",
          imageUrl:
            "https://s3-media0.fl.yelpcdn.com/bphoto/azQ4QjD3_5rtRav7pP02eA/o.jpg",
          description: "Izakaya, Japanese",
          address: "312 8th Ave",
          city: "San Francisco",
          state: "California",
          zipCode: 94118,
          lat: 37.7826,
          lng: -122.46654,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 3,
          title: "Dumpling Kitchen",
          imageUrl:
            "https://s3-media0.fl.yelpcdn.com/bphoto/yLuD8fLFrbkqpXmw4Q3k5Q/o.jpg",
          description: "Chinese",
          address: "1935 Taraval St",
          city: "San Francisco",
          state: "California",
          zipCode: 94116,
          lat: 37.74255,
          lng: -122.48703,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 7,
          title: "Anchor Oyster Bar",
          imageUrl:
            "https://media.california.com/media/_versions/articles/california_oysters_1__4086x2598___v1222x580.jpg",
          description: "Seafood",
          address: "579 Castro St",
          city: "San Francisco",
          state: "California",
          zipCode: 94114,
          lat: 37.75973,
          lng: -122.4349,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = "Businesses";
    return queryInterface.bulkDelete(options, null, {});
  },
};
