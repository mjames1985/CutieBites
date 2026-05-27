const express = require("express");
const path = require("path");

const app = express();

const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);

app.set("layout", "layout"); // use views/layout.ejs

// Tell Express to use EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files (CSS, images, JS)
app.use(express.static(path.join(__dirname, "public")));

// Define reusable social links with SVG icons
const socialLinks = [
  { 
    url: "https://www.youtube.com/@cutiebitesph", 
    label: "YouTube", 
    text: "cutiebitesph", 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
             <path d="M8.051 1.999h-.102C3.58 2.01 0 5.591 0 10.001c0 4.411 3.58 7.992 7.949 8.002h.102c4.37-.01 7.949-3.591 7.949-8.002 0-4.41-3.579-7.991-7.949-8.002zM6.4 11.6V6.4l4.8 2.6-4.8 2.6z"/>
           </svg>` 
  },
  { 
    url: "https://www.tiktok.com/@cutiebitesph", 
    label: "TikTok", 
    text: "cutiebitesph", 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
             <path d="M9.5 2c.5 1.5 1.5 2.5 3 2.7v2.1c-1.2-.1-2.3-.5-3-1.2v4.6c0 2.1-1.7 3.8-3.8 3.8S2 12.3 2 10.2c0-2 1.6-3.6 3.6-3.8v2.1c-.9.2-1.5.9-1.5 1.7 0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V2h1.8z"/>
           </svg>` 
  },
  { 
    url: "https://m.me/cutiebitesph", 
    label: "Messenger", 
    text: "Cutie Bites by Jazee", 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
             <path d="M8 0C3.58 0 0 3.58 0 8c0 2.53 1.19 4.78 3.18 6.23V16l2.91-1.6c.62.17 1.28.27 1.91.27 4.42 0 8-3.58 8-8s-3.58-8-8-8zm.02 11.5c-.42 0-.84-.13-1.19-.39l-1.67-1.25-2.46 2.6 2.9-4.9 1.67 1.25 2.46-2.6-2.9 4.9c-.35.26-.77.39-1.19.39z"/>
           </svg>` 
  },
  { 
    url: "tel:+639393322886", 
    label: "Phone", 
    text: "+63939 332 2886", 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
             <path d="M3.654 1.328a.678.678 0 0 1 .737-.183l2.522.84c.197.066.34.23.374.432l.547 3.274a.678.678 0 0 1-.171.566l-1.21 1.21a11.05 11.05 0 0 0 4.516 4.516l1.21-1.21a.678.678 0 0 1 .566-.171l3.274.547c.202.034.366.177.432.374l.84 2.522a.678.678 0 0 1-.183.737l-2.307 2.307a1.745 1.745 0 0 1-1.79.436c-2.66-.89-5.053-2.59-7.106-4.643C2.59 9.053.89 6.66 0 4c-.364-.89-.146-1.91.436-1.79l2.307-2.307z"/>
           </svg>` 
  }
];

// -------------------- Static Pages --------------------
app.get("/", (req, res) => {
  res.render("index", { 
    pageTitle: "Home", 
    activePage: "home", 
    year: new Date().getFullYear(), 
    social: socialLinks,
    backgroundImage: "Images/layout/home-page.jpg"
  });
});

app.get("/MiniDonuts", (req, res) => {
  res.render("MiniDonuts", { 
    pageTitle: "Mini Donuts", 
    activePage: "donuts", 
    year: new Date().getFullYear(), 
    social: socialLinks,
    backgroundImage: "Images/layout/home-page.jpg"   // add your donuts background file
  });
});

app.get("/MiniWaffles", (req, res) => {
  res.render("MiniWaffles", { 
    pageTitle: "Mini Waffles", 
    activePage: "waffles", 
    year: new Date().getFullYear(), 
    social: socialLinks,
    backgroundImage: "Images/layout/home-page.jpg"  // add your waffles background file
  });
});

