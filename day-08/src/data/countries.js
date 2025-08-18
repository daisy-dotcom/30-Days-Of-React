const countriesDataOld = [
  {
    name: 'Afghanistan',
    capital: 'Kabul',
    languages: ['Pashto', 'Uzbek', 'Turkmen'],
    population: 27657145,
    flag: 'https://restcountries.eu/data/afg.svg',
    currency: 'Afghan afghani',
  },
  {
    name: 'Åland Islands',
    capital: 'Mariehamn',
    languages: ['Swedish'],
    population: 28875,
    flag: 'https://restcountries.eu/data/ala.svg',
    currency: 'Euro',
  },
  {
    name: 'Albania',
    capital: 'Tirana',
    languages: ['Albanian'],
    population: 2886026,
    flag: 'https://restcountries.eu/data/alb.svg',
    currency: 'Albanian lek',
  },
  {
    name: 'Algeria',
    capital: 'Algiers',
    languages: ['Arabic'],
    population: 40400000,
    flag: 'https://restcountries.eu/data/dza.svg',
    currency: 'Algerian dinar',
  },
  {
    name: 'American Samoa',
    capital: 'Pago Pago',
    languages: ['English', 'Samoan'],
    population: 57100,
    flag: 'https://restcountries.eu/data/asm.svg',
    currency: 'United State Dollar',
  },
  {
    name: 'Andorra',
    capital: 'Andorra la Vella',
    languages: ['Catalan'],
    population: 78014,
    flag: 'https://restcountries.eu/data/and.svg',
    currency: 'Euro',
  },
  {
    name: 'Angola',
    capital: 'Luanda',
    languages: ['Portuguese'],
    population: 25868000,
    flag: 'https://restcountries.eu/data/ago.svg',
    currency: 'Angolan kwanza',
  },
  {
    name: 'Anguilla',
    capital: 'The Valley',
    languages: ['English'],
    population: 13452,
    flag: 'https://restcountries.eu/data/aia.svg',
    currency: 'East Caribbean dollar',
  },
  {
    name: 'Antarctica',
    capital: '',
    languages: ['English', 'Russian'],
    population: 1000,
    flag: 'https://restcountries.eu/data/ata.svg',
    currency: 'Australian dollar',
  },
  {
    name: 'Antigua and Barbuda',
    capital: "Saint John's",
    languages: ['English'],
    population: 86295,
    flag: 'https://restcountries.eu/data/atg.svg',
    currency: 'East Caribbean dollar',
  },
  {
    name: 'Argentina',
    capital: 'Buenos Aires',
    languages: ['Spanish', 'Guaraní'],
    population: 43590400,
    flag: 'https://restcountries.eu/data/arg.svg',
    currency: 'Argentine peso',
  },
  {
    name: 'Armenia',
    capital: 'Yerevan',
    languages: ['Armenian', 'Russian'],
    population: 2994400,
    flag: 'https://restcountries.eu/data/arm.svg',
    currency: 'Armenian dram',
  },
  {
    name: 'Aruba',
    capital: 'Oranjestad',
    languages: ['Dutch', '(Eastern) Punjabi'],
    population: 107394,
    flag: 'https://restcountries.eu/data/abw.svg',
    currency: 'Aruban florin',
  },
  {
    name: 'Australia',
    capital: 'Canberra',
    languages: ['English'],
    population: 24117360,
    flag: 'https://restcountries.eu/data/aus.svg',
    currency: 'Australian dollar',
  },
  {
    name: 'Austria',
    capital: 'Vienna',
    languages: ['German'],
    population: 8725931,
    flag: 'https://restcountries.eu/data/aut.svg',
    currency: 'Euro',
  },
  {
    name: 'Azerbaijan',
    capital: 'Baku',
    languages: ['Azerbaijani'],
    population: 9730500,
    flag: 'https://restcountries.eu/data/aze.svg',
    currency: 'Azerbaijani manat',
  },
  {
    name: 'Bahamas',
    capital: 'Nassau',
    languages: ['English'],
    population: 378040,
    flag: 'https://restcountries.eu/data/bhs.svg',
    currency: 'Bahamian dollar',
  },
  {
    name: 'Bahrain',
    capital: 'Manama',
    languages: ['Arabic'],
    population: 1404900,
    flag: 'https://restcountries.eu/data/bhr.svg',
    currency: 'Bahraini dinar',
  },
  {
    name: 'Bangladesh',
    capital: 'Dhaka',
    languages: ['Bengali'],
    population: 161006790,
    flag: 'https://restcountries.eu/data/bgd.svg',
    currency: 'Bangladeshi taka',
  },
  {
    name: 'Barbados',
    capital: 'Bridgetown',
    languages: ['English'],
    population: 285000,
    flag: 'https://restcountries.eu/data/brb.svg',
    currency: 'Barbadian dollar',
  },
  {
    name: 'Belarus',
    capital: 'Minsk',
    languages: ['Belarusian', 'Russian'],
    population: 9498700,
    flag: 'https://restcountries.eu/data/blr.svg',
    currency: 'New Belarusian ruble',
  },
  {
    name: 'Belgium',
    capital: 'Brussels',
    languages: ['Dutch', 'French', 'German'],
    population: 11319511,
    flag: 'https://restcountries.eu/data/bel.svg',
    currency: 'Euro',
  },
  {
    name: 'Belize',
    capital: 'Belmopan',
    languages: ['English', 'Spanish'],
    population: 370300,
    flag: 'https://restcountries.eu/data/blz.svg',
    currency: 'Belize dollar',
  },
  {
    name: 'Benin',
    capital: 'Porto-Novo',
    languages: ['French'],
    population: 10653654,
    flag: 'https://restcountries.eu/data/ben.svg',
    currency: 'West African CFA franc',
  },
  {
    name: 'Bermuda',
    capital: 'Hamilton',
    languages: ['English'],
    population: 61954,
    flag: 'https://restcountries.eu/data/bmu.svg',
    currency: 'Bermudian dollar',
  },
  {
    name: 'Bhutan',
    capital: 'Thimphu',
    languages: ['Dzongkha'],
    population: 775620,
    flag: 'https://restcountries.eu/data/btn.svg',
    currency: 'Bhutanese ngultrum',
  },
  {
    name: 'Bolivia (Plurinational State of)',
    capital: 'Sucre',
    languages: ['Spanish', 'Aymara', 'Quechua'],
    population: 10985059,
    flag: 'https://restcountries.eu/data/bol.svg',
    currency: 'Bolivian boliviano',
  },
  {
    name: 'Bonaire, Sint Eustatius and Saba',
    capital: 'Kralendijk',
    languages: ['Dutch'],
    population: 17408,
    flag: 'https://restcountries.eu/data/bes.svg',
    currency: 'United States dollar',
  },
  {
    name: 'Bosnia and Herzegovina',
    capital: 'Sarajevo',
    languages: ['Bosnian', 'Croatian', 'Serbian'],
    population: 3531159,
    flag: 'https://restcountries.eu/data/bih.svg',
    currency: 'Bosnia and Herzegovina convertible mark',
  },
  {
    name: 'Botswana',
    capital: 'Gaborone',
    languages: ['English', 'Tswana'],
    population: 2141206,
    flag: 'https://restcountries.eu/data/bwa.svg',
    currency: 'Botswana pula',
  },
  {
    name: 'Bouvet Island',
    capital: '',
    languages: ['Norwegian', 'Norwegian Bokmål', 'Norwegian Nynorsk'],
    population: 0,
    flag: 'https://restcountries.eu/data/bvt.svg',
    currency: 'Norwegian krone',
  },
  {
    name: 'Brazil',
    capital: 'Brasília',
    languages: ['Portuguese'],
    population: 206135893,
    flag: 'https://restcountries.eu/data/bra.svg',
    currency: 'Brazilian real',
  },
  {
    name: 'British Indian Ocean Territory',
    capital: 'Diego Garcia',
    languages: ['English'],
    population: 3000,
    flag: 'https://restcountries.eu/data/iot.svg',
    currency: 'United States dollar',
  },
  {
    name: 'United States Minor Outlying Islands',
    capital: '',
    languages: ['English'],
    population: 300,
    flag: 'https://restcountries.eu/data/umi.svg',
    currency: 'United States Dollar',
  },
  {
    name: 'Virgin Islands (British)',
    capital: 'Road Town',
    languages: ['English'],
    population: 28514,
    flag: 'https://restcountries.eu/data/vgb.svg',
    currency: '[D]',
  },
  {
    name: 'Virgin Islands (U.S.)',
    capital: 'Charlotte Amalie',
    languages: ['English'],
    population: 114743,
    flag: 'https://restcountries.eu/data/vir.svg',
    currency: 'United States dollar',
  },
  {
    name: 'Brunei Darussalam',
    capital: 'Bandar Seri Begawan',
    languages: ['Malay'],
    population: 411900,
    flag: 'https://restcountries.eu/data/brn.svg',
    currency: 'Brunei dollar',
  },
  {
    name: 'Bulgaria',
    capital: 'Sofia',
    languages: ['Bulgarian'],
    population: 7153784,
    flag: 'https://restcountries.eu/data/bgr.svg',
    currency: 'Bulgarian lev',
  },
  {
    name: 'Burkina Faso',
    capital: 'Ouagadougou',
    languages: ['French', 'Fula'],
    population: 19034397,
    flag: 'https://restcountries.eu/data/bfa.svg',
    currency: 'West African CFA franc',
  },
  {
    name: 'Burundi',
    capital: 'Bujumbura',
    languages: ['French', 'Kirundi'],
    population: 10114505,
    flag: 'https://restcountries.eu/data/bdi.svg',
    currency: 'Burundian franc',
  },
  {
    name: 'Cambodia',
    capital: 'Phnom Penh',
    languages: ['Khmer'],
    population: 15626444,
    flag: 'https://restcountries.eu/data/khm.svg',
    currency: 'Cambodian riel',
  },
  {
    name: 'Cameroon',
    capital: 'Yaoundé',
    languages: ['English', 'French'],
    population: 22709892,
    flag: 'https://restcountries.eu/data/cmr.svg',
    currency: 'Central African CFA franc',
  },
  {
    name: 'Canada',
    capital: 'Ottawa',
    languages: ['English', 'French'],
    population: 36155487,
    flag: 'https://restcountries.eu/data/can.svg',
    currency: 'Canadian dollar',
  },
  {
    name: 'Cabo Verde',
    capital: 'Praia',
    languages: ['Portuguese'],
    population: 531239,
    flag: 'https://restcountries.eu/data/cpv.svg',
    currency: 'Cape Verdean escudo',
  },
  {
    name: 'Cayman Islands',
    capital: 'George Town',
    languages: ['English'],
    population: 58238,
    flag: 'https://restcountries.eu/data/cym.svg',
    currency: 'Cayman Islands dollar',
  },
  {
    name: 'Central African Republic',
    capital: 'Bangui',
    languages: ['French', 'Sango'],
    population: 4998000,
    flag: 'https://restcountries.eu/data/caf.svg',
    currency: 'Central African CFA franc',
  },
  {
    name: 'Chad',
    capital: "N'Djamena",
    languages: ['French', 'Arabic'],
    population: 14497000,
    flag: 'https://restcountries.eu/data/tcd.svg',
    currency: 'Central African CFA franc',
  },
  {
    name: 'Chile',
    capital: 'Santiago',
    languages: ['Spanish'],
    population: 18191900,
    flag: 'https://restcountries.eu/data/chl.svg',
    currency: 'Chilean peso',
  },
  {
    name: 'China',
    capital: 'Beijing',
    languages: ['Chinese'],
    population: 1377422166,
    flag: 'https://restcountries.eu/data/chn.svg',
    currency: 'Chinese yuan',
  },
  {
    name: 'Christmas Island',
    capital: 'Flying Fish Cove',
    languages: ['English'],
    population: 2072,
    flag: 'https://restcountries.eu/data/cxr.svg',
    currency: 'Australian dollar',
  },
  {
    name: 'Cocos (Keeling) Islands',
    capital: 'West Island',
    languages: ['English'],
    population: 550,
    flag: 'https://restcountries.eu/data/cck.svg',
    currency: 'Australian dollar',
  },
  {
    name: 'Colombia',
    capital: 'Bogotá',
    languages: ['Spanish'],
    population: 48759958,
    flag: 'https://restcountries.eu/data/col.svg',
    currency: 'Colombian peso',
  },
  {
    name: 'Comoros',
    capital: 'Moroni',
    languages: ['Arabic', 'French'],
    population: 806153,
    flag: 'https://restcountries.eu/data/com.svg',
    currency: 'Comorian franc',
  },
  {
    name: 'Congo',
    capital: 'Brazzaville',
    languages: ['French', 'Lingala'],
    population: 4741000,
    flag: 'https://restcountries.eu/data/cog.svg',
    currency: 'Central African CFA franc',
  },
  {
    name: 'Congo (Democratic Republic of the)',
    capital: 'Kinshasa',
    languages: ['French', 'Lingala', 'Kongo', 'Swahili', 'Luba-Katanga'],
    population: 85026000,
    flag: 'https://restcountries.eu/data/cod.svg',
    currency: 'Congolese franc',
  },
  {
    name: 'Cook Islands',
    capital: 'Avarua',
    languages: ['English'],
    population: 18100,
    flag: 'https://restcountries.eu/data/cok.svg',
    currency: 'New Zealand dollar',
  },
  {
    name: 'Costa Rica',
    capital: 'San José',
    languages: ['Spanish'],
    population: 4890379,
    flag: 'https://restcountries.eu/data/cri.svg',
    currency: 'Costa Rican colón',
  },
  {
    name: 'Croatia',
    capital: 'Zagreb',
    languages: ['Croatian'],
    population: 4190669,
    flag: 'https://restcountries.eu/data/hrv.svg',
    currency: 'Croatian kuna',
  },
  {
    name: 'Cuba',
    capital: 'Havana',
    languages: ['Spanish'],
    population: 11239004,
    flag: 'https://restcountries.eu/data/cub.svg',
    currency: 'Cuban convertible peso',
  },
  {
    name: 'Curaçao',
    capital: 'Willemstad',
    languages: ['Dutch', '(Eastern) Punjabi', 'English'],
    population: 154843,
    flag: 'https://restcountries.eu/data/cuw.svg',
    currency: 'Netherlands Antillean guilder',
  },
  {
    name: 'Cyprus',
    capital: 'Nicosia',
    languages: ['Greek (modern)', 'Turkish', 'Armenian'],
    population: 847000,
    flag: 'https://restcountries.eu/data/cyp.svg',
    currency: 'Euro',
  },
  {
    name: 'Czech Republic',
    capital: 'Prague',
    languages: ['Czech', 'Slovak'],
    population: 10558524,
    flag: 'https://restcountries.eu/data/cze.svg',
    currency: 'Czech koruna',
  },
  {
    name: 'Denmark',
    capital: 'Copenhagen',
    languages: ['Danish'],
    population: 5717014,
    flag: 'https://restcountries.eu/data/dnk.svg',
    currency: 'Danish krone',
  },
  {
    name: 'Djibouti',
    capital: 'Djibouti',
    languages: ['French', 'Arabic'],
    population: 900000,
    flag: 'https://restcountries.eu/data/dji.svg',
    currency: 'Djiboutian franc',
  },
  {
    name: 'Dominica',
    capital: 'Roseau',
    languages: ['English'],
    population: 71293,
    flag: 'https://restcountries.eu/data/dma.svg',
    currency: 'East Caribbean dollar',
  },
  {
    name: 'Dominican Republic',
    capital: 'Santo Domingo',
    languages: ['Spanish'],
    population: 10075045,
    flag: 'https://restcountries.eu/data/dom.svg',
    currency: 'Dominican peso',
  },
  {
    name: 'Ecuador',
    capital: 'Quito',
    languages: ['Spanish'],
    population: 16545799,
    flag: 'https://restcountries.eu/data/ecu.svg',
    currency: 'United States dollar',
  },
  {
    name: 'Egypt',
    capital: 'Cairo',
    languages: ['Arabic'],
    population: 91290000,
    flag: 'https://restcountries.eu/data/egy.svg',
    currency: 'Egyptian pound',
  },
  {
    name: 'El Salvador',
    capital: 'San Salvador',
    languages: ['Spanish'],
    population: 6520675,
    flag: 'https://restcountries.eu/data/slv.svg',
    currency: 'United States dollar',
  },
  {
    name: 'Equatorial Guinea',
    capital: 'Malabo',
    languages: ['Spanish', 'French'],
    population: 1222442,
    flag: 'https://restcountries.eu/data/gnq.svg',
    currency: 'Central African CFA franc',
  },
  {
    name: 'Eritrea',
    capital: 'Asmara',
    languages: ['Tigrinya', 'Arabic', 'English'],
    population: 5352000,
    flag: 'https://restcountries.eu/data/eri.svg',
    currency: 'Eritrean nakfa',
  },
  {
    name: 'Estonia',
    capital: 'Tallinn',
    languages: ['Estonian'],
    population: 1315944,
    flag: 'https://restcountries.eu/data/est.svg',
    currency: 'Euro',
  },
  {
    name: 'Ethiopia',
    capital: 'Addis Ababa',
    languages: ['Amharic'],
    population: 92206005,
    flag: 'https://restcountries.eu/data/eth.svg',
    currency: 'Ethiopian birr',
  },
  {
    name: 'Falkland Islands (Malvinas)',
    capital: 'Stanley',
    languages: ['English'],
    population: 2563,
    flag: 'https://restcountries.eu/data/flk.svg',
    currency: 'Falkland Islands pound',
  },
  {
    name: 'Faroe Islands',
    capital: 'Tórshavn',
    languages: ['Faroese'],
    population: 49376,
    flag: 'https://restcountries.eu/data/fro.svg',
    currency: 'Danish krone',
  },
  {
    name: 'Fiji',
    capital: 'Suva',
    languages: ['English', 'Fijian', 'Hindi', 'Urdu'],
    population: 867000,
    flag: 'https://restcountries.eu/data/fji.svg',
    currency: 'Fijian dollar',
  },
  {
    name: 'Finland',
    capital: 'Helsinki',
    languages: ['Finnish', 'Swedish'],
    population: 5491817,
    flag: 'https://restcountries.eu/data/fin.svg',
    currency: 'Euro',
  },
  {
    name: 'France',
    capital: 'Paris',
    languages: ['French'],
    population: 66710000,
    flag: 'https://restcountries.eu/data/fra.svg',
    currency: 'Euro',
  },
  {
    name: 'French Guiana',
    capital: 'Cayenne',
    languages: ['French'],
    population: 254541,
    flag: 'https://restcountries.eu/data/guf.svg',
    currency: 'Euro',
  },
  {
    name: 'French Polynesia',
    capital: 'Papeetē',
    languages: ['French'],
    population: 271800,
    flag: 'https://restcountries.eu/data/pyf.svg',
    currency: 'CFP franc',
  },
  {
    name: 'French Southern Territories',
    capital: 'Port-aux-Français',
    languages: ['French'],
    population: 140,
    flag: 'https://restcountries.eu/data/atf.svg',
    currency: 'Euro',
  },
  {
    name: 'Gabon',
    capital: 'Libreville',
    languages: ['French'],
    population: 1802278,
    flag: 'https://restcountries.eu/data/gab.svg',
    currency: 'Central African CFA franc',
  },
  {
    name: 'Gambia',
    capital: 'Banjul',
    languages: ['English'],
    population: 1882450,
    flag: 'https://restcountries.eu/data/gmb.svg',
    currency: 'Gambian dalasi',
  },
  {
    name: 'Georgia',
    capital: 'Tbilisi',
    languages: ['Georgian'],
    population: 3720400,
    flag: 'https://restcountries.eu/data/geo.svg',
    currency: 'Georgian Lari',
  },
  {
    name: 'Germany',
    capital: 'Berlin',
    languages: ['German'],
    population: 81770900,
    flag: 'https://restcountries.eu/data/deu.svg',
    currency: 'Euro',
  },
  {
    name: 'Ghana',
    capital: 'Accra',
    languages: ['English'],
    population: 27670174,
    flag: 'https://restcountries.eu/data/gha.svg',
    currency: 'Ghanaian cedi',
  },
  {
    name: 'Gibraltar',
    capital: 'Gibraltar',
    languages: ['English'],
    population: 33140,
    flag: 'https://restcountries.eu/data/gib.svg',
    currency: 'Gibraltar pound',
  },
  {
    name: 'Greece',
    capital: 'Athens',
    languages: ['Greek (modern)'],
    population: 10858018,
    flag: 'https://restcountries.eu/data/grc.svg',
    currency: 'Euro',
  },
  {
    name: 'Greenland',
    capital: 'Nuuk',
    languages: ['Kalaallisut'],
    population: 55847,
    flag: 'https://restcountries.eu/data/grl.svg',
    currency: 'Danish krone',
  },
  {
    name: 'Grenada',
    capital: "St. George's",
    languages: ['English'],
    population: 103328,
    flag: 'https://restcountries.eu/data/grd.svg',
    currency: 'East Caribbean dollar',
  },
  {
    name: 'Guadeloupe',
    capital: 'Basse-Terre',
    languages: ['French'],
    population: 400132,
    flag: 'https://restcountries.eu/data/glp.svg',
    currency: 'Euro',
  },
  {
    name: 'Guam',
    capital: 'Hagåtña',
    languages: ['English', 'Chamorro', 'Spanish'],
    population: 184200,
    flag: 'https://restcountries.eu/data/gum.svg',
    currency: 'United States dollar',
  },
  {
    name: 'Guatemala',
    capital: 'Guatemala City',
    languages: ['Spanish'],
    population: 16176133,
    flag: 'https://restcountries.eu/data/gtm.svg',
    currency: 'Guatemalan quetzal',
  },
  {
    name: 'Guernsey',
    capital: 'St. Peter Port',
    languages: ['English', 'French'],
    population: 62999,
    flag: 'https://restcountries.eu/data/ggy.svg',
    currency: 'British pound',
  },
  {
    name: 'Guinea',
    capital: 'Conakry',
    languages: ['French', 'Fula'],
    population: 12947000,
    flag: 'https://restcountries.eu/data/gin.svg',
    currency: 'Guinean franc',
  },
  {
    name: 'Guinea-Bissau',
    capital: 'Bissau',
    languages: ['Portuguese'],
    population: 1547777,
    flag: 'https://restcountries.eu/data/gnb.svg',
    currency: 'West African CFA franc',
  },
  {
    name: 'Guyana',
    capital: 'Georgetown',
    languages: ['English'],
    population: 746900,
    flag: 'https://restcountries.eu/data/guy.svg',
    currency: 'Guyanese dollar',
  },
  {
    name: 'Haiti',
    capital: 'Port-au-Prince',
    languages: ['French', 'Haitian'],
    population: 11078033,
    flag: 'https://restcountries.eu/data/hti.svg',
    currency: 'Haitian gourde',
  },
  {
    name: 'Heard Island and McDonald Islands',
    capital: '',
    languages: ['English'],
    population: 0,
    flag: 'https://restcountries.eu/data/hmd.svg',
    currency: 'Australian dollar',
  },
  {
    name: 'Holy See',
    capital: 'Rome',
    languages: ['Latin', 'Italian', 'French', 'German'],
    population: 451,
    flag: 'https://restcountries.eu/data/vat.svg',
    currency: 'Euro',
  },
  {
    name: 'Honduras',
    capital: 'Tegucigalpa',
    languages: ['Spanish'],
    population: 8576532,
    flag: 'https://restcountries.eu/data/hnd.svg',
    currency: 'Honduran lempira',
  },
  {
    name: 'Hong Kong',
    capital: 'City of Victoria',
    languages: ['English', 'Chinese'],
    population: 7324300,
    flag: 'https://restcountries.eu/data/hkg.svg',
    currency: 'Hong Kong dollar',
  },
  {
    name: 'Hungary',
    capital: 'Budapest',
    languages: ['Hungarian'],
    population: 9823000,
    flag: 'https://restcountries.eu/data/hun.svg',
    currency: 'Hungarian forint',
  },
  {
    name: 'Iceland',
    capital: 'Reykjavík',
    languages: ['Icelandic'],
    population: 334300,
    flag: 'https://restcountries.eu/data/isl.svg',
    currency: 'Icelandic króna',
  },
  {
    name: 'India',
    capital: 'New Delhi',
    languages: ['Hindi', 'English'],
    population: 1295210000,
    flag: 'https://restcountries.eu/data/ind.svg',
    currency: 'Indian rupee',
  },
  {
    name: 'Indonesia',
    capital: 'Jakarta',
    languages: ['Indonesian'],
    population: 258705000,
    flag: 'https://restcountries.eu/data/idn.svg',
    currency: 'Indonesian rupiah',
  },
  {
    name: "Côte d'Ivoire",
    capital: 'Yamoussoukro',
    languages: ['French'],
    population: 22671331,
    flag: 'https://restcountries.eu/data/civ.svg',
    currency: 'West African CFA franc',
  },
  {
    name: 'Iran (Islamic Republic of)',
    capital: 'Tehran',
    languages: ['Persian (Farsi)'],
    population: 79369900,
    flag: 'https://restcountries.eu/data/irn.svg',
    currency: 'Iranian rial',
  },
  {
    name: 'Iraq',
    capital: 'Baghdad',
    languages: ['Arabic', 'Kurdish'],
    population: 37883543,
    flag: 'https://restcountries.eu/data/irq.svg',
    currency: 'Iraqi dinar',
  },
  {
    name: 'Ireland',
    capital: 'Dublin',
    languages: ['Irish', 'English'],
    population: 6378000,
    flag: 'https://restcountries.eu/data/irl.svg',
    currency: 'Euro',
  },
  {
    name: 'Isle of Man',
    capital: 'Douglas',
    languages: ['English', 'Manx'],
    population: 84497,
    flag: 'https://restcountries.eu/data/imn.svg',
    currency: 'British pound',
  },
  {
    name: 'Israel',
    capital: 'Jerusalem',
    languages: ['Hebrew (modern)', 'Arabic'],
    population: 8527400,
    flag: 'https://restcountries.eu/data/isr.svg',
    currency: 'Israeli new shekel',
  },
  {
    name: 'Italy',
    capital: 'Rome',
    languages: ['Italian'],
    population: 60665551,
    flag: 'https://restcountries.eu/data/ita.svg',
    currency: 'Euro',
  },
  {
    name: 'Jamaica',
    capital: 'Kingston',
    languages: ['English'],
    population: 2723246,
    flag: 'https://restcountries.eu/data/jam.svg',
    currency: 'Jamaican dollar',
  },
  {
    name: 'Japan',
    capital: 'Tokyo',
    languages: ['Japanese'],
    population: 126960000,
    flag: 'https://restcountries.eu/data/jpn.svg',
    currency: 'Japanese yen',
  },
  {
    name: 'Jersey',
    capital: 'Saint Helier',
    languages: ['English', 'French'],
    population: 100800,
    flag: 'https://restcountries.eu/data/jey.svg',
    currency: 'British pound',
  },
  {
    name: 'Jordan',
    capital: 'Amman',
    languages: ['Arabic'],
    population: 9531712,
    flag: 'https://restcountries.eu/data/jor.svg',
    currency: 'Jordanian dinar',
  },
  {
    name: 'Kazakhstan',
    capital: 'Astana',
    languages: ['Kazakh', 'Russian'],
    population: 17753200,
    flag: 'https://restcountries.eu/data/kaz.svg',
    currency: 'Kazakhstani tenge',
  },
  {
    name: 'Kenya',
    capital: 'Nairobi',
    languages: ['English', 'Swahili'],
    population: 47251000,
    flag: 'https://restcountries.eu/data/ken.svg',
    currency: 'Kenyan shilling',
  },
  {
    name: 'Kiribati',
    capital: 'South Tarawa',
    languages: ['English'],
    population: 113400,
    flag: 'https://restcountries.eu/data/kir.svg',
    currency: 'Australian dollar',
  },
  {
    name: 'Kuwait',
    capital: 'Kuwait City',
    languages: ['Arabic'],
    population: 4183658,
    flag: 'https://restcountries.eu/data/kwt.svg',
    currency: 'Kuwaiti dinar',
  },
  {
    name: 'Kyrgyzstan',
    capital: 'Bishkek',
    languages: ['Kyrgyz', 'Russian'],
    population: 6047800,
    flag: 'https://restcountries.eu/data/kgz.svg',
    currency: 'Kyrgyzstani som',
  },
  {
    name: "Lao People's Democratic Republic",
    capital: 'Vientiane',
    languages: ['Lao'],
    population: 6492400,
    flag: 'https://restcountries.eu/data/lao.svg',
    currency: 'Lao kip',
  },
  {
    name: 'Latvia',
    capital: 'Riga',
    languages: ['Latvian'],
    population: 1961600,
    flag: 'https://restcountries.eu/data/lva.svg',
    currency: 'Euro',
  },
  {
    name: 'Lebanon',
    capital: 'Beirut',
    languages: ['Arabic', 'French'],
    population: 5988000,
    flag: 'https://restcountries.eu/data/lbn.svg',
    currency: 'Lebanese pound',
  },
  {
    name: 'Lesotho',
    capital: 'Maseru',
    languages: ['English', 'Southern Sotho'],
    population: 1894194,
    flag: 'https://restcountries.eu/data/lso.svg',
    currency: 'Lesotho loti',
  },
  {
    name: 'Liberia',
    capital: 'Monrovia',
    languages: ['English'],
    population: 4615000,
    flag: 'https://restcountries.eu/data/lbr.svg',
    currency: 'Liberian dollar',
  },
  {
    name: 'Libya',
    capital: 'Tripoli',
    languages: ['Arabic'],
    population: 6385000,
    flag: 'https://restcountries.eu/data/lby.svg',
    currency: 'Libyan dinar',
  },
  {
    name: 'Liechtenstein',
    capital: 'Vaduz',
    languages: ['German'],
    population: 37623,
    flag: 'https://restcountries.eu/data/lie.svg',
    currency: 'Swiss franc',
  },
  {
    name: 'Lithuania',
    capital: 'Vilnius',
    languages: ['Lithuanian'],
    population: 2872294,
    flag: 'https://restcountries.eu/data/ltu.svg',
    currency: 'Euro',
  },
  {
    name: 'Luxembourg',
    capital: 'Luxembourg',
    languages: ['French', 'German', 'Luxembourgish'],
    population: 576200,
    flag: 'https://restcountries.eu/data/lux.svg',
    currency: 'Euro',
  },
  {
    name: 'Macao',
    capital: '',
    languages: ['Chinese', 'Portuguese'],
    population: 649100,
    flag: 'https://restcountries.eu/data/mac.svg',
    currency: 'Macanese pataca',
  },
  {
    name: 'Macedonia (the former Yugoslav Republic of)',
    capital: 'Skopje',
    languages: ['Macedonian'],
    population: 2058539,
    flag: 'https://restcountries.eu/data/mkd.svg',
    currency: 'Macedonian denar',
  },
  {
    name: 'Madagascar',
    capital: 'Antananarivo',
    languages: ['French', 'Malagasy'],
    population: 22434363,
    flag: 'https://restcountries.eu/data/mdg.svg',
    currency: 'Malagasy ariary',
  },
  {
    name: 'Malawi',
    capital: 'Lilongwe',
    languages: ['English', 'Chichewa'],
    population: 16832910,
    flag: 'https://restcountries.eu/data/mwi.svg',
    currency: 'Malawian kwacha',
  },
  {
    name: 'Malaysia',
    capital: 'Kuala Lumpur',
    languages: ['Malaysian'],
    population: 31405416,
    flag: 'https://restcountries.eu/data/mys.svg',
    currency: 'Malaysian ringgit',
  },
  {
    name: 'Maldives',
    capital: 'Malé',
    languages: ['Divehi'],
    population: 344023,
    flag: 'https://restcountries.eu/data/mdv.svg',
    currency: 'Maldivian rufiyaa',
  },
  {
    name: 'Mali',
    capital: 'Bamako',
    languages: ['French'],
    population: 18135000,
    flag: 'https://restcountries.eu/data/mli.svg',
    currency: 'West African CFA franc',
  },
  {
    name: 'Malta',
    capital: 'Valletta',
    languages: ['Maltese', 'English'],
    population: 425384,
    flag: 'https://restcountries.eu/data/mlt.svg',
    currency: 'Euro',
  },
  {
    name: 'Marshall Islands',
    capital: 'Majuro',
    languages: ['English', 'Marshallese'],
    population: 54880,
    flag: 'https://restcountries.eu/data/mhl.svg',
    currency: 'United States dollar',
  },
  {
    name: 'Martinique',
    capital: 'Fort-de-France',
    languages: ['French'],
    population: 378243,
    flag: 'https://restcountries.eu/data/mtq.svg',
    currency: 'Euro',
  },
  {
    name: 'Mauritania',
    capital: 'Nouakchott',
    languages: ['Arabic'],
    population: 3718678,
    flag: 'https://restcountries.eu/data/mrt.svg',
    currency: 'Mauritanian ouguiya',
  },
  {
    name: 'Mauritius',
    capital: 'Port Louis',
    languages: ['English'],
    population: 1262879,
    flag: 'https://restcountries.eu/data/mus.svg',
    currency: 'Mauritian rupee',
  },
  {
    name: 'Mayotte',
    capital: 'Mamoudzou',
    languages: ['French'],
    population: 226915,
    flag: 'https://restcountries.eu/data/myt.svg',
    currency: 'Euro',
  },
  {
    name: 'Mexico',
    capital: 'Mexico City',
    languages: ['Spanish'],
    population: 122273473,
    flag: 'https://restcountries.eu/data/mex.svg',
    currency: 'Mexican peso',
  },
  {
    name: 'Micronesia (Federated States of)',
    capital: 'Palikir',
    languages: ['English'],
    population: 102800,
    flag: 'https://restcountries.eu/data/fsm.svg',
    currency: '[D]',
  },
  {
    name: 'Moldova (Republic of)',
    capital: 'Chișinău',
    languages: ['Romanian'],
    population: 3553100,
    flag: 'https://restcountries.eu/data/mda.svg',
    currency: 'Moldovan leu',
  },
  {
    name: 'Monaco',
    capital: 'Monaco',
    languages: ['French'],
    population: 38400,
    flag: 'https://restcountries.eu/data/mco.svg',
    currency: 'Euro',
  },
  {
    name: 'Mongolia',
    capital: 'Ulan Bator',
    languages: ['Mongolian'],
    population: 3093100,
    flag: 'https://restcountries.eu/data/mng.svg',
    currency: 'Mongolian tögrög',
  },
  {
    name: 'Montenegro',
    capital: 'Podgorica',
    languages: ['Serbian', 'Bosnian', 'Albanian', 'Croatian'],
    population: 621810,
    flag: 'https://restcountries.eu/data/mne.svg',
    currency: 'Euro',
  },
  {
    name: 'Montserrat',
    capital: 'Plymouth',
    languages: ['English'],
    population: 4922,
    flag: 'https://restcountries.eu/data/msr.svg',
    currency: 'East Caribbean dollar',
  },
  {
    name: 'Morocco',
    capital: 'Rabat',
    languages: ['Arabic'],
    population: 33337529,
    flag: 'https://restcountries.eu/data/mar.svg',
    currency: 'Moroccan dirham',
  },
  {
    name: 'Mozambique',
    capital: 'Maputo',
    languages: ['Portuguese'],
    population: 26423700,
    flag: 'https://restcountries.eu/data/moz.svg',
    currency: 'Mozambican metical',
  },
  {
    name: 'Myanmar',
    capital: 'Naypyidaw',
    languages: ['Burmese'],
    population: 51419420,
    flag: 'https://restcountries.eu/data/mmr.svg',
    currency: 'Burmese kyat',
  },
  {
    name: 'Namibia',
    capital: 'Windhoek',
    languages: ['English', 'Afrikaans'],
    population: 2324388,
    flag: 'https://restcountries.eu/data/nam.svg',
    currency: 'Namibian dollar',
  },
  {
    name: 'Nauru',
    capital: 'Yaren',
    languages: ['English', 'Nauruan'],
    population: 10084,
    flag: 'https://restcountries.eu/data/nru.svg',
    currency: 'Australian dollar',
  },
  {
    name: 'Nepal',
    capital: 'Kathmandu',
    languages: ['Nepali'],
    population: 28431500,
    flag: 'https://restcountries.eu/data/npl.svg',
    currency: 'Nepalese rupee',
  },
  {
    name: 'Netherlands',
    capital: 'Amsterdam',
    languages: ['Dutch'],
    population: 17019800,
    flag: 'https://restcountries.eu/data/nld.svg',
    currency: 'Euro',
  },
  {
    name: 'New Caledonia',
    capital: 'Nouméa',
    languages: ['French'],
    population: 268767,
    flag: 'https://restcountries.eu/data/ncl.svg',
    currency: 'CFP franc',
  },
  {
    name: 'New Zealand',
    capital: 'Wellington',
    languages: ['English', 'Māori'],
    population: 4697854,
    flag: 'https://restcountries.eu/data/nzl.svg',
    currency: 'New Zealand dollar',
  },
  {
    name: 'Nicaragua',
    capital: 'Managua',
    languages: ['Spanish'],
    population: 6262703,
    flag: 'https://restcountries.eu/data/nic.svg',
    currency: 'Nicaraguan córdoba',
  },
  {
    name: 'Niger',
    capital: 'Niamey',
    languages: ['French'],
    population: 20715000,
    flag: 'https://restcountries.eu/data/ner.svg',
    currency: 'West African CFA franc',
  },
  {
    name: 'Nigeria',
    capital: 'Abuja',
    languages: ['English'],
    population: 186988000,
    flag: 'https://restcountries.eu/data/nga.svg',
    currency: 'Nigerian naira',
  },
  {
    name: 'Niue',
    capital: 'Alofi',
    languages: ['English'],
    population: 1470,
    flag: 'https://restcountries.eu/data/niu.svg',
    currency: 'New Zealand dollar',
  },
  {
    name: 'Norfolk Island',
    capital: 'Kingston',
    languages: ['English'],
    population: 2302,
    flag: 'https://restcountries.eu/data/nfk.svg',
    currency: 'Australian dollar',
  },
  {
    name: "Korea (Democratic People's Republic of)",
    capital: 'Pyongyang',
    languages: ['Korean'],
    population: 25281000,
    flag: 'https://restcountries.eu/data/prk.svg',
    currency: 'North Korean won',
  },
  {
    name: 'Northern Mariana Islands',
    capital: 'Saipan',
    languages: ['English', 'Chamorro'],
    population: 56940,
    flag: 'https://restcountries.eu/data/mnp.svg',
    currency: 'United States dollar',
  },
  {
    name: 'Norway',
    capital: 'Oslo',
    languages: ['Norwegian', 'Norwegian Bokmål', 'Norwegian Nynorsk'],
    population: 5223256,
    flag: 'https://restcountries.eu/data/nor.svg',
    currency: 'Norwegian krone',
  },
  {
    name: 'Oman',
    capital: 'Muscat',
    languages: ['Arabic'],
    population: 4420133,
    flag: 'https://restcountries.eu/data/omn.svg',
    currency: 'Omani rial',
  },
  {
    name: 'Pakistan',
    capital: 'Islamabad',
    languages: ['English', 'Urdu'],
    population: 194125062,
    flag: 'https://restcountries.eu/data/pak.svg',
    currency: 'Pakistani rupee',
  },
  {
    name: 'Palau',
    capital: 'Ngerulmud',
    languages: ['English'],
    population: 17950,
    flag: 'https://restcountries.eu/data/plw.svg',
    currency: '[E]',
  },
  {
    name: 'Palestine, State of',
    capital: 'Ramallah',
    languages: ['Arabic'],
    population: 4682467,
    flag: 'https://restcountries.eu/data/pse.svg',
    currency: 'Israeli new sheqel',
  },
  {
    name: 'Panama',
    capital: 'Panama City',
    languages: ['Spanish'],
    population: 3814672,
    flag: 'https://restcountries.eu/data/pan.svg',
    currency: 'Panamanian balboa',
  },
  {
    name: 'Papua New Guinea',
    capital: 'Port Moresby',
    languages: ['English'],
    population: 8083700,
    flag: 'https://restcountries.eu/data/png.svg',
    currency: 'Papua New Guinean kina',
  },
  {
    name: 'Paraguay',
    capital: 'Asunción',
    languages: ['Spanish', 'Guaraní'],
    population: 6854536,
    flag: 'https://restcountries.eu/data/pry.svg',
    currency: 'Paraguayan guaraní',
  },
  {
    name: 'Peru',
    capital: 'Lima',
    languages: ['Spanish'],
    population: 31488700,
    flag: 'https://restcountries.eu/data/per.svg',
    currency: 'Peruvian sol',
  },
  {
    name: 'Philippines',
    capital: 'Manila',
    languages: ['English'],
    population: 103279800,
    flag: 'https://restcountries.eu/data/phl.svg',
    currency: 'Philippine peso',
  },
  {
    name: 'Pitcairn',
    capital: 'Adamstown',
    languages: ['English'],
    population: 56,
    flag: 'https://restcountries.eu/data/pcn.svg',
    currency: 'New Zealand dollar',
  },
  {
    name: 'Poland',
    capital: 'Warsaw',
    languages: ['Polish'],
    population: 38437239,
    flag: 'https://restcountries.eu/data/pol.svg',
    currency: 'Polish złoty',
  },
  {
    name: 'Portugal',
    capital: 'Lisbon',
    languages: ['Portuguese'],
    population: 10374822,
    flag: 'https://restcountries.eu/data/prt.svg',
    currency: 'Euro',
  },
  {
    name: 'Puerto Rico',
    capital: 'San Juan',
    languages: ['Spanish', 'English'],
    population: 3474182,
    flag: 'https://restcountries.eu/data/pri.svg',
    currency: 'United States dollar',
  },
  {
    name: 'Qatar',
    capital: 'Doha',
    languages: ['Arabic'],
    population: 2587564,
    flag: 'https://restcountries.eu/data/qat.svg',
    currency: 'Qatari riyal',
  },
  {
    name: 'Republic of Kosovo',
    capital: 'Pristina',
    languages: ['Albanian', 'Serbian'],
    population: 1733842,
    flag: 'https://restcountries.eu/data/kos.svg',
    currency: 'Euro',
  },
  {
    name: 'Réunion',
    capital: 'Saint-Denis',
    languages: ['French'],
    population: 840974,
    flag: 'https://restcountries.eu/data/reu.svg',
    currency: 'Euro',
  },
  {
    name: 'Romania',
    capital: 'Bucharest',
    languages: ['Romanian'],
    population: 19861408,
    flag: 'https://restcountries.eu/data/rou.svg',
    currency: 'Romanian leu',
  },
  {
    name: 'Russian Federation',
    capital: 'Moscow',
    languages: ['Russian'],
    population: 146599183,
    flag: 'https://restcountries.eu/data/rus.svg',
    currency: 'Russian ruble',
  },
  {
    name: 'Rwanda',
    capital: 'Kigali',
    languages: ['Kinyarwanda', 'English', 'French'],
    population: 11553188,
    flag: 'https://restcountries.eu/data/rwa.svg',
    currency: 'Rwandan franc',
  },
  {
    name: 'Saint Barthélemy',
    capital: 'Gustavia',
    languages: ['French'],
    population: 9417,
    flag: 'https://restcountries.eu/data/blm.svg',
    currency: 'Euro',
  },
  {
    name: 'Saint Helena, Ascension and Tristan da Cunha',
    capital: 'Jamestown',
    languages: ['English'],
    population: 4255,
    flag: 'https://restcountries.eu/data/shn.svg',
    currency: 'Saint Helena pound',
  },
  {
    name: 'Saint Kitts and Nevis',
    capital: 'Basseterre',
    languages: ['English'],
    population: 46204,
    flag: 'https://restcountries.eu/data/kna.svg',
    currency: 'East Caribbean dollar',
  },
  {
    name: 'Saint Lucia',
    capital: 'Castries',
    languages: ['English'],
    population: 186000,
    flag: 'https://restcountries.eu/data/lca.svg',
    currency: 'East Caribbean dollar',
  },
  {
    name: 'Saint Martin (French part)',
    capital: 'Marigot',
    languages: ['English', 'French', 'Dutch'],
    population: 36979,
    flag: 'https://restcountries.eu/data/maf.svg',
    currency: 'Euro',
  },
  {
    name: 'Saint Pierre and Miquelon',
    capital: 'Saint-Pierre',
    languages: ['French'],
    population: 6069,
    flag: 'https://restcountries.eu/data/spm.svg',
    currency: 'Euro',
  },
  {
    name: 'Saint Vincent and the Grenadines',
    capital: 'Kingstown',
    languages: ['English'],
    population: 109991,
    flag: 'https://restcountries.eu/data/vct.svg',
    currency: 'East Caribbean dollar',
  },
  {
    name: 'Samoa',
    capital: 'Apia',
    languages: ['Samoan', 'English'],
    population: 194899,
    flag: 'https://restcountries.eu/data/wsm.svg',
    currency: 'Samoan tālā',
  },
  {
    name: 'San Marino',
    capital: 'City of San Marino',
    languages: ['Italian'],
    population: 33005,
    flag: 'https://restcountries.eu/data/smr.svg',
    currency: 'Euro',
  },
  {
    name: 'Sao Tome and Principe',
    capital: 'São Tomé',
    languages: ['Portuguese'],
    population: 187356,
    flag: 'https://restcountries.eu/data/stp.svg',
    currency: 'São Tomé and Príncipe dobra',
  },
  {
    name: 'Saudi Arabia',
    capital: 'Riyadh',
    languages: ['Arabic'],
    population: 32248200,
    flag: 'https://restcountries.eu/data/sau.svg',
    currency: 'Saudi riyal',
  },
  {
    name: 'Senegal',
    capital: 'Dakar',
    languages: ['French'],
    population: 14799859,
    flag: 'https://restcountries.eu/data/sen.svg',
    currency: 'West African CFA franc',
  },
  {
    name: 'Serbia',
    capital: 'Belgrade',
    languages: ['Serbian'],
    population: 7076372,
    flag: 'https://restcountries.eu/data/srb.svg',
    currency: 'Serbian dinar',
  },
  {
    name: 'Seychelles',
    capital: 'Victoria',
    languages: ['French', 'English'],
    population: 91400,
    flag: 'https://restcountries.eu/data/syc.svg',
    currency: 'Seychellois rupee',
  },
  {
    name: 'Sierra Leone',
    capital: 'Freetown',
    languages: ['English'],
    population: 7075641,
    flag: 'https://restcountries.eu/data/sle.svg',
    currency: 'Sierra Leonean leone',
  },
  {
    name: 'Singapore',
    capital: 'Singapore',
    languages: ['English', 'Malay', 'Tamil', 'Chinese'],
    population: 5535000,
    flag: 'https://restcountries.eu/data/sgp.svg',
    currency: 'Brunei dollar',
  },
  {
    name: 'Sint Maarten (Dutch part)',
    capital: 'Philipsburg',
    languages: ['Dutch', 'English'],
    population: 38247,
    flag: 'https://restcountries.eu/data/sxm.svg',
    currency: 'Netherlands Antillean guilder',
  },
  {
    name: 'Slovakia',
    capital: 'Bratislava',
    languages: ['Slovak'],
    population: 5426252,
    flag: 'https://restcountries.eu/data/svk.svg',
    currency: 'Euro',
  },
  {
    name: 'Slovenia',
    capital: 'Ljubljana',
    languages: ['Slovene'],
    population: 2064188,
    flag: 'https://restcountries.eu/data/svn.svg',
    currency: 'Euro',
  },
  {
    name: 'Solomon Islands',
    capital: 'Honiara',
    languages: ['English'],
    population: 642000,
    flag: 'https://restcountries.eu/data/slb.svg',
    currency: 'Solomon Islands dollar',
  },
  {
    name: 'Somalia',
    capital: 'Mogadishu',
    languages: ['Somali', 'Arabic'],
    population: 11079000,
    flag: 'https://restcountries.eu/data/som.svg',
    currency: 'Somali shilling',
  },
  {
    name: 'South Africa',
    capital: 'Pretoria',
    languages: [
      'Afrikaans',
      'English',
      'Southern Ndebele',
      'Southern Sotho',
      'Swati',
      'Tswana',
      'Tsonga',
      'Venda',
      'Xhosa',
      'Zulu',
    ],
    population: 55653654,
    flag: 'https://restcountries.eu/data/zaf.svg',
    currency: 'South African rand',
  },
  {
    name: 'South Georgia and the South Sandwich Islands',
    capital: 'King Edward Point',
    languages: ['English'],
    population: 30,
    flag: 'https://restcountries.eu/data/sgs.svg',
    currency: 'British pound',
  },
  {
    name: 'Korea (Republic of)',
    capital: 'Seoul',
    languages: ['Korean'],
    population: 50801405,
    flag: 'https://restcountries.eu/data/kor.svg',
    currency: 'South Korean won',
  },
  {
    name: 'South Sudan',
    capital: 'Juba',
    languages: ['English'],
    population: 12131000,
    flag: 'https://restcountries.eu/data/ssd.svg',
    currency: 'South Sudanese pound',
  },
  {
    name: 'Spain',
    capital: 'Madrid',
    languages: ['Spanish'],
    population: 46438422,
    flag: 'https://restcountries.eu/data/esp.svg',
    currency: 'Euro',
  },
  {
    name: 'Sri Lanka',
    capital: 'Colombo',
    languages: ['Sinhalese', 'Tamil'],
    population: 20966000,
    flag: 'https://restcountries.eu/data/lka.svg',
    currency: 'Sri Lankan rupee',
  },
  {
    name: 'Sudan',
    capital: 'Khartoum',
    languages: ['Arabic', 'English'],
    population: 39598700,
    flag: 'https://restcountries.eu/data/sdn.svg',
    currency: 'Sudanese pound',
  },
  {
    name: 'Suriname',
    capital: 'Paramaribo',
    languages: ['Dutch'],
    population: 541638,
    flag: 'https://restcountries.eu/data/sur.svg',
    currency: 'Surinamese dollar',
  },
  {
    name: 'Svalbard and Jan Mayen',
    capital: 'Longyearbyen',
    languages: ['Norwegian'],
    population: 2562,
    flag: 'https://restcountries.eu/data/sjm.svg',
    currency: 'Norwegian krone',
  },
  {
    name: 'Swaziland',
    capital: 'Lobamba',
    languages: ['English', 'Swati'],
    population: 1132657,
    flag: 'https://restcountries.eu/data/swz.svg',
    currency: 'Swazi lilangeni',
  },
  {
    name: 'Sweden',
    capital: 'Stockholm',
    languages: ['Swedish'],
    population: 9894888,
    flag: 'https://restcountries.eu/data/swe.svg',
    currency: 'Swedish krona',
  },
  {
    name: 'Switzerland',
    capital: 'Bern',
    languages: ['German', 'French', 'Italian'],
    population: 8341600,
    flag: 'https://restcountries.eu/data/che.svg',
    currency: 'Swiss franc',
  },
  {
    name: 'Syrian Arab Republic',
    capital: 'Damascus',
    languages: ['Arabic'],
    population: 18564000,
    flag: 'https://restcountries.eu/data/syr.svg',
    currency: 'Syrian pound',
  },
  {
    name: 'Taiwan',
    capital: 'Taipei',
    languages: ['Chinese'],
    population: 23503349,
    flag: 'https://restcountries.eu/data/twn.svg',
    currency: 'New Taiwan dollar',
  },
  {
    name: 'Tajikistan',
    capital: 'Dushanbe',
    languages: ['Tajik', 'Russian'],
    population: 8593600,
    flag: 'https://restcountries.eu/data/tjk.svg',
    currency: 'Tajikistani somoni',
  },
  {
    name: 'Tanzania, United Republic of',
    capital: 'Dodoma',
    languages: ['Swahili', 'English'],
    population: 55155000,
    flag: 'https://restcountries.eu/data/tza.svg',
    currency: 'Tanzanian shilling',
  },
  {
    name: 'Thailand',
    capital: 'Bangkok',
    languages: ['Thai'],
    population: 65327652,
    flag: 'https://restcountries.eu/data/tha.svg',
    currency: 'Thai baht',
  },
  {
    name: 'Timor-Leste',
    capital: 'Dili',
    languages: ['Portuguese'],
    population: 1167242,
    flag: 'https://restcountries.eu/data/tls.svg',
    currency: 'United States dollar',
  },
  {
    name: 'Togo',
    capital: 'Lomé',
    languages: ['French'],
    population: 7143000,
    flag: 'https://restcountries.eu/data/tgo.svg',
    currency: 'West African CFA franc',
  },
  {
    name: 'Tokelau',
    capital: 'Fakaofo',
    languages: ['English'],
    population: 1411,
    flag: 'https://restcountries.eu/data/tkl.svg',
    currency: 'New Zealand dollar',
  },
  {
    name: 'Tonga',
    capital: "Nuku'alofa",
    languages: ['English', 'Tonga (Tonga Islands)'],
    population: 103252,
    flag: 'https://restcountries.eu/data/ton.svg',
    currency: 'Tongan paʻanga',
  },
  {
    name: 'Trinidad and Tobago',
    capital: 'Port of Spain',
    languages: ['English'],
    population: 1349667,
    flag: 'https://restcountries.eu/data/tto.svg',
    currency: 'Trinidad and Tobago dollar',
  },
  {
    name: 'Tunisia',
    capital: 'Tunis',
    languages: ['Arabic'],
    population: 11154400,
    flag: 'https://restcountries.eu/data/tun.svg',
    currency: 'Tunisian dinar',
  },
  {
    name: 'Turkey',
    capital: 'Ankara',
    languages: ['Turkish'],
    population: 78741053,
    flag: 'https://restcountries.eu/data/tur.svg',
    currency: 'Turkish lira',
  },
  {
    name: 'Turkmenistan',
    capital: 'Ashgabat',
    languages: ['Turkmen', 'Russian'],
    population: 4751120,
    flag: 'https://restcountries.eu/data/tkm.svg',
    currency: 'Turkmenistan manat',
  },
  {
    name: 'Turks and Caicos Islands',
    capital: 'Cockburn Town',
    languages: ['English'],
    population: 31458,
    flag: 'https://restcountries.eu/data/tca.svg',
    currency: 'United States dollar',
  },
  {
    name: 'Tuvalu',
    capital: 'Funafuti',
    languages: ['English'],
    population: 10640,
    flag: 'https://restcountries.eu/data/tuv.svg',
    currency: 'Australian dollar',
  },
  {
    name: 'Uganda',
    capital: 'Kampala',
    languages: ['English', 'Swahili'],
    population: 33860700,
    flag: 'https://restcountries.eu/data/uga.svg',
    currency: 'Ugandan shilling',
  },
  {
    name: 'Ukraine',
    capital: 'Kiev',
    languages: ['Ukrainian'],
    population: 42692393,
    flag: 'https://restcountries.eu/data/ukr.svg',
    currency: 'Ukrainian hryvnia',
  },
  {
    name: 'United Arab Emirates',
    capital: 'Abu Dhabi',
    languages: ['Arabic'],
    population: 9856000,
    flag: 'https://restcountries.eu/data/are.svg',
    currency: 'United Arab Emirates dirham',
  },
  {
    name: 'United Kingdom of Great Britain and Northern Ireland',
    capital: 'London',
    languages: ['English'],
    population: 65110000,
    flag: 'https://restcountries.eu/data/gbr.svg',
    currency: 'British pound',
  },
  {
    name: 'United States of America',
    capital: 'Washington, D.C.',
    languages: ['English'],
    population: 323947000,
    flag: 'https://restcountries.eu/data/usa.svg',
    currency: 'United States dollar',
  },
  {
    name: 'Uruguay',
    capital: 'Montevideo',
    languages: ['Spanish'],
    population: 3480222,
    flag: 'https://restcountries.eu/data/ury.svg',
    currency: 'Uruguayan peso',
  },
  {
    name: 'Uzbekistan',
    capital: 'Tashkent',
    languages: ['Uzbek', 'Russian'],
    population: 31576400,
    flag: 'https://restcountries.eu/data/uzb.svg',
    currency: "Uzbekistani so'm",
  },
  {
    name: 'Vanuatu',
    capital: 'Port Vila',
    languages: ['Bislama', 'English', 'French'],
    population: 277500,
    flag: 'https://restcountries.eu/data/vut.svg',
    currency: 'Vanuatu vatu',
  },
  {
    name: 'Venezuela (Bolivarian Republic of)',
    capital: 'Caracas',
    languages: ['Spanish'],
    population: 31028700,
    flag: 'https://restcountries.eu/data/ven.svg',
    currency: 'Venezuelan bolívar',
  },
  {
    name: 'Viet Nam',
    capital: 'Hanoi',
    languages: ['Vietnamese'],
    population: 92700000,
    flag: 'https://restcountries.eu/data/vnm.svg',
    currency: 'Vietnamese đồng',
  },
  {
    name: 'Wallis and Futuna',
    capital: 'Mata-Utu',
    languages: ['French'],
    population: 11750,
    flag: 'https://restcountries.eu/data/wlf.svg',
    currency: 'CFP franc',
  },
  {
    name: 'Western Sahara',
    capital: 'El Aaiún',
    languages: ['Spanish'],
    population: 510713,
    flag: 'https://restcountries.eu/data/esh.svg',
    currency: 'Moroccan dirham',
  },
  {
    name: 'Yemen',
    capital: "Sana'a",
    languages: ['Arabic'],
    population: 27478000,
    flag: 'https://restcountries.eu/data/yem.svg',
    currency: 'Yemeni rial',
  },
  {
    name: 'Zambia',
    capital: 'Lusaka',
    languages: ['English'],
    population: 15933883,
    flag: 'https://restcountries.eu/data/zmb.svg',
    currency: 'Zambian kwacha',
  },
  {
    name: 'Zimbabwe',
    capital: 'Harare',
    languages: ['English', 'Shona', 'Northern Ndebele'],
    population: 14240168,
    flag: 'https://restcountries.eu/data/zwe.svg',
    currency: 'Botswana pula',
  },
]

