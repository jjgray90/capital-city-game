const capitalCities = {
  Afghanistan: "Kabul",
  Albania: "Tirana",
  Algeria: "Alger",
  "American Samoa": "Fagatogo",
  Andorra: "Andorra la Vella",
  Angola: "Luanda",
  Anguilla: "The Valley",
  "Antigua and Barbuda": "Saint John's",
  Argentina: "Buenos Aires",
  Armenia: "Yerevan",
  Aruba: "Oranjestad",
  Australia: "Canberra",
  Austria: "Wien",
  Azerbaijan: "Baku",
  Bahamas: "Nassau",
  Bahrain: "al-Manama",
  Bangladesh: "Dhaka",
  Barbados: "Bridgetown",
  Belarus: "Minsk",
  Belgium: "Bruxelles [Brussel]",
  Belize: "Belmopan",
  Benin: "Porto-Novo",
  Bermuda: "Hamilton",
  Bhutan: "Thimphu",
  Bolivia: "La Paz",
  "Bosnia and Herzegovina": "Sarajevo",
  Botswana: "Gaborone",
  Brazil: "Brasília",
  Brunei: "Bandar Seri Begawan",
  Bulgaria: "Sofia",
  "Burkina Faso": "Ouagadougou",
  Burundi: "Bujumbura",
  Cambodia: "Phnom Penh",
  Cameroon: "Yaound",
  Canada: "Ottawa",
  "Cape Verde": "Praia",
  "Cayman Islands": "George Town",
  "Central African Republic": "Bangui",
  Chad: "N'Djam",
  Chile: "Santiago de Chile",
  China: "Peking",
  "Christmas Island": "Flying Fish Cove",
  "Cocos (Keeling) Islands": "West Island",
  Colombia: "Santaf",
  Comoros: "Moroni",
  Congo: "Brazzaville",
  "Cook Islands": "Avarua",
  "Costa Rica": "San Jose",
  Croatia: "Zagreb",
  Cuba: "La Habana",
  Cyprus: "Nicosia",
  "Czech Republic": "Praha",
  Denmark: "Copenhagen",
  Djibouti: "Djibouti",
  Dominica: "Roseau",
  "Dominican Republic": "Santo Domingo de Guzm",
  "East Timor": "Dili",
  Ecuador: "Quito",
  Egypt: "Cairo",
  "El Salvador": "San Salvador",
  England: "London",
  "Equatorial Guinea": "Malabo",
  Eritrea: "Asmara",
  Estonia: "Tallinn",
  Ethiopia: "Addis Abeba",
  "Falkland Islands": "Stanley",
  "Faroe Islands": "Tórshavn",
  "Fiji Islands": "Suva",
  Finland: "Helsinki",
  France: "Paris",
  "French Guiana": "Cayenne",
  "French Polynesia": "Papeete",
  "French Southern and Antarctic Lands": "Saint Pierre",
  Gabon: "Libreville",
  Gambia: "Banjul",
  Georgia: "Tbilisi",
  Germany: "Berlin",
  Ghana: "Accra",
  Gibraltar: "Gibraltar",
  Greece: "Athenai",
  Greenland: "Nuuk",
  Grenada: "Saint George's",
  Guadeloupe: "Basse-Terre",
  Guam: "Aga",
  Guatemala: "Ciudad de Guatemala",
  Guinea: "Conakry",
  "Guinea-Bissau": "Bissau",
  Guyana: "Georgetown",
  Haiti: "Port-au-Prince",
  "Holy See (Vatican City State)": "Citt",
  Honduras: "Tegucigalpa",
  "Hong Kong": "Victoria",
  Hungary: "Budapest",
  Iceland: "Reykjav",
  India: "New Delhi",
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
  Luxembourg: "Luxembourg [Luxemburg/L",
  Macao: "Macao",
  "North Macedonia": "Skopje",
  Madagascar: "Antananarivo",
  Malawi: "Lilongwe",
  Malaysia: "Kuala Lumpur",
  Maldives: "Male",
  Mali: "Bamako",
  Malta: "Valletta",
  "Marshall Islands": "Dalap-Uliga-Darrit",
  Martinique: "Fort-de-France",
  Mauritania: "Nouakchott",
  Mauritius: "Port-Louis",
  Mayotte: "Mamoutzou",
  Mexico: "Ciudad de M",
  "Microne, Federated States of": "Palikir",
  Moldova: "Chisinau",
  Monaco: "Monaco-Ville",
  Mongolia: "Ulan Bator",
  Montserrat: "Plymouth",
  Morocco: "Rabat",
  Mozambique: "Maputo",
  Myanmar: "Rangoon (Yangon)",
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
  Panama: "Ciudad de Panam",
  "Papua New Guinea": "Port Moresby",
  Paraguay: "Asunci",
  Peru: "Lima",
  Philippines: "Manila",
  Pitcairn: "Adamstown",
  Poland: "Warszawa",
  Portugal: "Lisboa",
  "Puerto Rico": "San Juan",
  Qatar: "Doha",
  Reunion: "Saint-Denis",
  Romania: "Bucuresti",
  "Russian Federation": "Moscow",
  Rwanda: "Kigali",
  "Saint Helena": "Jamestown",
  "Saint Kitts and Nevis": "Basseterre",
  "Saint Lucia": "Castries",
  "Saint Pierre and Miquelon": "Saint-Pierre",
  "Saint Vincent and the Grenadines": "Kingstown",
  Samoa: "Apia",
  "San Marino": "San Marino",
  "Sao Tome and Principe": "Sao Tome",
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
  "South Georgia and the South Sandwich Islands": "King Edward Point",
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
  "Trinidad and Tobago": "Port-of-Spain",
  Tunisia: "Tunis",
  Turkey: "Ankara",
  Turkmenistan: "Ashgabat",
  "Turks and Caicos Islands": "Cockburn Town",
  Tuvalu: "Funafuti",
  Uganda: "Kampala",
  Ukraine: "Kyiv",
  "United Arab Emirates": "Abu Dhabi",
  "United Kingdom": "London",
  "United States": "Washington",
  Uruguay: "Montevideo",
  Uzbekistan: "Toskent",
  Vanuatu: "Port-Vila",
  Venezuela: "Caracas",
  Vietnam: "Hanoi",
  "Virgin Island, British": "Road Town",
  "Virgin Island, U.S.": "Charlotte Amalie",
  Wales: "Cardiff",
  "Wallis and Futuna": "Mata-Utu",
  "Western Sahara": "El-Aai",
  Yemen: "Sanaa",
  Yugoslavia: "Beograd",
  Zambia: "Lusaka",
  Zimbabwe: "Harare"
};