app.get("/FlavorSets", (req, res) => {
  res.render("FlavorSets", { 
    pageTitle: "Flavor Sets", 
    activePage: "flavors", 
    year: new Date().getFullYear(), 
    social: socialLinks,
    backgroundImage: "Images/layout/home-page.jpg"  // add your flavors background file
  });
});


  // -------------------- FlavorSets Detail --------------------
  // Map flavor keys to names + images
  const flavorData = {
    DarkChocoPremiumMix: {
      name: "Dark Choco Premium Mix",
      thumb: "/Images/Flavor_Set6.jpg",       
      image: "/Images/Large Images/Flavor_SetDarkChocoPremiumMixTheme.jpg"  
    },
    DarkChocoRainbowCustomMix: {
      name: "Dark Choco Rainbow Custom Mix",
      thumb: "/Images/Flavor_Set5.jpg",       
      image: "/Images/Large Images/Flavor_SetDarkChocoRainbowCustomMixTheme.jpg"  
    },
    PurplePinkGoldTheme: {
      name: "Purple Pink Gold Theme with Meringue Roses",
      thumb: "/Images/Flavor_Set4.jpg",       
      image: "/Images/Large Images/Flavor_SetPurplePinkGoldThemeWithMeringueTheme.jpg"  
    },
    UnicornFloral: {
      name: "Pink Purple Yellow Unicorn Floral",
      thumb: "/Images/Flavor_Set3.jpg",       
      image: "/Images/Large Images/Flavor_SetPinkPurpleYellowUnicornFloralTheme.jpg"  
    },
    SesameStreet: {
      name: "Sesame Street Theme",
      thumb: "/Images/Flavor_Set2.jpg",       
      image: "/Images/Large Images/Flavor_SetSesameStreetTheme.jpg"  
    },
    FathersDay: {
      name: "Father's Day Theme",
      thumb: "/Images/thumbs/Flavor_Set1.jpg",       
      image: "/Images/Large Images/Flavor_SetFathersDayTheme.jpg"  
    },
    StPatricksDay: {
      name: "St Patrick's Day Themed",
      thumb: "/Images/thumbs/Flavor_StPatricksDayThemed.jpg",       
      image: "/Images/Large Images/Flavor_SetStPatrickThemeLarge.jpg"  
    },
    SonicTheme: {
      name: "Sonic the Hedgehog Theme",
      thumb: "/Images/thumbs/Flavor_SonictheHedgehogTheme.jpg",       
      image: "/Images/Large Images/Flavor_SetSonicTheme.jpg"  
    },
    Graduation: {
      name: "Graduation Theme Mini Donuts",
      thumb: "/Images/thumbs/Flavor_GraduationThemeMiniDonuts.jpg",       
      image: "/Images/Large Images/Flavor_SetGraduationThemeLarge.jpg"  
    },
    DarkChocoTrailMix: {
      name: "Dark Choco Trail Mix",
      thumb: "/Images/thumbs/Flavor_DarkChocoTrailMix.jpg",       
      image: "/Images/Large Images/Flavor_SetDarkChocoTrailMix.jpg"  
    },
    HarryPotterGryffindor: {
      name: "Harry Potter - Gryffindor Theme",
      thumb: "/Images/thumbs/Flavor_Harry PotterGryffindorTheme.jpg",       
      image: "/Images/Large Images/Flavor_SetHarryPotterTheme.jpg"  
    },
    Minecraft: {
      name: "Minecraft Theme",
      thumb: "/Images/thumbs/Flavor_MinecraftTheme.jpg",       
      image: "/Images/Large Images/Flavor_SetMinecraftTheme.jpg"  
    },
    Doctor: {
      name: "Doctor Theme",
      thumb: "/Images/thumbs/Flavor_DoctorTheme.jpg",       
      image: "/Images/Large Images/Flavor_SetDoctorTheme.jpg"  
    },
    HotWheels: {
      name: "Hot Wheels Theme",
      thumb: "/Images/thumbs/Flavor_HotWheelsTheme.jpg",       
      image: "/Images/Large Images/Flavor_SetHotWheelsTheme.jpg"  
    },
    PinkChocoGirlie: {
      name: "Pink Choco White Girlie Theme",
      thumb: "/Images/thumbs/Flavor_PinkChocoWhiteGirlieTheme.jpg",       
      image: "/Images/Large Images/Flavor_SetPinkChocoWhiteGirlieTheme.jpg"  
    },
    Mallows: {
      name: "Pink-White Flowers with Gold Pearls Theme",
      thumb: "/Images/thumbs/Flavor_PinkWhiteFlowerswithGoldPearlsTheme.jpg",       
      image: "/Images/Large Images/Flavor_SetPinkWhiteFlowersWithGoldPearls.jpg"  
    },
    PastelYellowFloral: {
      name: "Pastel Yellow Floral Theme",
      thumb: "/Images/thumbs/Flavor_PastelYellowFloralTheme.jpg",       
      image: "/Images/Large Images/Flavors_SetPastelYellowFloralThemeMiniDonuts.jpg"  
    },
    Pokemon: {
      name: "Pokemon Theme",
      thumb: "/Images/thumbs/Flavor_PokemonTheme.jpg",       
      image: "/Images/Large Images/Flavor_SetPokemon.jpg"  
    },
    KPopDemonHunters: {
      name: "KPop Demon Hunters Theme",
      thumb: "/Images/thumbs/Flavor_KPopDemonHuntersTheme.jpg",       
      image: "/Images/Large Images/Flavor_SetKPOPDemonHuntersTheme.jpg"  
    },
    PikachuPokeBall: {
      name: "Pikachu-Poke Ball Theme",
      thumb: "/Images/thumbs/Flavor_PikachuPokeBallTheme.jpg",       
      image: "/Images/Large Images/Flavor_SetPikachuPokeBallTheme.jpg"  
    },
    Halloween: {
      name: "Halloween Theme",
      thumb: "/Images/thumbs/Flavor_HalloweenTheme.jpg",       
      image: "/Images/Large Images/Flavor_SetHalloweenTheme.jpg"  
    },
    Huntrix: {
      name: "Huntrix Theme",
      thumb: "/Images/thumbs/Flavor_HuntrixTheme.jpg",       
      image: "/Images/Large Images/Flavor_SetHuntrixTheme.jpg"  
    },
    SajaBoys: {
      name: "Saja Boys Theme",
      thumb: "/Images/thumbs/Flavor_SajaBoysTheme.jpg",       
      image: "/Images/Large Images/Flavor_SetSajaBoysTheme.jpg"  
    },
    Spiderman: {
      name: "Spiderman Theme",
      thumb: "/Images/thumbs/Flavor_SpidermanTheme.jpg",       
      image: "/Images/Large Images/Flavor_SetSpidermanTheme.jpg"  
    },
    Christmas: {
      name: "Christmas Theme",
      thumb: "/Images/thumbs/Flavor_ChristmasTheme.jpg",       
      image: "/Images/Large Images/Flavor_SetChristmasThemeLarge.jpg"  
    },
    Roblox: {               
    name: "Roblox",
    thumb: "/Images/thumbs/Flavor_RobloxTheme.jpg",
    image: "/Images/Large Images/Flavors_RobloxTheme.jpg"
  },
       
    
  };
 // … add the rest of your FlavorSets here



