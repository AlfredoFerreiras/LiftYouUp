"use strict";

const {
  db,
  models: { User, Company, Idea },
} = require("../server/db");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  // Creating Users
  const [alfredo, cody, murphy] = await Promise.all([
    User.create({
      email: "alf@abc.com",
      username: "alfredo",
      password: "123",
      isAdmin: true,
      imageUrl: "https://example.com/alfredo.png",
    }),
    User.create({ email: "cody@aol.com", username: "cody", password: "123" }),
    User.create({
      email: "murphy@aol.com",
      username: "murphy",
      password: "123",
    }),
  ]);

  // Creating Companies
  const [jupiter, venus, mars] = await Promise.all([
    Company.create({
      companyName: "Jupiter",
      description: "Solar Panels sales",
      budget: "1000",
      userId: cody.id,
    }),
    Company.create({
      companyName: "Venus",
      description: "Solar Panels sales",
      budget: "1000",
      goal: "Get more clients",
      userId: alfredo.id,
    }),
    Company.create({
      companyName: "Mars",
      userId: murphy.id,
    }),
  ]);

  // Creating Ideas and Associating Them with Companies
  const ideas = await Promise.all([
    Idea.create({
      content: "Develop a sustainability-focused marketing campaign...",
      status: "backlog",
      companyId: jupiter.id,
    }),
    Idea.create({
      content:
        "Offer a referral discount program to encourage existing customers to refer friends and family.",
      status: "backlog",
      companyId: venus.id,
    }),
    Idea.create({
      content: "Implement a customer feedback loop for product improvement.",
      status: "backlog",
      companyId: venus.id,
    }),
  ]);

  console.log(`seeded successfully`);
  return {
    users: { alfredo, cody, murphy },
    companies: { jupiter, venus, mars },
    ideas,
  };
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
