const capitalCities = {
  Afghanistan: "Kabul",
  Albania: "Tirana",
  Algeria: "Alger",
  "American Samoa": "Fagatogo",
  Andorra: "Andorra&nbspla&nbspVella",
  Angola: "Luanda",
  Anguilla: "The&nbspValley",
  "Antigua and Barbuda": "Saint&nbspJohn's",
  Argentina: "Buenos&nbspAires",
  Armenia: "Yerevan",
  Aruba: "Oranjestad",
  Australia: "Canberra",
  Austria: "Vienna",
  Azerbaijan: "Baku",
  Bahamas: "Nassau",
  Bahrain: "al-Manama",
  Bangladesh: "Dhaka",
  Barbados: "Bridgetown",
  Belarus: "Minsk",
  Belgium: "Brussels",
  Belize: "Belmopan",
  Benin: "Porto-Novo",
  Bermuda: "Hamilton",
  Bhutan: "Thimphu",
  Bolivia: "La&nbspPaz",
  "Bosnia and Herzegovina": "Sarajevo",
  Botswana: "Gaborone",
  Brazil: "Brasília",
  Brunei: "Bandar&nbspSeri&nbspBegawan",
  Bulgaria: "Sofia",
  "Burkina Faso": "Ouagadougou",
  Burundi: "Bujumbura",
  Cambodia: "Phnom&nbspPenh",
  Cameroon: "Yaound",
  Canada: "Ottawa",
  "Cape Verde": "Praia",
  "Cayman Islands": "George&nbspTown",
  "Central African Republic": "Bangui",
  Chad: "N'Djam",
  Chile: "Santiago&nbspde&nbspChile",
  China: "Beijing",
  "Christmas Island": "Flying&nbspFish&nbspCove",
  Colombia: "Santaf",
  Comoros: "Moroni",
  Congo: "Brazzaville",
  "Cook Islands": "Avarua",
  "Costa Rica": "San&nbspJose",
  Croatia: "Zagreb",
  Cuba: "La&nbspHabana",
  Cyprus: "Nicosia",
  "Czech Republic": "Praha",
  Denmark: "Copenhagen",
  Djibouti: "Djibouti",
  Dominica: "Roseau",
  "Dominican Republic": "Santo&nbspDomingo",
  "East Timor": "Dili",
  Ecuador: "Quito",
  Egypt: "Cairo",
  "El-Salvador": "San&nbspSalvador",
  England: "London",
  "Equatorial Guinea": "Malabo",
  Eritrea: "Asmara",
  Estonia: "Tallinn",
  Ethiopia: "Addis&nbspAbaba",
  "Falkland Islands": "Stanley",
  "Faroe Islands": "Tórshavn",
  "Fiji Islands": "Suva",
  Finland: "Helsinki",
  France: "Paris",
  "French Guiana": "Cayenne",
  "French Polynesia": "Papeete",
  "French Southern and Antarctic Lands": "Saint&nbspPierre",
  Gabon: "Libreville",
  Gambia: "Banjul",
  Georgia: "Tbilisi",
  Germany: "Berlin",
  Ghana: "Accra",
  Gibraltar: "Gibraltar",
  Greece: "Athens",
  Greenland: "Nuuk",
  Grenada: "Saint&nbspGeorge's",
  Guadeloupe: "Basse&nbspTerre",
  Guam: "Aga",
  Guatemala: "Ciudad&nbspde&nbspGuatemala",
  Guinea: "Conakry",
  "Guinea Bissau": "Bissau",
  Guyana: "Georgetown",
  Haiti: "Port-au-Prince",
  Honduras: "Tegucigalpa",
  "Hong Kong": "Victoria",
  Hungary: "Budapest",
  Iceland: "Reykjav",
  India: "New&nbspDelhi",
  Indonesia: "Jakarta",
  Iran: "Tehran",
  Iraq: "Baghdad",
  Ireland: "Dublin",
  Israel: "Jerusalem",
  Italy: "Roma",
  "Ivory Coast": "Yamoussoukro",
  Jamaica: "Kingston",
  Japan: "Tokyo",
  Jordan: "Amman",
  Kazakhstan: "Astana",
  Kenya: "Nairobi",
  Kiribati: "Bairiki",
  Kuwait: "Kuwait",
  Kyrgyzstan: "Bishkek",
  Laos: "Vientiane",
  Latvia: "Riga",
  Lebanon: "Beirut",
  Lesotho: "Maseru",
  Liberia: "Monrovia",
  "Libyan Arab Jamahiriya": "Tripoli",
  Liechtenstein: "Vaduz",
  Lithuania: "Vilnius",
  Luxembourg: "Luxembourg",
  Macao: "Macao",
  "North Macedonia": "Skopje",
  Madagascar: "Antananarivo",
  Malawi: "Lilongwe",
  Malaysia: "Kuala&nbspLumpur",
  Maldives: "Male",
  Mali: "Bamako",
  Malta: "Valletta",
  "Marshall Islands": "Dalap-Uliga-Darrit",
  Martinique: "Fort-de-France",
  Mauritania: "Nouakchott",
  Mauritius: "Port&nbspLouis",
  Mayotte: "Mamoutzou",
  Mexico: "Mexico&nbspCity",
  Moldova: "Chisinau",
  Monaco: "Monaco",
  Mongolia: "Ulan&nbspBator",
  Montserrat: "Plymouth",
  Morocco: "Rabat",
  Mozambique: "Maputo",
  Myanmar: "Rangoon",
  Namibia: "Windhoek",
  Nauru: "Yaren",
  Nepal: "Kathmandu",
  Netherlands: "Amsterdam",
  "Netherlands Antilles": "Willemstad",
  "New Caledonia": "Noum",
  "New Zealand": "Wellington",
  Nicaragua: "Managua",
  Niger: "Niamey",
  Nigeria: "Abuja",
  Niue: "Alofi",
  "Norfolk Island": "Kingston",
  "North Korea": "Pyongyang",
  "Northern Ireland": "Belfast",
  "Northern Mariana Islands": "Garapan",
  Norway: "Oslo",
  Oman: "Masqat",
  Pakistan: "Islamabad",
  Palau: "Koror",
  Palestine: "Gaza",
  Panama: "Ciudad&nbspde&nbspPanam",
  "Papua New Guinea": "Port&nbspMoresby",
  Paraguay: "Asunci",
  Peru: "Lima",
  Philippines: "Manila",
  Pitcairn: "Adamstown",
  Poland: "Warszawa",
  Portugal: "Lisboa",
  "Puerto Rico": "San&nbspJuan",
  Qatar: "Doha",
  Reunion: "Saint-Denis",
  Romania: "Bucuresti",
  Russia: "Moscow",
  Rwanda: "Kigali",
  "Saint-Helena": "Jamestown",
  "Saint-Kitts and Nevis": "Basseterre",
  "Saint-Lucia": "Castries",
  "Saint-Pierre and Miquelon": "Saint-Pierre",
  "Saint-Vincent and the Grenadines": "Kingstown",
  Samoa: "Apia",
  "San Marino": "San&nbspMarino",
  "Sao-Tome-an-Principe": "Sao&nbspTome",
  "Saudi Arabia": "Riyadh",
  Scotland: "Edinburgh",
  Senegal: "Dakar",
  Seychelles: "Victoria",
  "Sierra Leone": "Freetown",
  Singapore: "Singapore",
  Slovakia: "Bratislava",
  Slovenia: "Ljubljana",
  "Solomon Islands": "Honiara",
  Somalia: "Mogadishu",
  "South Africa": "Pretoria",
  "South Georgia and the South Sandwich Islands": "King&nbspEdward&nbspPoint",
  "South Korea": "Seoul",
  "South Sudan": "Juba",
  Spain: "Madrid",
  "Sri Lanka": "Colombo",
  Sudan: "Khartum",
  Suriname: "Paramaribo",
  "Svalbard and Jan Mayen": "Longyearbyen",
  Swaziland: "Mbabane",
  Sweden: "Stockholm",
  Switzerland: "Bern",
  Syria: "Damascus",
  Tajikistan: "Dushanbe",
  Tanzania: "Dodoma",
  Thailand: "Bangkok",
  "The Democratic Republic of Congo": "Kinshasa",
  Togo: "Lom",
  Tokelau: "Fakaofo",
  Tonga: "Nuku'alofa",
  "Trinidad and Tobago": "Port&nbspof&nbspSpain",
  Tunisia: "Tunis",
  Turkey: "Ankara",
  Turkmenistan: "Ashgabat",
  "Turks and Caicos Islands": "Cockburn&nbspTown",
  Tuvalu: "Funafuti",
  Uganda: "Kampala",
  Ukraine: "Kiev",
  "United Arab Emirates": "Abu&nbspDhabi",
  "United Kingdom": "London",
  "United States": "Washington",
  Uruguay: "Montevideo",
  Uzbekistan: "Toskent",
  Vanuatu: "Port&nbspVila",
  Venezuela: "Caracas",
  Vietnam: "Hanoi",
  Wales: "Cardiff",
  "Wallis and Futuna": "Mata'utu",
  "Western Sahara": "El-Aai",
  Yemen: "Sanaa",
  Zambia: "Lusaka",
  Zimbabwe: "Harare"
};

