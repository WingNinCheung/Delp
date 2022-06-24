"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Businesses",
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
        },
        {
          ownerId: 3,
          title: "Unco Frank’s",
          imageUrl:
            "https://s3-media0.fl.yelpcdn.com/bphoto/uQB6Wqoxngff3rBXTSInXg/o.jpg",
          description: "Hawaiian",
          address: "443 Clement St",
          city: "San Francisco",
          state: "California",
          zipCode: 94118,
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
        },
        {
          ownerId: 5,
          title: "Daeho Kalbijjim & Beef Soup",
          imageUrl:
            "https://s3-media0.fl.yelpcdn.com/bphoto/2rmDdZLI5UHLZ6XVEH62KQ/o.jpg",
          description: "Korean, Soup, Noodles",
          address: "1620 Post St",
          city: "San Francisco",
          state: "California",
          zipCode: 94115,
        },
        {
          ownerId: 6,
          title: "Szechuan Cuisine",
          imageUrl:
            "https://s3-media0.fl.yelpcdn.com/bphoto/VXYomXymQAOMAg5jWCLb1A/o.jpg",
          description: "Szechuan, Chinese",
          address: "1920 Irving St",
          city: "San Francisco",
          state: "California",
          zipCode: 94112,
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
        },
        {
          ownerId: 9,
          title: "Fu Niu Tang Noodle Talk",
          imageUrl:
            "https://s3-media0.fl.yelpcdn.com/bphoto/iYzmpYkCvc8tw2Nn91Y5Hg/o.jpg",
          description: "Chinese Noodles",
          address: "711 Saratoga Rd",
          city: "San Francisco",
          state: "California",
          zipCode: 94087,
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
        },
        {
          ownerId: 7,
          title: "Anchor Oyster Bar",
          imageUrl:
            "https://s3-media0.fl.yelpcdn.com/bphoto/0i9M6KKC5Xr1ZP-l07q7qw/o.jpg",
          description: "Seafood",
          address: "579 Castro St",
          city: "San Francisco",
          state: "California",
          zipCode: 94114,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Businesses", null, {});
  },
};
