 

const columns2 = [
  {name: "ID", uid: "id", sortable: true},
  {name: "NAME", uid: "name", sortable: true},
  {name: "AGE", uid: "age", sortable: true},
  {name: "ROLE", uid: "role", sortable: true},
  {name: "TEAM", uid: "team"},
  {name: "EMAIL", uid: "email"},
  {name: "STATUS", uid: "status", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

const statusOptions2 = [
  {name: "Active", uid: "active"},
  {name: "Paused", uid: "paused"},
  {name: "Vacation", uid: "vacation"},
];




const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "NAME", uid: "name", sortable: true },
  { name: "AGE", uid: "age", sortable: true },
  { name: "COUNTRY", uid: "country", sortable: true },
    {name : "OWNER", uid : "owner", sortable : true},
 ];

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
];


const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Tech Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Sr. Dev",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    role: "C.M.",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "S. Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
  {
    id: 6,
    name: "Brian Kim",
    role: "P. Manager",
    team: "Management",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "brian.kim@example.com",
    status: "Active",
  },
  {
    id: 7,
    name: "Michael Hunt",
    role: "Designer",
    team: "Design",
    status: "paused",
    age: "27",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
    email: "michael.hunt@example.com",
  },
  {
    id: 8,
    name: "Samantha Brooks",
    role: "HR Manager",
    team: "HR",
    status: "active",
    age: "31",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d",
    email: "samantha.brooks@example.com",
  },
  {
    id: 9,
    name: "Frank Harrison",
    role: "F. Manager",
    team: "Finance",
    status: "vacation",
    age: "33",
    avatar: "https://i.pravatar.cc/150?img=4",
    email: "frank.harrison@example.com",
  },
  {
    id: 10,
    name: "Emma Adams",
    role: "Ops Manager",
    team: "Operations",
    status: "active",
    age: "35",
    avatar: "https://i.pravatar.cc/150?img=5",
    email: "emma.adams@example.com",
  },
  {
    id: 11,
    name: "Brandon Stevens",
    role: "Jr. Dev",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?img=8",
    email: "brandon.stevens@example.com",
  },
  {
    id: 12,
    name: "Megan Richards",
    role: "P. Manager",
    team: "Product",
    status: "paused",
    age: "28",
    avatar: "https://i.pravatar.cc/150?img=10",
    email: "megan.richards@example.com",
  },
  {
    id: 13,
    name: "Oliver Scott",
    role: "S. Manager",
    team: "Security",
    status: "active",
    age: "37",
    avatar: "https://i.pravatar.cc/150?img=12",
    email: "oliver.scott@example.com",
  },
  {
    id: 14,
    name: "Grace Allen",
    role: "M. Specialist",
    team: "Marketing",
    status: "active",
    age: "30",
    avatar: "https://i.pravatar.cc/150?img=16",
    email: "grace.allen@example.com",
  },
  {
    id: 15,
    name: "Noah Carter",
    role: "IT Specialist",
    team: "I. Technology",
    status: "paused",
    age: "31",
    avatar: "https://i.pravatar.cc/150?img=15",
    email: "noah.carter@example.com",
  },
  {
    id: 16,
    name: "Ava Perez",
    role: "Manager",
    team: "Sales",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?img=20",
    email: "ava.perez@example.com",
  },
  {
    id: 17,
    name: "Liam Johnson",
    role: "Data Analyst",
    team: "Analysis",
    status: "active",
    age: "28",
    avatar: "https://i.pravatar.cc/150?img=33",
    email: "liam.johnson@example.com",
  },
  {
    id: 18,
    name: "Sophia Taylor",
    role: "QA Analyst",
    team: "Testing",
    status: "active",
    age: "27",
    avatar: "https://i.pravatar.cc/150?img=29",
    email: "sophia.taylor@example.com",
  },
  {
    id: 19,
    name: "Lucas Harris",
    role: "Administrator",
    team: "Information Technology",
    status: "paused",
    age: "32",
    avatar: "https://i.pravatar.cc/150?img=50",
    email: "lucas.harris@example.com",
  },
  {
    id: 20,
    name: "Mia Robinson",
    role: "Coordinator",
    team: "Operations",
    status: "active",
    age: "26",
    avatar: "https://i.pravatar.cc/150?img=45",
    email: "mia.robinson@example.com",
  },
];