// import { capitalCities } from "./data.module.js";

const getRandomCities = obj => {
  const countries = Object.keys(obj);
  const randomCountry = countries[Math.floor(countries.length * Math.random())];
  return obj[randomCountry];
};

const getRandomCountry = obj => {
  const countries = Object.keys(obj);
  const randomCountry = countries[Math.floor(countries.length * Math.random())];

  return randomCountry;
};

let randomCountry = getRandomCountry(capitalCities);
let randomCity = capitalCities[randomCountry];

const correctAnswer = () => {
  randomCountry = getRandomCountry(capitalCities);
  randomCity = capitalCities[randomCountry];
};

const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const createAnswerButtons = item =>
  `<div><button onclick=getScore("${item}")>${item}</button></div>`;

const createAnswersArray = () => {
  document.getElementById("answer-boxes").innerHTML = "";
  let wrongAnswersArray = [];
  for (let index = 0; index < 3; index++) {
    wrongAnswersArray.push(getRandomCities(capitalCities));
  }
  let answersArray = [...wrongAnswersArray, randomCity];
  shuffle(answersArray);
  const answers = answersArray.map(createAnswerButtons);
  answers.forEach(printButtons);
};

const printCountry = () =>
  (document.getElementById("country-card").innerHTML = randomCountry);

const printButtons = button =>
  (document.getElementById("answer-boxes").innerHTML += button);

printCountry();
createAnswersArray();

let score = 0;

const getScore = city => {
  if (city === randomCity) {
    score++;
  }

  score;
  updateHtmlScore();
  correctAnswer();
  printCountry();
  createAnswersArray();
};

const updateHtmlScore = () => {
  document.getElementById("score").innerHTML = "Score: " + score;
};

updateHtmlScore();
