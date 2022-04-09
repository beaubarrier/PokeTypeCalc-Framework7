import fireType from "./Assets/fireType.png";
import grassType from "./Assets/grassType.png";
import waterType from "./Assets/waterType.png";
import normalType from "./Assets/normalType.png";
import fightingType from "./Assets/fightingType.png";
import flyingType from "./Assets/flyingType.png";
import bugType from "./Assets/bugType.png";
import iceType from "./Assets/iceType.png";
import poisonType from "./Assets/poisonType.png";
import ghostType from "./Assets/ghostType.png";
import dragonType from "./Assets/dragonType.png";
import groundType from "./Assets/groundType.png";
import steelType from "./Assets/steelType.png";
import electricType from "./Assets/electricType.png";
import darkType from "./Assets/darkType.png";
import rockType from "./Assets/rockType.png";
import psychicType from "./Assets/psychicType.png";
import fairyType from "./Assets/fairyType.png";

import fireTypeC from "./Assets/Buttons/fireTypeC.png";
import grassTypeC from "./Assets/Buttons/grassTypeC.png";
import waterTypeC from "./Assets/Buttons/waterTypeC.png";
import normalTypeC from "./Assets/Buttons/normalTypeC.png";
import fightingTypeC from "./Assets/Buttons/fightingTypeC.png";
import flyingTypeC from "./Assets/Buttons/flyingTypeC.png";
import bugTypeC from "./Assets/Buttons/bugTypeC.png";
import iceTypeC from "./Assets/Buttons/iceTypeC.png";
import poisonTypeC from "./Assets/Buttons/poisonTypeC.png";
import ghostTypeC from "./Assets/Buttons/ghostTypeC.png";
import dragonTypeC from "./Assets/Buttons/dragonTypeC.png";
import groundTypeC from "./Assets/Buttons/groundTypeC.png";
import steelTypeC from "./Assets/Buttons/steelTypeC.png";
import electricTypeC from "./Assets/Buttons/electricTypeC.png";
import darkTypeC from "./Assets/Buttons/darkTypeC.png";
import rockTypeC from "./Assets/Buttons/rockTypeC.png";
import psychicTypeC from "./Assets/Buttons/psychicTypeC.png";
import fairyTypeC from "./Assets/Buttons/fairyTypeC.png";

