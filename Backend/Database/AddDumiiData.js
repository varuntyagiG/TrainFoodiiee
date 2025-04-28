const { Order } = require("./Schema");

const orderData = [
  {
    pnr: "4163920861",
    passenger: {
      name: "Brenda Palmer",
      email: "rebeccaanderson@price-middleton.org",
      seat: "S3",
      age: 71,
      train: "43393",
    },
    items: [],
    totalAmount: 0,
    status: "Pending",
    createdAt: "2025-04-21T19:37:16.241756",
  },
  {
    pnr: "2587001959",
    passenger: {
      name: "Diamond Macias",
      email: "jasonsimmons@bradley.com",
      seat: "S27",
      age: 39,
      train: "28687",
    },
    items: [],
    totalAmount: 0,
    status: "Pending",
    createdAt: "2025-04-21T19:37:16.242474",
  },
  {
    pnr: "9540553484",
    passenger: {
      name: "Valerie Smith",
      email: "david01@bush.com",
      seat: "S50",
      age: 50,
      train: "68603",
    },
    items: [],
    totalAmount: 0,
    status: "Pending",
    createdAt: "2025-04-21T19:37:16.242890",
  },
  {
    pnr: "9845069878",
    passenger: {
      name: "Joshua Pineda",
      email: "alexandra67@hotmail.com",
      seat: "S19",
      age: 67,
      train: "18780",
    },
    items: [],
    totalAmount: 0,
    status: "Pending",
    createdAt: "2025-04-21T19:37:16.243160",
  },
  {
    pnr: "3709424979",
    passenger: {
      name: "Joshua Meza",
      email: "fischeralex@brown.net",
      seat: "S23",
      age: 52,
      train: "59445",
    },
    items: [],
    totalAmount: 0,
    status: "Pending",
    createdAt: "2025-04-21T19:37:16.243823",
  },
  {
    pnr: "2712578301",
    passenger: {
      name: "Felicia Massey",
      email: "patrickmathis@gmail.com",
      seat: "S41",
      age: 34,
      train: "29280",
    },
    items: [],
    totalAmount: 0,
    status: "Pending",
    createdAt: "2025-04-21T19:37:16.244178",
  },
  {
    pnr: "5536345126",
    passenger: {
      name: "Trevor Martin",
      email: "amandamcdonald@vaughan-martin.com",
      seat: "S43",
      age: 77,
      train: "55728",
    },
    items: [],
    totalAmount: 0,
    status: "Pending",
    createdAt: "2025-04-21T19:37:16.244819",
  },
  {
    pnr: "2617962380",
    passenger: {
      name: "Michael Levine",
      email: "douglashall@smith.com",
      seat: "S37",
      age: 42,
      train: "22790",
    },
    items: [],
    totalAmount: 0,
    status: "Pending",
    createdAt: "2025-04-21T19:37:16.245274",
  },
  {
    pnr: "3292083463",
    passenger: {
      name: "Amber Thompson",
      email: "amberreeves@williams-hernandez.com",
      seat: "S6",
      age: 50,
      train: "71199",
    },
    items: [],
    totalAmount: 0,
    status: "Pending",
    createdAt: "2025-04-21T19:37:16.259808",
  },
  {
    pnr: "8310764783",
    passenger: {
      name: "Dr. Eugene Mckenzie",
      email: "williamjackson@collins.net",
      seat: "S48",
      age: 44,
      train: "49904",
    },
    items: [],
    totalAmount: 0,
    status: "Pending",
    createdAt: "2025-04-21T19:37:16.260427",
  },
  {
    pnr: "5452491473",
    passenger: {
      name: "Barbara Miller",
      email: "johnthomas@gmail.com",
      seat: "S3",
      age: 22,
      train: "11395",
    },
    items: [],
    totalAmount: 0,
    status: "Pending",
    createdAt: "2025-04-21T19:37:16.260772",
  },
  {
    pnr: "1254049788",
    passenger: {
      name: "Mark Reed",
      email: "nicolejennings@reid-palmer.info",
      seat: "S36",
      age: 50,
      train: "31747",
    },
    items: [],
    totalAmount: 0,
    status: "Pending",
    createdAt: "2025-04-21T19:37:16.261526",
  },
  {
    pnr: "8051390749",
    passenger: {
      name: "Crystal Morales",
      email: "brendaward@gmail.com",
      seat: "S23",
      age: 67,
      train: "10865",
    },
    items: [],
    totalAmount: 0,
    status: "Pending",
    createdAt: "2025-04-21T19:37:16.261872",
  },
  {
    pnr: "2581219954",
    passenger: {
      name: "Leslie Rodriguez",
      email: "ywallace@gmail.com",
      seat: "S23",
      age: 20,
      train: "82173",
    },
    items: [],
    totalAmount: 0,
    status: "Pending",
    createdAt: "2025-04-21T19:37:16.262164",
  },
  {
    pnr: "1620274861",
    passenger: {
      name: "Brian Mcclure",
      email: "parrishreginald@fitzpatrick.com",
      seat: "S5",
      age: 77,
      train: "33489",
    },
    items: [],
    totalAmount: 0,
    status: "Pending",
    createdAt: "2025-04-21T19:37:16.262621",
  },
  {
    pnr: "5764160987",
    passenger: {
      name: "Stephanie Baker",
      email: "tiffany57@gmail.com",
      seat: "S14",
      age: 68,
      train: "90561",
    },
    items: [],
    totalAmount: 0,
    status: "Pending",
    createdAt: "2025-04-21T19:37:16.262863",
  },
  // Repeat similar structure for the remaining 34 records...
];

const createOrders = async () => {
  try {
    await Order.insertMany(orderData);
    console.log("Orders inserted successfully.");
  } catch (err) {
    console.error("Error creating orders:", err);
  }
};

createOrders();
