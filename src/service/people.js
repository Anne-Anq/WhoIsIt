let people = [
  {
    name: "Alice",
    hasGlasses: true,
    hasScarf: true,
    hasCurlyHair: true,
  },
  {
    name: "Anne",
    hasGlasses: true,
    hasFacialHair: true,
    hasMustach: true,
  },
  {
    name: "Bill",
    hasFacialHair: true,
    hasGlasses: true,
    hasHeadPiece: true,
    isMan: true,
  },
  {
    name: "Eli",
    isBlonde: true,
    hasHat: true,
    hasHeadPiece: true,
    hasFur: true,
  },
  {
    name: "Emika",
    hasScarf: true,
    hasGlasses: true,
  },
  {
    name: "Emmanuelle",
    hasFacialHair: true,
    hasMustach: true,
    hasHat: true,
    hasHeadPiece: true,
    hasFur: true,
  },
  {
    name: "Fathi",
    isMan: true,
    hasGlasses: true,
    hasFacialHair: true,
    hasTie: true,
  },
  {
    name: "Juju",
    hasFur: true,
    hasScarf: true,
  },
  {
    name: "Julia",
    hasHeadPiece: true,
    hasBangs: true,
  },
  {
    name: "Ken",
    hasGlasses: true,
    hasTie: true,
    isMan: true,
    isHolding: true,
  },
  {
    name: "Kenny",
    isMan: true,
    hasFacialHair: true,
    hasHeadPiece: true,
  },
  {
    name: "Ludo",
    hasHeadPiece: true,
    hasGlasses: true,
    hasFacialHair: true,
    hasMustach: true,
    isMan: true,
    hasFur: true,
  },
  {
    name: "Marion",
    hasHeadPiece: true,
    hasHat: true,
    hasFur: true,
  },
  {
    name: "Mathias",
    hasHeadPiece: true,
    hasGlasses: true,
    hasFacialHair: true,
    hasMustach: true,
    isMan: true,
    hasScarf: true,
    hasFur: true,
  },
  {
    name: "Mathieu",
    isBlonde: true,
    isMan: true,
  },
  {
    name: "Pedro",
    hasHat: true,
    hasHeadPiece: true,
    hasFacialHair: true,
    isMan: true,
    hasFur: true,
  },
  {
    name: "Poisson",
    hasHat: true,
    hasHeadPiece: true,
    isMan: true,
    hasScarf: true,
    hasFur: true,
  },
  {
    name: "Rosie",
    hasHat: true,
    hasHeadPiece: true,
  },
  {
    name: "Tagir",
    isMan: true,
  },
  {
    name: "Tracey",
    hasGlasses: true,
    hasBangs: true,
  },
  {
    name: "Willy",
    hasHeadPiece: true,
    isMan: true,
  },
  {
    name: "Yana",
    hasHeadPiece: true,
    hasHat: true,
    hasMustach: true,
    hasGlasses: true,
  },
  {
    name: "Zlatka",
    hasWeddingDress: true,
    hasHeadPiece: true,
  },
];
const getNumOfPeople = (num) => {
  const peopleOnly = people.map((p) => ({ ...p }));
  shuffleArray(peopleOnly);
  return peopleOnly.slice(0, num);
};
const clone = (arr) => {
  return arr.map((a) => ({ ...a }));
};
const getPeopleAndAttr = (array) => {
  const peopleAndAttr = array.map((d) => {
    d.isNotUsersChoice = false;
    d.isNotCompsChoice = false;
    return d;
  });
  return peopleAndAttr;
};

const getOnePerson = (arr) => {
  const N = arr.length;
  const randomNum = Math.floor(Math.random() * (N + 1));
  return arr[randomNum];
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
export { getNumOfPeople, getPeopleAndAttr, getOnePerson, clone };