app.get("/FlavorSets/:flavor", (req, res) => {
  const flavor = req.params.flavor;
  const data = flavorData[flavor];

  if (!data) return res.status(404).send("Flavor not found");

  res.render("flavor-detail", { 
    pageTitle: data.name,
    activePage: "flavors",
    year: new Date().getFullYear(),
    social: socialLinks,
    backgroundImage: "/Images/layout/home-page.jpg",
    flavorName: data.name,
    flavorKey: flavor, 
    image: data.image
  });
});


 // -------------------- MiniDonuts Detail --------------------
const miniDonutData = {
  VioletS: {
    name: "Violet Sprinkles",
    thumb: "/Images/thumbs/Flavor_VioletS.jpg",
    image: "/Images/Large Images/Flavor_VioletSprinklesLarge.jpg"
  },
  UbeGlaze: {
    name: "Ube Glaze",
    thumb: "/Images/thumbs/Flavor_UbeGlaze.jpg",
    image: "/Images/Large Images/FlavorUbeGlazeLarge.jpg"
  },
  Ube: {
    name: "Ube",
    thumb: "/Images/thumbs/Flavor_Ube.jpg",
    image: "/Images/Large Images/Flavor_UbeLarge.jpg"
  },
  StrawberryGlaze:{               
    name: "Strawberry Glaze",
    thumb: "/Images/thumbs/Flavor_StrawberryGlaze.jpg",
    image: "/Images/Large Images/Flavor_StrawberryGlazeLarge.jpg"
  },
  RainbowSprinkles:{               
    name: "Rainbow Sprinkles",
    thumb: "/Images/thumbs/Flavor_RainbowC.jpg",
    image: "/Images/Large Images/Flavor_RainbowSprinklesLarge.jpg"
  },
  RainbowConfetti:{               
    name: "Rainbow Confetti",
    thumb: "/Images/thumbs/Flavor_RainbowC.jpg",
    image: "/Images/Large Images/Flavor_RainbowConfettiLarge.jpg"
  },
  PinkSprinkles:{               
    name: "Pink Sprinkles",
    thumb: "/Images/thumbs/Flavor_PinkS.jpg",
    image: "/Images/Large Images/Flavor_PinkSprinklesLarge.jpg"
  },
  PastelRainbowSprinkles:{               
    name: "Pastel Rainbow Sprinkles",
    thumb: "/Images/thumbs/Flavor_PastelRainbowS.jpg",
    image: "/Images/Large Images/Flavor_PastelRainbowSprinklesLArge.jpg"
  },
  PastelRainbowBeads:{               
    name: "Pastel Rainbow Beads",
    thumb: "/Images/thumbs/Flavor_PastelRainbowB.jpg",
    image: "/Images/Large Images/Flavor_PastelRainbowBeadsLarge.jpg"
  },
  Original:{               
    name: "Original",
    thumb: "/Images/thumbs/Flavor_Orig.jpg",
    image: "/Images/Large Images/Flavor_OriginalLarge.jpg"
  },
  DarkChocoGlaze:{               
    name: "Dark Choco Glaze",
    thumb: "/Images/thumbs/Flavor_DarkChoco.jpg",
    image: "/Images/Large Images/Flavor_DarkChocoGlazeLarge.jpg"
  },
  Choco:{               
    name: "Choco",
    thumb: "/Images/thumbs/Flavor_DarkChoco.jpg",
    image: "/Images/Large Images/FLavor_ChocoLarge.jpg"
  },
  BlueBeads:{               
    name: "Blue Beads",
    thumb: "/Images/thumbs/Flavor_BlueBeads.jpg",
    image: "/Images/Large Images/Flavor_BlueBeadsLarge.jpg"
  },
  BabySprinkles:{               
    name: "Baby Sprinkles",
    thumb: "/Images/thumbs/Flavor_BabyS.jpg",
    image: "/Images/Large Images/Flavor_BabySprinklesLarge.jpg"
  },
  BabyBeads:{               
    name: "Baby Beads",
    thumb: "/Images/thumbs/Flavor_BabyB.jpg",
    image: "/Images/Large Images/Flavor_BabyBeadsLarge.jpg"
  },
  WhiteChocoGlazeChristmasBalls:{               
    name: "White Choco Glaze Christmas Balls",
    thumb: "/Images/thumbs/Flavor_WhiteChocoGlazeChristmasBalls.jpg",
    image: "/Images/Large Images/Flavor_WhiteChocoGlazeChristmasBallsLarge.jpg"
  },
  WhiteChocoGlazeChristmasMistletoe:{               
    name: "White Choco Glaze Christmas Mistletoe",
    thumb: "/Images/thumbs/Flavor_WhiteChocoGlazeChristmasMistletoe.jpg",
    image: "/Images/Large Images/Flavor_WhiteChocoGlazeChristmasMistletoeLarge.jpg"
  },
  WhiteChocoGlazeChristmasPearls: {               
    name: "White Choco Glaze Christmas Pearls",
    thumb: "/Images/thumbs/Flavor_WhiteChocoGlazeChristmasPearls.jpg",
    image: "/Images/Large Images/Flavor_WhiteChocoGlazeChristmasPearlsLarge.jpg"
  },
  WhiteChocoGlazeChristmasTree: {               
    name: "White Choco Glaze Christmas Tree",
    thumb: "/Images/thumbs/Flavor_WhiteChocoGlazeChristmasTree.jpg",
    image: "/Images/Large Images/Flavor_WhiteChocoGlazeChristmasTreeLarge.jpg"
  },
  DarkChocoGlazeChristmasBalls: {               
    name: "Dark Choco Glaze Christmas Balls",
    thumb: "/Images/thumbs/Flavor_DarkChocoGlazeChristmasBalls.jpg",
    image: "/Images/Large Images/Flavor_DarkChocoGlazeChristmasBallsLarge.jpg"
  },
  DarkChocoGlazeChristmasSprinkles: {               
    name: "Dark Choco Glaze Christmas Sprinkles",
    thumb: "/Images/thumbs/Flavor_DarkChocoGlazeChristmasSprinkles.jpg",
    image: "/Images/Large Images/Flavor_DarkChocoGlazeChristmasSprinklesLarge.jpg"
  },
  Chocmallows: {               
    name: "Chocmallows",
    thumb: "/Images/thumbs/Flavor_Chocmallows.jpg",
    image: "/Images/Large Images/Flavor_ChocmallowsLarge.jpg"
  },
  Almondi: {               
    name: "Almondi",
    thumb: "/Images/thumbs/Flavor_Almondi.jpg",
    image: "/Images/Large Images/Flavor_AlmondiLarge.jpg"
  },
  Chococcino: {               
    name: "Chococcino",
    thumb: "/Images/thumbs/Flavor_Chococcino.jpg",
    image: "/Images/Large Images/Flavor_ChococcinoLarge.jpg"
  },
  Cherub: {               
    name: "Cherub",
    thumb: "/Images/thumbs/Flavor_Cherub.jpg",
    image: "/Images/Large Images/Flavor_CherubLarge.jpg"
  },
  Mallows: {               
    name: "Mallows",
    thumb: "/Images/thumbs/Flavor_Mallows.jpg",
    image: "/Images/Large Images/Flavor_MallowsLarge.jpg"
  },
  StrawburstSeries: {               
    name: "Strawburst Series",
    thumb: "/Images/thumbs/Flavor_StrawburstSeries.jpg",
    image: "/Images/Large Images/Flavor_StrawberryStarburstSeriesLarge.jpg"
  },
  ChocoStrawburstSeries: {               
    name: "Choco Strawburst Series",
    thumb: "/Images/thumbs/Flavor_ChocoStrawburstSeries.jpg",
    image: "/Images/Large Images/Flavor_ChocoStrawburstSeriesLarge.jpg"
  },
  MilkyStrawburstSeries: {               
    name: "Milky Strawburst Series",
    thumb: "/Images/thumbs/Flavor_MilkyStrawburstSeries.jpg",
    image: "/Images/Large Images/Flavor_MiniDonutMilkyStrawburstLarge.jpg"
  },
  ChocoButternut: {               
    name: "Choco Butternut",
    thumb: "/Images/thumbs/Flavor_ChocoButternut.jpg",
    image: "/Images/Large Images/Flavor_MiniDonutsChocoButternutLarge.jpg"
  },
  UbeCoco: {               
    name: "Ube Coco",
    thumb: "/Images/thumbs/Flavor_UbeCoco.jpg",
    image: "/Images/Large Images/Flavor_MiniDonutsUbeCocoLarge.jpg"
  },  


  // … add the rest
};