const TypeData = [
  {
    id: 0,
    name: "fire",

    imgSrc: fireType,
    imgSrcC: fireTypeC,

    superEff: ["grass", "steel", "bug", "ice"],
    notEff: ["rock", "water", "fire", "dragon"],
    noFx: [],

    weak: ["water", "rock", "ground"],
    resist: ["fire", "grass", "ice", "steel", "fairy"],
    immune: [],
  },
  {
    id: 1,
    name: "normal",

    imgSrc: normalType,
    imgSrcC: normalTypeC,

    superEff: [],
    notEff: ["rock", "steel"],
    noFx: ["ghost"],

    weak: ["fighting"],
    resist: [],
    immune: ["ghost"],
  },
  {
    id: 2,
    name: "water",

    imgSrc: waterType,
    imgSrcC: waterTypeC,

    superEff: ["fire", "ground", "rock"],
    notEff: ["water", "grass", "dragon"],
    noFx: [],

    weak: ["electric", "grass"],
    resist: ["fire", "water", "ice"],
    immune: [],
  },
  {
    id: 3,
    name: "electric",

    imgSrc: electricType,
    imgSrcC: electricTypeC,

    superEff: ["water", "flying"],
    notEff: ["electric", "grass", "dragon"],
    noFx: ["ground"],

    weak: ["ground"],
    resist: ["flying", "steel", "electric"],
    immune: [],
  },
  {
    id: 4,
    name: "grass",

    imgSrc: grassType,
    imgSrcC: grassTypeC,

    superEff: ["rock", "ground", "water"],
    notEff: ["fire", "ice", "poison", "bug", "flying", "dragon", "steel"],
    noFx: [],

    weak: ["fire", "bug", "poison", "flying", "ice"],
    resist: ["grass", "water", "electric", "ground"],
    immune: [],
  },
  {
    id: 5,
    name: "ice",

    imgSrc: iceType,
    imgSrcC: iceTypeC,

    superEff: ["grass", "ground", "flying", "dragon"],
    notEff: ["fire", "water", "ice", "steel"],
    noFx: [],

    weak: ["fighting", "rock", "steel", "fire"],
    resist: ["ice"],
    immune: [],
  },
  {
    id: 6,
    name: "fighting",

    imgSrc: fightingType,
    imgSrcC: fightingTypeC,

    superEff: ["ice",  "dark", "normal","steel","rock"],
    notEff: ["flying", "poison", "psychic", "bug", "fairy"],
    noFx: ["ghost"],

    weak: ["fairy", "flying", "psychic"],
    resist: ["rock", "bug", "dark"],
    immune: [],
  },
  {
    id: 7,
    name: "flying",

    imgSrc: flyingType,
    imgSrcC: flyingTypeC,

    superEff: ["fighting", "bug", "grass"],
    notEff: ["rock", "steel", "electric"],
    noFx: [],

    weak: ["rock", "electric", "ice"],
    resist: ["fighting", "bug", "grass"],
    immune: ["ground"],
  },
  {
    id: 8,
    name: "poison",

    imgSrc: poisonType,
    imgSrcC: poisonTypeC,

    superEff: ["fairy", "grass"],
    notEff: ["poison", "ground", "rock", "ghost"],
    noFx: ["steel"],

    weak: ["ground", "psychic"],
    resist: ["fighting", "poison", "grass", "fairy"],
    immune: [],
  },
  {
    id: 9,
    name: "ground",

    imgSrc: groundType,
    imgSrcC: groundTypeC,

    superEff: ["poison", "rock", "steel", "fire", "electric"],
    notEff: ["bug", "grass"],
    noFx: ["flying"],

    weak: ["water", "grass", "ice"],
    resist: ["poison", "rock", "steel", "fire"],
    immune: ["electric"],
  },
  {
    id: 10,
    name: "rock",

    imgSrc: rockType,
    imgSrcC: rockTypeC,

    superEff: ["ice", "flying", "bug", "fire"],
    notEff: ["fighting", "ground", "steel"],
    noFx: [],

    weak: ["grass", "water", "fighting", "ground", "steel"],
    resist: ["normal", "flying", "poison", "fire"],
    immune: [],
  },
  {
    id: 11,
    name: "bug",

    imgSrc: bugType,
    imgSrcC: bugTypeC,

    superEff: ["psychic", "dark"],
    notEff: ["fighting", "ghost", "poison", "fling", "steel"],
    noFx: [],

    weak: ["fire", "flying", "rock"],
    resist: ["fighting", "ground", "grass"],
    immune: [],
  },
  {
    id: 12,
    name: "ghost",

    imgSrc: ghostType,
    imgSrcC: ghostTypeC,

    superEff: ["psychic", "ghost"],
    notEff: ["dark"],
    noFx: ["normal"],

    weak: ["ghost", "dark"],
    resist: ["poison", "bug"],
    immune: ["normal", "fighting"],
  },
  {
    id: 13,
    name: "psychic",

    imgSrc: psychicType,
    imgSrcC: psychicTypeC,

    superEff: ["fighting", "poison"],
    notEff: ["psychic", "steel"],
    noFx: ["dark"],

    weak: ["ghost", "dark", "bug"],
    resist: ["fighting", "psychic"],
    immune: [],
  },
  {
    id: 14,
    name: "dark",

    imgSrc: darkType,
    imgSrcC: darkTypeC,

    superEff: ["psychic", "ghost"],
    notEff: ["fighting", "dark", "fairy"],
    noFx: [],

    weak: ["fighting", "bug", "fairy"],
    resist: ["ghost", "dark"],
    immune: ["psychic"],
  },
  {
    id: 15,
    name: "fairy",

    imgSrc: fairyType,
    imgSrcC: fairyTypeC,

    superEff: ["fighting", "dragon", "dark"],
    notEff: ["poison", "steel", "fire"],
    noFx: [],

    weak: ["poison", "steel"],
    resist: ["fighting", "bug", "dark"],
    immune: ["dragon"],
  },
  {
    id: 16,
    name: "steel",

    imgSrc: steelType,
    imgSrcC: steelTypeC,

    superEff: ["rock", "ice", "fairy"],
    notEff: ["steel", "electric", "water", "fire"],
    noFx: [],

    weak: ["fighting", "ground", "fire"],
    resist: [
      "normal",
      "flying",
      "rock",
      "bug",
      "steel",
      "grass",
      "psychic",
      "ice",
      "dragon",
      "fairy",
    ],
    immune: ["poison"],
  },
  {
    id: 17,
    name: "dragon",

    imgSrc: dragonType,
    imgSrcC: dragonTypeC,

    superEff: ["dragon"],
    notEff: ["steel"],
    noFx: ["fairy"],

    weak: ["dragon", "ice", "fairy"],
    resist: ["fire", "water", "grass", "electric"],
    immune: [],
  },
];

export default TypeData;
