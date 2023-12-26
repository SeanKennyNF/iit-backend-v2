type UpperCaseLetter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';

export type TwoLetterIsoCountryCode = `${UpperCaseLetter}${UpperCaseLetter}`;

const countryNameToTwoLetterIsoCountryCodeMap: Record<string, TwoLetterIsoCountryCode | undefined> = {
  Afghanistan: "AF",
  Albania: "AL",
  Algeria: "DZ",
  "American Samoa": "AS",
  Andorra: "AD",
  Angola: "AO",
  Anguilla: "AI",
  "Antigua and Barbuda": "AG",
  Argentina: "AR",
  Armenia: "AM",
  Aruba: "AW",
  Australia: "AU",
  Austria: "AT",
  Azerbaijan: "AZ",
  Bahamas: "BS",
  Bahrain: "BH",
  Bangladesh: "BD",
  Barbados: "BB",
  Belarus: "BY",
  Belgium: "BE",
  Belize: "BZ",
  Benin: "BJ",
  Bermuda: "BM",
  Bhutan: "BT",
  "Bolivia (Plurinational State of)": "BO",
  "Bonaire, Sint Eustatius and Saba": "BQ",
  "Bosnia and Herzegovina": "BA",
  Botswana: "BW",
  Brazil: "BR",
  "British Virgin Islands": "VG",
  "Brunei Darussalam": "BN",
  Bulgaria: "BG",
  "Burkina Faso": "BF",
  Burundi: "BI",
  "Cabo Verde": "CV",
  Cambodia: "KH",
  Cameroon: "CM",
  Canada: "CA",
  "Cayman Islands": "KY",
  "Central African Republic": "CF",
  Chad: "TD",
  Chile: "CL",
  China: "CN",
  "Christmas Island": "CX",
  "Cocos (Keeling) Islands": "CC",
  Colombia: "CO",
  Comoros: "KM",
  Congo: "CG",
  "Cook Islands": "CK",
  "Costa Rica": "CR",
  Croatia: "HR",
  Cuba: "CU",
  "Cura\u00e7ao": "CW",
  Cyprus: "CY",
  Czechia: "CZ",
  "Côte d'Ivoire": "CI",
  "Democratic People's Republic of Korea": "KP",
  "Democratic Republic of the Congo": "CD",
  Denmark: "DK",
  Djibouti: "DJ",
  Dominica: "DM",
  "Dominican Republic": "DO",
  Ecuador: "EC",
  Egypt: "EG",
  "El Salvador": "SV",
  "Equatorial Guinea": "GQ",
  Eritrea: "ER",
  Estonia: "EE",
  Eswatini: "SZ",
  Ethiopia: "ET",
  "Falkland Islands (Malvinas)": "FK",
  "Faroe Islands": "FO",
  Fiji: "FJ",
  Finland: "FI",
  France: "FR",
  "French Guiana": "GF",
  "French Polynesia": "PF",
  Gabon: "GA",
  Gambia: "GM",
  Georgia: "GE",
  Germany: "DE",
  Ghana: "GH",
  Gibraltar: "GI",
  Greece: "GR",
  Greenland: "GL",
  Grenada: "GD",
  Guadeloupe: "GP",
  Guam: "GU",
  Guatemala: "GT",
  Guernsey: "GG",
  Guinea: "GN",
  "Guinea-Bissau": "GW",
  Guyana: "GY",
  Haiti: "HT",
  "Holy See": "VA",
  Honduras: "HN",
  Hungary: "HU",
  Iceland: "IS",
  India: "IN",
  Indonesia: "ID",
  "Iran (Islamic Republic of)": "IR",
  Iraq: "IQ",
  Ireland: "IE",
  "Isle of Man": "IM",
  Israel: "IL",
  Italy: "IT",
  Jamaica: "JM",
  Japan: "JP",
  Jersey: "JE",
  Jordan: "JO",
  Kazakhstan: "KZ",
  Kenya: "KE",
  Kiribati: "KI",
  Kosovo: "XK",
  Kuwait: "KW",
  Kyrgyzstan: "KG",
  "Lao People's Democratic Republic": "LA",
  Latvia: "LV",
  Lebanon: "LB",
  Lesotho: "LS",
  Liberia: "LR",
  Libya: "LY",
  Liechtenstein: "LI",
  Lithuania: "LT",
  Luxembourg: "LU",
  Madagascar: "MG",
  Malawi: "MW",
  Malaysia: "MY",
  Maldives: "MV",
  Mali: "ML",
  Malta: "MT",
  "Marshall Islands": "MH",
  Martinique: "MQ",
  Mauritania: "MR",
  Mauritius: "MU",
  Mayotte: "YT",
  Mexico: "MX",
  "Micronesia (Federated States of)": "FM",
  Monaco: "MC",
  Mongolia: "MN",
  Montenegro: "ME",
  Montserrat: "MS",
  Morocco: "MA",
  Mozambique: "MZ",
  Myanmar: "MM",
  Namibia: "NA",
  Nauru: "NR",
  Nepal: "NP",
  Netherlands: "NL",
  "New Caledonia": "NC",
  "New Zealand": "NZ",
  Nicaragua: "NI",
  Niger: "NE",
  Nigeria: "NG",
  Niue: "NU",
  "Norfolk Island": "NF",
  "North Macedonia": "MK",
  "Northern Mariana Islands (Commonwealth of the)": "MP",
  Norway: "NO",
  "occupied Palestinian territory, including east Jerusalem": "PS",
  Oman: "OM",
  Pakistan: "PK",
  Palau: "PW",
  Panama: "PA",
  "Papua New Guinea": "PG",
  Paraguay: "PY",
  Peru: "PE",
  Philippines: "PH",
  "Pitcairn Islands": "PN",
  Poland: "PL",
  Portugal: "PT",
  "Puerto Rico": "PR",
  Qatar: "QA",
  "Republic of Korea": "KR",
  "Republic of Moldova": "MD",
  Romania: "RO",
  "Russian Federation": "RU",
  Rwanda: "RW",
  "R\u00e9union": "RE",
  "Saint Barth\u00e9lemy": "BL",
  "Saint Helena": "SH",
  "Saint Kitts and Nevis": "KN",
  "Saint Lucia": "LC",
  "Saint Martin": "MF",
  "Saint Pierre and Miquelon": "PM",
  "Saint Vincent and the Grenadines": "VC",
  Samoa: "WS",
  "San Marino": "SM",
  "Sao Tome and Principe": "ST",
  "Saudi Arabia": "SA",
  Senegal: "SN",
  Serbia: "RS",
  Seychelles: "SC",
  "Sierra Leone": "SL",
  Singapore: "SG",
  "Sint Maarten": "SX",
  Slovakia: "SK",
  Slovenia: "SI",
  "Solomon Islands": "SB",
  "Solomon islands": "SB",
  Somalia: "SO",
  "South Africa": "ZA",
  "South Sudan": "SS",
  Spain: "ES",
  "Sri Lanka": "LK",
  Sudan: "SD",
  Suriname: "SR",
  "Svalbard and Jan Mayen Islands": "SJ",
  Sweden: "SE",
  Switzerland: "CH",
  "Syrian Arab Republic": "SY",
  Tajikistan: "TJ",
  Taiwan: "TW",
  Thailand: "TH",
  "The United Kingdom": "GB",
  "Timor-Leste": "TL",
  Togo: "TG",
  Tokelau: "TK",
  Tonga: "TO",
  "Trinidad and Tobago": "TT",
  Tunisia: "TN",
  Turkey: "TR",
  Turkmenistan: "TM",
  "Turks and Caicos Islands": "TC",
  Tuvalu: "TV",
  Uganda: "UG",
  Ukraine: "UA",
  "United Arab Emirates": "AE",
  "United Republic of Tanzania": "TZ",
  "United States Virgin Islands": "VI",
  "United States of America": "US",
  Uruguay: "UY",
  Uzbekistan: "UZ",
  Vanuatu: "VU",
  "Venezuela (Bolivarian Republic of)": "VE",
  "Viet Nam": "VN",
  "Wallis and Futuna": "WF",
  "Western Sahara": "EH",
  Yemen: "YE",
  Zambia: "ZM",
  Zimbabwe: "ZW",
};

export const countryNameToTwoLetterIsoCountryCode = (country: string): TwoLetterIsoCountryCode | undefined => {
  return countryNameToTwoLetterIsoCountryCodeMap[country];
};
