const { faker } = require('@faker-js/faker');
const {
  db,
  models: { User, Product, Cart, Order },
} = require("../server/db");

console.log('Beginning seed...🌱')

const seed = async () => {

  for (let i = 1; i < 51; i++) {
    await User.create({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      password: 'hotdog',
      email: faker.internet.email(),
      role: faker.helpers.arrayElement(['member', 'engineer', 'admin'])
    })
    
    for (let j = 1; j < 2; j++) {
      await Cart.create({
        userId: i,
      })
    }

    // for (let k = 1; k < 2; k++) {
    //   await Order.create({
    //     completed: false,
    //     userId: i,
    //   })
    // }
  }

  for (let i = 1; i < 31; i++) {
    await Product.create({
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price({ min: 10, max: 2000, dec: 2 }),
      quantity: faker.number.int({ max: 2000 }),
      imageUrl: faker.image.url(),
      upc: faker.number.int({ min: 100000000001, max: 999999999999 }),
      category: faker.commerce.department(),
    })
  }

}

db.sync({ force: true }).then(seed).then(() => { console.log("done seeding🌳") })


// Keep below for reference

// "use strict";

// const {
//   db,
//   models: { User, Product },
// } = require("../server/db");

// /**
//  * seed - this function clears the database, updates tables to
//  *      match the models, and populates the database.
//  */
// async function seed() {
//   await db.sync({ force: true }); // clears db and matches models to tables
//   console.log("db synced!");

//   // Creating Users
//   const users = await Promise.all([
//     User.create({
//       firstName: "cody",
//       lastName: "johnson",
//       email: "codyj@hackme.com",
//       password: "123",
//     }),
//     User.create({
//       firstName: "murphy",
//       lastName: "law",
//       email: "murphyl@hackme.com",
//       password: "123",
//     }),
//   ]);

//   const products = await Promise.all([
//     Product.create({
//       name: "SWEbay Hoodie",
//       description: "comfiest hoodie for hacking",
//       price: 20.0,
//       quantity: 10,
//       upc: "47110285701",
//       category: "hacking apparel",
//     }),
//     Product.create({
//       name: "SWEbay Sweats",
//       description: "comfiest legware for hacking",
//       price: 35.0,
//       quantity: 5,
//       upc: "47115798401",
//       category: "hacking apparel",
//     }),
//     Product.create({
//       name: "SWEbay USB-toothbrush",
//       description: "hygienic hackware",
//       price: 50.0,
//       quantity: 57,
//       upc: "47889798401",
//       category: "hacking hygiene",
//     }),
//   ]);

//   console.log(`seeded ${users.length} users`);
//   console.log(`seeded ${products.length} products`);
//   console.log(`seeded successfully`);
//   return {
//     users: {
//       cody: users[0],
//       murphy: users[1],
//     },
//     products: {
//       product1: products[0],
//       product2: products[1],
//       product3: products[2]
//     },
//   };
// }

// /*
//  We've separated the `seed` function from the `runSeed` function.
//  This way we can isolate the error handling and exit trapping.
//  The `seed` function is concerned only with modifying the database.
// */
// async function runSeed() {
//   console.log("seeding...");
//   try {
//     await seed();
//   } catch (err) {
//     console.error(err);
//     process.exitCode = 1;
//   } finally {
//     console.log("closing db connection");
//     await db.close();
//     console.log("db connection closed");
//   }
// }

// /*
//   Execute the `seed` function, IF we ran this module directly (`node seed`).
//   `Async` functions always return a promise, so we can use `catch` to handle
//   any errors that might occur inside of `seed`.
// */
// if (module === require.main) {
//   runSeed();
// }

// // we export the seed function for testing purposes (see `./seed.spec.js`)
// module.exports = seed;
