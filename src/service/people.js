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
  //   hasBangs: true,
  //   isHolding: true
  // },
  {
    name: "Eli",
    isBlonde: true,
    hasHat: true,
    hasHeadPiece: true,
    hasFur: true
  },
  {
    name: "Emika",
    hasScarf: true,
    hasGlasses: true
  },
  // {
  //   name: "Emilien",
  //   isMan: true
  // },
  {
    name: "Emmanuelle",
    hasFacialHair: true,
    hasMustach: true,
    hasHat: true,
    hasHeadPiece: true,
    hasFur: true
  },
  {
    name: "Fathi",
    isMan: true,
    hasGlasses: true,
    hasFacialHair: true,
    hasTie: true
  },
  {
    name: "Juju",
    hasFur: true,
    hasScarf: true
  },
  {
    name: "Julia",
    hasHeadPiece: true,
    hasBangs: true
  },
  {
    name: "Ken",
    hasGlasses: true,
    hasTie: true,
    isMan: true,
    isHolding: true
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
    isMan: true,
    hasFur: true
  },
  {
    name: "Marion",
    hasHeadPiece: true,
    hasHat: true,
    hasFur: true
  },
  {
    name: "Mathias",
    hasHeadPiece: true,
    hasGlasses: true,
    hasFacialHair: true,
    hasMustach: true,
    isMan: true,
    hasScarf: true,
    hasFur: true
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
    isMan: true,
    hasFur: true
  },
  {
    name: "Poisson",
    hasHat: true,
    hasHeadPiece: true,
    isMan: true,
    hasScarf: true,
    hasFur: true
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
  {
    name: "Tia",
    isWoman: true,
    isBaby: true,
    isHolding: true
  },
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
    hasHat: true,
    hasMustach: true,
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
    d.isNotUsersChoice = false;
    d.isNotCompsChoice = false;
    return d;
  });
  return people;
};

const getOnePerson = () => {
  const N = people.length;
  const randomNum = Math.floor(Math.random() * (N + 1));
  return people[randomNum];
};

export { getPeople, getOnePerson };