const getRandomCities = obj => {
  // Array of countries
  const countries = Object.keys(obj);
  //  Random country from array
  const randomCountry = countries[Math.floor(countries.length * Math.random())];

  return obj[randomCountry];
};

const getRandomCountry = obj => {
  // Array of countries
  const countries = Object.keys(obj);
  //  Random country from array
  const randomCountry = countries[Math.floor(countries.length * Math.random())];

  return randomCountry;
};

let randomCountry = getRandomCountry(capitalCities);
let randomCity = capitalCities[randomCountry];

const refreshAnswer = () => {
  randomCountry = getRandomCountry(capitalCities);
  randomCity = capitalCities[randomCountry];
};

const getNewInputs = () => {
  refreshAnswer();

  document.getElementById("country-card").innerHTML = randomCountry;

  document.getElementById("box-one").innerHTML = getRandomCities(capitalCities);

  document.getElementById("box-two").innerHTML = getRandomCities(capitalCities);

  document.getElementById("box-three").innerHTML = getRandomCities(
    capitalCities
  );
  document.getElementById("box-four").innerHTML = randomCity;
};

let score = 0;
let countries = Object.keys(capitalCities);
let cities = Object.values(capitalCities);

const getScore = () => {
  if (
    Object.keys(
      capitalCities[document.getElementById("country-card").innerHTML]
    ) ==
    Object.values(capitalCities[document.getElementById("box-four").innerHTML])
  ) {
    score++;
  } else {
    score;
  }
  updateHtmlScore();
  getNewInputs();
};

const updateHtmlScore = () => {
  document.getElementById("score").innerHTML = "Score: " + score;
};

updateHtmlScore();
getNewInputs();

const createButtons = () => {};
// let index = 0;
for (let index = 0; index < 4; index++) {
  // getRandomCities(capitalCities);
  console.log(getRandomCities(capitalCities));
}