const teams = [
  {
    id: 1,
    name: "Barcelona",
    country: "Spain",
     age: "122",
    avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
    email: "barcelona@example.com",
    owner: "Lionel Messi",

  },
  {
    id: 2,
    name: "Real Madrid",
    country: "Spain",
     age: "120",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Real_Madrid_CF.svg/512px-Real_Madrid_CF.svg.png", // Real Madrid Avatar
    email: "realmadrid@example.com",
    owner : "Cristiano Ronaldo",
  },
  {
    id: 3,
    name: "Liverpool",
    country: "England",
     age: "129",
    avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png", // Liverpool Avatar
    email: "liverpool@example.com",
    owner : "Mohamed Salah",
  },
  {
    id: 4,
    name: "Manchester City",
    country: "England",
     age: "126",
    avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png", // Manchester City Avatar
    email: "mancity@example.com",
    owner : "Kevin De Bruyne",
  },
  {
    id: 5,
    name: "Paris Saint-Germain (PSG)",
    country: "France",
     age: "51",
    avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Paris_Saint-Germain_FC.svg/1200px-Paris_Saint-Germain_FC.svg.png", // PSG Avatar
    email: "psg@example.com",
    owner : "Neymar Jr",
  },
  {
    id: 6,
    name: "Chelsea",
    country: "England",
     age: "116",
    avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png", // Chelsea Avatar
    email: "chelsea@example.com",
    owner : "Eden Hazard",
  },
  {
    id: 7,
    name: "AC Milan",
    country: "Italy",
     age: "123",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/AC_Milan_logo.svg/1200px-AC_Milan_logo.svg.png", // AC Milan Avatar
    email: "acmilan@example.com",
    owner : "Zlatan Ibrahimovic",
  },
  {
    id: 8,
    name: "Borussia Dortmund",
    country: "Germany",
     age: "112",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/1200px-Borussia_Dortmund_logo.svg.png", // Borussia Dortmund Avatar
    email: "bvb@example.com",
    owner : "Erling Haaland",
  },
  {
    id: 9,
    name: "Inter Milan",
    country: "Italy",
     age: "114",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Inter_Milan.svg/1200px-Inter_Milan.svg.png", // Inter Milan Avatar
    email: "inter@example.com",
    owner : "Romelu Lukaku",
  },
  {
    id: 10,
    name: "Arsenal",
    country: "England",
     age: "135",
    avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png", // Arsenal Avatar
    email: "arsenal@example.com",
    owner : "Pierre-Emerick Aubameyang",
  },
  {
    id: 11,
    name: "Bayern Munich",
    country: "Germany",
     age: "121",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/FC_Bayern_München_logo_%282002%29.svg/1200px-FC_Bayern_München_logo_%282002%29.svg.png", // Bayern Munich Avatar
    email: "bayern@example.com",
    owner : "Robert Lewandowski",
  },
  {
    id: 12,
    name: "Juventus",
    country: "Italy",
     age: "123",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Juventus_FC_2017_logo_vector.svg/1200px-Juventus_FC_2017_logo_vector.svg.png", // Juventus Avatar
    email: "juventus@example.com",
    owner : "Cristiano Ronaldo",
  },
  {
    id: 13,
    name: "Atletico Madrid",
    country: "Spain",
     age: "115",
    avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Atletico_Madrid_2017_logo.svg/1200px-Atletico_Madrid_2017_logo.svg.png", // Atletico Madrid Avatar
    email: "atletico@example.com",
    owner : "Luis Suarez",
  },
  {
    id: 14,
    name: "Tottenham Hotspur",
    country: "England",
     age: "138",
    avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/1200px-Tottenham_Hotspur.svg.png", // Tottenham Hotspur Avatar
    email: "tottenham@example.com",
    owner : "Harry Kane",
  },
  {
    id: 15,
    name: "Ajax",
    country: "Netherlands",
     age: "120",
    avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/AFC_Ajax.svg/1200px-AFC_Ajax.svg.png", // Ajax Avatar
    email: "ajax@example.com",
    owner : "Dusan Tadic",
  },
  {
    id: 16,
    name: "Sevilla",
    country: "Spain",
     age: "115",
    avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Sevilla_FC_logo.svg/1200px-Sevilla_FC_logo.svg.png", // Sevilla Avatar
    email: "sevilla@example.com",
    owner : "Ivan Rakitic",
  },
  {
    id: 17,
    name: "Leicester City",
    country: "England",
     age: "138",
    avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Leicester_City_crest.svg/1200px-Leicester_City_crest.svg.png", // Leicester City Avatar
    email: "leicester@example.com",
    owner : "Jamie Vardy",
  },
  {
    id: 18,
    name: "Roma",
    country: "Italy",
     age: "134",
    avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/AS_Roma_logo_%282017%29.svg/1200px-AS_Roma_logo_%282017%29.svg.png", // Roma Avatar
    email: "roma@example.com",
    owner : "Edin Dzeko",
  },
  {
    id: 19,
    name: "Napoli",
    country: "Italy",
     age: "132",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/SSC_Napoli_logo_%282021%29.svg/1200px-SSC_Napoli_logo_%282021%29.svg.png", // Napoli Avatar
    email: "napoli@example.com",
    owner : "Lorenzo Insigne",
  },
  {
    id: 20,
    name: "Everton",
    country: "England",
     age: "144",
    avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Everton_FC_logo.svg/1200px-Everton_FC_logo.svg.png", // Everton Avatar
    email: "everton@example.com",
    owner : "James Rodriguez",
  }, {
    id: 21,
    name: "Manchester United",
    country: "England",
     age: "145",
    avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png", // Manchester United Avatar
    email: "manutd@example.com",
    owner : "Bruno Fernandes",
  },
  {
    id: 22,
    name: "Barcelona B",
    country: "Spain",
     age: "95",
    avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png", // Barcelona B Avatar
    email: "barcelonab@example.com",

    owner : "Lionel Messi",


  },
  {
    id: 23,
    name: "Real Betis",
    country: "Spain",
     age: "113",
    avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Real_Betis_logo.svg/1200px-Real_Betis_logo.svg.png", // Real Betis Avatar
    email: "realbetis@example.com",
    owner : "Nabil Fekir",
  },
  {
    id: 24,
    name: "Aston Villa",
    country: "England",
     age: "148",
    avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Aston_Villa_FC_crest_%282016%29.svg/1200px-Aston_Villa_FC_crest_%282016%29.svg.png", // Aston Villa Avatar
    email: "astonvilla@example.com",
    owner : "Jack Grealish",
  },
  {
    id: 25,
    name: "Fiorentina",
    country: "Italy",
     age: "128",
    avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/2/27/ACF_Fiorentina.svg/1200px-ACF_Fiorentina.svg.png", // Fiorentina Avatar
    email: "fiorentina@example.com",
    owner   : "Franck Ribery",
  },
  {
    id: 26,
    name: "Villarreal",
    country: "Spain",
     age: "109",
    avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Villarreal_CF_logo.svg/1200px-Villarreal_CF_logo.svg.png", // Villarreal Avatar
    email: "villarreal@example.com",
    owner : "Gerard Moreno",
  },
  {
    id: 27,
    name: "West Ham United",
    country: "England",
     age: "128",
    avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/West_Ham_United_FC_logo.svg/1200px-West_Ham_United_FC_logo.svg.png", // West Ham United Avatar
    email: "westham@example.com",
    owner : "Michail Antonio",
  },
  {
    id: 28,
    name: "Leeds United",
    country: "England",
     age: "102",
    avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Leeds_United_F.C._logo.svg/1200px-Leeds_United_F.C._logo.svg.png", // Leeds United Avatar
    email: "leeds@example.com",
    owner : "Patrick Bamford",
  },
  {
    id: 29,
    name: "Celtic",
    country: "Scotland",
     age: "134",
    avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Celtic_FC.svg/1200px-Celtic_FC.svg.png", // Celtic Avatar
    email: "celtic@example.com",
    owner : "Odsonne Edouard",
  },
  {
    id: 30,
    name: "Galatasaray",
    country: "Turkey",
     age: "116",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Galatasaray_S.K._Logo.svg/1200px-Galatasaray_S.K._Logo.svg.png", // Galatasaray Avatar
    email: "galatasaray@example.com",
    owner : "Radamel Falcao",
  },

  // Add more teams as needed
];

export { columns,columns2, teams,users, statusOptions,statusOptions2 };