let people = [
  {
    name: "Anne",
    hasGlasses: true,
    hasMustach: true
  },
  {
    name: "Tracey",
    hasGlasses: true,
    hasBangs: true
  },
  {
    name: "Rosie",
    hasHat: true
  },
  {
    name: "Ken",
    hasGlasses: true
  },
  {
    name: "Eli",
    isBlonde: true
  },
  {
    name: "Emmanuelle"
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
