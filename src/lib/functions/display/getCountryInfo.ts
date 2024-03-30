const countryData = {
  GER: {
    country: "Germany",
    emoji: "🇩🇪",
  },
  USA: {
    country: "United States",
    emoji: "🇺🇸",
  },
  RUS: {
    country: "Russia",
    emoji: "🇷🇺",
  },
  GBR: {
    country: "United Kingdom",
    emoji: "🇬🇧",
  },
  NED: {
    country: "Netherlands",
    emoji: "🇳🇱",
  },
  ESP: {
    country: "Spain",
    emoji: "🇪🇸",
  },
  POR: {
    country: "Portugal",
    emoji: "🇵🇹",
  },
  CAN: {
    country: "Canada",
    emoji: "🇨🇦",
  },
  ARG: {
    country: "Argentina",
    emoji: "🇦🇷",
  },
  AUS: {
    country: "Australia",
    emoji: "🇦🇺",
  },
  NZL: {
    country: "New Zealand",
    emoji: "🇳🇿",
  },
  UKR: {
    country: "Ukraine",
    emoji: "🇺🇦",
  },
  JPN: {
    country: "Japan",
    emoji: "🇯🇵",
  },
  SWE: {
    country: "Sweden",
    emoji: "🇸🇪",
  },
  CHN: {
    country: "China",
    emoji: "🇨🇳",
  },
  BEL: {
    country: "Belgium",
    emoji: "🇧🇪",
  },
  KAZ: {
    country: "Kazakhstan",
    emoji: "🇰🇿",
  },
  GRE: {
    country: "Greece",
    emoji: "🇬🇷",
  },
  RSA: {
    country: "South Africa",
    emoji: "🇿🇦",
  },
  FIN: {
    country: "Finland",
    emoji: "🇫🇮",
  },
  MEX: {
    country: "Mexico",
    emoji: "🇲🇽",
  },
  BRA: {
    country: "Brazil",
    emoji: "🇧🇷",
  },
  ITA: {
    country: "Italy",
    emoji: "🇮🇹",
  },
  FRA: {
    country: "France",
    emoji: "🇫🇷",
  },
  AUT: {
    country: "Austria",
    emoji: "🇦🇹",
  },
  SUI: {
    country: "Switzerland",
    emoji: "🇨🇭",
  },
  TUR: {
    country: "Turkey",
    emoji: "🇹🇷",
  },
  POL: {
    country: "Poland",
    emoji: "🇵🇱",
  },
  CZE: {
    country: "Czech Republic",
    emoji: "🇨🇿",
  },
  AZE: {
    country: "Azerbaijan",
    emoji: "🇦🇿",
  },
  IRN: {
    country: "Iran",
    emoji: "🇮🇷",
  },
  EGY: {
    country: "Egypt",
    emoji: "🇪🇬",
  },
};

export const getCountryName = (countryCode: string): string | null => {
  if (countryData.hasOwnProperty(countryCode)) {
    return countryData[countryCode].country;
  } else {
    return null;
  }
};

export const getCountryEmoji = (countryCode: string): string | null => {
  if (countryData.hasOwnProperty(countryCode)) {
    return countryData[countryCode].emoji;
  } else {
    return null;
  }
};