app.get("/MiniDonuts/:flavor", (req, res) => {
  const flavor = req.params.flavor;
  const data = miniDonutData[flavor];

  if (!data) return res.status(404).send("Mini Donut flavor not found");

  res.render("flavor-detail", {
    pageTitle: data.name,
    activePage: "donuts",
    year: new Date().getFullYear(),
    social: socialLinks,
    backgroundImage: "/Images/layout/home-page.jpg",
    flavorName: data.name,
    flavorKey: flavor, 
    image: data.image
  });
});


 // -------------------- MiniWaffles Detail --------------------
const miniWafflesData = {
  Original: {
      name: "Original",
      thumb: "/Images/thumbs/Flavor_OrigW.jpg",       
      image: "/Images/Large Images/Flavor_WaffleOriginalLarge.jpg"  
  }, 
   Ube: {
    name: "Ube",
    thumb: "/Images/thumbs/Flavor_Ube.jpg",
    image: "/Images/Large Images/Flavor_WaffleUbeLarge.jpg"
  },
  UbeDipped: {
      name: "Ube Dipped",
      thumb: "/Images/thumbs/Flavor_UbeD.jpg",       
      image: "/Images/Large Images/Flavor_WaffleUbeDLarge.jpg"  
  },
  DarkChocoDipped: {
      name: "Dark Choco Dipped",
      thumb: "/Images/thumbs/Flavor_DarkChocoD.jpg",       
      image: "/Images/Large Images/Flavor_WaffleDarkChocoDLarge.jpg"  
  },  
  Choco: {
      name: "Choco",
      thumb: "/Images/thumbs/Flavor_ChocoW.jpg",       
      image: "/Images/Large Images/Flavor_WaffleChocoLarge.jpg"  
  },

  
  // … add the rest
};


app.get("/MiniWaffles/:flavor", (req, res) => {
  const flavor = req.params.flavor;
  const data = miniWafflesData[flavor];

  if (!data) return res.status(404).send("Mini Waffles flavor not found");

  res.render("flavor-detail", {
    pageTitle: data.name,
    activePage: "waffles",
    year: new Date().getFullYear(),
    social: socialLinks,
    backgroundImage: "/Images/layout/home-page.jpg",
    flavorName: data.name,
    flavorKey: flavor, 
    image: data.image
  });
});

// -------------------- Start Server --------------------
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

