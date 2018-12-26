let people = [
  {
    name: "Alice",
    hasGlasses: true,
    hasScarf: true
  },
  {
    name: "Anne",
    hasGlasses: true,
    hasMustach: true
  },
  {
    name: "Bill",
    hasMustach: true,
    isMan: true
  },
  {
    name: "Diana",
    hasBangs: true
  },
  {
    name: "Eli",
    isBlonde: true,
    hasHat: true
  },
  {
    name: "Emika"
  },
  {
    name: "Emilien",
    isMan: true
  },
  {
    name: "Emmanuelle"
  },
  {
    name: "Fathi",
    isMan: true,
    hasGlasses: true,
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
    hasMustach: true
  },
  {
    name: "Ludo",
    hasHat: true,
    hasGlasses: true,
    hasMustach: true,
    isMan: true
  },
  {
    name: "Marion",
    hasHat: true
  },
  {
    name: "Mathias",
    hasHat: true,
    hasGlasses: true,
    hasMustach: true,
    isMan: true,
    hasScarf: true
  },
  {
    name: "Mathieu",
    isBlonde: true,
    hasMustach: true,
    isMan: true
  },
  {
    name: "Pedro",
    hasHat: true,
    hasMustach: true,
    isMan: true
  },
  {
    name: "Poisson",
    hasHat: true,
    isMan: true,
    hasScarf: true
  },
  {
    name: "Rosie",
    hasHat: true
  },
  {
    name: "Tagir",
    isMan: true
  },
  {
    name: "Tia",
    isWoman: true,
    isBaby: true
  },
  {
    name: "Tracey",
    hasGlasses: true,
    hasBangs: true
  },
  {
    name: "Willy",
    isMan: true
  },
  {
    name: "Yana",
    hasHat: true,
    hasGlasses: true
  },
  {
    name: "Zlatka"
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
