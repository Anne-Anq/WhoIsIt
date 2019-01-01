let people = [
  {
    name: "Alice",
    hasGlasses: true,
    hasScarf: true,
    hasCurlyHair: true
  },
  {
    name: "Anne",
    hasGlasses: true,
    hasFacialHair: true,
    hasMustach: true
  },
  {
    name: "Bill",
    hasFacialHair: true,
    hasGlasses: true,
    hasHeadPiece: true,
    isMan: true
  },
  // {
  //   name: "Diana",
  //   hasBangs: true
  // },
  {
    name: "Eli",
    isBlonde: true,
    hasHat: true,
    hasHeadPiece: true
  },
  {
    name: "Emika"
  },
  // {
  //   name: "Emilien",
  //   isMan: true
  // },
  {
    name: "Emmanuelle"
  },
  {
    name: "Fathi",
    isMan: true,
    hasGlasses: true,
    hasFacialHair: true,
    hasTie: true
  },
  {
    name: "Juju"
  },
  {
    name: "Julia"
  },
  {
    name: "Ken",
    hasGlasses: true,
    hasTie: true,
    isMan: true
  },
  {
    name: "Kenny",
    isMan: true,
    hasFacialHair: true,
    hasHeadPiece: true
  },
  {
    name: "Ludo",
    hasHeadPiece: true,
    hasGlasses: true,
    hasFacialHair: true,
    hasMustach: true,
    isMan: true
  },
  {
    name: "Marion",
    hasHeadPiece: true
  },
  {
    name: "Mathias",
    hasHeadPiece: true,
    hasGlasses: true,
    hasFacialHair: true,
    hasMustach: true,
    isMan: true,
    hasScarf: true
  },
  {
    name: "Mathieu",
    isBlonde: true,
    isMan: true
  },
  {
    name: "Pedro",
    hasHat: true,
    hasHeadPiece: true,
    hasFacialHair: true,
    isMan: true
  },
  {
    name: "Poisson",
    hasHat: true,
    hasHeadPiece: true,
    isMan: true,
    hasScarf: true
  },
  {
    name: "Rosie",
    hasHat: true,
    hasHeadPiece: true
  },
  {
    name: "Tagir",
    isMan: true
  },
  // {
  //   name: "Tia",
  //   isWoman: true,
  //   isBaby: true
  // },
  {
    name: "Tracey",
    hasGlasses: true,
    hasBangs: true
  },
  {
    name: "Willy",
    hasHeadPiece: true,
    isMan: true
  },
  {
    name: "Yana",
    hasHeadPiece: true,
    hasGlasses: true
  },
  {
    name: "Zlatka",
    hasWeddingDress: true,
    hasHeadPiece: true
  }
];

const getPeople = () => {
  people = people.map(d => {
    d.isFlipped = false;
    return d;
  });
  return people;
};

export default getPeople;