export const countriesData = [
  {
    "name": "Afghanistan",
    "capital": "Kabul",
    "population": 40218234,
    "currencies": [
      {
        "code": "AFN",
        "name": "Afghan afghani",
        "symbol": "؋"
      }
    ],
    "languages": [
      {
        "iso639_1": "ps",
        "iso639_2": "pus",
        "name": "Pashto",
        "nativeName": "پښتو"
      },
      {
        "iso639_1": "uz",
        "iso639_2": "uzb",
        "name": "Uzbek",
        "nativeName": "Oʻzbek"
      },
      {
        "iso639_1": "tk",
        "iso639_2": "tuk",
        "name": "Turkmen",
        "nativeName": "Türkmen"
      }
    ],
    "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
    "independent": false
  },
  {
    "name": "Åland Islands",
    "capital": "Mariehamn",
    "population": 28875,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "sv",
        "iso639_2": "swe",
        "name": "Swedish",
        "nativeName": "svenska"
      }
    ],
    "flag": "https://flagcdn.com/ax.svg",
    "independent": false
  },
  {
    "name": "Albania",
    "capital": "Tirana",
    "population": 2837743,
    "currencies": [
      {
        "code": "ALL",
        "name": "Albanian lek",
        "symbol": "L"
      }
    ],
    "languages": [
      {
        "iso639_1": "sq",
        "iso639_2": "sqi",
        "name": "Albanian",
        "nativeName": "Shqip"
      }
    ],
    "flag": "https://flagcdn.com/al.svg",
    "independent": false
  },
  {
    "name": "Algeria",
    "capital": "Algiers",
    "population": 44700000,
    "currencies": [
      {
        "code": "DZD",
        "name": "Algerian dinar",
        "symbol": "د.ج"
      }
    ],
    "languages": [
      {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }
    ],
    "flag": "https://flagcdn.com/dz.svg",
    "independent": false
  },
  {
    "name": "American Samoa",
    "capital": "Pago Pago",
    "population": 55197,
    "currencies": [
      {
        "code": "USD",
        "name": "United States Dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "sm",
        "iso639_2": "smo",
        "name": "Samoan",
        "nativeName": "gagana fa'a Samoa"
      }
    ],
    "flag": "https://flagcdn.com/as.svg",
    "independent": false
  },
  {
    "name": "Andorra",
    "capital": "Andorra la Vella",
    "population": 77265,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "ca",
        "iso639_2": "cat",
        "name": "Catalan",
        "nativeName": "català"
      }
    ],
    "flag": "https://flagcdn.com/ad.svg",
    "independent": false
  },
  {
    "name": "Angola",
    "capital": "Luanda",
    "population": 32866268,
    "currencies": [
      {
        "code": "AOA",
        "name": "Angolan kwanza",
        "symbol": "Kz"
      }
    ],
    "languages": [
      {
        "iso639_1": "pt",
        "iso639_2": "por",
        "name": "Portuguese",
        "nativeName": "Português"
      }
    ],
    "flag": "https://flagcdn.com/ao.svg",
    "independent": false
  },
  {
    "name": "Anguilla",
    "capital": "The Valley",
    "population": 13452,
    "currencies": [
      {
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/ai.svg",
    "independent": false
  },
  {
    "name": "Antarctica",
    "population": 1000,
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "ru",
        "iso639_2": "rus",
        "name": "Russian",
        "nativeName": "Русский"
      }
    ],
    "flag": "https://flagcdn.com/aq.svg",
    "independent": false
  },
  {
    "name": "Antigua and Barbuda",
    "capital": "Saint John's",
    "population": 97928,
    "currencies": [
      {
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/ag.svg",
    "independent": false
  },
  {
    "name": "Argentina",
    "capital": "Buenos Aires",
    "population": 45376763,
    "currencies": [
      {
        "code": "ARS",
        "name": "Argentine peso",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      },
      {
        "iso639_1": "gn",
        "iso639_2": "grn",
        "name": "Guaraní",
        "nativeName": "Avañe'ẽ"
      }
    ],
    "flag": "https://flagcdn.com/ar.svg",
    "independent": false
  },
  {
    "name": "Armenia",
    "capital": "Yerevan",
    "population": 2963234,
    "currencies": [
      {
        "code": "AMD",
        "name": "Armenian dram",
        "symbol": "֏"
      }
    ],
    "languages": [
      {
        "iso639_1": "hy",
        "iso639_2": "hye",
        "name": "Armenian",
        "nativeName": "Հայերեն"
      }
    ],
    "flag": "https://flagcdn.com/am.svg",
    "independent": false
  },
  {
    "name": "Aruba",
    "capital": "Oranjestad",
    "population": 106766,
    "currencies": [
      {
        "code": "AWG",
        "name": "Aruban florin",
        "symbol": "ƒ"
      }
    ],
    "languages": [
      {
        "iso639_1": "nl",
        "iso639_2": "nld",
        "name": "Dutch",
        "nativeName": "Nederlands"
      },
      {
        "iso639_1": "pa",
        "iso639_2": "pan",
        "name": "(Eastern) Punjabi",
        "nativeName": "ਪੰਜਾਬੀ"
      }
    ],
    "flag": "https://flagcdn.com/aw.svg",
    "independent": false
  },
  {
    "name": "Australia",
    "capital": "Canberra",
    "population": 25687041,
    "currencies": [
      {
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/au.svg",
    "independent": false
  },
  {
    "name": "Austria",
    "capital": "Vienna",
    "population": 8917205,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "de",
        "iso639_2": "deu",
        "name": "German",
        "nativeName": "Deutsch"
      }
    ],
    "flag": "https://flagcdn.com/at.svg",
    "independent": false
  },
  {
    "name": "Azerbaijan",
    "capital": "Baku",
    "population": 10110116,
    "currencies": [
      {
        "code": "AZN",
        "name": "Azerbaijani manat",
        "symbol": "₼"
      }
    ],
    "languages": [
      {
        "iso639_1": "az",
        "iso639_2": "aze",
        "name": "Azerbaijani",
        "nativeName": "azərbaycan dili"
      }
    ],
    "flag": "https://flagcdn.com/az.svg",
    "independent": false
  },
  {
    "name": "Bahamas",
    "capital": "Nassau",
    "population": 393248,
    "currencies": [
      {
        "code": "BSD",
        "name": "Bahamian dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/bs.svg",
    "independent": false
  },
  {
    "name": "Bahrain",
    "capital": "Manama",
    "population": 1701583,
    "currencies": [
      {
        "code": "BHD",
        "name": "Bahraini dinar",
        "symbol": ".د.ب"
      }
    ],
    "languages": [
      {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }
    ],
    "flag": "https://flagcdn.com/bh.svg",
    "independent": false
  },
  {
    "name": "Bangladesh",
    "capital": "Dhaka",
    "population": 164689383,
    "currencies": [
      {
        "code": "BDT",
        "name": "Bangladeshi taka",
        "symbol": "৳"
      }
    ],
    "languages": [
      {
        "iso639_1": "bn",
        "iso639_2": "ben",
        "name": "Bengali",
        "nativeName": "বাংলা"
      }
    ],
    "flag": "https://flagcdn.com/bd.svg",
    "independent": false
  },
  {
    "name": "Barbados",
    "capital": "Bridgetown",
    "population": 287371,
    "currencies": [
      {
        "code": "BBD",
        "name": "Barbadian dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/bb.svg",
    "independent": false
  },
  {
    "name": "Belarus",
    "capital": "Minsk",
    "population": 9398861,
    "currencies": [
      {
        "code": "BYN",
        "name": "New Belarusian ruble",
        "symbol": "Br"
      },
      {
        "code": "BYR",
        "name": "Old Belarusian ruble",
        "symbol": "Br"
      }
    ],
    "languages": [
      {
        "iso639_1": "be",
        "iso639_2": "bel",
        "name": "Belarusian",
        "nativeName": "беларуская мова"
      },
      {
        "iso639_1": "ru",
        "iso639_2": "rus",
        "name": "Russian",
        "nativeName": "Русский"
      }
    ],
    "flag": "https://flagcdn.com/by.svg",
    "independent": false
  },
  {
    "name": "Belgium",
    "capital": "Brussels",
    "population": 11555997,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "nl",
        "iso639_2": "nld",
        "name": "Dutch",
        "nativeName": "Nederlands"
      },
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      },
      {
        "iso639_1": "de",
        "iso639_2": "deu",
        "name": "German",
        "nativeName": "Deutsch"
      }
    ],
    "flag": "https://flagcdn.com/be.svg",
    "independent": false
  },
  {
    "name": "Belize",
    "capital": "Belmopan",
    "population": 397621,
    "currencies": [
      {
        "code": "BZD",
        "name": "Belize dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }
    ],
    "flag": "https://flagcdn.com/bz.svg",
    "independent": false
  },
  {
    "name": "Benin",
    "capital": "Porto-Novo",
    "population": 12123198,
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }
    ],
    "flag": "https://flagcdn.com/bj.svg",
    "independent": false
  },
  {
    "name": "Bermuda",
    "capital": "Hamilton",
    "population": 63903,
    "currencies": [
      {
        "code": "BMD",
        "name": "Bermudian dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/bm.svg",
    "independent": false
  },
  {
    "name": "Bhutan",
    "capital": "Thimphu",
    "population": 771612,
    "currencies": [
      {
        "code": "BTN",
        "name": "Bhutanese ngultrum",
        "symbol": "Nu."
      },
      {
        "code": "INR",
        "name": "Indian rupee",
        "symbol": "₹"
      }
    ],
    "languages": [
      {
        "iso639_1": "dz",
        "iso639_2": "dzo",
        "name": "Dzongkha",
        "nativeName": "རྫོང་ཁ"
      }
    ],
    "flag": "https://flagcdn.com/bt.svg",
    "independent": false
  },
  {
    "name": "Bolivia (Plurinational State of)",
    "capital": "Sucre",
    "population": 11673029,
    "currencies": [
      {
        "code": "BOB",
        "name": "Bolivian boliviano",
        "symbol": "Bs."
      }
    ],
    "languages": [
      {
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      },
      {
        "iso639_1": "ay",
        "iso639_2": "aym",
        "name": "Aymara",
        "nativeName": "aymar aru"
      },
      {
        "iso639_1": "qu",
        "iso639_2": "que",
        "name": "Quechua",
        "nativeName": "Runa Simi"
      }
    ],
    "flag": "https://flagcdn.com/bo.svg",
    "independent": false
  },
  {
    "name": "Bonaire, Sint Eustatius and Saba",
    "capital": "Kralendijk",
    "population": 17408,
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "nl",
        "iso639_2": "nld",
        "name": "Dutch",
        "nativeName": "Nederlands"
      }
    ],
    "flag": "https://flagcdn.com/bq.svg",
    "independent": false
  },
  {
    "name": "Bosnia and Herzegovina",
    "capital": "Sarajevo",
    "population": 3280815,
    "currencies": [
      {
        "code": "BAM",
        "name": "Bosnia and Herzegovina convertible mark",
        "symbol": "KM"
      }
    ],
    "languages": [
      {
        "iso639_1": "bs",
        "iso639_2": "bos",
        "name": "Bosnian",
        "nativeName": "bosanski jezik"
      },
      {
        "iso639_1": "hr",
        "iso639_2": "hrv",
        "name": "Croatian",
        "nativeName": "hrvatski jezik"
      },
      {
        "iso639_1": "sr",
        "iso639_2": "srp",
        "name": "Serbian",
        "nativeName": "српски језик"
      }
    ],
    "flag": "https://flagcdn.com/ba.svg",
    "independent": false
  },
  {
    "name": "Botswana",
    "capital": "Gaborone",
    "population": 2351625,
    "currencies": [
      {
        "code": "BWP",
        "name": "Botswana pula",
        "symbol": "P"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "tn",
        "iso639_2": "tsn",
        "name": "Tswana",
        "nativeName": "Setswana"
      }
    ],
    "flag": "https://flagcdn.com/bw.svg",
    "independent": false
  },
  {
    "name": "Bouvet Island",
    "population": 0,
    "currencies": [
      {
        "code": "NOK",
        "name": "Norwegian krone",
        "symbol": "kr"
      }
    ],
    "languages": [
      {
        "iso639_1": "no",
        "iso639_2": "nor",
        "name": "Norwegian",
        "nativeName": "Norsk"
      },
      {
        "iso639_1": "nb",
        "iso639_2": "nob",
        "name": "Norwegian Bokmål",
        "nativeName": "Norsk bokmål"
      },
      {
        "iso639_1": "nn",
        "iso639_2": "nno",
        "name": "Norwegian Nynorsk",
        "nativeName": "Norsk nynorsk"
      }
    ],
    "flag": "https://flagcdn.com/bv.svg",
    "independent": false
  },
  {
    "name": "Brazil",
    "capital": "Brasília",
    "population": 212559409,
    "currencies": [
      {
        "code": "BRL",
        "name": "Brazilian real",
        "symbol": "R$"
      }
    ],
    "languages": [
      {
        "iso639_1": "pt",
        "iso639_2": "por",
        "name": "Portuguese",
        "nativeName": "Português"
      }
    ],
    "flag": "https://flagcdn.com/br.svg",
    "independent": false
  },
  {
    "name": "British Indian Ocean Territory",
    "capital": "Diego Garcia",
    "population": 3000,
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/io.svg",
    "independent": false
  },
  {
    "name": "United States Minor Outlying Islands",
    "population": 300,
    "currencies": [
      {
        "code": "GBP",
        "name": "British pound",
        "symbol": "£"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/um.svg",
    "independent": false
  },
  {
    "name": "Virgin Islands (British)",
    "capital": "Road Town",
    "population": 30237,
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/vg.svg",
    "independent": false
  },
  {
    "name": "Virgin Islands (U.S.)",
    "capital": "Charlotte Amalie",
    "population": 106290,
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/vi.svg",
    "independent": false
  },
  {
    "name": "Brunei Darussalam",
    "capital": "Bandar Seri Begawan",
    "population": 437483,
    "currencies": [
      {
        "code": "BND",
        "name": "Brunei dollar",
        "symbol": "$"
      },
      {
        "code": "SGD",
        "name": "Singapore dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "ms",
        "iso639_2": "msa",
        "name": "Malay",
        "nativeName": "bahasa Melayu"
      }
    ],
    "flag": "https://flagcdn.com/bn.svg",
    "independent": false
  },
  {
    "name": "Bulgaria",
    "capital": "Sofia",
    "population": 6927288,
    "currencies": [
      {
        "code": "BGN",
        "name": "Bulgarian lev",
        "symbol": "лв"
      }
    ],
    "languages": [
      {
        "iso639_1": "bg",
        "iso639_2": "bul",
        "name": "Bulgarian",
        "nativeName": "български език"
      }
    ],
    "flag": "https://flagcdn.com/bg.svg",
    "independent": false
  },
  {
    "name": "Burkina Faso",
    "capital": "Ouagadougou",
    "population": 20903278,
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      },
      {
        "iso639_1": "ff",
        "iso639_2": "ful",
        "name": "Fula",
        "nativeName": "Fulfulde"
      }
    ],
    "flag": "https://flagcdn.com/bf.svg",
    "independent": false
  },
  {
    "name": "Burundi",
    "capital": "Gitega",
    "population": 11890781,
    "currencies": [
      {
        "code": "BIF",
        "name": "Burundian franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      },
      {
        "iso639_1": "rn",
        "iso639_2": "run",
        "name": "Kirundi",
        "nativeName": "Ikirundi"
      }
    ],
    "flag": "https://flagcdn.com/bi.svg",
    "independent": false
  },
  {
    "name": "Cambodia",
    "capital": "Phnom Penh",
    "population": 16718971,
    "currencies": [
      {
        "code": "KHR",
        "name": "Cambodian riel",
        "symbol": "៛"
      },
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "km",
        "iso639_2": "khm",
        "name": "Khmer",
        "nativeName": "ខ្មែរ"
      }
    ],
    "flag": "https://flagcdn.com/kh.svg",
    "independent": false
  },
  {
    "name": "Cameroon",
    "capital": "Yaoundé",
    "population": 26545864,
    "currencies": [
      {
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }
    ],
    "flag": "https://flagcdn.com/cm.svg",
    "independent": false
  },
  {
    "name": "Canada",
    "capital": "Ottawa",
    "population": 38005238,
    "currencies": [
      {
        "code": "CAD",
        "name": "Canadian dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }
    ],
    "flag": "https://flagcdn.com/ca.svg",
    "independent": false
  },
  {
    "name": "Cabo Verde",
    "capital": "Praia",
    "population": 555988,
    "currencies": [
      {
        "code": "CVE",
        "name": "Cape Verdean escudo",
        "symbol": "Esc"
      }
    ],
    "languages": [
      {
        "iso639_1": "pt",
        "iso639_2": "por",
        "name": "Portuguese",
        "nativeName": "Português"
      }
    ],
    "flag": "https://flagcdn.com/cv.svg",
    "independent": false
  },
  {
    "name": "Cayman Islands",
    "capital": "George Town",
    "population": 65720,
    "currencies": [
      {
        "code": "KYD",
        "name": "Cayman Islands dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/ky.svg",
    "independent": false
  },
  {
    "name": "Central African Republic",
    "capital": "Bangui",
    "population": 4829764,
    "currencies": [
      {
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      },
      {
        "iso639_1": "sg",
        "iso639_2": "sag",
        "name": "Sango",
        "nativeName": "yângâ tî sängö"
      }
    ],
    "flag": "https://flagcdn.com/cf.svg",
    "independent": false
  },
  {
    "name": "Chad",
    "capital": "N'Djamena",
    "population": 16425859,
    "currencies": [
      {
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      },
      {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }
    ],
    "flag": "https://flagcdn.com/td.svg",
    "independent": false
  },
  {
    "name": "Chile",
    "capital": "Santiago",
    "population": 19116209,
    "currencies": [
      {
        "code": "CLP",
        "name": "Chilean peso",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }
    ],
    "flag": "https://flagcdn.com/cl.svg",
    "independent": false
  },
  {
    "name": "China",
    "capital": "Beijing",
    "population": 1402112000,
    "currencies": [
      {
        "code": "CNY",
        "name": "Chinese yuan",
        "symbol": "¥"
      }
    ],
    "languages": [
      {
        "iso639_1": "zh",
        "iso639_2": "zho",
        "name": "Chinese",
        "nativeName": "中文 (Zhōngwén)"
      }
    ],
    "flag": "https://flagcdn.com/cn.svg",
    "independent": false
  },
  {
    "name": "Christmas Island",
    "capital": "Flying Fish Cove",
    "population": 2072,
    "currencies": [
      {
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/cx.svg",
    "independent": false
  },
  {
    "name": "Cocos (Keeling) Islands",
    "capital": "West Island",
    "population": 550,
    "currencies": [
      {
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/cc.svg",
    "independent": false
  },
  {
    "name": "Colombia",
    "capital": "Bogotá",
    "population": 50882884,
    "currencies": [
      {
        "code": "COP",
        "name": "Colombian peso",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }
    ],
    "flag": "https://flagcdn.com/co.svg",
    "independent": false
  },
  {
    "name": "Comoros",
    "capital": "Moroni",
    "population": 869595,
    "currencies": [
      {
        "code": "KMF",
        "name": "Comorian franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      },
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }
    ],
    "flag": "https://flagcdn.com/km.svg",
    "independent": false
  },
  {
    "name": "Congo",
    "capital": "Brazzaville",
    "population": 5518092,
    "currencies": [
      {
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      },
      {
        "iso639_1": "ln",
        "iso639_2": "lin",
        "name": "Lingala",
        "nativeName": "Lingála"
      }
    ],
    "flag": "https://flagcdn.com/cg.svg",
    "independent": false
  },
  {
    "name": "Congo (Democratic Republic of the)",
    "capital": "Kinshasa",
    "population": 89561404,
    "currencies": [
      {
        "code": "CDF",
        "name": "Congolese franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      },
      {
        "iso639_1": "ln",
        "iso639_2": "lin",
        "name": "Lingala",
        "nativeName": "Lingála"
      },
      {
        "iso639_1": "kg",
        "iso639_2": "kon",
        "name": "Kongo",
        "nativeName": "Kikongo"
      },
      {
        "iso639_1": "sw",
        "iso639_2": "swa",
        "name": "Swahili",
        "nativeName": "Kiswahili"
      },
      {
        "iso639_1": "lu",
        "iso639_2": "lub",
        "name": "Luba-Katanga",
        "nativeName": "Tshiluba"
      }
    ],
    "flag": "https://flagcdn.com/cd.svg",
    "independent": false
  },
  {
    "name": "Cook Islands",
    "capital": "Avarua",
    "population": 18100,
    "currencies": [
      {
        "code": "NZD",
        "name": "New Zealand dollar",
        "symbol": "$"
      },
      {
        "code": "CKD",
        "name": "Cook Islands dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_2": "rar",
        "name": "Cook Islands Māori",
        "nativeName": "Māori"
      }
    ],
    "flag": "https://flagcdn.com/ck.svg",
    "independent": false
  },
  {
    "name": "Costa Rica",
    "capital": "San José",
    "population": 5094114,
    "currencies": [
      {
        "code": "CRC",
        "name": "Costa Rican colón",
        "symbol": "₡"
      }
    ],
    "languages": [
      {
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }
    ],
    "flag": "https://flagcdn.com/cr.svg",
    "independent": false
  },
  {
    "name": "Croatia",
    "capital": "Zagreb",
    "population": 4047200,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "hr",
        "iso639_2": "hrv",
        "name": "Croatian",
        "nativeName": "hrvatski jezik"
      }
    ],
    "flag": "https://flagcdn.com/hr.svg",
    "independent": false
  },
  {
    "name": "Cuba",
    "capital": "Havana",
    "population": 11326616,
    "currencies": [
      {
        "code": "CUC",
        "name": "Cuban convertible peso",
        "symbol": "$"
      },
      {
        "code": "CUP",
        "name": "Cuban peso",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }
    ],
    "flag": "https://flagcdn.com/cu.svg",
    "independent": false
  },
  {
    "name": "Curaçao",
    "capital": "Willemstad",
    "population": 155014,
    "currencies": [
      {
        "code": "ANG",
        "name": "Netherlands Antillean guilder",
        "symbol": "ƒ"
      }
    ],
    "languages": [
      {
        "iso639_1": "nl",
        "iso639_2": "nld",
        "name": "Dutch",
        "nativeName": "Nederlands"
      },
      {
        "iso639_1": "pa",
        "iso639_2": "pan",
        "name": "(Eastern) Punjabi",
        "nativeName": "ਪੰਜਾਬੀ"
      },
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/cw.svg",
    "independent": false
  },
  {
    "name": "Cyprus",
    "capital": "Nicosia",
    "population": 1207361,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "el",
        "iso639_2": "ell",
        "name": "Greek (modern)",
        "nativeName": "ελληνικά"
      },
      {
        "iso639_1": "tr",
        "iso639_2": "tur",
        "name": "Turkish",
        "nativeName": "Türkçe"
      },
      {
        "iso639_1": "hy",
        "iso639_2": "hye",
        "name": "Armenian",
        "nativeName": "Հայերեն"
      }
    ],
    "flag": "https://flagcdn.com/cy.svg",
    "independent": false
  },
  {
    "name": "Czech Republic",
    "capital": "Prague",
    "population": 10698896,
    "currencies": [
      {
        "code": "CZK",
        "name": "Czech koruna",
        "symbol": "Kč"
      }
    ],
    "languages": [
      {
        "iso639_1": "cs",
        "iso639_2": "ces",
        "name": "Czech",
        "nativeName": "čeština"
      },
      {
        "iso639_1": "sk",
        "iso639_2": "slk",
        "name": "Slovak",
        "nativeName": "slovenčina"
      }
    ],
    "flag": "https://flagcdn.com/cz.svg",
    "independent": false
  },
  {
    "name": "Denmark",
    "capital": "Copenhagen",
    "population": 5831404,
    "currencies": [
      {
        "code": "DKK",
        "name": "Danish krone",
        "symbol": "kr"
      }
    ],
    "languages": [
      {
        "iso639_1": "da",
        "iso639_2": "dan",
        "name": "Danish",
        "nativeName": "dansk"
      }
    ],
    "flag": "https://flagcdn.com/dk.svg",
    "independent": false
  },
  {
    "name": "Djibouti",
    "capital": "Djibouti",
    "population": 988002,
    "currencies": [
      {
        "code": "DJF",
        "name": "Djiboutian franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      },
      {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }
    ],
    "flag": "https://flagcdn.com/dj.svg",
    "independent": false
  },
  {
    "name": "Dominica",
    "capital": "Roseau",
    "population": 71991,
    "currencies": [
      {
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/dm.svg",
    "independent": false
  },
  {
    "name": "Dominican Republic",
    "capital": "Santo Domingo",
    "population": 10847904,
    "currencies": [
      {
        "code": "DOP",
        "name": "Dominican peso",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }
    ],
    "flag": "https://flagcdn.com/do.svg",
    "independent": false
  },
  {
    "name": "Ecuador",
    "capital": "Quito",
    "population": 17643060,
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }
    ],
    "flag": "https://flagcdn.com/ec.svg",
    "independent": false
  },
  {
    "name": "Egypt",
    "capital": "Cairo",
    "population": 102334403,
    "currencies": [
      {
        "code": "EGP",
        "name": "Egyptian pound",
        "symbol": "£"
      }
    ],
    "languages": [
      {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }
    ],
    "flag": "https://flagcdn.com/eg.svg",
    "independent": false
  },
  {
    "name": "El Salvador",
    "capital": "San Salvador",
    "population": 6486201,
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }
    ],
    "flag": "https://flagcdn.com/sv.svg",
    "independent": false
  },
  {
    "name": "Equatorial Guinea",
    "capital": "Malabo",
    "population": 1402985,
    "currencies": [
      {
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      {
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      },
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      },
      {
        "iso639_1": "pt",
        "iso639_2": "por",
        "name": "Portuguese",
        "nativeName": "Português"
      },
      {
        "iso639_2": "fan",
        "name": "Fang",
        "nativeName": "Fang"
      }
    ],
    "flag": "https://flagcdn.com/gq.svg",
    "independent": false
  },
  {
    "name": "Eritrea",
    "capital": "Asmara",
    "population": 5352000,
    "currencies": [
      {
        "code": "ERN",
        "name": "Eritrean nakfa",
        "symbol": "Nfk"
      }
    ],
    "languages": [
      {
        "iso639_1": "ti",
        "iso639_2": "tir",
        "name": "Tigrinya",
        "nativeName": "ትግርኛ"
      },
      {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      },
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_2": "tig",
        "name": "Tigre",
        "nativeName": "ትግረ"
      },
      {
        "iso639_2": "kun",
        "name": "Kunama",
        "nativeName": "Kunama"
      },
      {
        "iso639_2": "ssy",
        "name": "Saho",
        "nativeName": "Saho"
      },
      {
        "iso639_2": "byn",
        "name": "Bilen",
        "nativeName": "ብሊና"
      },
      {
        "iso639_2": "nrb",
        "name": "Nara",
        "nativeName": "Nara"
      },
      {
        "iso639_1": "aa",
        "iso639_2": "aar",
        "name": "Afar",
        "nativeName": "Afar"
      }
    ],
    "flag": "https://flagcdn.com/er.svg",
    "independent": false
  },
  {
    "name": "Estonia",
    "capital": "Tallinn",
    "population": 1331057,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "et",
        "iso639_2": "est",
        "name": "Estonian",
        "nativeName": "eesti"
      }
    ],
    "flag": "https://flagcdn.com/ee.svg",
    "independent": false
  },
  {
    "name": "Ethiopia",
    "capital": "Addis Ababa",
    "population": 114963583,
    "currencies": [
      {
        "code": "ETB",
        "name": "Ethiopian birr",
        "symbol": "Br"
      }
    ],
    "languages": [
      {
        "iso639_1": "am",
        "iso639_2": "amh",
        "name": "Amharic",
        "nativeName": "አማርኛ"
      }
    ],
    "flag": "https://flagcdn.com/et.svg",
    "independent": false
  },
  {
    "name": "Falkland Islands (Malvinas)",
    "capital": "Stanley",
    "population": 2563,
    "currencies": [
      {
        "code": "FKP",
        "name": "Falkland Islands pound",
        "symbol": "£"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/fk.svg",
    "independent": false
  },
  {
    "name": "Faroe Islands",
    "capital": "Tórshavn",
    "population": 48865,
    "currencies": [
      {
        "code": "DKK",
        "name": "Danish krone",
        "symbol": "kr"
      },
      {
        "code": "FOK",
        "name": "Faroese króna",
        "symbol": "kr"
      }
    ],
    "languages": [
      {
        "iso639_1": "fo",
        "iso639_2": "fao",
        "name": "Faroese",
        "nativeName": "føroyskt"
      }
    ],
    "flag": "https://flagcdn.com/fo.svg",
    "independent": false
  },
  {
    "name": "Fiji",
    "capital": "Suva",
    "population": 896444,
    "currencies": [
      {
        "code": "FJD",
        "name": "Fijian dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "fj",
        "iso639_2": "fij",
        "name": "Fijian",
        "nativeName": "vosa Vakaviti"
      },
      {
        "iso639_2": "hif",
        "name": "Fiji Hindi",
        "nativeName": "फ़िजी बात"
      },
      {
        "iso639_2": "rtm",
        "name": "Rotuman",
        "nativeName": "Fäeag Rotuma"
      }
    ],
    "flag": "https://flagcdn.com/fj.svg",
    "independent": false
  },
  {
    "name": "Finland",
    "capital": "Helsinki",
    "population": 5530719,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "fi",
        "iso639_2": "fin",
        "name": "Finnish",
        "nativeName": "suomi"
      },
      {
        "iso639_1": "sv",
        "iso639_2": "swe",
        "name": "Swedish",
        "nativeName": "svenska"
      }
    ],
    "flag": "https://flagcdn.com/fi.svg",
    "independent": false
  },
  {
    "name": "France",
    "capital": "Paris",
    "population": 67391582,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }
    ],
    "flag": "https://flagcdn.com/fr.svg",
    "independent": false
  },
  {
    "name": "French Guiana",
    "capital": "Cayenne",
    "population": 254541,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }
    ],
    "flag": "https://flagcdn.com/gf.svg",
    "independent": false
  },
  {
    "name": "French Polynesia",
    "capital": "Papeetē",
    "population": 280904,
    "currencies": [
      {
        "code": "XPF",
        "name": "CFP franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }
    ],
    "flag": "https://flagcdn.com/pf.svg",
    "independent": false
  },
  {
    "name": "French Southern Territories",
    "capital": "Port-aux-Français",
    "population": 140,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }
    ],
    "flag": "https://flagcdn.com/tf.svg",
    "independent": false
  },
  {
    "name": "Gabon",
    "capital": "Libreville",
    "population": 2225728,
    "currencies": [
      {
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }
    ],
    "flag": "https://flagcdn.com/ga.svg",
    "independent": false
  },
  {
    "name": "Gambia",
    "capital": "Banjul",
    "population": 2416664,
    "currencies": [
      {
        "code": "GMD",
        "name": "Gambian dalasi",
        "symbol": "D"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/gm.svg",
    "independent": false
  },
  {
    "name": "Georgia",
    "capital": "Tbilisi",
    "population": 3714000,
    "currencies": [
      {
        "code": "GEL",
        "name": "Georgian Lari",
        "symbol": "ლ"
      }
    ],
    "languages": [
      {
        "iso639_1": "ka",
        "iso639_2": "kat",
        "name": "Georgian",
        "nativeName": "ქართული"
      }
    ],
    "flag": "https://flagcdn.com/ge.svg",
    "independent": false
  },
  {
    "name": "Germany",
    "capital": "Berlin",
    "population": 83240525,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "de",
        "iso639_2": "deu",
        "name": "German",
        "nativeName": "Deutsch"
      }
    ],
    "flag": "https://flagcdn.com/de.svg",
    "independent": false
  },
  {
    "name": "Ghana",
    "capital": "Accra",
    "population": 31072945,
    "currencies": [
      {
        "code": "GHS",
        "name": "Ghanaian cedi",
        "symbol": "₵"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/gh.svg",
    "independent": false
  },
  {
    "name": "Gibraltar",
    "capital": "Gibraltar",
    "population": 33691,
    "currencies": [
      {
        "code": "GIP",
        "name": "Gibraltar pound",
        "symbol": "£"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/gi.svg",
    "independent": false
  },
  {
    "name": "Greece",
    "capital": "Athens",
    "population": 10715549,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "el",
        "iso639_2": "ell",
        "name": "Greek (modern)",
        "nativeName": "ελληνικά"
      }
    ],
    "flag": "https://flagcdn.com/gr.svg",
    "independent": false
  },
  {
    "name": "Greenland",
    "capital": "Nuuk",
    "population": 56367,
    "currencies": [
      {
        "code": "DKK",
        "name": "Danish krone",
        "symbol": "kr"
      }
    ],
    "languages": [
      {
        "iso639_1": "kl",
        "iso639_2": "kal",
        "name": "Greenlandic",
        "nativeName": "kalaallisut"
      }
    ],
    "flag": "https://flagcdn.com/gl.svg",
    "independent": false
  },
  {
    "name": "Grenada",
    "capital": "St. George's",
    "population": 112519,
    "currencies": [
      {
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/gd.svg",
    "independent": false
  },
  {
    "name": "Guadeloupe",
    "capital": "Basse-Terre",
    "population": 400132,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }
    ],
    "flag": "https://flagcdn.com/gp.svg",
    "independent": false
  },
  {
    "name": "Guam",
    "capital": "Hagåtña",
    "population": 168783,
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "ch",
        "iso639_2": "cha",
        "name": "Chamorro",
        "nativeName": "Chamoru"
      },
      {
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }
    ],
    "flag": "https://flagcdn.com/gu.svg",
    "independent": false
  },
  {
    "name": "Guatemala",
    "capital": "Guatemala City",
    "population": 16858333,
    "currencies": [
      {
        "code": "GTQ",
        "name": "Guatemalan quetzal",
        "symbol": "Q"
      }
    ],
    "languages": [
      {
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }
    ],
    "flag": "https://flagcdn.com/gt.svg",
    "independent": false
  },
  {
    "name": "Guernsey",
    "capital": "St. Peter Port",
    "population": 62999,
    "currencies": [
      {
        "code": "GBP",
        "name": "British pound",
        "symbol": "£"
      },
      {
        "code": "GGP",
        "name": "Guernsey pound",
        "symbol": "£"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }
    ],
    "flag": "https://flagcdn.com/gg.svg",
    "independent": false
  },
  {
    "name": "Guinea",
    "capital": "Conakry",
    "population": 13132792,
    "currencies": [
      {
        "code": "GNF",
        "name": "Guinean franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      },
      {
        "iso639_1": "ff",
        "iso639_2": "ful",
        "name": "Fula",
        "nativeName": "Fulfulde"
      }
    ],
    "flag": "https://flagcdn.com/gn.svg",
    "independent": false
  },
  {
    "name": "Guinea-Bissau",
    "capital": "Bissau",
    "population": 1967998,
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      {
        "iso639_1": "pt",
        "iso639_2": "por",
        "name": "Portuguese",
        "nativeName": "Português"
      }
    ],
    "flag": "https://flagcdn.com/gw.svg",
    "independent": false
  },
  {
    "name": "Guyana",
    "capital": "Georgetown",
    "population": 786559,
    "currencies": [
      {
        "code": "GYD",
        "name": "Guyanese dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/gy.svg",
    "independent": false
  },
  {
    "name": "Haiti",
    "capital": "Port-au-Prince",
    "population": 11402533,
    "currencies": [
      {
        "code": "HTG",
        "name": "Haitian gourde",
        "symbol": "G"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      },
      {
        "iso639_1": "ht",
        "iso639_2": "hat",
        "name": "Haitian",
        "nativeName": "Kreyòl ayisyen"
      }
    ],
    "flag": "https://flagcdn.com/ht.svg",
    "independent": false
  },
  {
    "name": "Heard Island and McDonald Islands",
    "population": 0,
    "currencies": [
      {
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/hm.svg",
    "independent": false
  },
  {
    "name": "Vatican City",
    "capital": "Vatican City",
    "population": 451,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "la",
        "iso639_2": "lat",
        "name": "Latin",
        "nativeName": "latine"
      },
      {
        "iso639_1": "it",
        "iso639_2": "ita",
        "name": "Italian",
        "nativeName": "Italiano"
      },
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "Français"
      },
      {
        "iso639_1": "de",
        "iso639_2": "deu",
        "name": "German",
        "nativeName": "Deutsch"
      }
    ],
    "flag": "https://flagcdn.com/va.svg",
    "independent": false
  },
  {
    "name": "Honduras",
    "capital": "Tegucigalpa",
    "population": 9904608,
    "currencies": [
      {
        "code": "HNL",
        "name": "Honduran lempira",
        "symbol": "L"
      }
    ],
    "languages": [
      {
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }
    ],
    "flag": "https://flagcdn.com/hn.svg",
    "independent": false
  },
  {
    "name": "Hungary",
    "capital": "Budapest",
    "population": 9749763,
    "currencies": [
      {
        "code": "HUF",
        "name": "Hungarian forint",
        "symbol": "Ft"
      }
    ],
    "languages": [
      {
        "iso639_1": "hu",
        "iso639_2": "hun",
        "name": "Hungarian",
        "nativeName": "magyar"
      }
    ],
    "flag": "https://flagcdn.com/hu.svg",
    "independent": false
  },
  {
    "name": "Hong Kong",
    "capital": "City of Victoria",
    "population": 7481800,
    "currencies": [
      {
        "code": "HKD",
        "name": "Hong Kong dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "zh",
        "iso639_2": "zho",
        "name": "Chinese",
        "nativeName": "中文 (Zhōngwén)"
      }
    ],
    "flag": "https://flagcdn.com/hk.svg",
    "independent": false
  },
  {
    "name": "Iceland",
    "capital": "Reykjavík",
    "population": 366425,
    "currencies": [
      {
        "code": "ISK",
        "name": "Icelandic króna",
        "symbol": "kr"
      }
    ],
    "languages": [
      {
        "iso639_1": "is",
        "iso639_2": "isl",
        "name": "Icelandic",
        "nativeName": "Íslenska"
      }
    ],
    "flag": "https://flagcdn.com/is.svg",
    "independent": false
  },
  {
    "name": "India",
    "capital": "New Delhi",
    "population": 1380004385,
    "currencies": [
      {
        "code": "INR",
        "name": "Indian rupee",
        "symbol": "₹"
      }
    ],
    "languages": [
      {
        "iso639_1": "hi",
        "iso639_2": "hin",
        "name": "Hindi",
        "nativeName": "हिन्दी"
      },
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/in.svg",
    "independent": false
  },
  {
    "name": "Indonesia",
    "capital": "Jakarta",
    "population": 273523621,
    "currencies": [
      {
        "code": "IDR",
        "name": "Indonesian rupiah",
        "symbol": "Rp"
      }
    ],
    "languages": [
      {
        "iso639_1": "id",
        "iso639_2": "ind",
        "name": "Indonesian",
        "nativeName": "Bahasa Indonesia"
      }
    ],
    "flag": "https://flagcdn.com/id.svg",
    "independent": false
  },
  {
    "name": "Ivory Coast",
    "capital": "Yamoussoukro",
    "population": 26378275,
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }
    ],
    "flag": "https://flagcdn.com/ci.svg",
    "independent": false
  },
  {
    "name": "Iran (Islamic Republic of)",
    "capital": "Tehran",
    "population": 83992953,
    "currencies": [
      {
        "code": "IRR",
        "name": "Iranian rial",
        "symbol": "﷼"
      }
    ],
    "languages": [
      {
        "iso639_1": "fa",
        "iso639_2": "fas",
        "name": "Persian (Farsi)",
        "nativeName": "فارسی"
      }
    ],
    "flag": "https://flagcdn.com/ir.svg",
    "independent": false
  },
  {
    "name": "Iraq",
    "capital": "Baghdad",
    "population": 40222503,
    "currencies": [
      {
        "code": "IQD",
        "name": "Iraqi dinar",
        "symbol": "ع.د"
      }
    ],
    "languages": [
      {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      },
      {
        "iso639_1": "ku",
        "iso639_2": "kur",
        "name": "Kurdish",
        "nativeName": "Kurdî"
      }
    ],
    "flag": "https://flagcdn.com/iq.svg",
    "independent": false
  },
  {
    "name": "Ireland",
    "capital": "Dublin",
    "population": 4994724,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "ga",
        "iso639_2": "gle",
        "name": "Irish",
        "nativeName": "Gaeilge"
      },
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/ie.svg",
    "independent": false
  },
  {
    "name": "Isle of Man",
    "capital": "Douglas",
    "population": 85032,
    "currencies": [
      {
        "code": "GBP",
        "name": "British pound",
        "symbol": "£"
      },
      {
        "code": "IMP[G]",
        "name": "Manx pound",
        "symbol": "£"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "gv",
        "iso639_2": "glv",
        "name": "Manx",
        "nativeName": "Gaelg"
      }
    ],
    "flag": "https://flagcdn.com/im.svg",
    "independent": false
  },
  {
    "name": "Israel",
    "capital": "Jerusalem",
    "population": 9216900,
    "currencies": [
      {
        "code": "ILS",
        "name": "Israeli new shekel",
        "symbol": "₪"
      }
    ],
    "languages": [
      {
        "iso639_1": "he",
        "iso639_2": "heb",
        "name": "Hebrew (modern)",
        "nativeName": "עברית"
      },
      {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }
    ],
    "flag": "https://flagcdn.com/il.svg",
    "independent": false
  },
  {
    "name": "Italy",
    "capital": "Rome",
    "population": 59554023,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "it",
        "iso639_2": "ita",
        "name": "Italian",
        "nativeName": "Italiano"
      }
    ],
    "flag": "https://flagcdn.com/it.svg",
    "independent": false
  },
  {
    "name": "Jamaica",
    "capital": "Kingston",
    "population": 2961161,
    "currencies": [
      {
        "code": "JMD",
        "name": "Jamaican dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/jm.svg",
    "independent": false
  },
  {
    "name": "Japan",
    "capital": "Tokyo",
    "population": 125836021,
    "currencies": [
      {
        "code": "JPY",
        "name": "Japanese yen",
        "symbol": "¥"
      }
    ],
    "languages": [
      {
        "iso639_1": "ja",
        "iso639_2": "jpn",
        "name": "Japanese",
        "nativeName": "日本語 (にほんご)"
      }
    ],
    "flag": "https://flagcdn.com/jp.svg",
    "independent": false
  },
  {
    "name": "Jersey",
    "capital": "Saint Helier",
    "population": 100800,
    "currencies": [
      {
        "code": "GBP",
        "name": "British pound",
        "symbol": "£"
      },
      {
        "code": "JEP[G]",
        "name": "Jersey pound",
        "symbol": "£"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }
    ],
    "flag": "https://flagcdn.com/je.svg",
    "independent": false
  },
  {
    "name": "Jordan",
    "capital": "Amman",
    "population": 10203140,
    "currencies": [
      {
        "code": "JOD",
        "name": "Jordanian dinar",
        "symbol": "د.ا"
      }
    ],
    "languages": [
      {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }
    ],
    "flag": "https://flagcdn.com/jo.svg",
    "independent": false
  },
  {
    "name": "Kazakhstan",
    "capital": "Astana",
    "population": 18754440,
    "currencies": [
      {
        "code": "KZT",
        "name": "Kazakhstani tenge",
        "symbol": "₸"
      }
    ],
    "languages": [
      {
        "iso639_1": "kk",
        "iso639_2": "kaz",
        "name": "Kazakh",
        "nativeName": "қазақ тілі"
      },
      {
        "iso639_1": "ru",
        "iso639_2": "rus",
        "name": "Russian",
        "nativeName": "Русский"
      }
    ],
    "flag": "https://flagcdn.com/kz.svg",
    "independent": false
  },
  {
    "name": "Kenya",
    "capital": "Nairobi",
    "population": 53771300,
    "currencies": [
      {
        "code": "KES",
        "name": "Kenyan shilling",
        "symbol": "Sh"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "sw",
        "iso639_2": "swa",
        "name": "Swahili",
        "nativeName": "Kiswahili"
      }
    ],
    "flag": "https://flagcdn.com/ke.svg",
    "independent": false
  },
  {
    "name": "Kiribati",
    "capital": "South Tarawa",
    "population": 119446,
    "currencies": [
      {
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      },
      {
        "code": "KID",
        "name": "Kiribati dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/ki.svg",
    "independent": false
  },
  {
    "name": "Kuwait",
    "capital": "Kuwait City",
    "population": 4270563,
    "currencies": [
      {
        "code": "KWD",
        "name": "Kuwaiti dinar",
        "symbol": "د.ك"
      }
    ],
    "languages": [
      {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }
    ],
    "flag": "https://flagcdn.com/kw.svg",
    "independent": false
  },
  {
    "name": "Kyrgyzstan",
    "capital": "Bishkek",
    "population": 6591600,
    "currencies": [
      {
        "code": "KGS",
        "name": "Kyrgyzstani som",
        "symbol": "с"
      }
    ],
    "languages": [
      {
        "iso639_1": "ky",
        "iso639_2": "kir",
        "name": "Kyrgyz",
        "nativeName": "Кыргызча"
      },
      {
        "iso639_1": "ru",
        "iso639_2": "rus",
        "name": "Russian",
        "nativeName": "Русский"
      }
    ],
    "flag": "https://flagcdn.com/kg.svg",
    "independent": false
  },
  {
    "name": "Lao People's Democratic Republic",
    "capital": "Vientiane",
    "population": 7275556,
    "currencies": [
      {
        "code": "LAK",
        "name": "Lao kip",
        "symbol": "₭"
      }
    ],
    "languages": [
      {
        "iso639_1": "lo",
        "iso639_2": "lao",
        "name": "Lao",
        "nativeName": "ພາສາລາວ"
      }
    ],
    "flag": "https://flagcdn.com/la.svg",
    "independent": false
  },
  {
    "name": "Latvia",
    "capital": "Riga",
    "population": 1901548,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "lv",
        "iso639_2": "lav",
        "name": "Latvian",
        "nativeName": "latviešu valoda"
      }
    ],
    "flag": "https://flagcdn.com/lv.svg",
    "independent": false
  },
  {
    "name": "Lebanon",
    "capital": "Beirut",
    "population": 6825442,
    "currencies": [
      {
        "code": "LBP",
        "name": "Lebanese pound",
        "symbol": "ل.ل"
      }
    ],
    "languages": [
      {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      },
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }
    ],
    "flag": "https://flagcdn.com/lb.svg",
    "independent": false
  },
  {
    "name": "Lesotho",
    "capital": "Maseru",
    "population": 2142252,
    "currencies": [
      {
        "code": "LSL",
        "name": "Lesotho loti",
        "symbol": "L"
      },
      {
        "code": "ZAR",
        "name": "South African rand",
        "symbol": "R"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "st",
        "iso639_2": "sot",
        "name": "Southern Sotho",
        "nativeName": "Sesotho"
      }
    ],
    "flag": "https://flagcdn.com/ls.svg",
    "independent": false
  },
  {
    "name": "Liberia",
    "capital": "Monrovia",
    "population": 5057677,
    "currencies": [
      {
        "code": "LRD",
        "name": "Liberian dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/lr.svg",
    "independent": false
  },
  {
    "name": "Libya",
    "capital": "Tripoli",
    "population": 6871287,
    "currencies": [
      {
        "code": "LYD",
        "name": "Libyan dinar",
        "symbol": "ل.د"
      }
    ],
    "languages": [
      {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }
    ],
    "flag": "https://flagcdn.com/ly.svg",
    "independent": false
  },
  {
    "name": "Liechtenstein",
    "capital": "Vaduz",
    "population": 38137,
    "currencies": [
      {
        "code": "CHF",
        "name": "Swiss franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      {
        "iso639_1": "de",
        "iso639_2": "deu",
        "name": "German",
        "nativeName": "Deutsch"
      }
    ],
    "flag": "https://flagcdn.com/li.svg",
    "independent": false
  },
  {
    "name": "Lithuania",
    "capital": "Vilnius",
    "population": 2794700,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "lt",
        "iso639_2": "lit",
        "name": "Lithuanian",
        "nativeName": "lietuvių kalba"
      }
    ],
    "flag": "https://flagcdn.com/lt.svg",
    "independent": false
  },
  {
    "name": "Luxembourg",
    "capital": "Luxembourg",
    "population": 632275,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      },
      {
        "iso639_1": "de",
        "iso639_2": "deu",
        "name": "German",
        "nativeName": "Deutsch"
      },
      {
        "iso639_1": "lb",
        "iso639_2": "ltz",
        "name": "Luxembourgish",
        "nativeName": "Lëtzebuergesch"
      }
    ],
    "flag": "https://flagcdn.com/lu.svg",
    "independent": false
  },
  {
    "name": "Macao",
    "population": 649342,
    "currencies": [
      {
        "code": "MOP",
        "name": "Macanese pataca",
        "symbol": "P"
      }
    ],
    "languages": [
      {
        "iso639_1": "zh",
        "iso639_2": "zho",
        "name": "Chinese",
        "nativeName": "中文 (Zhōngwén)"
      },
      {
        "iso639_1": "pt",
        "iso639_2": "por",
        "name": "Portuguese",
        "nativeName": "Português"
      }
    ],
    "flag": "https://flagcdn.com/mo.svg",
    "independent": false
  },
  {
    "name": "North Macedonia",
    "capital": "Skopje",
    "population": 2083380,
    "currencies": [
      {
        "code": "MKD",
        "name": "Macedonian denar",
        "symbol": "ден"
      }
    ],
    "languages": [
      {
        "iso639_1": "mk",
        "iso639_2": "mkd",
        "name": "Macedonian",
        "nativeName": "македонски јазик"
      }
    ],
    "flag": "https://flagcdn.com/mk.svg",
    "independent": false
  },
  {
    "name": "Madagascar",
    "capital": "Antananarivo",
    "population": 27691019,
    "currencies": [
      {
        "code": "MGA",
        "name": "Malagasy ariary",
        "symbol": "Ar"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      },
      {
        "iso639_1": "mg",
        "iso639_2": "mlg",
        "name": "Malagasy",
        "nativeName": "fiteny malagasy"
      }
    ],
    "flag": "https://flagcdn.com/mg.svg",
    "independent": false
  },
  {
    "name": "Malawi",
    "capital": "Lilongwe",
    "population": 19129955,
    "currencies": [
      {
        "code": "MWK",
        "name": "Malawian kwacha",
        "symbol": "MK"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "ny",
        "iso639_2": "nya",
        "name": "Chichewa",
        "nativeName": "chiCheŵa"
      }
    ],
    "flag": "https://flagcdn.com/mw.svg",
    "independent": false
  },
  {
    "name": "Malaysia",
    "capital": "Kuala Lumpur",
    "population": 32365998,
    "currencies": [
      {
        "code": "MYR",
        "name": "Malaysian ringgit",
        "symbol": "RM"
      }
    ],
    "languages": [
      {
        "iso639_1": "ms",
        "iso639_2": "zsm",
        "name": "Malaysian",
        "nativeName": "بهاس مليسيا"
      }
    ],
    "flag": "https://flagcdn.com/my.svg",
    "independent": false
  },
  {
    "name": "Maldives",
    "capital": "Malé",
    "population": 540542,
    "currencies": [
      {
        "code": "MVR",
        "name": "Maldivian rufiyaa",
        "symbol": ".ރ"
      }
    ],
    "languages": [
      {
        "iso639_1": "dv",
        "iso639_2": "div",
        "name": "Divehi",
        "nativeName": "ދިވެހި"
      }
    ],
    "flag": "https://flagcdn.com/mv.svg",
    "independent": false
  },
  {
    "name": "Mali",
    "capital": "Bamako",
    "population": 20250834,
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }
    ],
    "flag": "https://flagcdn.com/ml.svg",
    "independent": false
  },
  {
    "name": "Malta",
    "capital": "Valletta",
    "population": 525285,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "mt",
        "iso639_2": "mlt",
        "name": "Maltese",
        "nativeName": "Malti"
      },
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/mt.svg",
    "independent": false
  },
  {
    "name": "Marshall Islands",
    "capital": "Majuro",
    "population": 59194,
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "mh",
        "iso639_2": "mah",
        "name": "Marshallese",
        "nativeName": "Kajin M̧ajeļ"
      }
    ],
    "flag": "https://flagcdn.com/mh.svg",
    "independent": false
  },
  {
    "name": "Martinique",
    "capital": "Fort-de-France",
    "population": 378243,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }
    ],
    "flag": "https://flagcdn.com/mq.svg",
    "independent": false
  },
  {
    "name": "Mauritania",
    "capital": "Nouakchott",
    "population": 4649660,
    "currencies": [
      {
        "code": "MRO",
        "name": "Mauritanian ouguiya",
        "symbol": "UM"
      }
    ],
    "languages": [
      {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }
    ],
    "flag": "https://flagcdn.com/mr.svg",
    "independent": false
  },
  {
    "name": "Mauritius",
    "capital": "Port Louis",
    "population": 1265740,
    "currencies": [
      {
        "code": "MUR",
        "name": "Mauritian rupee",
        "symbol": "₨"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/mu.svg",
    "independent": false
  },
  {
    "name": "Mayotte",
    "capital": "Mamoudzou",
    "population": 226915,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }
    ],
    "flag": "https://flagcdn.com/yt.svg",
    "independent": false
  },
  {
    "name": "Mexico",
    "capital": "Mexico City",
    "population": 128932753,
    "currencies": [
      {
        "code": "MXN",
        "name": "Mexican peso",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }
    ],
    "flag": "https://flagcdn.com/mx.svg",
    "independent": false
  },
  {
    "name": "Micronesia (Federated States of)",
    "capital": "Palikir",
    "population": 115021,
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/fm.svg",
    "independent": false
  },
  {
    "name": "Moldova (Republic of)",
    "capital": "Chișinău",
    "population": 2617820,
    "currencies": [
      {
        "code": "MDL",
        "name": "Moldovan leu",
        "symbol": "L"
      }
    ],
    "languages": [
      {
        "iso639_1": "ro",
        "iso639_2": "ron",
        "name": "Romanian",
        "nativeName": "Română"
      }
    ],
    "flag": "https://flagcdn.com/md.svg",
    "independent": false
  },
  {
    "name": "Monaco",
    "capital": "Monaco",
    "population": 39244,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }
    ],
    "flag": "https://flagcdn.com/mc.svg",
    "independent": false
  },
  {
    "name": "Mongolia",
    "capital": "Ulan Bator",
    "population": 3278292,
    "currencies": [
      {
        "code": "MNT",
        "name": "Mongolian tögrög",
        "symbol": "₮"
      }
    ],
    "languages": [
      {
        "iso639_1": "mn",
        "iso639_2": "mon",
        "name": "Mongolian",
        "nativeName": "Монгол хэл"
      }
    ],
    "flag": "https://flagcdn.com/mn.svg",
    "independent": false
  },
  {
    "name": "Montenegro",
    "capital": "Podgorica",
    "population": 621718,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "sr",
        "iso639_2": "srp",
        "name": "Serbian",
        "nativeName": "српски језик"
      },
      {
        "iso639_1": "bs",
        "iso639_2": "bos",
        "name": "Bosnian",
        "nativeName": "bosanski jezik"
      },
      {
        "iso639_1": "sq",
        "iso639_2": "sqi",
        "name": "Albanian",
        "nativeName": "Shqip"
      },
      {
        "iso639_1": "hr",
        "iso639_2": "hrv",
        "name": "Croatian",
        "nativeName": "hrvatski jezik"
      }
    ],
    "flag": "https://flagcdn.com/me.svg",
    "independent": false
  },
  {
    "name": "Montserrat",
    "capital": "Plymouth",
    "population": 4922,
    "currencies": [
      {
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/ms.svg",
    "independent": false
  },
  {
    "name": "Morocco",
    "capital": "Rabat",
    "population": 36910558,
    "currencies": [
      {
        "code": "MAD",
        "name": "Moroccan dirham",
        "symbol": "د.م."
      }
    ],
    "languages": [
      {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }
    ],
    "flag": "https://flagcdn.com/ma.svg",
    "independent": false
  },
  {
    "name": "Mozambique",
    "capital": "Maputo",
    "population": 31255435,
    "currencies": [
      {
        "code": "MZN",
        "name": "Mozambican metical",
        "symbol": "MT"
      }
    ],
    "languages": [
      {
        "iso639_1": "pt",
        "iso639_2": "por",
        "name": "Portuguese",
        "nativeName": "Português"
      }
    ],
    "flag": "https://flagcdn.com/mz.svg",
    "independent": false
  },
  {
    "name": "Myanmar",
    "capital": "Naypyidaw",
    "population": 54409794,
    "currencies": [
      {
        "code": "MMK",
        "name": "Burmese kyat",
        "symbol": "Ks"
      }
    ],
    "languages": [
      {
        "iso639_1": "my",
        "iso639_2": "mya",
        "name": "Burmese",
        "nativeName": "ဗမာစာ"
      }
    ],
    "flag": "https://flagcdn.com/mm.svg",
    "independent": false
  },
  {
    "name": "Namibia",
    "capital": "Windhoek",
    "population": 2540916,
    "currencies": [
      {
        "code": "NAD",
        "name": "Namibian dollar",
        "symbol": "$"
      },
      {
        "code": "ZAR",
        "name": "South African rand",
        "symbol": "R"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "af",
        "iso639_2": "afr",
        "name": "Afrikaans",
        "nativeName": "Afrikaans"
      }
    ],
    "flag": "https://flagcdn.com/na.svg",
    "independent": false
  },
  {
    "name": "Nauru",
    "capital": "Yaren",
    "population": 10834,
    "currencies": [
      {
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "na",
        "iso639_2": "nau",
        "name": "Nauruan",
        "nativeName": "Dorerin Naoero"
      }
    ],
    "flag": "https://flagcdn.com/nr.svg",
    "independent": false
  },
  {
    "name": "Nepal",
    "capital": "Kathmandu",
    "population": 29136808,
    "currencies": [
      {
        "code": "NPR",
        "name": "Nepalese rupee",
        "symbol": "₨"
      }
    ],
    "languages": [
      {
        "iso639_1": "ne",
        "iso639_2": "nep",
        "name": "Nepali",
        "nativeName": "नेपाली"
      }
    ],
    "flag": "https://flagcdn.com/np.svg",
    "independent": false
  },
  {
    "name": "Netherlands",
    "capital": "Amsterdam",
    "population": 17441139,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "nl",
        "iso639_2": "nld",
        "name": "Dutch",
        "nativeName": "Nederlands"
      }
    ],
    "flag": "https://flagcdn.com/nl.svg",
    "independent": false
  },
  {
    "name": "New Caledonia",
    "capital": "Nouméa",
    "population": 271960,
    "currencies": [
      {
        "code": "XPF",
        "name": "CFP franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }
    ],
    "flag": "https://flagcdn.com/nc.svg",
    "independent": false
  },
  {
    "name": "New Zealand",
    "capital": "Wellington",
    "population": 5084300,
    "currencies": [
      {
        "code": "NZD",
        "name": "New Zealand dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "mi",
        "iso639_2": "mri",
        "name": "Māori",
        "nativeName": "te reo Māori"
      }
    ],
    "flag": "https://flagcdn.com/nz.svg",
    "independent": false
  },
  {
    "name": "Nicaragua",
    "capital": "Managua",
    "population": 6624554,
    "currencies": [
      {
        "code": "NIO",
        "name": "Nicaraguan córdoba",
        "symbol": "C$"
      }
    ],
    "languages": [
      {
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }
    ],
    "flag": "https://flagcdn.com/ni.svg",
    "independent": false
  },
  {
    "name": "Niger",
    "capital": "Niamey",
    "population": 24206636,
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }
    ],
    "flag": "https://flagcdn.com/ne.svg",
    "independent": false
  },
  {
    "name": "Nigeria",
    "capital": "Abuja",
    "population": 206139587,
    "currencies": [
      {
        "code": "NGN",
        "name": "Nigerian naira",
        "symbol": "₦"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/ng.svg",
    "independent": false
  },
  {
    "name": "Niue",
    "capital": "Alofi",
    "population": 1470,
    "currencies": [
      {
        "code": "NZD",
        "name": "New Zealand dollar",
        "symbol": "$"
      },
      {
        "code": "NZD",
        "name": "Niue dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/nu.svg",
    "independent": false
  },
  {
    "name": "Norfolk Island",
    "capital": "Kingston",
    "population": 2302,
    "currencies": [
      {
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/nf.svg",
    "independent": false
  },
  {
    "name": "Korea (Democratic People's Republic of)",
    "capital": "Pyongyang",
    "population": 25778815,
    "currencies": [
      {
        "code": "KPW",
        "name": "North Korean won",
        "symbol": "₩"
      }
    ],
    "languages": [
      {
        "iso639_1": "ko",
        "iso639_2": "kor",
        "name": "Korean",
        "nativeName": "한국어"
      }
    ],
    "flag": "https://flagcdn.com/kp.svg",
    "independent": false
  },
  {
    "name": "Northern Mariana Islands",
    "capital": "Saipan",
    "population": 57557,
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "ch",
        "iso639_2": "cha",
        "name": "Chamorro",
        "nativeName": "Chamoru"
      }
    ],
    "flag": "https://flagcdn.com/mp.svg",
    "independent": false
  },
  {
    "name": "Norway",
    "capital": "Oslo",
    "population": 5379475,
    "currencies": [
      {
        "code": "NOK",
        "name": "Norwegian krone",
        "symbol": "kr"
      }
    ],
    "languages": [
      {
        "iso639_1": "no",
        "iso639_2": "nor",
        "name": "Norwegian",
        "nativeName": "Norsk"
      },
      {
        "iso639_1": "nb",
        "iso639_2": "nob",
        "name": "Norwegian Bokmål",
        "nativeName": "Norsk bokmål"
      },
      {
        "iso639_1": "nn",
        "iso639_2": "nno",
        "name": "Norwegian Nynorsk",
        "nativeName": "Norsk nynorsk"
      }
    ],
    "flag": "https://flagcdn.com/no.svg",
    "independent": false
  },
  {
    "name": "Oman",
    "capital": "Muscat",
    "population": 5106622,
    "currencies": [
      {
        "code": "OMR",
        "name": "Omani rial",
        "symbol": "ر.ع."
      }
    ],
    "languages": [
      {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }
    ],
    "flag": "https://flagcdn.com/om.svg",
    "independent": false
  },
  {
    "name": "Pakistan",
    "capital": "Islamabad",
    "population": 220892331,
    "currencies": [
      {
        "code": "PKR",
        "name": "Pakistani rupee",
        "symbol": "₨"
      }
    ],
    "languages": [
      {
        "iso639_1": "ur",
        "iso639_2": "urd",
        "name": "Urdu",
        "nativeName": "اردو"
      },
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/pk.svg",
    "independent": false
  },
  {
    "name": "Palau",
    "capital": "Ngerulmud",
    "population": 18092,
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/pw.svg",
    "independent": false
  },
  {
    "name": "Palestine, State of",
    "capital": "Ramallah",
    "population": 4803269,
    "currencies": [
      {
        "code": "EGP",
        "name": "Egyptian pound",
        "symbol": "E£"
      },
      {
        "code": "ILS",
        "name": "Israeli new shekel",
        "symbol": "₪"
      },
      {
        "code": "JOD",
        "name": "Jordanian dinar",
        "symbol": "د.أ"
      }
    ],
    "languages": [
      {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }
    ],
    "flag": "https://flagcdn.com/ps.svg",
    "independent": false
  },
  {
    "name": "Panama",
    "capital": "Panama City",
    "population": 4314768,
    "currencies": [
      {
        "code": "PAB",
        "name": "Panamanian balboa",
        "symbol": "B/."
      },
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }
    ],
    "flag": "https://flagcdn.com/pa.svg",
    "independent": false
  },
  {
    "name": "Papua New Guinea",
    "capital": "Port Moresby",
    "population": 8947027,
    "currencies": [
      {
        "code": "PGK",
        "name": "Papua New Guinean kina",
        "symbol": "K"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/pg.svg",
    "independent": false
  },
  {
    "name": "Paraguay",
    "capital": "Asunción",
    "population": 7132530,
    "currencies": [
      {
        "code": "PYG",
        "name": "Paraguayan guaraní",
        "symbol": "₲"
      }
    ],
    "languages": [
      {
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      },
      {
        "iso639_1": "gn",
        "iso639_2": "grn",
        "name": "Guaraní",
        "nativeName": "Avañe'ẽ"
      }
    ],
    "flag": "https://flagcdn.com/py.svg",
    "independent": false
  },
  {
    "name": "Peru",
    "capital": "Lima",
    "population": 32971846,
    "currencies": [
      {
        "code": "PEN",
        "name": "Peruvian sol",
        "symbol": "S/."
      }
    ],
    "languages": [
      {
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }
    ],
    "flag": "https://flagcdn.com/pe.svg",
    "independent": false
  },
  {
    "name": "Philippines",
    "capital": "Manila",
    "population": 109581085,
    "currencies": [
      {
        "code": "PHP",
        "name": "Philippine peso",
        "symbol": "₱"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/ph.svg",
    "independent": false
  },
  {
    "name": "Pitcairn",
    "capital": "Adamstown",
    "population": 56,
    "currencies": [
      {
        "code": "NZD",
        "name": "New Zealand dollar",
        "symbol": "$"
      },
      {
        "code": "PND",
        "name": "Pitcairn Islands dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/pn.svg",
    "independent": false
  },
  {
    "name": "Poland",
    "capital": "Warsaw",
    "population": 37950802,
    "currencies": [
      {
        "code": "PLN",
        "name": "Polish złoty",
        "symbol": "zł"
      }
    ],
    "languages": [
      {
        "iso639_1": "pl",
        "iso639_2": "pol",
        "name": "Polish",
        "nativeName": "język polski"
      }
    ],
    "flag": "https://flagcdn.com/pl.svg",
    "independent": false
  },
  {
    "name": "Portugal",
    "capital": "Lisbon",
    "population": 10305564,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "pt",
        "iso639_2": "por",
        "name": "Portuguese",
        "nativeName": "Português"
      }
    ],
    "flag": "https://flagcdn.com/pt.svg",
    "independent": false
  },
  {
    "name": "Puerto Rico",
    "capital": "San Juan",
    "population": 3194034,
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      },
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/pr.svg",
    "independent": false
  },
  {
    "name": "Qatar",
    "capital": "Doha",
    "population": 2881060,
    "currencies": [
      {
        "code": "QAR",
        "name": "Qatari riyal",
        "symbol": "ر.ق"
      }
    ],
    "languages": [
      {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }
    ],
    "flag": "https://flagcdn.com/qa.svg",
    "independent": false
  },
  {
    "name": "Republic of Kosovo",
    "capital": "Pristina",
    "population": 1775378,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "sq",
        "iso639_2": "sqi",
        "name": "Albanian",
        "nativeName": "Shqip"
      },
      {
        "iso639_1": "sr",
        "iso639_2": "srp",
        "name": "Serbian",
        "nativeName": "српски језик"
      }
    ],
    "flag": "https://flagcdn.com/xk.svg",
    "independent": false
  },
  {
    "name": "Réunion",
    "capital": "Saint-Denis",
    "population": 840974,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }
    ],
    "flag": "https://flagcdn.com/re.svg",
    "independent": false
  },
  {
    "name": "Romania",
    "capital": "Bucharest",
    "population": 19286123,
    "currencies": [
      {
        "code": "RON",
        "name": "Romanian leu",
        "symbol": "lei"
      }
    ],
    "languages": [
      {
        "iso639_1": "ro",
        "iso639_2": "ron",
        "name": "Romanian",
        "nativeName": "Română"
      }
    ],
    "flag": "https://flagcdn.com/ro.svg",
    "independent": false
  },
  {
    "name": "Russian Federation",
    "capital": "Moscow",
    "population": 144104080,
    "currencies": [
      {
        "code": "RUB",
        "name": "Russian ruble",
        "symbol": "₽"
      }
    ],
    "languages": [
      {
        "iso639_1": "ru",
        "iso639_2": "rus",
        "name": "Russian",
        "nativeName": "Русский"
      }
    ],
    "flag": "https://flagcdn.com/ru.svg",
    "independent": false
  },
  {
    "name": "Rwanda",
    "capital": "Kigali",
    "population": 12952209,
    "currencies": [
      {
        "code": "RWF",
        "name": "Rwandan franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      {
        "iso639_1": "rw",
        "iso639_2": "kin",
        "name": "Kinyarwanda",
        "nativeName": "Ikinyarwanda"
      },
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }
    ],
    "flag": "https://flagcdn.com/rw.svg",
    "independent": false
  },
  {
    "name": "Saint Barthélemy",
    "capital": "Gustavia",
    "population": 9417,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }
    ],
    "flag": "https://flagcdn.com/bl.svg",
    "independent": false
  },
  {
    "name": "Saint Helena, Ascension and Tristan da Cunha",
    "capital": "Jamestown",
    "population": 4255,
    "currencies": [
      {
        "code": "SHP",
        "name": "Saint Helena pound",
        "symbol": "£"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/sh.svg",
    "independent": false
  },
  {
    "name": "Saint Kitts and Nevis",
    "capital": "Basseterre",
    "population": 53192,
    "currencies": [
      {
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/kn.svg",
    "independent": false
  },
  {
    "name": "Saint Lucia",
    "capital": "Castries",
    "population": 183629,
    "currencies": [
      {
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/lc.svg",
    "independent": false
  },
  {
    "name": "Saint Martin (French part)",
    "capital": "Marigot",
    "population": 38659,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      },
      {
        "iso639_1": "nl",
        "iso639_2": "nld",
        "name": "Dutch",
        "nativeName": "Nederlands"
      }
    ],
    "flag": "https://flagcdn.com/mf.svg",
    "independent": false
  },
  {
    "name": "Saint Pierre and Miquelon",
    "capital": "Saint-Pierre",
    "population": 6069,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }
    ],
    "flag": "https://flagcdn.com/pm.svg",
    "independent": false
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "capital": "Kingstown",
    "population": 110947,
    "currencies": [
      {
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/vc.svg",
    "independent": false
  },
  {
    "name": "Samoa",
    "capital": "Apia",
    "population": 198410,
    "currencies": [
      {
        "code": "WST",
        "name": "Samoan tālā",
        "symbol": "T"
      }
    ],
    "languages": [
      {
        "iso639_1": "sm",
        "iso639_2": "smo",
        "name": "Samoan",
        "nativeName": "gagana fa'a Samoa"
      },
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/ws.svg",
    "independent": false
  },
  {
    "name": "San Marino",
    "capital": "City of San Marino",
    "population": 33938,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "it",
        "iso639_2": "ita",
        "name": "Italian",
        "nativeName": "Italiano"
      }
    ],
    "flag": "https://flagcdn.com/sm.svg",
    "independent": false
  },
  {
    "name": "Sao Tome and Principe",
    "capital": "São Tomé",
    "population": 219161,
    "currencies": [
      {
        "code": "STD",
        "name": "São Tomé and Príncipe dobra",
        "symbol": "Db"
      }
    ],
    "languages": [
      {
        "iso639_1": "pt",
        "iso639_2": "por",
        "name": "Portuguese",
        "nativeName": "Português"
      }
    ],
    "flag": "https://flagcdn.com/st.svg",
    "independent": false
  },
  {
    "name": "Saudi Arabia",
    "capital": "Riyadh",
    "population": 34813867,
    "currencies": [
      {
        "code": "SAR",
        "name": "Saudi riyal",
        "symbol": "ر.س"
      }
    ],
    "languages": [
      {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }
    ],
    "flag": "https://flagcdn.com/sa.svg",
    "independent": false
  },
  {
    "name": "Senegal",
    "capital": "Dakar",
    "population": 16743930,
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }
    ],
    "flag": "https://flagcdn.com/sn.svg",
    "independent": false
  },
  {
    "name": "Serbia",
    "capital": "Belgrade",
    "population": 6908224,
    "currencies": [
      {
        "code": "RSD",
        "name": "Serbian dinar",
        "symbol": "дин."
      }
    ],
    "languages": [
      {
        "iso639_1": "sr",
        "iso639_2": "srp",
        "name": "Serbian",
        "nativeName": "српски језик"
      }
    ],
    "flag": "https://flagcdn.com/rs.svg",
    "independent": false
  },
  {
    "name": "Seychelles",
    "capital": "Victoria",
    "population": 98462,
    "currencies": [
      {
        "code": "SCR",
        "name": "Seychellois rupee",
        "symbol": "₨"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      },
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/sc.svg",
    "independent": false
  },
  {
    "name": "Sierra Leone",
    "capital": "Freetown",
    "population": 7976985,
    "currencies": [
      {
        "code": "SLE",
        "name": "Leone",
        "symbol": "Le"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/sl.svg",
    "independent": false
  },
  {
    "name": "Singapore",
    "capital": "Singapore",
    "population": 5685807,
    "currencies": [
      {
        "code": "SGD",
        "name": "Singapore dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "ms",
        "iso639_2": "msa",
        "name": "Malay",
        "nativeName": "bahasa Melayu"
      },
      {
        "iso639_1": "ta",
        "iso639_2": "tam",
        "name": "Tamil",
        "nativeName": "தமிழ்"
      },
      {
        "iso639_1": "zh",
        "iso639_2": "zho",
        "name": "Chinese",
        "nativeName": "中文 (Zhōngwén)"
      }
    ],
    "flag": "https://flagcdn.com/sg.svg",
    "independent": false
  },
  {
    "name": "Sint Maarten (Dutch part)",
    "capital": "Philipsburg",
    "population": 40812,
    "currencies": [
      {
        "code": "ANG",
        "name": "Netherlands Antillean guilder",
        "symbol": "ƒ"
      }
    ],
    "languages": [
      {
        "iso639_1": "nl",
        "iso639_2": "nld",
        "name": "Dutch",
        "nativeName": "Nederlands"
      },
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/sx.svg",
    "independent": false
  },
  {
    "name": "Slovakia",
    "capital": "Bratislava",
    "population": 5458827,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "sk",
        "iso639_2": "slk",
        "name": "Slovak",
        "nativeName": "slovenčina"
      }
    ],
    "flag": "https://flagcdn.com/sk.svg",
    "independent": false
  },
  {
    "name": "Slovenia",
    "capital": "Ljubljana",
    "population": 2100126,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "sl",
        "iso639_2": "slv",
        "name": "Slovene",
        "nativeName": "slovenski jezik"
      }
    ],
    "flag": "https://flagcdn.com/si.svg",
    "independent": false
  },
  {
    "name": "Solomon Islands",
    "capital": "Honiara",
    "population": 686878,
    "currencies": [
      {
        "code": "SBD",
        "name": "Solomon Islands dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/sb.svg",
    "independent": false
  },
  {
    "name": "Somalia",
    "capital": "Mogadishu",
    "population": 15893219,
    "currencies": [
      {
        "code": "SOS",
        "name": "Somali shilling",
        "symbol": "Sh"
      }
    ],
    "languages": [
      {
        "iso639_1": "so",
        "iso639_2": "som",
        "name": "Somali",
        "nativeName": "Soomaaliga"
      },
      {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }
    ],
    "flag": "https://flagcdn.com/so.svg",
    "independent": false
  },
  {
    "name": "South Africa",
    "capital": "Pretoria",
    "population": 59308690,
    "currencies": [
      {
        "code": "ZAR",
        "name": "South African rand",
        "symbol": "R"
      }
    ],
    "languages": [
      {
        "iso639_1": "af",
        "iso639_2": "afr",
        "name": "Afrikaans",
        "nativeName": "Afrikaans"
      },
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "nr",
        "iso639_2": "nbl",
        "name": "Southern Ndebele",
        "nativeName": "isiNdebele"
      },
      {
        "iso639_1": "st",
        "iso639_2": "sot",
        "name": "Southern Sotho",
        "nativeName": "Sesotho"
      },
      {
        "iso639_1": "ss",
        "iso639_2": "ssw",
        "name": "Swati",
        "nativeName": "SiSwati"
      },
      {
        "iso639_1": "tn",
        "iso639_2": "tsn",
        "name": "Tswana",
        "nativeName": "Setswana"
      },
      {
        "iso639_1": "ts",
        "iso639_2": "tso",
        "name": "Tsonga",
        "nativeName": "Xitsonga"
      },
      {
        "iso639_1": "ve",
        "iso639_2": "ven",
        "name": "Venda",
        "nativeName": "Tshivenḓa"
      },
      {
        "iso639_1": "xh",
        "iso639_2": "xho",
        "name": "Xhosa",
        "nativeName": "isiXhosa"
      },
      {
        "iso639_1": "zu",
        "iso639_2": "zul",
        "name": "Zulu",
        "nativeName": "isiZulu"
      }
    ],
    "flag": "https://flagcdn.com/za.svg",
    "independent": false
  },
  {
    "name": "South Georgia and the South Sandwich Islands",
    "capital": "King Edward Point",
    "population": 30,
    "currencies": [
      {
        "code": "FKP",
        "name": "Falkland Islands Pound",
        "symbol": "£"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/gs.svg",
    "independent": false
  },
  {
    "name": "Korea (Republic of)",
    "capital": "Seoul",
    "population": 51780579,
    "currencies": [
      {
        "code": "KRW",
        "name": "South Korean won",
        "symbol": "₩"
      }
    ],
    "languages": [
      {
        "iso639_1": "ko",
        "iso639_2": "kor",
        "name": "Korean",
        "nativeName": "한국어"
      }
    ],
    "flag": "https://flagcdn.com/kr.svg",
    "independent": false
  },
  {
    "name": "Spain",
    "capital": "Madrid",
    "population": 47351567,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }
    ],
    "flag": "https://flagcdn.com/es.svg",
    "independent": false
  },
  {
    "name": "Sri Lanka",
    "capital": "Sri Jayawardenepura Kotte",
    "population": 21919000,
    "currencies": [
      {
        "code": "LKR",
        "name": "Sri Lankan rupee",
        "symbol": "Rs"
      }
    ],
    "languages": [
      {
        "iso639_1": "si",
        "iso639_2": "sin",
        "name": "Sinhalese",
        "nativeName": "සිංහල"
      },
      {
        "iso639_1": "ta",
        "iso639_2": "tam",
        "name": "Tamil",
        "nativeName": "தமிழ்"
      }
    ],
    "flag": "https://flagcdn.com/lk.svg",
    "independent": false
  },
  {
    "name": "Sudan",
    "capital": "Khartoum",
    "population": 43849269,
    "currencies": [
      {
        "code": "SDG",
        "name": "Sudanese pound",
        "symbol": "ج.س."
      }
    ],
    "languages": [
      {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      },
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/sd.svg",
    "independent": false
  },
  {
    "name": "South Sudan",
    "capital": "Juba",
    "population": 11193729,
    "currencies": [
      {
        "code": "SSP",
        "name": "South Sudanese pound",
        "symbol": "£"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/ss.svg",
    "independent": false
  },
  {
    "name": "Suriname",
    "capital": "Paramaribo",
    "population": 586634,
    "currencies": [
      {
        "code": "SRD",
        "name": "Surinamese dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "nl",
        "iso639_2": "nld",
        "name": "Dutch",
        "nativeName": "Nederlands"
      }
    ],
    "flag": "https://flagcdn.com/sr.svg",
    "independent": false
  },
  {
    "name": "Svalbard and Jan Mayen",
    "capital": "Longyearbyen",
    "population": 2562,
    "currencies": [
      {
        "code": "NOK",
        "name": "Norwegian krone",
        "symbol": "kr"
      }
    ],
    "languages": [
      {
        "iso639_1": "no",
        "iso639_2": "nor",
        "name": "Norwegian",
        "nativeName": "Norsk"
      }
    ],
    "flag": "https://flagcdn.com/sj.svg",
    "independent": false
  },
  {
    "name": "Swaziland",
    "capital": "Mbabane",
    "population": 1160164,
    "currencies": [
      {
        "code": "SZL",
        "name": "Swazi lilangeni",
        "symbol": "L"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "ss",
        "iso639_2": "ssw",
        "name": "Swati",
        "nativeName": "SiSwati"
      }
    ],
    "flag": "https://flagcdn.com/sz.svg",
    "independent": false
  },
  {
    "name": "Sweden",
    "capital": "Stockholm",
    "population": 10353442,
    "currencies": [
      {
        "code": "SEK",
        "name": "Swedish krona",
        "symbol": "kr"
      }
    ],
    "languages": [
      {
        "iso639_1": "sv",
        "iso639_2": "swe",
        "name": "Swedish",
        "nativeName": "svenska"
      }
    ],
    "flag": "https://flagcdn.com/se.svg",
    "independent": false
  },
  {
    "name": "Switzerland",
    "capital": "Bern",
    "population": 8636896,
    "currencies": [
      {
        "code": "CHF",
        "name": "Swiss franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      {
        "iso639_1": "de",
        "iso639_2": "deu",
        "name": "German",
        "nativeName": "Deutsch"
      },
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      },
      {
        "iso639_1": "it",
        "iso639_2": "ita",
        "name": "Italian",
        "nativeName": "Italiano"
      },
      {
        "iso639_2": "roh",
        "name": "Romansh"
      }
    ],
    "flag": "https://flagcdn.com/ch.svg",
    "independent": false
  },
  {
    "name": "Syrian Arab Republic",
    "capital": "Damascus",
    "population": 17500657,
    "currencies": [
      {
        "code": "SYP",
        "name": "Syrian pound",
        "symbol": "£"
      }
    ],
    "languages": [
      {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }
    ],
    "flag": "https://flagcdn.com/sy.svg",
    "independent": false
  },
  {
    "name": "Taiwan",
    "capital": "Taipei",
    "population": 23503349,
    "currencies": [
      {
        "code": "TWD",
        "name": "New Taiwan dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "zh",
        "iso639_2": "zho",
        "name": "Chinese",
        "nativeName": "中文 (Zhōngwén)"
      }
    ],
    "flag": "https://flagcdn.com/tw.svg",
    "independent": false
  },
  {
    "name": "Tajikistan",
    "capital": "Dushanbe",
    "population": 9537642,
    "currencies": [
      {
        "code": "TJS",
        "name": "Tajikistani somoni",
        "symbol": "ЅМ"
      }
    ],
    "languages": [
      {
        "iso639_1": "tg",
        "iso639_2": "tgk",
        "name": "Tajik",
        "nativeName": "тоҷикӣ"
      },
      {
        "iso639_1": "ru",
        "iso639_2": "rus",
        "name": "Russian",
        "nativeName": "Русский"
      }
    ],
    "flag": "https://flagcdn.com/tj.svg",
    "independent": false
  },
  {
    "name": "Tanzania, United Republic of",
    "capital": "Dodoma",
    "population": 59734213,
    "currencies": [
      {
        "code": "TZS",
        "name": "Tanzanian shilling",
        "symbol": "Sh"
      }
    ],
    "languages": [
      {
        "iso639_1": "sw",
        "iso639_2": "swa",
        "name": "Swahili",
        "nativeName": "Kiswahili"
      },
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/tz.svg",
    "independent": false
  },
  {
    "name": "Thailand",
    "capital": "Bangkok",
    "population": 69799978,
    "currencies": [
      {
        "code": "THB",
        "name": "Thai baht",
        "symbol": "฿"
      }
    ],
    "languages": [
      {
        "iso639_1": "th",
        "iso639_2": "tha",
        "name": "Thai",
        "nativeName": "ไทย"
      }
    ],
    "flag": "https://flagcdn.com/th.svg",
    "independent": false
  },
  {
    "name": "Timor-Leste",
    "capital": "Dili",
    "population": 1318442,
    "currencies": [
      {
        "code": "USD",
        "name": "United States Dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "pt",
        "iso639_2": "por",
        "name": "Portuguese",
        "nativeName": "Português"
      }
    ],
    "flag": "https://flagcdn.com/tl.svg",
    "independent": false
  },
  {
    "name": "Togo",
    "capital": "Lomé",
    "population": 8278737,
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }
    ],
    "flag": "https://flagcdn.com/tg.svg",
    "independent": false
  },
  {
    "name": "Tokelau",
    "capital": "Fakaofo",
    "population": 1411,
    "currencies": [
      {
        "code": "NZD",
        "name": "New Zealand dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/tk.svg",
    "independent": false
  },
  {
    "name": "Tonga",
    "capital": "Nuku'alofa",
    "population": 105697,
    "currencies": [
      {
        "code": "TOP",
        "name": "Tongan paʻanga",
        "symbol": "T$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "to",
        "iso639_2": "ton",
        "name": "Tonga (Tonga Islands)",
        "nativeName": "faka Tonga"
      }
    ],
    "flag": "https://flagcdn.com/to.svg",
    "independent": false
  },
  {
    "name": "Trinidad and Tobago",
    "capital": "Port of Spain",
    "population": 1399491,
    "currencies": [
      {
        "code": "TTD",
        "name": "Trinidad and Tobago dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/tt.svg",
    "independent": false
  },
  {
    "name": "Tunisia",
    "capital": "Tunis",
    "population": 11818618,
    "currencies": [
      {
        "code": "TND",
        "name": "Tunisian dinar",
        "symbol": "د.ت"
      }
    ],
    "languages": [
      {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }
    ],
    "flag": "https://flagcdn.com/tn.svg",
    "independent": false
  },
  {
    "name": "Turkey",
    "capital": "Ankara",
    "population": 84339067,
    "currencies": [
      {
        "code": "TRY",
        "name": "Turkish lira",
        "symbol": "₺"
      }
    ],
    "languages": [
      {
        "iso639_1": "tr",
        "iso639_2": "tur",
        "name": "Turkish",
        "nativeName": "Türkçe"
      }
    ],
    "flag": "https://flagcdn.com/tr.svg",
    "independent": false
  },
  {
    "name": "Turkmenistan",
    "capital": "Ashgabat",
    "population": 6031187,
    "currencies": [
      {
        "code": "TMT",
        "name": "Turkmenistan manat",
        "symbol": "m"
      }
    ],
    "languages": [
      {
        "iso639_1": "tk",
        "iso639_2": "tuk",
        "name": "Turkmen",
        "nativeName": "Türkmen"
      },
      {
        "iso639_1": "ru",
        "iso639_2": "rus",
        "name": "Russian",
        "nativeName": "Русский"
      }
    ],
    "flag": "https://flagcdn.com/tm.svg",
    "independent": false
  },
  {
    "name": "Turks and Caicos Islands",
    "capital": "Cockburn Town",
    "population": 38718,
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/tc.svg",
    "independent": false
  },
  {
    "name": "Tuvalu",
    "capital": "Funafuti",
    "population": 11792,
    "currencies": [
      {
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      },
      {
        "code": "TVD[G]",
        "name": "Tuvaluan dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/tv.svg",
    "independent": false
  },
  {
    "name": "Uganda",
    "capital": "Kampala",
    "population": 45741000,
    "currencies": [
      {
        "code": "UGX",
        "name": "Ugandan shilling",
        "symbol": "Sh"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "sw",
        "iso639_2": "swa",
        "name": "Swahili",
        "nativeName": "Kiswahili"
      }
    ],
    "flag": "https://flagcdn.com/ug.svg",
    "independent": false
  },
  {
    "name": "Ukraine",
    "capital": "Kyiv",
    "population": 44134693,
    "currencies": [
      {
        "code": "UAH",
        "name": "Ukrainian hryvnia",
        "symbol": "₴"
      }
    ],
    "languages": [
      {
        "iso639_1": "uk",
        "iso639_2": "ukr",
        "name": "Ukrainian",
        "nativeName": "Українська"
      }
    ],
    "flag": "https://flagcdn.com/ua.svg",
    "independent": false
  },
  {
    "name": "United Arab Emirates",
    "capital": "Abu Dhabi",
    "population": 9890400,
    "currencies": [
      {
        "code": "AED",
        "name": "United Arab Emirates dirham",
        "symbol": "د.إ"
      }
    ],
    "languages": [
      {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }
    ],
    "flag": "https://flagcdn.com/ae.svg",
    "independent": false
  },
  {
    "name": "United Kingdom of Great Britain and Northern Ireland",
    "capital": "London",
    "population": 67215293,
    "currencies": [
      {
        "code": "GBP",
        "name": "British pound",
        "symbol": "£"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/gb.svg",
    "independent": false
  },
  {
    "name": "United States of America",
    "capital": "Washington, D.C.",
    "population": 329484123,
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/us.svg",
    "independent": false
  },
  {
    "name": "Uruguay",
    "capital": "Montevideo",
    "population": 3473727,
    "currencies": [
      {
        "code": "UYU",
        "name": "Uruguayan peso",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }
    ],
    "flag": "https://flagcdn.com/uy.svg",
    "independent": false
  },
  {
    "name": "Uzbekistan",
    "capital": "Tashkent",
    "population": 34232050,
    "currencies": [
      {
        "code": "UZS",
        "name": "Uzbekistani so'm",
        "symbol": "so'm"
      }
    ],
    "languages": [
      {
        "iso639_1": "uz",
        "iso639_2": "uzb",
        "name": "Uzbek",
        "nativeName": "Oʻzbek"
      },
      {
        "iso639_1": "ru",
        "iso639_2": "rus",
        "name": "Russian",
        "nativeName": "Русский"
      }
    ],
    "flag": "https://flagcdn.com/uz.svg",
    "independent": false
  },
  {
    "name": "Vanuatu",
    "capital": "Port Vila",
    "population": 307150,
    "currencies": [
      {
        "code": "VUV",
        "name": "Vanuatu vatu",
        "symbol": "Vt"
      }
    ],
    "languages": [
      {
        "iso639_1": "bi",
        "iso639_2": "bis",
        "name": "Bislama",
        "nativeName": "Bislama"
      },
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }
    ],
    "flag": "https://flagcdn.com/vu.svg",
    "independent": false
  },
  {
    "name": "Venezuela (Bolivarian Republic of)",
    "capital": "Caracas",
    "population": 28435943,
    "currencies": [
      {
        "code": "VEF",
        "name": "Venezuelan bolívar",
        "symbol": "Bs S"
      }
    ],
    "languages": [
      {
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }
    ],
    "flag": "https://flagcdn.com/ve.svg",
    "independent": false
  },
  {
    "name": "Vietnam",
    "capital": "Hanoi",
    "population": 97338583,
    "currencies": [
      {
        "code": "VND",
        "name": "Vietnamese đồng",
        "symbol": "₫"
      }
    ],
    "languages": [
      {
        "iso639_1": "vi",
        "iso639_2": "vie",
        "name": "Vietnamese",
        "nativeName": "Tiếng Việt"
      }
    ],
    "flag": "https://flagcdn.com/vn.svg",
    "independent": false
  },
  {
    "name": "Wallis and Futuna",
    "capital": "Mata-Utu",
    "population": 11750,
    "currencies": [
      {
        "code": "XPF",
        "name": "CFP franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }
    ],
    "flag": "https://flagcdn.com/wf.svg",
    "independent": false
  },
  {
    "name": "Western Sahara",
    "capital": "El Aaiún",
    "population": 510713,
    "currencies": [
      {
        "code": "MAD",
        "name": "Moroccan dirham",
        "symbol": "د.م."
      },
      {
        "code": "DZD",
        "name": "Algerian dinar",
        "symbol": "د.ج"
      }
    ],
    "languages": [
      {
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }
    ],
    "flag": "https://flagcdn.com/eh.svg",
    "independent": false
  },
  {
    "name": "Yemen",
    "capital": "Sana'a",
    "population": 29825968,
    "currencies": [
      {
        "code": "YER",
        "name": "Yemeni rial",
        "symbol": "﷼"
      }
    ],
    "languages": [
      {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }
    ],
    "flag": "https://flagcdn.com/ye.svg",
    "independent": false
  },
  {
    "name": "Zambia",
    "capital": "Lusaka",
    "population": 18383956,
    "currencies": [
      {
        "code": "ZMW",
        "name": "Zambian kwacha",
        "symbol": "ZK"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "flag": "https://flagcdn.com/zm.svg",
    "independent": false
  },
  {
    "name": "Zimbabwe",
    "capital": "Harare",
    "population": 14862927,
    "currencies": [
      {
        "code": "ZMW",
        "name": "Zambian kwacha",
        "symbol": "K"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "sn",
        "iso639_2": "sna",
        "name": "Shona",
        "nativeName": "chiShona"
      },
      {
        "iso639_1": "nd",
        "iso639_2": "nde",
        "name": "Northern Ndebele",
        "nativeName": "isiNdebele"
      }
    ],
    "flag": "https://flagcdn.com/zw.svg",
    "independent": false
  }
]
