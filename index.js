// Strings
const farmAnimals = "cow horse sheep pig chicken";

// 1. Destructure animal sounds
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(" ");

// 2. Destructure four animal names (excluding horse)
const [bessie, , dolly, babe, little] = farmAnimals.split(" ");

// 3. Destructure three colors (excluding chicken)
const [blackAndWhite, , black, pink] = farmAnimals.split(" ");

// Arrays
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// 4. Destructure full color names
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Destructure using initials (excluding indigo)
const [r, o, y, g, b, , v] = colors;

// 6. Destructure indigo separately
const [, , , , , indg] = colors;

// Objects
const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit"
};

// 7. Destructure muppet properties
const { muppetName, color, song, job, partner } = muppet;

// Nested Object for Muppet Songs
const nestedMuppet = {
  nestedName: "Kermit",
  nestedColor: "green",
  album: {
    theMuppetMovie: {
      song1: "Rainbow Connection",
      song2: "Moving Right Along",
      song3: "Never Before, Never Again",
      song4: "I Hope That Something Better Comes Along",
    },
  },
  nestedJob: "Host of The Muppet Show",
  nestedPartner: "Miss Piggy"
};

// 8. Destructure nestedMuppet properties
const {
  album: {
    theMuppetMovie: { song2, song4 }
  },
  nestedJob,
  nestedPartner
} = nestedMuppet;

// Export all variables so the test file can access them

