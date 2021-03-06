const properties = [
  {
    path: "hasScarf",
    question: "Is that person wearing a scarf?",
    numberOfPeople: 0,
  },
  {
    path: "hasGlasses",
    question: "Is that person wearing glasses?",
    numberOfPeople: 0,
  },
  {
    path: "hasMustach",
    question: "Does that person have a defined mustach?",
    numberOfPeople: 0,
  },
  {
    path: "hasFacialHair",
    question: "Does that person have facial hair?",
    numberOfPeople: 0,
  },
  {
    path: "hasBangs",
    question: "Does that person have bangs?",
    numberOfPeople: 0,
  },
  {
    path: "hasHat",
    question: "Is that person wearing a proper hat?",
    numberOfPeople: 0,
  },
  {
    path: "hasHeadPiece",
    question: "Is that person wearing something on its head (or around) ?",
    numberOfPeople: 0,
  },
  {
    path: "isBlonde",
    question: "Does that person have luxurious blond hair?",
    numberOfPeople: 0,
  },
  {
    path: "isMan",
    question: "Is that person a man?",
    numberOfPeople: 0,
  },
  {
    path: "hasTie",
    question: "Is that person wearing a tie or a bowtie?",
    numberOfPeople: 0,
  },
  {
    path: "isBaby",
    question: "Is she a baby?",
    numberOfPeople: 0,
  },
  {
    path: "hasCurlyHair",
    question: "Does that person have curly hair?",
    numberOfPeople: 0,
  },
  {
    path: "hasWeddingDress",
    question: "Is she wearing a wedding dress?",
    numberOfPeople: 0,
  },
  {
    path: "hasFur",
    question: "Is that person wearing some kind of fur or feathers?",
    numberOfPeople: 0,
  },
];

const getProperties = (peopleArr) => {
  const propertiesSelected = properties
    .map((p) => {
      const prop = { ...p };
      peopleArr.forEach((person) => {
        if (person[prop.path] && person[prop.path] === true)
          prop.numberOfPeople++;
      });
      return prop;
    })
    .filter((p) => p.numberOfPeople !== 0);
  return propertiesSelected;
};

export default getProperties;
