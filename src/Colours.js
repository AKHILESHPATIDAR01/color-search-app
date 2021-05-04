const colours = [
    {
      "name": "100 Mph",
      "hex": "#c93f38",
      "good name": "x"
    },
    {
      "name": "18th Century Green",
      "hex": "#a59344",
      "good name": ""
    },
    {
      "name": "1975 Earth Red",
      "hex": "#7b463b",
      "good name": ""
    },
    {
      "name": "1989 Miami Hotline",
      "hex": "#dd3366",
      "good name": ""
    },
    {
      "name": "20000 Leagues Under the Sea",
      "hex": "#191970",
      "good name": "x"
    },
    {
      "name": "24 Karat",
      "hex": "#ab7f46",
      "good name": ""
    },
    {
      "name": "3AM in Shibuya",
      "hex": "#225577",
      "good name": "x"
    },
    {
      "name": "3am Latte",
      "hex": "#c0a98e",
      "good name": "x"
    },
    {
      "name": "400XT Film",
      "hex": "#d2d2c0",
      "good name": ""
    },
    {
      "name": "5-Masted Preußen",
      "hex": "#9bafad",
      "good name": ""
    },
    {
      "name": "8 Bit Eggplant",
      "hex": "#990066",
      "good name": "x"
    },
    {
      "name": "90% Cocoa",
      "hex": "#3d1c02",
      "good name": ""
    },
    {
      "name": "A Bloomed Cherry Blossom",
      "hex": "#ffccda",
      "good name": ""
    },
    {
      "name": "A Brand New Day",
      "hex": "#ffaabb",
      "good name": ""
    },
    {
      "name": "A Certain Shade Of Green",
      "hex": "#d1edee",
      "good name": ""
    },
    {
      "name": "A Dime a Dozen",
      "hex": "#d3dde4",
      "good name": "x"
    },
    {
      "name": "A Hint of Incremental Blue",
      "hex": "#456789",
      "good name": ""
    },
    {
      "name": "A La Mode",
      "hex": "#f6ecde",
      "good name": ""
    },
    {
      "name": "A Lot of Love",
      "hex": "#ffbcc5",
      "good name": ""
    },
    {
      "name": "A Pair of Brown Eyes",
      "hex": "#bfaf92",
      "good name": ""
    },
    {
      "name": "A Smell of Bakery",
      "hex": "#f3e9d9",
      "good name": "x"
    },
    {
      "name": "A State of Mint",
      "hex": "#88ffcc",
      "good name": "x"
    },
    {
      "name": "Aare River",
      "hex": "#00b89f",
      "good name": ""
    },
    {
      "name": "Aare River Brienz",
      "hex": "#05a3ad",
      "good name": ""
    },
    {
      "name": "Aarhusian Sky",
      "hex": "#1150af",
      "good name": ""
    },
    {
      "name": "Abaddon Black",
      "hex": "#231f20",
      "good name": ""
    },
    {
      "name": "Abaidh White",
      "hex": "#f2f1e6",
      "good name": ""
    },
    {
      "name": "Abalone",
      "hex": "#f8f3f6",
      "good name": ""
    },
    {
      "name": "Abalone Shell",
      "hex": "#e1ded9",
      "good name": ""
    },
    {
      "name": "Abandoned Mansion",
      "hex": "#94877e",
      "good name": ""
    },
    {
      "name": "Abbey",
      "hex": "#4c4f56",
      "good name": ""
    },
    {
      "name": "Abbey Road",
      "hex": "#a79f92",
      "good name": ""
    },
    {
      "name": "Abbey Stone",
      "hex": "#aba798",
      "good name": ""
    },
    {
      "name": "Abbey White",
      "hex": "#ece6d0",
      "good name": ""
    },
    {
      "name": "Abbot",
      "hex": "#4d3c2d",
      "good name": ""
    },
    {
      "name": "Abduction",
      "hex": "#166461",
      "good name": ""
    },
    {
      "name": "Âbi Blue",
      "hex": "#5ba8ff",
      "good name": ""
    },
    {
      "name": "Abilene Lace",
      "hex": "#eae3d2",
      "good name": ""
    },
    {
      "name": "Ablaze",
      "hex": "#c04641",
      "good name": ""
    },
    {
      "name": "Abomination",
      "hex": "#77aa77",
      "good name": ""
    },
    {
      "name": "Abra Cadabra",
      "hex": "#966165",
      "good name": ""
    },
    {
      "name": "Abra Goldenrod",
      "hex": "#eec400",
      "good name": ""
    },
    {
      "name": "Absence of Light",
      "hex": "#15151c",
      "good name": ""
    },
    {
      "name": "Absinthe Green",
      "hex": "#76b583",
      "good name": ""
    },
    {
      "name": "Absinthe Turquoise",
      "hex": "#008a60",
      "good name": ""
    },
    {
      "name": "Absolute Apricot",
      "hex": "#ff9944",
      "good name": ""
    },
    {
      "name": "Absolute Zero",
      "hex": "#0048ba",
      "good name": ""
    },
    {
      "name": "Abstract",
      "hex": "#e4cb97",
      "good name": ""
    },
    {
      "name": "Abstract White",
      "hex": "#ede9dd",
      "good name": ""
    },
    {
      "name": "Abundance",
      "hex": "#629763",
      "good name": ""
    },
    {
      "name": "Abura Green",
      "hex": "#a19361",
      "good name": ""
    },
    {
      "name": "Abyss",
      "hex": "#8f9e9d",
      "good name": ""
    },
    {
      "name": "Abyssal Anchorfish Blue",
      "hex": "#1b2632",
      "good name": ""
    },
    {
      "name": "Abyssal Blue",
      "hex": "#00035b",
      "good name": ""
    },
    {
      "name": "Abyssal Depths",
      "hex": "#10246a",
      "good name": ""
    },
    {
      "name": "Abyssal Waters",
      "hex": "#005765",
      "good name": "x"
    },
    {
      "name": "Abysse",
      "hex": "#3d5758",
      "good name": ""
    },
    {
      "name": "Abyssopelagic Water",
      "hex": "#000033",
      "good name": ""
    },
    {
      "name": "Acacia",
      "hex": "#dacd65",
      "good name": ""
    },
    {
      "name": "Acacia Green",
      "hex": "#486241",
      "good name": ""
    },
    {
      "name": "Acacia Haze",
      "hex": "#969c92",
      "good name": ""
    },
    {
      "name": "Academic Blue",
      "hex": "#2c3e56",
      "good name": ""
    },
    {
      "name": "Academy Purple",
      "hex": "#525367",
      "good name": ""
    },
    {
      "name": "Acadia",
      "hex": "#35312c",
      "good name": ""
    },
    {
      "name": "Acadia Bloom",
      "hex": "#e5b7be",
      "good name": ""
    },
    {
      "name": "Acai",
      "hex": "#46295a",
      "good name": ""
    },
    {
      "name": "Acai Berry",
      "hex": "#42314b",
      "good name": ""
    },
    {
      "name": "Acai Juice",
      "hex": "#942193",
      "good name": ""
    },
    {
      "name": "Acajou",
      "hex": "#4c2f27",
      "good name": ""
    },
    {
      "name": "Acanthus",
      "hex": "#9899a7",
      "good name": ""
    },
    {
      "name": "Acanthus Leaf",
      "hex": "#90977a",
      "good name": ""
    },
    {
      "name": "Acapulco",
      "hex": "#75aa94",
      "good name": ""
    },
    {
      "name": "Acapulco Cliffs",
      "hex": "#4e9aa8",
      "good name": ""
    },
    {
      "name": "Acapulco Dive",
      "hex": "#65a7dd",
      "good name": "x"
    },
    {
      "name": "Acapulco Sun",
      "hex": "#eb8a44",
      "good name": ""
    },
    {
      "name": "Accent Green Blue",
      "hex": "#208468",
      "good name": ""
    },
    {
      "name": "Accent Orange",
      "hex": "#e56d00",
      "good name": ""
    },
    {
      "name": "Accessible Beige",
      "hex": "#d2c7b7",
      "good name": ""
    },
    {
      "name": "Accolade",
      "hex": "#7c94b2",
      "good name": ""
    },
    {
      "name": "Accursed Black",
      "hex": "#090807",
      "good name": ""
    },
    {
      "name": "Ace",
      "hex": "#c7cce7",
      "good name": ""
    },
    {
      "name": "Aceituna Picante",
      "hex": "#727a5f",
      "good name": ""
    },
    {
      "name": "Aceto Balsamico",
      "hex": "#4e4f48",
      "good name": ""
    },
    {
      "name": "Acid",
      "hex": "#00ff22",
      "good name": "x"
    },
    {
      "name": "Acid Blond",
      "hex": "#efedd7",
      "good name": ""
    },
    {
      "name": "Acid Candy",
      "hex": "#a8c74d",
      "good name": ""
    },
    {
      "name": "Acid Drop",
      "hex": "#11ff22",
      "good name": ""
    },
    {
      "name": "Acid Green",
      "hex": "#8ffe09",
      "good name": "x"
    },
    {
      "name": "Acid Lime",
      "hex": "#badf30",
      "good name": ""
    },
    {
      "name": "Acid Pool",
      "hex": "#00ee22",
      "good name": ""
    },
    {
      "name": "Acid Pops",
      "hex": "#33ee66",
      "good name": ""
    },
    {
      "name": "Acid Sleazebag",
      "hex": "#4fc172",
      "good name": ""
    },
    {
      "name": "Acier",
      "hex": "#9e9991",
      "good name": ""
    },
    {
      "name": "Acini di Pepe",
      "hex": "#ffd8b1",
      "good name": ""
    },
    {
      "name": "Acorn",
      "hex": "#7e5e52",
      "good name": "x"
    },
    {
      "name": "Acorn Spice",
      "hex": "#b87439",
      "good name": ""
    },
    {
      "name": "Acorn Squash",
      "hex": "#eda740",
      "good name": ""
    },
    {
      "name": "Acoustic White",
      "hex": "#efece1",
      "good name": ""
    },
    {
      "name": "Across the Bay",
      "hex": "#b3e1e8",
      "good name": ""
    },
    {
      "name": "Actinic Light",
      "hex": "#ff44ee",
      "good name": ""
    },
    {
      "name": "Action Green",
      "hex": "#00504b",
      "good name": ""
    },
    {
      "name": "Active Green",
      "hex": "#00a67e",
      "good name": ""
    },
    {
      "name": "Active Turquoise",
      "hex": "#006f72",
      "good name": ""
    },
    {
      "name": "Active Volcano",
      "hex": "#bb1133",
      "good name": "x"
    },
    {
      "name": "Actor's Star",
      "hex": "#a7a6a3",
      "good name": ""
    },
    {
      "name": "Adamite Green",
      "hex": "#3b845e",
      "good name": ""
    },
    {
      "name": "Adana Kebabı",
      "hex": "#661111",
      "good name": ""
    },
    {
      "name": "Adaptive Shade",
      "hex": "#867e70",
      "good name": ""
    },
    {
      "name": "Addo Skin",
      "hex": "#585d58",
      "good name": ""
    },
    {
      "name": "Adeline",
      "hex": "#ccb0b5",
      "good name": ""
    },
    {
      "name": "Adept",
      "hex": "#293947",
      "good name": ""
    },
    {
      "name": "Adeptus Battlegrey",
      "hex": "#7c8286",
      "good name": ""
    },
    {
      "name": "Adhesion",
      "hex": "#9e9cab",
      "good name": ""
    },
    {
      "name": "Adirondack",
      "hex": "#b0b9c1",
      "good name": ""
    },
    {
      "name": "Adirondack Blue",
      "hex": "#74858f",
      "good name": ""
    },
    {
      "name": "Admiral Blue",
      "hex": "#50647f",
      "good name": ""
    },
    {
      "name": "Admiralty",
      "hex": "#404e61",
      "good name": ""
    },
    {
      "name": "Admiration",
      "hex": "#f6f3d3",
      "good name": ""
    },
    {
      "name": "Adobe",
      "hex": "#bd6c48",
      "good name": ""
    },
    {
      "name": "Adobe Avenue",
      "hex": "#fb9587",
      "good name": ""
    },
    {
      "name": "Adobe Beige",
      "hex": "#dcbfa6",
      "good name": ""
    },
    {
      "name": "Adobe Rose",
      "hex": "#ba9f99",
      "good name": ""
    },
    {
      "name": "Adobe Sand",
      "hex": "#e8dec5",
      "good name": ""
    },
    {
      "name": "Adobe South",
      "hex": "#e5c1a7",
      "good name": ""
    },
    {
      "name": "Adobe Straw",
      "hex": "#c3a998",
      "good name": ""
    },
    {
      "name": "Adobe White",
      "hex": "#e6dbc4",
      "good name": ""
    },
    {
      "name": "Adonis",
      "hex": "#64b5bf",
      "good name": ""
    },
    {
      "name": "Adonis Rose Yellow",
      "hex": "#efbf4d",
      "good name": ""
    },
    {
      "name": "Adorable",
      "hex": "#e3beb0",
      "good name": ""
    },
    {
      "name": "Adriatic Blue",
      "hex": "#5c899b",
      "good name": ""
    },
    {
      "name": "Adriatic Haze",
      "hex": "#96c6cd",
      "good name": ""
    },
    {
      "name": "Adriatic Mist",
      "hex": "#d3ece4",
      "good name": ""
    },
    {
      "name": "Adriatic Sea",
      "hex": "#016081",
      "good name": ""
    },
    {
      "name": "Adrift",
      "hex": "#4b9099",
      "good name": ""
    },
    {
      "name": "Advantageous",
      "hex": "#20726a",
      "good name": ""
    },
    {
      "name": "Adventure",
      "hex": "#34788c",
      "good name": ""
    },
    {
      "name": "Adventure Island Pink",
      "hex": "#f87858",
      "good name": ""
    },
    {
      "name": "Adventure Isle",
      "hex": "#6f9fb9",
      "good name": ""
    },
    {
      "name": "Adventure Orange",
      "hex": "#eda367",
      "good name": ""
    },
    {
      "name": "Adventurer",
      "hex": "#72664f",
      "good name": ""
    },
    {
      "name": "Advertisement Green",
      "hex": "#d8cb4b",
      "good name": ""
    },
    {
      "name": "Advertising Blue",
      "hex": "#0081a8",
      "good name": ""
    },
    {
      "name": "Advertising Green",
      "hex": "#53a079",
      "good name": ""
    },
    {
      "name": "Aebleskiver",
      "hex": "#e6d3b6",
      "good name": ""
    },
    {
      "name": "Aegean Blue",
      "hex": "#4e6e81",
      "good name": ""
    },
    {
      "name": "Aegean Green",
      "hex": "#4c8c72",
      "good name": ""
    },
    {
      "name": "Aegean Mist",
      "hex": "#9cbbe2",
      "good name": ""
    },
    {
      "name": "Aegean Sea",
      "hex": "#508fa2",
      "good name": ""
    },
    {
      "name": "Aegean Sky",
      "hex": "#e48b59",
      "good name": ""
    },
    {
      "name": "Aegean Splendor",
      "hex": "#9ba0a4",
      "good name": ""
    },
    {
      "name": "Aerial View",
      "hex": "#a0b2c8",
      "good name": ""
    },
    {
      "name": "Aero",
      "hex": "#7cb9e8",
      "good name": ""
    },
    {
      "name": "Aero Blue",
      "hex": "#c0e8d5",
      "good name": ""
    },
    {
      "name": "Aerobic Fix",
      "hex": "#a2c348",
      "good name": ""
    },
    {
      "name": "Aeronautic",
      "hex": "#2b3448",
      "good name": ""
    },
    {
      "name": "Aerospace Orange",
      "hex": "#ff4f00",
      "good name": ""
    },
    {
      "name": "Aerostatics",
      "hex": "#355376",
      "good name": ""
    },
    {
      "name": "Aesthetic White",
      "hex": "#e3ddd3",
      "good name": ""
    },
    {
      "name": "Affair",
      "hex": "#745085",
      "good name": ""
    },
    {
      "name": "Affen Turquoise",
      "hex": "#aaffff",
      "good name": ""
    },
    {
      "name": "Affinity",
      "hex": "#fed2a5",
      "good name": ""
    },
    {
      "name": "Afghan Carpet",
      "hex": "#905e26",
      "good name": ""
    },
    {
      "name": "Afghan Hound",
      "hex": "#e2d7b5",
      "good name": ""
    },
    {
      "name": "Afghan Sand",
      "hex": "#d3a95c",
      "good name": ""
    },
    {
      "name": "Afloat",
      "hex": "#78a3c2",
      "good name": ""
    },
    {
      "name": "African Ambush",
      "hex": "#8e603c",
      "good name": ""
    },
    {
      "name": "African Bubinga",
      "hex": "#c7927a",
      "good name": ""
    },
    {
      "name": "African Grey",
      "hex": "#939899",
      "good name": ""
    },
    {
      "name": "African Mahogany",
      "hex": "#cd4a4a",
      "good name": ""
    },
    {
      "name": "African Mud",
      "hex": "#826c68",
      "good name": ""
    },
    {
      "name": "African Plain",
      "hex": "#86714a",
      "good name": ""
    },
    {
      "name": "African Queen",
      "hex": "#645e42",
      "good name": ""
    },
    {
      "name": "African Safari",
      "hex": "#b16b40",
      "good name": ""
    },
    {
      "name": "African Sand",
      "hex": "#ccaa88",
      "good name": ""
    },
    {
      "name": "African Violet",
      "hex": "#b085b7",
      "good name": ""
    },
    {
      "name": "After Burn",
      "hex": "#fd8b60",
      "good name": ""
    },
    {
      "name": "After Dark",
      "hex": "#3c3535",
      "good name": ""
    },
    {
      "name": "After Dinner Mint",
      "hex": "#e3f5e5",
      "good name": ""
    },
    {
      "name": "After Eight Filling",
      "hex": "#d6eae8",
      "good name": ""
    },
    {
      "name": "After Midnight",
      "hex": "#38393f",
      "good name": ""
    },
    {
      "name": "After Rain",
      "hex": "#c1dbea",
      "good name": ""
    },
    {
      "name": "After Shock",
      "hex": "#fec65f",
      "good name": ""
    },
    {
      "name": "After the Rain",
      "hex": "#8bc4d1",
      "good name": ""
    },
    {
      "name": "After the Storm",
      "hex": "#33616a",
      "good name": ""
    },
    {
      "name": "After Work Blue",
      "hex": "#24246d",
      "good name": ""
    },
    {
      "name": "After-Party Pink",
      "hex": "#c95efb",
      "good name": ""
    },
    {
      "name": "Aftercare",
      "hex": "#85c0cd",
      "good name": ""
    },
    {
      "name": "Afterglow",
      "hex": "#f3e6c9",
      "good name": ""
    },
    {
      "name": "Afterlife",
      "hex": "#d91fff",
      "good name": ""
    },
    {
      "name": "Afternoon",
      "hex": "#fbcb78",
      "good name": ""
    },
    {
      "name": "Afternoon Sky",
      "hex": "#87ceeb",
      "good name": ""
    },
    {
      "name": "Afternoon Stroll",
      "hex": "#d9c5a1",
      "good name": ""
    },
    {
      "name": "Afternoon Tea",
      "hex": "#594e40",
      "good name": ""
    },
    {
      "name": "Agapanthus",
      "hex": "#bbc5de",
      "good name": ""
    },
    {
      "name": "Agate Brown",
      "hex": "#956a60",
      "good name": ""
    },
    {
      "name": "Agate Green",
      "hex": "#599f99",
      "good name": ""
    },
    {
      "name": "Agate Grey",
      "hex": "#b1b09f",
      "good name": ""
    },
    {
      "name": "Agate Violet",
      "hex": "#5a5b74",
      "good name": ""
    },
    {
      "name": "Agave",
      "hex": "#879d99",
      "good name": ""
    },
    {
      "name": "Agave Frond",
      "hex": "#5a6e6a",
      "good name": ""
    },
    {
      "name": "Agave Green",
      "hex": "#6b7169",
      "good name": ""
    },
    {
      "name": "Agave Plant",
      "hex": "#879c67",
      "good name": ""
    },
    {
      "name": "Aged Beige",
      "hex": "#d7cfc0",
      "good name": ""
    },
    {
      "name": "Aged Brandy",
      "hex": "#87413f",
      "good name": ""
    },
    {
      "name": "Aged Chocolate",
      "hex": "#5f4947",
      "good name": ""
    },
    {
      "name": "Aged Cotton",
      "hex": "#e0dcda",
      "good name": ""
    },
    {
      "name": "Aged Eucalyptus",
      "hex": "#898253",
      "good name": ""
    },
    {
      "name": "Aged Gouda",
      "hex": "#dd9944",
      "good name": ""
    },
    {
      "name": "Aged Jade",
      "hex": "#6c6956",
      "good name": ""
    },
    {
      "name": "Aged Merlot",
      "hex": "#73343a",
      "good name": ""
    },
    {
      "name": "Aged Mustard Green",
      "hex": "#6e6e30",
      "good name": ""
    },
    {
      "name": "Aged Olive",
      "hex": "#7e7666",
      "good name": ""
    },
    {
      "name": "Aged Parchment",
      "hex": "#e9ddca",
      "good name": ""
    },
    {
      "name": "Aged Pewter",
      "hex": "#889999",
      "good name": ""
    },
    {
      "name": "Aged Pink",
      "hex": "#c99f99",
      "good name": ""
    },
    {
      "name": "Aged Plastic Casing",
      "hex": "#fffa86",
      "good name": ""
    },
    {
      "name": "Aged Purple",
      "hex": "#a442a0",
      "good name": ""
    },
    {
      "name": "Aged Teak",
      "hex": "#7a4134",
      "good name": ""
    },
    {
      "name": "Aged to Perfection",
      "hex": "#a58ea9",
      "good name": ""
    },
    {
      "name": "Aged Whisky",
      "hex": "#9d7147",
      "good name": ""
    },
    {
      "name": "Aged White",
      "hex": "#e8decd",
      "good name": ""
    },
    {
      "name": "Aged Wine",
      "hex": "#895460",
      "good name": ""
    },
    {
      "name": "Ageless",
      "hex": "#ececdf",
      "good name": ""
    },
    {
      "name": "Ageless Beauty",
      "hex": "#e7a995",
      "good name": ""
    },
    {
      "name": "Agent Orange",
      "hex": "#ee6633",
      "good name": "x"
    },
    {
      "name": "Aggressive Baby Blue",
      "hex": "#6fffff",
      "good name": ""
    },
    {
      "name": "Aggressive Salmon",
      "hex": "#ff7799",
      "good name": ""
    },
    {
      "name": "Aging Barrel",
      "hex": "#6a5b4e",
      "good name": ""
    },
    {
      "name": "Agrax Earthshade",
      "hex": "#393121",
      "good name": ""
    },
    {
      "name": "Agreeable Grey",
      "hex": "#d1cbc1",
      "good name": ""
    },
    {
      "name": "Agrellan Badland",
      "hex": "#ffb347",
      "good name": ""
    },
    {
      "name": "Agrellan Earth",
      "hex": "#a17c59",
      "good name": ""
    },
    {
      "name": "Agressive Aqua",
      "hex": "#00fbff",
      "good name": "x"
    },
    {
      "name": "Agrodolce",
      "hex": "#f0e2d3",
      "good name": ""
    },
    {
      "name": "Agua Fría",
      "hex": "#9fc5cc",
      "good name": ""
    },
    {
      "name": "Ahaetulla Prasina",
      "hex": "#00fa92",
      "good name": ""
    },
    {
      "name": "Ahmar Red",
      "hex": "#c22147",
      "good name": ""
    },
    {
      "name": "Ahoy",
      "hex": "#2a3149",
      "good name": ""
    },
    {
      "name": "Ahriman Blue",
      "hex": "#199ebd",
      "good name": ""
    },
    {
      "name": "Ai Indigo",
      "hex": "#274447",
      "good name": ""
    },
    {
      "name": "Aida",
      "hex": "#b4c8b6",
      "good name": ""
    },
    {
      "name": "Aijiro White",
      "hex": "#ecf7f7",
      "good name": ""
    },
    {
      "name": "Aimee",
      "hex": "#eee5e1",
      "good name": ""
    },
    {
      "name": "Aimiru Brown",
      "hex": "#2e372e",
      "good name": ""
    },
    {
      "name": "Air Blue",
      "hex": "#77acc7",
      "good name": ""
    },
    {
      "name": "Air Castle",
      "hex": "#d7d1e9",
      "good name": ""
    },
    {
      "name": "Air Force Blue",
      "hex": "#5d8aa8",
      "good name": ""
    },
    {
      "name": "Air of Mint",
      "hex": "#d8f2ee",
      "good name": ""
    },
    {
      "name": "Air Superiority Blue",
      "hex": "#72a0c1",
      "good name": ""
    },
    {
      "name": "Airborne",
      "hex": "#a2c2d0",
      "good name": "x"
    },
    {
      "name": "Airbrushed Copper",
      "hex": "#aa6c51",
      "good name": ""
    },
    {
      "name": "Aircraft Blue",
      "hex": "#354f58",
      "good name": ""
    },
    {
      "name": "Aircraft Exterior Grey",
      "hex": "#939498",
      "good name": ""
    },
    {
      "name": "Aircraft Green",
      "hex": "#2a2c1f",
      "good name": ""
    },
    {
      "name": "Aircraft White",
      "hex": "#edf2f8",
      "good name": ""
    },
    {
      "name": "Airflow",
      "hex": "#d9e5e4",
      "good name": ""
    },
    {
      "name": "Airforce",
      "hex": "#364d70",
      "good name": ""
    },
    {
      "name": "Airline Green",
      "hex": "#8c9632",
      "good name": ""
    },
    {
      "name": "Airy",
      "hex": "#dae6e9",
      "good name": ""
    },
    {
      "name": "Airy Blue",
      "hex": "#88ccee",
      "good name": ""
    },
    {
      "name": "Airy Green",
      "hex": "#dbe0c4",
      "good name": ""
    },
    {
      "name": "Ajo Lily",
      "hex": "#faecd9",
      "good name": ""
    },
    {
      "name": "Ajwain Green",
      "hex": "#d3de7b",
      "good name": ""
    },
    {
      "name": "Akabeni",
      "hex": "#c3272b",
      "good name": ""
    },
    {
      "name": "Akai Red",
      "hex": "#bc012e",
      "good name": ""
    },
    {
      "name": "Akakō Red",
      "hex": "#f07f5e",
      "good name": ""
    },
    {
      "name": "Akaroa",
      "hex": "#beb29a",
      "good name": ""
    },
    {
      "name": "Ake Blood",
      "hex": "#cf3a24",
      "good name": ""
    },
    {
      "name": "Akebi Purple",
      "hex": "#983fb2",
      "good name": ""
    },
    {
      "name": "Akebono Dawn",
      "hex": "#fa7b62",
      "good name": ""
    },
    {
      "name": "Akhdhar Green",
      "hex": "#b0e313",
      "good name": ""
    },
    {
      "name": "Akihabara Arcade",
      "hex": "#601ef9",
      "good name": ""
    },
    {
      "name": "Akira Red",
      "hex": "#e12120",
      "good name": ""
    },
    {
      "name": "Akuma's Fury",
      "hex": "#871646",
      "good name": ""
    },
    {
      "name": "Alabama Crimson",
      "hex": "#a32638",
      "good name": ""
    },
    {
      "name": "Alabaster",
      "hex": "#f3e7db",
      "good name": ""
    },
    {
      "name": "Alabaster Beauty",
      "hex": "#e9e3d2",
      "good name": ""
    },
    {
      "name": "Alabaster Gleam",
      "hex": "#f0debd",
      "good name": ""
    },
    {
      "name": "Alabaster White",
      "hex": "#dfd4bf",
      "good name": ""
    },
    {
      "name": "Aladdin's Feather",
      "hex": "#5500ff",
      "good name": ""
    },
    {
      "name": "Alaea",
      "hex": "#81585b",
      "good name": ""
    },
    {
      "name": "Alaitoc Blue",
      "hex": "#8e8c97",
      "good name": ""
    },
    {
      "name": "Alajuela Toad",
      "hex": "#ffae52",
      "good name": ""
    },
    {
      "name": "Alameda Ochre",
      "hex": "#ca9234",
      "good name": ""
    },
    {
      "name": "Alamosa Green",
      "hex": "#939b71",
      "good name": ""
    },
    {
      "name": "Alarm",
      "hex": "#ec0003",
      "good name": "x"
    },
    {
      "name": "Alarming Slime",
      "hex": "#2ce335",
      "good name": ""
    },
    {
      "name": "Alaskan Blue",
      "hex": "#6da9d2",
      "good name": ""
    },
    {
      "name": "Alaskan Cruise",
      "hex": "#34466c",
      "good name": ""
    },
    {
      "name": "Alaskan Grey",
      "hex": "#bcbebc",
      "good name": ""
    },
    {
      "name": "Alaskan Ice",
      "hex": "#7e9ec2",
      "good name": ""
    },
    {
      "name": "Alaskan Mist",
      "hex": "#ecf0e5",
      "good name": ""
    },
    {
      "name": "Alaskan Moss",
      "hex": "#05472a",
      "good name": ""
    },
    {
      "name": "Alaskan Skies",
      "hex": "#cddced",
      "good name": ""
    },
    {
      "name": "Alaskan Wind",
      "hex": "#bae3eb",
      "good name": ""
    },
    {
      "name": "Albanian Red",
      "hex": "#cc0001",
      "good name": ""
    },
    {
      "name": "Albeit",
      "hex": "#38546e",
      "good name": ""
    },
    {
      "name": "Albert Green",
      "hex": "#4f5845",
      "good name": ""
    },
    {
      "name": "Albescent White",
      "hex": "#e1dacb",
      "good name": ""
    },
    {
      "name": "Albino",
      "hex": "#fbeee5",
      "good name": ""
    },
    {
      "name": "Albuquerque",
      "hex": "#cca47e",
      "good name": ""
    },
    {
      "name": "Alchemy",
      "hex": "#e7cf8c",
      "good name": ""
    },
    {
      "name": "Aldabra",
      "hex": "#aaa492",
      "good name": ""
    },
    {
      "name": "Alden Till",
      "hex": "#7a4b49",
      "good name": ""
    },
    {
      "name": "Alert Tan",
      "hex": "#954e2c",
      "good name": ""
    },
    {
      "name": "Alesan",
      "hex": "#f1ceb3",
      "good name": ""
    },
    {
      "name": "Aleutian",
      "hex": "#9a9eb3",
      "good name": ""
    },
    {
      "name": "Alexandra Peach",
      "hex": "#db9785",
      "good name": ""
    },
    {
      "name": "Alexandria",
      "hex": "#ff8f73",
      "good name": ""
    },
    {
      "name": "Alexandria's Lighthouse",
      "hex": "#fcefc1",
      "good name": ""
    },
    {
      "name": "Alexandrian Sky",
      "hex": "#bcd9dc",
      "good name": ""
    },
    {
      "name": "Alexandrite",
      "hex": "#598c74",
      "good name": ""
    },
    {
      "name": "Alexandrite Green",
      "hex": "#767853",
      "good name": ""
    },
    {
      "name": "Alexis Blue",
      "hex": "#416082",
      "good name": ""
    },
    {
      "name": "Alfalfa",
      "hex": "#b7b59f",
      "good name": ""
    },
    {
      "name": "Alfalfa Extract",
      "hex": "#546940",
      "good name": ""
    },
    {
      "name": "Alga Moss",
      "hex": "#8da98d",
      "good name": ""
    },
    {
      "name": "Algae",
      "hex": "#54ac68",
      "good name": ""
    },
    {
      "name": "Algae Green",
      "hex": "#93dfb8",
      "good name": ""
    },
    {
      "name": "Algae Red",
      "hex": "#983d53",
      "good name": ""
    },
    {
      "name": "Algal Fuel",
      "hex": "#21c36f",
      "good name": ""
    },
    {
      "name": "Algen Gerne",
      "hex": "#479784",
      "good name": ""
    },
    {
      "name": "Algerian Coral",
      "hex": "#fc5a50",
      "good name": ""
    },
    {
      "name": "Algiers Blue",
      "hex": "#00859c",
      "good name": ""
    },
    {
      "name": "Algodon Azul",
      "hex": "#c1dbec",
      "good name": ""
    },
    {
      "name": "Alhambra",
      "hex": "#008778",
      "good name": ""
    },
    {
      "name": "Alhambra Cream",
      "hex": "#f7f2e1",
      "good name": ""
    },
    {
      "name": "Alhambra Green",
      "hex": "#00a465",
      "good name": ""
    },
    {
      "name": "Alibi",
      "hex": "#d4cbc4",
      "good name": ""
    },
    {
      "name": "Alice Blue",
      "hex": "#f0f8ff",
      "good name": ""
    },
    {
      "name": "Alice White",
      "hex": "#c2ced2",
      "good name": ""
    },
    {
      "name": "Alien",
      "hex": "#415764",
      "good name": ""
    },
    {
      "name": "Alien Abduction",
      "hex": "#0cff0c",
      "good name": "x"
    },
    {
      "name": "Alien Armpit",
      "hex": "#84de02",
      "good name": ""
    },
    {
      "name": "Alien Breed",
      "hex": "#b9cc81",
      "good name": ""
    },
    {
      "name": "Alien Parasite",
      "hex": "#55ff33",
      "good name": ""
    },
    {
      "name": "Alien Purple",
      "hex": "#490648",
      "good name": ""
    },
    {
      "name": "Alienator Grey",
      "hex": "#9790a4",
      "good name": ""
    },
    {
      "name": "Align",
      "hex": "#00728d",
      "good name": ""
    },
    {
      "name": "Alizarin",
      "hex": "#e34636",
      "good name": ""
    },
    {
      "name": "Alizarin Crimson",
      "hex": "#e32636",
      "good name": ""
    },
    {
      "name": "All About Olive",
      "hex": "#676c58",
      "good name": ""
    },
    {
      "name": "All Dressed Up",
      "hex": "#e6999d",
      "good name": ""
    },
    {
      "name": "All Made Up",
      "hex": "#efd7e7",
      "good name": ""
    },
    {
      "name": "All Nighter",
      "hex": "#455454",
      "good name": ""
    },
    {
      "name": "All the Leaves Are Brown",
      "hex": "#994411",
      "good name": ""
    },
    {
      "name": "All's Ace",
      "hex": "#c68886",
      "good name": ""
    },
    {
      "name": "Allegiance",
      "hex": "#5a6a8c",
      "good name": ""
    },
    {
      "name": "Allegory",
      "hex": "#b4b2a9",
      "good name": ""
    },
    {
      "name": "Allegro",
      "hex": "#b28959",
      "good name": ""
    },
    {
      "name": "Alley",
      "hex": "#b8c4d9",
      "good name": ""
    },
    {
      "name": "Alley Cat",
      "hex": "#656874",
      "good name": "x"
    },
    {
      "name": "Alliance",
      "hex": "#2b655f",
      "good name": ""
    },
    {
      "name": "Alligator",
      "hex": "#886600",
      "good name": "x"
    },
    {
      "name": "Alligator Egg",
      "hex": "#eaeed7",
      "good name": ""
    },
    {
      "name": "Alligator Gladiator",
      "hex": "#444411",
      "good name": ""
    },
    {
      "name": "Alligator Skin",
      "hex": "#646048",
      "good name": ""
    },
    {
      "name": "Allison Lace",
      "hex": "#f1ead4",
      "good name": ""
    },
    {
      "name": "Allium",
      "hex": "#9569a3",
      "good name": ""
    },
    {
      "name": "Alloy",
      "hex": "#98979a",
      "good name": ""
    },
    {
      "name": "Alloy Orange",
      "hex": "#c46210",
      "good name": ""
    },
    {
      "name": "Allports",
      "hex": "#1f6a7d",
      "good name": ""
    },
    {
      "name": "Allspice",
      "hex": "#f8cdaa",
      "good name": ""
    },
    {
      "name": "Allura Red",
      "hex": "#ed2e38",
      "good name": ""
    },
    {
      "name": "Allure",
      "hex": "#7291b4",
      "good name": ""
    },
    {
      "name": "Alluring Blue",
      "hex": "#9ec4cd",
      "good name": ""
    },
    {
      "name": "Alluring Gesture",
      "hex": "#f8dbc2",
      "good name": ""
    },
    {
      "name": "Alluring Light",
      "hex": "#fff7d8",
      "good name": ""
    },
    {
      "name": "Alluring Umber",
      "hex": "#977b4d",
      "good name": ""
    },
    {
      "name": "Alluring White",
      "hex": "#efe1d2",
      "good name": ""
    },
    {
      "name": "Alluvial Inca",
      "hex": "#bb934b",
      "good name": ""
    },
    {
      "name": "Allyson",
      "hex": "#cb738b",
      "good name": ""
    },
    {
      "name": "Almeja",
      "hex": "#f5e0c9",
      "good name": ""
    },
    {
      "name": "Almendra Tostada",
      "hex": "#e8d6bd",
      "good name": ""
    },
    {
      "name": "Almond",
      "hex": "#eddcc8",
      "good name": "x"
    },
    {
      "name": "Almond Beige",
      "hex": "#dfd5ca",
      "good name": ""
    },
    {
      "name": "Almond Biscuit",
      "hex": "#e9c9a9",
      "good name": ""
    },
    {
      "name": "Almond Blossom",
      "hex": "#f5bec7",
      "good name": ""
    },
    {
      "name": "Almond Blossom Pink",
      "hex": "#e0d2d1",
      "good name": ""
    },
    {
      "name": "Almond Brittle",
      "hex": "#e5d3b9",
      "good name": ""
    },
    {
      "name": "Almond Buff",
      "hex": "#ccb390",
      "good name": ""
    },
    {
      "name": "Almond Butter",
      "hex": "#d8c6a8",
      "good name": ""
    },
    {
      "name": "Almond Cookie",
      "hex": "#eec87c",
      "good name": ""
    },
    {
      "name": "Almond Cream",
      "hex": "#f4c29f",
      "good name": ""
    },
    {
      "name": "Almond Frost",
      "hex": "#9a8678",
      "good name": ""
    },
    {
      "name": "Almond Green",
      "hex": "#595e4c",
      "good name": ""
    },
    {
      "name": "Almond Icing",
      "hex": "#efe3d9",
      "good name": ""
    },
    {
      "name": "Almond Kiss",
      "hex": "#f6e3d4",
      "good name": ""
    },
    {
      "name": "Almond Latte",
      "hex": "#d6c0a4",
      "good name": ""
    },
    {
      "name": "Almond Milk",
      "hex": "#d6cebe",
      "good name": "x"
    },
    {
      "name": "Almond Oil",
      "hex": "#f4efc1",
      "good name": ""
    },
    {
      "name": "Almond Paste",
      "hex": "#e5dbc5",
      "good name": ""
    },
    {
      "name": "Almond Roca",
      "hex": "#f0e8e0",
      "good name": ""
    },
    {
      "name": "Almond Rose",
      "hex": "#cc8888",
      "good name": ""
    },
    {
      "name": "Almond Silk",
      "hex": "#e1cfb2",
      "good name": ""
    },
    {
      "name": "Almond Toast",
      "hex": "#bf9e77",
      "good name": ""
    },
    {
      "name": "Almond Truffle",
      "hex": "#7d665b",
      "good name": ""
    },
    {
      "name": "Almond Willow",
      "hex": "#e6c9bc",
      "good name": ""
    },
    {
      "name": "Almond Wisp",
      "hex": "#d6cab9",
      "good name": ""
    },
    {
      "name": "Almondine",
      "hex": "#fedebc",
      "good name": ""
    },
    {
      "name": "Almost Aloe",
      "hex": "#bfe5b1",
      "good name": ""
    },
    {
      "name": "Almost Apricot",
      "hex": "#e5b39b",
      "good name": ""
    },
    {
      "name": "Almost Aqua",
      "hex": "#98ddc5",
      "good name": ""
    },
    {
      "name": "Almost Famous",
      "hex": "#3a5457",
      "good name": ""
    },
    {
      "name": "Almost Mauve",
      "hex": "#e7dcd9",
      "good name": ""
    },
    {
      "name": "Almost Pink",
      "hex": "#f0e3da",
      "good name": ""
    },
    {
      "name": "Aloe",
      "hex": "#817a60",
      "good name": ""
    },
    {
      "name": "Aloe Blossom",
      "hex": "#c97863",
      "good name": ""
    },
    {
      "name": "Aloe Cream",
      "hex": "#dbe5b9",
      "good name": ""
    },
    {
      "name": "Aloe Essence",
      "hex": "#ecf1e2",
      "good name": ""
    },
    {
      "name": "Aloe Leaf",
      "hex": "#61643f",
      "good name": ""
    },
    {
      "name": "Aloe Mist",
      "hex": "#dcf2e3",
      "good name": ""
    },
    {
      "name": "Aloe Nectar",
      "hex": "#dfe2c9",
      "good name": ""
    },
    {
      "name": "Aloe Plant",
      "hex": "#b8ba87",
      "good name": ""
    },
    {
      "name": "Aloe Thorn",
      "hex": "#888b73",
      "good name": ""
    },
    {
      "name": "Aloe Vera",
      "hex": "#678779",
      "good name": "x"
    },
    {
      "name": "Aloe Vera Green",
      "hex": "#7e9b39",
      "good name": ""
    },
    {
      "name": "Aloe Vera Tea",
      "hex": "#848b71",
      "good name": ""
    },
    {
      "name": "Aloe Wash",
      "hex": "#d0d3b7",
      "good name": ""
    },
    {
      "name": "Aloeswood",
      "hex": "#6a432d",
      "good name": ""
    },
    {
      "name": "Aloha",
      "hex": "#1db394",
      "good name": ""
    },
    {
      "name": "Aloha Sunset",
      "hex": "#e9aa91",
      "good name": ""
    },
    {
      "name": "Alone in the Dark",
      "hex": "#000066",
      "good name": "x"
    },
    {
      "name": "Aloof",
      "hex": "#d4e2e6",
      "good name": ""
    },
    {
      "name": "Aloof Grey",
      "hex": "#c9c9c0",
      "good name": ""
    },
    {
      "name": "Aloof Lama",
      "hex": "#d6c5a0",
      "good name": ""
    },
    {
      "name": "Alpaca",
      "hex": "#f7e5da",
      "good name": "x"
    },
    {
      "name": "Alpaca Blanket",
      "hex": "#ded7c5",
      "good name": ""
    },
    {
      "name": "Alpaca Wool",
      "hex": "#f9ede2",
      "good name": ""
    },
    {
      "name": "Alpenglow",
      "hex": "#f0beb8",
      "good name": ""
    },
    {
      "name": "Alpha Blue",
      "hex": "#588bb4",
      "good name": ""
    },
    {
      "name": "Alpha Centauri",
      "hex": "#4d5778",
      "good name": ""
    },
    {
      "name": "Alpha Gold",
      "hex": "#ae8e5f",
      "good name": ""
    },
    {
      "name": "Alpha Male",
      "hex": "#715a45",
      "good name": ""
    },
    {
      "name": "Alpha Tango",
      "hex": "#628fb0",
      "good name": ""
    },
    {
      "name": "Alphabet Blue",
      "hex": "#abcdef",
      "good name": ""
    },
    {
      "name": "Alpine",
      "hex": "#ad8a3b",
      "good name": ""
    },
    {
      "name": "Alpine Air",
      "hex": "#a9b4a9",
      "good name": ""
    },
    {
      "name": "Alpine Alabaster",
      "hex": "#badbe6",
      "good name": ""
    },
    {
      "name": "Alpine Berry Yellow",
      "hex": "#f7e0ba",
      "good name": ""
    },
    {
      "name": "Alpine Blue",
      "hex": "#dbe4e5",
      "good name": ""
    },
    {
      "name": "Alpine Duck Grey",
      "hex": "#40464d",
      "good name": ""
    },
    {
      "name": "Alpine Expedition",
      "hex": "#99eeff",
      "good name": "x"
    },
    {
      "name": "Alpine Frost",
      "hex": "#e0ded2",
      "good name": ""
    },
    {
      "name": "Alpine Goat",
      "hex": "#f1f2f8",
      "good name": ""
    },
    {
      "name": "Alpine Green",
      "hex": "#005f56",
      "good name": ""
    },
    {
      "name": "Alpine Haze",
      "hex": "#abbec0",
      "good name": ""
    },
    {
      "name": "Alpine Herbs",
      "hex": "#449955",
      "good name": ""
    },
    {
      "name": "Alpine Lake Green",
      "hex": "#4f603e",
      "good name": ""
    },
    {
      "name": "Alpine Landing",
      "hex": "#117b87",
      "good name": ""
    },
    {
      "name": "Alpine Moon",
      "hex": "#ded3e6",
      "good name": ""
    },
    {
      "name": "Alpine Morning Blue",
      "hex": "#a6ccd8",
      "good name": ""
    },
    {
      "name": "Alpine Race",
      "hex": "#234162",
      "good name": ""
    },
    {
      "name": "Alpine Salamander",
      "hex": "#051009",
      "good name": ""
    },
    {
      "name": "Alpine Summer",
      "hex": "#a5a99a",
      "good name": ""
    },
    {
      "name": "Alpine Trail",
      "hex": "#515a52",
      "good name": ""
    },
    {
      "name": "Alright Then I Became a Princess",
      "hex": "#ffaaa5",
      "good name": ""
    },
    {
      "name": "Alsike Clover Red",
      "hex": "#b1575f",
      "good name": ""
    },
    {
      "name": "Alsot Olive",
      "hex": "#dfd5b1",
      "good name": ""
    },
    {
      "name": "Altar of Heaven",
      "hex": "#4d4c80",
      "good name": ""
    },
    {
      "name": "Altdorf Guard Blue",
      "hex": "#1f56a7",
      "good name": ""
    },
    {
      "name": "Altdorf Sky Blue",
      "hex": "#00a1ac",
      "good name": ""
    },
    {
      "name": "Alter Ego",
      "hex": "#69656d",
      "good name": ""
    },
    {
      "name": "Altered Pink",
      "hex": "#efc7be",
      "good name": ""
    },
    {
      "name": "Alto",
      "hex": "#cdc6c5",
      "good name": ""
    },
    {
      "name": "Alu Gobi",
      "hex": "#ddbb00",
      "good name": ""
    },
    {
      "name": "Alucard's Night",
      "hex": "#000055",
      "good name": ""
    },
    {
      "name": "Aluminium",
      "hex": "#848789",
      "good name": "x"
    },
    {
      "name": "Aluminium Powder",
      "hex": "#a9a0a9",
      "good name": ""
    },
    {
      "name": "Aluminium Snow",
      "hex": "#aeafb4",
      "good name": ""
    },
    {
      "name": "Aluminum",
      "hex": "#9f9586",
      "good name": ""
    },
    {
      "name": "Aluminum Foil",
      "hex": "#d2d9db",
      "good name": ""
    },
    {
      "name": "Aluminum Silver",
      "hex": "#8c8d91",
      "good name": ""
    },
    {
      "name": "Aluminum Sky",
      "hex": "#adafaf",
      "good name": ""
    },
    {
      "name": "Alverda",
      "hex": "#a5c970",
      "good name": ""
    },
    {
      "name": "Always Almond",
      "hex": "#ebe5d2",
      "good name": ""
    },
    {
      "name": "Always Apple",
      "hex": "#a0a667",
      "good name": ""
    },
    {
      "name": "Always Blue",
      "hex": "#a2bacb",
      "good name": ""
    },
    {
      "name": "Always Green Grass",
      "hex": "#11aa00",
      "good name": "x"
    },
    {
      "name": "Always Indigo",
      "hex": "#66778c",
      "good name": ""
    },
    {
      "name": "Always Neutral",
      "hex": "#dfd7cb",
      "good name": ""
    },
    {
      "name": "Always Rosey",
      "hex": "#e79db3",
      "good name": ""
    },
    {
      "name": "Alyssa",
      "hex": "#f4e2d6",
      "good name": ""
    },
    {
      "name": "Alyssum",
      "hex": "#f2d5d7",
      "good name": ""
    },
    {
      "name": "Amalfi",
      "hex": "#016e85",
      "good name": ""
    },
    {
      "name": "Amalfi Coast",
      "hex": "#297cbf",
      "good name": ""
    },
    {
      "name": "Amalfitan Azure",
      "hex": "#033b9a",
      "good name": ""
    },
    {
      "name": "Amaranth",
      "hex": "#e86ead",
      "good name": ""
    },
    {
      "name": "Amaranth Blossom",
      "hex": "#7b2331",
      "good name": ""
    },
    {
      "name": "Amaranth Deep Purple",
      "hex": "#9f2b68",
      "good name": ""
    },
    {
      "name": "Amaranth Pink",
      "hex": "#f19cbb",
      "good name": ""
    },
    {
      "name": "Amaranth Purple",
      "hex": "#6a397b",
      "good name": ""
    },
    {
      "name": "Amaranth Red",
      "hex": "#d3212d",
      "good name": ""
    },
    {
      "name": "Amarantha Red",
      "hex": "#cc3311",
      "good name": ""
    },
    {
      "name": "Amaranthine",
      "hex": "#5f4053",
      "good name": ""
    },
    {
      "name": "Amaretto",
      "hex": "#ab6f60",
      "good name": "x"
    },
    {
      "name": "Amaretto Sour",
      "hex": "#c09856",
      "good name": "x"
    },
    {
      "name": "Amarillo Bebito",
      "hex": "#fff1d4",
      "good name": ""
    },
    {
      "name": "Amarillo Yellow",
      "hex": "#fbf1c3",
      "good name": ""
    },
    {
      "name": "Amarklor Violet",
      "hex": "#551199",
      "good name": ""
    },
    {
      "name": "Amaryllis",
      "hex": "#b85045",
      "good name": ""
    },
    {
      "name": "Amaya",
      "hex": "#f2c1cb",
      "good name": ""
    },
    {
      "name": "Amazing Amethyst",
      "hex": "#806568",
      "good name": ""
    },
    {
      "name": "Amazing Boulder",
      "hex": "#a9a797",
      "good name": ""
    },
    {
      "name": "Amazing Grey",
      "hex": "#beb5a9",
      "good name": ""
    },
    {
      "name": "Amazing Smoke",
      "hex": "#6680bb",
      "good name": ""
    },
    {
      "name": "Amazon",
      "hex": "#387b54",
      "good name": "x"
    },
    {
      "name": "Amazon Breeze",
      "hex": "#ebebd6",
      "good name": ""
    },
    {
      "name": "Amazon Depths",
      "hex": "#505338",
      "good name": ""
    },
    {
      "name": "Amazon Foliage",
      "hex": "#606553",
      "good name": ""
    },
    {
      "name": "Amazon Green",
      "hex": "#786a4a",
      "good name": ""
    },
    {
      "name": "Amazon Jungle",
      "hex": "#686747",
      "good name": ""
    },
    {
      "name": "Amazon Mist",
      "hex": "#ececdc",
      "good name": ""
    },
    {
      "name": "Amazon Moss",
      "hex": "#7e8c7a",
      "good name": ""
    },
    {
      "name": "Amazon Parrot",
      "hex": "#80e45f",
      "good name": ""
    },
    {
      "name": "Amazon Queen",
      "hex": "#948f54",
      "good name": ""
    },
    {
      "name": "Amazon River",
      "hex": "#777462",
      "good name": ""
    },
    {
      "name": "Amazon River Dolphin",
      "hex": "#e6b2b8",
      "good name": ""
    },
    {
      "name": "Amazon Stone",
      "hex": "#7e7873",
      "good name": ""
    },
    {
      "name": "Amazon Vine",
      "hex": "#abaa97",
      "good name": ""
    },
    {
      "name": "Amazonian",
      "hex": "#aa6644",
      "good name": ""
    },
    {
      "name": "Amazonian Orchid",
      "hex": "#a7819d",
      "good name": ""
    },
    {
      "name": "Amazonite",
      "hex": "#00c4b0",
      "good name": ""
    },
    {
      "name": "Ambassador Blue",
      "hex": "#0d2f5a",
      "good name": ""
    },
    {
      "name": "Amber",
      "hex": "#ffbf00",
      "good name": "x"
    },
    {
      "name": "Amber Autumn",
      "hex": "#c69c6a",
      "good name": ""
    },
    {
      "name": "Amber Brew",
      "hex": "#d7a361",
      "good name": ""
    },
    {
      "name": "Amber Brown",
      "hex": "#a66646",
      "good name": ""
    },
    {
      "name": "Amber Dawn",
      "hex": "#f6bc77",
      "good name": ""
    },
    {
      "name": "Amber Glass",
      "hex": "#c79958",
      "good name": ""
    },
    {
      "name": "Amber Glow",
      "hex": "#f29a39",
      "good name": ""
    },
    {
      "name": "Amber Gold",
      "hex": "#c19552",
      "good name": ""
    },
    {
      "name": "Amber Green",
      "hex": "#9a803a",
      "good name": ""
    },
    {
      "name": "Amber Grey",
      "hex": "#d0a592",
      "good name": ""
    },
    {
      "name": "Amber Leaf",
      "hex": "#ba9971",
      "good name": ""
    },
    {
      "name": "Amber Moon",
      "hex": "#eed1a5",
      "good name": ""
    },
    {
      "name": "Amber Romance",
      "hex": "#b18140",
      "good name": ""
    },
    {
      "name": "Amber Sun",
      "hex": "#ff9988",
      "good name": ""
    },
    {
      "name": "Amber Tide",
      "hex": "#ffafa3",
      "good name": ""
    },
    {
      "name": "Amber Wave",
      "hex": "#d78b55",
      "good name": ""
    },
    {
      "name": "Amber Yellow",
      "hex": "#fab75a",
      "good name": ""
    },
    {
      "name": "Amberglow",
      "hex": "#dc793e",
      "good name": ""
    },
    {
      "name": "Amberlight",
      "hex": "#e2bea2",
      "good name": ""
    },
    {
      "name": "Ambience White",
      "hex": "#e7e7e6",
      "good name": ""
    },
    {
      "name": "Ambient Glow",
      "hex": "#f8ede0",
      "good name": ""
    },
    {
      "name": "Ambit",
      "hex": "#97653f",
      "good name": ""
    },
    {
      "name": "Ambitious Amber",
      "hex": "#f0cb97",
      "good name": ""
    },
    {
      "name": "Ambitious Rose",
      "hex": "#e9687e",
      "good name": ""
    },
    {
      "name": "Ambrosia",
      "hex": "#d2e7ca",
      "good name": "x"
    },
    {
      "name": "Ambrosia Coffee Cake",
      "hex": "#eee9d3",
      "good name": ""
    },
    {
      "name": "Ambrosia Ivory",
      "hex": "#fff4eb",
      "good name": ""
    },
    {
      "name": "Ambrosia Salad",
      "hex": "#f4ded3",
      "good name": ""
    },
    {
      "name": "Ameixa",
      "hex": "#6a5acd",
      "good name": ""
    },
    {
      "name": "Amelia",
      "hex": "#beccc2",
      "good name": ""
    },
    {
      "name": "Amélie's Tutu",
      "hex": "#fea7bd",
      "good name": ""
    },
    {
      "name": "America's Cup",
      "hex": "#34546d",
      "good name": ""
    },
    {
      "name": "American Anthem",
      "hex": "#7595ab",
      "good name": ""
    },
    {
      "name": "American Beauty",
      "hex": "#a73340",
      "good name": ""
    },
    {
      "name": "American Blue",
      "hex": "#3b3b6d",
      "good name": ""
    },
    {
      "name": "American Bronze",
      "hex": "#391802",
      "good name": ""
    },
    {
      "name": "American Brown",
      "hex": "#804040",
      "good name": ""
    },
    {
      "name": "American Gold",
      "hex": "#d3af37",
      "good name": ""
    },
    {
      "name": "American Green",
      "hex": "#34b334",
      "good name": ""
    },
    {
      "name": "American Mahogany",
      "hex": "#52352f",
      "good name": ""
    },
    {
      "name": "American Milking Devon",
      "hex": "#63403a",
      "good name": ""
    },
    {
      "name": "American Orange",
      "hex": "#ff8b00",
      "good name": ""
    },
    {
      "name": "American Pink",
      "hex": "#ff9899",
      "good name": ""
    },
    {
      "name": "American Purple",
      "hex": "#431c53",
      "good name": ""
    },
    {
      "name": "American Red",
      "hex": "#b32134",
      "good name": ""
    },
    {
      "name": "American River",
      "hex": "#626e71",
      "good name": ""
    },
    {
      "name": "American Roast",
      "hex": "#995544",
      "good name": ""
    },
    {
      "name": "American Rose",
      "hex": "#ff033e",
      "good name": ""
    },
    {
      "name": "American Silver",
      "hex": "#cfcfcf",
      "good name": ""
    },
    {
      "name": "American Violet",
      "hex": "#551b8c",
      "good name": ""
    },
    {
      "name": "American Yellow",
      "hex": "#f2b400",
      "good name": ""
    },
    {
      "name": "American Yorkshire",
      "hex": "#efdcd4",
      "good name": ""
    },
    {
      "name": "Americana",
      "hex": "#0477b4",
      "good name": ""
    },
    {
      "name": "Americano",
      "hex": "#463732",
      "good name": ""
    },
    {
      "name": "Amethyst",
      "hex": "#9966cc",
      "good name": ""
    },
    {
      "name": "Amethyst Cream",
      "hex": "#eceaec",
      "good name": ""
    },
    {
      "name": "Amethyst Dark Violet",
      "hex": "#4f3c52",
      "good name": ""
    },
    {
      "name": "Amethyst Ganzstar",
      "hex": "#8f00ff",
      "good name": ""
    },
    {
      "name": "Amethyst Gem",
      "hex": "#776985",
      "good name": ""
    },
    {
      "name": "Amethyst Grey",
      "hex": "#9085c4",
      "good name": ""
    },
    {
      "name": "Amethyst Grey Violet",
      "hex": "#9c89a1",
      "good name": ""
    },
    {
      "name": "Amethyst Haze",
      "hex": "#a0a0aa",
      "good name": ""
    },
    {
      "name": "Amethyst Ice",
      "hex": "#d0c9c6",
      "good name": ""
    },
    {
      "name": "Amethyst Light Violet",
      "hex": "#cfc2d1",
      "good name": ""
    },
    {
      "name": "Amethyst Orchid",
      "hex": "#926aa6",
      "good name": ""
    },
    {
      "name": "Amethyst Paint",
      "hex": "#9c8aa4",
      "good name": ""
    },
    {
      "name": "Amethyst Phlox",
      "hex": "#9b91a1",
      "good name": ""
    },
    {
      "name": "Amethyst Purple",
      "hex": "#562f7e",
      "good name": ""
    },
    {
      "name": "Amethyst Show",
      "hex": "#bd97cf",
      "good name": ""
    },
    {
      "name": "Amethyst Smoke",
      "hex": "#95879c",
      "good name": ""
    },
    {
      "name": "Ametrine Quartz",
      "hex": "#ded1e0",
      "good name": ""
    },
    {
      "name": "Amiable Orange",
      "hex": "#df965b",
      "good name": ""
    },
    {
      "name": "Amish Bread",
      "hex": "#e6ddbe",
      "good name": ""
    },
    {
      "name": "Amish Green",
      "hex": "#3a5f4e",
      "good name": ""
    },
    {
      "name": "Amnesia Blue",
      "hex": "#1560bd",
      "good name": ""
    },
    {
      "name": "Amnesiac White",
      "hex": "#f8fbeb",
      "good name": "x"
    },
    {
      "name": "Amok",
      "hex": "#ddcc22",
      "good name": ""
    },
    {
      "name": "Amor",
      "hex": "#ee3377",
      "good name": "x"
    },
    {
      "name": "Amora Purple",
      "hex": "#bb22aa",
      "good name": "x"
    },
    {
      "name": "Amore",
      "hex": "#ae2f48",
      "good name": "x"
    },
    {
      "name": "Amorphous Rose",
      "hex": "#b1a7b7",
      "good name": ""
    },
    {
      "name": "Amour",
      "hex": "#ee5851",
      "good name": ""
    },
    {
      "name": "Amour Frais",
      "hex": "#f5e6ea",
      "good name": ""
    },
    {
      "name": "Amourette",
      "hex": "#c8c5d7",
      "good name": ""
    },
    {
      "name": "Amourette Eternelle",
      "hex": "#e0dfe8",
      "good name": ""
    },
    {
      "name": "Amparo Blue",
      "hex": "#4960a8",
      "good name": ""
    },
    {
      "name": "Amphibian",
      "hex": "#264c47",
      "good name": ""
    },
    {
      "name": "Amphitrite",
      "hex": "#384e47",
      "good name": ""
    },
    {
      "name": "Amphora",
      "hex": "#9f8672",
      "good name": ""
    },
    {
      "name": "Amphystine",
      "hex": "#3f425a",
      "good name": ""
    },
    {
      "name": "Amulet",
      "hex": "#7d9d72",
      "good name": ""
    },
    {
      "name": "Amulet Gem",
      "hex": "#01748e",
      "good name": ""
    },
    {
      "name": "Amygdala Purple",
      "hex": "#69045f",
      "good name": ""
    },
    {
      "name": "Àn Zǐ Purple",
      "hex": "#94568c",
      "good name": ""
    },
    {
      "name": "Anaheim Pepper",
      "hex": "#00bb44",
      "good name": ""
    },
    {
      "name": "Anakiwa",
      "hex": "#8cceea",
      "good name": ""
    },
    {
      "name": "Analytical Grey",
      "hex": "#bfb6a7",
      "good name": ""
    },
    {
      "name": "Anarchist",
      "hex": "#db304a",
      "good name": "x"
    },
    {
      "name": "Anarchy",
      "hex": "#de0300",
      "good name": ""
    },
    {
      "name": "Ancestral",
      "hex": "#d0c1c3",
      "good name": ""
    },
    {
      "name": "Ancestral Gold",
      "hex": "#ddcda6",
      "good name": ""
    },
    {
      "name": "Ancestral Water",
      "hex": "#d0d0d0",
      "good name": ""
    },
    {
      "name": "Ancestry Violet",
      "hex": "#9e90a7",
      "good name": ""
    },
    {
      "name": "Ancho Pepper",
      "hex": "#7a5145",
      "good name": ""
    },
    {
      "name": "Anchor Grey",
      "hex": "#596062",
      "good name": ""
    },
    {
      "name": "Anchor Point",
      "hex": "#435d8b",
      "good name": ""
    },
    {
      "name": "Anchorman",
      "hex": "#2c3641",
      "good name": ""
    },
    {
      "name": "Anchors Away",
      "hex": "#9ebbcd",
      "good name": ""
    },
    {
      "name": "Anchors Aweigh",
      "hex": "#2b3441",
      "good name": ""
    },
    {
      "name": "Anchovy",
      "hex": "#756f6b",
      "good name": "x"
    },
    {
      "name": "Ancient Bamboo",
      "hex": "#da6304",
      "good name": ""
    },
    {
      "name": "Ancient Brandy",
      "hex": "#aa6611",
      "good name": ""
    },
    {
      "name": "Ancient Bronze",
      "hex": "#9c5221",
      "good name": ""
    },
    {
      "name": "Ancient Chest",
      "hex": "#99522b",
      "good name": ""
    },
    {
      "name": "Ancient Copper",
      "hex": "#9f543e",
      "good name": ""
    },
    {
      "name": "Ancient Doeskin",
      "hex": "#dcc9a8",
      "good name": ""
    },
    {
      "name": "Ancient Earth",
      "hex": "#746550",
      "good name": ""
    },
    {
      "name": "Ancient Ice",
      "hex": "#73fdff",
      "good name": ""
    },
    {
      "name": "Ancient Ivory",
      "hex": "#f1e6d1",
      "good name": ""
    },
    {
      "name": "Ancient Kingdom",
      "hex": "#d6d8cd",
      "good name": ""
    },
    {
      "name": "Ancient Lavastone",
      "hex": "#483c32",
      "good name": ""
    },
    {
      "name": "Ancient Magenta",
      "hex": "#953d55",
      "good name": ""
    },
    {
      "name": "Ancient Marble",
      "hex": "#d1ccb9",
      "good name": ""
    },
    {
      "name": "Ancient Maze",
      "hex": "#959651",
      "good name": ""
    },
    {
      "name": "Ancient Murasaki Purple",
      "hex": "#895b8a",
      "good name": ""
    },
    {
      "name": "Ancient Olive",
      "hex": "#6a5536",
      "good name": ""
    },
    {
      "name": "Ancient Pages",
      "hex": "#ddd4ce",
      "good name": ""
    },
    {
      "name": "Ancient Pewter",
      "hex": "#898d91",
      "good name": ""
    },
    {
      "name": "Ancient Planks",
      "hex": "#774411",
      "good name": ""
    },
    {
      "name": "Ancient Pottery",
      "hex": "#a37d5e",
      "good name": ""
    },
    {
      "name": "Ancient Prunus",
      "hex": "#5a3d3f",
      "good name": ""
    },
    {
      "name": "Ancient Red",
      "hex": "#922a31",
      "good name": ""
    },
    {
      "name": "Ancient Root",
      "hex": "#70553d",
      "good name": ""
    },
    {
      "name": "Ancient Royal Banner",
      "hex": "#843f5b",
      "good name": ""
    },
    {
      "name": "Ancient Ruins",
      "hex": "#e0cac0",
      "good name": ""
    },
    {
      "name": "Ancient Scroll",
      "hex": "#f5e6de",
      "good name": "x"
    },
    {
      "name": "Ancient Shelter",
      "hex": "#83696e",
      "good name": ""
    },
    {
      "name": "Ancient Stone",
      "hex": "#ded8d4",
      "good name": ""
    },
    {
      "name": "Ancient Yellow",
      "hex": "#eecd00",
      "good name": ""
    },
    {
      "name": "Andean Opal Green",
      "hex": "#afcdc7",
      "good name": ""
    },
    {
      "name": "Andean Slate",
      "hex": "#90b19d",
      "good name": ""
    },
    {
      "name": "Andes Ash",
      "hex": "#c1a097",
      "good name": ""
    },
    {
      "name": "Andes Sky",
      "hex": "#78d8d9",
      "good name": ""
    },
    {
      "name": "Andiron",
      "hex": "#424036",
      "good name": ""
    },
    {
      "name": "Andorra",
      "hex": "#603535",
      "good name": ""
    },
    {
      "name": "Andouille",
      "hex": "#b58338",
      "good name": ""
    },
    {
      "name": "Andover Cream",
      "hex": "#faf0d3",
      "good name": ""
    },
    {
      "name": "Andrea Blue",
      "hex": "#4477dd",
      "good name": ""
    },
    {
      "name": "Android Green",
      "hex": "#a4c639",
      "good name": ""
    },
    {
      "name": "Andromeda Blue",
      "hex": "#abcdee",
      "good name": ""
    },
    {
      "name": "Anemone",
      "hex": "#842c48",
      "good name": ""
    },
    {
      "name": "Anemone White",
      "hex": "#f9efe4",
      "good name": ""
    },
    {
      "name": "Anew Grey",
      "hex": "#beb6ab",
      "good name": ""
    },
    {
      "name": "Angel Aura",
      "hex": "#afa8ae",
      "good name": ""
    },
    {
      "name": "Angel Blue",
      "hex": "#83c5cd",
      "good name": ""
    },
    {
      "name": "Angel Blush",
      "hex": "#f7e3da",
      "good name": ""
    },
    {
      "name": "Angel Breath",
      "hex": "#dcaf9f",
      "good name": ""
    },
    {
      "name": "Angel Face Rose",
      "hex": "#fe83cc",
      "good name": ""
    },
    {
      "name": "Angel Falls",
      "hex": "#a3bdd3",
      "good name": ""
    },
    {
      "name": "Angel Feather",
      "hex": "#f4efee",
      "good name": ""
    },
    {
      "name": "Angel Finger",
      "hex": "#b8acb4",
      "good name": ""
    },
    {
      "name": "Angel Food",
      "hex": "#f0e8d9",
      "good name": ""
    },
    {
      "name": "Angel Food Cake",
      "hex": "#d7a14f",
      "good name": ""
    },
    {
      "name": "Angel Green",
      "hex": "#004225",
      "good name": ""
    },
    {
      "name": "Angel Hair Silver",
      "hex": "#d2d6db",
      "good name": ""
    },
    {
      "name": "Angel Heart",
      "hex": "#a17791",
      "good name": ""
    },
    {
      "name": "Angel in Blue Jeans",
      "hex": "#bbc6d9",
      "good name": ""
    },
    {
      "name": "Angel Kiss",
      "hex": "#cec7dc",
      "good name": ""
    },
    {
      "name": "Angel of Death Victorious",
      "hex": "#c6f0e7",
      "good name": ""
    },
    {
      "name": "Angel Shark",
      "hex": "#e19640",
      "good name": ""
    },
    {
      "name": "Angel Wing",
      "hex": "#f3dfd7",
      "good name": "x"
    },
    {
      "name": "Angel's Face",
      "hex": "#eed4c8",
      "good name": ""
    },
    {
      "name": "Angel's Feather",
      "hex": "#f3f1e6",
      "good name": ""
    },
    {
      "name": "Angel's Whisper",
      "hex": "#dbdfd4",
      "good name": ""
    },
    {
      "name": "Angela Bay",
      "hex": "#a9c1e5",
      "good name": ""
    },
    {
      "name": "Angela Canyon",
      "hex": "#c99997",
      "good name": ""
    },
    {
      "name": "Angelic",
      "hex": "#f2dcd7",
      "good name": ""
    },
    {
      "name": "Angelic Blue",
      "hex": "#bbc6d6",
      "good name": ""
    },
    {
      "name": "Angelic Choir",
      "hex": "#e9d9dc",
      "good name": ""
    },
    {
      "name": "Angelic Descent",
      "hex": "#eecc33",
      "good name": ""
    },
    {
      "name": "Angelic Eyes",
      "hex": "#bbd1e8",
      "good name": ""
    },
    {
      "name": "Angelic Sent",
      "hex": "#e3dfea",
      "good name": ""
    },
    {
      "name": "Angelic Starlet",
      "hex": "#ebe9d8",
      "good name": ""
    },
    {
      "name": "Angelic White",
      "hex": "#f4ede4",
      "good name": "x"
    },
    {
      "name": "Angelico",
      "hex": "#eacfc2",
      "good name": ""
    },
    {
      "name": "Angélique Grey",
      "hex": "#d8dee7",
      "good name": ""
    },
    {
      "name": "Anger",
      "hex": "#dd0055",
      "good name": "x"
    },
    {
      "name": "Angora",
      "hex": "#dfd1bb",
      "good name": ""
    },
    {
      "name": "Angora Blue",
      "hex": "#b9c6d8",
      "good name": ""
    },
    {
      "name": "Angora Goat",
      "hex": "#ede7de",
      "good name": ""
    },
    {
      "name": "Angora Pink",
      "hex": "#ebdfea",
      "good name": ""
    },
    {
      "name": "Angraecum Orchid",
      "hex": "#f4f6ec",
      "good name": ""
    },
    {
      "name": "Angry Flamingo",
      "hex": "#f04e45",
      "good name": ""
    },
    {
      "name": "Angry Gargoyle",
      "hex": "#9799a6",
      "good name": ""
    },
    {
      "name": "Angry Ghost",
      "hex": "#eebbbb",
      "good name": ""
    },
    {
      "name": "Angry Gremlin",
      "hex": "#37503d",
      "good name": ""
    },
    {
      "name": "Angry Hornet",
      "hex": "#ee9911",
      "good name": ""
    },
    {
      "name": "Angry Ocean",
      "hex": "#4e6665",
      "good name": ""
    },
    {
      "name": "Angry Pasta",
      "hex": "#ffcc55",
      "good name": "x"
    },
    {
      "name": "Aniline Mauve",
      "hex": "#b9abad",
      "good name": ""
    },
    {
      "name": "Animal Blood",
      "hex": "#a41313",
      "good name": ""
    },
    {
      "name": "Animal Cracker",
      "hex": "#f4e6ce",
      "good name": ""
    },
    {
      "name": "Animal Kingdom",
      "hex": "#bcc09e",
      "good name": ""
    },
    {
      "name": "Animated Coral",
      "hex": "#ed9080",
      "good name": ""
    },
    {
      "name": "Animation",
      "hex": "#1d5c83",
      "good name": ""
    },
    {
      "name": "Anime",
      "hex": "#ccc14d",
      "good name": ""
    },
    {
      "name": "Anime Blush",
      "hex": "#ff7a83",
      "good name": "x"
    },
    {
      "name": "Anise Biscotti",
      "hex": "#c0baaf",
      "good name": "x"
    },
    {
      "name": "Anise Flower",
      "hex": "#f4e3b5",
      "good name": ""
    },
    {
      "name": "Anise Grey Yellow",
      "hex": "#b0ac98",
      "good name": ""
    },
    {
      "name": "Aniseed Leaf Green",
      "hex": "#8cb684",
      "good name": ""
    },
    {
      "name": "Anita",
      "hex": "#91a0b7",
      "good name": ""
    },
    {
      "name": "Anjou Pear",
      "hex": "#cdca9f",
      "good name": ""
    },
    {
      "name": "Annabel",
      "hex": "#f7efcf",
      "good name": ""
    },
    {
      "name": "Annapolis Blue",
      "hex": "#384a66",
      "good name": ""
    },
    {
      "name": "Annis",
      "hex": "#6b475d",
      "good name": ""
    },
    {
      "name": "Annular",
      "hex": "#e17861",
      "good name": ""
    },
    {
      "name": "Anode",
      "hex": "#89a4cd",
      "good name": ""
    },
    {
      "name": "Anon",
      "hex": "#bdbfc8",
      "good name": ""
    },
    {
      "name": "Anonymous",
      "hex": "#dadcd3",
      "good name": ""
    },
    {
      "name": "Another One Bites the Dust",
      "hex": "#c7bba4",
      "good name": "x"
    },
    {
      "name": "Ant Red",
      "hex": "#b05d4a",
      "good name": ""
    },
    {
      "name": "Antarctic Blue",
      "hex": "#2b3f5c",
      "good name": ""
    },
    {
      "name": "Antarctic Circle",
      "hex": "#0000bb",
      "good name": ""
    },
    {
      "name": "Antarctic Deep",
      "hex": "#35383f",
      "good name": ""
    },
    {
      "name": "Antarctica",
      "hex": "#c6c5c6",
      "good name": ""
    },
    {
      "name": "Antarctica Lake",
      "hex": "#bfd2d0",
      "good name": ""
    },
    {
      "name": "Antelope",
      "hex": "#b19664",
      "good name": ""
    },
    {
      "name": "Anthill",
      "hex": "#7f684e",
      "good name": ""
    },
    {
      "name": "Anthracite",
      "hex": "#28282d",
      "good name": "x"
    },
    {
      "name": "Anthracite Blue",
      "hex": "#3d475e",
      "good name": ""
    },
    {
      "name": "Anthracite Grey",
      "hex": "#373f42",
      "good name": ""
    },
    {
      "name": "Anthracite Red",
      "hex": "#73293b",
      "good name": ""
    },
    {
      "name": "Anti Rainbow Grey",
      "hex": "#bebdbc",
      "good name": ""
    },
    {
      "name": "Anti-Flash White",
      "hex": "#f2f3f4",
      "good name": ""
    },
    {
      "name": "Antigua",
      "hex": "#256d73",
      "good name": ""
    },
    {
      "name": "Antigua Blue",
      "hex": "#06b1c4",
      "good name": ""
    },
    {
      "name": "Antigua Sand",
      "hex": "#83c2cd",
      "good name": ""
    },
    {
      "name": "Antigua Sunrise",
      "hex": "#ffe7c8",
      "good name": ""
    },
    {
      "name": "Antilles Blue",
      "hex": "#3b5e8d",
      "good name": ""
    },
    {
      "name": "Antilles Garden",
      "hex": "#8aa277",
      "good name": ""
    },
    {
      "name": "Antimony",
      "hex": "#c7c8c1",
      "good name": ""
    },
    {
      "name": "Antiquarian Brown",
      "hex": "#946644",
      "good name": ""
    },
    {
      "name": "Antiquarian Gold",
      "hex": "#ba8a45",
      "good name": ""
    },
    {
      "name": "Antiquate",
      "hex": "#8d8aa0",
      "good name": ""
    },
    {
      "name": "Antique",
      "hex": "#8b846d",
      "good name": "x"
    },
    {
      "name": "Antique Bear",
      "hex": "#9c867b",
      "good name": ""
    },
    {
      "name": "Antique Bourbon",
      "hex": "#926b43",
      "good name": ""
    },
    {
      "name": "Antique Brass",
      "hex": "#6c461f",
      "good name": ""
    },
    {
      "name": "Antique Bronze",
      "hex": "#704a07",
      "good name": ""
    },
    {
      "name": "Antique Brown",
      "hex": "#553f2d",
      "good name": ""
    },
    {
      "name": "Antique Cameo",
      "hex": "#f0baa4",
      "good name": ""
    },
    {
      "name": "Antique Candle Light",
      "hex": "#f4e1d6",
      "good name": ""
    },
    {
      "name": "Antique Chest",
      "hex": "#a7856d",
      "good name": ""
    },
    {
      "name": "Antique China",
      "hex": "#fdf6e7",
      "good name": ""
    },
    {
      "name": "Antique Coin",
      "hex": "#b5b8a8",
      "good name": ""
    },
    {
      "name": "Antique Copper",
      "hex": "#9e6649",
      "good name": ""
    },
    {
      "name": "Antique Coral",
      "hex": "#ffc7b0",
      "good name": ""
    },
    {
      "name": "Antique Earth",
      "hex": "#7e6c5f",
      "good name": ""
    },
    {
      "name": "Antique Fuchsia",
      "hex": "#915c83",
      "good name": ""
    },
    {
      "name": "Antique Garnet",
      "hex": "#8e5e5e",
      "good name": ""
    },
    {
      "name": "Antique Gold",
      "hex": "#b59e5f",
      "good name": ""
    },
    {
      "name": "Antique Green",
      "hex": "#29675c",
      "good name": ""
    },
    {
      "name": "Antique Grey",
      "hex": "#69576d",
      "good name": ""
    },
    {
      "name": "Antique Heather",
      "hex": "#cdbacb",
      "good name": ""
    },
    {
      "name": "Antique Honey",
      "hex": "#b39355",
      "good name": ""
    },
    {
      "name": "Antique Hot Pink",
      "hex": "#b07f9e",
      "good name": ""
    },
    {
      "name": "Antique Ivory",
      "hex": "#f9ecd3",
      "good name": ""
    },
    {
      "name": "Antique Lace",
      "hex": "#fdf2db",
      "good name": ""
    },
    {
      "name": "Antique Leather",
      "hex": "#9e8e7e",
      "good name": ""
    },
    {
      "name": "Antique Linen",
      "hex": "#faeedb",
      "good name": ""
    },
    {
      "name": "Antique Marble",
      "hex": "#f1e9d7",
      "good name": ""
    },
    {
      "name": "Antique Mauve",
      "hex": "#bbb0b1",
      "good name": ""
    },
    {
      "name": "Antique Moss",
      "hex": "#7a973b",
      "good name": ""
    },
    {
      "name": "Antique Paper",
      "hex": "#f4f0e8",
      "good name": ""
    },
    {
      "name": "Antique Parchment",
      "hex": "#ead8c1",
      "good name": ""
    },
    {
      "name": "Antique Pearl",
      "hex": "#ebd7cb",
      "good name": ""
    },
    {
      "name": "Antique Penny",
      "hex": "#957747",
      "good name": ""
    },
    {
      "name": "Antique Petal",
      "hex": "#e8e3e3",
      "good name": ""
    },
    {
      "name": "Antique Pink",
      "hex": "#c27a74",
      "good name": ""
    },
    {
      "name": "Antique Red",
      "hex": "#7d4f51",
      "good name": ""
    },
    {
      "name": "Antique Rose",
      "hex": "#997165",
      "good name": ""
    },
    {
      "name": "Antique Rosewood",
      "hex": "#72393f",
      "good name": ""
    },
    {
      "name": "Antique Ruby",
      "hex": "#841b2d",
      "good name": ""
    },
    {
      "name": "Antique Silver",
      "hex": "#918e8c",
      "good name": ""
    },
    {
      "name": "Antique Tin",
      "hex": "#6e7173",
      "good name": ""
    },
    {
      "name": "Antique Treasure",
      "hex": "#bb9973",
      "good name": ""
    },
    {
      "name": "Antique Turquoise",
      "hex": "#004e4e",
      "good name": ""
    },
    {
      "name": "Antique Viola",
      "hex": "#928ba6",
      "good name": ""
    },
    {
      "name": "Antique White",
      "hex": "#ece6d5",
      "good name": ""
    },
    {
      "name": "Antique Wicker Basket",
      "hex": "#f3d3a1",
      "good name": ""
    },
    {
      "name": "Antique Windmill",
      "hex": "#b6a38d",
      "good name": ""
    },
    {
      "name": "Antiqued Aqua",
      "hex": "#bdccc1",
      "good name": ""
    },
    {
      "name": "Antiquities",
      "hex": "#8a6c57",
      "good name": ""
    },
    {
      "name": "Antiquity",
      "hex": "#c1a87c",
      "good name": ""
    },
    {
      "name": "Antler",
      "hex": "#957a76",
      "good name": ""
    },
    {
      "name": "Antler Moth",
      "hex": "#864f3e",
      "good name": ""
    },
    {
      "name": "Antler Velvet",
      "hex": "#c0ad96",
      "good name": ""
    },
    {
      "name": "Antoinette",
      "hex": "#b09391",
      "good name": ""
    },
    {
      "name": "Antoinette Pink",
      "hex": "#e7c2b4",
      "good name": ""
    },
    {
      "name": "Anubis Black",
      "hex": "#312231",
      "good name": ""
    },
    {
      "name": "Anzac",
      "hex": "#c68e3f",
      "good name": ""
    },
    {
      "name": "Ao",
      "hex": "#00800c",
      "good name": ""
    },
    {
      "name": "Aoife's Green",
      "hex": "#27b692",
      "good name": ""
    },
    {
      "name": "Aotake Bamboo",
      "hex": "#006442",
      "good name": ""
    },
    {
      "name": "Apatite Blue",
      "hex": "#31827b",
      "good name": ""
    },
    {
      "name": "Apatite Crystal Green",
      "hex": "#bbff99",
      "good name": ""
    },
    {
      "name": "Apeland",
      "hex": "#8a843b",
      "good name": ""
    },
    {
      "name": "Aphrodite Aqua",
      "hex": "#45e9c1",
      "good name": "x"
    },
    {
      "name": "Aphrodite's Pearls",
      "hex": "#eeffff",
      "good name": ""
    },
    {
      "name": "Aphroditean Fuschia",
      "hex": "#dd14ab",
      "good name": "x"
    },
    {
      "name": "Apium",
      "hex": "#b5d0a2",
      "good name": ""
    },
    {
      "name": "Apnea Dive",
      "hex": "#284fbd",
      "good name": ""
    },
    {
      "name": "Apocalyptic Orange",
      "hex": "#f4711e",
      "good name": "x"
    },
    {
      "name": "Apocyan",
      "hex": "#99ccff",
      "good name": ""
    },
    {
      "name": "Apollo Bay",
      "hex": "#748697",
      "good name": ""
    },
    {
      "name": "Apollo Landing",
      "hex": "#e5e5e1",
      "good name": "x"
    },
    {
      "name": "Apollo's White",
      "hex": "#ddffff",
      "good name": ""
    },
    {
      "name": "Appalachian Forest",
      "hex": "#848b80",
      "good name": ""
    },
    {
      "name": "Appalachian Trail",
      "hex": "#cfb989",
      "good name": ""
    },
    {
      "name": "Appaloosa Spots",
      "hex": "#876e52",
      "good name": ""
    },
    {
      "name": "Apparition",
      "hex": "#c2bca9",
      "good name": ""
    },
    {
      "name": "Appetite",
      "hex": "#b1e5aa",
      "good name": ""
    },
    {
      "name": "Appetizing Asparagus",
      "hex": "#66aa00",
      "good name": ""
    },
    {
      "name": "Applause Please",
      "hex": "#858c9b",
      "good name": ""
    },
    {
      "name": "Apple Blossom",
      "hex": "#ddbca0",
      "good name": ""
    },
    {
      "name": "Apple Bob",
      "hex": "#d5e69d",
      "good name": ""
    },
    {
      "name": "Apple Brown Betty",
      "hex": "#9c6757",
      "good name": ""
    },
    {
      "name": "Apple Butter",
      "hex": "#844b4d",
      "good name": ""
    },
    {
      "name": "Apple Cherry",
      "hex": "#f81404",
      "good name": "x"
    },
    {
      "name": "Apple Cider",
      "hex": "#da995f",
      "good name": ""
    },
    {
      "name": "Apple Cinnamon",
      "hex": "#b0885a",
      "good name": ""
    },
    {
      "name": "Apple Core",
      "hex": "#f4eed8",
      "good name": ""
    },
    {
      "name": "Apple Cream",
      "hex": "#b8d7a6",
      "good name": ""
    },
    {
      "name": "Apple Crisp",
      "hex": "#e19c55",
      "good name": ""
    },
    {
      "name": "Apple Crunch",
      "hex": "#fee5c9",
      "good name": ""
    },
    {
      "name": "Apple Cucumber",
      "hex": "#dbdbbc",
      "good name": ""
    },
    {
      "name": "Apple Custard",
      "hex": "#fddfae",
      "good name": ""
    },
    {
      "name": "Apple Day",
      "hex": "#7e976d",
      "good name": ""
    },
    {
      "name": "Apple Flower",
      "hex": "#edf4eb",
      "good name": ""
    },
    {
      "name": "Apple Green",
      "hex": "#76cd26",
      "good name": ""
    },
    {
      "name": "Apple Herb Black",
      "hex": "#4b4247",
      "good name": ""
    },
    {
      "name": "Apple Hill",
      "hex": "#a69f8d",
      "good name": ""
    },
    {
      "name": "Apple Ice",
      "hex": "#bdd0b1",
      "good name": ""
    },
    {
      "name": "Apple II Beige",
      "hex": "#bfca87",
      "good name": ""
    },
    {
      "name": "Apple II Blue",
      "hex": "#93d6bf",
      "good name": ""
    },
    {
      "name": "Apple II Chocolate",
      "hex": "#da680e",
      "good name": ""
    },
    {
      "name": "Apple II Green",
      "hex": "#04650d",
      "good name": ""
    },
    {
      "name": "Apple II Lime",
      "hex": "#25c40d",
      "good name": ""
    },
    {
      "name": "Apple II Magenta",
      "hex": "#dc41f1",
      "good name": ""
    },
    {
      "name": "Apple II Rose",
      "hex": "#ac667b",
      "good name": ""
    },
    {
      "name": "Apple Infusion",
      "hex": "#ddaabb",
      "good name": ""
    },
    {
      "name": "Apple Jack",
      "hex": "#8b974e",
      "good name": ""
    },
    {
      "name": "Apple Martini",
      "hex": "#f9fdd9",
      "good name": ""
    },
    {
      "name": "Apple Orchard",
      "hex": "#93c96a",
      "good name": ""
    },
    {
      "name": "Apple Pie",
      "hex": "#caab94",
      "good name": ""
    },
    {
      "name": "Apple Polish",
      "hex": "#883e3f",
      "good name": ""
    },
    {
      "name": "Apple Sauce",
      "hex": "#f4ebd2",
      "good name": ""
    },
    {
      "name": "Apple Seed",
      "hex": "#a77c53",
      "good name": ""
    },
    {
      "name": "Apple Slice",
      "hex": "#f1f0bf",
      "good name": ""
    },
    {
      "name": "Apple Turnover",
      "hex": "#e8c194",
      "good name": ""
    },
    {
      "name": "Apple Valley",
      "hex": "#ea8386",
      "good name": ""
    },
    {
      "name": "Apple Wine",
      "hex": "#b59f62",
      "good name": ""
    },
    {
      "name": "Apple-A-Day",
      "hex": "#903f45",
      "good name": ""
    },
    {
      "name": "Appleblossom",
      "hex": "#dab5b4",
      "good name": ""
    },
    {
      "name": "Applegate",
      "hex": "#8ac479",
      "good name": ""
    },
    {
      "name": "Applegate Park",
      "hex": "#aead93",
      "good name": ""
    },
    {
      "name": "Applemint",
      "hex": "#cdeacd",
      "good name": ""
    },
    {
      "name": "Applemint Soda",
      "hex": "#f3f5e9",
      "good name": ""
    },
    {
      "name": "Applesauce",
      "hex": "#f6d699",
      "good name": ""
    },
    {
      "name": "Applesauce Cake",
      "hex": "#c2a377",
      "good name": ""
    },
    {
      "name": "Appletini",
      "hex": "#929637",
      "good name": ""
    },
    {
      "name": "Appleton",
      "hex": "#6eb478",
      "good name": ""
    },
    {
      "name": "Approaching Dusk",
      "hex": "#8b97a5",
      "good name": ""
    },
    {
      "name": "Approval Green",
      "hex": "#039487",
      "good name": ""
    },
    {
      "name": "Apricot",
      "hex": "#ffb16d",
      "good name": "x"
    },
    {
      "name": "Apricot Appeal",
      "hex": "#fec382",
      "good name": ""
    },
    {
      "name": "Apricot Blush",
      "hex": "#feaea5",
      "good name": ""
    },
    {
      "name": "Apricot Brandy",
      "hex": "#c26a5a",
      "good name": ""
    },
    {
      "name": "Apricot Brown",
      "hex": "#cc7e5b",
      "good name": ""
    },
    {
      "name": "Apricot Buff",
      "hex": "#cd7e4d",
      "good name": ""
    },
    {
      "name": "Apricot Chicken",
      "hex": "#da8923",
      "good name": ""
    },
    {
      "name": "Apricot Cream",
      "hex": "#f1bd89",
      "good name": ""
    },
    {
      "name": "Apricot Flower",
      "hex": "#ffbb80",
      "good name": ""
    },
    {
      "name": "Apricot Foam",
      "hex": "#eeded8",
      "good name": ""
    },
    {
      "name": "Apricot Fool",
      "hex": "#ffd2a0",
      "good name": ""
    },
    {
      "name": "Apricot Freeze",
      "hex": "#f3cfb7",
      "good name": ""
    },
    {
      "name": "Apricot Gelato",
      "hex": "#f5d7af",
      "good name": ""
    },
    {
      "name": "Apricot Glazed Chicken",
      "hex": "#eeaa22",
      "good name": ""
    },
    {
      "name": "Apricot Glow",
      "hex": "#ffce79",
      "good name": ""
    },
    {
      "name": "Apricot Ice",
      "hex": "#fff6e9",
      "good name": ""
    },
    {
      "name": "Apricot Ice Cream",
      "hex": "#f8cc9c",
      "good name": ""
    },
    {
      "name": "Apricot Iced Tea",
      "hex": "#fbbe99",
      "good name": ""
    },
    {
      "name": "Apricot Illusion",
      "hex": "#e2c4a6",
      "good name": ""
    },
    {
      "name": "Apricot Jam",
      "hex": "#eea771",
      "good name": ""
    },
    {
      "name": "Apricot Light",
      "hex": "#ffca95",
      "good name": ""
    },
    {
      "name": "Apricot Lily",
      "hex": "#fecfb5",
      "good name": ""
    },
    {
      "name": "Apricot Mix",
      "hex": "#b47756",
      "good name": ""
    },
    {
      "name": "Apricot Mousse",
      "hex": "#fcdfaf",
      "good name": ""
    },
    {
      "name": "Apricot Nectar",
      "hex": "#ecaa79",
      "good name": ""
    },
    {
      "name": "Apricot Obsession",
      "hex": "#f8c4b4",
      "good name": ""
    },
    {
      "name": "Apricot Orange",
      "hex": "#c86b3c",
      "good name": ""
    },
    {
      "name": "Apricot Preserves",
      "hex": "#eeb192",
      "good name": ""
    },
    {
      "name": "Apricot Red",
      "hex": "#e8917d",
      "good name": ""
    },
    {
      "name": "Apricot Sherbet",
      "hex": "#facd9e",
      "good name": ""
    },
    {
      "name": "Apricot Sorbet",
      "hex": "#e8a760",
      "good name": ""
    },
    {
      "name": "Apricot Spring",
      "hex": "#f1b393",
      "good name": ""
    },
    {
      "name": "Apricot Tan",
      "hex": "#dd9760",
      "good name": ""
    },
    {
      "name": "Apricot Wash",
      "hex": "#fbac82",
      "good name": ""
    },
    {
      "name": "Apricot White",
      "hex": "#f7f0db",
      "good name": ""
    },
    {
      "name": "Apricot Yellow",
      "hex": "#f7bd81",
      "good name": ""
    },
    {
      "name": "Apricotta",
      "hex": "#d8a48f",
      "good name": ""
    },
    {
      "name": "April Blush",
      "hex": "#f6d0d8",
      "good name": ""
    },
    {
      "name": "April Fool's Red",
      "hex": "#1fb57a",
      "good name": ""
    },
    {
      "name": "April Green",
      "hex": "#a9b062",
      "good name": ""
    },
    {
      "name": "April Love",
      "hex": "#8b3d2f",
      "good name": ""
    },
    {
      "name": "April Mist",
      "hex": "#ccd9c9",
      "good name": ""
    },
    {
      "name": "April Showers",
      "hex": "#dadeb5",
      "good name": ""
    },
    {
      "name": "April Sunshine",
      "hex": "#fbe198",
      "good name": ""
    },
    {
      "name": "April Tears",
      "hex": "#b4cbd4",
      "good name": ""
    },
    {
      "name": "April Wedding",
      "hex": "#c5cfb1",
      "good name": ""
    },
    {
      "name": "April Winds",
      "hex": "#d5e2e5",
      "good name": ""
    },
    {
      "name": "Aqua",
      "hex": "#00ffff",
      "good name": "x"
    },
    {
      "name": "Aqua Bay",
      "hex": "#b5dfc9",
      "good name": ""
    },
    {
      "name": "Aqua Belt",
      "hex": "#7acad0",
      "good name": ""
    },
    {
      "name": "Aqua Bloom",
      "hex": "#96d3d8",
      "good name": ""
    },
    {
      "name": "Aqua Blue",
      "hex": "#79b6bc",
      "good name": ""
    },
    {
      "name": "Aqua Breeze",
      "hex": "#d8e8e4",
      "good name": ""
    },
    {
      "name": "Aqua Clear",
      "hex": "#8bd0dd",
      "good name": ""
    },
    {
      "name": "Aqua Cyan",
      "hex": "#01f1f1",
      "good name": ""
    },
    {
      "name": "Aqua Deep",
      "hex": "#014b43",
      "good name": ""
    },
    {
      "name": "Aqua Eden",
      "hex": "#85c7a6",
      "good name": ""
    },
    {
      "name": "Aqua Experience",
      "hex": "#038e85",
      "good name": ""
    },
    {
      "name": "Aqua Fiesta",
      "hex": "#8cc3c3",
      "good name": ""
    },
    {
      "name": "Aqua Foam",
      "hex": "#adc3b4",
      "good name": ""
    },
    {
      "name": "Aqua Forest",
      "hex": "#5fa777",
      "good name": ""
    },
    {
      "name": "Aqua Fresco",
      "hex": "#4a9fa3",
      "good name": ""
    },
    {
      "name": "Aqua Frost",
      "hex": "#a9d1d7",
      "good name": ""
    },
    {
      "name": "Aqua Glass",
      "hex": "#d2e8e0",
      "good name": ""
    },
    {
      "name": "Aqua Green",
      "hex": "#12e193",
      "good name": ""
    },
    {
      "name": "Aqua Grey",
      "hex": "#889fa5",
      "good name": ""
    },
    {
      "name": "Aqua Haze",
      "hex": "#d9ddd5",
      "good name": ""
    },
    {
      "name": "Aqua Island",
      "hex": "#a1dad7",
      "good name": ""
    },
    {
      "name": "Aqua Lake",
      "hex": "#30949d",
      "good name": ""
    },
    {
      "name": "Aqua Mist",
      "hex": "#a0c9cb",
      "good name": ""
    },
    {
      "name": "Aqua Nation",
      "hex": "#08787f",
      "good name": ""
    },
    {
      "name": "Aqua Oasis",
      "hex": "#bce8dd",
      "good name": ""
    },
    {
      "name": "Aqua Obscura",
      "hex": "#05696b",
      "good name": ""
    },
    {
      "name": "Aqua Pura",
      "hex": "#ddf2ee",
      "good name": ""
    },
    {
      "name": "Aqua Rapids",
      "hex": "#63a39c",
      "good name": ""
    },
    {
      "name": "Aqua Revival",
      "hex": "#539f91",
      "good name": ""
    },
    {
      "name": "Aqua Sea",
      "hex": "#6baaae",
      "good name": ""
    },
    {
      "name": "Aqua Sky",
      "hex": "#7bc4c4",
      "good name": ""
    },
    {
      "name": "Aqua Smoke",
      "hex": "#8c9fa0",
      "good name": ""
    },
    {
      "name": "Aqua Sparkle",
      "hex": "#d3e4e6",
      "good name": ""
    },
    {
      "name": "Aqua Splash",
      "hex": "#85ced1",
      "good name": ""
    },
    {
      "name": "Aqua Spray",
      "hex": "#a5dddb",
      "good name": ""
    },
    {
      "name": "Aqua Spring",
      "hex": "#e8f3e8",
      "good name": ""
    },
    {
      "name": "Aqua Squeeze",
      "hex": "#dbe4dc",
      "good name": ""
    },
    {
      "name": "Aqua Tint",
      "hex": "#e5f1ee",
      "good name": ""
    },
    {
      "name": "Aqua Velvet",
      "hex": "#00a29e",
      "good name": ""
    },
    {
      "name": "Aqua Verde",
      "hex": "#56b3c3",
      "good name": ""
    },
    {
      "name": "Aqua Vitale",
      "hex": "#7bbdc7",
      "good name": ""
    },
    {
      "name": "Aqua Waters",
      "hex": "#00937d",
      "good name": ""
    },
    {
      "name": "Aqua Whisper",
      "hex": "#bfdfdf",
      "good name": ""
    },
    {
      "name": "Aqua Wish",
      "hex": "#a0e3d1",
      "good name": ""
    },
    {
      "name": "Aqua Zing",
      "hex": "#7cd8d6",
      "good name": ""
    },
    {
      "name": "Aqua-Sphere",
      "hex": "#9cb0b3",
      "good name": ""
    },
    {
      "name": "Aquacade",
      "hex": "#e1f0ea",
      "good name": ""
    },
    {
      "name": "Aquadazzle",
      "hex": "#006f49",
      "good name": ""
    },
    {
      "name": "Aquadulce",
      "hex": "#7b9f82",
      "good name": ""
    },
    {
      "name": "Aqualogic",
      "hex": "#57b7c5",
      "good name": ""
    },
    {
      "name": "Aquamarine",
      "hex": "#2ee8bb",
      "good name": "x"
    },
    {
      "name": "Aquamarine Blue",
      "hex": "#71d9e2",
      "good name": ""
    },
    {
      "name": "Aquamarine Dream",
      "hex": "#b3c4ba",
      "good name": ""
    },
    {
      "name": "Aquamarine Ocean",
      "hex": "#82cdad",
      "good name": ""
    },
    {
      "name": "Aquamentus Green",
      "hex": "#00a800",
      "good name": ""
    },
    {
      "name": "Aquarelle",
      "hex": "#61aab1",
      "good name": ""
    },
    {
      "name": "Aquarelle Beige",
      "hex": "#e8e0d5",
      "good name": ""
    },
    {
      "name": "Aquarelle Blue",
      "hex": "#bfe0e4",
      "good name": ""
    },
    {
      "name": "Aquarelle Green",
      "hex": "#e2f4e4",
      "good name": ""
    },
    {
      "name": "Aquarelle Lilac",
      "hex": "#edc8ff",
      "good name": ""
    },
    {
      "name": "Aquarelle Mint",
      "hex": "#dbf4d8",
      "good name": ""
    },
    {
      "name": "Aquarelle Orange",
      "hex": "#fbe8e0",
      "good name": ""
    },
    {
      "name": "Aquarelle Pink",
      "hex": "#fbe9de",
      "good name": ""
    },
    {
      "name": "Aquarelle Purple",
      "hex": "#d8e1f1",
      "good name": ""
    },
    {
      "name": "Aquarelle Red",
      "hex": "#fedddd",
      "good name": ""
    },
    {
      "name": "Aquarelle Sky",
      "hex": "#bce4eb",
      "good name": ""
    },
    {
      "name": "Aquarelle Yellow",
      "hex": "#f4eeda",
      "good name": ""
    },
    {
      "name": "Aquarium",
      "hex": "#356b6f",
      "good name": ""
    },
    {
      "name": "Aquarium Blue",
      "hex": "#66cdaa",
      "good name": ""
    },
    {
      "name": "Aquarium Diver",
      "hex": "#0a98ac",
      "good name": ""
    },
    {
      "name": "Aquarius",
      "hex": "#3cadd4",
      "good name": "x"
    },
    {
      "name": "Aquarius Reef Base",
      "hex": "#559999",
      "good name": ""
    },
    {
      "name": "Aquastone",
      "hex": "#89c6b7",
      "good name": ""
    },
    {
      "name": "Aquatic",
      "hex": "#99c1cc",
      "good name": ""
    },
    {
      "name": "Aquatic Cool",
      "hex": "#41a0b4",
      "good name": ""
    },
    {
      "name": "Aquatic Green",
      "hex": "#49999a",
      "good name": ""
    },
    {
      "name": "Aquatint",
      "hex": "#b8e7de",
      "good name": ""
    },
    {
      "name": "Aquatone",
      "hex": "#a6b5a9",
      "good name": ""
    },
    {
      "name": "Aquaverde",
      "hex": "#a3c0bd",
      "good name": ""
    },
    {
      "name": "Aqueduct",
      "hex": "#60b3bc",
      "good name": ""
    },
    {
      "name": "Aquella",
      "hex": "#59b6d9",
      "good name": ""
    },
    {
      "name": "Aqueous",
      "hex": "#388d95",
      "good name": ""
    },
    {
      "name": "Aquifer",
      "hex": "#e2eced",
      "good name": ""
    },
    {
      "name": "Aquitaine",
      "hex": "#88abb4",
      "good name": ""
    },
    {
      "name": "Arabella",
      "hex": "#82acc4",
      "good name": ""
    },
    {
      "name": "Arabesque",
      "hex": "#d16f52",
      "good name": ""
    },
    {
      "name": "Arabian Bake",
      "hex": "#cd9945",
      "good name": ""
    },
    {
      "name": "Arabian Red",
      "hex": "#a14c3f",
      "good name": ""
    },
    {
      "name": "Arabian Sands",
      "hex": "#ddc6b1",
      "good name": ""
    },
    {
      "name": "Arabian Silk",
      "hex": "#786e97",
      "good name": ""
    },
    {
      "name": "Arabian Spice",
      "hex": "#884332",
      "good name": ""
    },
    {
      "name": "Arabian Veil",
      "hex": "#c9fffa",
      "good name": ""
    },
    {
      "name": "Arabic Coffee",
      "hex": "#6f4d3f",
      "good name": ""
    },
    {
      "name": "Arabica Mint",
      "hex": "#c0ffee",
      "good name": "x"
    },
    {
      "name": "Arable Brown",
      "hex": "#7a552e",
      "good name": ""
    },
    {
      "name": "Aragon",
      "hex": "#b06455",
      "good name": ""
    },
    {
      "name": "Aragon Green",
      "hex": "#47ba87",
      "good name": ""
    },
    {
      "name": "Aragonite",
      "hex": "#e4e0d4",
      "good name": ""
    },
    {
      "name": "Aragonite Blue",
      "hex": "#6a95b1",
      "good name": ""
    },
    {
      "name": "Aragonite Grey",
      "hex": "#948e96",
      "good name": ""
    },
    {
      "name": "Aragonite White",
      "hex": "#f3f1f3",
      "good name": ""
    },
    {
      "name": "Araigaki Orange",
      "hex": "#ec8254",
      "good name": ""
    },
    {
      "name": "Arame Seaweed Green",
      "hex": "#3f4635",
      "good name": ""
    },
    {
      "name": "Arapawa",
      "hex": "#274a5d",
      "good name": ""
    },
    {
      "name": "Arathi Highlands",
      "hex": "#93a344",
      "good name": ""
    },
    {
      "name": "Araucana Egg",
      "hex": "#add8e1",
      "good name": ""
    },
    {
      "name": "Arava",
      "hex": "#a18d71",
      "good name": ""
    },
    {
      "name": "Arbol De Tamarindo",
      "hex": "#cda182",
      "good name": ""
    },
    {
      "name": "Arbor Hollow",
      "hex": "#c1c2b4",
      "good name": ""
    },
    {
      "name": "Arbor Vitae",
      "hex": "#bbc3ad",
      "good name": ""
    },
    {
      "name": "Arboretum",
      "hex": "#70ba9f",
      "good name": ""
    },
    {
      "name": "Arc Light",
      "hex": "#ccddff",
      "good name": ""
    },
    {
      "name": "Arcade Fire",
      "hex": "#ee3311",
      "good name": "x"
    },
    {
      "name": "Arcade Glow",
      "hex": "#0022cc",
      "good name": ""
    },
    {
      "name": "Arcade White",
      "hex": "#edebe2",
      "good name": ""
    },
    {
      "name": "Arcadia",
      "hex": "#00a28a",
      "good name": ""
    },
    {
      "name": "Arcadian Green",
      "hex": "#a3c893",
      "good name": ""
    },
    {
      "name": "Arcala Green",
      "hex": "#3b6c3f",
      "good name": ""
    },
    {
      "name": "Arcane",
      "hex": "#98687e",
      "good name": ""
    },
    {
      "name": "Arcavia Red",
      "hex": "#6a0002",
      "good name": ""
    },
    {
      "name": "Archaeological Site",
      "hex": "#8e785c",
      "good name": ""
    },
    {
      "name": "Archeology",
      "hex": "#6e6a5e",
      "good name": "x"
    },
    {
      "name": "Architecture Blue",
      "hex": "#7195a6",
      "good name": ""
    },
    {
      "name": "Architecture Grey",
      "hex": "#6b6a69",
      "good name": ""
    },
    {
      "name": "Archivist",
      "hex": "#9f8c73",
      "good name": ""
    },
    {
      "name": "Arctic",
      "hex": "#648589",
      "good name": "x"
    },
    {
      "name": "Arctic Blue",
      "hex": "#95d6dc",
      "good name": ""
    },
    {
      "name": "Arctic Cotton",
      "hex": "#e6e3df",
      "good name": ""
    },
    {
      "name": "Arctic Daisy",
      "hex": "#ebe4be",
      "good name": ""
    },
    {
      "name": "Arctic Dawn",
      "hex": "#e3e5e8",
      "good name": ""
    },
    {
      "name": "Arctic Dusk",
      "hex": "#735b6a",
      "good name": ""
    },
    {
      "name": "Arctic Feelings",
      "hex": "#afbec1",
      "good name": ""
    },
    {
      "name": "Arctic Flow",
      "hex": "#daeae4",
      "good name": ""
    },
    {
      "name": "Arctic Fox",
      "hex": "#e7e7e2",
      "good name": ""
    },
    {
      "name": "Arctic Glow",
      "hex": "#c9d1e9",
      "good name": ""
    },
    {
      "name": "Arctic Green",
      "hex": "#45bcb3",
      "good name": ""
    },
    {
      "name": "Arctic Grey",
      "hex": "#bbccdd",
      "good name": ""
    },
    {
      "name": "Arctic Ice",
      "hex": "#bfc7d6",
      "good name": ""
    },
    {
      "name": "Arctic Lichen Green",
      "hex": "#6f7872",
      "good name": ""
    },
    {
      "name": "Arctic Lime",
      "hex": "#d0ff14",
      "good name": ""
    },
    {
      "name": "Arctic Nights",
      "hex": "#345c61",
      "good name": ""
    },
    {
      "name": "Arctic Ocean",
      "hex": "#66c3d0",
      "good name": ""
    },
    {
      "name": "Arctic Paradise",
      "hex": "#b8dff8",
      "good name": ""
    },
    {
      "name": "Arctic Rain",
      "hex": "#c7daed",
      "good name": ""
    },
    {
      "name": "Arctic Rose",
      "hex": "#b7abb0",
      "good name": ""
    },
    {
      "name": "Arctic Shadow",
      "hex": "#d9e5eb",
      "good name": ""
    },
    {
      "name": "Arctic Water",
      "hex": "#00fcfc",
      "good name": "x"
    },
    {
      "name": "Arctic White",
      "hex": "#e9eae7",
      "good name": ""
    },
    {
      "name": "Ardcoat",
      "hex": "#e2dedf",
      "good name": ""
    },
    {
      "name": "Ardent Coral",
      "hex": "#e5756a",
      "good name": ""
    },
    {
      "name": "Ardósia",
      "hex": "#232f2c",
      "good name": ""
    },
    {
      "name": "Ares Red",
      "hex": "#dd2200",
      "good name": ""
    },
    {
      "name": "Ares Shadow",
      "hex": "#62584c",
      "good name": ""
    },
    {
      "name": "Argan Oil",
      "hex": "#8b593e",
      "good name": "x"
    },
    {
      "name": "Argent",
      "hex": "#888888",
      "good name": "x"
    },
    {
      "name": "Argos",
      "hex": "#bdbdb7",
      "good name": ""
    },
    {
      "name": "Argyle",
      "hex": "#348a5d",
      "good name": ""
    },
    {
      "name": "Argyle Purple",
      "hex": "#895c79",
      "good name": ""
    },
    {
      "name": "Argyle Rose",
      "hex": "#c48677",
      "good name": ""
    },
    {
      "name": "Aria",
      "hex": "#e3e4e2",
      "good name": ""
    },
    {
      "name": "Aria Ivory",
      "hex": "#f9e8d8",
      "good name": ""
    },
    {
      "name": "Arid Landscape",
      "hex": "#dcd6c6",
      "good name": ""
    },
    {
      "name": "Arid Plains",
      "hex": "#b6b4a9",
      "good name": ""
    },
    {
      "name": "Ariel",
      "hex": "#aed7ea",
      "good name": "x"
    },
    {
      "name": "Ariel's Delight",
      "hex": "#b2a5d3",
      "good name": ""
    },
    {
      "name": "Aristocrat Ivory",
      "hex": "#faf0df",
      "good name": ""
    },
    {
      "name": "Aristocrat Peach",
      "hex": "#ecceb9",
      "good name": ""
    },
    {
      "name": "Aristocratic Pink",
      "hex": "#ddaacc",
      "good name": ""
    },
    {
      "name": "Aristocratic Velvet",
      "hex": "#980b4a",
      "good name": "x"
    },
    {
      "name": "Arizona",
      "hex": "#eeb377",
      "good name": ""
    },
    {
      "name": "Arizona Clay",
      "hex": "#ad735a",
      "good name": ""
    },
    {
      "name": "Arizona Stone",
      "hex": "#00655a",
      "good name": ""
    },
    {
      "name": "Arizona Sunrise",
      "hex": "#ebbcb9",
      "good name": ""
    },
    {
      "name": "Arizona Tan",
      "hex": "#e5bc82",
      "good name": ""
    },
    {
      "name": "Arizona Tree Frog",
      "hex": "#669264",
      "good name": ""
    },
    {
      "name": "Armada",
      "hex": "#536762",
      "good name": ""
    },
    {
      "name": "Armadillo",
      "hex": "#484a46",
      "good name": "x"
    },
    {
      "name": "Armadillo Egg",
      "hex": "#7d4638",
      "good name": ""
    },
    {
      "name": "Armageddon Dunes",
      "hex": "#926a25",
      "good name": ""
    },
    {
      "name": "Armageddon Dust",
      "hex": "#d3a907",
      "good name": ""
    },
    {
      "name": "Armagnac",
      "hex": "#ad916c",
      "good name": ""
    },
    {
      "name": "Armor",
      "hex": "#74857f",
      "good name": "x"
    },
    {
      "name": "Armor Wash",
      "hex": "#030303",
      "good name": ""
    },
    {
      "name": "Armored Steel",
      "hex": "#747769",
      "good name": ""
    },
    {
      "name": "Armory",
      "hex": "#6a6b65",
      "good name": ""
    },
    {
      "name": "Army Canvas",
      "hex": "#5b6f61",
      "good name": ""
    },
    {
      "name": "Army Green",
      "hex": "#4b5320",
      "good name": ""
    },
    {
      "name": "Army Issue",
      "hex": "#8a806b",
      "good name": ""
    },
    {
      "name": "Army Issue Green",
      "hex": "#838254",
      "good name": ""
    },
    {
      "name": "Arnica",
      "hex": "#bf8f37",
      "good name": ""
    },
    {
      "name": "Arnica Yellow",
      "hex": "#e59b00",
      "good name": ""
    },
    {
      "name": "Aroma",
      "hex": "#d3c1c5",
      "good name": ""
    },
    {
      "name": "Aroma Blue",
      "hex": "#96d2d6",
      "good name": ""
    },
    {
      "name": "Aroma Garden",
      "hex": "#a1c4a8",
      "good name": ""
    },
    {
      "name": "Aromatic",
      "hex": "#706986",
      "good name": ""
    },
    {
      "name": "Aromatic Breeze",
      "hex": "#ffcecb",
      "good name": ""
    },
    {
      "name": "Arona",
      "hex": "#879ba3",
      "good name": ""
    },
    {
      "name": "Arousing Alligator",
      "hex": "#776600",
      "good name": ""
    },
    {
      "name": "Arraign",
      "hex": "#5c546e",
      "good name": ""
    },
    {
      "name": "Arresting Auburn",
      "hex": "#5a3532",
      "good name": ""
    },
    {
      "name": "Arrow Creek",
      "hex": "#927257",
      "good name": ""
    },
    {
      "name": "Arrow Quiver",
      "hex": "#c7a998",
      "good name": ""
    },
    {
      "name": "Arrow Rock",
      "hex": "#a28440",
      "good name": ""
    },
    {
      "name": "Arrow Shaft",
      "hex": "#5c503a",
      "good name": ""
    },
    {
      "name": "Arrowhead",
      "hex": "#514b40",
      "good name": ""
    },
    {
      "name": "Arrowhead Lake",
      "hex": "#58728a",
      "good name": ""
    },
    {
      "name": "Arrowhead White",
      "hex": "#f9eaeb",
      "good name": ""
    },
    {
      "name": "Arrowroot",
      "hex": "#f8decf",
      "good name": ""
    },
    {
      "name": "Arrowroote",
      "hex": "#e4decf",
      "good name": ""
    },
    {
      "name": "Arrowtown",
      "hex": "#827a67",
      "good name": ""
    },
    {
      "name": "Arrowwood",
      "hex": "#bc8d1f",
      "good name": "x"
    },
    {
      "name": "Arsenic",
      "hex": "#3b444b",
      "good name": ""
    },
    {
      "name": "Art and Craft",
      "hex": "#896956",
      "good name": ""
    },
    {
      "name": "Art Deco Pink",
      "hex": "#cdaca0",
      "good name": ""
    },
    {
      "name": "Art Deco Red",
      "hex": "#623745",
      "good name": ""
    },
    {
      "name": "Art District",
      "hex": "#94897c",
      "good name": ""
    },
    {
      "name": "Art House Pink",
      "hex": "#c06f70",
      "good name": ""
    },
    {
      "name": "Art Nouveau Glass",
      "hex": "#a29aa0",
      "good name": ""
    },
    {
      "name": "Art Nouveau Green",
      "hex": "#9c932f",
      "good name": ""
    },
    {
      "name": "Art Nouveau Violet",
      "hex": "#a08994",
      "good name": ""
    },
    {
      "name": "Artemis",
      "hex": "#d2a96e",
      "good name": ""
    },
    {
      "name": "Artemis Silver",
      "hex": "#ddddee",
      "good name": ""
    },
    {
      "name": "Artemisia",
      "hex": "#e3ebea",
      "good name": ""
    },
    {
      "name": "Arterial Blood Red",
      "hex": "#711518",
      "good name": ""
    },
    {
      "name": "Artesian Pool",
      "hex": "#a6bee1",
      "good name": ""
    },
    {
      "name": "Artesian Water",
      "hex": "#007db6",
      "good name": ""
    },
    {
      "name": "Artesian Well",
      "hex": "#5eb2aa",
      "good name": ""
    },
    {
      "name": "Artful Aqua",
      "hex": "#91b4b3",
      "good name": ""
    },
    {
      "name": "Artful Magenta",
      "hex": "#80505d",
      "good name": ""
    },
    {
      "name": "Artichoke",
      "hex": "#8f9779",
      "good name": "x"
    },
    {
      "name": "Artichoke Dip",
      "hex": "#a19676",
      "good name": ""
    },
    {
      "name": "Artichoke Green",
      "hex": "#4b6d41",
      "good name": ""
    },
    {
      "name": "Artichoke Mauve",
      "hex": "#c19aa5",
      "good name": ""
    },
    {
      "name": "Artifact",
      "hex": "#ca9d8d",
      "good name": ""
    },
    {
      "name": "Artificial Strawberry",
      "hex": "#ff43a4",
      "good name": ""
    },
    {
      "name": "Artificial Turf",
      "hex": "#41b45c",
      "good name": ""
    },
    {
      "name": "Artillery",
      "hex": "#746f67",
      "good name": ""
    },
    {
      "name": "Artisan",
      "hex": "#8f5c45",
      "good name": ""
    },
    {
      "name": "Artisan Crafts",
      "hex": "#b99779",
      "good name": ""
    },
    {
      "name": "Artisan Tan",
      "hex": "#b09879",
      "good name": ""
    },
    {
      "name": "Artisan Tea",
      "hex": "#dac2af",
      "good name": ""
    },
    {
      "name": "Artisan Tile",
      "hex": "#845e40",
      "good name": ""
    },
    {
      "name": "Artisans Gold",
      "hex": "#f2ab46",
      "good name": "x"
    },
    {
      "name": "Artist Blue",
      "hex": "#01343a",
      "good name": ""
    },
    {
      "name": "Artist's Canvas",
      "hex": "#eee4d2",
      "good name": ""
    },
    {
      "name": "Artist's Shadow",
      "hex": "#a1969b",
      "good name": ""
    },
    {
      "name": "Artiste",
      "hex": "#987387",
      "good name": ""
    },
    {
      "name": "Artistic License",
      "hex": "#434053",
      "good name": ""
    },
    {
      "name": "Artistic Stone",
      "hex": "#5c6b65",
      "good name": ""
    },
    {
      "name": "Artistic Taupe",
      "hex": "#c3b1ac",
      "good name": ""
    },
    {
      "name": "Artistic Violet",
      "hex": "#d0d2e9",
      "good name": ""
    },
    {
      "name": "Arts & Crafts Gold",
      "hex": "#f5c68b",
      "good name": ""
    },
    {
      "name": "Arts and Crafts",
      "hex": "#7d6549",
      "good name": ""
    },
    {
      "name": "Aruba Aqua",
      "hex": "#d1ded3",
      "good name": ""
    },
    {
      "name": "Aruba Blue",
      "hex": "#81d7d3",
      "good name": ""
    },
    {
      "name": "Aruba Green",
      "hex": "#54b490",
      "good name": ""
    },
    {
      "name": "Arugula",
      "hex": "#75ad5b",
      "good name": "x"
    },
    {
      "name": "Arylide Yellow",
      "hex": "#e9d66b",
      "good name": ""
    },
    {
      "name": "Asagi Blue",
      "hex": "#48929b",
      "good name": ""
    },
    {
      "name": "Asagi Koi",
      "hex": "#455559",
      "good name": ""
    },
    {
      "name": "Asagi Yellow",
      "hex": "#f7bb7d",
      "good name": ""
    },
    {
      "name": "Asfar Yellow",
      "hex": "#fcef01",
      "good name": ""
    },
    {
      "name": "Ash",
      "hex": "#bebaa7",
      "good name": "x"
    },
    {
      "name": "Ash Blonde",
      "hex": "#d7bea5",
      "good name": ""
    },
    {
      "name": "Ash Blue",
      "hex": "#c0c6c9",
      "good name": ""
    },
    {
      "name": "Ash Brown",
      "hex": "#98623c",
      "good name": ""
    },
    {
      "name": "Ash Cherry Blossom",
      "hex": "#e8d3d1",
      "good name": ""
    },
    {
      "name": "Ash Gold",
      "hex": "#8c6f54",
      "good name": ""
    },
    {
      "name": "Ash Grey",
      "hex": "#c1b5a9",
      "good name": ""
    },
    {
      "name": "Ash Grove",
      "hex": "#b9b3bf",
      "good name": ""
    },
    {
      "name": "Ash Hollow",
      "hex": "#a88e8b",
      "good name": ""
    },
    {
      "name": "Ash in the Air",
      "hex": "#d9dde5",
      "good name": ""
    },
    {
      "name": "Ash Mauve",
      "hex": "#737486",
      "good name": ""
    },
    {
      "name": "Ash Pink",
      "hex": "#998e91",
      "good name": ""
    },
    {
      "name": "Ash Plum",
      "hex": "#e8d3c7",
      "good name": ""
    },
    {
      "name": "Ash Rose",
      "hex": "#b5817d",
      "good name": ""
    },
    {
      "name": "Ash to Ash",
      "hex": "#4e4e4c",
      "good name": ""
    },
    {
      "name": "Ash Tree",
      "hex": "#aabb99",
      "good name": ""
    },
    {
      "name": "Ash Tree Bark",
      "hex": "#cecfd6",
      "good name": ""
    },
    {
      "name": "Ash Violet",
      "hex": "#9695a4",
      "good name": ""
    },
    {
      "name": "Ash White",
      "hex": "#e9e4d4",
      "good name": ""
    },
    {
      "name": "Ash Yellow",
      "hex": "#f0bd7e",
      "good name": ""
    },
    {
      "name": "Ashberry",
      "hex": "#b495a4",
      "good name": ""
    },
    {
      "name": "Ashen",
      "hex": "#c9bfb2",
      "good name": ""
    },
    {
      "name": "Ashen Brown",
      "hex": "#994444",
      "good name": ""
    },
    {
      "name": "Ashen Plum",
      "hex": "#9b9092",
      "good name": ""
    },
    {
      "name": "Ashen Tan",
      "hex": "#d3cabf",
      "good name": ""
    },
    {
      "name": "Ashen Wind",
      "hex": "#94a9b7",
      "good name": ""
    },
    {
      "name": "Ashenvale Nights",
      "hex": "#104071",
      "good name": ""
    },
    {
      "name": "Asher Benjamin",
      "hex": "#45575e",
      "good name": ""
    },
    {
      "name": "Ashes",
      "hex": "#b8b5ad",
      "good name": ""
    },
    {
      "name": "Ashes to Ashes",
      "hex": "#bbb3a2",
      "good name": "x"
    },
    {
      "name": "Ashley Blue",
      "hex": "#8699ab",
      "good name": ""
    },
    {
      "name": "Ashlite",
      "hex": "#a7a49f",
      "good name": ""
    },
    {
      "name": "Ashton Blue",
      "hex": "#4a79ba",
      "good name": ""
    },
    {
      "name": "Ashton Skies",
      "hex": "#7b8eb0",
      "good name": ""
    },
    {
      "name": "Ashwood",
      "hex": "#bcc4bd",
      "good name": ""
    },
    {
      "name": "Asian Fusion",
      "hex": "#ece0cd",
      "good name": ""
    },
    {
      "name": "Asian Ivory",
      "hex": "#e8e0cd",
      "good name": ""
    },
    {
      "name": "Asian Jute",
      "hex": "#d4b78f",
      "good name": ""
    },
    {
      "name": "Asian Pear",
      "hex": "#ae9156",
      "good name": ""
    },
    {
      "name": "Asian Violet",
      "hex": "#8b818c",
      "good name": ""
    },
    {
      "name": "Āsmānī Sky",
      "hex": "#88ddbb",
      "good name": ""
    },
    {
      "name": "Aspara",
      "hex": "#70b2cc",
      "good name": ""
    },
    {
      "name": "Asparagus",
      "hex": "#77ab56",
      "good name": "x"
    },
    {
      "name": "Asparagus Cream",
      "hex": "#96af54",
      "good name": ""
    },
    {
      "name": "Asparagus Fern",
      "hex": "#b9cb5a",
      "good name": ""
    },
    {
      "name": "Asparagus Green",
      "hex": "#d2cdb4",
      "good name": ""
    },
    {
      "name": "Asparagus Sprig",
      "hex": "#576f44",
      "good name": ""
    },
    {
      "name": "Asparagus Yellow",
      "hex": "#dac98e",
      "good name": ""
    },
    {
      "name": "Aspen Aura",
      "hex": "#83a494",
      "good name": ""
    },
    {
      "name": "Aspen Branch",
      "hex": "#c6bcad",
      "good name": ""
    },
    {
      "name": "Aspen Gold",
      "hex": "#ffd662",
      "good name": ""
    },
    {
      "name": "Aspen Green",
      "hex": "#7e9b76",
      "good name": ""
    },
    {
      "name": "Aspen Hush",
      "hex": "#6a8d88",
      "good name": ""
    },
    {
      "name": "Aspen Mist",
      "hex": "#cfd7cb",
      "good name": ""
    },
    {
      "name": "Aspen Snow",
      "hex": "#f0f0e7",
      "good name": ""
    },
    {
      "name": "Aspen Valley",
      "hex": "#687f7a",
      "good name": ""
    },
    {
      "name": "Aspen Whisper",
      "hex": "#edf1e3",
      "good name": ""
    },
    {
      "name": "Aspen Yellow",
      "hex": "#f6df9f",
      "good name": ""
    },
    {
      "name": "Asphalt",
      "hex": "#130a06",
      "good name": "x"
    },
    {
      "name": "Asphalt Blue",
      "hex": "#474c55",
      "good name": ""
    },
    {
      "name": "Asphalt Grey",
      "hex": "#5e5e5d",
      "good name": ""
    },
    {
      "name": "Aspiring Blue",
      "hex": "#a2c1c0",
      "good name": ""
    },
    {
      "name": "Assassin",
      "hex": "#2d4f83",
      "good name": "x"
    },
    {
      "name": "Assassin's Red",
      "hex": "#f60206",
      "good name": "x"
    },
    {
      "name": "Assateague Sand",
      "hex": "#e1d0b2",
      "good name": ""
    },
    {
      "name": "Assault",
      "hex": "#1c4374",
      "good name": ""
    },
    {
      "name": "Aster",
      "hex": "#867ba9",
      "good name": "x"
    },
    {
      "name": "Aster Flower Blue",
      "hex": "#9bacd8",
      "good name": ""
    },
    {
      "name": "Aster Petal",
      "hex": "#d4dae2",
      "good name": ""
    },
    {
      "name": "Aster Purple",
      "hex": "#7d74a8",
      "good name": ""
    },
    {
      "name": "Aster Violetta",
      "hex": "#8f629a",
      "good name": ""
    },
    {
      "name": "Astilbe",
      "hex": "#f091a9",
      "good name": ""
    },
    {
      "name": "Astorath Red",
      "hex": "#dd482b",
      "good name": ""
    },
    {
      "name": "Astra",
      "hex": "#edd5a6",
      "good name": ""
    },
    {
      "name": "Astral",
      "hex": "#376f89",
      "good name": "x"
    },
    {
      "name": "Astral Aura",
      "hex": "#363151",
      "good name": ""
    },
    {
      "name": "Astral Spirit",
      "hex": "#8ec2e7",
      "good name": ""
    },
    {
      "name": "Astro Arcade Green",
      "hex": "#77ff77",
      "good name": ""
    },
    {
      "name": "Astro Bound",
      "hex": "#899fb9",
      "good name": ""
    },
    {
      "name": "Astro Nautico",
      "hex": "#5383c3",
      "good name": ""
    },
    {
      "name": "Astro Purple",
      "hex": "#6d5acf",
      "good name": ""
    },
    {
      "name": "Astro Sunset",
      "hex": "#937874",
      "good name": ""
    },
    {
      "name": "Astro Zinger",
      "hex": "#797eb5",
      "good name": ""
    },
    {
      "name": "Astrogranite",
      "hex": "#757679",
      "good name": ""
    },
    {
      "name": "Astrogranite Debris",
      "hex": "#3b424c",
      "good name": ""
    },
    {
      "name": "Astrolabe Reef",
      "hex": "#2d96ce",
      "good name": ""
    },
    {
      "name": "Astronaut",
      "hex": "#445172",
      "good name": ""
    },
    {
      "name": "Astronaut Blue",
      "hex": "#214559",
      "good name": ""
    },
    {
      "name": "Astronomer",
      "hex": "#e8f2eb",
      "good name": ""
    },
    {
      "name": "Astronomical",
      "hex": "#474b4a",
      "good name": ""
    },
    {
      "name": "Astronomicon Grey",
      "hex": "#6b7c85",
      "good name": ""
    },
    {
      "name": "Astroscopus Grey",
      "hex": "#afb4b6",
      "good name": ""
    },
    {
      "name": "Astroturf",
      "hex": "#67a159",
      "good name": ""
    },
    {
      "name": "Asurmen Blue Wash",
      "hex": "#273e51",
      "good name": ""
    },
    {
      "name": "Aswad Black",
      "hex": "#17181c",
      "good name": ""
    },
    {
      "name": "At Ease",
      "hex": "#e7eee1",
      "good name": ""
    },
    {
      "name": "At Ease Soldier",
      "hex": "#9e9985",
      "good name": ""
    },
    {
      "name": "At The Beach",
      "hex": "#e7d9b9",
      "good name": ""
    },
    {
      "name": "Atelier",
      "hex": "#a3abb8",
      "good name": ""
    },
    {
      "name": "Ateneo Blue",
      "hex": "#003a6c",
      "good name": ""
    },
    {
      "name": "Athena Blue",
      "hex": "#66ddff",
      "good name": ""
    },
    {
      "name": "Athenian Green",
      "hex": "#92a18a",
      "good name": ""
    },
    {
      "name": "Athens Grey",
      "hex": "#dcdddd",
      "good name": ""
    },
    {
      "name": "Athonian Camoshade",
      "hex": "#6d8e44",
      "good name": ""
    },
    {
      "name": "Aths Special",
      "hex": "#d5cbb2",
      "good name": ""
    },
    {
      "name": "Atlantic Blue",
      "hex": "#008997",
      "good name": ""
    },
    {
      "name": "Atlantic Breeze",
      "hex": "#cbe1ee",
      "good name": ""
    },
    {
      "name": "Atlantic Charter",
      "hex": "#2b2f41",
      "good name": ""
    },
    {
      "name": "Atlantic Deep",
      "hex": "#274e55",
      "good name": ""
    },
    {
      "name": "Atlantic Depths",
      "hex": "#001166",
      "good name": ""
    },
    {
      "name": "Atlantic Fig Snail",
      "hex": "#d7ceb9",
      "good name": ""
    },
    {
      "name": "Atlantic Gull",
      "hex": "#4b8eb0",
      "good name": ""
    },
    {
      "name": "Atlantic Mystique",
      "hex": "#00629a",
      "good name": ""
    },
    {
      "name": "Atlantic Ocean",
      "hex": "#a7d8e4",
      "good name": ""
    },
    {
      "name": "Atlantic Sand",
      "hex": "#dcd5d2",
      "good name": ""
    },
    {
      "name": "Atlantic Shoreline",
      "hex": "#708189",
      "good name": ""
    },
    {
      "name": "Atlantic Tide",
      "hex": "#3e586e",
      "good name": ""
    },
    {
      "name": "Atlantic Tulip",
      "hex": "#b598c3",
      "good name": ""
    },
    {
      "name": "Atlantic Wave",
      "hex": "#3d797c",
      "good name": ""
    },
    {
      "name": "Atlantic Waves",
      "hex": "#264243",
      "good name": ""
    },
    {
      "name": "Atlantis",
      "hex": "#336172",
      "good name": "x"
    },
    {
      "name": "Atlantis Myth",
      "hex": "#006477",
      "good name": ""
    },
    {
      "name": "Atlas Cedar Green",
      "hex": "#667a6e",
      "good name": ""
    },
    {
      "name": "Atlas Red",
      "hex": "#82193a",
      "good name": ""
    },
    {
      "name": "Atlas White",
      "hex": "#ede5cf",
      "good name": ""
    },
    {
      "name": "Atmosphere",
      "hex": "#0099dd",
      "good name": ""
    },
    {
      "name": "Atmospheric",
      "hex": "#899697",
      "good name": ""
    },
    {
      "name": "Atmospheric Pressure",
      "hex": "#c2d0e1",
      "good name": ""
    },
    {
      "name": "Atmospheric Soft Blue",
      "hex": "#ace1f0",
      "good name": ""
    },
    {
      "name": "Atoll",
      "hex": "#2b797a",
      "good name": ""
    },
    {
      "name": "Atoll Sand",
      "hex": "#ffcf9e",
      "good name": ""
    },
    {
      "name": "Atom Blue",
      "hex": "#8f9cac",
      "good name": ""
    },
    {
      "name": "Atomic",
      "hex": "#3d4b52",
      "good name": ""
    },
    {
      "name": "Atomic Lime",
      "hex": "#b9ff03",
      "good name": "x"
    },
    {
      "name": "Atomic Pink",
      "hex": "#fb7efd",
      "good name": "x"
    },
    {
      "name": "Atomic Tangerine",
      "hex": "#ff9966",
      "good name": "x"
    },
    {
      "name": "Atrium White",
      "hex": "#f1eee4",
      "good name": ""
    },
    {
      "name": "Attar of Rose",
      "hex": "#994240",
      "good name": ""
    },
    {
      "name": "Attica",
      "hex": "#a1bca9",
      "good name": ""
    },
    {
      "name": "Attitude",
      "hex": "#a48884",
      "good name": ""
    },
    {
      "name": "Attitude Grey",
      "hex": "#7c7d75",
      "good name": ""
    },
    {
      "name": "Attorney",
      "hex": "#3f4258",
      "good name": ""
    },
    {
      "name": "Au Chico",
      "hex": "#9e6759",
      "good name": ""
    },
    {
      "name": "Au Gratin",
      "hex": "#ff9d45",
      "good name": ""
    },
    {
      "name": "Au Natural",
      "hex": "#e5e1ce",
      "good name": ""
    },
    {
      "name": "Au Naturel",
      "hex": "#e8cac0",
      "good name": ""
    },
    {
      "name": "Auberge",
      "hex": "#3f3130",
      "good name": ""
    },
    {
      "name": "Aubergine",
      "hex": "#372528",
      "good name": "x"
    },
    {
      "name": "Aubergine Flesh",
      "hex": "#f2e4dd",
      "good name": ""
    },
    {
      "name": "Aubergine Green",
      "hex": "#8b762c",
      "good name": ""
    },
    {
      "name": "Aubergine Grey",
      "hex": "#6e5861",
      "good name": ""
    },
    {
      "name": "Aubergine Mauve",
      "hex": "#3b2741",
      "good name": ""
    },
    {
      "name": "Aubergine Perl",
      "hex": "#5500aa",
      "good name": ""
    },
    {
      "name": "Auburn",
      "hex": "#712f2c",
      "good name": ""
    },
    {
      "name": "Auburn Glaze",
      "hex": "#b58271",
      "good name": ""
    },
    {
      "name": "Auburn Lights",
      "hex": "#78342f",
      "good name": ""
    },
    {
      "name": "Auburn Wave",
      "hex": "#d8a394",
      "good name": ""
    },
    {
      "name": "Audition",
      "hex": "#b5acb7",
      "good name": ""
    },
    {
      "name": "Audrey's Blush",
      "hex": "#ae8087",
      "good name": ""
    },
    {
      "name": "Auger Shell",
      "hex": "#9f9292",
      "good name": ""
    },
    {
      "name": "August Moon",
      "hex": "#e6e1d6",
      "good name": ""
    },
    {
      "name": "August Morning",
      "hex": "#ffd79d",
      "good name": ""
    },
    {
      "name": "Aumbry",
      "hex": "#7c7469",
      "good name": ""
    },
    {
      "name": "Aunt Violet",
      "hex": "#7c0087",
      "good name": ""
    },
    {
      "name": "Aura",
      "hex": "#b2a8a1",
      "good name": ""
    },
    {
      "name": "Aura Orange",
      "hex": "#b4262a",
      "good name": ""
    },
    {
      "name": "Aura White",
      "hex": "#dee2e4",
      "good name": ""
    },
    {
      "name": "Aureolin",
      "hex": "#fdee00",
      "good name": ""
    },
    {
      "name": "Auric",
      "hex": "#c48919",
      "good name": ""
    },
    {
      "name": "Auric Armour Gold",
      "hex": "#e8bc6d",
      "good name": ""
    },
    {
      "name": "Aurichalcite",
      "hex": "#32ffdc",
      "good name": ""
    },
    {
      "name": "Auricula Purple",
      "hex": "#533552",
      "good name": ""
    },
    {
      "name": "AuroMetalSaurus",
      "hex": "#6e7f80",
      "good name": ""
    },
    {
      "name": "Aurora",
      "hex": "#eddd59",
      "good name": "x"
    },
    {
      "name": "Aurora Brown",
      "hex": "#6a4238",
      "good name": ""
    },
    {
      "name": "Aurora Green",
      "hex": "#6adc99",
      "good name": ""
    },
    {
      "name": "Aurora Grey",
      "hex": "#d3c5c4",
      "good name": ""
    },
    {
      "name": "Aurora Magenta",
      "hex": "#963b60",
      "good name": ""
    },
    {
      "name": "Aurora Orange",
      "hex": "#ec7042",
      "good name": ""
    },
    {
      "name": "Aurora Pink",
      "hex": "#e881a6",
      "good name": ""
    },
    {
      "name": "Aurora Red",
      "hex": "#b93a32",
      "good name": ""
    },
    {
      "name": "Aurora Splendor",
      "hex": "#595682",
      "good name": ""
    },
    {
      "name": "Austere",
      "hex": "#726848",
      "good name": ""
    },
    {
      "name": "Austere Grey",
      "hex": "#bebfb2",
      "good name": ""
    },
    {
      "name": "Australian Jade",
      "hex": "#84a194",
      "good name": ""
    },
    {
      "name": "Australian Mint",
      "hex": "#eff8aa",
      "good name": ""
    },
    {
      "name": "Australien",
      "hex": "#cc9911",
      "good name": ""
    },
    {
      "name": "Austrian Ice",
      "hex": "#dee6e7",
      "good name": ""
    },
    {
      "name": "Authentic Brown",
      "hex": "#6b5446",
      "good name": ""
    },
    {
      "name": "Authentic Tan",
      "hex": "#eaddc6",
      "good name": ""
    },
    {
      "name": "Autonomous",
      "hex": "#c6c7c5",
      "good name": ""
    },
    {
      "name": "Autumn Air",
      "hex": "#d2a888",
      "good name": ""
    },
    {
      "name": "Autumn Apple Yellow",
      "hex": "#cda449",
      "good name": ""
    },
    {
      "name": "Autumn Arrival",
      "hex": "#f9986f",
      "good name": ""
    },
    {
      "name": "Autumn Ashes",
      "hex": "#816b68",
      "good name": ""
    },
    {
      "name": "Autumn Avenue",
      "hex": "#e3ad59",
      "good name": ""
    },
    {
      "name": "Autumn Bark",
      "hex": "#9d6f46",
      "good name": ""
    },
    {
      "name": "Autumn Blaze",
      "hex": "#d9922e",
      "good name": ""
    },
    {
      "name": "Autumn Blonde",
      "hex": "#eed0ae",
      "good name": ""
    },
    {
      "name": "Autumn Bloom",
      "hex": "#ffe0cb",
      "good name": ""
    },
    {
      "name": "Autumn Blush",
      "hex": "#e4d1c0",
      "good name": ""
    },
    {
      "name": "Autumn Child",
      "hex": "#fbe6c1",
      "good name": ""
    },
    {
      "name": "Autumn Crocodile",
      "hex": "#447744",
      "good name": "x"
    },
    {
      "name": "Autumn Fall",
      "hex": "#67423b",
      "good name": ""
    },
    {
      "name": "Autumn Fern",
      "hex": "#507b49",
      "good name": ""
    },
    {
      "name": "Autumn Fest",
      "hex": "#be7d33",
      "good name": ""
    },
    {
      "name": "Autumn Festival",
      "hex": "#a28b36",
      "good name": ""
    },
    {
      "name": "Autumn Glaze",
      "hex": "#b3573f",
      "good name": ""
    },
    {
      "name": "Autumn Glory",
      "hex": "#ff8812",
      "good name": ""
    },
    {
      "name": "Autumn Glow",
      "hex": "#e5c382",
      "good name": ""
    },
    {
      "name": "Autumn Gold",
      "hex": "#7d623c",
      "good name": "x"
    },
    {
      "name": "Autumn Gourd",
      "hex": "#e6ae76",
      "good name": ""
    },
    {
      "name": "Autumn Grey",
      "hex": "#b2aba7",
      "good name": ""
    },
    {
      "name": "Autumn Haze",
      "hex": "#d4c2b1",
      "good name": ""
    },
    {
      "name": "Autumn Hills",
      "hex": "#784f50",
      "good name": ""
    },
    {
      "name": "Autumn Laurel",
      "hex": "#9d8d66",
      "good name": ""
    },
    {
      "name": "Autumn Leaf",
      "hex": "#b56a4c",
      "good name": ""
    },
    {
      "name": "Autumn Leaf Brown",
      "hex": "#7a560e",
      "good name": ""
    },
    {
      "name": "Autumn Leaf Orange",
      "hex": "#d07a04",
      "good name": ""
    },
    {
      "name": "Autumn Leaf Red",
      "hex": "#623836",
      "good name": ""
    },
    {
      "name": "Autumn Leaves",
      "hex": "#6e4440",
      "good name": ""
    },
    {
      "name": "Autumn Malt",
      "hex": "#cea48e",
      "good name": ""
    },
    {
      "name": "Autumn Maple",
      "hex": "#c46215",
      "good name": ""
    },
    {
      "name": "Autumn Meadow",
      "hex": "#acb78e",
      "good name": ""
    },
    {
      "name": "Autumn Mist",
      "hex": "#f7b486",
      "good name": ""
    },
    {
      "name": "Autumn Night",
      "hex": "#3b5861",
      "good name": ""
    },
    {
      "name": "Autumn Orange",
      "hex": "#ee9950",
      "good name": ""
    },
    {
      "name": "Autumn Orchid",
      "hex": "#9d9093",
      "good name": ""
    },
    {
      "name": "Autumn Pine Green",
      "hex": "#158078",
      "good name": ""
    },
    {
      "name": "Autumn Red",
      "hex": "#99451f",
      "good name": ""
    },
    {
      "name": "Autumn Ridge",
      "hex": "#9b423f",
      "good name": ""
    },
    {
      "name": "Autumn Robin",
      "hex": "#c2452d",
      "good name": ""
    },
    {
      "name": "Autumn Russet",
      "hex": "#a4746e",
      "good name": ""
    },
    {
      "name": "Autumn Sage",
      "hex": "#aea26e",
      "good name": ""
    },
    {
      "name": "Autumn Sunset",
      "hex": "#f38554",
      "good name": ""
    },
    {
      "name": "Autumn Umber",
      "hex": "#ae704f",
      "good name": ""
    },
    {
      "name": "Autumn White",
      "hex": "#fae2cf",
      "good name": ""
    },
    {
      "name": "Autumn Wind",
      "hex": "#fbd1b6",
      "good name": ""
    },
    {
      "name": "Autumn Wisteria",
      "hex": "#c9a0dc",
      "good name": ""
    },
    {
      "name": "Autumn Yellow",
      "hex": "#e99700",
      "good name": ""
    },
    {
      "name": "Autumn's Hill",
      "hex": "#ba7a61",
      "good name": ""
    },
    {
      "name": "Autumnal",
      "hex": "#a15325",
      "good name": "x"
    },
    {
      "name": "Avagddu Green",
      "hex": "#106b21",
      "good name": ""
    },
    {
      "name": "Avalon",
      "hex": "#799b96",
      "good name": ""
    },
    {
      "name": "Avant-Garde Pink",
      "hex": "#ff77ee",
      "good name": "x"
    },
    {
      "name": "Aventurine",
      "hex": "#576e6a",
      "good name": ""
    },
    {
      "name": "Avenue Tan",
      "hex": "#d2c2b0",
      "good name": ""
    },
    {
      "name": "Averland Sunset",
      "hex": "#ffaa1d",
      "good name": ""
    },
    {
      "name": "Aviary Blue",
      "hex": "#c6e3e8",
      "good name": ""
    },
    {
      "name": "Avid Apricot",
      "hex": "#f4c69f",
      "good name": ""
    },
    {
      "name": "Aviva",
      "hex": "#c5b47f",
      "good name": ""
    },
    {
      "name": "Avocado",
      "hex": "#568203",
      "good name": "x"
    },
    {
      "name": "Avocado Cream",
      "hex": "#b7bf6b",
      "good name": ""
    },
    {
      "name": "Avocado Dark Green",
      "hex": "#3e4826",
      "good name": ""
    },
    {
      "name": "Avocado Green",
      "hex": "#87a922",
      "good name": ""
    },
    {
      "name": "Avocado Pear",
      "hex": "#555337",
      "good name": ""
    },
    {
      "name": "Avocado Peel",
      "hex": "#39373b",
      "good name": ""
    },
    {
      "name": "Avocado Toast",
      "hex": "#90b134",
      "good name": ""
    },
    {
      "name": "Avocado Whip",
      "hex": "#cdd6b1",
      "good name": ""
    },
    {
      "name": "Awaken",
      "hex": "#a7a3bb",
      "good name": ""
    },
    {
      "name": "Awakened",
      "hex": "#e3dae9",
      "good name": ""
    },
    {
      "name": "Awakening",
      "hex": "#bb9e9b",
      "good name": ""
    },
    {
      "name": "Award Blue",
      "hex": "#315886",
      "good name": ""
    },
    {
      "name": "Award Night",
      "hex": "#54617d",
      "good name": ""
    },
    {
      "name": "Award Winning White",
      "hex": "#fef0de",
      "good name": "x"
    },
    {
      "name": "Awareness",
      "hex": "#e3ebb1",
      "good name": ""
    },
    {
      "name": "Awesome Aura",
      "hex": "#ccc1da",
      "good name": ""
    },
    {
      "name": "Awesome Violet",
      "hex": "#a7b2d4",
      "good name": ""
    },
    {
      "name": "Awkward Purple",
      "hex": "#d208cc",
      "good name": "x"
    },
    {
      "name": "Awning Red",
      "hex": "#90413e",
      "good name": ""
    },
    {
      "name": "Axe Handle",
      "hex": "#6b4730",
      "good name": ""
    },
    {
      "name": "Axinite",
      "hex": "#756050",
      "good name": ""
    },
    {
      "name": "Axis",
      "hex": "#bab6cb",
      "good name": ""
    },
    {
      "name": "Axolotl",
      "hex": "#fff0df",
      "good name": ""
    },
    {
      "name": "Ayahuasca Vine",
      "hex": "#665500",
      "good name": "x"
    },
    {
      "name": "Ayame Iris",
      "hex": "#763568",
      "good name": ""
    },
    {
      "name": "Ayrshire",
      "hex": "#a07254",
      "good name": ""
    },
    {
      "name": "Azalea",
      "hex": "#d42e5b",
      "good name": ""
    },
    {
      "name": "Azalea Flower",
      "hex": "#efc0cb",
      "good name": ""
    },
    {
      "name": "Azalea Leaf",
      "hex": "#4a6871",
      "good name": ""
    },
    {
      "name": "Azalea Pink",
      "hex": "#f9c0c4",
      "good name": ""
    },
    {
      "name": "Azeitona",
      "hex": "#a5b546",
      "good name": ""
    },
    {
      "name": "Azores Blue",
      "hex": "#0085a7",
      "good name": ""
    },
    {
      "name": "Azraq Blue",
      "hex": "#4c6cb3",
      "good name": ""
    },
    {
      "name": "Azshara Vein",
      "hex": "#b13916",
      "good name": ""
    },
    {
      "name": "Aztec",
      "hex": "#293432",
      "good name": "x"
    },
    {
      "name": "Aztec Aura",
      "hex": "#ffefbc",
      "good name": ""
    },
    {
      "name": "Aztec Brick",
      "hex": "#9e8352",
      "good name": ""
    },
    {
      "name": "Aztec Glimmer",
      "hex": "#e7b347",
      "good name": ""
    },
    {
      "name": "Aztec Gold",
      "hex": "#c39953",
      "good name": ""
    },
    {
      "name": "Aztec Jade",
      "hex": "#33bb88",
      "good name": ""
    },
    {
      "name": "Aztec Sky",
      "hex": "#4db5d7",
      "good name": ""
    },
    {
      "name": "Aztec Temple",
      "hex": "#84705b",
      "good name": "x"
    },
    {
      "name": "Aztec Turquoise",
      "hex": "#00d6e2",
      "good name": ""
    },
    {
      "name": "Aztec Warrior",
      "hex": "#bb0066",
      "good name": "x"
    },
    {
      "name": "Azuki Bean",
      "hex": "#96514d",
      "good name": ""
    },
    {
      "name": "Azuki Red",
      "hex": "#672422",
      "good name": ""
    },
    {
      "name": "Azul",
      "hex": "#1d5dec",
      "good name": ""
    },
    {
      "name": "Azul Caribe",
      "hex": "#0089c4",
      "good name": ""
    },
    {
      "name": "Azul Cielito Lindo",
      "hex": "#c9e3eb",
      "good name": ""
    },
    {
      "name": "Azul Pavo Real",
      "hex": "#537faf",
      "good name": ""
    },
    {
      "name": "Azul Petróleo",
      "hex": "#36454f",
      "good name": ""
    },
    {
      "name": "Azul Primavera",
      "hex": "#e2eff2",
      "good name": ""
    },
    {
      "name": "Azul Tequila",
      "hex": "#c0cfc7",
      "good name": ""
    },
    {
      "name": "Azul Turquesa",
      "hex": "#6abac4",
      "good name": ""
    },
    {
      "name": "Azure",
      "hex": "#007fff",
      "good name": "x"
    },
    {
      "name": "Azure Blue",
      "hex": "#4d91c6",
      "good name": ""
    },
    {
      "name": "Azure Dragon",
      "hex": "#053976",
      "good name": ""
    },
    {
      "name": "Azure Green Blue",
      "hex": "#006c81",
      "good name": ""
    },
    {
      "name": "Azure Hint",
      "hex": "#dddce1",
      "good name": ""
    },
    {
      "name": "Azure Lake",
      "hex": "#7bbbc8",
      "good name": ""
    },
    {
      "name": "Azure Mist",
      "hex": "#f0fff1",
      "good name": ""
    },
    {
      "name": "Azure Radiance",
      "hex": "#007f1f",
      "good name": ""
    },
    {
      "name": "Azure Sky",
      "hex": "#b0e0f6",
      "good name": ""
    },
    {
      "name": "Azure Tide",
      "hex": "#2b9890",
      "good name": ""
    },
    {
      "name": "Azurean",
      "hex": "#59bad9",
      "good name": ""
    },
    {
      "name": "Azureish White",
      "hex": "#dbe9f4",
      "good name": ""
    },
    {
      "name": "Azuremyst Isle",
      "hex": "#cc81f0",
      "good name": ""
    },
    {
      "name": "Azurite Water Green",
      "hex": "#497f73",
      "good name": ""
    },
    {
      "name": "B'dazzled Blue",
      "hex": "#2e5894",
      "good name": ""
    },
    {
      "name": "Baal Red Wash",
      "hex": "#610023",
      "good name": ""
    },
    {
      "name": "Baba Ganoush",
      "hex": "#eebb88",
      "good name": "x"
    },
    {
      "name": "Babbling Brook",
      "hex": "#becfcd",
      "good name": ""
    },
    {
      "name": "Babbling Creek",
      "hex": "#a7bad3",
      "good name": ""
    },
    {
      "name": "Babe",
      "hex": "#dc7b7c",
      "good name": "x"
    },
    {
      "name": "Babiana",
      "hex": "#876fa3",
      "good name": ""
    },
    {
      "name": "Baby Aqua",
      "hex": "#abccc3",
      "good name": ""
    },
    {
      "name": "Baby Artichoke",
      "hex": "#e9e3ce",
      "good name": ""
    },
    {
      "name": "Baby Barn Owl",
      "hex": "#c3c3b8",
      "good name": ""
    },
    {
      "name": "Baby Bear",
      "hex": "#6f5944",
      "good name": "x"
    },
    {
      "name": "Baby Berries",
      "hex": "#9c4a62",
      "good name": ""
    },
    {
      "name": "Baby Blossom",
      "hex": "#faefe9",
      "good name": ""
    },
    {
      "name": "Baby Blue",
      "hex": "#a2cffe",
      "good name": "x"
    },
    {
      "name": "Baby Blue Eyes",
      "hex": "#a1caf1",
      "good name": ""
    },
    {
      "name": "Baby Bok Choy",
      "hex": "#bbb98a",
      "good name": ""
    },
    {
      "name": "Baby Breath",
      "hex": "#f0d0b0",
      "good name": ""
    },
    {
      "name": "Baby Bunting",
      "hex": "#abcaea",
      "good name": ""
    },
    {
      "name": "Baby Burro",
      "hex": "#8c665c",
      "good name": ""
    },
    {
      "name": "Baby Cake",
      "hex": "#87bea3",
      "good name": ""
    },
    {
      "name": "Baby Chick",
      "hex": "#ffeda2",
      "good name": ""
    },
    {
      "name": "Baby Fish Mouth",
      "hex": "#f3acb9",
      "good name": ""
    },
    {
      "name": "Baby Frog",
      "hex": "#c8ba63",
      "good name": ""
    },
    {
      "name": "Baby Girl",
      "hex": "#ffdfe8",
      "good name": ""
    },
    {
      "name": "Baby Grass",
      "hex": "#8abd7b",
      "good name": ""
    },
    {
      "name": "Baby Green",
      "hex": "#8cff9e",
      "good name": ""
    },
    {
      "name": "Baby Jane",
      "hex": "#d0a7a8",
      "good name": ""
    },
    {
      "name": "Baby Melon",
      "hex": "#ffa468",
      "good name": ""
    },
    {
      "name": "Baby Motive",
      "hex": "#8fcbdc",
      "good name": ""
    },
    {
      "name": "Baby Pink",
      "hex": "#ffb7ce",
      "good name": "x"
    },
    {
      "name": "Baby Powder",
      "hex": "#fefefa",
      "good name": ""
    },
    {
      "name": "Baby Purple",
      "hex": "#ca9bf7",
      "good name": ""
    },
    {
      "name": "Baby Seal",
      "hex": "#a1a5a8",
      "good name": ""
    },
    {
      "name": "Baby Shoes",
      "hex": "#005784",
      "good name": ""
    },
    {
      "name": "Baby Spinach",
      "hex": "#89a882",
      "good name": ""
    },
    {
      "name": "Baby Sprout",
      "hex": "#a78b81",
      "good name": ""
    },
    {
      "name": "Baby Steps",
      "hex": "#f5c9da",
      "good name": ""
    },
    {
      "name": "Baby Talk Grey",
      "hex": "#bababa",
      "good name": ""
    },
    {
      "name": "Baby Tears",
      "hex": "#66b9d6",
      "good name": ""
    },
    {
      "name": "Baby Tone",
      "hex": "#dcc2cb",
      "good name": ""
    },
    {
      "name": "Baby Tooth",
      "hex": "#eeffdd",
      "good name": ""
    },
    {
      "name": "Baby Vegetable",
      "hex": "#5d6942",
      "good name": ""
    },
    {
      "name": "Baby Whale",
      "hex": "#4d5588",
      "good name": ""
    },
    {
      "name": "Baby's Blanket",
      "hex": "#ffaec1",
      "good name": ""
    },
    {
      "name": "Baby's Booties",
      "hex": "#e8c1c2",
      "good name": ""
    },
    {
      "name": "Baby's Breath",
      "hex": "#d8e4e8",
      "good name": ""
    },
    {
      "name": "Babyccino",
      "hex": "#eeccbb",
      "good name": ""
    },
    {
      "name": "Baca Berry",
      "hex": "#945759",
      "good name": ""
    },
    {
      "name": "Bacchanalia Red",
      "hex": "#8a3a3c",
      "good name": ""
    },
    {
      "name": "Bachelor Blue",
      "hex": "#8faaca",
      "good name": ""
    },
    {
      "name": "Bachelor Button",
      "hex": "#4abbd5",
      "good name": ""
    },
    {
      "name": "Bachimitsu Gold",
      "hex": "#fddea5",
      "good name": ""
    },
    {
      "name": "Back In Black",
      "hex": "#16141c",
      "good name": "x"
    },
    {
      "name": "Back Stage",
      "hex": "#6b625b",
      "good name": ""
    },
    {
      "name": "Back To Basics",
      "hex": "#726747",
      "good name": ""
    },
    {
      "name": "Back to Nature",
      "hex": "#bdb98f",
      "good name": ""
    },
    {
      "name": "Back to School",
      "hex": "#c1853b",
      "good name": ""
    },
    {
      "name": "Backcountry",
      "hex": "#7c725f",
      "good name": ""
    },
    {
      "name": "Backdrop",
      "hex": "#a7a799",
      "good name": ""
    },
    {
      "name": "Backlight",
      "hex": "#fcf0e5",
      "good name": ""
    },
    {
      "name": "Backwater",
      "hex": "#687078",
      "good name": ""
    },
    {
      "name": "Backwoods",
      "hex": "#4a6546",
      "good name": ""
    },
    {
      "name": "Backyard",
      "hex": "#879877",
      "good name": "x"
    },
    {
      "name": "Bacon Strips",
      "hex": "#df3f32",
      "good name": "x"
    },
    {
      "name": "Bad Hair Day",
      "hex": "#f1c983",
      "good name": ""
    },
    {
      "name": "Bad Moon Yellow",
      "hex": "#f2e5b4",
      "good name": ""
    },
    {
      "name": "Badab Black Wash",
      "hex": "#0a0908",
      "good name": ""
    },
    {
      "name": "Badass Grass",
      "hex": "#b4da55",
      "good name": "x"
    },
    {
      "name": "Badlands Orange",
      "hex": "#ff6316",
      "good name": ""
    },
    {
      "name": "Badlands Sunset",
      "hex": "#936a5b",
      "good name": ""
    },
    {
      "name": "Badshahi Brown",
      "hex": "#d3a194",
      "good name": ""
    },
    {
      "name": "Bag of Gold",
      "hex": "#e1bd88",
      "good name": ""
    },
    {
      "name": "Bagel",
      "hex": "#f6cd9b",
      "good name": ""
    },
    {
      "name": "Bagpiper",
      "hex": "#1c5544",
      "good name": ""
    },
    {
      "name": "Baguette",
      "hex": "#b5936a",
      "good name": ""
    },
    {
      "name": "Bahama Blue",
      "hex": "#25597f",
      "good name": ""
    },
    {
      "name": "Bahaman Bliss",
      "hex": "#3fa49b",
      "good name": ""
    },
    {
      "name": "Baharroth Blue",
      "hex": "#58c1cd",
      "good name": ""
    },
    {
      "name": "Bahia",
      "hex": "#a9c01c",
      "good name": ""
    },
    {
      "name": "Bahia Grass",
      "hex": "#c4c5ad",
      "good name": ""
    },
    {
      "name": "Bái Sè White",
      "hex": "#ecefef",
      "good name": ""
    },
    {
      "name": "Baikō Brown",
      "hex": "#887938",
      "good name": ""
    },
    {
      "name": "Bailey Bells",
      "hex": "#8a8ec9",
      "good name": ""
    },
    {
      "name": "Bainganī",
      "hex": "#8273fd",
      "good name": ""
    },
    {
      "name": "Baize",
      "hex": "#4b5445",
      "good name": ""
    },
    {
      "name": "Baize Green",
      "hex": "#c7cda8",
      "good name": ""
    },
    {
      "name": "Baja",
      "hex": "#d2c1a8",
      "good name": ""
    },
    {
      "name": "Baja Blue",
      "hex": "#66a6d9",
      "good name": ""
    },
    {
      "name": "Baja White",
      "hex": "#fff8d1",
      "good name": ""
    },
    {
      "name": "Baked Apple",
      "hex": "#b34646",
      "good name": ""
    },
    {
      "name": "Baked Bean",
      "hex": "#b2754d",
      "good name": ""
    },
    {
      "name": "Baked Biscotti",
      "hex": "#dad3cc",
      "good name": ""
    },
    {
      "name": "Baked Bread",
      "hex": "#dacba9",
      "good name": ""
    },
    {
      "name": "Baked Brie",
      "hex": "#ede9d7",
      "good name": ""
    },
    {
      "name": "Baked Clay",
      "hex": "#9c5642",
      "good name": ""
    },
    {
      "name": "Baked Cookie",
      "hex": "#89674a",
      "good name": ""
    },
    {
      "name": "Baked Ham",
      "hex": "#eec8bc",
      "good name": ""
    },
    {
      "name": "Baked Potato",
      "hex": "#b69e87",
      "good name": ""
    },
    {
      "name": "Baked Salmon",
      "hex": "#df9876",
      "good name": ""
    },
    {
      "name": "Baked Scone",
      "hex": "#e5d3bc",
      "good name": ""
    },
    {
      "name": "Baked Sienna",
      "hex": "#9b775e",
      "good name": ""
    },
    {
      "name": "Bakelite",
      "hex": "#e6d4a5",
      "good name": ""
    },
    {
      "name": "Bakelite Gold",
      "hex": "#d7995d",
      "good name": ""
    },
    {
      "name": "Bakelite Yellow",
      "hex": "#c6b788",
      "good name": ""
    },
    {
      "name": "Baker-Miller Pink",
      "hex": "#ff92ae",
      "good name": ""
    },
    {
      "name": "Baker's Chocolate",
      "hex": "#5c3317",
      "good name": ""
    },
    {
      "name": "Bakery Box",
      "hex": "#f0f4f2",
      "good name": ""
    },
    {
      "name": "Bakery Brown",
      "hex": "#ab9078",
      "good name": "x"
    },
    {
      "name": "Baklava",
      "hex": "#efb435",
      "good name": "x"
    },
    {
      "name": "Bakos Blue",
      "hex": "#273f4b",
      "good name": ""
    },
    {
      "name": "Balance",
      "hex": "#d1dbc2",
      "good name": ""
    },
    {
      "name": "Balance Green",
      "hex": "#c3c5a7",
      "good name": ""
    },
    {
      "name": "Balanced",
      "hex": "#d7d2d1",
      "good name": ""
    },
    {
      "name": "Balanced Beige",
      "hex": "#c0b2a2",
      "good name": ""
    },
    {
      "name": "Balboa",
      "hex": "#afd3da",
      "good name": ""
    },
    {
      "name": "Balcony Rose",
      "hex": "#e2bcb8",
      "good name": ""
    },
    {
      "name": "Balcony Sunset",
      "hex": "#d78e6b",
      "good name": ""
    },
    {
      "name": "Baleine Blue",
      "hex": "#155187",
      "good name": ""
    },
    {
      "name": "Bali Batik",
      "hex": "#6f5937",
      "good name": ""
    },
    {
      "name": "Bali Bliss",
      "hex": "#5e9ea0",
      "good name": ""
    },
    {
      "name": "Bali Deep",
      "hex": "#8a8e93",
      "good name": ""
    },
    {
      "name": "Bali Hai",
      "hex": "#849ca9",
      "good name": ""
    },
    {
      "name": "Bali Sand",
      "hex": "#f6e8d5",
      "good name": ""
    },
    {
      "name": "Balinese Sunset",
      "hex": "#f1a177",
      "good name": ""
    },
    {
      "name": "Ball Blue",
      "hex": "#21abcd",
      "good name": ""
    },
    {
      "name": "Ball Gown",
      "hex": "#525661",
      "good name": ""
    },
    {
      "name": "Ballad",
      "hex": "#cab6c6",
      "good name": ""
    },
    {
      "name": "Ballad Blue",
      "hex": "#c0ceda",
      "good name": ""
    },
    {
      "name": "Ballerina",
      "hex": "#f2cfdc",
      "good name": "x"
    },
    {
      "name": "Ballerina Beauty",
      "hex": "#e8ded6",
      "good name": ""
    },
    {
      "name": "Ballerina Gown",
      "hex": "#f9eaea",
      "good name": ""
    },
    {
      "name": "Ballerina Pink",
      "hex": "#f7b6ba",
      "good name": ""
    },
    {
      "name": "Ballerina Silk",
      "hex": "#f0dee0",
      "good name": ""
    },
    {
      "name": "Ballerina Tears",
      "hex": "#f2bbb1",
      "good name": ""
    },
    {
      "name": "Ballerina Tutu",
      "hex": "#c8647f",
      "good name": ""
    },
    {
      "name": "Ballet Blue",
      "hex": "#afc4d9",
      "good name": ""
    },
    {
      "name": "Ballet Cream",
      "hex": "#fc8258",
      "good name": ""
    },
    {
      "name": "Ballet Rose",
      "hex": "#d3adb1",
      "good name": ""
    },
    {
      "name": "Ballet Shoes",
      "hex": "#edb9bd",
      "good name": ""
    },
    {
      "name": "Ballet Skirt",
      "hex": "#ffc5b3",
      "good name": ""
    },
    {
      "name": "Ballet Slipper",
      "hex": "#ebced5",
      "good name": ""
    },
    {
      "name": "Ballet White",
      "hex": "#f2e7d8",
      "good name": ""
    },
    {
      "name": "Ballie Scott Sage",
      "hex": "#b2b29c",
      "good name": ""
    },
    {
      "name": "Ballroom Blue",
      "hex": "#a6b3c9",
      "good name": ""
    },
    {
      "name": "Ballyhoo",
      "hex": "#58a83b",
      "good name": ""
    },
    {
      "name": "Balmy",
      "hex": "#c5d8de",
      "good name": ""
    },
    {
      "name": "Balmy Seas",
      "hex": "#b4dcd3",
      "good name": ""
    },
    {
      "name": "Balor Brown",
      "hex": "#9c6b08",
      "good name": ""
    },
    {
      "name": "Balsa Stone",
      "hex": "#cbbb92",
      "good name": ""
    },
    {
      "name": "Balsam",
      "hex": "#bec4b7",
      "good name": ""
    },
    {
      "name": "Balsam Fir",
      "hex": "#909e91",
      "good name": ""
    },
    {
      "name": "Balsam Green",
      "hex": "#576664",
      "good name": ""
    },
    {
      "name": "Balsam Pear",
      "hex": "#b19338",
      "good name": ""
    },
    {
      "name": "Balsamic Reduction",
      "hex": "#434340",
      "good name": ""
    },
    {
      "name": "Balthasar Gold",
      "hex": "#a47552",
      "good name": ""
    },
    {
      "name": "Baltic",
      "hex": "#279d9f",
      "good name": "x"
    },
    {
      "name": "Baltic Blue",
      "hex": "#6c969a",
      "good name": ""
    },
    {
      "name": "Baltic Bream",
      "hex": "#9fbbda",
      "good name": ""
    },
    {
      "name": "Baltic Green",
      "hex": "#3aa098",
      "good name": ""
    },
    {
      "name": "Baltic Prince",
      "hex": "#135952",
      "good name": ""
    },
    {
      "name": "Baltic Sea",
      "hex": "#3c3d3e",
      "good name": ""
    },
    {
      "name": "Baltic Trench",
      "hex": "#125761",
      "good name": ""
    },
    {
      "name": "Baltic Turquoise",
      "hex": "#00a49a",
      "good name": ""
    },
    {
      "name": "Bambino",
      "hex": "#8edacc",
      "good name": "x"
    },
    {
      "name": "Bamboo",
      "hex": "#e3dec6",
      "good name": ""
    },
    {
      "name": "Bamboo Beige",
      "hex": "#c1aba0",
      "good name": ""
    },
    {
      "name": "Bamboo Brown",
      "hex": "#c87f00",
      "good name": ""
    },
    {
      "name": "Bamboo Charcoal",
      "hex": "#454a48",
      "good name": ""
    },
    {
      "name": "Bamboo Forest",
      "hex": "#b1a979",
      "good name": "x"
    },
    {
      "name": "Bamboo Grass Green",
      "hex": "#82994c",
      "good name": ""
    },
    {
      "name": "Bamboo Leaf",
      "hex": "#99b243",
      "good name": ""
    },
    {
      "name": "Bamboo Mat",
      "hex": "#e5da9f",
      "good name": ""
    },
    {
      "name": "Bamboo Screen",
      "hex": "#bcab8c",
      "good name": ""
    },
    {
      "name": "Bamboo Shoot",
      "hex": "#a3b6a4",
      "good name": ""
    },
    {
      "name": "Bamboo White",
      "hex": "#c6cfad",
      "good name": ""
    },
    {
      "name": "Bamboo Yellow",
      "hex": "#ae884b",
      "good name": ""
    },
    {
      "name": "Banafš Violet",
      "hex": "#5a1991",
      "good name": ""
    },
    {
      "name": "Banafsaji Purple",
      "hex": "#a50b5e",
      "good name": ""
    },
    {
      "name": "Banana",
      "hex": "#fffc79",
      "good name": "x"
    },
    {
      "name": "Banana Bandanna",
      "hex": "#f8f739",
      "good name": "x"
    },
    {
      "name": "Banana Biscuit",
      "hex": "#ffde7b",
      "good name": ""
    },
    {
      "name": "Banana Blossom",
      "hex": "#933e49",
      "good name": ""
    },
    {
      "name": "Banana Boat",
      "hex": "#fdc838",
      "good name": ""
    },
    {
      "name": "Banana Bombshell",
      "hex": "#f7e82e",
      "good name": "x"
    },
    {
      "name": "Banana Bread",
      "hex": "#ffcf73",
      "good name": "x"
    },
    {
      "name": "Banana Brick",
      "hex": "#e8d82c",
      "good name": "x"
    },
    {
      "name": "Banana Brulee",
      "hex": "#f7eab9",
      "good name": ""
    },
    {
      "name": "Banana Chalk",
      "hex": "#d6d963",
      "good name": ""
    },
    {
      "name": "Banana Clan",
      "hex": "#eedd00",
      "good name": ""
    },
    {
      "name": "Banana Cream",
      "hex": "#fff49c",
      "good name": "x"
    },
    {
      "name": "Banana Crepe",
      "hex": "#e7d3ad",
      "good name": ""
    },
    {
      "name": "Banana Custard",
      "hex": "#fcf3c5",
      "good name": ""
    },
    {
      "name": "Banana Farm",
      "hex": "#ffdf38",
      "good name": ""
    },
    {
      "name": "Banana Flash",
      "hex": "#eeff00",
      "good name": ""
    },
    {
      "name": "Banana Ice Cream",
      "hex": "#f1d3b2",
      "good name": ""
    },
    {
      "name": "Banana King",
      "hex": "#fffb08",
      "good name": "x"
    },
    {
      "name": "Banana Leaf",
      "hex": "#9d8f3a",
      "good name": ""
    },
    {
      "name": "Banana Mania",
      "hex": "#fbe7b2",
      "good name": ""
    },
    {
      "name": "Banana Mash",
      "hex": "#fafe4b",
      "good name": ""
    },
    {
      "name": "Banana Milk",
      "hex": "#fff7ad",
      "good name": "x"
    },
    {
      "name": "Banana Milkshake",
      "hex": "#ede6cb",
      "good name": ""
    },
    {
      "name": "Banana Palm",
      "hex": "#95a263",
      "good name": ""
    },
    {
      "name": "Banana Peel",
      "hex": "#ffe774",
      "good name": ""
    },
    {
      "name": "Banana Pepper",
      "hex": "#fdd630",
      "good name": "x"
    },
    {
      "name": "Banana Pie",
      "hex": "#f7efd7",
      "good name": ""
    },
    {
      "name": "Banana Powder",
      "hex": "#d0c101",
      "good name": ""
    },
    {
      "name": "Banana Propaganda",
      "hex": "#f3db00",
      "good name": "x"
    },
    {
      "name": "Banana Pudding",
      "hex": "#f4efc3",
      "good name": ""
    },
    {
      "name": "Banana Puree",
      "hex": "#b29705",
      "good name": ""
    },
    {
      "name": "Banana Sparkes",
      "hex": "#f6f5d7",
      "good name": ""
    },
    {
      "name": "Banana Split",
      "hex": "#f7eec8",
      "good name": "x"
    },
    {
      "name": "Banana Yellow",
      "hex": "#ffe135",
      "good name": ""
    },
    {
      "name": "Banana Yogurt",
      "hex": "#fae7b5",
      "good name": ""
    },
    {
      "name": "Bananarama",
      "hex": "#e4d466",
      "good name": ""
    },
    {
      "name": "Bananas Foster",
      "hex": "#dcbe97",
      "good name": ""
    },
    {
      "name": "Bancroft Village",
      "hex": "#816e54",
      "good name": ""
    },
    {
      "name": "Banded Tulip",
      "hex": "#e0d3bd",
      "good name": ""
    },
    {
      "name": "Bandicoot",
      "hex": "#878466",
      "good name": ""
    },
    {
      "name": "Baneblade Brown",
      "hex": "#937f6d",
      "good name": ""
    },
    {
      "name": "Bangalore",
      "hex": "#bbaa88",
      "good name": "x"
    },
    {
      "name": "Bangladesh Green",
      "hex": "#006a4f",
      "good name": ""
    },
    {
      "name": "Banh Bot Loc Dumpling",
      "hex": "#d2b762",
      "good name": ""
    },
    {
      "name": "Banished Brown",
      "hex": "#745e6f",
      "good name": ""
    },
    {
      "name": "Bank Blue",
      "hex": "#3e4652",
      "good name": ""
    },
    {
      "name": "Bank Vault",
      "hex": "#757374",
      "good name": "x"
    },
    {
      "name": "Banksia",
      "hex": "#a6b29a",
      "good name": ""
    },
    {
      "name": "Banksia Leaf",
      "hex": "#4b5539",
      "good name": ""
    },
    {
      "name": "Banner Gold",
      "hex": "#a28557",
      "good name": "x"
    },
    {
      "name": "Bannister Brown",
      "hex": "#806b5d",
      "good name": ""
    },
    {
      "name": "Bannister White",
      "hex": "#e1e0d6",
      "good name": ""
    },
    {
      "name": "Banshee",
      "hex": "#daf0e6",
      "good name": ""
    },
    {
      "name": "Banyan Serenity",
      "hex": "#98ab8c",
      "good name": ""
    },
    {
      "name": "Bara Red",
      "hex": "#e9546b",
      "good name": ""
    },
    {
      "name": "Baragon Brown",
      "hex": "#551100",
      "good name": ""
    },
    {
      "name": "Barbados",
      "hex": "#3e6676",
      "good name": ""
    },
    {
      "name": "Barbados Bay",
      "hex": "#006665",
      "good name": ""
    },
    {
      "name": "Barbados Beige",
      "hex": "#b8a983",
      "good name": ""
    },
    {
      "name": "Barbados Blue",
      "hex": "#2766ac",
      "good name": ""
    },
    {
      "name": "Barbados Cherry",
      "hex": "#aa0a27",
      "good name": ""
    },
    {
      "name": "Barbarian Flesh",
      "hex": "#f78c5a",
      "good name": ""
    },
    {
      "name": "Barbarian Leather",
      "hex": "#a17308",
      "good name": ""
    },
    {
      "name": "Barbarossa",
      "hex": "#a84734",
      "good name": "x"
    },
    {
      "name": "Barbecue",
      "hex": "#c26157",
      "good name": "x"
    },
    {
      "name": "Barberry",
      "hex": "#ee1133",
      "good name": "x"
    },
    {
      "name": "Barberry Bush",
      "hex": "#d2c61f",
      "good name": ""
    },
    {
      "name": "Barberry Sand",
      "hex": "#e1d4bc",
      "good name": ""
    },
    {
      "name": "Barberry Yellow",
      "hex": "#f3bd32",
      "good name": ""
    },
    {
      "name": "Barbie Pink",
      "hex": "#fe46a5",
      "good name": ""
    },
    {
      "name": "Barcelona Beige",
      "hex": "#c4b39c",
      "good name": ""
    },
    {
      "name": "Barcelona Brown",
      "hex": "#926a46",
      "good name": ""
    },
    {
      "name": "Bare",
      "hex": "#817e6d",
      "good name": ""
    },
    {
      "name": "Bare Beige",
      "hex": "#e8d3c9",
      "good name": ""
    },
    {
      "name": "Bare Bone",
      "hex": "#eeddcc",
      "good name": ""
    },
    {
      "name": "Bare Pink",
      "hex": "#f2e1dd",
      "good name": ""
    },
    {
      "name": "Barely Aqua",
      "hex": "#bae9e0",
      "good name": ""
    },
    {
      "name": "Barely Bloomed",
      "hex": "#ddaadd",
      "good name": ""
    },
    {
      "name": "Barely Blue",
      "hex": "#dde0df",
      "good name": ""
    },
    {
      "name": "Barely Brown",
      "hex": "#dd6655",
      "good name": ""
    },
    {
      "name": "Barely Butter",
      "hex": "#f8e9c2",
      "good name": ""
    },
    {
      "name": "Barely Mauve",
      "hex": "#ccbdb9",
      "good name": ""
    },
    {
      "name": "Barely Peach",
      "hex": "#ffe9c7",
      "good name": ""
    },
    {
      "name": "Barely Pear",
      "hex": "#edebdb",
      "good name": ""
    },
    {
      "name": "Barely Pink",
      "hex": "#f8d7dd",
      "good name": ""
    },
    {
      "name": "Barely Ripe Apricot",
      "hex": "#ffe3cb",
      "good name": ""
    },
    {
      "name": "Barely Rose",
      "hex": "#ede0e3",
      "good name": ""
    },
    {
      "name": "Barely White",
      "hex": "#e1e3dd",
      "good name": ""
    },
    {
      "name": "Barf Green",
      "hex": "#94ac02",
      "good name": ""
    },
    {
      "name": "Bargeboard Brown",
      "hex": "#68534a",
      "good name": ""
    },
    {
      "name": "Barista",
      "hex": "#bcafa2",
      "good name": ""
    },
    {
      "name": "Barite",
      "hex": "#9e7b5c",
      "good name": ""
    },
    {
      "name": "Baritone",
      "hex": "#708e95",
      "good name": ""
    },
    {
      "name": "Barium",
      "hex": "#f4e1c5",
      "good name": ""
    },
    {
      "name": "Barium Green",
      "hex": "#8fff9f",
      "good name": ""
    },
    {
      "name": "Bark",
      "hex": "#5f5854",
      "good name": "x"
    },
    {
      "name": "Bark Brown",
      "hex": "#73532a",
      "good name": ""
    },
    {
      "name": "Bark Sawdust",
      "hex": "#ab9004",
      "good name": ""
    },
    {
      "name": "Barking Prairie Dog",
      "hex": "#c5b497",
      "good name": ""
    },
    {
      "name": "Barley Corn",
      "hex": "#b6935c",
      "good name": ""
    },
    {
      "name": "Barley Field",
      "hex": "#c7bcae",
      "good name": ""
    },
    {
      "name": "Barley Groats",
      "hex": "#fbf2db",
      "good name": ""
    },
    {
      "name": "Barley White",
      "hex": "#f7e5b7",
      "good name": ""
    },
    {
      "name": "Barn Door",
      "hex": "#8e5959",
      "good name": ""
    },
    {
      "name": "Barn Red",
      "hex": "#8b4044",
      "good name": ""
    },
    {
      "name": "Barney",
      "hex": "#ac1db8",
      "good name": ""
    },
    {
      "name": "Barney Purple",
      "hex": "#a00498",
      "good name": ""
    },
    {
      "name": "Barnfloor",
      "hex": "#9c9480",
      "good name": ""
    },
    {
      "name": "Barnwood",
      "hex": "#554d44",
      "good name": ""
    },
    {
      "name": "Barnwood Ash",
      "hex": "#87857e",
      "good name": ""
    },
    {
      "name": "Barnwood Grey",
      "hex": "#9e9589",
      "good name": ""
    },
    {
      "name": "Barnyard Grass",
      "hex": "#5dac51",
      "good name": ""
    },
    {
      "name": "Baroness",
      "hex": "#a785a7",
      "good name": ""
    },
    {
      "name": "Baroness Mauve",
      "hex": "#847098",
      "good name": ""
    },
    {
      "name": "Baronial Brown",
      "hex": "#5a4840",
      "good name": ""
    },
    {
      "name": "Baroque",
      "hex": "#ddaa22",
      "good name": ""
    },
    {
      "name": "Baroque Blue",
      "hex": "#95b6b5",
      "good name": ""
    },
    {
      "name": "Baroque Chalk Soft Blue",
      "hex": "#aecccb",
      "good name": ""
    },
    {
      "name": "Baroque Grey",
      "hex": "#5f5d64",
      "good name": ""
    },
    {
      "name": "Baroque Red",
      "hex": "#7b4f5d",
      "good name": ""
    },
    {
      "name": "Baroque Rose",
      "hex": "#b35a66",
      "good name": ""
    },
    {
      "name": "Barossa",
      "hex": "#452e39",
      "good name": ""
    },
    {
      "name": "Barrel",
      "hex": "#f0b069",
      "good name": ""
    },
    {
      "name": "Barrel Stove",
      "hex": "#8e7e67",
      "good name": ""
    },
    {
      "name": "Barren",
      "hex": "#b9aba3",
      "good name": ""
    },
    {
      "name": "Barrett Quince",
      "hex": "#f5d1b2",
      "good name": ""
    },
    {
      "name": "Barricade",
      "hex": "#84623e",
      "good name": ""
    },
    {
      "name": "Barrier Reef",
      "hex": "#0084a1",
      "good name": ""
    },
    {
      "name": "Barro Verde",
      "hex": "#9f8e71",
      "good name": ""
    },
    {
      "name": "Basalt Black",
      "hex": "#4d423e",
      "good name": ""
    },
    {
      "name": "Basalt Grey",
      "hex": "#999999",
      "good name": ""
    },
    {
      "name": "Base Camp",
      "hex": "#575c3a",
      "good name": ""
    },
    {
      "name": "Base Sand",
      "hex": "#bb9955",
      "good name": ""
    },
    {
      "name": "Baseball Base",
      "hex": "#f4eadc",
      "good name": ""
    },
    {
      "name": "Bashful",
      "hex": "#e3eded",
      "good name": ""
    },
    {
      "name": "Bashful Blue",
      "hex": "#6994cf",
      "good name": ""
    },
    {
      "name": "Bashful Emu",
      "hex": "#b2b0ac",
      "good name": ""
    },
    {
      "name": "Bashful Pansy",
      "hex": "#d9cde5",
      "good name": ""
    },
    {
      "name": "Bashful Rose",
      "hex": "#b88686",
      "good name": ""
    },
    {
      "name": "Basic Coral",
      "hex": "#dbc3b6",
      "good name": ""
    },
    {
      "name": "Basic Khaki",
      "hex": "#c3b69f",
      "good name": ""
    },
    {
      "name": "Basil",
      "hex": "#879f84",
      "good name": "x"
    },
    {
      "name": "Basil Chiffonade",
      "hex": "#828249",
      "good name": ""
    },
    {
      "name": "Basil Green",
      "hex": "#54622e",
      "good name": ""
    },
    {
      "name": "Basil Icing",
      "hex": "#e2e6db",
      "good name": ""
    },
    {
      "name": "Basil Mauve",
      "hex": "#6c5472",
      "good name": ""
    },
    {
      "name": "Basil Pesto",
      "hex": "#529d6e",
      "good name": ""
    },
    {
      "name": "Basil Smash",
      "hex": "#b7e1a1",
      "good name": "x"
    },
    {
      "name": "Basilica Blue",
      "hex": "#4a9fa7",
      "good name": ""
    },
    {
      "name": "Basilisk",
      "hex": "#9ab38d",
      "good name": ""
    },
    {
      "name": "Basilisk Lizard",
      "hex": "#bcecac",
      "good name": ""
    },
    {
      "name": "Basin Blue",
      "hex": "#b9dee4",
      "good name": ""
    },
    {
      "name": "Basket Beige",
      "hex": "#c0a98b",
      "good name": ""
    },
    {
      "name": "Basket of Gold",
      "hex": "#f4cc3c",
      "good name": ""
    },
    {
      "name": "Basketball",
      "hex": "#ee6730",
      "good name": "x"
    },
    {
      "name": "Basketry",
      "hex": "#bda286",
      "good name": ""
    },
    {
      "name": "Basketweave Beige",
      "hex": "#caad92",
      "good name": ""
    },
    {
      "name": "Basmati White",
      "hex": "#ebe1c9",
      "good name": ""
    },
    {
      "name": "Basque Green",
      "hex": "#5f6033",
      "good name": ""
    },
    {
      "name": "Bassinet",
      "hex": "#d3c1cb",
      "good name": ""
    },
    {
      "name": "Basswood",
      "hex": "#c9b196",
      "good name": ""
    },
    {
      "name": "Bastard-amber",
      "hex": "#ffcc88",
      "good name": ""
    },
    {
      "name": "Bastille",
      "hex": "#2c2c32",
      "good name": ""
    },
    {
      "name": "Bastion Grey",
      "hex": "#4d4a4a",
      "good name": ""
    },
    {
      "name": "Bat Wing",
      "hex": "#7e7466",
      "good name": "x"
    },
    {
      "name": "Bat-Signal",
      "hex": "#feff00",
      "good name": "x"
    },
    {
      "name": "Bat's Blood Soup",
      "hex": "#ee3366",
      "good name": "x"
    },
    {
      "name": "Batch Blue",
      "hex": "#87b2c9",
      "good name": ""
    },
    {
      "name": "Bateau",
      "hex": "#1b7598",
      "good name": ""
    },
    {
      "name": "Bateau Brown",
      "hex": "#7a5f5a",
      "good name": ""
    },
    {
      "name": "Bath Bubbles",
      "hex": "#e6f2ea",
      "good name": "x"
    },
    {
      "name": "Bath Green",
      "hex": "#0a696a",
      "good name": ""
    },
    {
      "name": "Bath Salt Green",
      "hex": "#bbded7",
      "good name": ""
    },
    {
      "name": "Bath Turquoise",
      "hex": "#62baa8",
      "good name": ""
    },
    {
      "name": "Bath Water",
      "hex": "#88eeee",
      "good name": "x"
    },
    {
      "name": "Bathe Blue",
      "hex": "#c2e0e3",
      "good name": ""
    },
    {
      "name": "Bathing",
      "hex": "#93c9d0",
      "good name": ""
    },
    {
      "name": "Batik Lilac",
      "hex": "#7e738b",
      "good name": ""
    },
    {
      "name": "Batik Pink",
      "hex": "#9c657e",
      "good name": ""
    },
    {
      "name": "Batman",
      "hex": "#656e72",
      "good name": "x"
    },
    {
      "name": "Batman's NES Cape",
      "hex": "#940084",
      "good name": ""
    },
    {
      "name": "Baton",
      "hex": "#866f5a",
      "good name": ""
    },
    {
      "name": "Baton Rouge",
      "hex": "#973c6c",
      "good name": ""
    },
    {
      "name": "Bats Cloak",
      "hex": "#1f1518",
      "good name": "x"
    },
    {
      "name": "Battered Sausage",
      "hex": "#ede2d4",
      "good name": ""
    },
    {
      "name": "Battery Charged Blue",
      "hex": "#1dacd4",
      "good name": ""
    },
    {
      "name": "Battle Blue",
      "hex": "#74828f",
      "good name": ""
    },
    {
      "name": "Battle Cat",
      "hex": "#2b7414",
      "good name": ""
    },
    {
      "name": "Battle Dress",
      "hex": "#7e8270",
      "good name": ""
    },
    {
      "name": "Battle Harbor",
      "hex": "#9c9c82",
      "good name": ""
    },
    {
      "name": "Battleship Green",
      "hex": "#828f72",
      "good name": ""
    },
    {
      "name": "Battleship Grey",
      "hex": "#6f7476",
      "good name": ""
    },
    {
      "name": "Battletoad",
      "hex": "#11cc55",
      "good name": "x"
    },
    {
      "name": "Batu Cave",
      "hex": "#595438",
      "good name": ""
    },
    {
      "name": "Bauhaus",
      "hex": "#3f4040",
      "good name": ""
    },
    {
      "name": "Bauhaus Blue",
      "hex": "#006392",
      "good name": ""
    },
    {
      "name": "Bauhaus Buff",
      "hex": "#cfb49e",
      "good name": ""
    },
    {
      "name": "Bauhaus Gold",
      "hex": "#b0986f",
      "good name": ""
    },
    {
      "name": "Bauhaus Tan",
      "hex": "#ccc4ae",
      "good name": ""
    },
    {
      "name": "Bavarian",
      "hex": "#4d5e42",
      "good name": ""
    },
    {
      "name": "Bavarian Blue",
      "hex": "#1c3382",
      "good name": ""
    },
    {
      "name": "Bavarian Cream",
      "hex": "#fff9dd",
      "good name": ""
    },
    {
      "name": "Bavarian Gentian",
      "hex": "#20006d",
      "good name": ""
    },
    {
      "name": "Bavarian Green",
      "hex": "#749a54",
      "good name": "x"
    },
    {
      "name": "Bavarian Sweet Mustard",
      "hex": "#4d3113",
      "good name": ""
    },
    {
      "name": "Bay",
      "hex": "#bae5d6",
      "good name": "x"
    },
    {
      "name": "Bay Area",
      "hex": "#afa490",
      "good name": ""
    },
    {
      "name": "Bay Brown",
      "hex": "#773300",
      "good name": ""
    },
    {
      "name": "Bay Fog",
      "hex": "#9899b0",
      "good name": ""
    },
    {
      "name": "Bay Isle Pointe",
      "hex": "#214048",
      "good name": ""
    },
    {
      "name": "Bay Leaf",
      "hex": "#86793d",
      "good name": ""
    },
    {
      "name": "Bay of Hope",
      "hex": "#bfc9d0",
      "good name": ""
    },
    {
      "name": "Bay of Many",
      "hex": "#353e64",
      "good name": ""
    },
    {
      "name": "Bay Salt",
      "hex": "#d2cdbc",
      "good name": ""
    },
    {
      "name": "Bay Scallop",
      "hex": "#fbe6cd",
      "good name": ""
    },
    {
      "name": "Bay Site",
      "hex": "#325f8a",
      "good name": ""
    },
    {
      "name": "Bay View",
      "hex": "#6a819e",
      "good name": "x"
    },
    {
      "name": "Bay Water",
      "hex": "#aaad94",
      "good name": ""
    },
    {
      "name": "Bay Wharf",
      "hex": "#747f89",
      "good name": ""
    },
    {
      "name": "Bay's Water",
      "hex": "#7b9aad",
      "good name": ""
    },
    {
      "name": "Bayberry",
      "hex": "#255958",
      "good name": ""
    },
    {
      "name": "Bayberry Frost",
      "hex": "#d0d9c7",
      "good name": ""
    },
    {
      "name": "Bayberry Wax",
      "hex": "#b6aa89",
      "good name": ""
    },
    {
      "name": "Bayern Blue",
      "hex": "#0098d4",
      "good name": ""
    },
    {
      "name": "Bayou",
      "hex": "#20706f",
      "good name": ""
    },
    {
      "name": "Bayshore",
      "hex": "#89cee0",
      "good name": ""
    },
    {
      "name": "Bayside",
      "hex": "#5fc9bf",
      "good name": ""
    },
    {
      "name": "Bazaar",
      "hex": "#8f7777",
      "good name": ""
    },
    {
      "name": "Bazooka Pink",
      "hex": "#ffa6c9",
      "good name": ""
    },
    {
      "name": "BBQ",
      "hex": "#a35046",
      "good name": ""
    },
    {
      "name": "Be Daring",
      "hex": "#ffc943",
      "good name": ""
    },
    {
      "name": "Be Mine",
      "hex": "#f4e3e7",
      "good name": ""
    },
    {
      "name": "Be My Valentine",
      "hex": "#ec9dc3",
      "good name": ""
    },
    {
      "name": "Be Spontaneous",
      "hex": "#a5cb66",
      "good name": ""
    },
    {
      "name": "Be Yourself",
      "hex": "#9b983d",
      "good name": ""
    },
    {
      "name": "Beach Bag",
      "hex": "#adb864",
      "good name": ""
    },
    {
      "name": "Beach Ball",
      "hex": "#efc700",
      "good name": ""
    },
    {
      "name": "Beach Blue",
      "hex": "#5f9ca2",
      "good name": ""
    },
    {
      "name": "Beach Boardwalk",
      "hex": "#ceab90",
      "good name": ""
    },
    {
      "name": "Beach Cabana",
      "hex": "#a69081",
      "good name": ""
    },
    {
      "name": "Beach Casuarina",
      "hex": "#665a38",
      "good name": ""
    },
    {
      "name": "Beach Cottage",
      "hex": "#94adb0",
      "good name": ""
    },
    {
      "name": "Beach Dune",
      "hex": "#c6bb9c",
      "good name": "x"
    },
    {
      "name": "Beach Foam",
      "hex": "#cde0e1",
      "good name": ""
    },
    {
      "name": "Beach Glass",
      "hex": "#96dfce",
      "good name": "x"
    },
    {
      "name": "Beach Grass",
      "hex": "#dcddb8",
      "good name": ""
    },
    {
      "name": "Beach House",
      "hex": "#edd481",
      "good name": ""
    },
    {
      "name": "Beach Lilac",
      "hex": "#bda2c4",
      "good name": ""
    },
    {
      "name": "Beach Party",
      "hex": "#fbd05c",
      "good name": ""
    },
    {
      "name": "Beach Sand",
      "hex": "#fbb995",
      "good name": ""
    },
    {
      "name": "Beach Towel",
      "hex": "#fce3b3",
      "good name": ""
    },
    {
      "name": "Beach Trail",
      "hex": "#fedeca",
      "good name": ""
    },
    {
      "name": "Beach Umbrella",
      "hex": "#819aaa",
      "good name": ""
    },
    {
      "name": "Beach White",
      "hex": "#f6eed6",
      "good name": ""
    },
    {
      "name": "Beach Wind",
      "hex": "#dce1e2",
      "good name": ""
    },
    {
      "name": "Beach Woods",
      "hex": "#cac0b0",
      "good name": ""
    },
    {
      "name": "Beachcomber",
      "hex": "#d9e4e5",
      "good name": ""
    },
    {
      "name": "Beachcombing",
      "hex": "#e4c683",
      "good name": ""
    },
    {
      "name": "Beachside Drive",
      "hex": "#acdbdb",
      "good name": ""
    },
    {
      "name": "Beachside Villa",
      "hex": "#c3b296",
      "good name": ""
    },
    {
      "name": "Beachwalk",
      "hex": "#d2b17a",
      "good name": ""
    },
    {
      "name": "Beachy Keen",
      "hex": "#e6d0b6",
      "good name": ""
    },
    {
      "name": "Beacon Blue",
      "hex": "#265c98",
      "good name": ""
    },
    {
      "name": "Beacon Yellow",
      "hex": "#f2c98a",
      "good name": ""
    },
    {
      "name": "Beaded Blue",
      "hex": "#494d8b",
      "good name": ""
    },
    {
      "name": "Beagle Brown",
      "hex": "#8d6737",
      "good name": ""
    },
    {
      "name": "Beaming Blue",
      "hex": "#33ffff",
      "good name": ""
    },
    {
      "name": "Beaming Sun",
      "hex": "#fff8df",
      "good name": ""
    },
    {
      "name": "Bean Counter",
      "hex": "#68755d",
      "good name": ""
    },
    {
      "name": "Bean Green",
      "hex": "#685c27",
      "good name": ""
    },
    {
      "name": "Bean Pot",
      "hex": "#8b6b51",
      "good name": ""
    },
    {
      "name": "Bean Shoot",
      "hex": "#91923a",
      "good name": ""
    },
    {
      "name": "Bean Sprout",
      "hex": "#f3f9e9",
      "good name": ""
    },
    {
      "name": "Bean White",
      "hex": "#ebf0e4",
      "good name": ""
    },
    {
      "name": "Beanstalk",
      "hex": "#31aa74",
      "good name": ""
    },
    {
      "name": "Bear Brown",
      "hex": "#44382b",
      "good name": ""
    },
    {
      "name": "Bear Hug",
      "hex": "#796359",
      "good name": "x"
    },
    {
      "name": "Bear in Mind",
      "hex": "#5b4a44",
      "good name": ""
    },
    {
      "name": "Bear Rug",
      "hex": "#5a4943",
      "good name": ""
    },
    {
      "name": "Bearsuit",
      "hex": "#7d756d",
      "good name": ""
    },
    {
      "name": "Beastly Flesh",
      "hex": "#680c08",
      "good name": ""
    },
    {
      "name": "Beasty Brown",
      "hex": "#663300",
      "good name": ""
    },
    {
      "name": "Beat Around the Bush",
      "hex": "#6e6a44",
      "good name": "x"
    },
    {
      "name": "Beaten Copper",
      "hex": "#73372d",
      "good name": ""
    },
    {
      "name": "Beaten Purple",
      "hex": "#4e0550",
      "good name": ""
    },
    {
      "name": "Beaten Track",
      "hex": "#d1be92",
      "good name": ""
    },
    {
      "name": "Beatnik",
      "hex": "#5f8748",
      "good name": ""
    },
    {
      "name": "Beatrice",
      "hex": "#bebad9",
      "good name": ""
    },
    {
      "name": "Beau Blue",
      "hex": "#bcd4e6",
      "good name": ""
    },
    {
      "name": "Beaujolais",
      "hex": "#80304c",
      "good name": ""
    },
    {
      "name": "Beaumont Brown",
      "hex": "#92774c",
      "good name": ""
    },
    {
      "name": "Beauport Aubergine",
      "hex": "#553f44",
      "good name": ""
    },
    {
      "name": "Beautiful Blue",
      "hex": "#186db6",
      "good name": ""
    },
    {
      "name": "Beautiful Darkness",
      "hex": "#686d70",
      "good name": "x"
    },
    {
      "name": "Beautiful Dream",
      "hex": "#b6c7e3",
      "good name": ""
    },
    {
      "name": "Beautiful Mint",
      "hex": "#d6dad6",
      "good name": ""
    },
    {
      "name": "Beauty",
      "hex": "#866b8d",
      "good name": ""
    },
    {
      "name": "Beauty Bush",
      "hex": "#ebb9b3",
      "good name": ""
    },
    {
      "name": "Beauty Patch",
      "hex": "#834f44",
      "good name": ""
    },
    {
      "name": "Beauty Queen",
      "hex": "#be5c87",
      "good name": ""
    },
    {
      "name": "Beauty Secret",
      "hex": "#c79ea2",
      "good name": ""
    },
    {
      "name": "Beauty Spot",
      "hex": "#604938",
      "good name": ""
    },
    {
      "name": "Beaver",
      "hex": "#926f5b",
      "good name": ""
    },
    {
      "name": "Beaver Fur",
      "hex": "#997867",
      "good name": ""
    },
    {
      "name": "Beaver Kit",
      "hex": "#9f8170",
      "good name": ""
    },
    {
      "name": "Beaver Pelt",
      "hex": "#60564c",
      "good name": ""
    },
    {
      "name": "Bechamel",
      "hex": "#f4eee0",
      "good name": ""
    },
    {
      "name": "Becker Blue",
      "hex": "#607879",
      "good name": ""
    },
    {
      "name": "Beckett",
      "hex": "#85a699",
      "good name": ""
    },
    {
      "name": "Becquerel",
      "hex": "#4bec13",
      "good name": "x"
    },
    {
      "name": "Bed of Roses",
      "hex": "#b893ab",
      "good name": ""
    },
    {
      "name": "Bedazzled",
      "hex": "#d3b9cc",
      "good name": ""
    },
    {
      "name": "Bedbox",
      "hex": "#968775",
      "good name": ""
    },
    {
      "name": "Bedford Brown",
      "hex": "#aa8880",
      "good name": ""
    },
    {
      "name": "Bedrock",
      "hex": "#9e9d99",
      "good name": ""
    },
    {
      "name": "Bedtime Story",
      "hex": "#e1b090",
      "good name": ""
    },
    {
      "name": "Bee",
      "hex": "#f1ba55",
      "good name": ""
    },
    {
      "name": "Bee Cluster",
      "hex": "#ffaa33",
      "good name": ""
    },
    {
      "name": "Bee Hall",
      "hex": "#f2cc64",
      "good name": ""
    },
    {
      "name": "Bee Master",
      "hex": "#735b3b",
      "good name": ""
    },
    {
      "name": "Bee Pollen",
      "hex": "#ebca70",
      "good name": ""
    },
    {
      "name": "Bee Yellow",
      "hex": "#feff32",
      "good name": "x"
    },
    {
      "name": "Bee's Knees",
      "hex": "#e8d9d2",
      "good name": ""
    },
    {
      "name": "Bee's Wax",
      "hex": "#eabf86",
      "good name": ""
    },
    {
      "name": "Beech",
      "hex": "#5b4f3b",
      "good name": ""
    },
    {
      "name": "Beech Brown",
      "hex": "#574128",
      "good name": ""
    },
    {
      "name": "Beech Fern",
      "hex": "#758067",
      "good name": ""
    },
    {
      "name": "Beech Nut",
      "hex": "#d7b59a",
      "good name": ""
    },
    {
      "name": "Beechnut",
      "hex": "#c2c18d",
      "good name": ""
    },
    {
      "name": "Beechwood",
      "hex": "#6e5955",
      "good name": ""
    },
    {
      "name": "Beef Bourguignon",
      "hex": "#b64701",
      "good name": ""
    },
    {
      "name": "Beef Hotpot",
      "hex": "#a85d2e",
      "good name": ""
    },
    {
      "name": "Beef Jerky",
      "hex": "#a25768",
      "good name": ""
    },
    {
      "name": "Beef Patties",
      "hex": "#bb5533",
      "good name": ""
    },
    {
      "name": "Beehive",
      "hex": "#e1b781",
      "good name": ""
    },
    {
      "name": "Beekeeper",
      "hex": "#f6e491",
      "good name": "x"
    },
    {
      "name": "Beer",
      "hex": "#f28e1c",
      "good name": ""
    },
    {
      "name": "Beer Garden",
      "hex": "#449933",
      "good name": ""
    },
    {
      "name": "Beer Glazed Bacon",
      "hex": "#773311",
      "good name": ""
    },
    {
      "name": "Beeswax",
      "hex": "#e9d7ab",
      "good name": ""
    },
    {
      "name": "Beeswax Candle",
      "hex": "#bf7e41",
      "good name": ""
    },
    {
      "name": "Beeswing",
      "hex": "#f5d297",
      "good name": ""
    },
    {
      "name": "Beet Red",
      "hex": "#7a1f3d",
      "good name": "x"
    },
    {
      "name": "Beetle",
      "hex": "#55584c",
      "good name": ""
    },
    {
      "name": "Beetroot",
      "hex": "#663f44",
      "good name": ""
    },
    {
      "name": "Beetroot Purple",
      "hex": "#cf2d71",
      "good name": "x"
    },
    {
      "name": "Beetroot Rice",
      "hex": "#c58f9d",
      "good name": ""
    },
    {
      "name": "Beets",
      "hex": "#736a86",
      "good name": ""
    },
    {
      "name": "Befitting",
      "hex": "#96496d",
      "good name": ""
    },
    {
      "name": "Before the Storm",
      "hex": "#4d6a77",
      "good name": ""
    },
    {
      "name": "Before Winter",
      "hex": "#bd6f56",
      "good name": ""
    },
    {
      "name": "Beggar",
      "hex": "#5a4d39",
      "good name": ""
    },
    {
      "name": "Begonia",
      "hex": "#fa6e79",
      "good name": "x"
    },
    {
      "name": "Begonia Pink",
      "hex": "#ec9abe",
      "good name": ""
    },
    {
      "name": "Begonia Rose",
      "hex": "#c3797f",
      "good name": ""
    },
    {
      "name": "Beguiling Mauve",
      "hex": "#afa7ac",
      "good name": ""
    },
    {
      "name": "Beige",
      "hex": "#e6daa6",
      "good name": "x"
    },
    {
      "name": "Beige Ganesh",
      "hex": "#cfb095",
      "good name": ""
    },
    {
      "name": "Beige Green",
      "hex": "#e0d8b0",
      "good name": ""
    },
    {
      "name": "Beige Intenso",
      "hex": "#c5a88d",
      "good name": ""
    },
    {
      "name": "Beige Linen",
      "hex": "#e2dac6",
      "good name": ""
    },
    {
      "name": "Beige Red",
      "hex": "#de9408",
      "good name": ""
    },
    {
      "name": "Beige Royal",
      "hex": "#cfc8b8",
      "good name": ""
    },
    {
      "name": "Beige Topaz",
      "hex": "#ffc87c",
      "good name": ""
    },
    {
      "name": "Beijing Blue",
      "hex": "#3e7daa",
      "good name": ""
    },
    {
      "name": "Beijing Moon",
      "hex": "#a9a2a3",
      "good name": ""
    },
    {
      "name": "Bel Air Blue",
      "hex": "#819ac1",
      "good name": ""
    },
    {
      "name": "Bel Esprit",
      "hex": "#9bbcc3",
      "good name": ""
    },
    {
      "name": "Belfast",
      "hex": "#558d4f",
      "good name": ""
    },
    {
      "name": "Belgian Block",
      "hex": "#a3a9a6",
      "good name": ""
    },
    {
      "name": "Belgian Blonde",
      "hex": "#f7efd0",
      "good name": ""
    },
    {
      "name": "Belgian Cream",
      "hex": "#f9f1e2",
      "good name": ""
    },
    {
      "name": "Belgian Sweet",
      "hex": "#8d7560",
      "good name": ""
    },
    {
      "name": "Belgian Waffle",
      "hex": "#f3dfb6",
      "good name": "x"
    },
    {
      "name": "Believable Buff",
      "hex": "#dbc7a8",
      "good name": ""
    },
    {
      "name": "Belize",
      "hex": "#7fd3d3",
      "good name": ""
    },
    {
      "name": "Belize Green",
      "hex": "#b9c3b3",
      "good name": ""
    },
    {
      "name": "Bell Blue",
      "hex": "#618b97",
      "good name": ""
    },
    {
      "name": "Bell Heather",
      "hex": "#a475b1",
      "good name": ""
    },
    {
      "name": "Bell Tower",
      "hex": "#dad0bb",
      "good name": ""
    },
    {
      "name": "Bella",
      "hex": "#574057",
      "good name": ""
    },
    {
      "name": "Bella Green",
      "hex": "#93c3b1",
      "good name": ""
    },
    {
      "name": "Bella Mia",
      "hex": "#dac5bd",
      "good name": ""
    },
    {
      "name": "Bella Pink",
      "hex": "#e08194",
      "good name": ""
    },
    {
      "name": "Bella Sera",
      "hex": "#40465d",
      "good name": ""
    },
    {
      "name": "Bella Vista",
      "hex": "#0b695b",
      "good name": ""
    },
    {
      "name": "Belladonna",
      "hex": "#220011",
      "good name": "x"
    },
    {
      "name": "Belladonna's Leaf",
      "hex": "#adc3a7",
      "good name": ""
    },
    {
      "name": "Bellagio Fountains",
      "hex": "#b7dff3",
      "good name": ""
    },
    {
      "name": "Belle of the Ball",
      "hex": "#e3cbc0",
      "good name": ""
    },
    {
      "name": "Bellflower",
      "hex": "#5d66aa",
      "good name": "x"
    },
    {
      "name": "Bellflower Blue",
      "hex": "#e1e9ef",
      "good name": ""
    },
    {
      "name": "Bellflower Violet",
      "hex": "#b2a5b7",
      "good name": ""
    },
    {
      "name": "Bellini",
      "hex": "#f4c9b1",
      "good name": "x"
    },
    {
      "name": "Bellini Fizz",
      "hex": "#f5c78e",
      "good name": ""
    },
    {
      "name": "Belly Fire",
      "hex": "#773b38",
      "good name": ""
    },
    {
      "name": "Belly Flop",
      "hex": "#00817f",
      "good name": ""
    },
    {
      "name": "Beloved Pink",
      "hex": "#e9d3d4",
      "good name": ""
    },
    {
      "name": "Beloved Sunflower",
      "hex": "#ffba24",
      "good name": "x"
    },
    {
      "name": "Below Zero",
      "hex": "#87cded",
      "good name": "x"
    },
    {
      "name": "Beluga",
      "hex": "#eff2f1",
      "good name": "x"
    },
    {
      "name": "Belvedere Cream",
      "hex": "#e3dbc3",
      "good name": ""
    },
    {
      "name": "Belyi White",
      "hex": "#f0f1e1",
      "good name": ""
    },
    {
      "name": "Benevolence",
      "hex": "#694977",
      "good name": ""
    },
    {
      "name": "Benevolent Pink",
      "hex": "#dd1188",
      "good name": "x"
    },
    {
      "name": "Bengal",
      "hex": "#cc974d",
      "good name": "x"
    },
    {
      "name": "Bengal Blue",
      "hex": "#38738b",
      "good name": ""
    },
    {
      "name": "Bengal Grass",
      "hex": "#8e773f",
      "good name": ""
    },
    {
      "name": "Bengala Red",
      "hex": "#8f2e14",
      "good name": ""
    },
    {
      "name": "Bengara Red",
      "hex": "#913225",
      "good name": ""
    },
    {
      "name": "Beni Shoga",
      "hex": "#b85241",
      "good name": ""
    },
    {
      "name": "Benifuji",
      "hex": "#bb7796",
      "good name": ""
    },
    {
      "name": "Benihi Red",
      "hex": "#f35336",
      "good name": ""
    },
    {
      "name": "Benikakehana Purple",
      "hex": "#5a4f74",
      "good name": ""
    },
    {
      "name": "Benikeshinezumi Purple",
      "hex": "#44312e",
      "good name": ""
    },
    {
      "name": "Benimidori Purple",
      "hex": "#78779b",
      "good name": ""
    },
    {
      "name": "Benitoite",
      "hex": "#007baa",
      "good name": ""
    },
    {
      "name": "Beniukon Bronze",
      "hex": "#fb8136",
      "good name": ""
    },
    {
      "name": "Benthic Black",
      "hex": "#000011",
      "good name": ""
    },
    {
      "name": "Bento Box",
      "hex": "#cc363c",
      "good name": "x"
    },
    {
      "name": "Bergamot",
      "hex": "#95c703",
      "good name": "x"
    },
    {
      "name": "Bergamot Orange",
      "hex": "#f59d59",
      "good name": ""
    },
    {
      "name": "Bering Sea",
      "hex": "#4b5b6e",
      "good name": ""
    },
    {
      "name": "Bering Wave",
      "hex": "#3d6d84",
      "good name": ""
    },
    {
      "name": "Berkeley Hills",
      "hex": "#7e613f",
      "good name": ""
    },
    {
      "name": "Berkshire Lace",
      "hex": "#f0e1cf",
      "good name": ""
    },
    {
      "name": "Berlin Blue",
      "hex": "#5588cc",
      "good name": ""
    },
    {
      "name": "Bermuda",
      "hex": "#1b7d8d",
      "good name": "x"
    },
    {
      "name": "Bermuda Blue",
      "hex": "#8cb1c2",
      "good name": ""
    },
    {
      "name": "Bermuda Grass",
      "hex": "#a19f79",
      "good name": "x"
    },
    {
      "name": "Bermuda Grey",
      "hex": "#6b8ba2",
      "good name": ""
    },
    {
      "name": "Bermuda Onion",
      "hex": "#9d5a8f",
      "good name": ""
    },
    {
      "name": "Bermuda Sand",
      "hex": "#dacbbf",
      "good name": ""
    },
    {
      "name": "Bermuda Shell",
      "hex": "#f9eee3",
      "good name": ""
    },
    {
      "name": "Bermuda Son",
      "hex": "#f0e9be",
      "good name": ""
    },
    {
      "name": "Bermuda Triangle",
      "hex": "#6f8c9f",
      "good name": ""
    },
    {
      "name": "Bermudagrass",
      "hex": "#6bc271",
      "good name": ""
    },
    {
      "name": "Bermudan Blue",
      "hex": "#386171",
      "good name": ""
    },
    {
      "name": "Bern Red",
      "hex": "#e20909",
      "good name": ""
    },
    {
      "name": "Berries and Cream",
      "hex": "#9e6a75",
      "good name": ""
    },
    {
      "name": "Berries n Cream",
      "hex": "#f2b8ca",
      "good name": "x"
    },
    {
      "name": "Berry",
      "hex": "#990f4b",
      "good name": "x"
    },
    {
      "name": "Berry Blackmail",
      "hex": "#662277",
      "good name": ""
    },
    {
      "name": "Berry Bliss",
      "hex": "#9e8295",
      "good name": ""
    },
    {
      "name": "Berry Blue",
      "hex": "#32607a",
      "good name": ""
    },
    {
      "name": "Berry Blue Green",
      "hex": "#264b56",
      "good name": ""
    },
    {
      "name": "Berry Blush",
      "hex": "#b88591",
      "good name": ""
    },
    {
      "name": "Berry Boost",
      "hex": "#bb5588",
      "good name": ""
    },
    {
      "name": "Berry Bright",
      "hex": "#a08497",
      "good name": ""
    },
    {
      "name": "Berry Brown",
      "hex": "#544f4c",
      "good name": ""
    },
    {
      "name": "Berry Burst",
      "hex": "#ac72af",
      "good name": ""
    },
    {
      "name": "Berry Bush",
      "hex": "#77424e",
      "good name": ""
    },
    {
      "name": "Berry Chalk",
      "hex": "#a6aebb",
      "good name": ""
    },
    {
      "name": "Berry Charm",
      "hex": "#4f4763",
      "good name": ""
    },
    {
      "name": "Berry Cheesecake",
      "hex": "#f8e3dd",
      "good name": ""
    },
    {
      "name": "Berry Chocolate",
      "hex": "#3f000f",
      "good name": ""
    },
    {
      "name": "Berry Conserve",
      "hex": "#765269",
      "good name": ""
    },
    {
      "name": "Berry Cream",
      "hex": "#9a8ca2",
      "good name": ""
    },
    {
      "name": "Berry Crush",
      "hex": "#aa6772",
      "good name": ""
    },
    {
      "name": "Berry Frappé",
      "hex": "#b3a1c6",
      "good name": ""
    },
    {
      "name": "Berry Frost",
      "hex": "#ebded7",
      "good name": ""
    },
    {
      "name": "Berry Jam",
      "hex": "#655883",
      "good name": ""
    },
    {
      "name": "Berry Light",
      "hex": "#673b66",
      "good name": ""
    },
    {
      "name": "Berry Mix",
      "hex": "#555a90",
      "good name": ""
    },
    {
      "name": "Berry Mojito",
      "hex": "#b6caca",
      "good name": ""
    },
    {
      "name": "Berry Patch",
      "hex": "#84395d",
      "good name": ""
    },
    {
      "name": "Berry Pie",
      "hex": "#4f6d8e",
      "good name": ""
    },
    {
      "name": "Berry Popsicle",
      "hex": "#d6a5cd",
      "good name": ""
    },
    {
      "name": "Berry Riche",
      "hex": "#e5a2ab",
      "good name": ""
    },
    {
      "name": "Berry Rossi",
      "hex": "#992244",
      "good name": ""
    },
    {
      "name": "Berry Smoothie",
      "hex": "#895360",
      "good name": ""
    },
    {
      "name": "Berry Syrup",
      "hex": "#64537c",
      "good name": ""
    },
    {
      "name": "Berry Wine",
      "hex": "#624d55",
      "good name": ""
    },
    {
      "name": "Berta Blue",
      "hex": "#45dcff",
      "good name": ""
    },
    {
      "name": "Beru",
      "hex": "#bfe4d4",
      "good name": ""
    },
    {
      "name": "Beryl Black Green",
      "hex": "#2b322d",
      "good name": ""
    },
    {
      "name": "Beryl Green",
      "hex": "#bcbfa8",
      "good name": ""
    },
    {
      "name": "Beryl Pearl",
      "hex": "#e2e3df",
      "good name": ""
    },
    {
      "name": "Beryl Red",
      "hex": "#a16381",
      "good name": ""
    },
    {
      "name": "Beryllonite",
      "hex": "#e9e5d7",
      "good name": ""
    },
    {
      "name": "Bessie",
      "hex": "#685e5b",
      "good name": ""
    },
    {
      "name": "Best Beige",
      "hex": "#c6b49c",
      "good name": ""
    },
    {
      "name": "Best Bronze",
      "hex": "#5d513e",
      "good name": ""
    },
    {
      "name": "Best in Show",
      "hex": "#b9b7bd",
      "good name": ""
    },
    {
      "name": "Best of Summer",
      "hex": "#f7f2d9",
      "good name": ""
    },
    {
      "name": "Best of the Bunch",
      "hex": "#bd5442",
      "good name": ""
    },
    {
      "name": "Bestial Brown",
      "hex": "#6b3900",
      "good name": ""
    },
    {
      "name": "Bestial Red",
      "hex": "#992211",
      "good name": ""
    },
    {
      "name": "Bestigor Flesh",
      "hex": "#d38a57",
      "good name": ""
    },
    {
      "name": "Betalain Red",
      "hex": "#7d655c",
      "good name": ""
    },
    {
      "name": "Betel Nut Dye",
      "hex": "#352925",
      "good name": ""
    },
    {
      "name": "Bethany",
      "hex": "#cadbbd",
      "good name": ""
    },
    {
      "name": "Bethlehem Red",
      "hex": "#ee0022",
      "good name": ""
    },
    {
      "name": "Bethlehem Superstar",
      "hex": "#eaeeda",
      "good name": "x"
    },
    {
      "name": "Betsy",
      "hex": "#73c9d9",
      "good name": ""
    },
    {
      "name": "Betta Fish",
      "hex": "#3a6b66",
      "good name": ""
    },
    {
      "name": "Better Than Beige",
      "hex": "#ebe2cb",
      "good name": ""
    },
    {
      "name": "Beurre Blanc",
      "hex": "#ede1be",
      "good name": "x"
    },
    {
      "name": "Beveled Glass",
      "hex": "#7accb8",
      "good name": "x"
    },
    {
      "name": "Bewitching",
      "hex": "#75495e",
      "good name": ""
    },
    {
      "name": "Bewitching Blue",
      "hex": "#bbd0e3",
      "good name": ""
    },
    {
      "name": "Beyond the Clouds",
      "hex": "#aaeeff",
      "good name": ""
    },
    {
      "name": "Beyond the Pines",
      "hex": "#688049",
      "good name": "x"
    },
    {
      "name": "Beyond the Stars",
      "hex": "#0a3251",
      "good name": "x"
    },
    {
      "name": "Beyond the Wall",
      "hex": "#d7e0eb",
      "good name": ""
    },
    {
      "name": "Bff",
      "hex": "#dbb0d3",
      "good name": ""
    },
    {
      "name": "Bhūrā Brown",
      "hex": "#947706",
      "good name": ""
    },
    {
      "name": "Białowieża Forest",
      "hex": "#1c5022",
      "good name": ""
    },
    {
      "name": "Bianca",
      "hex": "#f4efe0",
      "good name": "x"
    },
    {
      "name": "Bianchi Green",
      "hex": "#3dcfc2",
      "good name": ""
    },
    {
      "name": "Bicycle Yellow",
      "hex": "#ffe58c",
      "good name": ""
    },
    {
      "name": "Bicyclette",
      "hex": "#802c3a",
      "good name": ""
    },
    {
      "name": "Bidwell Blue",
      "hex": "#a9b9b5",
      "good name": ""
    },
    {
      "name": "Bidwell Brown",
      "hex": "#b19c8f",
      "good name": ""
    },
    {
      "name": "Biedermeier Blue",
      "hex": "#507ca0",
      "good name": ""
    },
    {
      "name": "Biel-Tan Green",
      "hex": "#1ba169",
      "good name": ""
    },
    {
      "name": "Bierwurst",
      "hex": "#f0908d",
      "good name": ""
    },
    {
      "name": "Big Band",
      "hex": "#afaba0",
      "good name": ""
    },
    {
      "name": "Big Bang Pink",
      "hex": "#ff0099",
      "good name": "x"
    },
    {
      "name": "Big Bus Yellow",
      "hex": "#ffda8b",
      "good name": ""
    },
    {
      "name": "Big Chill",
      "hex": "#7ecbe2",
      "good name": ""
    },
    {
      "name": "Big Cypress",
      "hex": "#b98675",
      "good name": ""
    },
    {
      "name": "Big Daddy Blue",
      "hex": "#5d6b75",
      "good name": ""
    },
    {
      "name": "Big Dip O’Ruby",
      "hex": "#9c2542",
      "good name": ""
    },
    {
      "name": "Big Dipper",
      "hex": "#41494b",
      "good name": ""
    },
    {
      "name": "Big Fish",
      "hex": "#99a38e",
      "good name": ""
    },
    {
      "name": "Big Fish to Fry",
      "hex": "#dadbe1",
      "good name": "x"
    },
    {
      "name": "Big Foot Feet",
      "hex": "#e88e5a",
      "good name": ""
    },
    {
      "name": "Big Horn Mountains",
      "hex": "#b79e94",
      "good name": ""
    },
    {
      "name": "Big Sky",
      "hex": "#cde2de",
      "good name": ""
    },
    {
      "name": "Big Spender",
      "hex": "#acddaf",
      "good name": "x"
    },
    {
      "name": "Big Stone",
      "hex": "#334046",
      "good name": ""
    },
    {
      "name": "Big Stone Beach",
      "hex": "#886e54",
      "good name": ""
    },
    {
      "name": "Big Sur",
      "hex": "#b3cadc",
      "good name": ""
    },
    {
      "name": "Big Sur Blue Jade",
      "hex": "#3f6e8e",
      "good name": ""
    },
    {
      "name": "Big Surf",
      "hex": "#96d0d1",
      "good name": ""
    },
    {
      "name": "Big Yellow Streak",
      "hex": "#ffee22",
      "good name": ""
    },
    {
      "name": "Big Yellow Taxi",
      "hex": "#ffff33",
      "good name": "x"
    },
    {
      "name": "Bigfoot",
      "hex": "#715145",
      "good name": "x"
    },
    {
      "name": "Bighorn Sheep",
      "hex": "#20120e",
      "good name": ""
    },
    {
      "name": "Bijou Blue",
      "hex": "#4e5e7f",
      "good name": ""
    },
    {
      "name": "Bijou Red",
      "hex": "#a33d3b",
      "good name": ""
    },
    {
      "name": "Bijoux Green",
      "hex": "#676b55",
      "good name": ""
    },
    {
      "name": "Biking Red",
      "hex": "#77212e",
      "good name": ""
    },
    {
      "name": "Biking Trail",
      "hex": "#c3c0b1",
      "good name": ""
    },
    {
      "name": "Bilbao",
      "hex": "#3e8027",
      "good name": ""
    },
    {
      "name": "Bilberry",
      "hex": "#71777e",
      "good name": ""
    },
    {
      "name": "Bile",
      "hex": "#b5c306",
      "good name": ""
    },
    {
      "name": "Bilious Brown",
      "hex": "#e39f08",
      "good name": ""
    },
    {
      "name": "Bilious Green",
      "hex": "#a9d171",
      "good name": ""
    },
    {
      "name": "Billabong",
      "hex": "#1b6f81",
      "good name": ""
    },
    {
      "name": "Billet",
      "hex": "#ad7c35",
      "good name": ""
    },
    {
      "name": "Billiard",
      "hex": "#00aa92",
      "good name": "x"
    },
    {
      "name": "Billiard Ball",
      "hex": "#276b40",
      "good name": ""
    },
    {
      "name": "Billiard Green",
      "hex": "#305a4a",
      "good name": ""
    },
    {
      "name": "Billiard Room",
      "hex": "#50846e",
      "good name": ""
    },
    {
      "name": "Billiard Table",
      "hex": "#155843",
      "good name": ""
    },
    {
      "name": "Billowing Clouds",
      "hex": "#d8dee3",
      "good name": ""
    },
    {
      "name": "Billowing Sail",
      "hex": "#d8e7e7",
      "good name": ""
    },
    {
      "name": "Billowing Smoke",
      "hex": "#6e726a",
      "good name": ""
    },
    {
      "name": "Billowy Breeze",
      "hex": "#afc7cd",
      "good name": ""
    },
    {
      "name": "Billowy Clouds",
      "hex": "#f6f0e9",
      "good name": ""
    },
    {
      "name": "Billowy Down",
      "hex": "#eff0e9",
      "good name": ""
    },
    {
      "name": "Billycart Blue",
      "hex": "#4c77a4",
      "good name": ""
    },
    {
      "name": "Biloba Flower",
      "hex": "#ae99d2",
      "good name": ""
    },
    {
      "name": "Biloxi",
      "hex": "#f4e4cd",
      "good name": ""
    },
    {
      "name": "Biloxi Blue",
      "hex": "#0075b8",
      "good name": ""
    },
    {
      "name": "Biltmore Buff",
      "hex": "#e3c9a1",
      "good name": ""
    },
    {
      "name": "Biltong",
      "hex": "#410200",
      "good name": ""
    },
    {
      "name": "Bimini Blue",
      "hex": "#007a91",
      "good name": ""
    },
    {
      "name": "Binary Star",
      "hex": "#616767",
      "good name": ""
    },
    {
      "name": "Bindi Dot",
      "hex": "#8b3439",
      "good name": ""
    },
    {
      "name": "Bindi Red",
      "hex": "#b0003c",
      "good name": "x"
    },
    {
      "name": "Bing Cherry Pie",
      "hex": "#af4967",
      "good name": ""
    },
    {
      "name": "Binrouji Black",
      "hex": "#433d3c",
      "good name": ""
    },
    {
      "name": "Bio Blue",
      "hex": "#465f9e",
      "good name": ""
    },
    {
      "name": "Biogenic Sand",
      "hex": "#ffefd5",
      "good name": ""
    },
    {
      "name": "Biohazard Suit",
      "hex": "#fbfb4c",
      "good name": "x"
    },
    {
      "name": "Biology Experiments",
      "hex": "#91a135",
      "good name": ""
    },
    {
      "name": "Bioluminescence",
      "hex": "#55eeff",
      "good name": ""
    },
    {
      "name": "Biopunk",
      "hex": "#66ff55",
      "good name": ""
    },
    {
      "name": "BioShock",
      "hex": "#889900",
      "good name": "x"
    },
    {
      "name": "Biotic Grasp",
      "hex": "#eeee44",
      "good name": ""
    },
    {
      "name": "Biotic Orb",
      "hex": "#eedd55",
      "good name": ""
    },
    {
      "name": "Birch",
      "hex": "#3f3726",
      "good name": ""
    },
    {
      "name": "Birch Beige",
      "hex": "#d9c3a1",
      "good name": ""
    },
    {
      "name": "Birch Forest",
      "hex": "#899a8b",
      "good name": ""
    },
    {
      "name": "Birch Leaf Green",
      "hex": "#637e1d",
      "good name": ""
    },
    {
      "name": "Birch Strain",
      "hex": "#dfb45f",
      "good name": ""
    },
    {
      "name": "Birch White",
      "hex": "#f6eedf",
      "good name": "x"
    },
    {
      "name": "Birchwood",
      "hex": "#ccbeac",
      "good name": ""
    },
    {
      "name": "Birchy Woods",
      "hex": "#806843",
      "good name": ""
    },
    {
      "name": "Bird Blue",
      "hex": "#7b929e",
      "good name": ""
    },
    {
      "name": "Bird Blue Grey",
      "hex": "#7f92a0",
      "good name": ""
    },
    {
      "name": "Bird Flower",
      "hex": "#d0c117",
      "good name": ""
    },
    {
      "name": "Bird Of Paradise",
      "hex": "#0083a8",
      "good name": ""
    },
    {
      "name": "Bird's Child",
      "hex": "#fff1cf",
      "good name": ""
    },
    {
      "name": "Bird's Egg Green",
      "hex": "#aaccb9",
      "good name": ""
    },
    {
      "name": "Bird's Nest",
      "hex": "#cfbb9b",
      "good name": ""
    },
    {
      "name": "Bird’s Eye",
      "hex": "#b9030a",
      "good name": ""
    },
    {
      "name": "Birdhouse Brown",
      "hex": "#6c483a",
      "good name": ""
    },
    {
      "name": "Birdie",
      "hex": "#e9e424",
      "good name": ""
    },
    {
      "name": "Birdie Num Num",
      "hex": "#89acda",
      "good name": ""
    },
    {
      "name": "Birdseed",
      "hex": "#e2c28e",
      "good name": ""
    },
    {
      "name": "Birdseye Maple",
      "hex": "#e4c495",
      "good name": ""
    },
    {
      "name": "Biro Blue",
      "hex": "#2f3946",
      "good name": ""
    },
    {
      "name": "Birōdo Green",
      "hex": "#224634",
      "good name": ""
    },
    {
      "name": "Birth of a Star",
      "hex": "#fce9df",
      "good name": ""
    },
    {
      "name": "Birthday Cake",
      "hex": "#e9d2cc",
      "good name": ""
    },
    {
      "name": "Birthday Candle",
      "hex": "#cfa2ad",
      "good name": ""
    },
    {
      "name": "Birthday King",
      "hex": "#9bdcb9",
      "good name": ""
    },
    {
      "name": "Birthday Suit",
      "hex": "#e2c7b6",
      "good name": ""
    },
    {
      "name": "Birthstone",
      "hex": "#79547a",
      "good name": ""
    },
    {
      "name": "Biscay",
      "hex": "#2f3c53",
      "good name": ""
    },
    {
      "name": "Biscay Bay",
      "hex": "#097988",
      "good name": ""
    },
    {
      "name": "Biscay Green",
      "hex": "#55c6a9",
      "good name": ""
    },
    {
      "name": "Biscotti",
      "hex": "#dac7ab",
      "good name": ""
    },
    {
      "name": "Biscuit",
      "hex": "#feedca",
      "good name": "x"
    },
    {
      "name": "Biscuit Beige",
      "hex": "#e6bfa6",
      "good name": ""
    },
    {
      "name": "Biscuit Cream",
      "hex": "#f9ccb7",
      "good name": ""
    },
    {
      "name": "Biscuit Dough",
      "hex": "#e8dbbd",
      "good name": "x"
    },
    {
      "name": "Bishop Red",
      "hex": "#c473a9",
      "good name": ""
    },
    {
      "name": "Bismarck",
      "hex": "#486c7a",
      "good name": ""
    },
    {
      "name": "Bison",
      "hex": "#6e4f3a",
      "good name": "x"
    },
    {
      "name": "Bison Beige",
      "hex": "#9f9180",
      "good name": ""
    },
    {
      "name": "Bison Brown",
      "hex": "#584941",
      "good name": ""
    },
    {
      "name": "Bison Hide",
      "hex": "#b5ac94",
      "good name": ""
    },
    {
      "name": "Bisque",
      "hex": "#ffe4c4",
      "good name": "x"
    },
    {
      "name": "Bisque Tan",
      "hex": "#e5d2b0",
      "good name": ""
    },
    {
      "name": "Bistre",
      "hex": "#3d2b1f",
      "good name": ""
    },
    {
      "name": "Bistre Brown",
      "hex": "#967117",
      "good name": ""
    },
    {
      "name": "Bistro",
      "hex": "#705950",
      "good name": ""
    },
    {
      "name": "Bistro Green",
      "hex": "#395551",
      "good name": ""
    },
    {
      "name": "Bit of Berry",
      "hex": "#dd5599",
      "good name": ""
    },
    {
      "name": "Bit of Blue",
      "hex": "#e2eaeb",
      "good name": ""
    },
    {
      "name": "Bit of Heaven",
      "hex": "#cad7de",
      "good name": ""
    },
    {
      "name": "Bit of Lime",
      "hex": "#e1e5ac",
      "good name": ""
    },
    {
      "name": "Bit of Sugar",
      "hex": "#f4f2ec",
      "good name": ""
    },
    {
      "name": "Bitcoin",
      "hex": "#ffbb11",
      "good name": ""
    },
    {
      "name": "Bite the Bullet",
      "hex": "#ecebce",
      "good name": ""
    },
    {
      "name": "Bitter",
      "hex": "#88896c",
      "good name": ""
    },
    {
      "name": "Bitter Briar",
      "hex": "#8d7470",
      "good name": ""
    },
    {
      "name": "Bitter Chocolate",
      "hex": "#9e5b40",
      "good name": ""
    },
    {
      "name": "Bitter Clover Green",
      "hex": "#769789",
      "good name": ""
    },
    {
      "name": "Bitter Dandelion",
      "hex": "#6ecb3c",
      "good name": ""
    },
    {
      "name": "Bitter Lemon",
      "hex": "#d2db32",
      "good name": "x"
    },
    {
      "name": "Bitter Lime",
      "hex": "#cfff00",
      "good name": ""
    },
    {
      "name": "Bitter Liquorice",
      "hex": "#262926",
      "good name": "x"
    },
    {
      "name": "Bitter Melon",
      "hex": "#cfd1b2",
      "good name": "x"
    },
    {
      "name": "Bitter Orange",
      "hex": "#d5762b",
      "good name": ""
    },
    {
      "name": "Bitter Sage",
      "hex": "#97a18d",
      "good name": ""
    },
    {
      "name": "Bitter Violet",
      "hex": "#856d9e",
      "good name": ""
    },
    {
      "name": "Bittersweet",
      "hex": "#fea051",
      "good name": "x"
    },
    {
      "name": "Bittersweet Shimmer",
      "hex": "#bf4f51",
      "good name": ""
    },
    {
      "name": "Bittersweet Stem",
      "hex": "#cbb49a",
      "good name": ""
    },
    {
      "name": "Bizarre",
      "hex": "#e7d2c8",
      "good name": ""
    },
    {
      "name": "Black",
      "hex": "#000000",
      "good name": "x"
    },
    {
      "name": "Black Bamboo",
      "hex": "#5b5d53",
      "good name": ""
    },
    {
      "name": "Black Bay",
      "hex": "#474a4e",
      "good name": ""
    },
    {
      "name": "Black Bean",
      "hex": "#4e4b4a",
      "good name": ""
    },
    {
      "name": "Black Beauty",
      "hex": "#26262a",
      "good name": ""
    },
    {
      "name": "Black Blueberry",
      "hex": "#2f2f48",
      "good name": ""
    },
    {
      "name": "Black Boudoir",
      "hex": "#454749",
      "good name": ""
    },
    {
      "name": "Black Cat",
      "hex": "#2e2f31",
      "good name": ""
    },
    {
      "name": "Black Chestnut Oak",
      "hex": "#252321",
      "good name": ""
    },
    {
      "name": "Black Chocolate",
      "hex": "#441100",
      "good name": "x"
    },
    {
      "name": "Black Coffee",
      "hex": "#3b302f",
      "good name": ""
    },
    {
      "name": "Black Coral",
      "hex": "#54626f",
      "good name": ""
    },
    {
      "name": "Black Dahlia",
      "hex": "#4e434d",
      "good name": ""
    },
    {
      "name": "Black Diamond Apple",
      "hex": "#8a779a",
      "good name": ""
    },
    {
      "name": "Black Dragon's Cauldron",
      "hex": "#545562",
      "good name": ""
    },
    {
      "name": "Black Drop",
      "hex": "#90abd9",
      "good name": ""
    },
    {
      "name": "Black Elder",
      "hex": "#a66e7a",
      "good name": ""
    },
    {
      "name": "Black Elegance",
      "hex": "#50484a",
      "good name": ""
    },
    {
      "name": "Black Emerald",
      "hex": "#12221d",
      "good name": ""
    },
    {
      "name": "Black Evergreen",
      "hex": "#45524f",
      "good name": ""
    },
    {
      "name": "Black Feather",
      "hex": "#112222",
      "good name": ""
    },
    {
      "name": "Black Flame",
      "hex": "#484b5a",
      "good name": ""
    },
    {
      "name": "Black Forest",
      "hex": "#5e6354",
      "good name": "x"
    },
    {
      "name": "Black Forest Blue",
      "hex": "#29485a",
      "good name": ""
    },
    {
      "name": "Black Forest Green",
      "hex": "#424740",
      "good name": ""
    },
    {
      "name": "Black Fox",
      "hex": "#4f4842",
      "good name": ""
    },
    {
      "name": "Black Garnet",
      "hex": "#4e4444",
      "good name": ""
    },
    {
      "name": "Black Glaze",
      "hex": "#001111",
      "good name": ""
    },
    {
      "name": "Black Green",
      "hex": "#384e49",
      "good name": ""
    },
    {
      "name": "Black Grey",
      "hex": "#24272e",
      "good name": ""
    },
    {
      "name": "Black Haze",
      "hex": "#e0ded7",
      "good name": ""
    },
    {
      "name": "Black Headed Gull",
      "hex": "#9c856c",
      "good name": ""
    },
    {
      "name": "Black Hills Gold",
      "hex": "#c89180",
      "good name": ""
    },
    {
      "name": "Black Hole",
      "hex": "#010203",
      "good name": "x"
    },
    {
      "name": "Black Howl",
      "hex": "#202030",
      "good name": ""
    },
    {
      "name": "Black Htun",
      "hex": "#110033",
      "good name": ""
    },
    {
      "name": "Black Ice",
      "hex": "#4d5051",
      "good name": ""
    },
    {
      "name": "Black Ink",
      "hex": "#44413c",
      "good name": ""
    },
    {
      "name": "Black Iris",
      "hex": "#2b3042",
      "good name": ""
    },
    {
      "name": "Black Is Beautiful",
      "hex": "#552222",
      "good name": ""
    },
    {
      "name": "Black Jasmine Rice",
      "hex": "#74563d",
      "good name": ""
    },
    {
      "name": "Black Kite",
      "hex": "#351e1c",
      "good name": ""
    },
    {
      "name": "Black Knight",
      "hex": "#010b13",
      "good name": "x"
    },
    {
      "name": "Black Lacquer",
      "hex": "#3f3e3e",
      "good name": ""
    },
    {
      "name": "Black Lead",
      "hex": "#474c4d",
      "good name": ""
    },
    {
      "name": "Black Leather Jacket",
      "hex": "#253529",
      "good name": ""
    },
    {
      "name": "Black Licorice",
      "hex": "#3a3b3b",
      "good name": ""
    },
    {
      "name": "Black Locust",
      "hex": "#646763",
      "good name": ""
    },
    {
      "name": "Black Magic",
      "hex": "#4f4554",
      "good name": "x"
    },
    {
      "name": "Black Mana",
      "hex": "#858585",
      "good name": "x"
    },
    {
      "name": "Black Market",
      "hex": "#222244",
      "good name": ""
    },
    {
      "name": "Black Marlin",
      "hex": "#383740",
      "good name": ""
    },
    {
      "name": "Black Mesa",
      "hex": "#222211",
      "good name": ""
    },
    {
      "name": "Black Metal",
      "hex": "#060606",
      "good name": "x"
    },
    {
      "name": "Black Mocha",
      "hex": "#4b4743",
      "good name": ""
    },
    {
      "name": "Black Oak",
      "hex": "#4e4f4e",
      "good name": ""
    },
    {
      "name": "Black of Night",
      "hex": "#323639",
      "good name": ""
    },
    {
      "name": "Black Olive",
      "hex": "#3b3c36",
      "good name": "x"
    },
    {
      "name": "Black Onyx",
      "hex": "#2b272b",
      "good name": ""
    },
    {
      "name": "Black Orchid",
      "hex": "#525463",
      "good name": "x"
    },
    {
      "name": "Black Out",
      "hex": "#222222",
      "good name": ""
    },
    {
      "name": "Black Panther",
      "hex": "#424242",
      "good name": "x"
    },
    {
      "name": "Black Pearl",
      "hex": "#1e272c",
      "good name": "x"
    },
    {
      "name": "Black Pine Green",
      "hex": "#33654a",
      "good name": ""
    },
    {
      "name": "Black Plum",
      "hex": "#6c5765",
      "good name": ""
    },
    {
      "name": "Black Pool",
      "hex": "#4f5552",
      "good name": ""
    },
    {
      "name": "Black Powder",
      "hex": "#34342c",
      "good name": ""
    },
    {
      "name": "Black Power",
      "hex": "#654b37",
      "good name": "x"
    },
    {
      "name": "Black Pudding",
      "hex": "#a44a56",
      "good name": ""
    },
    {
      "name": "Black Queen",
      "hex": "#694d27",
      "good name": ""
    },
    {
      "name": "Black Raspberry",
      "hex": "#16110d",
      "good name": ""
    },
    {
      "name": "Black Ribbon",
      "hex": "#484c51",
      "good name": ""
    },
    {
      "name": "Black River Falls",
      "hex": "#343e54",
      "good name": ""
    },
    {
      "name": "Black Rock",
      "hex": "#2c2d3c",
      "good name": ""
    },
    {
      "name": "Black Rooster",
      "hex": "#331111",
      "good name": ""
    },
    {
      "name": "Black Rose",
      "hex": "#532934",
      "good name": ""
    },
    {
      "name": "Black Russian",
      "hex": "#24252b",
      "good name": ""
    },
    {
      "name": "Black Sabbath",
      "hex": "#220022",
      "good name": "x"
    },
    {
      "name": "Black Sable",
      "hex": "#434b4d",
      "good name": ""
    },
    {
      "name": "Black Safflower",
      "hex": "#302833",
      "good name": ""
    },
    {
      "name": "Black Sand",
      "hex": "#5b4e4b",
      "good name": ""
    },
    {
      "name": "Black Sapphire",
      "hex": "#434555",
      "good name": ""
    },
    {
      "name": "Black Shadows",
      "hex": "#bfafb2",
      "good name": ""
    },
    {
      "name": "Black Sheep",
      "hex": "#0f0d0d",
      "good name": "x"
    },
    {
      "name": "Black Slug",
      "hex": "#332211",
      "good name": ""
    },
    {
      "name": "Black Smoke",
      "hex": "#3e3e3f",
      "good name": ""
    },
    {
      "name": "Black Soap",
      "hex": "#19443c",
      "good name": ""
    },
    {
      "name": "Black Space",
      "hex": "#545354",
      "good name": ""
    },
    {
      "name": "Black Spruce",
      "hex": "#4c5752",
      "good name": ""
    },
    {
      "name": "Black Squeeze",
      "hex": "#e5e6df",
      "good name": ""
    },
    {
      "name": "Black Suede",
      "hex": "#434342",
      "good name": ""
    },
    {
      "name": "Black Swan",
      "hex": "#332200",
      "good name": ""
    },
    {
      "name": "Black Tie",
      "hex": "#464647",
      "good name": ""
    },
    {
      "name": "Black Tortoise",
      "hex": "#353235",
      "good name": ""
    },
    {
      "name": "Black Truffle",
      "hex": "#463d3e",
      "good name": "x"
    },
    {
      "name": "Black Velvet",
      "hex": "#222233",
      "good name": ""
    },
    {
      "name": "Black Violet",
      "hex": "#2b2c42",
      "good name": ""
    },
    {
      "name": "Black Walnut",
      "hex": "#5e4f46",
      "good name": ""
    },
    {
      "name": "Black Wash",
      "hex": "#0c0c0c",
      "good name": "x"
    },
    {
      "name": "Black Water",
      "hex": "#2e4846",
      "good name": ""
    },
    {
      "name": "Black White",
      "hex": "#e5e4db",
      "good name": ""
    },
    {
      "name": "Blackadder",
      "hex": "#292c2c",
      "good name": ""
    },
    {
      "name": "Blackberry",
      "hex": "#43182f",
      "good name": "x"
    },
    {
      "name": "Blackberry Black",
      "hex": "#2e2848",
      "good name": ""
    },
    {
      "name": "Blackberry Burgundy",
      "hex": "#4c3938",
      "good name": ""
    },
    {
      "name": "Blackberry Cobbler",
      "hex": "#404d6a",
      "good name": ""
    },
    {
      "name": "Blackberry Cordial",
      "hex": "#3f2a47",
      "good name": ""
    },
    {
      "name": "Blackberry Cream",
      "hex": "#d9d3da",
      "good name": ""
    },
    {
      "name": "Blackberry Deep Red",
      "hex": "#633654",
      "good name": ""
    },
    {
      "name": "Blackberry Farm",
      "hex": "#62506b",
      "good name": ""
    },
    {
      "name": "Blackberry Harvest",
      "hex": "#504358",
      "good name": ""
    },
    {
      "name": "Blackberry Jam",
      "hex": "#87657e",
      "good name": ""
    },
    {
      "name": "Blackberry Leaf Green",
      "hex": "#507f6d",
      "good name": ""
    },
    {
      "name": "Blackberry Mocha",
      "hex": "#a58885",
      "good name": ""
    },
    {
      "name": "Blackberry Pie",
      "hex": "#64242e",
      "good name": ""
    },
    {
      "name": "Blackberry Sorbet",
      "hex": "#c1a3b9",
      "good name": ""
    },
    {
      "name": "Blackberry Tint",
      "hex": "#8f5973",
      "good name": ""
    },
    {
      "name": "Blackberry Wine",
      "hex": "#4d3246",
      "good name": ""
    },
    {
      "name": "Blackberry Yogurt",
      "hex": "#e5bddf",
      "good name": "x"
    },
    {
      "name": "Blackbird",
      "hex": "#3f444c",
      "good name": ""
    },
    {
      "name": "Blackbird's Egg",
      "hex": "#fce7e4",
      "good name": ""
    },
    {
      "name": "Blackboard Green",
      "hex": "#274c43",
      "good name": ""
    },
    {
      "name": "Blackcurrant",
      "hex": "#2e183b",
      "good name": ""
    },
    {
      "name": "Blackcurrant Conserve",
      "hex": "#52383d",
      "good name": ""
    },
    {
      "name": "Blackcurrant Elixir",
      "hex": "#5c4f6a",
      "good name": ""
    },
    {
      "name": "Blackened Brown",
      "hex": "#442200",
      "good name": ""
    },
    {
      "name": "Blackened Pearl",
      "hex": "#4d4b50",
      "good name": ""
    },
    {
      "name": "Blackest Berry",
      "hex": "#662266",
      "good name": ""
    },
    {
      "name": "Blackest Brown",
      "hex": "#403330",
      "good name": ""
    },
    {
      "name": "Blackfire Earth",
      "hex": "#7a5901",
      "good name": ""
    },
    {
      "name": "Blackheath",
      "hex": "#49454b",
      "good name": ""
    },
    {
      "name": "Blackish Brown",
      "hex": "#453b32",
      "good name": ""
    },
    {
      "name": "Blackish Green",
      "hex": "#5d6161",
      "good name": ""
    },
    {
      "name": "Blackish Grey",
      "hex": "#5b5c61",
      "good name": ""
    },
    {
      "name": "Blackjack",
      "hex": "#51504d",
      "good name": ""
    },
    {
      "name": "Blacklist",
      "hex": "#221133",
      "good name": ""
    },
    {
      "name": "Blackmail",
      "hex": "#220066",
      "good name": ""
    },
    {
      "name": "Blackn't",
      "hex": "#020f03",
      "good name": "x"
    },
    {
      "name": "Blackout",
      "hex": "#0e0702",
      "good name": "x"
    },
    {
      "name": "Blackthorn Berry",
      "hex": "#8470ff",
      "good name": ""
    },
    {
      "name": "Blackthorn Blue",
      "hex": "#4c606b",
      "good name": ""
    },
    {
      "name": "Blackthorn Green",
      "hex": "#739c69",
      "good name": ""
    },
    {
      "name": "Blackwater",
      "hex": "#545663",
      "good name": "x"
    },
    {
      "name": "Blackwater Park",
      "hex": "#696268",
      "good name": ""
    },
    {
      "name": "Blade Green",
      "hex": "#6a9266",
      "good name": ""
    },
    {
      "name": "Bladed Grass",
      "hex": "#758269",
      "good name": ""
    },
    {
      "name": "Bladerunner",
      "hex": "#6a8561",
      "good name": ""
    },
    {
      "name": "Blair",
      "hex": "#a1bde0",
      "good name": ""
    },
    {
      "name": "Blanc",
      "hex": "#d9d0c2",
      "good name": ""
    },
    {
      "name": "Blanc Cassé",
      "hex": "#f1eee2",
      "good name": "x"
    },
    {
      "name": "Blanc De Blanc",
      "hex": "#e7e9e7",
      "good name": ""
    },
    {
      "name": "Blanca Peak",
      "hex": "#f8f9f4",
      "good name": ""
    },
    {
      "name": "Blanched Almond",
      "hex": "#ffebcd",
      "good name": ""
    },
    {
      "name": "Blanched Driftwood",
      "hex": "#ccbeb6",
      "good name": ""
    },
    {
      "name": "Bland",
      "hex": "#afa88b",
      "good name": ""
    },
    {
      "name": "Bland Celery",
      "hex": "#74915f",
      "good name": ""
    },
    {
      "name": "Blank Canvas",
      "hex": "#ffefd6",
      "good name": "x"
    },
    {
      "name": "Blanka Green",
      "hex": "#9cd33c",
      "good name": ""
    },
    {
      "name": "Blanket Brown",
      "hex": "#9e8574",
      "good name": ""
    },
    {
      "name": "Blarney",
      "hex": "#00a776",
      "good name": ""
    },
    {
      "name": "Blarney Stone",
      "hex": "#027944",
      "good name": ""
    },
    {
      "name": "Blast-Off Bronze",
      "hex": "#a57164",
      "good name": ""
    },
    {
      "name": "Blasted Lands Rocks",
      "hex": "#6c3550",
      "good name": ""
    },
    {
      "name": "Blaze",
      "hex": "#fa8c4f",
      "good name": ""
    },
    {
      "name": "Blaze Orange",
      "hex": "#fe6700",
      "good name": ""
    },
    {
      "name": "Blazing Autumn",
      "hex": "#f3ad63",
      "good name": ""
    },
    {
      "name": "Blazing Bonfire",
      "hex": "#ffa035",
      "good name": ""
    },
    {
      "name": "Blazing Dragonfruit",
      "hex": "#ff0054",
      "good name": "x"
    },
    {
      "name": "Blazing Orange",
      "hex": "#ffa64f",
      "good name": ""
    },
    {
      "name": "Blazing Yellow",
      "hex": "#fee715",
      "good name": ""
    },
    {
      "name": "Bleach White",
      "hex": "#ebe1ce",
      "good name": ""
    },
    {
      "name": "Bleached Almond",
      "hex": "#f3ead5",
      "good name": ""
    },
    {
      "name": "Bleached Apricot",
      "hex": "#fccaac",
      "good name": ""
    },
    {
      "name": "Bleached Aqua",
      "hex": "#bce3df",
      "good name": ""
    },
    {
      "name": "Bleached Bare",
      "hex": "#d0c7c3",
      "good name": ""
    },
    {
      "name": "Bleached Bark",
      "hex": "#8b7f78",
      "good name": ""
    },
    {
      "name": "Bleached Beige",
      "hex": "#dfddd0",
      "good name": ""
    },
    {
      "name": "Bleached Bone",
      "hex": "#efd9a8",
      "good name": ""
    },
    {
      "name": "Bleached Cedar",
      "hex": "#2c2133",
      "good name": ""
    },
    {
      "name": "Bleached Coral",
      "hex": "#ffd6d1",
      "good name": ""
    },
    {
      "name": "Bleached Denim",
      "hex": "#646f9b",
      "good name": ""
    },
    {
      "name": "Bleached Grey",
      "hex": "#788878",
      "good name": ""
    },
    {
      "name": "Bleached Jade",
      "hex": "#e2e6d1",
      "good name": ""
    },
    {
      "name": "Bleached Linen",
      "hex": "#f3ece1",
      "good name": ""
    },
    {
      "name": "Bleached Maple",
      "hex": "#c7a06c",
      "good name": ""
    },
    {
      "name": "Bleached Meadow",
      "hex": "#eae5d5",
      "good name": ""
    },
    {
      "name": "Bleached Olive",
      "hex": "#55bb88",
      "good name": "x"
    },
    {
      "name": "Bleached Sand",
      "hex": "#daccb4",
      "good name": ""
    },
    {
      "name": "Bleached Shell",
      "hex": "#f6e5da",
      "good name": ""
    },
    {
      "name": "Bleached Silk",
      "hex": "#f3f3f2",
      "good name": ""
    },
    {
      "name": "Bleached Spruce",
      "hex": "#bad7ae",
      "good name": ""
    },
    {
      "name": "Bleached Sunflower",
      "hex": "#fbe8a8",
      "good name": "x"
    },
    {
      "name": "Bleached Wheat",
      "hex": "#ddd2a9",
      "good name": ""
    },
    {
      "name": "Bleached White",
      "hex": "#dfe3e8",
      "good name": ""
    },
    {
      "name": "Bleaches",
      "hex": "#c7c7c3",
      "good name": ""
    },
    {
      "name": "Bleeding Heart",
      "hex": "#c02e4c",
      "good name": "x"
    },
    {
      "name": "Blende Blue",
      "hex": "#a9c4c4",
      "good name": ""
    },
    {
      "name": "Blended Fruit",
      "hex": "#f8e3a4",
      "good name": ""
    },
    {
      "name": "Blended Light",
      "hex": "#fffbe8",
      "good name": ""
    },
    {
      "name": "Blessed Blue",
      "hex": "#4499cc",
      "good name": ""
    },
    {
      "name": "Bleu Ciel",
      "hex": "#007ba1",
      "good name": "x"
    },
    {
      "name": "Bleu De France",
      "hex": "#318ce7",
      "good name": ""
    },
    {
      "name": "Bleu Nattier",
      "hex": "#9cc2bf",
      "good name": ""
    },
    {
      "name": "Bleuchâtel Blue",
      "hex": "#4488ff",
      "good name": ""
    },
    {
      "name": "Blind Date",
      "hex": "#bcaea1",
      "good name": ""
    },
    {
      "name": "Blind Forest",
      "hex": "#223300",
      "good name": ""
    },
    {
      "name": "Bling Bling",
      "hex": "#eef0ce",
      "good name": ""
    },
    {
      "name": "Blinking Blue",
      "hex": "#0033ff",
      "good name": ""
    },
    {
      "name": "Blinking Terminal",
      "hex": "#66cc00",
      "good name": "x"
    },
    {
      "name": "Bliss Blue",
      "hex": "#7ac7e1",
      "good name": ""
    },
    {
      "name": "Blissful",
      "hex": "#ddc4d4",
      "good name": ""
    },
    {
      "name": "Blissful Berry",
      "hex": "#aa1188",
      "good name": ""
    },
    {
      "name": "Blissful Blue",
      "hex": "#b2c8d8",
      "good name": ""
    },
    {
      "name": "Blissful Light",
      "hex": "#e5d2dd",
      "good name": ""
    },
    {
      "name": "Blissful Meditation",
      "hex": "#d5daee",
      "good name": ""
    },
    {
      "name": "Blissful Orange",
      "hex": "#ffac39",
      "good name": ""
    },
    {
      "name": "Blissful Serenity",
      "hex": "#eaeed8",
      "good name": ""
    },
    {
      "name": "Blissfully Mine",
      "hex": "#dab6cd",
      "good name": ""
    },
    {
      "name": "Blister Pearl",
      "hex": "#aaffee",
      "good name": "x"
    },
    {
      "name": "Blithe",
      "hex": "#0084bd",
      "good name": ""
    },
    {
      "name": "Blithe Blue",
      "hex": "#90bdbd",
      "good name": ""
    },
    {
      "name": "Blizzard",
      "hex": "#e5ebed",
      "good name": ""
    },
    {
      "name": "Blizzard Blue",
      "hex": "#a3e3ed",
      "good name": "x"
    },
    {
      "name": "Blobfish",
      "hex": "#ffc1cc",
      "good name": ""
    },
    {
      "name": "Blockchain Gold",
      "hex": "#e8bc50",
      "good name": ""
    },
    {
      "name": "Bloedworst",
      "hex": "#560319",
      "good name": ""
    },
    {
      "name": "Blond",
      "hex": "#faf0be",
      "good name": "x"
    },
    {
      "name": "Blonde",
      "hex": "#dcbd92",
      "good name": ""
    },
    {
      "name": "Blonde Beauty",
      "hex": "#f2efcd",
      "good name": ""
    },
    {
      "name": "Blonde Curl",
      "hex": "#efe2c5",
      "good name": ""
    },
    {
      "name": "Blonde Girl",
      "hex": "#edc558",
      "good name": ""
    },
    {
      "name": "Blonde Lace",
      "hex": "#d6b194",
      "good name": ""
    },
    {
      "name": "Blonde Shell",
      "hex": "#f6edcd",
      "good name": ""
    },
    {
      "name": "Blonde Wood",
      "hex": "#ab7741",
      "good name": ""
    },
    {
      "name": "Blonde Wool",
      "hex": "#e5d0b1",
      "good name": ""
    },
    {
      "name": "Blood",
      "hex": "#770001",
      "good name": ""
    },
    {
      "name": "Blood Brother",
      "hex": "#770011",
      "good name": "x"
    },
    {
      "name": "Blood Burst",
      "hex": "#ff474c",
      "good name": "x"
    },
    {
      "name": "Blood Donor",
      "hex": "#ea1822",
      "good name": "x"
    },
    {
      "name": "Blood God",
      "hex": "#67080b",
      "good name": ""
    },
    {
      "name": "Blood Mahogany",
      "hex": "#543839",
      "good name": ""
    },
    {
      "name": "Blood Moon",
      "hex": "#d83432",
      "good name": ""
    },
    {
      "name": "Blood Omen",
      "hex": "#8a0303",
      "good name": ""
    },
    {
      "name": "Blood Orange",
      "hex": "#d1001c",
      "good name": "x"
    },
    {
      "name": "Blood Orange Juice",
      "hex": "#fe4b03",
      "good name": ""
    },
    {
      "name": "Blood Organ",
      "hex": "#630f0f",
      "good name": ""
    },
    {
      "name": "Blood Pact",
      "hex": "#771111",
      "good name": ""
    },
    {
      "name": "Blood Red",
      "hex": "#980002",
      "good name": ""
    },
    {
      "name": "Blood Rose",
      "hex": "#73404d",
      "good name": ""
    },
    {
      "name": "Blood Rush",
      "hex": "#aa2222",
      "good name": "x"
    },
    {
      "name": "Blood Thorn",
      "hex": "#b03060",
      "good name": ""
    },
    {
      "name": "Bloodhound",
      "hex": "#bb5511",
      "good name": "x"
    },
    {
      "name": "Bloodletter",
      "hex": "#e97451",
      "good name": ""
    },
    {
      "name": "Bloodline",
      "hex": "#882200",
      "good name": ""
    },
    {
      "name": "Bloodmyst Isle",
      "hex": "#f02723",
      "good name": ""
    },
    {
      "name": "Bloodstain",
      "hex": "#772200",
      "good name": ""
    },
    {
      "name": "Bloodstone",
      "hex": "#413431",
      "good name": ""
    },
    {
      "name": "Bloodthirsty",
      "hex": "#880011",
      "good name": "x"
    },
    {
      "name": "Bloodthirsty Beige",
      "hex": "#f8d7d0",
      "good name": "x"
    },
    {
      "name": "Bloodthirsty Lips",
      "hex": "#c6101e",
      "good name": "x"
    },
    {
      "name": "Bloodthirsty Vampire",
      "hex": "#9b0503",
      "good name": ""
    },
    {
      "name": "Bloodthirsty Warlock",
      "hex": "#ec1837",
      "good name": ""
    },
    {
      "name": "Bloodtracker Brown",
      "hex": "#703f00",
      "good name": ""
    },
    {
      "name": "Bloody Periphylla",
      "hex": "#aa1144",
      "good name": ""
    },
    {
      "name": "Bloody Pico-8",
      "hex": "#ff004d",
      "good name": ""
    },
    {
      "name": "Bloody Red",
      "hex": "#ca1f1b",
      "good name": ""
    },
    {
      "name": "Bloody Rust",
      "hex": "#da2c43",
      "good name": ""
    },
    {
      "name": "Bloody Salmon",
      "hex": "#cc4433",
      "good name": "x"
    },
    {
      "name": "Bloom",
      "hex": "#ffaf75",
      "good name": ""
    },
    {
      "name": "Blooming Aster",
      "hex": "#d7e2ee",
      "good name": ""
    },
    {
      "name": "Blooming Dahlia",
      "hex": "#eb9687",
      "good name": ""
    },
    {
      "name": "Blooming Lilac",
      "hex": "#ba93af",
      "good name": ""
    },
    {
      "name": "Blooming Perfect",
      "hex": "#d89696",
      "good name": ""
    },
    {
      "name": "Blooming Wisteria",
      "hex": "#88777e",
      "good name": ""
    },
    {
      "name": "Bloomsberry",
      "hex": "#a598c4",
      "good name": ""
    },
    {
      "name": "Blossom",
      "hex": "#fee9d8",
      "good name": "x"
    },
    {
      "name": "Blossom Blue",
      "hex": "#aaccee",
      "good name": ""
    },
    {
      "name": "Blossom Mauve",
      "hex": "#a3a7cc",
      "good name": ""
    },
    {
      "name": "Blossom Pink",
      "hex": "#e6d5ce",
      "good name": ""
    },
    {
      "name": "Blossom Powder",
      "hex": "#c3b3b9",
      "good name": ""
    },
    {
      "name": "Blossom Time",
      "hex": "#e5d2c9",
      "good name": ""
    },
    {
      "name": "Blossom White",
      "hex": "#f2eee4",
      "good name": ""
    },
    {
      "name": "Blossom Yellow",
      "hex": "#e1c77d",
      "good name": ""
    },
    {
      "name": "Blossoming Dynasty",
      "hex": "#de5346",
      "good name": "x"
    },
    {
      "name": "Blossoms in Spring",
      "hex": "#e79acb",
      "good name": ""
    },
    {
      "name": "Blouson Blue",
      "hex": "#67b7c6",
      "good name": ""
    },
    {
      "name": "Blowing Kisses",
      "hex": "#f6dee0",
      "good name": "x"
    },
    {
      "name": "Blowout",
      "hex": "#658499",
      "good name": ""
    },
    {
      "name": "Blue",
      "hex": "#0000ff",
      "good name": "x"
    },
    {
      "name": "Blue Accolade",
      "hex": "#25415d",
      "good name": ""
    },
    {
      "name": "Blue Agave",
      "hex": "#b1c6c7",
      "good name": ""
    },
    {
      "name": "Blue Alps",
      "hex": "#89a3ae",
      "good name": ""
    },
    {
      "name": "Blue Android Base",
      "hex": "#5a79ba",
      "good name": ""
    },
    {
      "name": "Blue Angel",
      "hex": "#0022dd",
      "good name": ""
    },
    {
      "name": "Blue Angels Yellow",
      "hex": "#f8b800",
      "good name": ""
    },
    {
      "name": "Blue Angora",
      "hex": "#a7cfcb",
      "good name": ""
    },
    {
      "name": "Blue Antarctic",
      "hex": "#4b789b",
      "good name": ""
    },
    {
      "name": "Blue Anthracite",
      "hex": "#555e64",
      "good name": ""
    },
    {
      "name": "Blue Arc",
      "hex": "#0085a1",
      "good name": ""
    },
    {
      "name": "Blue Ash",
      "hex": "#414654",
      "good name": ""
    },
    {
      "name": "Blue Ashes",
      "hex": "#3b5f78",
      "good name": ""
    },
    {
      "name": "Blue Aster",
      "hex": "#0077b3",
      "good name": ""
    },
    {
      "name": "Blue Astro",
      "hex": "#50a7d9",
      "good name": ""
    },
    {
      "name": "Blue Atoll",
      "hex": "#00b1d2",
      "good name": ""
    },
    {
      "name": "Blue Aura",
      "hex": "#6c7386",
      "good name": ""
    },
    {
      "name": "Blue Azure",
      "hex": "#4682bf",
      "good name": ""
    },
    {
      "name": "Blue Ballad",
      "hex": "#7498bd",
      "good name": ""
    },
    {
      "name": "Blue Ballerina",
      "hex": "#b4c7db",
      "good name": ""
    },
    {
      "name": "Blue Ballet",
      "hex": "#576b6b",
      "good name": ""
    },
    {
      "name": "Blue Bauble",
      "hex": "#abdee3",
      "good name": ""
    },
    {
      "name": "Blue Bay",
      "hex": "#619ad6",
      "good name": "x"
    },
    {
      "name": "Blue Bayberry",
      "hex": "#2d5360",
      "good name": ""
    },
    {
      "name": "Blue Bayou",
      "hex": "#bec4d3",
      "good name": ""
    },
    {
      "name": "Blue Beads",
      "hex": "#5a809e",
      "good name": ""
    },
    {
      "name": "Blue Beauty",
      "hex": "#7498bf",
      "good name": ""
    },
    {
      "name": "Blue Beetle",
      "hex": "#220099",
      "good name": ""
    },
    {
      "name": "Blue Bell",
      "hex": "#93b4d7",
      "good name": "x"
    },
    {
      "name": "Blue Beret",
      "hex": "#40638e",
      "good name": ""
    },
    {
      "name": "Blue Beyond",
      "hex": "#91b8d9",
      "good name": ""
    },
    {
      "name": "Blue Bikini",
      "hex": "#00bbee",
      "good name": "x"
    },
    {
      "name": "Blue Bird Day",
      "hex": "#237fac",
      "good name": ""
    },
    {
      "name": "Blue Black Crayfish",
      "hex": "#52593b",
      "good name": ""
    },
    {
      "name": "Blue Blood",
      "hex": "#6b7f81",
      "good name": "x"
    },
    {
      "name": "Blue Blouse",
      "hex": "#94a4b9",
      "good name": ""
    },
    {
      "name": "Blue Blue",
      "hex": "#2242c7",
      "good name": ""
    },
    {
      "name": "Blue Blush",
      "hex": "#d6dbd9",
      "good name": ""
    },
    {
      "name": "Blue Boater",
      "hex": "#6181a3",
      "good name": ""
    },
    {
      "name": "Blue Bobbin",
      "hex": "#52b4ca",
      "good name": "x"
    },
    {
      "name": "Blue Bolt",
      "hex": "#00b9fb",
      "good name": ""
    },
    {
      "name": "Blue Bonnet",
      "hex": "#335599",
      "good name": ""
    },
    {
      "name": "Blue Booties",
      "hex": "#c8ddee",
      "good name": ""
    },
    {
      "name": "Blue Bottle",
      "hex": "#394e65",
      "good name": ""
    },
    {
      "name": "Blue Bouquet",
      "hex": "#0033ee",
      "good name": ""
    },
    {
      "name": "Blue Bows",
      "hex": "#a4c3d7",
      "good name": ""
    },
    {
      "name": "Blue Brocade",
      "hex": "#70b8d0",
      "good name": ""
    },
    {
      "name": "Blue Bubble",
      "hex": "#a6d7eb",
      "good name": ""
    },
    {
      "name": "Blue Buzz",
      "hex": "#a1a2bd",
      "good name": ""
    },
    {
      "name": "Blue By You",
      "hex": "#a0b7ba",
      "good name": ""
    },
    {
      "name": "Blue Calico",
      "hex": "#a5cde1",
      "good name": ""
    },
    {
      "name": "Blue Calypso",
      "hex": "#55a7b6",
      "good name": ""
    },
    {
      "name": "Blue Carpenter Bee",
      "hex": "#9cd0e4",
      "good name": ""
    },
    {
      "name": "Blue Cascade",
      "hex": "#7b9eb0",
      "good name": ""
    },
    {
      "name": "Blue Catch",
      "hex": "#41788a",
      "good name": ""
    },
    {
      "name": "Blue Chaise",
      "hex": "#4b8ca9",
      "good name": ""
    },
    {
      "name": "Blue Chalk",
      "hex": "#94c0cc",
      "good name": ""
    },
    {
      "name": "Blue Chaos",
      "hex": "#5599ff",
      "good name": ""
    },
    {
      "name": "Blue Charcoal",
      "hex": "#262b2f",
      "good name": ""
    },
    {
      "name": "Blue Charm",
      "hex": "#82c2db",
      "good name": ""
    },
    {
      "name": "Blue Chill",
      "hex": "#408f90",
      "good name": ""
    },
    {
      "name": "Blue Chip",
      "hex": "#1d5699",
      "good name": ""
    },
    {
      "name": "Blue Chrysocolla",
      "hex": "#77b7d0",
      "good name": ""
    },
    {
      "name": "Blue Clay",
      "hex": "#6b9194",
      "good name": ""
    },
    {
      "name": "Blue Click",
      "hex": "#a7d8e8",
      "good name": ""
    },
    {
      "name": "Blue Cloud",
      "hex": "#627188",
      "good name": ""
    },
    {
      "name": "Blue Cola",
      "hex": "#0088dc",
      "good name": ""
    },
    {
      "name": "Blue Collar Man",
      "hex": "#005f7a",
      "good name": ""
    },
    {
      "name": "Blue Copper Ore",
      "hex": "#4411dd",
      "good name": ""
    },
    {
      "name": "Blue Coral",
      "hex": "#1b5366",
      "good name": ""
    },
    {
      "name": "Blue Crab Escape",
      "hex": "#9ebdd6",
      "good name": ""
    },
    {
      "name": "Blue Cruise",
      "hex": "#6591a8",
      "good name": ""
    },
    {
      "name": "Blue Cuddle",
      "hex": "#7eb4d1",
      "good name": ""
    },
    {
      "name": "Blue Cue",
      "hex": "#84a5dc",
      "good name": ""
    },
    {
      "name": "Blue Curacao",
      "hex": "#32becc",
      "good name": ""
    },
    {
      "name": "Blue Cypress",
      "hex": "#cbdbd7",
      "good name": ""
    },
    {
      "name": "Blue Dacnis",
      "hex": "#44ddee",
      "good name": ""
    },
    {
      "name": "Blue Dahlia",
      "hex": "#415e9c",
      "good name": ""
    },
    {
      "name": "Blue Dam",
      "hex": "#a2c6d3",
      "good name": ""
    },
    {
      "name": "Blue Danube",
      "hex": "#0087b6",
      "good name": ""
    },
    {
      "name": "Blue Darknut",
      "hex": "#0078f8",
      "good name": ""
    },
    {
      "name": "Blue Dart",
      "hex": "#518fd1",
      "good name": ""
    },
    {
      "name": "Blue Dart Frog",
      "hex": "#3a7a9b",
      "good name": ""
    },
    {
      "name": "Blue Depression",
      "hex": "#4428bc",
      "good name": ""
    },
    {
      "name": "Blue Depths",
      "hex": "#263056",
      "good name": ""
    },
    {
      "name": "Blue Diamond",
      "hex": "#4b2d72",
      "good name": ""
    },
    {
      "name": "Blue Dianne",
      "hex": "#35514f",
      "good name": ""
    },
    {
      "name": "Blue Dolphin",
      "hex": "#bcc5cf",
      "good name": ""
    },
    {
      "name": "Blue Dove",
      "hex": "#76799e",
      "good name": ""
    },
    {
      "name": "Blue Dude",
      "hex": "#4a5c94",
      "good name": ""
    },
    {
      "name": "Blue Dusk",
      "hex": "#8c959d",
      "good name": ""
    },
    {
      "name": "Blue Earth",
      "hex": "#375673",
      "good name": ""
    },
    {
      "name": "Blue Echo",
      "hex": "#8dbbc9",
      "good name": ""
    },
    {
      "name": "Blue Edge",
      "hex": "#035e7b",
      "good name": ""
    },
    {
      "name": "Blue Effervescence",
      "hex": "#97d5ea",
      "good name": ""
    },
    {
      "name": "Blue Elemental",
      "hex": "#5588ee",
      "good name": ""
    },
    {
      "name": "Blue Emerald",
      "hex": "#0f5a5e",
      "good name": ""
    },
    {
      "name": "Blue Emulsion",
      "hex": "#d1edef",
      "good name": ""
    },
    {
      "name": "Blue Estate",
      "hex": "#384883",
      "good name": ""
    },
    {
      "name": "Blue et une Nuit",
      "hex": "#0652ff",
      "good name": ""
    },
    {
      "name": "Blue Expanse",
      "hex": "#253f74",
      "good name": ""
    },
    {
      "name": "Blue Exult",
      "hex": "#2b2f43",
      "good name": ""
    },
    {
      "name": "Blue Eyed Boy",
      "hex": "#87bde3",
      "good name": ""
    },
    {
      "name": "Blue Fantastic",
      "hex": "#2c3b4d",
      "good name": ""
    },
    {
      "name": "Blue Feather",
      "hex": "#aed9ec",
      "good name": ""
    },
    {
      "name": "Blue Fin",
      "hex": "#577fae",
      "good name": ""
    },
    {
      "name": "Blue Fir",
      "hex": "#51645f",
      "good name": ""
    },
    {
      "name": "Blue Fire",
      "hex": "#00aadd",
      "good name": ""
    },
    {
      "name": "Blue Fjord",
      "hex": "#628daa",
      "good name": ""
    },
    {
      "name": "Blue Flag",
      "hex": "#3b506f",
      "good name": ""
    },
    {
      "name": "Blue Flame",
      "hex": "#005e88",
      "good name": ""
    },
    {
      "name": "Blue Flower",
      "hex": "#d0d9d4",
      "good name": ""
    },
    {
      "name": "Blue Fog",
      "hex": "#9babbb",
      "good name": ""
    },
    {
      "name": "Blue Fox",
      "hex": "#b9bcb6",
      "good name": ""
    },
    {
      "name": "Blue Frosting",
      "hex": "#86d2c1",
      "good name": ""
    },
    {
      "name": "Blue Garter",
      "hex": "#a2b8ce",
      "good name": ""
    },
    {
      "name": "Blue Gem",
      "hex": "#4b3c8e",
      "good name": ""
    },
    {
      "name": "Blue Genie",
      "hex": "#6666ff",
      "good name": ""
    },
    {
      "name": "Blue Glass",
      "hex": "#c6e3e1",
      "good name": ""
    },
    {
      "name": "Blue Glaze",
      "hex": "#56597c",
      "good name": ""
    },
    {
      "name": "Blue Glint",
      "hex": "#92c6d7",
      "good name": ""
    },
    {
      "name": "Blue Glow",
      "hex": "#b2d4dd",
      "good name": ""
    },
    {
      "name": "Blue Gossamer",
      "hex": "#cdd7df",
      "good name": ""
    },
    {
      "name": "Blue Granite",
      "hex": "#717388",
      "good name": ""
    },
    {
      "name": "Blue Graphite",
      "hex": "#323137",
      "good name": ""
    },
    {
      "name": "Blue Grass",
      "hex": "#007c7a",
      "good name": ""
    },
    {
      "name": "Blue Green",
      "hex": "#137e6d",
      "good name": ""
    },
    {
      "name": "Blue Green Gem",
      "hex": "#7ccbc5",
      "good name": ""
    },
    {
      "name": "Blue Green Rules",
      "hex": "#d8eeed",
      "good name": ""
    },
    {
      "name": "Blue Green Scene",
      "hex": "#56b78f",
      "good name": ""
    },
    {
      "name": "Blue Grey",
      "hex": "#758da3",
      "good name": ""
    },
    {
      "name": "Blue Grotto",
      "hex": "#5cacce",
      "good name": ""
    },
    {
      "name": "Blue Grouse",
      "hex": "#9abcdc",
      "good name": ""
    },
    {
      "name": "Blue Haze",
      "hex": "#bdbace",
      "good name": "x"
    },
    {
      "name": "Blue Heath Butterfly",
      "hex": "#5566ff",
      "good name": ""
    },
    {
      "name": "Blue Heather",
      "hex": "#aebbc1",
      "good name": ""
    },
    {
      "name": "Blue Heaven",
      "hex": "#5b7e98",
      "good name": ""
    },
    {
      "name": "Blue Heeler",
      "hex": "#939cab",
      "good name": ""
    },
    {
      "name": "Blue Heist",
      "hex": "#006384",
      "good name": ""
    },
    {
      "name": "Blue Hepatica",
      "hex": "#6666ee",
      "good name": ""
    },
    {
      "name": "Blue Heron",
      "hex": "#96a3c7",
      "good name": ""
    },
    {
      "name": "Blue Highlight",
      "hex": "#324a8b",
      "good name": ""
    },
    {
      "name": "Blue Hijab",
      "hex": "#d0eefb",
      "good name": ""
    },
    {
      "name": "Blue Hill",
      "hex": "#1e454d",
      "good name": ""
    },
    {
      "name": "Blue Horizon",
      "hex": "#4e6482",
      "good name": ""
    },
    {
      "name": "Blue Horror",
      "hex": "#a2bad2",
      "good name": ""
    },
    {
      "name": "Blue Hour",
      "hex": "#0034ab",
      "good name": "x"
    },
    {
      "name": "Blue Hue",
      "hex": "#394d60",
      "good name": ""
    },
    {
      "name": "Blue Hyacinth",
      "hex": "#8394c5",
      "good name": ""
    },
    {
      "name": "Blue Hydrangea",
      "hex": "#bbc3dd",
      "good name": ""
    },
    {
      "name": "Blue Ice",
      "hex": "#70789b",
      "good name": ""
    },
    {
      "name": "Blue Iguana",
      "hex": "#539ccc",
      "good name": ""
    },
    {
      "name": "Blue Indigo",
      "hex": "#49516d",
      "good name": ""
    },
    {
      "name": "Blue Insignia",
      "hex": "#566977",
      "good name": ""
    },
    {
      "name": "Blue Intrigue",
      "hex": "#7f809c",
      "good name": ""
    },
    {
      "name": "Blue Iolite",
      "hex": "#587ebe",
      "good name": ""
    },
    {
      "name": "Blue Iris",
      "hex": "#5a5b9f",
      "good name": ""
    },
    {
      "name": "Blue Island",
      "hex": "#22aaaa",
      "good name": ""
    },
    {
      "name": "Blue Jacket",
      "hex": "#597193",
      "good name": ""
    },
    {
      "name": "Blue Jasmine",
      "hex": "#828596",
      "good name": ""
    },
    {
      "name": "Blue Jay",
      "hex": "#5588dd",
      "good name": ""
    },
    {
      "name": "Blue Jeans",
      "hex": "#5dadec",
      "good name": ""
    },
    {
      "name": "Blue Jewel",
      "hex": "#465383",
      "good name": ""
    },
    {
      "name": "Blue Karma",
      "hex": "#bce6e8",
      "good name": ""
    },
    {
      "name": "Blue Kelp",
      "hex": "#1d7881",
      "good name": ""
    },
    {
      "name": "Blue Lagoon",
      "hex": "#00626f",
      "good name": ""
    },
    {
      "name": "Blue Lava",
      "hex": "#2e5169",
      "good name": ""
    },
    {
      "name": "Blue League",
      "hex": "#006284",
      "good name": ""
    },
    {
      "name": "Blue Lechery",
      "hex": "#779ecb",
      "good name": ""
    },
    {
      "name": "Blue Light",
      "hex": "#acdfdd",
      "good name": ""
    },
    {
      "name": "Blue Limewash",
      "hex": "#7fcce2",
      "good name": ""
    },
    {
      "name": "Blue Linen",
      "hex": "#5a5e6a",
      "good name": ""
    },
    {
      "name": "Blue Lips",
      "hex": "#a6bce2",
      "good name": "x"
    },
    {
      "name": "Blue Lobelia",
      "hex": "#28314d",
      "good name": ""
    },
    {
      "name": "Blue Lobster",
      "hex": "#0055aa",
      "good name": ""
    },
    {
      "name": "Blue Lullaby",
      "hex": "#c8d7d2",
      "good name": ""
    },
    {
      "name": "Blue Lust",
      "hex": "#012389",
      "good name": ""
    },
    {
      "name": "Blue Luxury",
      "hex": "#007593",
      "good name": ""
    },
    {
      "name": "Blue Magenta",
      "hex": "#5f34e7",
      "good name": ""
    },
    {
      "name": "Blue Magenta Violet",
      "hex": "#553592",
      "good name": ""
    },
    {
      "name": "Blue Mana",
      "hex": "#68c2f5",
      "good name": "x"
    },
    {
      "name": "Blue Marble",
      "hex": "#6594bc",
      "good name": ""
    },
    {
      "name": "Blue Marguerite",
      "hex": "#6a5bb1",
      "good name": ""
    },
    {
      "name": "Blue Martina",
      "hex": "#1fcecb",
      "good name": ""
    },
    {
      "name": "Blue Martini",
      "hex": "#52b4d3",
      "good name": "x"
    },
    {
      "name": "Blue Me Away",
      "hex": "#c9dce7",
      "good name": ""
    },
    {
      "name": "Blue Mediterranean",
      "hex": "#1e7e9a",
      "good name": ""
    },
    {
      "name": "Blue Mercury",
      "hex": "#67a6ac",
      "good name": ""
    },
    {
      "name": "Blue Metal",
      "hex": "#5a6370",
      "good name": ""
    },
    {
      "name": "Blue Mirage",
      "hex": "#5c6d7c",
      "good name": ""
    },
    {
      "name": "Blue Mist",
      "hex": "#5bacc3",
      "good name": ""
    },
    {
      "name": "Blue Monday",
      "hex": "#637983",
      "good name": ""
    },
    {
      "name": "Blue Mood",
      "hex": "#7a808d",
      "good name": ""
    },
    {
      "name": "Blue Moon",
      "hex": "#3686a0",
      "good name": "x"
    },
    {
      "name": "Blue Moon Bay",
      "hex": "#588496",
      "good name": ""
    },
    {
      "name": "Blue Mosque",
      "hex": "#21426b",
      "good name": ""
    },
    {
      "name": "Blue Mountain",
      "hex": "#759dbe",
      "good name": ""
    },
    {
      "name": "Blue Nebula",
      "hex": "#1199ff",
      "good name": ""
    },
    {
      "name": "Blue Nights",
      "hex": "#363b48",
      "good name": ""
    },
    {
      "name": "Blue Nile",
      "hex": "#779fb9",
      "good name": ""
    },
    {
      "name": "Blue Nuance",
      "hex": "#d2dde0",
      "good name": ""
    },
    {
      "name": "Blue Nude",
      "hex": "#29518c",
      "good name": ""
    },
    {
      "name": "Blue Oar",
      "hex": "#647e9c",
      "good name": ""
    },
    {
      "name": "Blue Oasis",
      "hex": "#296d93",
      "good name": ""
    },
    {
      "name": "Blue Oblivion",
      "hex": "#26428b",
      "good name": ""
    },
    {
      "name": "Blue Ocean",
      "hex": "#00729e",
      "good name": ""
    },
    {
      "name": "Blue Odyssey",
      "hex": "#4f6997",
      "good name": ""
    },
    {
      "name": "Blue Opal",
      "hex": "#0f3b57",
      "good name": ""
    },
    {
      "name": "Blue Overdose",
      "hex": "#0000ee",
      "good name": ""
    },
    {
      "name": "Blue Oyster Cult",
      "hex": "#5577ee",
      "good name": ""
    },
    {
      "name": "Blue Paisley",
      "hex": "#2282a8",
      "good name": ""
    },
    {
      "name": "Blue Parlor",
      "hex": "#85abdb",
      "good name": ""
    },
    {
      "name": "Blue Party Parrot",
      "hex": "#8080ff",
      "good name": ""
    },
    {
      "name": "Blue Pearl",
      "hex": "#c5d9e3",
      "good name": ""
    },
    {
      "name": "Blue Pencil",
      "hex": "#2200ff",
      "good name": ""
    },
    {
      "name": "Blue Perennial",
      "hex": "#bcd7df",
      "good name": ""
    },
    {
      "name": "Blue Period",
      "hex": "#075158",
      "good name": ""
    },
    {
      "name": "Blue Phlox",
      "hex": "#d2e6e8",
      "good name": ""
    },
    {
      "name": "Blue Pink",
      "hex": "#b5a3c5",
      "good name": ""
    },
    {
      "name": "Blue Planet",
      "hex": "#545e6a",
      "good name": ""
    },
    {
      "name": "Blue Plate",
      "hex": "#5b7a9c",
      "good name": ""
    },
    {
      "name": "Blue Plaza",
      "hex": "#30363c",
      "good name": ""
    },
    {
      "name": "Blue Pointer",
      "hex": "#95b9d6",
      "good name": ""
    },
    {
      "name": "Blue Potato",
      "hex": "#64617b",
      "good name": ""
    },
    {
      "name": "Blue Prince",
      "hex": "#6a808f",
      "good name": ""
    },
    {
      "name": "Blue Promise",
      "hex": "#729cc2",
      "good name": ""
    },
    {
      "name": "Blue Purple",
      "hex": "#5729ce",
      "good name": ""
    },
    {
      "name": "Blue Quarry",
      "hex": "#43505e",
      "good name": ""
    },
    {
      "name": "Blue Racer",
      "hex": "#4ba4a9",
      "good name": ""
    },
    {
      "name": "Blue Radiance",
      "hex": "#58c9d4",
      "good name": ""
    },
    {
      "name": "Blue Ranger",
      "hex": "#00177d",
      "good name": ""
    },
    {
      "name": "Blue Raspberry",
      "hex": "#0cbfe9",
      "good name": ""
    },
    {
      "name": "Blue Raspberry Seed",
      "hex": "#3aa2c6",
      "good name": ""
    },
    {
      "name": "Blue Reflection",
      "hex": "#ccd7e1",
      "good name": ""
    },
    {
      "name": "Blue Refrain",
      "hex": "#b0d8e7",
      "good name": ""
    },
    {
      "name": "Blue Regal",
      "hex": "#303048",
      "good name": ""
    },
    {
      "name": "Blue Regatta",
      "hex": "#376298",
      "good name": ""
    },
    {
      "name": "Blue Regent",
      "hex": "#285991",
      "good name": ""
    },
    {
      "name": "Blue Review",
      "hex": "#4e5878",
      "good name": ""
    },
    {
      "name": "Blue Rhapsody",
      "hex": "#3d4655",
      "good name": ""
    },
    {
      "name": "Blue Ribbon",
      "hex": "#0066ff",
      "good name": "x"
    },
    {
      "name": "Blue Ribbon Beauty",
      "hex": "#3e6490",
      "good name": ""
    },
    {
      "name": "Blue Rice",
      "hex": "#b3d9f3",
      "good name": ""
    },
    {
      "name": "Blue Rinse",
      "hex": "#b7bdc6",
      "good name": ""
    },
    {
      "name": "Blue Romance",
      "hex": "#d8f0d2",
      "good name": ""
    },
    {
      "name": "Blue Rose",
      "hex": "#292d74",
      "good name": ""
    },
    {
      "name": "Blue Royale",
      "hex": "#29217a",
      "good name": ""
    },
    {
      "name": "Blue Ruin",
      "hex": "#0066dd",
      "good name": ""
    },
    {
      "name": "Blue Sabre",
      "hex": "#575f6a",
      "good name": ""
    },
    {
      "name": "Blue Sage",
      "hex": "#57747a",
      "good name": ""
    },
    {
      "name": "Blue Sail",
      "hex": "#24549a",
      "good name": ""
    },
    {
      "name": "Blue Sapphire",
      "hex": "#126180",
      "good name": ""
    },
    {
      "name": "Blue Sari",
      "hex": "#666a76",
      "good name": ""
    },
    {
      "name": "Blue Sarong",
      "hex": "#9ad6e8",
      "good name": ""
    },
    {
      "name": "Blue Sash",
      "hex": "#494d58",
      "good name": ""
    },
    {
      "name": "Blue Satin",
      "hex": "#9eb6d0",
      "good name": ""
    },
    {
      "name": "Blue Screen of Death",
      "hex": "#0033bb",
      "good name": "x"
    },
    {
      "name": "Blue Shade Wash",
      "hex": "#293f54",
      "good name": ""
    },
    {
      "name": "Blue Shadow",
      "hex": "#66829a",
      "good name": ""
    },
    {
      "name": "Blue Shamrock",
      "hex": "#bacbc4",
      "good name": ""
    },
    {
      "name": "Blue Shell",
      "hex": "#9bb3bc",
      "good name": ""
    },
    {
      "name": "Blue Shimmer",
      "hex": "#b3dae2",
      "good name": ""
    },
    {
      "name": "Blue Shutters",
      "hex": "#93bde7",
      "good name": ""
    },
    {
      "name": "Blue Silk",
      "hex": "#d0dce8",
      "good name": "x"
    },
    {
      "name": "Blue Skies Today",
      "hex": "#95afdc",
      "good name": ""
    },
    {
      "name": "Blue Slate",
      "hex": "#5a5f68",
      "good name": ""
    },
    {
      "name": "Blue Slushie",
      "hex": "#008793",
      "good name": ""
    },
    {
      "name": "Blue Smart",
      "hex": "#5786b4",
      "good name": ""
    },
    {
      "name": "Blue Smoke",
      "hex": "#d7e0e2",
      "good name": ""
    },
    {
      "name": "Blue Sonki",
      "hex": "#4a87cb",
      "good name": ""
    },
    {
      "name": "Blue Sou'wester",
      "hex": "#404956",
      "good name": ""
    },
    {
      "name": "Blue Sparkle",
      "hex": "#0077ff",
      "good name": ""
    },
    {
      "name": "Blue Spell",
      "hex": "#3b5c6c",
      "good name": ""
    },
    {
      "name": "Blue Spruce",
      "hex": "#adc5c9",
      "good name": ""
    },
    {
      "name": "Blue Square",
      "hex": "#508a9a",
      "good name": ""
    },
    {
      "name": "Blue Steel",
      "hex": "#535a61",
      "good name": ""
    },
    {
      "name": "Blue Stone",
      "hex": "#577284",
      "good name": ""
    },
    {
      "name": "Blue Streak",
      "hex": "#2266bb",
      "good name": ""
    },
    {
      "name": "Blue Stream",
      "hex": "#95cdd8",
      "good name": ""
    },
    {
      "name": "Blue Suede",
      "hex": "#687b92",
      "good name": ""
    },
    {
      "name": "Blue Suede Shoes",
      "hex": "#484b62",
      "good name": ""
    },
    {
      "name": "Blue Surf",
      "hex": "#90a8a4",
      "good name": ""
    },
    {
      "name": "Blue Syzygy",
      "hex": "#1b4556",
      "good name": ""
    },
    {
      "name": "Blue Tang",
      "hex": "#2a4b6e",
      "good name": ""
    },
    {
      "name": "Blue Tapestry",
      "hex": "#475c62",
      "good name": ""
    },
    {
      "name": "Blue Thistle",
      "hex": "#adc0d6",
      "good name": ""
    },
    {
      "name": "Blue Tint",
      "hex": "#9fd9d7",
      "good name": ""
    },
    {
      "name": "Blue Titmouse",
      "hex": "#4466ff",
      "good name": ""
    },
    {
      "name": "Blue To You",
      "hex": "#babfc5",
      "good name": ""
    },
    {
      "name": "Blue Tone Ink",
      "hex": "#2b4057",
      "good name": ""
    },
    {
      "name": "Blue Topaz",
      "hex": "#78bdd4",
      "good name": ""
    },
    {
      "name": "Blue Torus",
      "hex": "#042993",
      "good name": ""
    },
    {
      "name": "Blue Tourmaline",
      "hex": "#4997d0",
      "good name": ""
    },
    {
      "name": "Blue Tribute",
      "hex": "#a9b8c8",
      "good name": ""
    },
    {
      "name": "Blue Trust",
      "hex": "#120a8f",
      "good name": ""
    },
    {
      "name": "Blue Tulip",
      "hex": "#5c4671",
      "good name": ""
    },
    {
      "name": "Blue Tuna",
      "hex": "#6f95c1",
      "good name": ""
    },
    {
      "name": "Blue Turquoise",
      "hex": "#53b0ae",
      "good name": ""
    },
    {
      "name": "Blue Vacation",
      "hex": "#1e7eae",
      "good name": ""
    },
    {
      "name": "Blue Vault",
      "hex": "#4e83bd",
      "good name": ""
    },
    {
      "name": "Blue Veil",
      "hex": "#aecbe5",
      "good name": ""
    },
    {
      "name": "Blue Velvet",
      "hex": "#0d6183",
      "good name": "x"
    },
    {
      "name": "Blue Venus",
      "hex": "#397c80",
      "good name": ""
    },
    {
      "name": "Blue Violet",
      "hex": "#4e32b2",
      "good name": ""
    },
    {
      "name": "Blue Vortex",
      "hex": "#3d4457",
      "good name": ""
    },
    {
      "name": "Blue Whale",
      "hex": "#1e3442",
      "good name": "x"
    },
    {
      "name": "Blue Willow",
      "hex": "#a8bbba",
      "good name": ""
    },
    {
      "name": "Blue Wing Teal",
      "hex": "#2c4053",
      "good name": ""
    },
    {
      "name": "Blue Winged Teal",
      "hex": "#00827c",
      "good name": ""
    },
    {
      "name": "Blue With A Hint Of Purple",
      "hex": "#533cc6",
      "good name": ""
    },
    {
      "name": "Blue Yonder",
      "hex": "#5a77a8",
      "good name": ""
    },
    {
      "name": "Blue Zephyr",
      "hex": "#5b6676",
      "good name": ""
    },
    {
      "name": "Blue Zodiac",
      "hex": "#3c4354",
      "good name": ""
    },
    {
      "name": "Blue-Black",
      "hex": "#24313d",
      "good name": ""
    },
    {
      "name": "Blue-Eyed Boy",
      "hex": "#2277cc",
      "good name": ""
    },
    {
      "name": "Bluealicious",
      "hex": "#0000dd",
      "good name": ""
    },
    {
      "name": "Bluebeard",
      "hex": "#abb5c4",
      "good name": ""
    },
    {
      "name": "Bluebell",
      "hex": "#333399",
      "good name": "x"
    },
    {
      "name": "Bluebell Frost",
      "hex": "#9999cc",
      "good name": ""
    },
    {
      "name": "Blueberry",
      "hex": "#464196",
      "good name": "x"
    },
    {
      "name": "Blueberry Blush",
      "hex": "#836268",
      "good name": ""
    },
    {
      "name": "Blueberry Buckle",
      "hex": "#8c99b3",
      "good name": ""
    },
    {
      "name": "Blueberry Dream",
      "hex": "#586e84",
      "good name": ""
    },
    {
      "name": "Blueberry Glaze",
      "hex": "#cc66dd",
      "good name": ""
    },
    {
      "name": "Blueberry Lemonade",
      "hex": "#d01343",
      "good name": ""
    },
    {
      "name": "Blueberry Muffin",
      "hex": "#5588ab",
      "good name": ""
    },
    {
      "name": "Blueberry Patch",
      "hex": "#627099",
      "good name": ""
    },
    {
      "name": "Blueberry Pie",
      "hex": "#314d67",
      "good name": ""
    },
    {
      "name": "Blueberry Popover",
      "hex": "#5488c0",
      "good name": ""
    },
    {
      "name": "Blueberry Soda",
      "hex": "#8290a6",
      "good name": ""
    },
    {
      "name": "Blueberry Soft Blue",
      "hex": "#5e96c3",
      "good name": ""
    },
    {
      "name": "Blueberry Tart",
      "hex": "#3f4050",
      "good name": ""
    },
    {
      "name": "Blueberry Twist",
      "hex": "#24547d",
      "good name": ""
    },
    {
      "name": "Blueberry Whip",
      "hex": "#d1d4db",
      "good name": ""
    },
    {
      "name": "Bluebird",
      "hex": "#009dae",
      "good name": ""
    },
    {
      "name": "Bluebird Feather",
      "hex": "#6f9db3",
      "good name": ""
    },
    {
      "name": "Bluebird's Belly",
      "hex": "#7395b8",
      "good name": ""
    },
    {
      "name": "Blueblood",
      "hex": "#015086",
      "good name": ""
    },
    {
      "name": "Bluebonnet",
      "hex": "#1c1cf0",
      "good name": "x"
    },
    {
      "name": "Bluebonnet Frost",
      "hex": "#4d6eb0",
      "good name": ""
    },
    {
      "name": "Bluebottle",
      "hex": "#8ecfe8",
      "good name": ""
    },
    {
      "name": "Bluebound",
      "hex": "#4f9297",
      "good name": ""
    },
    {
      "name": "Bluejay",
      "hex": "#157ea0",
      "good name": ""
    },
    {
      "name": "Blueprint",
      "hex": "#35637c",
      "good name": ""
    },
    {
      "name": "Blues",
      "hex": "#296a9d",
      "good name": ""
    },
    {
      "name": "Blues White Shoes",
      "hex": "#99badd",
      "good name": "x"
    },
    {
      "name": "Bluesy Note",
      "hex": "#7c9ab5",
      "good name": ""
    },
    {
      "name": "Bluetiful",
      "hex": "#3c69e7",
      "good name": "x"
    },
    {
      "name": "Bluette",
      "hex": "#9ebed8",
      "good name": ""
    },
    {
      "name": "Bluewash",
      "hex": "#e2e6e0",
      "good name": ""
    },
    {
      "name": "Bluey",
      "hex": "#375978",
      "good name": ""
    },
    {
      "name": "Bluff Stone",
      "hex": "#d2bd9e",
      "good name": ""
    },
    {
      "name": "Bluish",
      "hex": "#2976bb",
      "good name": ""
    },
    {
      "name": "Bluish Black",
      "hex": "#413f44",
      "good name": ""
    },
    {
      "name": "Bluish Green",
      "hex": "#10a674",
      "good name": ""
    },
    {
      "name": "Bluish Grey",
      "hex": "#748b97",
      "good name": ""
    },
    {
      "name": "Bluish Lilac Purple",
      "hex": "#d0d5d3",
      "good name": ""
    },
    {
      "name": "Bluish Purple",
      "hex": "#703be7",
      "good name": ""
    },
    {
      "name": "Bluish Purple Anemone",
      "hex": "#6666bb",
      "good name": ""
    },
    {
      "name": "Bluish Water",
      "hex": "#89cfdb",
      "good name": ""
    },
    {
      "name": "Blumine",
      "hex": "#305c71",
      "good name": ""
    },
    {
      "name": "Blunt",
      "hex": "#b5bbc7",
      "good name": ""
    },
    {
      "name": "Blunt Violet",
      "hex": "#8d6c7a",
      "good name": ""
    },
    {
      "name": "Blurple",
      "hex": "#5539cc",
      "good name": ""
    },
    {
      "name": "Blush",
      "hex": "#f29e8e",
      "good name": ""
    },
    {
      "name": "Blush Beige",
      "hex": "#edd5c7",
      "good name": ""
    },
    {
      "name": "Blush Bomb",
      "hex": "#dd99aa",
      "good name": "x"
    },
    {
      "name": "Blush d'Amour",
      "hex": "#de5d83",
      "good name": "x"
    },
    {
      "name": "Blush Essence",
      "hex": "#cc88dd",
      "good name": ""
    },
    {
      "name": "Blush Mint",
      "hex": "#d9e6e0",
      "good name": ""
    },
    {
      "name": "Blush Pink",
      "hex": "#ff6fff",
      "good name": ""
    },
    {
      "name": "Blush Rush",
      "hex": "#f0bcbe",
      "good name": "x"
    },
    {
      "name": "Blush Sand",
      "hex": "#e2e0d8",
      "good name": ""
    },
    {
      "name": "Blush Sky",
      "hex": "#dee1ed",
      "good name": ""
    },
    {
      "name": "Blush Tint",
      "hex": "#f4e1e6",
      "good name": ""
    },
    {
      "name": "Blushed Bombshell",
      "hex": "#ee88cc",
      "good name": ""
    },
    {
      "name": "Blushed Cotton",
      "hex": "#f0e0d2",
      "good name": ""
    },
    {
      "name": "Blushed Velvet",
      "hex": "#dec5d3",
      "good name": ""
    },
    {
      "name": "Blushing",
      "hex": "#f0d1c3",
      "good name": ""
    },
    {
      "name": "Blushing Apricot",
      "hex": "#fbbca7",
      "good name": ""
    },
    {
      "name": "Blushing Bride",
      "hex": "#eedad1",
      "good name": ""
    },
    {
      "name": "Blushing Bud",
      "hex": "#dd9999",
      "good name": ""
    },
    {
      "name": "Blushing Cherub",
      "hex": "#ffcdaf",
      "good name": ""
    },
    {
      "name": "Blushing Coconut",
      "hex": "#ebd5ca",
      "good name": "x"
    },
    {
      "name": "Blushing Peach",
      "hex": "#ffd79f",
      "good name": ""
    },
    {
      "name": "Blushing Senorita",
      "hex": "#f3cacb",
      "good name": ""
    },
    {
      "name": "Blushing Tulip",
      "hex": "#e3a1b8",
      "good name": ""
    },
    {
      "name": "Bluster Blue",
      "hex": "#4a5a6f",
      "good name": ""
    },
    {
      "name": "Blustery Day",
      "hex": "#d6dfe7",
      "good name": ""
    },
    {
      "name": "Blustery Sky",
      "hex": "#6f848c",
      "good name": ""
    },
    {
      "name": "Blustery Wind",
      "hex": "#b6c5c1",
      "good name": ""
    },
    {
      "name": "Bnei Brak Bay",
      "hex": "#1d5bd6",
      "good name": ""
    },
    {
      "name": "Boa",
      "hex": "#8e855f",
      "good name": "x"
    },
    {
      "name": "Boardman",
      "hex": "#757760",
      "good name": ""
    },
    {
      "name": "Boat Anchor",
      "hex": "#6c6b6a",
      "good name": ""
    },
    {
      "name": "Boat Blue",
      "hex": "#2d5384",
      "good name": ""
    },
    {
      "name": "Boat House",
      "hex": "#4e89be",
      "good name": ""
    },
    {
      "name": "Boat Orchid",
      "hex": "#c0448f",
      "good name": ""
    },
    {
      "name": "Boathouse",
      "hex": "#577190",
      "good name": ""
    },
    {
      "name": "Boating Green",
      "hex": "#087170",
      "good name": ""
    },
    {
      "name": "Boatswain",
      "hex": "#243256",
      "good name": ""
    },
    {
      "name": "Bobby Blue",
      "hex": "#97c5da",
      "good name": ""
    },
    {
      "name": "Bobcat Whiskers",
      "hex": "#eadfd0",
      "good name": ""
    },
    {
      "name": "Boboli Gardens",
      "hex": "#22bb11",
      "good name": ""
    },
    {
      "name": "Bock",
      "hex": "#5d341a",
      "good name": ""
    },
    {
      "name": "Bockwurst",
      "hex": "#df8f67",
      "good name": ""
    },
    {
      "name": "Bodacious",
      "hex": "#b76ba3",
      "good name": ""
    },
    {
      "name": "Bodega Bay",
      "hex": "#5e81c1",
      "good name": ""
    },
    {
      "name": "Bodhi Tree",
      "hex": "#b09870",
      "good name": ""
    },
    {
      "name": "Boeing Blue",
      "hex": "#3d4652",
      "good name": ""
    },
    {
      "name": "Boerewors",
      "hex": "#973443",
      "good name": ""
    },
    {
      "name": "Bog",
      "hex": "#bab696",
      "good name": ""
    },
    {
      "name": "Bogart",
      "hex": "#8b8274",
      "good name": ""
    },
    {
      "name": "Bogey Green",
      "hex": "#116f26",
      "good name": ""
    },
    {
      "name": "Bogong Moth",
      "hex": "#663b3a",
      "good name": ""
    },
    {
      "name": "Bohemian Black",
      "hex": "#3b373c",
      "good name": ""
    },
    {
      "name": "Bohemian Blue",
      "hex": "#0000aa",
      "good name": "x"
    },
    {
      "name": "Bohemian Jazz",
      "hex": "#9d777c",
      "good name": ""
    },
    {
      "name": "Bohemianism",
      "hex": "#b8b3c8",
      "good name": ""
    },
    {
      "name": "Boho",
      "hex": "#7b684d",
      "good name": ""
    },
    {
      "name": "Boiling Acid",
      "hex": "#00ee11",
      "good name": ""
    },
    {
      "name": "Boiling Magma",
      "hex": "#ff3300",
      "good name": "x"
    },
    {
      "name": "Boiling Mud",
      "hex": "#a59c9b",
      "good name": ""
    },
    {
      "name": "Boiling Point",
      "hex": "#d7e9e8",
      "good name": ""
    },
    {
      "name": "Bok Choy",
      "hex": "#bccab3",
      "good name": "x"
    },
    {
      "name": "Bokara Grey",
      "hex": "#2a2725",
      "good name": ""
    },
    {
      "name": "Bold Avocado",
      "hex": "#879550",
      "good name": ""
    },
    {
      "name": "Bold Bolection",
      "hex": "#1d6575",
      "good name": ""
    },
    {
      "name": "Bold Brandy",
      "hex": "#796660",
      "good name": ""
    },
    {
      "name": "Bold Brick",
      "hex": "#8c5e55",
      "good name": ""
    },
    {
      "name": "Bold Eagle",
      "hex": "#463d2f",
      "good name": ""
    },
    {
      "name": "Bold Irish",
      "hex": "#2a814d",
      "good name": "x"
    },
    {
      "name": "Bold Sangria",
      "hex": "#7a4549",
      "good name": ""
    },
    {
      "name": "Bole",
      "hex": "#79443b",
      "good name": ""
    },
    {
      "name": "Bolero",
      "hex": "#88464a",
      "good name": ""
    },
    {
      "name": "Bollywood",
      "hex": "#debb32",
      "good name": ""
    },
    {
      "name": "Bollywood Gold",
      "hex": "#fffbab",
      "good name": "x"
    },
    {
      "name": "Bologna Sausage",
      "hex": "#ffcfdc",
      "good name": ""
    },
    {
      "name": "Bolognese",
      "hex": "#bb4400",
      "good name": "x"
    },
    {
      "name": "Bolt from the Blue",
      "hex": "#2277ff",
      "good name": ""
    },
    {
      "name": "Boltgun Metal",
      "hex": "#393939",
      "good name": ""
    },
    {
      "name": "Bombay",
      "hex": "#aeaead",
      "good name": ""
    },
    {
      "name": "Bombay Brown",
      "hex": "#9f5130",
      "good name": ""
    },
    {
      "name": "Bombay Pink",
      "hex": "#c9736a",
      "good name": ""
    },
    {
      "name": "Bon Voyage",
      "hex": "#8baeb2",
      "good name": ""
    },
    {
      "name": "Bona Fide",
      "hex": "#304471",
      "good name": ""
    },
    {
      "name": "Bona Fide Beige",
      "hex": "#cbb9ab",
      "good name": ""
    },
    {
      "name": "Bonaire",
      "hex": "#e6e2d7",
      "good name": ""
    },
    {
      "name": "Bonanza",
      "hex": "#523b2c",
      "good name": ""
    },
    {
      "name": "Bonbon Red",
      "hex": "#8c4268",
      "good name": ""
    },
    {
      "name": "Bondi",
      "hex": "#16698c",
      "good name": ""
    },
    {
      "name": "Bondi Blue",
      "hex": "#0095b6",
      "good name": ""
    },
    {
      "name": "Bone",
      "hex": "#e0d7c6",
      "good name": "x"
    },
    {
      "name": "Bone Brown",
      "hex": "#9d7446",
      "good name": ""
    },
    {
      "name": "Bone China",
      "hex": "#f3edde",
      "good name": ""
    },
    {
      "name": "Bone Dust",
      "hex": "#e7ece6",
      "good name": ""
    },
    {
      "name": "Bone Trace",
      "hex": "#d7d0c0",
      "good name": ""
    },
    {
      "name": "Bone White",
      "hex": "#f1e1b0",
      "good name": ""
    },
    {
      "name": "Bone-Chilling",
      "hex": "#e1f2f0",
      "good name": "x"
    },
    {
      "name": "Boneyard",
      "hex": "#bb9977",
      "good name": ""
    },
    {
      "name": "Bonfire",
      "hex": "#f78058",
      "good name": "x"
    },
    {
      "name": "Bonfire Flame",
      "hex": "#ce4e35",
      "good name": ""
    },
    {
      "name": "Bonfire Night",
      "hex": "#de6a41",
      "good name": ""
    },
    {
      "name": "Bongo Drum",
      "hex": "#d2c2b2",
      "good name": ""
    },
    {
      "name": "Bongo Skin",
      "hex": "#dece96",
      "good name": ""
    },
    {
      "name": "Bonjour",
      "hex": "#dfd7d2",
      "good name": ""
    },
    {
      "name": "Bonne Nuit",
      "hex": "#3a4866",
      "good name": "x"
    },
    {
      "name": "Bonnie Blue",
      "hex": "#8dbbd1",
      "good name": ""
    },
    {
      "name": "Bonnie Cream",
      "hex": "#fdefd2",
      "good name": ""
    },
    {
      "name": "Bonnie Dune Beach",
      "hex": "#e4d1bc",
      "good name": ""
    },
    {
      "name": "Bonnie's Bench",
      "hex": "#7c644a",
      "good name": ""
    },
    {
      "name": "Bonny Belle",
      "hex": "#c58eab",
      "good name": ""
    },
    {
      "name": "Bonsai",
      "hex": "#787b54",
      "good name": ""
    },
    {
      "name": "Bonsai Garden",
      "hex": "#9e9e7c",
      "good name": "x"
    },
    {
      "name": "Bonsai Pot",
      "hex": "#b8b19a",
      "good name": ""
    },
    {
      "name": "Bonsai Tint",
      "hex": "#c5d1b2",
      "good name": ""
    },
    {
      "name": "Bonsai Trunk",
      "hex": "#6c6d62",
      "good name": ""
    },
    {
      "name": "Bonus Level",
      "hex": "#ffa00a",
      "good name": ""
    },
    {
      "name": "Bonza Green",
      "hex": "#5e6b44",
      "good name": ""
    },
    {
      "name": "Booger",
      "hex": "#9bb53c",
      "good name": ""
    },
    {
      "name": "Booger Buster",
      "hex": "#00ff77",
      "good name": ""
    },
    {
      "name": "Boogie Blast",
      "hex": "#119944",
      "good name": ""
    },
    {
      "name": "Book Binder",
      "hex": "#805d5b",
      "good name": ""
    },
    {
      "name": "Bookstone",
      "hex": "#8c3432",
      "good name": ""
    },
    {
      "name": "Bookworm",
      "hex": "#ebe3de",
      "good name": "x"
    },
    {
      "name": "Boot Cut",
      "hex": "#afc2cf",
      "good name": ""
    },
    {
      "name": "Boot Hill Ghost",
      "hex": "#ddaf8e",
      "good name": ""
    },
    {
      "name": "Bootstrap Leather",
      "hex": "#793721",
      "good name": ""
    },
    {
      "name": "Booty Bay",
      "hex": "#7fc6be",
      "good name": ""
    },
    {
      "name": "Bora Bora Shore",
      "hex": "#92d0d0",
      "good name": ""
    },
    {
      "name": "Borage",
      "hex": "#507ea4",
      "good name": ""
    },
    {
      "name": "Borage Blue",
      "hex": "#5566cc",
      "good name": ""
    },
    {
      "name": "Bordeaux",
      "hex": "#7b002c",
      "good name": "x"
    },
    {
      "name": "Bordeaux Hint",
      "hex": "#efbcde",
      "good name": ""
    },
    {
      "name": "Bordeaux Leaf",
      "hex": "#5c3944",
      "good name": ""
    },
    {
      "name": "Bordeaux Red",
      "hex": "#6f2c4f",
      "good name": ""
    },
    {
      "name": "Borderline Pink",
      "hex": "#ee1166",
      "good name": "x"
    },
    {
      "name": "Boreal",
      "hex": "#717e73",
      "good name": ""
    },
    {
      "name": "Bored Accent Green",
      "hex": "#dedd98",
      "good name": ""
    },
    {
      "name": "Boredom",
      "hex": "#8c9c9c",
      "good name": ""
    },
    {
      "name": "Boredom Buster",
      "hex": "#ff8e51",
      "good name": ""
    },
    {
      "name": "Borg Drone",
      "hex": "#06470c",
      "good name": ""
    },
    {
      "name": "Borg Queen",
      "hex": "#054907",
      "good name": ""
    },
    {
      "name": "Boring Green",
      "hex": "#63b365",
      "good name": ""
    },
    {
      "name": "Borlotti Bean",
      "hex": "#d9b1aa",
      "good name": "x"
    },
    {
      "name": "Borscht",
      "hex": "#8c2c24",
      "good name": ""
    },
    {
      "name": "Bosc Pear",
      "hex": "#c09056",
      "good name": ""
    },
    {
      "name": "Bosco Blue",
      "hex": "#76a0af",
      "good name": ""
    },
    {
      "name": "Boson Brown",
      "hex": "#552c1c",
      "good name": ""
    },
    {
      "name": "Bōsōzoku Pink",
      "hex": "#e7dbe1",
      "good name": ""
    },
    {
      "name": "Bosphorus",
      "hex": "#007558",
      "good name": ""
    },
    {
      "name": "Bosporus",
      "hex": "#015d75",
      "good name": ""
    },
    {
      "name": "Bossa Nova",
      "hex": "#4c3d4e",
      "good name": ""
    },
    {
      "name": "Bossa Nova Blue",
      "hex": "#767c9e",
      "good name": ""
    },
    {
      "name": "Boston Blue",
      "hex": "#438eac",
      "good name": ""
    },
    {
      "name": "Boston Brick",
      "hex": "#87544e",
      "good name": ""
    },
    {
      "name": "Boston Fern",
      "hex": "#90966d",
      "good name": ""
    },
    {
      "name": "Boston University Red",
      "hex": "#cc0002",
      "good name": ""
    },
    {
      "name": "Bōtan",
      "hex": "#a2345c",
      "good name": ""
    },
    {
      "name": "Botanical Beauty",
      "hex": "#227700",
      "good name": ""
    },
    {
      "name": "Botanical Garden",
      "hex": "#44aa11",
      "good name": "x"
    },
    {
      "name": "Botanical Green",
      "hex": "#77976e",
      "good name": ""
    },
    {
      "name": "Botanical Night",
      "hex": "#12403c",
      "good name": "x"
    },
    {
      "name": "Botanical Tint",
      "hex": "#a7e6d4",
      "good name": ""
    },
    {
      "name": "Botticelli",
      "hex": "#92acb4",
      "good name": ""
    },
    {
      "name": "Botticelli Angel",
      "hex": "#fbdfd6",
      "good name": ""
    },
    {
      "name": "Bottle Green",
      "hex": "#006a4e",
      "good name": ""
    },
    {
      "name": "Bottlebrush Blossom",
      "hex": "#e8edb0",
      "good name": ""
    },
    {
      "name": "Bottom of my Heart",
      "hex": "#cc0077",
      "good name": "x"
    },
    {
      "name": "Boudin",
      "hex": "#dab27d",
      "good name": ""
    },
    {
      "name": "Boudoir Blue",
      "hex": "#7ea3d2",
      "good name": ""
    },
    {
      "name": "Bougainvillea",
      "hex": "#9884b9",
      "good name": ""
    },
    {
      "name": "Boulder",
      "hex": "#7c817c",
      "good name": ""
    },
    {
      "name": "Boulder Brown",
      "hex": "#655e4e",
      "good name": ""
    },
    {
      "name": "Boulder Creek",
      "hex": "#8c9496",
      "good name": ""
    },
    {
      "name": "Bouncy Ball Green",
      "hex": "#49a462",
      "good name": ""
    },
    {
      "name": "Boundless",
      "hex": "#5b6d84",
      "good name": ""
    },
    {
      "name": "Bouquet",
      "hex": "#a78199",
      "good name": ""
    },
    {
      "name": "Bourbon",
      "hex": "#af6c3e",
      "good name": "x"
    },
    {
      "name": "Bourbon Spice",
      "hex": "#e6be8a",
      "good name": ""
    },
    {
      "name": "Bourbon Truffle",
      "hex": "#6c5654",
      "good name": ""
    },
    {
      "name": "Bourgeois",
      "hex": "#ee0066",
      "good name": ""
    },
    {
      "name": "Bournonite Green",
      "hex": "#637a72",
      "good name": ""
    },
    {
      "name": "Boutique Beige",
      "hex": "#e1cead",
      "good name": "x"
    },
    {
      "name": "Bovine",
      "hex": "#52585c",
      "good name": ""
    },
    {
      "name": "Bow Tie",
      "hex": "#be2633",
      "good name": ""
    },
    {
      "name": "Bowen Blue",
      "hex": "#126da8",
      "good name": ""
    },
    {
      "name": "Bowerbird Blue",
      "hex": "#006585",
      "good name": ""
    },
    {
      "name": "Bowling Green",
      "hex": "#bfdeaf",
      "good name": ""
    },
    {
      "name": "Bowman Blue",
      "hex": "#587176",
      "good name": ""
    },
    {
      "name": "Bowser Shell",
      "hex": "#536b1f",
      "good name": ""
    },
    {
      "name": "Bowstring",
      "hex": "#d6d1c8",
      "good name": ""
    },
    {
      "name": "Box Office",
      "hex": "#898790",
      "good name": ""
    },
    {
      "name": "Boxcar",
      "hex": "#873d30",
      "good name": ""
    },
    {
      "name": "Boxwood",
      "hex": "#707b71",
      "good name": ""
    },
    {
      "name": "Boxwood Yellow",
      "hex": "#efe4a5",
      "good name": ""
    },
    {
      "name": "Boy Blue",
      "hex": "#8cacd6",
      "good name": ""
    },
    {
      "name": "Boy Red",
      "hex": "#b3111d",
      "good name": ""
    },
    {
      "name": "Boycott",
      "hex": "#635c53",
      "good name": ""
    },
    {
      "name": "Boynton Canyon",
      "hex": "#9f4e3e",
      "good name": ""
    },
    {
      "name": "Boysenberry",
      "hex": "#873260",
      "good name": ""
    },
    {
      "name": "Boysenberry Shadow",
      "hex": "#f1f3f9",
      "good name": ""
    },
    {
      "name": "Boyzone",
      "hex": "#2a96d5",
      "good name": ""
    },
    {
      "name": "Bracing Blue",
      "hex": "#014182",
      "good name": ""
    },
    {
      "name": "Bracken",
      "hex": "#5b3d27",
      "good name": ""
    },
    {
      "name": "Bracken Fern",
      "hex": "#31453b",
      "good name": ""
    },
    {
      "name": "Bracken Green",
      "hex": "#626f5d",
      "good name": ""
    },
    {
      "name": "Bradford Brown",
      "hex": "#84726c",
      "good name": ""
    },
    {
      "name": "Braid",
      "hex": "#77675b",
      "good name": ""
    },
    {
      "name": "Braided Raffia",
      "hex": "#e1d0af",
      "good name": ""
    },
    {
      "name": "Brain Freeze",
      "hex": "#00eeff",
      "good name": "x"
    },
    {
      "name": "Brain Pink",
      "hex": "#f2aeb1",
      "good name": ""
    },
    {
      "name": "Brainstem Grey",
      "hex": "#b5b5b5",
      "good name": ""
    },
    {
      "name": "Brainstorm",
      "hex": "#d1d3c0",
      "good name": ""
    },
    {
      "name": "Brainstorm Bronze",
      "hex": "#74685a",
      "good name": ""
    },
    {
      "name": "Braintree",
      "hex": "#65635b",
      "good name": ""
    },
    {
      "name": "Brake Light Trails",
      "hex": "#ee0033",
      "good name": ""
    },
    {
      "name": "Bramble Bush",
      "hex": "#503629",
      "good name": ""
    },
    {
      "name": "Bramble Jam",
      "hex": "#c71581",
      "good name": ""
    },
    {
      "name": "Brampton Grey",
      "hex": "#9ba29d",
      "good name": ""
    },
    {
      "name": "Bran",
      "hex": "#a66e4a",
      "good name": ""
    },
    {
      "name": "Brandeis Blue",
      "hex": "#0070ff",
      "good name": ""
    },
    {
      "name": "Brandied Apple",
      "hex": "#a37c79",
      "good name": ""
    },
    {
      "name": "Brandied Apricot",
      "hex": "#ca848a",
      "good name": ""
    },
    {
      "name": "Brandied Melon",
      "hex": "#ce7b5b",
      "good name": ""
    },
    {
      "name": "Brandied Pears",
      "hex": "#eae2d1",
      "good name": ""
    },
    {
      "name": "Brandy",
      "hex": "#dcb68a",
      "good name": "x"
    },
    {
      "name": "Brandy Alexander",
      "hex": "#f3e2dc",
      "good name": ""
    },
    {
      "name": "Brandy Bear",
      "hex": "#aa5412",
      "good name": "x"
    },
    {
      "name": "Brandy Brown",
      "hex": "#73362a",
      "good name": ""
    },
    {
      "name": "Brandy Butter",
      "hex": "#f3bb8f",
      "good name": ""
    },
    {
      "name": "Brandy Punch",
      "hex": "#c07c40",
      "good name": ""
    },
    {
      "name": "Brandy Rose",
      "hex": "#b6857a",
      "good name": ""
    },
    {
      "name": "Brandy Snaps",
      "hex": "#b58e8b",
      "good name": ""
    },
    {
      "name": "Brandywine",
      "hex": "#490206",
      "good name": ""
    },
    {
      "name": "Brandywine Raspberry",
      "hex": "#5555aa",
      "good name": ""
    },
    {
      "name": "Brandywine Spritz",
      "hex": "#e69dad",
      "good name": "x"
    },
    {
      "name": "Brass",
      "hex": "#b5a642",
      "good name": ""
    },
    {
      "name": "Brass Balls",
      "hex": "#e7bd42",
      "good name": ""
    },
    {
      "name": "Brass Button",
      "hex": "#927149",
      "good name": ""
    },
    {
      "name": "Brass Buttons",
      "hex": "#dfac4c",
      "good name": "x"
    },
    {
      "name": "Brass Knuckle",
      "hex": "#b9a70f",
      "good name": ""
    },
    {
      "name": "Brass Mesh",
      "hex": "#e1a84b",
      "good name": ""
    },
    {
      "name": "Brass Nail",
      "hex": "#dbbd76",
      "good name": ""
    },
    {
      "name": "Brass Scorpion",
      "hex": "#773b2e",
      "good name": ""
    },
    {
      "name": "Brass Trumpet",
      "hex": "#ecae58",
      "good name": ""
    },
    {
      "name": "Brass Yellow",
      "hex": "#b58735",
      "good name": ""
    },
    {
      "name": "Brassed Off",
      "hex": "#cfa743",
      "good name": ""
    },
    {
      "name": "Brassica",
      "hex": "#788879",
      "good name": ""
    },
    {
      "name": "Brasso",
      "hex": "#f3bc6b",
      "good name": ""
    },
    {
      "name": "Brassy",
      "hex": "#d5ab2c",
      "good name": ""
    },
    {
      "name": "Brassy Brass",
      "hex": "#776022",
      "good name": ""
    },
    {
      "name": "Brattle Spruce",
      "hex": "#454743",
      "good name": ""
    },
    {
      "name": "Bratwurst",
      "hex": "#582f2b",
      "good name": ""
    },
    {
      "name": "Braun",
      "hex": "#897058",
      "good name": ""
    },
    {
      "name": "Bravado Red",
      "hex": "#a0524e",
      "good name": ""
    },
    {
      "name": "Brave Orange",
      "hex": "#ff631c",
      "good name": ""
    },
    {
      "name": "Brave Purple",
      "hex": "#968db8",
      "good name": ""
    },
    {
      "name": "Bravo Blue",
      "hex": "#d3e7e9",
      "good name": ""
    },
    {
      "name": "Brazen Brass",
      "hex": "#7b6623",
      "good name": ""
    },
    {
      "name": "Brazen Orange",
      "hex": "#ce7850",
      "good name": ""
    },
    {
      "name": "Brazil Nut",
      "hex": "#856765",
      "good name": ""
    },
    {
      "name": "Brazilian Brown",
      "hex": "#7f5131",
      "good name": ""
    },
    {
      "name": "Brazilian Citrine",
      "hex": "#af915d",
      "good name": ""
    },
    {
      "name": "Brazilian Green",
      "hex": "#296d23",
      "good name": ""
    },
    {
      "name": "Brazilian Sand",
      "hex": "#dacab7",
      "good name": ""
    },
    {
      "name": "Brazilian Tan",
      "hex": "#ddc5af",
      "good name": ""
    },
    {
      "name": "Brazilianite",
      "hex": "#31d652",
      "good name": ""
    },
    {
      "name": "Bread 'n Butter",
      "hex": "#ffd182",
      "good name": ""
    },
    {
      "name": "Bread and Butter",
      "hex": "#faedd2",
      "good name": "x"
    },
    {
      "name": "Bread Basket",
      "hex": "#ab8659",
      "good name": ""
    },
    {
      "name": "Bread Crumb",
      "hex": "#e4d4be",
      "good name": "x"
    },
    {
      "name": "Bread Crust",
      "hex": "#b78b43",
      "good name": ""
    },
    {
      "name": "Bread Flavour",
      "hex": "#dcd6d2",
      "good name": ""
    },
    {
      "name": "Bread Pudding",
      "hex": "#bfa270",
      "good name": ""
    },
    {
      "name": "Break of Day",
      "hex": "#fffabd",
      "good name": ""
    },
    {
      "name": "Break the Ice",
      "hex": "#b2e1ee",
      "good name": "x"
    },
    {
      "name": "Breakaway",
      "hex": "#cedac3",
      "good name": ""
    },
    {
      "name": "Breakaway Blue",
      "hex": "#424d60",
      "good name": ""
    },
    {
      "name": "Breaker",
      "hex": "#e5eded",
      "good name": ""
    },
    {
      "name": "Breaker Bay",
      "hex": "#517b78",
      "good name": ""
    },
    {
      "name": "Breakfast Biscuit",
      "hex": "#f6e3d3",
      "good name": ""
    },
    {
      "name": "Breakfast Blend",
      "hex": "#6d5542",
      "good name": ""
    },
    {
      "name": "Breaking Wave",
      "hex": "#00a0b0",
      "good name": ""
    },
    {
      "name": "Breaktime",
      "hex": "#c4d9ce",
      "good name": ""
    },
    {
      "name": "Breakwater",
      "hex": "#d1dee4",
      "good name": ""
    },
    {
      "name": "Breakwater White",
      "hex": "#ebf1e9",
      "good name": ""
    },
    {
      "name": "Breakwaters",
      "hex": "#d9e5e0",
      "good name": ""
    },
    {
      "name": "Breath of Fire",
      "hex": "#ee0011",
      "good name": "x"
    },
    {
      "name": "Breath Of Spring",
      "hex": "#dfeeda",
      "good name": ""
    },
    {
      "name": "Breath of Spring",
      "hex": "#e9e1a7",
      "good name": ""
    },
    {
      "name": "Breathe",
      "hex": "#d1d2b8",
      "good name": ""
    },
    {
      "name": "Breathless",
      "hex": "#dfdae0",
      "good name": ""
    },
    {
      "name": "Breathtaking",
      "hex": "#536193",
      "good name": ""
    },
    {
      "name": "Breathtaking Evening",
      "hex": "#c3acb7",
      "good name": ""
    },
    {
      "name": "Breathtaking View",
      "hex": "#809bac",
      "good name": ""
    },
    {
      "name": "Bredon Green",
      "hex": "#5e9948",
      "good name": ""
    },
    {
      "name": "Breen",
      "hex": "#795d34",
      "good name": ""
    },
    {
      "name": "Breeze",
      "hex": "#c2dde6",
      "good name": "x"
    },
    {
      "name": "Breeze in June",
      "hex": "#c4dfe8",
      "good name": ""
    },
    {
      "name": "Breeze of Green",
      "hex": "#cffdbc",
      "good name": ""
    },
    {
      "name": "Breezeway",
      "hex": "#d6dbc0",
      "good name": ""
    },
    {
      "name": "Breezy",
      "hex": "#aec9ea",
      "good name": ""
    },
    {
      "name": "Breezy Aqua",
      "hex": "#d9e4de",
      "good name": ""
    },
    {
      "name": "Breezy Beige",
      "hex": "#f7f2d7",
      "good name": ""
    },
    {
      "name": "Breezy Blue",
      "hex": "#bad9e5",
      "good name": ""
    },
    {
      "name": "Breonne Blue",
      "hex": "#2d567c",
      "good name": ""
    },
    {
      "name": "Bresaola",
      "hex": "#a9203e",
      "good name": ""
    },
    {
      "name": "Brescian Blue",
      "hex": "#0080ff",
      "good name": ""
    },
    {
      "name": "Bretzel Brown",
      "hex": "#aa5555",
      "good name": ""
    },
    {
      "name": "Brevity Brown",
      "hex": "#715243",
      "good name": ""
    },
    {
      "name": "Brewed Mustard",
      "hex": "#e68364",
      "good name": ""
    },
    {
      "name": "Brewing Storm",
      "hex": "#777788",
      "good name": ""
    },
    {
      "name": "Briar",
      "hex": "#745443",
      "good name": ""
    },
    {
      "name": "Briar Rose",
      "hex": "#c07281",
      "good name": ""
    },
    {
      "name": "Briar Wood",
      "hex": "#695451",
      "good name": ""
    },
    {
      "name": "Brick",
      "hex": "#a03623",
      "good name": ""
    },
    {
      "name": "Brick Brown",
      "hex": "#77603f",
      "good name": ""
    },
    {
      "name": "Brick Dust",
      "hex": "#b07069",
      "good name": ""
    },
    {
      "name": "Brick Fence",
      "hex": "#b38070",
      "good name": ""
    },
    {
      "name": "Brick Hearth",
      "hex": "#956159",
      "good name": ""
    },
    {
      "name": "Brick Orange",
      "hex": "#c14a09",
      "good name": ""
    },
    {
      "name": "Brick Path",
      "hex": "#c2977c",
      "good name": ""
    },
    {
      "name": "Brick Paver",
      "hex": "#93402f",
      "good name": ""
    },
    {
      "name": "Brick Red",
      "hex": "#8f1402",
      "good name": "x"
    },
    {
      "name": "Brick Yellow",
      "hex": "#d2a161",
      "good name": ""
    },
    {
      "name": "Brick-A-Brack",
      "hex": "#a75c3d",
      "good name": ""
    },
    {
      "name": "Brickhouse",
      "hex": "#864a36",
      "good name": ""
    },
    {
      "name": "Bricks of Hope",
      "hex": "#db5856",
      "good name": ""
    },
    {
      "name": "Bricktone",
      "hex": "#825943",
      "good name": ""
    },
    {
      "name": "Brickwork Red",
      "hex": "#986971",
      "good name": ""
    },
    {
      "name": "Bricky Brick",
      "hex": "#b33a22",
      "good name": "x"
    },
    {
      "name": "Bridal Blush",
      "hex": "#eee2dd",
      "good name": ""
    },
    {
      "name": "Bridal Bouquet",
      "hex": "#ebbdb8",
      "good name": ""
    },
    {
      "name": "Bridal Heath",
      "hex": "#f8ebdd",
      "good name": ""
    },
    {
      "name": "Bridal Rose",
      "hex": "#d69fa2",
      "good name": ""
    },
    {
      "name": "Bridal Veil",
      "hex": "#e7e1de",
      "good name": ""
    },
    {
      "name": "Bride's Blush",
      "hex": "#f9e2e1",
      "good name": "x"
    },
    {
      "name": "Bridesmaid",
      "hex": "#fae6df",
      "good name": ""
    },
    {
      "name": "Bridge Troll Grey",
      "hex": "#817f6e",
      "good name": ""
    },
    {
      "name": "Bridgeport",
      "hex": "#004683",
      "good name": ""
    },
    {
      "name": "Bridgewater",
      "hex": "#527065",
      "good name": ""
    },
    {
      "name": "Bridgewater Bay",
      "hex": "#bcd7e2",
      "good name": ""
    },
    {
      "name": "Bridgewood",
      "hex": "#575144",
      "good name": ""
    },
    {
      "name": "Bridle Leather",
      "hex": "#8f7d70",
      "good name": ""
    },
    {
      "name": "Bridle Path",
      "hex": "#a29682",
      "good name": ""
    },
    {
      "name": "Brierwood Green",
      "hex": "#545e4f",
      "good name": ""
    },
    {
      "name": "Brig",
      "hex": "#4fa1c0",
      "good name": ""
    },
    {
      "name": "Brig O'Doon",
      "hex": "#ddcfbf",
      "good name": ""
    },
    {
      "name": "Brigade",
      "hex": "#365d73",
      "good name": ""
    },
    {
      "name": "Brigadier Blue",
      "hex": "#0063a0",
      "good name": ""
    },
    {
      "name": "Bright Aqua",
      "hex": "#0bf9ea",
      "good name": ""
    },
    {
      "name": "Bright Blue",
      "hex": "#0165fc",
      "good name": ""
    },
    {
      "name": "Bright Blue Violet",
      "hex": "#8a2be2",
      "good name": ""
    },
    {
      "name": "Bright Bluebell",
      "hex": "#9da7cf",
      "good name": ""
    },
    {
      "name": "Bright Bluebonnet",
      "hex": "#90b3c2",
      "good name": ""
    },
    {
      "name": "Bright Bronze",
      "hex": "#a05822",
      "good name": ""
    },
    {
      "name": "Bright Brown",
      "hex": "#533b32",
      "good name": ""
    },
    {
      "name": "Bright Bubble",
      "hex": "#ffc42a",
      "good name": ""
    },
    {
      "name": "Bright Camouflage",
      "hex": "#1cac78",
      "good name": ""
    },
    {
      "name": "Bright Cerulean",
      "hex": "#1dacd6",
      "good name": ""
    },
    {
      "name": "Bright Chambray",
      "hex": "#adbfc8",
      "good name": ""
    },
    {
      "name": "Bright Chartreuse",
      "hex": "#dfff11",
      "good name": ""
    },
    {
      "name": "Bright Citrus",
      "hex": "#ffc6a5",
      "good name": ""
    },
    {
      "name": "Bright Clove",
      "hex": "#efcf9b",
      "good name": ""
    },
    {
      "name": "Bright Cobalt",
      "hex": "#385d8d",
      "good name": ""
    },
    {
      "name": "Bright Cyan",
      "hex": "#41fdfe",
      "good name": ""
    },
    {
      "name": "Bright Delight",
      "hex": "#cd5b26",
      "good name": ""
    },
    {
      "name": "Bright Dusk",
      "hex": "#eee9f9",
      "good name": ""
    },
    {
      "name": "Bright Ecru",
      "hex": "#feffca",
      "good name": ""
    },
    {
      "name": "Bright Eggplant",
      "hex": "#5a4e88",
      "good name": ""
    },
    {
      "name": "Bright Gold",
      "hex": "#cf9f52",
      "good name": ""
    },
    {
      "name": "Bright Greek",
      "hex": "#3844f4",
      "good name": ""
    },
    {
      "name": "Bright Green",
      "hex": "#66ff00",
      "good name": ""
    },
    {
      "name": "Bright Grey",
      "hex": "#ebecf0",
      "good name": ""
    },
    {
      "name": "Bright Halo",
      "hex": "#ffd266",
      "good name": ""
    },
    {
      "name": "Bright Idea",
      "hex": "#ecbe63",
      "good name": ""
    },
    {
      "name": "Bright Indigo",
      "hex": "#6f00fe",
      "good name": ""
    },
    {
      "name": "Bright Khaki",
      "hex": "#f1e78c",
      "good name": ""
    },
    {
      "name": "Bright Lady",
      "hex": "#9f3645",
      "good name": ""
    },
    {
      "name": "Bright Laughter",
      "hex": "#f0edd1",
      "good name": ""
    },
    {
      "name": "Bright Lavender",
      "hex": "#bf94e4",
      "good name": ""
    },
    {
      "name": "Bright Lettuce",
      "hex": "#8dce65",
      "good name": ""
    },
    {
      "name": "Bright Light Green",
      "hex": "#2dfe54",
      "good name": ""
    },
    {
      "name": "Bright Lilac",
      "hex": "#d891ef",
      "good name": ""
    },
    {
      "name": "Bright Lime",
      "hex": "#87fd05",
      "good name": ""
    },
    {
      "name": "Bright Lime Green",
      "hex": "#65fe08",
      "good name": ""
    },
    {
      "name": "Bright Loam",
      "hex": "#c1b9aa",
      "good name": ""
    },
    {
      "name": "Bright Magenta",
      "hex": "#ff08e8",
      "good name": ""
    },
    {
      "name": "Bright Manatee",
      "hex": "#979aaa",
      "good name": ""
    },
    {
      "name": "Bright Mango",
      "hex": "#ff8830",
      "good name": ""
    },
    {
      "name": "Bright Marigold",
      "hex": "#ff8d00",
      "good name": ""
    },
    {
      "name": "Bright Maroon",
      "hex": "#c32148",
      "good name": ""
    },
    {
      "name": "Bright Midnight",
      "hex": "#011993",
      "good name": ""
    },
    {
      "name": "Bright Midnight Blue",
      "hex": "#1a4876",
      "good name": ""
    },
    {
      "name": "Bright Mint",
      "hex": "#98ff98",
      "good name": ""
    },
    {
      "name": "Bright Moon",
      "hex": "#f6f1e5",
      "good name": ""
    },
    {
      "name": "Bright Nautilus",
      "hex": "#225869",
      "good name": ""
    },
    {
      "name": "Bright Navy Blue",
      "hex": "#1974d2",
      "good name": ""
    },
    {
      "name": "Bright Nori",
      "hex": "#2d5e22",
      "good name": ""
    },
    {
      "name": "Bright Ocarina",
      "hex": "#f0e8da",
      "good name": ""
    },
    {
      "name": "Bright Olive",
      "hex": "#9cbb04",
      "good name": ""
    },
    {
      "name": "Bright Orange",
      "hex": "#ff7034",
      "good name": ""
    },
    {
      "name": "Bright Pink",
      "hex": "#fe01b1",
      "good name": ""
    },
    {
      "name": "Bright Purple",
      "hex": "#be03fd",
      "good name": ""
    },
    {
      "name": "Bright Red",
      "hex": "#ff000d",
      "good name": ""
    },
    {
      "name": "Bright Rose",
      "hex": "#c51959",
      "good name": ""
    },
    {
      "name": "Bright Saffron",
      "hex": "#ffcf09",
      "good name": ""
    },
    {
      "name": "Bright Sage",
      "hex": "#d1ceb4",
      "good name": ""
    },
    {
      "name": "Bright Scarlet",
      "hex": "#fc0e34",
      "good name": ""
    },
    {
      "name": "Bright Sea Green",
      "hex": "#9fe2bf",
      "good name": ""
    },
    {
      "name": "Bright Sepia",
      "hex": "#b1aa9c",
      "good name": ""
    },
    {
      "name": "Bright Sienna",
      "hex": "#d68a59",
      "good name": ""
    },
    {
      "name": "Bright Sky Blue",
      "hex": "#02ccfe",
      "good name": ""
    },
    {
      "name": "Bright Spark",
      "hex": "#76c1e1",
      "good name": ""
    },
    {
      "name": "Bright Star",
      "hex": "#dde2e6",
      "good name": "x"
    },
    {
      "name": "Bright Sun",
      "hex": "#ecbd2c",
      "good name": ""
    },
    {
      "name": "Bright Teal",
      "hex": "#01f9c6",
      "good name": ""
    },
    {
      "name": "Bright Turquoise",
      "hex": "#08e8de",
      "good name": ""
    },
    {
      "name": "Bright Ube",
      "hex": "#d19fe8",
      "good name": ""
    },
    {
      "name": "Bright Umber",
      "hex": "#826644",
      "good name": ""
    },
    {
      "name": "Bright Violet",
      "hex": "#ad0afd",
      "good name": ""
    },
    {
      "name": "Bright White",
      "hex": "#f4f5f0",
      "good name": ""
    },
    {
      "name": "Bright Winter Cloud",
      "hex": "#f5efe8",
      "good name": ""
    },
    {
      "name": "Bright Yarrow",
      "hex": "#face6d",
      "good name": ""
    },
    {
      "name": "Bright Yellow",
      "hex": "#fffd01",
      "good name": ""
    },
    {
      "name": "Bright Yellow Green",
      "hex": "#9dff00",
      "good name": ""
    },
    {
      "name": "Bright Zenith",
      "hex": "#757cae",
      "good name": ""
    },
    {
      "name": "Brihaspati Orange",
      "hex": "#e2681b",
      "good name": ""
    },
    {
      "name": "Brik Dough",
      "hex": "#dab77f",
      "good name": ""
    },
    {
      "name": "Brilliance",
      "hex": "#fdfdfd",
      "good name": "x"
    },
    {
      "name": "Brilliant",
      "hex": "#0094a7",
      "good name": ""
    },
    {
      "name": "Brilliant Azure",
      "hex": "#3399ff",
      "good name": ""
    },
    {
      "name": "Brilliant Beige",
      "hex": "#efc5b5",
      "good name": ""
    },
    {
      "name": "Brilliant Blue",
      "hex": "#0075b3",
      "good name": ""
    },
    {
      "name": "Brilliant Carmine",
      "hex": "#ad548f",
      "good name": ""
    },
    {
      "name": "Brilliant Green",
      "hex": "#88b407",
      "good name": ""
    },
    {
      "name": "Brilliant Impression",
      "hex": "#efc600",
      "good name": ""
    },
    {
      "name": "Brilliant Lavender",
      "hex": "#f4bbff",
      "good name": ""
    },
    {
      "name": "Brilliant Licorice",
      "hex": "#545454",
      "good name": ""
    },
    {
      "name": "Brilliant Rose",
      "hex": "#fe54a3",
      "good name": ""
    },
    {
      "name": "Brilliant Sea",
      "hex": "#009cb7",
      "good name": ""
    },
    {
      "name": "Brilliant Silver",
      "hex": "#a9b0b4",
      "good name": ""
    },
    {
      "name": "Brilliant Turquoise",
      "hex": "#00a68b",
      "good name": ""
    },
    {
      "name": "Brilliant White",
      "hex": "#edf1fe",
      "good name": ""
    },
    {
      "name": "Brilliant Yellow",
      "hex": "#e8e5d8",
      "good name": ""
    },
    {
      "name": "Brimstone",
      "hex": "#ffbd2b",
      "good name": ""
    },
    {
      "name": "Brimstone Butterfly",
      "hex": "#c2c190",
      "good name": ""
    },
    {
      "name": "Brindle",
      "hex": "#82776b",
      "good name": ""
    },
    {
      "name": "Brink Pink",
      "hex": "#fb607f",
      "good name": "x"
    },
    {
      "name": "Briny",
      "hex": "#08808e",
      "good name": ""
    },
    {
      "name": "Brioche",
      "hex": "#dfcfc3",
      "good name": ""
    },
    {
      "name": "Briquette",
      "hex": "#e15f65",
      "good name": ""
    },
    {
      "name": "Briquette Grey",
      "hex": "#515051",
      "good name": ""
    },
    {
      "name": "Brisa De Mar",
      "hex": "#d2e0ef",
      "good name": ""
    },
    {
      "name": "Brisk Blue",
      "hex": "#6d829d",
      "good name": ""
    },
    {
      "name": "Brisket",
      "hex": "#6e4534",
      "good name": "x"
    },
    {
      "name": "Bristle Grass",
      "hex": "#a28450",
      "good name": ""
    },
    {
      "name": "Bristol Beige",
      "hex": "#93836f",
      "good name": ""
    },
    {
      "name": "Bristol Blue",
      "hex": "#558f91",
      "good name": ""
    },
    {
      "name": "Bristol Green",
      "hex": "#83a492",
      "good name": ""
    },
    {
      "name": "Britches",
      "hex": "#a09073",
      "good name": ""
    },
    {
      "name": "British Grey Mauve",
      "hex": "#7d7081",
      "good name": ""
    },
    {
      "name": "British Khaki",
      "hex": "#bcaf97",
      "good name": ""
    },
    {
      "name": "British Mauve",
      "hex": "#35427b",
      "good name": ""
    },
    {
      "name": "British Phone Booth",
      "hex": "#ff0015",
      "good name": "x"
    },
    {
      "name": "British Racing Green",
      "hex": "#05480d",
      "good name": ""
    },
    {
      "name": "British Rose",
      "hex": "#f4c8db",
      "good name": ""
    },
    {
      "name": "British Shorthair",
      "hex": "#5f6672",
      "good name": ""
    },
    {
      "name": "Brittany Blue",
      "hex": "#4c7e86",
      "good name": ""
    },
    {
      "name": "Brittany's Bow",
      "hex": "#f3d8e0",
      "good name": ""
    },
    {
      "name": "Brittlebush",
      "hex": "#eaae47",
      "good name": ""
    },
    {
      "name": "Broad Daylight",
      "hex": "#bbddff",
      "good name": "x"
    },
    {
      "name": "Broadleaf Forest",
      "hex": "#014421",
      "good name": ""
    },
    {
      "name": "Broadwater Blue",
      "hex": "#034a71",
      "good name": ""
    },
    {
      "name": "Broadway",
      "hex": "#434442",
      "good name": ""
    },
    {
      "name": "Broadway Lights",
      "hex": "#fee07c",
      "good name": ""
    },
    {
      "name": "Brocade",
      "hex": "#8c87c5",
      "good name": ""
    },
    {
      "name": "Brocade Violet",
      "hex": "#7b4d6b",
      "good name": ""
    },
    {
      "name": "Broccoflower",
      "hex": "#8fa277",
      "good name": ""
    },
    {
      "name": "Broccoli",
      "hex": "#87b364",
      "good name": "x"
    },
    {
      "name": "Broccoli Green",
      "hex": "#4b5338",
      "good name": "x"
    },
    {
      "name": "Broccoli Paradise",
      "hex": "#008833",
      "good name": "x"
    },
    {
      "name": "Brochantite Green",
      "hex": "#486262",
      "good name": ""
    },
    {
      "name": "Broiled Flounder",
      "hex": "#ffdd88",
      "good name": ""
    },
    {
      "name": "Broken Blue",
      "hex": "#74bbfb",
      "good name": ""
    },
    {
      "name": "Broken Tube",
      "hex": "#060310",
      "good name": ""
    },
    {
      "name": "Broken White",
      "hex": "#eeebe3",
      "good name": ""
    },
    {
      "name": "Bronco",
      "hex": "#a79781",
      "good name": ""
    },
    {
      "name": "Bronze",
      "hex": "#a87900",
      "good name": "x"
    },
    {
      "name": "Bronze Blue",
      "hex": "#3a4856",
      "good name": ""
    },
    {
      "name": "Bronze Brown",
      "hex": "#825e2f",
      "good name": ""
    },
    {
      "name": "Bronze Fig",
      "hex": "#6e6654",
      "good name": ""
    },
    {
      "name": "Bronze Flesh",
      "hex": "#f7944a",
      "good name": ""
    },
    {
      "name": "Bronze Green",
      "hex": "#8d8752",
      "good name": ""
    },
    {
      "name": "Bronze Icon",
      "hex": "#585538",
      "good name": ""
    },
    {
      "name": "Bronze Medal",
      "hex": "#6d6240",
      "good name": ""
    },
    {
      "name": "Bronze Mist",
      "hex": "#9c7e41",
      "good name": ""
    },
    {
      "name": "Bronze Olive",
      "hex": "#584c25",
      "good name": ""
    },
    {
      "name": "Bronze Sand",
      "hex": "#e6be9c",
      "good name": ""
    },
    {
      "name": "Bronze Satin",
      "hex": "#cc5533",
      "good name": ""
    },
    {
      "name": "Bronze Tone",
      "hex": "#434c28",
      "good name": ""
    },
    {
      "name": "Bronze Treasure",
      "hex": "#b08d57",
      "good name": ""
    },
    {
      "name": "Bronze Yellow",
      "hex": "#737000",
      "good name": ""
    },
    {
      "name": "Bronzed",
      "hex": "#dd6633",
      "good name": "x"
    },
    {
      "name": "Bronzed Brass",
      "hex": "#9b7e4e",
      "good name": ""
    },
    {
      "name": "Bronzed Flesh",
      "hex": "#eb9552",
      "good name": ""
    },
    {
      "name": "Bronzed Orange",
      "hex": "#d78a6c",
      "good name": ""
    },
    {
      "name": "Brood",
      "hex": "#69605a",
      "good name": ""
    },
    {
      "name": "Brooding Storm",
      "hex": "#5e6d6e",
      "good name": ""
    },
    {
      "name": "Brook Green",
      "hex": "#afddcc",
      "good name": ""
    },
    {
      "name": "Brook Trout",
      "hex": "#dacecd",
      "good name": ""
    },
    {
      "name": "Brooklet",
      "hex": "#e7eeee",
      "good name": ""
    },
    {
      "name": "Brooklyn",
      "hex": "#586766",
      "good name": ""
    },
    {
      "name": "Brookside",
      "hex": "#5a7562",
      "good name": ""
    },
    {
      "name": "Brookview",
      "hex": "#99b792",
      "good name": ""
    },
    {
      "name": "Broom",
      "hex": "#eecc24",
      "good name": "x"
    },
    {
      "name": "Broom Butterfly Blue",
      "hex": "#6bb3db",
      "good name": ""
    },
    {
      "name": "Broomstick",
      "hex": "#74462d",
      "good name": ""
    },
    {
      "name": "Brother Blue",
      "hex": "#b0b7c6",
      "good name": ""
    },
    {
      "name": "Brown",
      "hex": "#653700",
      "good name": "x"
    },
    {
      "name": "Brown 383",
      "hex": "#443724",
      "good name": ""
    },
    {
      "name": "Brown Alpaca",
      "hex": "#b86d29",
      "good name": "x"
    },
    {
      "name": "Brown Bag",
      "hex": "#deac6e",
      "good name": ""
    },
    {
      "name": "Brown Bear",
      "hex": "#4a3f37",
      "good name": ""
    },
    {
      "name": "Brown Beauty",
      "hex": "#4a3832",
      "good name": ""
    },
    {
      "name": "Brown Beige",
      "hex": "#cc8833",
      "good name": ""
    },
    {
      "name": "Brown Bramble",
      "hex": "#53331e",
      "good name": ""
    },
    {
      "name": "Brown Bread",
      "hex": "#d4c5a9",
      "good name": ""
    },
    {
      "name": "Brown Butter",
      "hex": "#ac7c00",
      "good name": ""
    },
    {
      "name": "Brown Cerberus",
      "hex": "#995555",
      "good name": ""
    },
    {
      "name": "Brown Chocolate",
      "hex": "#5f1933",
      "good name": ""
    },
    {
      "name": "Brown Clay",
      "hex": "#c37c59",
      "good name": ""
    },
    {
      "name": "Brown Coffee",
      "hex": "#4a2c2a",
      "good name": "x"
    },
    {
      "name": "Brown Derby",
      "hex": "#594537",
      "good name": ""
    },
    {
      "name": "Brown Eyes",
      "hex": "#9e6b4a",
      "good name": ""
    },
    {
      "name": "Brown Fox",
      "hex": "#544a42",
      "good name": ""
    },
    {
      "name": "Brown Green",
      "hex": "#706c11",
      "good name": ""
    },
    {
      "name": "Brown Grey",
      "hex": "#8d8468",
      "good name": ""
    },
    {
      "name": "Brown Knapweed",
      "hex": "#f485ac",
      "good name": ""
    },
    {
      "name": "Brown Labrador",
      "hex": "#97382c",
      "good name": ""
    },
    {
      "name": "Brown Magenta",
      "hex": "#7b2039",
      "good name": ""
    },
    {
      "name": "Brown Moelleux",
      "hex": "#662211",
      "good name": ""
    },
    {
      "name": "Brown Mouse",
      "hex": "#d8cbb5",
      "good name": ""
    },
    {
      "name": "Brown Mustard",
      "hex": "#dfac59",
      "good name": ""
    },
    {
      "name": "Brown Orange",
      "hex": "#b96902",
      "good name": ""
    },
    {
      "name": "Brown Patina",
      "hex": "#834f3d",
      "good name": ""
    },
    {
      "name": "Brown Pepper",
      "hex": "#4e403b",
      "good name": ""
    },
    {
      "name": "Brown Pod",
      "hex": "#3c241b",
      "good name": ""
    },
    {
      "name": "Brown Rabbit",
      "hex": "#ae8e65",
      "good name": ""
    },
    {
      "name": "Brown Red",
      "hex": "#922b05",
      "good name": ""
    },
    {
      "name": "Brown Rice",
      "hex": "#dabd84",
      "good name": ""
    },
    {
      "name": "Brown Ridge",
      "hex": "#735852",
      "good name": ""
    },
    {
      "name": "Brown Rose",
      "hex": "#8d736c",
      "good name": ""
    },
    {
      "name": "Brown Rum",
      "hex": "#bc9b4e",
      "good name": ""
    },
    {
      "name": "Brown Rust",
      "hex": "#af593e",
      "good name": ""
    },
    {
      "name": "Brown Sand",
      "hex": "#f7945f",
      "good name": ""
    },
    {
      "name": "Brown Stone",
      "hex": "#593c39",
      "good name": ""
    },
    {
      "name": "Brown Suede",
      "hex": "#5b4f41",
      "good name": ""
    },
    {
      "name": "Brown Sugar",
      "hex": "#a17249",
      "good name": "x"
    },
    {
      "name": "Brown Sugar Coating",
      "hex": "#c8ae96",
      "good name": ""
    },
    {
      "name": "Brown Sugar Glaze",
      "hex": "#cf7a4b",
      "good name": "x"
    },
    {
      "name": "Brown Teepee",
      "hex": "#bca792",
      "good name": ""
    },
    {
      "name": "Brown Thrush",
      "hex": "#906151",
      "good name": ""
    },
    {
      "name": "Brown Tumbleweed",
      "hex": "#37290e",
      "good name": ""
    },
    {
      "name": "Brown Velvet",
      "hex": "#704e40",
      "good name": ""
    },
    {
      "name": "Brown Wood",
      "hex": "#b4674d",
      "good name": ""
    },
    {
      "name": "Brown Yellow",
      "hex": "#dd9966",
      "good name": ""
    },
    {
      "name": "Brown-Bag-It",
      "hex": "#ddbda3",
      "good name": ""
    },
    {
      "name": "Browned Off",
      "hex": "#bb4433",
      "good name": ""
    },
    {
      "name": "Brownie",
      "hex": "#964b00",
      "good name": "x"
    },
    {
      "name": "Brownish",
      "hex": "#9c6d57",
      "good name": ""
    },
    {
      "name": "Brownish Black",
      "hex": "#413936",
      "good name": ""
    },
    {
      "name": "Brownish Green",
      "hex": "#6a6e09",
      "good name": ""
    },
    {
      "name": "Brownish Grey",
      "hex": "#86775f",
      "good name": ""
    },
    {
      "name": "Brownish Orange",
      "hex": "#cb7723",
      "good name": ""
    },
    {
      "name": "Brownish Pink",
      "hex": "#c27e79",
      "good name": ""
    },
    {
      "name": "Brownish Purple",
      "hex": "#76424e",
      "good name": ""
    },
    {
      "name": "Brownish Purple Red",
      "hex": "#8d746f",
      "good name": ""
    },
    {
      "name": "Brownish Red",
      "hex": "#9e3623",
      "good name": ""
    },
    {
      "name": "Brownish Yellow",
      "hex": "#c9b003",
      "good name": ""
    },
    {
      "name": "Brownstone",
      "hex": "#785441",
      "good name": ""
    },
    {
      "name": "Browse Brown",
      "hex": "#6e615f",
      "good name": ""
    },
    {
      "name": "Bruin Spice",
      "hex": "#d3b99b",
      "good name": ""
    },
    {
      "name": "Bruise",
      "hex": "#7e4071",
      "good name": "x"
    },
    {
      "name": "Bruised Bear",
      "hex": "#5d3954",
      "good name": ""
    },
    {
      "name": "Bruised Burgundy",
      "hex": "#5b4148",
      "good name": ""
    },
    {
      "name": "Brume",
      "hex": "#c6c6c2",
      "good name": "x"
    },
    {
      "name": "Brunette",
      "hex": "#664238",
      "good name": ""
    },
    {
      "name": "Brunnera Blue",
      "hex": "#9ba9ca",
      "good name": ""
    },
    {
      "name": "Bruno Brown",
      "hex": "#433430",
      "good name": ""
    },
    {
      "name": "Brunswick",
      "hex": "#236649",
      "good name": ""
    },
    {
      "name": "Brunswick Green",
      "hex": "#1b4d3e",
      "good name": ""
    },
    {
      "name": "Bruschetta",
      "hex": "#a75949",
      "good name": "x"
    },
    {
      "name": "Bruschetta Tomato",
      "hex": "#ff6347",
      "good name": ""
    },
    {
      "name": "Brush",
      "hex": "#b99984",
      "good name": ""
    },
    {
      "name": "Brush Blue",
      "hex": "#d4e1ed",
      "good name": ""
    },
    {
      "name": "Brushed Clay",
      "hex": "#db9351",
      "good name": ""
    },
    {
      "name": "Brushed Nickel",
      "hex": "#73706f",
      "good name": ""
    },
    {
      "name": "Brushstroke",
      "hex": "#f1dfba",
      "good name": ""
    },
    {
      "name": "Brushwood",
      "hex": "#8c5939",
      "good name": ""
    },
    {
      "name": "Brusque Brown",
      "hex": "#cc6611",
      "good name": ""
    },
    {
      "name": "Brusque Pink",
      "hex": "#ee00ff",
      "good name": ""
    },
    {
      "name": "Brussels",
      "hex": "#6c7c6d",
      "good name": ""
    },
    {
      "name": "Brussels Sprout Green",
      "hex": "#665e0d",
      "good name": ""
    },
    {
      "name": "Brutal Doom",
      "hex": "#e61626",
      "good name": ""
    },
    {
      "name": "Brutal Pink",
      "hex": "#ff00bb",
      "good name": "x"
    },
    {
      "name": "Bryophyte",
      "hex": "#a6bea6",
      "good name": ""
    },
    {
      "name": "Bryopsida Green",
      "hex": "#9fe010",
      "good name": ""
    },
    {
      "name": "Bubbelgum Heart",
      "hex": "#ffbadf",
      "good name": "x"
    },
    {
      "name": "Bubble",
      "hex": "#eaf5e7",
      "good name": ""
    },
    {
      "name": "Bubble Algae",
      "hex": "#90e4c1",
      "good name": ""
    },
    {
      "name": "Bubble Bath",
      "hex": "#e8e0e9",
      "good name": ""
    },
    {
      "name": "Bubble Bobble Green",
      "hex": "#00b800",
      "good name": ""
    },
    {
      "name": "Bubble Bobble P2",
      "hex": "#0084ff",
      "good name": ""
    },
    {
      "name": "Bubble Gum",
      "hex": "#ff85ff",
      "good name": "x"
    },
    {
      "name": "Bubble Shell",
      "hex": "#d3a49a",
      "good name": ""
    },
    {
      "name": "Bubble Turquoise",
      "hex": "#43817a",
      "good name": ""
    },
    {
      "name": "Bubblegum",
      "hex": "#ea738d",
      "good name": ""
    },
    {
      "name": "Bubblegum Baby Girl",
      "hex": "#cc55ee",
      "good name": "x"
    },
    {
      "name": "Bubblegum Kisses",
      "hex": "#f092d6",
      "good name": "x"
    },
    {
      "name": "Bubblegum Pink",
      "hex": "#f6b0ba",
      "good name": ""
    },
    {
      "name": "Bubbles",
      "hex": "#e7feff",
      "good name": "x"
    },
    {
      "name": "Bubbles in the Air",
      "hex": "#d3e3e5",
      "good name": ""
    },
    {
      "name": "Bubbly Barracuda",
      "hex": "#77ccff",
      "good name": ""
    },
    {
      "name": "Bubonic Brown",
      "hex": "#c68400",
      "good name": ""
    },
    {
      "name": "Bucatini Noodle",
      "hex": "#fdf5d7",
      "good name": ""
    },
    {
      "name": "Buccaneer",
      "hex": "#6e5150",
      "good name": ""
    },
    {
      "name": "Buccaneer Blue",
      "hex": "#035b8d",
      "good name": ""
    },
    {
      "name": "Büchel Cherry",
      "hex": "#aa1111",
      "good name": "x"
    },
    {
      "name": "Buckeye",
      "hex": "#674834",
      "good name": "x"
    },
    {
      "name": "Bucking Bronco",
      "hex": "#996655",
      "good name": ""
    },
    {
      "name": "Buckingham Palace",
      "hex": "#6b5140",
      "good name": ""
    },
    {
      "name": "Buckram Binding",
      "hex": "#d9c3a6",
      "good name": ""
    },
    {
      "name": "Buckskin",
      "hex": "#d4ba8c",
      "good name": ""
    },
    {
      "name": "Buckthorn Brown",
      "hex": "#a76f1f",
      "good name": ""
    },
    {
      "name": "Buckwheat",
      "hex": "#d4dcd6",
      "good name": ""
    },
    {
      "name": "Buckwheat Flour",
      "hex": "#efe2cf",
      "good name": ""
    },
    {
      "name": "Buckwheat Groats",
      "hex": "#e0d8a7",
      "good name": ""
    },
    {
      "name": "Buckwheat Mauve",
      "hex": "#b9a4b0",
      "good name": ""
    },
    {
      "name": "Bucolic Blue",
      "hex": "#98acb0",
      "good name": ""
    },
    {
      "name": "Bud",
      "hex": "#a5a88f",
      "good name": ""
    },
    {
      "name": "Bud Green",
      "hex": "#79b465",
      "good name": "x"
    },
    {
      "name": "Bud's Sails",
      "hex": "#e9e3d3",
      "good name": ""
    },
    {
      "name": "Budapest Brown",
      "hex": "#553d3e",
      "good name": ""
    },
    {
      "name": "Budder Skin",
      "hex": "#fce2c4",
      "good name": ""
    },
    {
      "name": "Buddha Gold",
      "hex": "#bc9b1b",
      "good name": ""
    },
    {
      "name": "Buddha Green",
      "hex": "#37b575",
      "good name": ""
    },
    {
      "name": "Buddha's Love Handles",
      "hex": "#ffbb33",
      "good name": "x"
    },
    {
      "name": "Budding Bloom",
      "hex": "#deeabd",
      "good name": ""
    },
    {
      "name": "Budding Fern",
      "hex": "#edecd4",
      "good name": ""
    },
    {
      "name": "Budding Leaf",
      "hex": "#eef0d7",
      "good name": ""
    },
    {
      "name": "Budding Peach",
      "hex": "#f3d4bf",
      "good name": ""
    },
    {
      "name": "Budgie Blue",
      "hex": "#84c9e1",
      "good name": ""
    },
    {
      "name": "Budōnezumi Grape",
      "hex": "#63424b",
      "good name": ""
    },
    {
      "name": "Buenos Aires",
      "hex": "#f4dcc1",
      "good name": ""
    },
    {
      "name": "Buff",
      "hex": "#f0dc82",
      "good name": ""
    },
    {
      "name": "Buff It",
      "hex": "#d9cfbe",
      "good name": "x"
    },
    {
      "name": "Buff Leather",
      "hex": "#aa7733",
      "good name": ""
    },
    {
      "name": "Buff Orange",
      "hex": "#ffbb7c",
      "good name": ""
    },
    {
      "name": "Buff Tone",
      "hex": "#e8d0b9",
      "good name": ""
    },
    {
      "name": "Buff Yellow",
      "hex": "#f1bf70",
      "good name": ""
    },
    {
      "name": "Buffallo Sauce",
      "hex": "#f25a1a",
      "good name": ""
    },
    {
      "name": "Buffalo Bill",
      "hex": "#ae9274",
      "good name": ""
    },
    {
      "name": "Buffalo Dance",
      "hex": "#695645",
      "good name": ""
    },
    {
      "name": "Buffalo Herd",
      "hex": "#705046",
      "good name": ""
    },
    {
      "name": "Buffalo Hide",
      "hex": "#bb9f6a",
      "good name": ""
    },
    {
      "name": "Buffalo Soldier",
      "hex": "#95786c",
      "good name": ""
    },
    {
      "name": "Buffalo Trail",
      "hex": "#e2ac78",
      "good name": ""
    },
    {
      "name": "Buffed Copper",
      "hex": "#dd9475",
      "good name": ""
    },
    {
      "name": "Buffed Plum",
      "hex": "#aeafb9",
      "good name": ""
    },
    {
      "name": "Buffhide",
      "hex": "#a79c81",
      "good name": ""
    },
    {
      "name": "Bugle Boy",
      "hex": "#bb8f4f",
      "good name": ""
    },
    {
      "name": "Bugman's Glow",
      "hex": "#cd5b45",
      "good name": ""
    },
    {
      "name": "Built on Sand",
      "hex": "#e9e3da",
      "good name": ""
    },
    {
      "name": "Bulbasaur",
      "hex": "#73a263",
      "good name": ""
    },
    {
      "name": "Bulfinch Blue",
      "hex": "#94b1b6",
      "good name": ""
    },
    {
      "name": "Bulgarian Rose",
      "hex": "#480607",
      "good name": ""
    },
    {
      "name": "Bull Kelp",
      "hex": "#636153",
      "good name": ""
    },
    {
      "name": "Bull Ring",
      "hex": "#6b605b",
      "good name": ""
    },
    {
      "name": "Bull Shot",
      "hex": "#75442b",
      "good name": ""
    },
    {
      "name": "Bullet Hell",
      "hex": "#faf1c8",
      "good name": "x"
    },
    {
      "name": "Bullfighters Red",
      "hex": "#cd4646",
      "good name": ""
    },
    {
      "name": "Bullfrog",
      "hex": "#8a966a",
      "good name": "x"
    },
    {
      "name": "Bulma Hair",
      "hex": "#359e6b",
      "good name": "x"
    },
    {
      "name": "Bulrush",
      "hex": "#6d5837",
      "good name": ""
    },
    {
      "name": "Bumangués Blue",
      "hex": "#0777bc",
      "good name": ""
    },
    {
      "name": "Bumble Baby",
      "hex": "#f5f1de",
      "good name": ""
    },
    {
      "name": "Bumblebee",
      "hex": "#ffc82a",
      "good name": "x"
    },
    {
      "name": "Bunchberry",
      "hex": "#674961",
      "good name": ""
    },
    {
      "name": "Bundaberg Sand",
      "hex": "#ffc58a",
      "good name": ""
    },
    {
      "name": "Bungalow Beige",
      "hex": "#cbbeaa",
      "good name": ""
    },
    {
      "name": "Bungalow Brown",
      "hex": "#ad947b",
      "good name": ""
    },
    {
      "name": "Bungalow Gold",
      "hex": "#ad8047",
      "good name": ""
    },
    {
      "name": "Bungalow Maple",
      "hex": "#e4c590",
      "good name": ""
    },
    {
      "name": "Bungalow Taupe",
      "hex": "#cebe9f",
      "good name": ""
    },
    {
      "name": "Bungee Cord",
      "hex": "#696156",
      "good name": ""
    },
    {
      "name": "Bunglehouse Beige",
      "hex": "#988f7b",
      "good name": ""
    },
    {
      "name": "Bunglehouse Blue",
      "hex": "#46616e",
      "good name": ""
    },
    {
      "name": "Bunker",
      "hex": "#292c2f",
      "good name": ""
    },
    {
      "name": "Bunni Brown",
      "hex": "#6c4522",
      "good name": ""
    },
    {
      "name": "Bunny Cake",
      "hex": "#f1b5cc",
      "good name": ""
    },
    {
      "name": "Bunny Fluff",
      "hex": "#fb8da6",
      "good name": ""
    },
    {
      "name": "Bunny Hop",
      "hex": "#f3ecea",
      "good name": ""
    },
    {
      "name": "Bunny Pink",
      "hex": "#dec3c9",
      "good name": ""
    },
    {
      "name": "Bunny Soft",
      "hex": "#d3bfc4",
      "good name": ""
    },
    {
      "name": "Bunny Tail",
      "hex": "#ffe3f4",
      "good name": "x"
    },
    {
      "name": "Bunny's Nose",
      "hex": "#fad9dd",
      "good name": ""
    },
    {
      "name": "Bunting",
      "hex": "#2b3449",
      "good name": ""
    },
    {
      "name": "Bunting Blue",
      "hex": "#35537c",
      "good name": ""
    },
    {
      "name": "Buoyancy",
      "hex": "#79b0b6",
      "good name": ""
    },
    {
      "name": "Buoyant",
      "hex": "#65707e",
      "good name": ""
    },
    {
      "name": "Buoyant Blue",
      "hex": "#84addb",
      "good name": ""
    },
    {
      "name": "Burdock",
      "hex": "#717867",
      "good name": ""
    },
    {
      "name": "Bureaucracy",
      "hex": "#746c8f",
      "good name": "x"
    },
    {
      "name": "Burgundy",
      "hex": "#900020",
      "good name": ""
    },
    {
      "name": "Burgundy Grey",
      "hex": "#dadba0",
      "good name": ""
    },
    {
      "name": "Burgundy Snail",
      "hex": "#7e7150",
      "good name": ""
    },
    {
      "name": "Burgundy Wine",
      "hex": "#6c403e",
      "good name": ""
    },
    {
      "name": "Buried Treasure",
      "hex": "#d28b42",
      "good name": ""
    },
    {
      "name": "Burj Khalifa Fountain",
      "hex": "#d4dee8",
      "good name": ""
    },
    {
      "name": "Burka Black",
      "hex": "#353e4f",
      "good name": ""
    },
    {
      "name": "Burlap",
      "hex": "#8b7753",
      "good name": ""
    },
    {
      "name": "Burlap Grey",
      "hex": "#81717e",
      "good name": ""
    },
    {
      "name": "Burlat Red",
      "hex": "#6e314f",
      "good name": ""
    },
    {
      "name": "Burled Redwood",
      "hex": "#8f4c3a",
      "good name": ""
    },
    {
      "name": "Burley Wood",
      "hex": "#695641",
      "good name": ""
    },
    {
      "name": "Burlwood",
      "hex": "#9b716b",
      "good name": ""
    },
    {
      "name": "Burma Jade",
      "hex": "#94b1a0",
      "good name": ""
    },
    {
      "name": "Burmese Gold",
      "hex": "#bc8143",
      "good name": ""
    },
    {
      "name": "Burned Brown",
      "hex": "#6f4b3e",
      "good name": ""
    },
    {
      "name": "Burnham",
      "hex": "#234537",
      "good name": ""
    },
    {
      "name": "Burning Brier",
      "hex": "#884736",
      "good name": ""
    },
    {
      "name": "Burning Bush",
      "hex": "#a0403e",
      "good name": ""
    },
    {
      "name": "Burning Coals",
      "hex": "#f79d72",
      "good name": ""
    },
    {
      "name": "Burning Fireflies",
      "hex": "#ff1166",
      "good name": "x"
    },
    {
      "name": "Burning Flame",
      "hex": "#ffb162",
      "good name": "x"
    },
    {
      "name": "Burning Gold",
      "hex": "#ccaa77",
      "good name": ""
    },
    {
      "name": "Burning Idea",
      "hex": "#8f8b72",
      "good name": ""
    },
    {
      "name": "Burning Orange",
      "hex": "#ff7124",
      "good name": ""
    },
    {
      "name": "Burning Raspberry",
      "hex": "#ff0599",
      "good name": "x"
    },
    {
      "name": "Burning Sand",
      "hex": "#d08363",
      "good name": ""
    },
    {
      "name": "Burning Steppes",
      "hex": "#742100",
      "good name": ""
    },
    {
      "name": "Burning Tomato",
      "hex": "#eb5030",
      "good name": ""
    },
    {
      "name": "Burning Trail",
      "hex": "#ee9922",
      "good name": "x"
    },
    {
      "name": "Burning Ultrablue",
      "hex": "#150aec",
      "good name": "x"
    },
    {
      "name": "Burnished Bark",
      "hex": "#6a3d36",
      "good name": ""
    },
    {
      "name": "Burnished Brandy",
      "hex": "#8b664e",
      "good name": ""
    },
    {
      "name": "Burnished Bronze",
      "hex": "#9c7e40",
      "good name": ""
    },
    {
      "name": "Burnished Brown",
      "hex": "#a17a74",
      "good name": ""
    },
    {
      "name": "Burnished Caramel",
      "hex": "#be9167",
      "good name": ""
    },
    {
      "name": "Burnished Clay",
      "hex": "#d2ccc4",
      "good name": ""
    },
    {
      "name": "Burnished Copper",
      "hex": "#bb8833",
      "good name": ""
    },
    {
      "name": "Burnished Cream",
      "hex": "#fce5bf",
      "good name": ""
    },
    {
      "name": "Burnished Gold",
      "hex": "#aa9855",
      "good name": ""
    },
    {
      "name": "Burnished Lilac",
      "hex": "#c5aeb1",
      "good name": ""
    },
    {
      "name": "Burnished Mahogany",
      "hex": "#734842",
      "good name": ""
    },
    {
      "name": "Burnished Metal",
      "hex": "#c8cbc8",
      "good name": ""
    },
    {
      "name": "Burnished Pewter",
      "hex": "#716a62",
      "good name": ""
    },
    {
      "name": "Burnished Russet",
      "hex": "#794029",
      "good name": ""
    },
    {
      "name": "Burns Cave",
      "hex": "#7b5847",
      "good name": ""
    },
    {
      "name": "Burnside",
      "hex": "#d0a664",
      "good name": ""
    },
    {
      "name": "Burnt Almond",
      "hex": "#b0724a",
      "good name": ""
    },
    {
      "name": "Burnt Ash",
      "hex": "#746572",
      "good name": ""
    },
    {
      "name": "Burnt Bagel",
      "hex": "#9a4e12",
      "good name": ""
    },
    {
      "name": "Burnt Bamboo",
      "hex": "#4d3b3c",
      "good name": ""
    },
    {
      "name": "Burnt Brick",
      "hex": "#a14d3a",
      "good name": ""
    },
    {
      "name": "Burnt Butter",
      "hex": "#a47c53",
      "good name": ""
    },
    {
      "name": "Burnt Caramel",
      "hex": "#846242",
      "good name": ""
    },
    {
      "name": "Burnt Coffee",
      "hex": "#271b10",
      "good name": "x"
    },
    {
      "name": "Burnt Coral",
      "hex": "#e9897e",
      "good name": ""
    },
    {
      "name": "Burnt Crimson",
      "hex": "#582124",
      "good name": ""
    },
    {
      "name": "Burnt Crust",
      "hex": "#885533",
      "good name": ""
    },
    {
      "name": "Burnt Earth",
      "hex": "#9d4531",
      "good name": ""
    },
    {
      "name": "Burnt Grape",
      "hex": "#75625e",
      "good name": ""
    },
    {
      "name": "Burnt Henna",
      "hex": "#7e392f",
      "good name": ""
    },
    {
      "name": "Burnt Maroon",
      "hex": "#420303",
      "good name": ""
    },
    {
      "name": "Burnt Ochre",
      "hex": "#bb4f35",
      "good name": ""
    },
    {
      "name": "Burnt Olive",
      "hex": "#646049",
      "good name": ""
    },
    {
      "name": "Burnt Orange",
      "hex": "#cc5500",
      "good name": ""
    },
    {
      "name": "Burnt Pumpkin",
      "hex": "#ca955c",
      "good name": ""
    },
    {
      "name": "Burnt Red",
      "hex": "#9f2305",
      "good name": "x"
    },
    {
      "name": "Burnt Russet",
      "hex": "#7e3940",
      "good name": ""
    },
    {
      "name": "Burnt Sienna",
      "hex": "#b75203",
      "good name": ""
    },
    {
      "name": "Burnt Terra",
      "hex": "#82634e",
      "good name": ""
    },
    {
      "name": "Burnt Tile",
      "hex": "#774645",
      "good name": ""
    },
    {
      "name": "Burnt Toffee",
      "hex": "#ab7e5e",
      "good name": ""
    },
    {
      "name": "Burnt Umber",
      "hex": "#8a3324",
      "good name": ""
    },
    {
      "name": "Burnt Yellow",
      "hex": "#d5ab09",
      "good name": ""
    },
    {
      "name": "Burple",
      "hex": "#6832e3",
      "good name": ""
    },
    {
      "name": "Burrito",
      "hex": "#eed7c1",
      "good name": "x"
    },
    {
      "name": "Burro",
      "hex": "#947764",
      "good name": ""
    },
    {
      "name": "Burst of Gold",
      "hex": "#deb368",
      "good name": ""
    },
    {
      "name": "Bursting Lemon",
      "hex": "#fce282",
      "good name": ""
    },
    {
      "name": "Burtuqali Orange",
      "hex": "#ff6700",
      "good name": ""
    },
    {
      "name": "Bush",
      "hex": "#0d2e1c",
      "good name": ""
    },
    {
      "name": "Bush Buck",
      "hex": "#a28d82",
      "good name": ""
    },
    {
      "name": "Bush Viper",
      "hex": "#a0bcd0",
      "good name": ""
    },
    {
      "name": "Bushland Grey",
      "hex": "#7f7b73",
      "good name": ""
    },
    {
      "name": "Bussell Lace",
      "hex": "#e5a1a0",
      "good name": ""
    },
    {
      "name": "Buster",
      "hex": "#3e4b69",
      "good name": ""
    },
    {
      "name": "Busty Blue",
      "hex": "#3300cc",
      "good name": "x"
    },
    {
      "name": "Busy Bee",
      "hex": "#f4ff00",
      "good name": "x"
    },
    {
      "name": "Butter",
      "hex": "#ffff81",
      "good name": "x"
    },
    {
      "name": "Butter Base",
      "hex": "#c28a35",
      "good name": ""
    },
    {
      "name": "Butter Cake",
      "hex": "#fdff52",
      "good name": ""
    },
    {
      "name": "Butter Caramel",
      "hex": "#a67a4c",
      "good name": ""
    },
    {
      "name": "Butter Cookie",
      "hex": "#f0e4b2",
      "good name": ""
    },
    {
      "name": "Butter Creme",
      "hex": "#fee5ba",
      "good name": ""
    },
    {
      "name": "Butter Cupcake",
      "hex": "#ffdd99",
      "good name": ""
    },
    {
      "name": "Butter Fingers",
      "hex": "#fce9ad",
      "good name": ""
    },
    {
      "name": "Butter Fudge",
      "hex": "#aa6600",
      "good name": ""
    },
    {
      "name": "Butter Icing",
      "hex": "#f5e5da",
      "good name": ""
    },
    {
      "name": "Butter Lettuce",
      "hex": "#cfe7cb",
      "good name": ""
    },
    {
      "name": "Butter Nut",
      "hex": "#cba578",
      "good name": ""
    },
    {
      "name": "Butter Ridge",
      "hex": "#f9e097",
      "good name": ""
    },
    {
      "name": "Butter Rum",
      "hex": "#c38650",
      "good name": ""
    },
    {
      "name": "Butter Tart",
      "hex": "#fee99f",
      "good name": ""
    },
    {
      "name": "Butter Up",
      "hex": "#f4e0bb",
      "good name": "x"
    },
    {
      "name": "Butter White",
      "hex": "#fddebd",
      "good name": ""
    },
    {
      "name": "Butter Yellow",
      "hex": "#fffd74",
      "good name": ""
    },
    {
      "name": "Butterball",
      "hex": "#fff4c4",
      "good name": ""
    },
    {
      "name": "Butterblond",
      "hex": "#f1c766",
      "good name": ""
    },
    {
      "name": "Butterbrot",
      "hex": "#c5ae7c",
      "good name": ""
    },
    {
      "name": "Buttercream",
      "hex": "#efe0cd",
      "good name": ""
    },
    {
      "name": "Buttercream Frosting",
      "hex": "#f5edd7",
      "good name": ""
    },
    {
      "name": "Buttercup",
      "hex": "#da9429",
      "good name": ""
    },
    {
      "name": "Buttercup Yellow",
      "hex": "#e3c2a3",
      "good name": ""
    },
    {
      "name": "Buttered Popcorn",
      "hex": "#fff0a4",
      "good name": ""
    },
    {
      "name": "Buttered Rum",
      "hex": "#9d702e",
      "good name": ""
    },
    {
      "name": "Butterfield",
      "hex": "#f7be5b",
      "good name": ""
    },
    {
      "name": "Butterfly",
      "hex": "#cadea5",
      "good name": ""
    },
    {
      "name": "Butterfly Blue",
      "hex": "#2099bb",
      "good name": ""
    },
    {
      "name": "Butterfly Bush",
      "hex": "#68578c",
      "good name": ""
    },
    {
      "name": "Butterfly Garden",
      "hex": "#908aba",
      "good name": ""
    },
    {
      "name": "Butterfly Green",
      "hex": "#0b6863",
      "good name": ""
    },
    {
      "name": "Butterfly Wing",
      "hex": "#f8cfb4",
      "good name": ""
    },
    {
      "name": "Buttermelon",
      "hex": "#fff7db",
      "good name": "x"
    },
    {
      "name": "Buttermilk",
      "hex": "#fffee4",
      "good name": "x"
    },
    {
      "name": "Butternut",
      "hex": "#ffa177",
      "good name": "x"
    },
    {
      "name": "Butternut Pizazz",
      "hex": "#e59752",
      "good name": ""
    },
    {
      "name": "Butternut Squash",
      "hex": "#fc7604",
      "good name": "x"
    },
    {
      "name": "Butternut Wood",
      "hex": "#7e6f59",
      "good name": ""
    },
    {
      "name": "Butterscotch",
      "hex": "#fdb147",
      "good name": "x"
    },
    {
      "name": "Butterscotch Amber",
      "hex": "#d3b090",
      "good name": ""
    },
    {
      "name": "Butterscotch Bliss",
      "hex": "#d7ad62",
      "good name": ""
    },
    {
      "name": "Butterscotch Glaze",
      "hex": "#c48446",
      "good name": ""
    },
    {
      "name": "Butterscotch Mousse",
      "hex": "#a97d54",
      "good name": ""
    },
    {
      "name": "Butterscotch Ripple",
      "hex": "#b08843",
      "good name": ""
    },
    {
      "name": "Butterscotch Sundae",
      "hex": "#dbb486",
      "good name": ""
    },
    {
      "name": "Butterscotch Syrup",
      "hex": "#d9a05f",
      "good name": ""
    },
    {
      "name": "Butterum",
      "hex": "#c68f65",
      "good name": "x"
    },
    {
      "name": "Buttery",
      "hex": "#ffc283",
      "good name": "x"
    },
    {
      "name": "Buttery Leather",
      "hex": "#d4b185",
      "good name": ""
    },
    {
      "name": "Buttery Salmon",
      "hex": "#ffb19a",
      "good name": ""
    },
    {
      "name": "Buttery White",
      "hex": "#f1ebda",
      "good name": ""
    },
    {
      "name": "Button Blue",
      "hex": "#24a0ed",
      "good name": ""
    },
    {
      "name": "Button Eyes",
      "hex": "#4f3a32",
      "good name": ""
    },
    {
      "name": "Button Mushroom",
      "hex": "#ece6c8",
      "good name": ""
    },
    {
      "name": "Buzz",
      "hex": "#f0c641",
      "good name": "x"
    },
    {
      "name": "Buzz-In",
      "hex": "#ffd756",
      "good name": ""
    },
    {
      "name": "Buzzard",
      "hex": "#5f563f",
      "good name": ""
    },
    {
      "name": "Buzzards Bay",
      "hex": "#017a79",
      "good name": ""
    },
    {
      "name": "By Gum",
      "hex": "#816a38",
      "good name": ""
    },
    {
      "name": "By the Bayou",
      "hex": "#007b90",
      "good name": ""
    },
    {
      "name": "By The Sea",
      "hex": "#8d999e",
      "good name": ""
    },
    {
      "name": "Byakuroku Green",
      "hex": "#a5ba93",
      "good name": ""
    },
    {
      "name": "Bygone",
      "hex": "#918e8a",
      "good name": ""
    },
    {
      "name": "Bypass",
      "hex": "#b6c4d2",
      "good name": ""
    },
    {
      "name": "Byron Place",
      "hex": "#31667d",
      "good name": ""
    },
    {
      "name": "Byte Blue",
      "hex": "#c5dce0",
      "good name": ""
    },
    {
      "name": "Byzantine",
      "hex": "#bd33a4",
      "good name": ""
    },
    {
      "name": "Byzantine Blue",
      "hex": "#006c6e",
      "good name": ""
    },
    {
      "name": "Byzantine Night Blue",
      "hex": "#6a79f7",
      "good name": ""
    },
    {
      "name": "Byzantium",
      "hex": "#702963",
      "good name": ""
    },
    {
      "name": "C-3PO",
      "hex": "#c33140",
      "good name": ""
    },
    {
      "name": "C'est La Vie",
      "hex": "#83bce5",
      "good name": ""
    },
    {
      "name": "C64 Blue",
      "hex": "#003aff",
      "good name": "x"
    },
    {
      "name": "C64 NTSC",
      "hex": "#4e7fff",
      "good name": ""
    },
    {
      "name": "C64 Purple",
      "hex": "#6f6ed1",
      "good name": ""
    },
    {
      "name": "Cab Sav",
      "hex": "#4a2e32",
      "good name": ""
    },
    {
      "name": "Cabal",
      "hex": "#7f6473",
      "good name": ""
    },
    {
      "name": "Cabana Bay",
      "hex": "#8ec1c0",
      "good name": ""
    },
    {
      "name": "Cabana Blue",
      "hex": "#5b9099",
      "good name": ""
    },
    {
      "name": "Cabana Melon",
      "hex": "#c88567",
      "good name": ""
    },
    {
      "name": "Cabaret",
      "hex": "#cd526c",
      "good name": "x"
    },
    {
      "name": "Cabaret Charm",
      "hex": "#7c8ea6",
      "good name": ""
    },
    {
      "name": "Cabbage",
      "hex": "#87d7be",
      "good name": "x"
    },
    {
      "name": "Cabbage Blossom Violet",
      "hex": "#724c7b",
      "good name": ""
    },
    {
      "name": "Cabbage Green",
      "hex": "#807553",
      "good name": ""
    },
    {
      "name": "Cabbage Leaf",
      "hex": "#dfe8d0",
      "good name": ""
    },
    {
      "name": "Cabbage Patch",
      "hex": "#93c460",
      "good name": ""
    },
    {
      "name": "Cabbage Pont",
      "hex": "#4c5544",
      "good name": ""
    },
    {
      "name": "Cabbage Rose",
      "hex": "#c59f91",
      "good name": ""
    },
    {
      "name": "Cabernet",
      "hex": "#8e5b68",
      "good name": ""
    },
    {
      "name": "Cabernet Craving",
      "hex": "#6d3445",
      "good name": ""
    },
    {
      "name": "Cabin Fever",
      "hex": "#5e5349",
      "good name": ""
    },
    {
      "name": "Cabin in the Woods",
      "hex": "#5d4d47",
      "good name": ""
    },
    {
      "name": "Cabo",
      "hex": "#cec0aa",
      "good name": ""
    },
    {
      "name": "Caboose",
      "hex": "#a8a4a1",
      "good name": ""
    },
    {
      "name": "Cacao",
      "hex": "#6b5848",
      "good name": ""
    },
    {
      "name": "Cachet Cream",
      "hex": "#f3d9ba",
      "good name": ""
    },
    {
      "name": "Cacodemon Red",
      "hex": "#9f0000",
      "good name": "x"
    },
    {
      "name": "Cactus",
      "hex": "#5b6f55",
      "good name": "x"
    },
    {
      "name": "Cactus Blooms",
      "hex": "#f6c79d",
      "good name": ""
    },
    {
      "name": "Cactus Blossom",
      "hex": "#d8e5dd",
      "good name": ""
    },
    {
      "name": "Cactus Flower",
      "hex": "#a83e6c",
      "good name": ""
    },
    {
      "name": "Cactus Garden",
      "hex": "#7b8370",
      "good name": ""
    },
    {
      "name": "Cactus Green",
      "hex": "#56603d",
      "good name": ""
    },
    {
      "name": "Cactus Hill",
      "hex": "#b1a386",
      "good name": ""
    },
    {
      "name": "Cactus Sand",
      "hex": "#9c9369",
      "good name": ""
    },
    {
      "name": "Cactus Spike",
      "hex": "#c1e0a3",
      "good name": "x"
    },
    {
      "name": "Cactus Valley",
      "hex": "#88976b",
      "good name": ""
    },
    {
      "name": "Cactus Water",
      "hex": "#d0f7e4",
      "good name": ""
    },
    {
      "name": "Cadaverous",
      "hex": "#009977",
      "good name": ""
    },
    {
      "name": "Caddies Silk",
      "hex": "#3e354d",
      "good name": ""
    },
    {
      "name": "Cadet",
      "hex": "#536872",
      "good name": ""
    },
    {
      "name": "Cadet Blue",
      "hex": "#5f9ea0",
      "good name": ""
    },
    {
      "name": "Cadet Grey",
      "hex": "#91a3b0",
      "good name": ""
    },
    {
      "name": "Cadian Fleshtone",
      "hex": "#90766e",
      "good name": ""
    },
    {
      "name": "Cadillac",
      "hex": "#984961",
      "good name": ""
    },
    {
      "name": "Cadillac Coupe",
      "hex": "#c0362c",
      "good name": "x"
    },
    {
      "name": "Cadmium Blue",
      "hex": "#0a1195",
      "good name": ""
    },
    {
      "name": "Cadmium Green",
      "hex": "#006b3c",
      "good name": ""
    },
    {
      "name": "Cadmium Orange",
      "hex": "#ed872d",
      "good name": ""
    },
    {
      "name": "Cadmium Purple",
      "hex": "#b60c26",
      "good name": ""
    },
    {
      "name": "Cadmium Red",
      "hex": "#e30022",
      "good name": ""
    },
    {
      "name": "Cadmium Violet",
      "hex": "#7f3e98",
      "good name": ""
    },
    {
      "name": "Cadmium Yellow",
      "hex": "#fff600",
      "good name": ""
    },
    {
      "name": "Caduceus Gold",
      "hex": "#ffee66",
      "good name": ""
    },
    {
      "name": "Caduceus Staff",
      "hex": "#eedd22",
      "good name": "x"
    },
    {
      "name": "Caen Stone",
      "hex": "#ecd0b1",
      "good name": ""
    },
    {
      "name": "Café Au Lait",
      "hex": "#a57c5b",
      "good name": "x"
    },
    {
      "name": "Cafe Cream",
      "hex": "#f9e8d3",
      "good name": ""
    },
    {
      "name": "Cafe Creme",
      "hex": "#c79685",
      "good name": "x"
    },
    {
      "name": "Café de Paris",
      "hex": "#889944",
      "good name": ""
    },
    {
      "name": "Cafe Expreso",
      "hex": "#5e4c48",
      "good name": ""
    },
    {
      "name": "Cafe Latte",
      "hex": "#d6c6b4",
      "good name": "x"
    },
    {
      "name": "Café Noir",
      "hex": "#4b3621",
      "good name": "x"
    },
    {
      "name": "Cafe Ole",
      "hex": "#9a7f79",
      "good name": ""
    },
    {
      "name": "Cafe Pink",
      "hex": "#ecc1c2",
      "good name": ""
    },
    {
      "name": "Café Renversé",
      "hex": "#ae8774",
      "good name": ""
    },
    {
      "name": "Cafe Royale",
      "hex": "#6a4928",
      "good name": "x"
    },
    {
      "name": "Caffeinated Cinnamon",
      "hex": "#885511",
      "good name": ""
    },
    {
      "name": "Caffeine",
      "hex": "#8a796a",
      "good name": ""
    },
    {
      "name": "Caicos Turquoise",
      "hex": "#26b7b5",
      "good name": ""
    },
    {
      "name": "Cairns",
      "hex": "#0a6b92",
      "good name": ""
    },
    {
      "name": "Cajun Brown",
      "hex": "#5f3e41",
      "good name": ""
    },
    {
      "name": "Cajun Red",
      "hex": "#a45a4a",
      "good name": ""
    },
    {
      "name": "Cajun Spice",
      "hex": "#c3705f",
      "good name": ""
    },
    {
      "name": "Cake Batter",
      "hex": "#f0eddb",
      "good name": ""
    },
    {
      "name": "Cake Crumbs",
      "hex": "#e8d4bb",
      "good name": ""
    },
    {
      "name": "Cake Dough",
      "hex": "#fce0a8",
      "good name": ""
    },
    {
      "name": "Cake Frosting",
      "hex": "#f9dfe5",
      "good name": ""
    },
    {
      "name": "Cake Spice",
      "hex": "#d6a672",
      "good name": ""
    },
    {
      "name": "Cakepop Sorbet",
      "hex": "#f8c649",
      "good name": "x"
    },
    {
      "name": "Cal Poly Pomona Green",
      "hex": "#1e4d2b",
      "good name": ""
    },
    {
      "name": "Cala Benirrás Blue",
      "hex": "#0ac2c2",
      "good name": ""
    },
    {
      "name": "Calabash",
      "hex": "#f8eb97",
      "good name": ""
    },
    {
      "name": "Calabash Clash",
      "hex": "#728478",
      "good name": ""
    },
    {
      "name": "Calabrese",
      "hex": "#f4a6a3",
      "good name": "x"
    },
    {
      "name": "Calamansi",
      "hex": "#fcffa4",
      "good name": ""
    },
    {
      "name": "Calamansi Green",
      "hex": "#c4cc7a",
      "good name": ""
    },
    {
      "name": "Calc Sinter",
      "hex": "#e7e1dd",
      "good name": ""
    },
    {
      "name": "Calcareous Sinter",
      "hex": "#ddeeff",
      "good name": ""
    },
    {
      "name": "Calcite Blue",
      "hex": "#94b2b2",
      "good name": ""
    },
    {
      "name": "Calcite Grey Green",
      "hex": "#52605f",
      "good name": ""
    },
    {
      "name": "Calcium",
      "hex": "#f2f4e8",
      "good name": ""
    },
    {
      "name": "Calcium Rock",
      "hex": "#eee9d9",
      "good name": "x"
    },
    {
      "name": "Calculus",
      "hex": "#a1ccb1",
      "good name": ""
    },
    {
      "name": "Caledor Sky",
      "hex": "#31639c",
      "good name": ""
    },
    {
      "name": "Calf Skin",
      "hex": "#b1aa9d",
      "good name": ""
    },
    {
      "name": "Calgar Blue",
      "hex": "#0485d1",
      "good name": ""
    },
    {
      "name": "Caliban Green",
      "hex": "#005726",
      "good name": ""
    },
    {
      "name": "Calico",
      "hex": "#d5b185",
      "good name": ""
    },
    {
      "name": "Calico Cat",
      "hex": "#c48e36",
      "good name": ""
    },
    {
      "name": "Calico Dress",
      "hex": "#3d4e67",
      "good name": ""
    },
    {
      "name": "Calico Rock",
      "hex": "#9c9584",
      "good name": ""
    },
    {
      "name": "Calico Rose",
      "hex": "#e5c1b3",
      "good name": ""
    },
    {
      "name": "Caliente",
      "hex": "#95594a",
      "good name": ""
    },
    {
      "name": "California",
      "hex": "#e98c3a",
      "good name": ""
    },
    {
      "name": "California Chamois",
      "hex": "#e6b76c",
      "good name": ""
    },
    {
      "name": "California Coral",
      "hex": "#e3aa94",
      "good name": ""
    },
    {
      "name": "California Dreamin'",
      "hex": "#93807f",
      "good name": ""
    },
    {
      "name": "California Dreaming",
      "hex": "#dec569",
      "good name": ""
    },
    {
      "name": "California Girl",
      "hex": "#fca716",
      "good name": ""
    },
    {
      "name": "California Gold Rush",
      "hex": "#95743f",
      "good name": ""
    },
    {
      "name": "California Lilac",
      "hex": "#bbc5e2",
      "good name": ""
    },
    {
      "name": "California Peach",
      "hex": "#fcbe6a",
      "good name": ""
    },
    {
      "name": "California Poppy",
      "hex": "#a83c3f",
      "good name": ""
    },
    {
      "name": "California Roll",
      "hex": "#a09574",
      "good name": ""
    },
    {
      "name": "California Sagebrush",
      "hex": "#959988",
      "good name": ""
    },
    {
      "name": "California Stucco",
      "hex": "#c5ad9a",
      "good name": ""
    },
    {
      "name": "California Sunset",
      "hex": "#ca1850",
      "good name": ""
    },
    {
      "name": "California Wine",
      "hex": "#ca4b65",
      "good name": ""
    },
    {
      "name": "Calla",
      "hex": "#f2dfb5",
      "good name": ""
    },
    {
      "name": "Calla Green",
      "hex": "#6a6f34",
      "good name": ""
    },
    {
      "name": "Calla Lily",
      "hex": "#e4eaed",
      "good name": ""
    },
    {
      "name": "Calligraphy",
      "hex": "#59636a",
      "good name": ""
    },
    {
      "name": "Calliope",
      "hex": "#c89a8d",
      "good name": ""
    },
    {
      "name": "Calliste Green",
      "hex": "#757a4e",
      "good name": ""
    },
    {
      "name": "Calm",
      "hex": "#dfe9e6",
      "good name": ""
    },
    {
      "name": "Calm Air",
      "hex": "#eed2ae",
      "good name": ""
    },
    {
      "name": "Calm Balm",
      "hex": "#5e9d47",
      "good name": ""
    },
    {
      "name": "Calm Breeze",
      "hex": "#e9ece4",
      "good name": ""
    },
    {
      "name": "Calm Day",
      "hex": "#7caacf",
      "good name": ""
    },
    {
      "name": "Calm Interlude",
      "hex": "#a7b0d5",
      "good name": ""
    },
    {
      "name": "Calm Thoughts",
      "hex": "#e5ede2",
      "good name": ""
    },
    {
      "name": "Calm Tint",
      "hex": "#eae3e9",
      "good name": ""
    },
    {
      "name": "Calm Water",
      "hex": "#cdd9e8",
      "good name": ""
    },
    {
      "name": "Calm Waters",
      "hex": "#e7fafa",
      "good name": "x"
    },
    {
      "name": "Calming Effect",
      "hex": "#cfd3a2",
      "good name": ""
    },
    {
      "name": "Calming Retreat",
      "hex": "#eee0d1",
      "good name": ""
    },
    {
      "name": "Calming Silver Lavender",
      "hex": "#b2a2c1",
      "good name": ""
    },
    {
      "name": "Calming Space",
      "hex": "#aab7c1",
      "good name": ""
    },
    {
      "name": "Calmness",
      "hex": "#68a895",
      "good name": ""
    },
    {
      "name": "Calthan Brown",
      "hex": "#6d5044",
      "good name": ""
    },
    {
      "name": "Calypso",
      "hex": "#3d7188",
      "good name": "x"
    },
    {
      "name": "Calypso Berry",
      "hex": "#c53a4b",
      "good name": ""
    },
    {
      "name": "Calypso Blue",
      "hex": "#347d8b",
      "good name": ""
    },
    {
      "name": "Calypso Coral",
      "hex": "#ee5c6c",
      "good name": ""
    },
    {
      "name": "Calypso Green",
      "hex": "#2e5f60",
      "good name": ""
    },
    {
      "name": "Calypso Red",
      "hex": "#de6b66",
      "good name": ""
    },
    {
      "name": "Camaron Pink",
      "hex": "#fe828c",
      "good name": ""
    },
    {
      "name": "Camarone",
      "hex": "#206937",
      "good name": ""
    },
    {
      "name": "Cambridge Blue",
      "hex": "#a3c1ad",
      "good name": ""
    },
    {
      "name": "Cambridge Leather",
      "hex": "#8c633c",
      "good name": ""
    },
    {
      "name": "Camel",
      "hex": "#c69f59",
      "good name": "x"
    },
    {
      "name": "Camel Brown",
      "hex": "#a56639",
      "good name": ""
    },
    {
      "name": "Camel Cardinal",
      "hex": "#cc9944",
      "good name": "x"
    },
    {
      "name": "Camel Cord",
      "hex": "#e0cb82",
      "good name": ""
    },
    {
      "name": "Camel Fur",
      "hex": "#bb6600",
      "good name": ""
    },
    {
      "name": "Camel Hair",
      "hex": "#dbb8a4",
      "good name": ""
    },
    {
      "name": "Camel Hair Coat",
      "hex": "#f5b784",
      "good name": ""
    },
    {
      "name": "Camel Hide",
      "hex": "#c1aa91",
      "good name": ""
    },
    {
      "name": "Camel Red",
      "hex": "#e5743b",
      "good name": ""
    },
    {
      "name": "Camel Spider",
      "hex": "#af8751",
      "good name": ""
    },
    {
      "name": "Camel Toe",
      "hex": "#ac8a2a",
      "good name": ""
    },
    {
      "name": "Camel Train",
      "hex": "#baae9d",
      "good name": ""
    },
    {
      "name": "Camel's Hump",
      "hex": "#817667",
      "good name": ""
    },
    {
      "name": "Camelback",
      "hex": "#c5aa85",
      "good name": ""
    },
    {
      "name": "Camelback Mountain",
      "hex": "#d3b587",
      "good name": ""
    },
    {
      "name": "Camellia",
      "hex": "#f6745f",
      "good name": "x"
    },
    {
      "name": "Camellia Pink",
      "hex": "#cd739d",
      "good name": ""
    },
    {
      "name": "Camellia Rose",
      "hex": "#eb6081",
      "good name": ""
    },
    {
      "name": "Camelot",
      "hex": "#803a4b",
      "good name": ""
    },
    {
      "name": "Camembert",
      "hex": "#fbf3df",
      "good name": ""
    },
    {
      "name": "Cameo",
      "hex": "#f2debc",
      "good name": "x"
    },
    {
      "name": "Cameo Appearance",
      "hex": "#dfc1c3",
      "good name": ""
    },
    {
      "name": "Cameo Blue",
      "hex": "#769da6",
      "good name": ""
    },
    {
      "name": "Cameo Brown",
      "hex": "#c08a80",
      "good name": ""
    },
    {
      "name": "Cameo Green",
      "hex": "#dce6e5",
      "good name": ""
    },
    {
      "name": "Cameo Peach",
      "hex": "#ebcfc9",
      "good name": ""
    },
    {
      "name": "Cameo Pink",
      "hex": "#efbbcc",
      "good name": ""
    },
    {
      "name": "Cameo Role",
      "hex": "#ddcaaf",
      "good name": ""
    },
    {
      "name": "Cameo Rose",
      "hex": "#f7dfd7",
      "good name": ""
    },
    {
      "name": "Cameo Stone",
      "hex": "#ebdfd8",
      "good name": ""
    },
    {
      "name": "Cameroon Green",
      "hex": "#60746d",
      "good name": ""
    },
    {
      "name": "Camisole",
      "hex": "#fcd9c7",
      "good name": ""
    },
    {
      "name": "Camo",
      "hex": "#7f8f4e",
      "good name": ""
    },
    {
      "name": "Camo Beige",
      "hex": "#8c8475",
      "good name": ""
    },
    {
      "name": "Camo Clay",
      "hex": "#747f71",
      "good name": "x"
    },
    {
      "name": "Camo Green",
      "hex": "#a5a542",
      "good name": ""
    },
    {
      "name": "Camouflage",
      "hex": "#3c3910",
      "good name": ""
    },
    {
      "name": "Camouflage Green",
      "hex": "#4b6113",
      "good name": ""
    },
    {
      "name": "Camouflage Olive",
      "hex": "#a28f5c",
      "good name": ""
    },
    {
      "name": "Campanelle Noodle",
      "hex": "#fcf7db",
      "good name": ""
    },
    {
      "name": "Campánula",
      "hex": "#3272af",
      "good name": ""
    },
    {
      "name": "Campanula Purple",
      "hex": "#6c6d94",
      "good name": ""
    },
    {
      "name": "Campfire",
      "hex": "#ce5f38",
      "good name": "x"
    },
    {
      "name": "Campfire Ash",
      "hex": "#ddd9ce",
      "good name": ""
    },
    {
      "name": "Campfire Blaze",
      "hex": "#b67656",
      "good name": ""
    },
    {
      "name": "Campfire Smoke",
      "hex": "#d5d1cb",
      "good name": ""
    },
    {
      "name": "Campground",
      "hex": "#d0a569",
      "good name": ""
    },
    {
      "name": "Camping Tent",
      "hex": "#b6afa0",
      "good name": ""
    },
    {
      "name": "Camping Trip",
      "hex": "#67786e",
      "good name": "x"
    },
    {
      "name": "Can Can",
      "hex": "#d08a9b",
      "good name": ""
    },
    {
      "name": "Canada Goose Eggs",
      "hex": "#eae2dd",
      "good name": ""
    },
    {
      "name": "Canadian Lake",
      "hex": "#8f9aa4",
      "good name": ""
    },
    {
      "name": "Canadian Maple",
      "hex": "#cab266",
      "good name": "x"
    },
    {
      "name": "Canadian Pancake",
      "hex": "#edd8c3",
      "good name": ""
    },
    {
      "name": "Canadian Pine",
      "hex": "#2e7b52",
      "good name": ""
    },
    {
      "name": "Canadian Tuxedo",
      "hex": "#579aca",
      "good name": "x"
    },
    {
      "name": "Canadian Voodoo Grey",
      "hex": "#b8b7a3",
      "good name": ""
    },
    {
      "name": "Canal Blue",
      "hex": "#9cc2c5",
      "good name": ""
    },
    {
      "name": "Canal Street",
      "hex": "#969281",
      "good name": ""
    },
    {
      "name": "Canaletto",
      "hex": "#818c72",
      "good name": ""
    },
    {
      "name": "Canary",
      "hex": "#fdff63",
      "good name": "x"
    },
    {
      "name": "Canary Diamond",
      "hex": "#ffce52",
      "good name": ""
    },
    {
      "name": "Canary Feather",
      "hex": "#efde75",
      "good name": ""
    },
    {
      "name": "Canary Grass",
      "hex": "#d0cca9",
      "good name": ""
    },
    {
      "name": "Canary Green",
      "hex": "#d6dec9",
      "good name": ""
    },
    {
      "name": "Canary Island",
      "hex": "#e9d4a9",
      "good name": ""
    },
    {
      "name": "Canary Wharf",
      "hex": "#91a1b5",
      "good name": ""
    },
    {
      "name": "Canary Yellow",
      "hex": "#ffdf01",
      "good name": ""
    },
    {
      "name": "Cancun Sand",
      "hex": "#fbedd7",
      "good name": ""
    },
    {
      "name": "Candela",
      "hex": "#bac4d5",
      "good name": ""
    },
    {
      "name": "Candelabra",
      "hex": "#e1c161",
      "good name": ""
    },
    {
      "name": "Candid Blue",
      "hex": "#6cc3e0",
      "good name": ""
    },
    {
      "name": "Candidate",
      "hex": "#c3bc90",
      "good name": ""
    },
    {
      "name": "Candied Apple",
      "hex": "#b95b6d",
      "good name": "x"
    },
    {
      "name": "Candied Blueberry",
      "hex": "#331166",
      "good name": ""
    },
    {
      "name": "Candied Ginger",
      "hex": "#bfa387",
      "good name": ""
    },
    {
      "name": "Candied Snow",
      "hex": "#d8fff3",
      "good name": "x"
    },
    {
      "name": "Candied Yam",
      "hex": "#f4935b",
      "good name": ""
    },
    {
      "name": "Candied Yams",
      "hex": "#f9a765",
      "good name": ""
    },
    {
      "name": "Candle Bark",
      "hex": "#c3bdaa",
      "good name": ""
    },
    {
      "name": "Candle Flame",
      "hex": "#fff4a1",
      "good name": ""
    },
    {
      "name": "Candle Glow",
      "hex": "#ffe8c3",
      "good name": "x"
    },
    {
      "name": "Candle in the Wind",
      "hex": "#f9ebbf",
      "good name": "x"
    },
    {
      "name": "Candle Light",
      "hex": "#ddc1a6",
      "good name": ""
    },
    {
      "name": "Candle Wax",
      "hex": "#f2eacf",
      "good name": ""
    },
    {
      "name": "Candle Yellow",
      "hex": "#e09b6e",
      "good name": ""
    },
    {
      "name": "Candlelight",
      "hex": "#fcd917",
      "good name": "x"
    },
    {
      "name": "Candlelight Dinner",
      "hex": "#ceb3be",
      "good name": ""
    },
    {
      "name": "Candlelight Ivory",
      "hex": "#fcf4e2",
      "good name": ""
    },
    {
      "name": "Candlelight Peach",
      "hex": "#f8a39d",
      "good name": ""
    },
    {
      "name": "Candlelight Yellow",
      "hex": "#f7f0c7",
      "good name": ""
    },
    {
      "name": "Candlelit Beige",
      "hex": "#f1ede0",
      "good name": ""
    },
    {
      "name": "Candlestick Point",
      "hex": "#fff1d5",
      "good name": ""
    },
    {
      "name": "Candlewick",
      "hex": "#f2ebd3",
      "good name": ""
    },
    {
      "name": "Candy",
      "hex": "#ff9b87",
      "good name": "x"
    },
    {
      "name": "Candy Apple Red",
      "hex": "#ff0800",
      "good name": "x"
    },
    {
      "name": "Candy Bar",
      "hex": "#ffb7d5",
      "good name": "x"
    },
    {
      "name": "Candy Cane",
      "hex": "#f7bfc2",
      "good name": ""
    },
    {
      "name": "Candy Coated",
      "hex": "#ef9faa",
      "good name": ""
    },
    {
      "name": "Candy Corn",
      "hex": "#fcfc5d",
      "good name": "x"
    },
    {
      "name": "Candy Drop",
      "hex": "#c25d6a",
      "good name": ""
    },
    {
      "name": "Candy Floss",
      "hex": "#e8a7e2",
      "good name": "x"
    },
    {
      "name": "Candy Floss Cupcake",
      "hex": "#fff0de",
      "good name": ""
    },
    {
      "name": "Candy Grape Fizz",
      "hex": "#7755ee",
      "good name": "x"
    },
    {
      "name": "Candy Grass",
      "hex": "#33aa00",
      "good name": ""
    },
    {
      "name": "Candy Green",
      "hex": "#33cc00",
      "good name": "x"
    },
    {
      "name": "Candy Heart Pink",
      "hex": "#f5a2a1",
      "good name": ""
    },
    {
      "name": "Candy Mix",
      "hex": "#f3dfe3",
      "good name": ""
    },
    {
      "name": "Candy Pink",
      "hex": "#ff63e9",
      "good name": "x"
    },
    {
      "name": "Candy Tuft",
      "hex": "#f1d7e4",
      "good name": ""
    },
    {
      "name": "Candy Violet",
      "hex": "#895d8b",
      "good name": ""
    },
    {
      "name": "Candyman",
      "hex": "#ff9e76",
      "good name": ""
    },
    {
      "name": "Candytuft",
      "hex": "#edc9d8",
      "good name": ""
    },
    {
      "name": "Cane Sugar",
      "hex": "#e3b982",
      "good name": "x"
    },
    {
      "name": "Cane Sugar Glaze",
      "hex": "#ddbb99",
      "good name": ""
    },
    {
      "name": "Cane Toad",
      "hex": "#977042",
      "good name": ""
    },
    {
      "name": "Caneel Bay",
      "hex": "#00849f",
      "good name": ""
    },
    {
      "name": "Canewood",
      "hex": "#d7b69a",
      "good name": ""
    },
    {
      "name": "Cannery Park",
      "hex": "#bcb09e",
      "good name": ""
    },
    {
      "name": "Cannoli Cream",
      "hex": "#f0efe2",
      "good name": "x"
    },
    {
      "name": "Cannon Ball",
      "hex": "#484335",
      "good name": ""
    },
    {
      "name": "Cannon Barrel",
      "hex": "#3c4142",
      "good name": ""
    },
    {
      "name": "Cannon Black",
      "hex": "#251706",
      "good name": ""
    },
    {
      "name": "Cannon Grey",
      "hex": "#646c64",
      "good name": ""
    },
    {
      "name": "Cannon Pink",
      "hex": "#8e5164",
      "good name": ""
    },
    {
      "name": "Canoe",
      "hex": "#ddc49e",
      "good name": ""
    },
    {
      "name": "Canoe Blue",
      "hex": "#1d5671",
      "good name": ""
    },
    {
      "name": "Canopy",
      "hex": "#728f02",
      "good name": ""
    },
    {
      "name": "Cantaloupe",
      "hex": "#ffd479",
      "good name": "x"
    },
    {
      "name": "Cantaloupe Slice",
      "hex": "#feb079",
      "good name": ""
    },
    {
      "name": "Cantankerous Coyote",
      "hex": "#ac8d74",
      "good name": ""
    },
    {
      "name": "Canteen",
      "hex": "#5e5347",
      "good name": ""
    },
    {
      "name": "Canter Peach",
      "hex": "#f6d3bb",
      "good name": ""
    },
    {
      "name": "Cantera",
      "hex": "#cec5af",
      "good name": ""
    },
    {
      "name": "Canterbury Bells",
      "hex": "#b9c3e6",
      "good name": ""
    },
    {
      "name": "Canterbury Cathedral",
      "hex": "#b2ab94",
      "good name": ""
    },
    {
      "name": "Canton",
      "hex": "#6da29e",
      "good name": ""
    },
    {
      "name": "Canton Jade",
      "hex": "#bae7c7",
      "good name": ""
    },
    {
      "name": "Canvas",
      "hex": "#bb8855",
      "good name": ""
    },
    {
      "name": "Canvas Cloth",
      "hex": "#e6dfd2",
      "good name": ""
    },
    {
      "name": "Canvas Luggage",
      "hex": "#e2d7c6",
      "good name": ""
    },
    {
      "name": "Canvas Satchel",
      "hex": "#ccb88d",
      "good name": ""
    },
    {
      "name": "Canvas Tan",
      "hex": "#ddd6c6",
      "good name": ""
    },
    {
      "name": "Canyon Blue",
      "hex": "#607b8e",
      "good name": ""
    },
    {
      "name": "Canyon Clay",
      "hex": "#ce8477",
      "good name": ""
    },
    {
      "name": "Canyon Cliffs",
      "hex": "#ece3d1",
      "good name": ""
    },
    {
      "name": "Canyon Cloud",
      "hex": "#aeafbb",
      "good name": ""
    },
    {
      "name": "Canyon Dusk",
      "hex": "#ddc3b7",
      "good name": ""
    },
    {
      "name": "Canyon Echo",
      "hex": "#e5e1cc",
      "good name": ""
    },
    {
      "name": "Canyon Falls",
      "hex": "#97987f",
      "good name": ""
    },
    {
      "name": "Canyon Iris",
      "hex": "#49548f",
      "good name": ""
    },
    {
      "name": "Canyon Mist",
      "hex": "#a7a4c0",
      "good name": ""
    },
    {
      "name": "Canyon Peach",
      "hex": "#eedacb",
      "good name": ""
    },
    {
      "name": "Canyon Rose",
      "hex": "#af6c67",
      "good name": ""
    },
    {
      "name": "Canyon Sand",
      "hex": "#f2d6aa",
      "good name": ""
    },
    {
      "name": "Canyon Stone",
      "hex": "#93625b",
      "good name": ""
    },
    {
      "name": "Canyon Sunset",
      "hex": "#e1927a",
      "good name": "x"
    },
    {
      "name": "Canyon Trail",
      "hex": "#d6b8a9",
      "good name": ""
    },
    {
      "name": "Canyon Verde",
      "hex": "#8a7e5c",
      "good name": ""
    },
    {
      "name": "Canyon View",
      "hex": "#c3b39f",
      "good name": ""
    },
    {
      "name": "Canyon Wind",
      "hex": "#e3e5df",
      "good name": ""
    },
    {
      "name": "Canyonville",
      "hex": "#f5ded1",
      "good name": ""
    },
    {
      "name": "Cǎo Lǜ Grass",
      "hex": "#1fa774",
      "good name": ""
    },
    {
      "name": "Cape Cod",
      "hex": "#4e5552",
      "good name": ""
    },
    {
      "name": "Cape Cod Bay",
      "hex": "#557080",
      "good name": ""
    },
    {
      "name": "Cape Cod Blue",
      "hex": "#91a2a6",
      "good name": ""
    },
    {
      "name": "Cape Honey",
      "hex": "#fee0a5",
      "good name": ""
    },
    {
      "name": "Cape Hope",
      "hex": "#d8d6d7",
      "good name": ""
    },
    {
      "name": "Cape Jasmine",
      "hex": "#ffb95a",
      "good name": ""
    },
    {
      "name": "Cape Lee",
      "hex": "#50818b",
      "good name": ""
    },
    {
      "name": "Cape Palliser",
      "hex": "#75482f",
      "good name": ""
    },
    {
      "name": "Cape Pond",
      "hex": "#0092ad",
      "good name": ""
    },
    {
      "name": "Cape Verde",
      "hex": "#01554f",
      "good name": ""
    },
    {
      "name": "Capella",
      "hex": "#d9ced2",
      "good name": ""
    },
    {
      "name": "Caper",
      "hex": "#afc182",
      "good name": ""
    },
    {
      "name": "Caper Green",
      "hex": "#847640",
      "good name": ""
    },
    {
      "name": "Capercaillie Mauve",
      "hex": "#78728c",
      "good name": ""
    },
    {
      "name": "Capers",
      "hex": "#695e4b",
      "good name": ""
    },
    {
      "name": "Capetown Cream",
      "hex": "#fcebce",
      "good name": ""
    },
    {
      "name": "Capital Blue",
      "hex": "#1a4157",
      "good name": "x"
    },
    {
      "name": "Capital Grains",
      "hex": "#dbd0a8",
      "good name": ""
    },
    {
      "name": "Capital Yellow",
      "hex": "#e6ba45",
      "good name": ""
    },
    {
      "name": "Capitalino Cactus",
      "hex": "#008f4c",
      "good name": ""
    },
    {
      "name": "Capocollo",
      "hex": "#d9544d",
      "good name": ""
    },
    {
      "name": "Caponata",
      "hex": "#822a10",
      "good name": "x"
    },
    {
      "name": "Cappuccino",
      "hex": "#633f33",
      "good name": "x"
    },
    {
      "name": "Cappuccino Bombe",
      "hex": "#b4897d",
      "good name": ""
    },
    {
      "name": "Cappuccino Froth",
      "hex": "#c8b089",
      "good name": ""
    },
    {
      "name": "Capri",
      "hex": "#00bfff",
      "good name": "x"
    },
    {
      "name": "Capri Breeze",
      "hex": "#008799",
      "good name": ""
    },
    {
      "name": "Capri Cream",
      "hex": "#f1f0d6",
      "good name": ""
    },
    {
      "name": "Capri Fashion Pink",
      "hex": "#ac839c",
      "good name": ""
    },
    {
      "name": "Capri Isle",
      "hex": "#4f5855",
      "good name": ""
    },
    {
      "name": "Capri Water Blue",
      "hex": "#abe2d6",
      "good name": ""
    },
    {
      "name": "Capricious Purple",
      "hex": "#bb00dd",
      "good name": ""
    },
    {
      "name": "Caps",
      "hex": "#7e7a75",
      "good name": ""
    },
    {
      "name": "Capsella",
      "hex": "#6d8a74",
      "good name": ""
    },
    {
      "name": "Capsicum Red",
      "hex": "#76392e",
      "good name": ""
    },
    {
      "name": "Capstan",
      "hex": "#007eb0",
      "good name": ""
    },
    {
      "name": "Captain Blue",
      "hex": "#005171",
      "good name": ""
    },
    {
      "name": "Captain Kirk",
      "hex": "#9b870c",
      "good name": "x"
    },
    {
      "name": "Captain Nemo",
      "hex": "#828080",
      "good name": ""
    },
    {
      "name": "Captains Blue",
      "hex": "#557088",
      "good name": ""
    },
    {
      "name": "Captivated",
      "hex": "#947cae",
      "good name": ""
    },
    {
      "name": "Captivating Cream",
      "hex": "#f4d9b1",
      "good name": ""
    },
    {
      "name": "Captive",
      "hex": "#005b6a",
      "good name": ""
    },
    {
      "name": "Capture",
      "hex": "#2cbaa3",
      "good name": ""
    },
    {
      "name": "Capulet Olive",
      "hex": "#656344",
      "good name": ""
    },
    {
      "name": "Caput Mortuum",
      "hex": "#592720",
      "good name": ""
    },
    {
      "name": "Caput Mortuum Grey Red",
      "hex": "#6f585b",
      "good name": ""
    },
    {
      "name": "Carafe",
      "hex": "#5d473a",
      "good name": ""
    },
    {
      "name": "Caraïbe",
      "hex": "#795f4d",
      "good name": ""
    },
    {
      "name": "Carambar",
      "hex": "#552233",
      "good name": ""
    },
    {
      "name": "Carambola",
      "hex": "#efebd1",
      "good name": ""
    },
    {
      "name": "Caramel",
      "hex": "#af6f09",
      "good name": "x"
    },
    {
      "name": "Caramel Apple",
      "hex": "#b87a59",
      "good name": ""
    },
    {
      "name": "Caramel Bar",
      "hex": "#cc8654",
      "good name": ""
    },
    {
      "name": "Caramel Brown",
      "hex": "#b18775",
      "good name": ""
    },
    {
      "name": "Caramel Cafe",
      "hex": "#864c24",
      "good name": ""
    },
    {
      "name": "Caramel Candy",
      "hex": "#b3715d",
      "good name": ""
    },
    {
      "name": "Caramel Cloud",
      "hex": "#d4af85",
      "good name": ""
    },
    {
      "name": "Caramel Coating",
      "hex": "#bb7711",
      "good name": "x"
    },
    {
      "name": "Caramel Cream",
      "hex": "#f4ba94",
      "good name": ""
    },
    {
      "name": "Caramel Crumb",
      "hex": "#c39355",
      "good name": "x"
    },
    {
      "name": "Caramel Cupcake",
      "hex": "#b98c5d",
      "good name": ""
    },
    {
      "name": "Caramel Dream",
      "hex": "#b8623b",
      "good name": "x"
    },
    {
      "name": "Caramel Finish",
      "hex": "#ffd59a",
      "good name": "x"
    },
    {
      "name": "Caramel Ice",
      "hex": "#eec9aa",
      "good name": ""
    },
    {
      "name": "Caramel Infused",
      "hex": "#cc7755",
      "good name": ""
    },
    {
      "name": "Caramel Kiss",
      "hex": "#b08a61",
      "good name": ""
    },
    {
      "name": "Caramel Latte",
      "hex": "#8c6342",
      "good name": ""
    },
    {
      "name": "Caramel Macchiato",
      "hex": "#c58d4b",
      "good name": "x"
    },
    {
      "name": "Caramel Milk",
      "hex": "#ddc283",
      "good name": ""
    },
    {
      "name": "Caramel Powder",
      "hex": "#eebb99",
      "good name": ""
    },
    {
      "name": "Caramel Sauce",
      "hex": "#b3804d",
      "good name": ""
    },
    {
      "name": "Caramel Sundae",
      "hex": "#a9876a",
      "good name": ""
    },
    {
      "name": "Caramel Swirl",
      "hex": "#8f6a4f",
      "good name": ""
    },
    {
      "name": "Caramelized",
      "hex": "#ba947f",
      "good name": ""
    },
    {
      "name": "Caramelized Orange",
      "hex": "#ef924a",
      "good name": ""
    },
    {
      "name": "Caramelized Pears",
      "hex": "#e7d5ad",
      "good name": ""
    },
    {
      "name": "Caramelized Pecan",
      "hex": "#a17b4d",
      "good name": ""
    },
    {
      "name": "Caramelized Walnut",
      "hex": "#6e564a",
      "good name": ""
    },
    {
      "name": "Caramelo Dulce",
      "hex": "#d69e6b",
      "good name": ""
    },
    {
      "name": "Caraquenian Crimson",
      "hex": "#9c0013",
      "good name": ""
    },
    {
      "name": "Caravel Brown",
      "hex": "#8c6e54",
      "good name": ""
    },
    {
      "name": "Caraway",
      "hex": "#a19473",
      "good name": ""
    },
    {
      "name": "Caraway Brown",
      "hex": "#6d563c",
      "good name": ""
    },
    {
      "name": "Caraway Seeds",
      "hex": "#dfd5bb",
      "good name": ""
    },
    {
      "name": "Carbon",
      "hex": "#333333",
      "good name": "x"
    },
    {
      "name": "Carbon Copy",
      "hex": "#545554",
      "good name": ""
    },
    {
      "name": "Carbon Dating",
      "hex": "#565b58",
      "good name": ""
    },
    {
      "name": "Carbon Fiber",
      "hex": "#2e2e2e",
      "good name": "x"
    },
    {
      "name": "Carbon Footprint",
      "hex": "#7b808b",
      "good name": ""
    },
    {
      "name": "Card Table Green",
      "hex": "#00512c",
      "good name": ""
    },
    {
      "name": "Cardamom",
      "hex": "#aaaa77",
      "good name": "x"
    },
    {
      "name": "Cardamom Green",
      "hex": "#989057",
      "good name": ""
    },
    {
      "name": "Cardamom Spice",
      "hex": "#837165",
      "good name": ""
    },
    {
      "name": "Cardboard",
      "hex": "#c19a6c",
      "good name": "x"
    },
    {
      "name": "Cardin Green",
      "hex": "#1b3427",
      "good name": ""
    },
    {
      "name": "Cardinal",
      "hex": "#c41e3a",
      "good name": "x"
    },
    {
      "name": "Cardinal Mauve",
      "hex": "#2c284c",
      "good name": ""
    },
    {
      "name": "Cardinal Pink",
      "hex": "#8c055e",
      "good name": ""
    },
    {
      "name": "Cardinal Red",
      "hex": "#9b365e",
      "good name": ""
    },
    {
      "name": "Cardoon",
      "hex": "#9aae8c",
      "good name": ""
    },
    {
      "name": "Cardueline Finch",
      "hex": "#957b38",
      "good name": ""
    },
    {
      "name": "Carefree",
      "hex": "#dce9e9",
      "good name": ""
    },
    {
      "name": "Carefree Sky",
      "hex": "#a6cdde",
      "good name": ""
    },
    {
      "name": "Careys Pink",
      "hex": "#c99aa0",
      "good name": ""
    },
    {
      "name": "Cargo",
      "hex": "#8f755b",
      "good name": ""
    },
    {
      "name": "Cargo Green",
      "hex": "#c8c5a7",
      "good name": ""
    },
    {
      "name": "Cargo Pants",
      "hex": "#cdc4ae",
      "good name": ""
    },
    {
      "name": "Cargo River",
      "hex": "#cfcdbb",
      "good name": ""
    },
    {
      "name": "Caribbean Blue",
      "hex": "#1ac1dd",
      "good name": "x"
    },
    {
      "name": "Caribbean Coast",
      "hex": "#93c5dd",
      "good name": ""
    },
    {
      "name": "Caribbean Coral",
      "hex": "#c07761",
      "good name": ""
    },
    {
      "name": "Caribbean Cruise",
      "hex": "#3f9da9",
      "good name": ""
    },
    {
      "name": "Caribbean Current",
      "hex": "#006e6e",
      "good name": ""
    },
    {
      "name": "Caribbean Green",
      "hex": "#00cc99",
      "good name": ""
    },
    {
      "name": "Caribbean Mist",
      "hex": "#cadeea",
      "good name": ""
    },
    {
      "name": "Caribbean Pleasure",
      "hex": "#d5dcce",
      "good name": ""
    },
    {
      "name": "Caribbean Sea",
      "hex": "#00819d",
      "good name": ""
    },
    {
      "name": "Caribbean Sky",
      "hex": "#819ecb",
      "good name": ""
    },
    {
      "name": "Caribbean Splash",
      "hex": "#00697c",
      "good name": ""
    },
    {
      "name": "Caribbean Sunrise",
      "hex": "#f5daaa",
      "good name": ""
    },
    {
      "name": "Caribbean Swim",
      "hex": "#126366",
      "good name": ""
    },
    {
      "name": "Caribbean Turquoise",
      "hex": "#009d94",
      "good name": ""
    },
    {
      "name": "Caribe",
      "hex": "#147d87",
      "good name": ""
    },
    {
      "name": "Caribou",
      "hex": "#816d5e",
      "good name": "x"
    },
    {
      "name": "Caribou Herd",
      "hex": "#cda563",
      "good name": ""
    },
    {
      "name": "Carissima",
      "hex": "#e68095",
      "good name": ""
    },
    {
      "name": "Carla",
      "hex": "#f5f9cb",
      "good name": ""
    },
    {
      "name": "Carley's Rose",
      "hex": "#a87376",
      "good name": ""
    },
    {
      "name": "Carlisle",
      "hex": "#45867c",
      "good name": ""
    },
    {
      "name": "Carmel",
      "hex": "#915f3d",
      "good name": ""
    },
    {
      "name": "Carmel Mission",
      "hex": "#927f76",
      "good name": ""
    },
    {
      "name": "Carmel Woods",
      "hex": "#8d6b3b",
      "good name": ""
    },
    {
      "name": "Carmelite",
      "hex": "#b98970",
      "good name": ""
    },
    {
      "name": "Carmen",
      "hex": "#7c383f",
      "good name": ""
    },
    {
      "name": "Carmen Miranda",
      "hex": "#903e2f",
      "good name": ""
    },
    {
      "name": "Carmim",
      "hex": "#a13905",
      "good name": ""
    },
    {
      "name": "Carmine",
      "hex": "#9d0216",
      "good name": "x"
    },
    {
      "name": "Carmine Carnation",
      "hex": "#ad4b53",
      "good name": ""
    },
    {
      "name": "Carmine Pink",
      "hex": "#eb4c42",
      "good name": ""
    },
    {
      "name": "Carmine Red",
      "hex": "#ff0038",
      "good name": ""
    },
    {
      "name": "Carmine Rose",
      "hex": "#e35b8f",
      "good name": ""
    },
    {
      "name": "Carmoisine",
      "hex": "#b31c45",
      "good name": ""
    },
    {
      "name": "Carnaby Tan",
      "hex": "#5b3a24",
      "good name": ""
    },
    {
      "name": "Carnage Red",
      "hex": "#940008",
      "good name": ""
    },
    {
      "name": "Carnal Brown",
      "hex": "#bb8866",
      "good name": ""
    },
    {
      "name": "Carnal Pink",
      "hex": "#ef9cb5",
      "good name": ""
    },
    {
      "name": "Carnation",
      "hex": "#fd798f",
      "good name": ""
    },
    {
      "name": "Carnation Bloom",
      "hex": "#f9c0be",
      "good name": ""
    },
    {
      "name": "Carnation Bouquet",
      "hex": "#f5c0d0",
      "good name": ""
    },
    {
      "name": "Carnation Coral",
      "hex": "#edb9ad",
      "good name": ""
    },
    {
      "name": "Carnation Festival",
      "hex": "#915870",
      "good name": ""
    },
    {
      "name": "Carnation Pink",
      "hex": "#ff7fa7",
      "good name": ""
    },
    {
      "name": "Carnation Rose",
      "hex": "#ce94c2",
      "good name": ""
    },
    {
      "name": "Carnelian",
      "hex": "#b31b1b",
      "good name": ""
    },
    {
      "name": "Carnival",
      "hex": "#eb882c",
      "good name": ""
    },
    {
      "name": "Carnival Night",
      "hex": "#006e7a",
      "good name": ""
    },
    {
      "name": "Carnivore",
      "hex": "#991111",
      "good name": "x"
    },
    {
      "name": "Caro",
      "hex": "#ffcac3",
      "good name": ""
    },
    {
      "name": "Carob Brown",
      "hex": "#855c4c",
      "good name": ""
    },
    {
      "name": "Carob Chip",
      "hex": "#5a484b",
      "good name": ""
    },
    {
      "name": "Carol",
      "hex": "#338dae",
      "good name": ""
    },
    {
      "name": "Carol's Purr",
      "hex": "#77a135",
      "good name": ""
    },
    {
      "name": "Carolina",
      "hex": "#cbefcb",
      "good name": ""
    },
    {
      "name": "Carolina Blue",
      "hex": "#8ab8fe",
      "good name": ""
    },
    {
      "name": "Carolina Green",
      "hex": "#008b6d",
      "good name": ""
    },
    {
      "name": "Carolina Parakeet",
      "hex": "#d8df80",
      "good name": ""
    },
    {
      "name": "Carolina Reaper",
      "hex": "#ff1500",
      "good name": "x"
    },
    {
      "name": "Carona",
      "hex": "#fba52e",
      "good name": "x"
    },
    {
      "name": "Carotene",
      "hex": "#fdb793",
      "good name": ""
    },
    {
      "name": "Carousel Pink",
      "hex": "#f8dbe0",
      "good name": ""
    },
    {
      "name": "Carpaccio",
      "hex": "#e34234",
      "good name": "x"
    },
    {
      "name": "Carpe Diem",
      "hex": "#905755",
      "good name": ""
    },
    {
      "name": "Carpet Moss",
      "hex": "#00aa33",
      "good name": ""
    },
    {
      "name": "Carrageen Moss",
      "hex": "#905d36",
      "good name": ""
    },
    {
      "name": "Carrara",
      "hex": "#eeebe4",
      "good name": ""
    },
    {
      "name": "Carrara Marble",
      "hex": "#e8e7d7",
      "good name": ""
    },
    {
      "name": "Carriage",
      "hex": "#6c6358",
      "good name": ""
    },
    {
      "name": "Carriage Door",
      "hex": "#958d79",
      "good name": ""
    },
    {
      "name": "Carriage Green",
      "hex": "#254d48",
      "good name": ""
    },
    {
      "name": "Carriage Red",
      "hex": "#8c403d",
      "good name": ""
    },
    {
      "name": "Carriage Ride",
      "hex": "#8a8dc4",
      "good name": ""
    },
    {
      "name": "Carriage Stone",
      "hex": "#7e7265",
      "good name": ""
    },
    {
      "name": "Carriage Yellow",
      "hex": "#ffb756",
      "good name": ""
    },
    {
      "name": "Carrier Pigeon Blue",
      "hex": "#889398",
      "good name": ""
    },
    {
      "name": "Carroburg Crimson",
      "hex": "#a82a70",
      "good name": ""
    },
    {
      "name": "Carrot",
      "hex": "#fd6f3b",
      "good name": "x"
    },
    {
      "name": "Carrot Cake",
      "hex": "#bf6f31",
      "good name": ""
    },
    {
      "name": "Carrot Curl",
      "hex": "#fe8c18",
      "good name": ""
    },
    {
      "name": "Carrot Flower",
      "hex": "#cbd3c1",
      "good name": ""
    },
    {
      "name": "Carrot Orange",
      "hex": "#ed9121",
      "good name": ""
    },
    {
      "name": "Carrot Stick",
      "hex": "#df7836",
      "good name": ""
    },
    {
      "name": "Carte Blanche",
      "hex": "#eeeeff",
      "good name": ""
    },
    {
      "name": "Carter's Scroll",
      "hex": "#405978",
      "good name": ""
    },
    {
      "name": "Carton",
      "hex": "#bb9e7e",
      "good name": ""
    },
    {
      "name": "Cartwheel",
      "hex": "#665537",
      "good name": ""
    },
    {
      "name": "Carved Wood",
      "hex": "#937a62",
      "good name": ""
    },
    {
      "name": "Carving Party",
      "hex": "#f0c39f",
      "good name": ""
    },
    {
      "name": "Casa Blanca",
      "hex": "#f4ecd8",
      "good name": ""
    },
    {
      "name": "Casa De Oro",
      "hex": "#cf6837",
      "good name": ""
    },
    {
      "name": "Casa del Mar",
      "hex": "#cacfe6",
      "good name": ""
    },
    {
      "name": "Casa Talec",
      "hex": "#c49ca5",
      "good name": ""
    },
    {
      "name": "Casa Verde",
      "hex": "#abb790",
      "good name": ""
    },
    {
      "name": "Casablanca",
      "hex": "#f0b253",
      "good name": ""
    },
    {
      "name": "Casal",
      "hex": "#3f545a",
      "good name": ""
    },
    {
      "name": "Casandora Yellow",
      "hex": "#fece5a",
      "good name": ""
    },
    {
      "name": "Casandra",
      "hex": "#7c4549",
      "good name": ""
    },
    {
      "name": "Cascade",
      "hex": "#d4ede6",
      "good name": ""
    },
    {
      "name": "Cascade Beige",
      "hex": "#e7dbca",
      "good name": ""
    },
    {
      "name": "Cascade Green",
      "hex": "#a1c2b9",
      "good name": ""
    },
    {
      "name": "Cascade Tour",
      "hex": "#697f8e",
      "good name": ""
    },
    {
      "name": "Cascade White",
      "hex": "#ecf2ec",
      "good name": ""
    },
    {
      "name": "Cascades",
      "hex": "#273e3e",
      "good name": ""
    },
    {
      "name": "Cascading White",
      "hex": "#f7f5f6",
      "good name": ""
    },
    {
      "name": "Cascara",
      "hex": "#ee4433",
      "good name": "x"
    },
    {
      "name": "Cashew",
      "hex": "#a47149",
      "good name": ""
    },
    {
      "name": "Cashew Cheese",
      "hex": "#fcf9bd",
      "good name": ""
    },
    {
      "name": "Cashew Nut",
      "hex": "#edccb3",
      "good name": "x"
    },
    {
      "name": "Cashmere",
      "hex": "#d1b399",
      "good name": "x"
    },
    {
      "name": "Cashmere Blue",
      "hex": "#a5b8d0",
      "good name": ""
    },
    {
      "name": "Cashmere Clay",
      "hex": "#cda291",
      "good name": "x"
    },
    {
      "name": "Cashmere Rose",
      "hex": "#ce879f",
      "good name": ""
    },
    {
      "name": "Cashmere Sweater",
      "hex": "#fef2d2",
      "good name": ""
    },
    {
      "name": "Casino Lights",
      "hex": "#f9f2b3",
      "good name": "x"
    },
    {
      "name": "Casket",
      "hex": "#a49186",
      "good name": ""
    },
    {
      "name": "Casper",
      "hex": "#aab5b8",
      "good name": "x"
    },
    {
      "name": "Caspian Sea",
      "hex": "#4f6f91",
      "good name": ""
    },
    {
      "name": "Caspian Tide",
      "hex": "#aec7db",
      "good name": ""
    },
    {
      "name": "Cassandra's Curse",
      "hex": "#bb7700",
      "good name": ""
    },
    {
      "name": "Cassava Cake",
      "hex": "#e7c084",
      "good name": ""
    },
    {
      "name": "Cassia Buds",
      "hex": "#e0cdda",
      "good name": ""
    },
    {
      "name": "Cassiopeia",
      "hex": "#aed0c9",
      "good name": ""
    },
    {
      "name": "Cassiterite Brown",
      "hex": "#623c1f",
      "good name": ""
    },
    {
      "name": "Cast Iron",
      "hex": "#64645a",
      "good name": ""
    },
    {
      "name": "Castaway",
      "hex": "#6dbac0",
      "good name": "x"
    },
    {
      "name": "Castaway Beach",
      "hex": "#d0c19f",
      "good name": "x"
    },
    {
      "name": "Castaway Cove",
      "hex": "#7a9291",
      "good name": ""
    },
    {
      "name": "Castaway Lagoon",
      "hex": "#607374",
      "good name": ""
    },
    {
      "name": "Castellan Green",
      "hex": "#455440",
      "good name": ""
    },
    {
      "name": "Castellina",
      "hex": "#a27040",
      "good name": ""
    },
    {
      "name": "Caster Sugar",
      "hex": "#ffffe8",
      "good name": ""
    },
    {
      "name": "Castilian Pink",
      "hex": "#d4b3aa",
      "good name": ""
    },
    {
      "name": "Casting Sea",
      "hex": "#4586c7",
      "good name": ""
    },
    {
      "name": "Casting Shadow",
      "hex": "#9da7a0",
      "good name": ""
    },
    {
      "name": "Castle Beige",
      "hex": "#e0d5ca",
      "good name": ""
    },
    {
      "name": "Castle Hill",
      "hex": "#95827b",
      "good name": ""
    },
    {
      "name": "Castle In The Clouds",
      "hex": "#efdcca",
      "good name": ""
    },
    {
      "name": "Castle in the Sky",
      "hex": "#d1eaed",
      "good name": "x"
    },
    {
      "name": "Castle Mist",
      "hex": "#bdaeb7",
      "good name": ""
    },
    {
      "name": "Castle Moat",
      "hex": "#8b6b47",
      "good name": ""
    },
    {
      "name": "Castle Path",
      "hex": "#c5baaa",
      "good name": ""
    },
    {
      "name": "Castle Ridge",
      "hex": "#eadec7",
      "good name": ""
    },
    {
      "name": "Castle Stone",
      "hex": "#525746",
      "good name": ""
    },
    {
      "name": "Castle Wall",
      "hex": "#c8c1ab",
      "good name": ""
    },
    {
      "name": "Castlegate",
      "hex": "#a0a5a5",
      "good name": ""
    },
    {
      "name": "Castlerock",
      "hex": "#5f5e62",
      "good name": ""
    },
    {
      "name": "Castleton Green",
      "hex": "#00564f",
      "good name": ""
    },
    {
      "name": "Castlevania Heart",
      "hex": "#a80020",
      "good name": ""
    },
    {
      "name": "Castor Grey",
      "hex": "#646762",
      "good name": ""
    },
    {
      "name": "Castro",
      "hex": "#44232f",
      "good name": "x"
    },
    {
      "name": "Casual Blue",
      "hex": "#498090",
      "good name": ""
    },
    {
      "name": "Casual Day",
      "hex": "#95bac2",
      "good name": ""
    },
    {
      "name": "Casual Elegance",
      "hex": "#dfd5c8",
      "good name": ""
    },
    {
      "name": "Casual Grey",
      "hex": "#a09d98",
      "good name": ""
    },
    {
      "name": "Casual Khaki",
      "hex": "#d3c5af",
      "good name": ""
    },
    {
      "name": "Cat Person",
      "hex": "#636d70",
      "good name": ""
    },
    {
      "name": "Cat's Eye Marble",
      "hex": "#d6a75d",
      "good name": ""
    },
    {
      "name": "Cat's Purr",
      "hex": "#0071a0",
      "good name": ""
    },
    {
      "name": "Catachan Green",
      "hex": "#475742",
      "good name": ""
    },
    {
      "name": "Catacomb Bone",
      "hex": "#e2dccc",
      "good name": ""
    },
    {
      "name": "Catacomb Walls",
      "hex": "#dbd7d0",
      "good name": "x"
    },
    {
      "name": "Catalan",
      "hex": "#429395",
      "good name": ""
    },
    {
      "name": "Catalina",
      "hex": "#72a49f",
      "good name": ""
    },
    {
      "name": "Catalina Blue",
      "hex": "#062a78",
      "good name": ""
    },
    {
      "name": "Catalina Coast",
      "hex": "#5c7884",
      "good name": ""
    },
    {
      "name": "Catalina Green",
      "hex": "#859475",
      "good name": ""
    },
    {
      "name": "Catalina Tile",
      "hex": "#efac73",
      "good name": ""
    },
    {
      "name": "Catarina Green",
      "hex": "#90c4b4",
      "good name": ""
    },
    {
      "name": "Catawba",
      "hex": "#703642",
      "good name": ""
    },
    {
      "name": "Catawba Grape",
      "hex": "#5d3c43",
      "good name": ""
    },
    {
      "name": "Catch The Wave",
      "hex": "#b5dcd8",
      "good name": ""
    },
    {
      "name": "Caterpillar",
      "hex": "#66a545",
      "good name": ""
    },
    {
      "name": "Caterpillar Green",
      "hex": "#146b47",
      "good name": ""
    },
    {
      "name": "Catfish",
      "hex": "#657d82",
      "good name": "x"
    },
    {
      "name": "Cathay Spice",
      "hex": "#99642c",
      "good name": ""
    },
    {
      "name": "Cathedral",
      "hex": "#acaaa7",
      "good name": "x"
    },
    {
      "name": "Cathedral Glass",
      "hex": "#7a999c",
      "good name": ""
    },
    {
      "name": "Cathedral Grey",
      "hex": "#aba9a7",
      "good name": ""
    },
    {
      "name": "Cathedral Stone",
      "hex": "#80796e",
      "good name": ""
    },
    {
      "name": "Cathode Green",
      "hex": "#00ff55",
      "good name": "x"
    },
    {
      "name": "Catkin Yellow",
      "hex": "#cca800",
      "good name": ""
    },
    {
      "name": "Catmint",
      "hex": "#c9a8ce",
      "good name": ""
    },
    {
      "name": "Catnap",
      "hex": "#9fc3ac",
      "good name": ""
    },
    {
      "name": "Catnip",
      "hex": "#80aa95",
      "good name": ""
    },
    {
      "name": "Catnip Wood",
      "hex": "#6f6066",
      "good name": ""
    },
    {
      "name": "Catskill Brown",
      "hex": "#595452",
      "good name": ""
    },
    {
      "name": "Catskill White",
      "hex": "#e0e4dc",
      "good name": ""
    },
    {
      "name": "Cattail Brown",
      "hex": "#917546",
      "good name": ""
    },
    {
      "name": "Cattail Red",
      "hex": "#b64925",
      "good name": ""
    },
    {
      "name": "Catwalk",
      "hex": "#4a4649",
      "good name": ""
    },
    {
      "name": "Caught Red-Handed",
      "hex": "#be4236",
      "good name": ""
    },
    {
      "name": "Caulerpa Lentillifera",
      "hex": "#599c99",
      "good name": ""
    },
    {
      "name": "Cauliflower",
      "hex": "#ebe5d0",
      "good name": "x"
    },
    {
      "name": "Cauliflower Cream",
      "hex": "#f2e4c7",
      "good name": ""
    },
    {
      "name": "Caustic Green",
      "hex": "#11dd00",
      "good name": ""
    },
    {
      "name": "Cautious Blue",
      "hex": "#d5dde5",
      "good name": ""
    },
    {
      "name": "Cautious Grey",
      "hex": "#dfd8d9",
      "good name": ""
    },
    {
      "name": "Cautious Jade",
      "hex": "#dae4de",
      "good name": ""
    },
    {
      "name": "Cavalry",
      "hex": "#3f4c5a",
      "good name": ""
    },
    {
      "name": "Cavalry Brown",
      "hex": "#990003",
      "good name": ""
    },
    {
      "name": "Cavan",
      "hex": "#dce2ce",
      "good name": ""
    },
    {
      "name": "Cave Lake",
      "hex": "#52b7c6",
      "good name": ""
    },
    {
      "name": "Cave of the Winds",
      "hex": "#86736e",
      "good name": ""
    },
    {
      "name": "Cave Painting",
      "hex": "#aa1100",
      "good name": ""
    },
    {
      "name": "Cave Pearl",
      "hex": "#d6e5e2",
      "good name": ""
    },
    {
      "name": "Caveman",
      "hex": "#625c58",
      "good name": "x"
    },
    {
      "name": "Cavendish",
      "hex": "#fed200",
      "good name": ""
    },
    {
      "name": "Cavern Clay",
      "hex": "#b69981",
      "good name": ""
    },
    {
      "name": "Cavern Echo",
      "hex": "#cec3b3",
      "good name": ""
    },
    {
      "name": "Cavern Moss",
      "hex": "#92987d",
      "good name": ""
    },
    {
      "name": "Cavern Pink",
      "hex": "#e0b8b1",
      "good name": ""
    },
    {
      "name": "Cavern Sand",
      "hex": "#947054",
      "good name": ""
    },
    {
      "name": "Cavernous",
      "hex": "#515252",
      "good name": ""
    },
    {
      "name": "Caviar",
      "hex": "#292a2d",
      "good name": "x"
    },
    {
      "name": "Caviar Black",
      "hex": "#533e39",
      "good name": ""
    },
    {
      "name": "Caviar Couture",
      "hex": "#772244",
      "good name": ""
    },
    {
      "name": "Cavolo Nero",
      "hex": "#72939e",
      "good name": "x"
    },
    {
      "name": "Cay",
      "hex": "#a6d0d6",
      "good name": ""
    },
    {
      "name": "Cayenne",
      "hex": "#941100",
      "good name": "x"
    },
    {
      "name": "Cayman Bay",
      "hex": "#52798d",
      "good name": ""
    },
    {
      "name": "Cayman Green",
      "hex": "#495a44",
      "good name": ""
    },
    {
      "name": "Ce Soir",
      "hex": "#9271a7",
      "good name": ""
    },
    {
      "name": "Cedar",
      "hex": "#463430",
      "good name": ""
    },
    {
      "name": "Cedar Chest",
      "hex": "#c95a49",
      "good name": "x"
    },
    {
      "name": "Cedar Forest",
      "hex": "#788078",
      "good name": ""
    },
    {
      "name": "Cedar Glen",
      "hex": "#686647",
      "good name": ""
    },
    {
      "name": "Cedar Green",
      "hex": "#5e6737",
      "good name": ""
    },
    {
      "name": "Cedar Grove",
      "hex": "#bf6955",
      "good name": ""
    },
    {
      "name": "Cedar Plank",
      "hex": "#8b786f",
      "good name": ""
    },
    {
      "name": "Cedar Plank Salmon",
      "hex": "#a96a50",
      "good name": ""
    },
    {
      "name": "Cedar Ridge",
      "hex": "#9b6663",
      "good name": ""
    },
    {
      "name": "Cedar Staff",
      "hex": "#91493e",
      "good name": ""
    },
    {
      "name": "Cedar Wood",
      "hex": "#a1655b",
      "good name": ""
    },
    {
      "name": "Cedar Wood Finish",
      "hex": "#711a00",
      "good name": ""
    },
    {
      "name": "Cedarville",
      "hex": "#dda896",
      "good name": ""
    },
    {
      "name": "Ceil",
      "hex": "#92a1cf",
      "good name": ""
    },
    {
      "name": "Ceiling Bright White",
      "hex": "#e9ebe7",
      "good name": ""
    },
    {
      "name": "Celadon",
      "hex": "#ace1af",
      "good name": ""
    },
    {
      "name": "Celadon Blue",
      "hex": "#007ba7",
      "good name": ""
    },
    {
      "name": "Celadon Glaze",
      "hex": "#ccd4cb",
      "good name": ""
    },
    {
      "name": "Celadon Green",
      "hex": "#2f847c",
      "good name": ""
    },
    {
      "name": "Celadon Porcelain",
      "hex": "#7ebea5",
      "good name": "x"
    },
    {
      "name": "Celadon Sorbet",
      "hex": "#b1dac6",
      "good name": ""
    },
    {
      "name": "Celadon Tint",
      "hex": "#cbcebe",
      "good name": ""
    },
    {
      "name": "Celandine",
      "hex": "#ebdf67",
      "good name": ""
    },
    {
      "name": "Celandine Green",
      "hex": "#b8bfaf",
      "good name": ""
    },
    {
      "name": "Celeb City",
      "hex": "#9d86ad",
      "good name": ""
    },
    {
      "name": "Celebration",
      "hex": "#e6c17a",
      "good name": ""
    },
    {
      "name": "Celebration Blue",
      "hex": "#008bc4",
      "good name": ""
    },
    {
      "name": "Celery",
      "hex": "#b4c04c",
      "good name": "x"
    },
    {
      "name": "Celery Bunch",
      "hex": "#d4e0b3",
      "good name": ""
    },
    {
      "name": "Celery Green",
      "hex": "#c5cc7b",
      "good name": ""
    },
    {
      "name": "Celery Ice",
      "hex": "#eaebd1",
      "good name": ""
    },
    {
      "name": "Celery Mousse",
      "hex": "#c1fd95",
      "good name": "x"
    },
    {
      "name": "Celery Powder",
      "hex": "#c5bda5",
      "good name": ""
    },
    {
      "name": "Celery Satin",
      "hex": "#d0d8be",
      "good name": ""
    },
    {
      "name": "Celery Scepter",
      "hex": "#e1df9a",
      "good name": "x"
    },
    {
      "name": "Celery Sprig",
      "hex": "#9ed686",
      "good name": ""
    },
    {
      "name": "Celery Stick",
      "hex": "#caedd0",
      "good name": ""
    },
    {
      "name": "Celery Victor",
      "hex": "#cceec2",
      "good name": ""
    },
    {
      "name": "Celery White",
      "hex": "#dbd9cd",
      "good name": ""
    },
    {
      "name": "Celeste",
      "hex": "#b2ffff",
      "good name": ""
    },
    {
      "name": "Celeste Blue",
      "hex": "#406374",
      "good name": ""
    },
    {
      "name": "Celestial",
      "hex": "#006380",
      "good name": "x"
    },
    {
      "name": "Celestial Alien",
      "hex": "#11cc00",
      "good name": ""
    },
    {
      "name": "Celestial Blue",
      "hex": "#2c4d69",
      "good name": ""
    },
    {
      "name": "Celestial Coral",
      "hex": "#dd4455",
      "good name": ""
    },
    {
      "name": "Celestial Dragon",
      "hex": "#992266",
      "good name": ""
    },
    {
      "name": "Celestial Glow",
      "hex": "#eaebe9",
      "good name": ""
    },
    {
      "name": "Celestial Green",
      "hex": "#2ddfc1",
      "good name": ""
    },
    {
      "name": "Celestial Horizon",
      "hex": "#7c94b3",
      "good name": "x"
    },
    {
      "name": "Celestial Indigo",
      "hex": "#091f92",
      "good name": ""
    },
    {
      "name": "Celestial Light",
      "hex": "#c7dae8",
      "good name": ""
    },
    {
      "name": "Celestial Moon",
      "hex": "#e3d4b9",
      "good name": ""
    },
    {
      "name": "Celestial Pink",
      "hex": "#9c004a",
      "good name": ""
    },
    {
      "name": "Celestial Plum",
      "hex": "#3c7ac2",
      "good name": ""
    },
    {
      "name": "Celestine",
      "hex": "#85c1c4",
      "good name": ""
    },
    {
      "name": "Celestine Spring",
      "hex": "#24a4c8",
      "good name": ""
    },
    {
      "name": "Celestra Grey",
      "hex": "#99a7ab",
      "good name": ""
    },
    {
      "name": "Celestyn",
      "hex": "#b5c7d2",
      "good name": ""
    },
    {
      "name": "Celine",
      "hex": "#826167",
      "good name": ""
    },
    {
      "name": "Cellar Door",
      "hex": "#75553f",
      "good name": ""
    },
    {
      "name": "Cellini Gold",
      "hex": "#ddb582",
      "good name": ""
    },
    {
      "name": "Cello",
      "hex": "#3a4e5f",
      "good name": ""
    },
    {
      "name": "Celluloid",
      "hex": "#515153",
      "good name": ""
    },
    {
      "name": "Celosia Orange",
      "hex": "#e8703a",
      "good name": ""
    },
    {
      "name": "Celtic",
      "hex": "#2b3f36",
      "good name": ""
    },
    {
      "name": "Celtic Blue",
      "hex": "#246bce",
      "good name": ""
    },
    {
      "name": "Celtic Clover",
      "hex": "#006940",
      "good name": ""
    },
    {
      "name": "Celtic Green",
      "hex": "#1f6954",
      "good name": ""
    },
    {
      "name": "Celtic Grey",
      "hex": "#c5d4ce",
      "good name": ""
    },
    {
      "name": "Celtic Linen",
      "hex": "#f5e5ce",
      "good name": ""
    },
    {
      "name": "Celtic Queen",
      "hex": "#00886b",
      "good name": ""
    },
    {
      "name": "Celtic Rush",
      "hex": "#2e4c5b",
      "good name": ""
    },
    {
      "name": "Celtic Spring",
      "hex": "#aadeb2",
      "good name": ""
    },
    {
      "name": "Celuce",
      "hex": "#8bab68",
      "good name": ""
    },
    {
      "name": "Cembra Blossom",
      "hex": "#725671",
      "good name": ""
    },
    {
      "name": "Cement",
      "hex": "#a5a391",
      "good name": ""
    },
    {
      "name": "Cement Feet",
      "hex": "#7b737b",
      "good name": "x"
    },
    {
      "name": "Cement Greige",
      "hex": "#b5aba4",
      "good name": ""
    },
    {
      "name": "Cemetery Ash",
      "hex": "#c0c7d0",
      "good name": ""
    },
    {
      "name": "Cendre Blue",
      "hex": "#3e7fa5",
      "good name": ""
    },
    {
      "name": "Census",
      "hex": "#327a68",
      "good name": ""
    },
    {
      "name": "Centaur",
      "hex": "#90673f",
      "good name": ""
    },
    {
      "name": "Centaur Brown",
      "hex": "#8b6a4f",
      "good name": ""
    },
    {
      "name": "Centennial Rose",
      "hex": "#b3a7a6",
      "good name": ""
    },
    {
      "name": "Centeōtl Yellow",
      "hex": "#f7e077",
      "good name": ""
    },
    {
      "name": "Center Earth",
      "hex": "#685549",
      "good name": ""
    },
    {
      "name": "Center Ridge",
      "hex": "#817a69",
      "good name": ""
    },
    {
      "name": "Center Stage",
      "hex": "#ffc100",
      "good name": ""
    },
    {
      "name": "Centipede Brown",
      "hex": "#6d2400",
      "good name": ""
    },
    {
      "name": "Centra",
      "hex": "#c08f45",
      "good name": ""
    },
    {
      "name": "Centre Stage",
      "hex": "#c8c7cb",
      "good name": ""
    },
    {
      "name": "Century's Last Sunset",
      "hex": "#9c7b87",
      "good name": ""
    },
    {
      "name": "Ceramic",
      "hex": "#fcfff9",
      "good name": "x"
    },
    {
      "name": "Ceramic Beige",
      "hex": "#edd1ac",
      "good name": ""
    },
    {
      "name": "Ceramic Blue Turquoise",
      "hex": "#16a29a",
      "good name": ""
    },
    {
      "name": "Ceramic Brown",
      "hex": "#a05843",
      "good name": ""
    },
    {
      "name": "Ceramic Glaze",
      "hex": "#e8a784",
      "good name": ""
    },
    {
      "name": "Ceramic Green",
      "hex": "#3bb773",
      "good name": ""
    },
    {
      "name": "Ceramic Pot",
      "hex": "#908268",
      "good name": ""
    },
    {
      "name": "Ceramite White",
      "hex": "#fefee0",
      "good name": ""
    },
    {
      "name": "Cereal Flake",
      "hex": "#efd7ab",
      "good name": "x"
    },
    {
      "name": "Cerebellum Grey",
      "hex": "#cbcbcb",
      "good name": ""
    },
    {
      "name": "Cerebral Grey",
      "hex": "#cccccc",
      "good name": ""
    },
    {
      "name": "Ceremonial Gold",
      "hex": "#d69e59",
      "good name": ""
    },
    {
      "name": "Ceremonial Grey",
      "hex": "#91998e",
      "good name": ""
    },
    {
      "name": "Ceremonial Purple",
      "hex": "#2a2756",
      "good name": ""
    },
    {
      "name": "Cerise",
      "hex": "#a41247",
      "good name": ""
    },
    {
      "name": "Cerise Pink",
      "hex": "#ec3b83",
      "good name": ""
    },
    {
      "name": "Cerise Red",
      "hex": "#de3163",
      "good name": ""
    },
    {
      "name": "Certain Peach",
      "hex": "#f2bda2",
      "good name": ""
    },
    {
      "name": "Cerulean",
      "hex": "#55aaee",
      "good name": ""
    },
    {
      "name": "Cerulean Blue",
      "hex": "#2a52be",
      "good name": ""
    },
    {
      "name": "Cerulean Frost",
      "hex": "#6d9bc3",
      "good name": ""
    },
    {
      "name": "Cetacean Blue",
      "hex": "#001440",
      "good name": ""
    },
    {
      "name": "Ceylanite",
      "hex": "#33431e",
      "good name": ""
    },
    {
      "name": "Ceylon Cream",
      "hex": "#f3e9d6",
      "good name": ""
    },
    {
      "name": "Ceylon Yellow",
      "hex": "#d4ae40",
      "good name": ""
    },
    {
      "name": "Ceylonese",
      "hex": "#756858",
      "good name": ""
    },
    {
      "name": "CG Blue",
      "hex": "#007aa5",
      "good name": ""
    },
    {
      "name": "CG Red",
      "hex": "#e03c31",
      "good name": ""
    },
    {
      "name": "CGA Blue",
      "hex": "#56ffff",
      "good name": ""
    },
    {
      "name": "CGA Pink",
      "hex": "#fc0fc0",
      "good name": ""
    },
    {
      "name": "Chá Lǜ Green",
      "hex": "#77926f",
      "good name": ""
    },
    {
      "name": "Chaat Masala",
      "hex": "#ec7d2c",
      "good name": ""
    },
    {
      "name": "Chablis",
      "hex": "#fde9e0",
      "good name": ""
    },
    {
      "name": "Chafed Wheat",
      "hex": "#f6e0cf",
      "good name": ""
    },
    {
      "name": "Chagall Green",
      "hex": "#008b62",
      "good name": ""
    },
    {
      "name": "Chai",
      "hex": "#ebcfae",
      "good name": ""
    },
    {
      "name": "Chai Latte",
      "hex": "#f9cba0",
      "good name": "x"
    },
    {
      "name": "Chai Spice",
      "hex": "#bd7c4f",
      "good name": ""
    },
    {
      "name": "Chai Tea",
      "hex": "#b1832f",
      "good name": "x"
    },
    {
      "name": "Chai Tea Latte",
      "hex": "#efd7b3",
      "good name": ""
    },
    {
      "name": "Chain Gang Grey",
      "hex": "#708090",
      "good name": ""
    },
    {
      "name": "Chain Mail",
      "hex": "#81777f",
      "good name": "x"
    },
    {
      "name": "Chain Reaction",
      "hex": "#a4a6a4",
      "good name": ""
    },
    {
      "name": "Chaise Mauve",
      "hex": "#c1b2b3",
      "good name": ""
    },
    {
      "name": "Chakra",
      "hex": "#8b5e8f",
      "good name": ""
    },
    {
      "name": "Chalcedony",
      "hex": "#dddd99",
      "good name": ""
    },
    {
      "name": "Chalcedony Green",
      "hex": "#4b6057",
      "good name": ""
    },
    {
      "name": "Chalcedony Violet",
      "hex": "#6770ae",
      "good name": ""
    },
    {
      "name": "Chalet",
      "hex": "#c29867",
      "good name": "x"
    },
    {
      "name": "Chalet Green",
      "hex": "#5a6e41",
      "good name": ""
    },
    {
      "name": "Chalk",
      "hex": "#edeae5",
      "good name": ""
    },
    {
      "name": "Chalk Beige",
      "hex": "#d6c5b4",
      "good name": ""
    },
    {
      "name": "Chalk Blue",
      "hex": "#ccdad7",
      "good name": ""
    },
    {
      "name": "Chalk Dust",
      "hex": "#eaebe6",
      "good name": ""
    },
    {
      "name": "Chalk Pink",
      "hex": "#e6c5ca",
      "good name": ""
    },
    {
      "name": "Chalk Violet",
      "hex": "#8f7da5",
      "good name": ""
    },
    {
      "name": "Chalkware",
      "hex": "#e0ceb7",
      "good name": ""
    },
    {
      "name": "Chalky",
      "hex": "#dfc281",
      "good name": ""
    },
    {
      "name": "Chalky Blue White",
      "hex": "#d0ebf1",
      "good name": ""
    },
    {
      "name": "Challah Bread",
      "hex": "#cd7a50",
      "good name": ""
    },
    {
      "name": "Chambray",
      "hex": "#475877",
      "good name": ""
    },
    {
      "name": "Chambray Blue",
      "hex": "#9eb4d3",
      "good name": ""
    },
    {
      "name": "Chameleon",
      "hex": "#b6a063",
      "good name": ""
    },
    {
      "name": "Chameleon Skin",
      "hex": "#cedaac",
      "good name": ""
    },
    {
      "name": "Chameleon Tango",
      "hex": "#c0c2a0",
      "good name": ""
    },
    {
      "name": "Chamois",
      "hex": "#e8cd9a",
      "good name": ""
    },
    {
      "name": "Chamois Cloth",
      "hex": "#f0e1d0",
      "good name": ""
    },
    {
      "name": "Chamois Leather",
      "hex": "#ad8867",
      "good name": ""
    },
    {
      "name": "Chamois Tan",
      "hex": "#b3a385",
      "good name": ""
    },
    {
      "name": "Chamois Yellow",
      "hex": "#986e19",
      "good name": ""
    },
    {
      "name": "Chamoisee",
      "hex": "#a0785a",
      "good name": ""
    },
    {
      "name": "Chamomile",
      "hex": "#e8d0a7",
      "good name": ""
    },
    {
      "name": "Chamomile Tea",
      "hex": "#dac395",
      "good name": ""
    },
    {
      "name": "Champagne",
      "hex": "#e9d2ac",
      "good name": "x"
    },
    {
      "name": "Champagne Beige",
      "hex": "#d4c49e",
      "good name": ""
    },
    {
      "name": "Champagne Bliss",
      "hex": "#f0e1c5",
      "good name": ""
    },
    {
      "name": "Champagne Bubbles",
      "hex": "#ddcead",
      "good name": ""
    },
    {
      "name": "Champagne Burst",
      "hex": "#f1e4cb",
      "good name": ""
    },
    {
      "name": "Champagne Cocktail",
      "hex": "#e3d7ae",
      "good name": ""
    },
    {
      "name": "Champagne Elegance",
      "hex": "#ebd3e4",
      "good name": ""
    },
    {
      "name": "Champagne Flute",
      "hex": "#f6ece2",
      "good name": ""
    },
    {
      "name": "Champagne Gold",
      "hex": "#e8d6b3",
      "good name": "x"
    },
    {
      "name": "Champagne Grape",
      "hex": "#c5b067",
      "good name": ""
    },
    {
      "name": "Champagne Ice",
      "hex": "#f3e5dd",
      "good name": ""
    },
    {
      "name": "Champagne Pink",
      "hex": "#f1ddcf",
      "good name": ""
    },
    {
      "name": "Champagne Rose",
      "hex": "#e3d6cc",
      "good name": ""
    },
    {
      "name": "Champagne Wishes",
      "hex": "#efd4ae",
      "good name": ""
    },
    {
      "name": "Champignon",
      "hex": "#949089",
      "good name": ""
    },
    {
      "name": "Champion",
      "hex": "#7b5986",
      "good name": ""
    },
    {
      "name": "Champion Blue",
      "hex": "#606788",
      "good name": ""
    },
    {
      "name": "Champlain Blue",
      "hex": "#435572",
      "good name": ""
    },
    {
      "name": "Chance of Rain",
      "hex": "#a0a6a9",
      "good name": ""
    },
    {
      "name": "Chandra Cream",
      "hex": "#ecba5d",
      "good name": ""
    },
    {
      "name": "Changeling Pink",
      "hex": "#f4afcd",
      "good name": ""
    },
    {
      "name": "Channel",
      "hex": "#f1c3c2",
      "good name": "x"
    },
    {
      "name": "Channel Marker Green",
      "hex": "#04d8b2",
      "good name": ""
    },
    {
      "name": "Chanoyu",
      "hex": "#eee8d2",
      "good name": ""
    },
    {
      "name": "Chanterelle",
      "hex": "#daa520",
      "good name": ""
    },
    {
      "name": "Chanterelle Sauce",
      "hex": "#a28776",
      "good name": ""
    },
    {
      "name": "Chanterelles",
      "hex": "#ffc66e",
      "good name": ""
    },
    {
      "name": "Chanticleer",
      "hex": "#870000",
      "good name": ""
    },
    {
      "name": "Chantilly",
      "hex": "#edb8c7",
      "good name": "x"
    },
    {
      "name": "Chantilly Lace",
      "hex": "#f1e2de",
      "good name": ""
    },
    {
      "name": "Chaos Black",
      "hex": "#0f0f0f",
      "good name": ""
    },
    {
      "name": "Chaotic Red",
      "hex": "#740600",
      "good name": ""
    },
    {
      "name": "Chaotic Roses",
      "hex": "#bb2266",
      "good name": "x"
    },
    {
      "name": "Chaparral",
      "hex": "#e5d0b0",
      "good name": ""
    },
    {
      "name": "Chapeau Violet",
      "hex": "#dee5ec",
      "good name": ""
    },
    {
      "name": "Chapel Wall",
      "hex": "#ede2ac",
      "good name": ""
    },
    {
      "name": "Chaps",
      "hex": "#644b41",
      "good name": ""
    },
    {
      "name": "Chapter",
      "hex": "#9f9369",
      "good name": ""
    },
    {
      "name": "Charade",
      "hex": "#394043",
      "good name": ""
    },
    {
      "name": "Charadon Granite",
      "hex": "#504d4c",
      "good name": ""
    },
    {
      "name": "Charcoal",
      "hex": "#343837",
      "good name": "x"
    },
    {
      "name": "Charcoal Blue",
      "hex": "#67778a",
      "good name": ""
    },
    {
      "name": "Charcoal Briquette",
      "hex": "#5d625c",
      "good name": ""
    },
    {
      "name": "Charcoal Dust",
      "hex": "#9497b3",
      "good name": ""
    },
    {
      "name": "Charcoal Grey",
      "hex": "#6e6969",
      "good name": ""
    },
    {
      "name": "Charcoal Light",
      "hex": "#726e68",
      "good name": ""
    },
    {
      "name": "Charcoal Plum",
      "hex": "#6a6a6f",
      "good name": ""
    },
    {
      "name": "Charcoal Sketch",
      "hex": "#5d5b56",
      "good name": ""
    },
    {
      "name": "Charcoal Smoke",
      "hex": "#474f43",
      "good name": ""
    },
    {
      "name": "Charcoal Smudge",
      "hex": "#60605e",
      "good name": ""
    },
    {
      "name": "Chard",
      "hex": "#48553f",
      "good name": ""
    },
    {
      "name": "Chardon",
      "hex": "#f8eadf",
      "good name": ""
    },
    {
      "name": "Chardonnay",
      "hex": "#efe8bc",
      "good name": ""
    },
    {
      "name": "Charisma",
      "hex": "#632a60",
      "good name": ""
    },
    {
      "name": "Charismatic",
      "hex": "#e7c180",
      "good name": ""
    },
    {
      "name": "Charismatic Red",
      "hex": "#ee2244",
      "good name": "x"
    },
    {
      "name": "Charismatic Sky",
      "hex": "#9ac1dc",
      "good name": ""
    },
    {
      "name": "Charleston Cherry",
      "hex": "#9f414b",
      "good name": ""
    },
    {
      "name": "Charleston Chocolate",
      "hex": "#c09278",
      "good name": ""
    },
    {
      "name": "Charleston Green",
      "hex": "#232b2b",
      "good name": ""
    },
    {
      "name": "Charlie Brown",
      "hex": "#995500",
      "good name": ""
    },
    {
      "name": "Charlie Horse",
      "hex": "#948263",
      "good name": ""
    },
    {
      "name": "Charlock",
      "hex": "#e5e790",
      "good name": ""
    },
    {
      "name": "Charlotte",
      "hex": "#a4dce6",
      "good name": ""
    },
    {
      "name": "Charm",
      "hex": "#d0748b",
      "good name": "x"
    },
    {
      "name": "Charm Pink",
      "hex": "#e68fac",
      "good name": ""
    },
    {
      "name": "Charmed Green",
      "hex": "#007f3a",
      "good name": ""
    },
    {
      "name": "Charming Cherry",
      "hex": "#ff90a2",
      "good name": ""
    },
    {
      "name": "Charming Green",
      "hex": "#d4e092",
      "good name": ""
    },
    {
      "name": "Charming Nature",
      "hex": "#11bb44",
      "good name": ""
    },
    {
      "name": "Charming Pink",
      "hex": "#edd3d2",
      "good name": ""
    },
    {
      "name": "Charming Violet",
      "hex": "#8c7281",
      "good name": ""
    },
    {
      "name": "Charoite Violet",
      "hex": "#6a577f",
      "good name": ""
    },
    {
      "name": "Charolais Cattle",
      "hex": "#f1ebea",
      "good name": ""
    },
    {
      "name": "Charred Brown",
      "hex": "#3e0007",
      "good name": ""
    },
    {
      "name": "Charred Chocolate",
      "hex": "#553b3d",
      "good name": ""
    },
    {
      "name": "Charred Clay",
      "hex": "#885132",
      "good name": ""
    },
    {
      "name": "Charred Hickory",
      "hex": "#5b4e4a",
      "good name": ""
    },
    {
      "name": "Charter",
      "hex": "#69b2cf",
      "good name": ""
    },
    {
      "name": "Charter Blue",
      "hex": "#546e91",
      "good name": ""
    },
    {
      "name": "Chartreuse",
      "hex": "#c1f80a",
      "good name": "x"
    },
    {
      "name": "Chartreuse Frost",
      "hex": "#e4dcc6",
      "good name": ""
    },
    {
      "name": "Chartreuse Shot",
      "hex": "#dad000",
      "good name": ""
    },
    {
      "name": "Charybdis",
      "hex": "#16a3cb",
      "good name": ""
    },
    {
      "name": "Chasm",
      "hex": "#876044",
      "good name": ""
    },
    {
      "name": "Chasm Green",
      "hex": "#63b521",
      "good name": ""
    },
    {
      "name": "Chaste Blossoms",
      "hex": "#9944ee",
      "good name": ""
    },
    {
      "name": "Chat Orange",
      "hex": "#f79a3e",
      "good name": ""
    },
    {
      "name": "Chateau",
      "hex": "#b5a28a",
      "good name": ""
    },
    {
      "name": "Chateau Brown",
      "hex": "#5b4b44",
      "good name": ""
    },
    {
      "name": "Chateau de Chillon",
      "hex": "#a2aab3",
      "good name": ""
    },
    {
      "name": "Chateau Green",
      "hex": "#419f59",
      "good name": ""
    },
    {
      "name": "Chateau Grey",
      "hex": "#bbb1a8",
      "good name": ""
    },
    {
      "name": "Chateau Rose",
      "hex": "#dba3ce",
      "good name": ""
    },
    {
      "name": "Chatelle",
      "hex": "#b3abb6",
      "good name": ""
    },
    {
      "name": "Chathams Blue",
      "hex": "#2c5971",
      "good name": ""
    },
    {
      "name": "Chatroom",
      "hex": "#b0ab9c",
      "good name": ""
    },
    {
      "name": "Chatty Cricket",
      "hex": "#89b386",
      "good name": ""
    },
    {
      "name": "Chatura Beige",
      "hex": "#a09287",
      "good name": ""
    },
    {
      "name": "Chayote",
      "hex": "#c7e2c6",
      "good name": ""
    },
    {
      "name": "Che Guevara Red",
      "hex": "#ed214d",
      "good name": "x"
    },
    {
      "name": "Cheater",
      "hex": "#eeb15d",
      "good name": ""
    },
    {
      "name": "Cheddar",
      "hex": "#ee9a09",
      "good name": "x"
    },
    {
      "name": "Cheddar Biscuit",
      "hex": "#d2ad87",
      "good name": ""
    },
    {
      "name": "Cheddar Cheese",
      "hex": "#f0843a",
      "good name": ""
    },
    {
      "name": "Cheddar Chunk",
      "hex": "#f9c982",
      "good name": ""
    },
    {
      "name": "Cheddar Corn",
      "hex": "#f5d4b5",
      "good name": ""
    },
    {
      "name": "Cheddar Pink Mauve",
      "hex": "#b67daf",
      "good name": ""
    },
    {
      "name": "Cheek Red",
      "hex": "#a55a55",
      "good name": "x"
    },
    {
      "name": "Cheeky Chestnut",
      "hex": "#7b4d3a",
      "good name": "x"
    },
    {
      "name": "Cheerful Heart",
      "hex": "#dcc7c0",
      "good name": ""
    },
    {
      "name": "Cheerful Hue",
      "hex": "#ffe195",
      "good name": ""
    },
    {
      "name": "Cheerful Tangerine",
      "hex": "#fda471",
      "good name": ""
    },
    {
      "name": "Cheerful Whisper",
      "hex": "#d3d7e7",
      "good name": ""
    },
    {
      "name": "Cheerful Wine",
      "hex": "#7e4258",
      "good name": ""
    },
    {
      "name": "Cheerful Yellow",
      "hex": "#ffc723",
      "good name": ""
    },
    {
      "name": "Cheerly Kiwi",
      "hex": "#bccb08",
      "good name": "x"
    },
    {
      "name": "Cheers!",
      "hex": "#c09962",
      "good name": ""
    },
    {
      "name": "Cheery",
      "hex": "#f08a88",
      "good name": ""
    },
    {
      "name": "Cheese",
      "hex": "#ffa600",
      "good name": "x"
    },
    {
      "name": "Cheese It Up",
      "hex": "#fdde45",
      "good name": "x"
    },
    {
      "name": "Cheese Please",
      "hex": "#ff9613",
      "good name": "x"
    },
    {
      "name": "Cheese Powder",
      "hex": "#ffe4be",
      "good name": ""
    },
    {
      "name": "Cheese Puff",
      "hex": "#ffb96f",
      "good name": ""
    },
    {
      "name": "Cheesecake",
      "hex": "#fffcda",
      "good name": "x"
    },
    {
      "name": "Cheesus",
      "hex": "#ffcc77",
      "good name": "x"
    },
    {
      "name": "Cheesy Frittata",
      "hex": "#f0e093",
      "good name": "x"
    },
    {
      "name": "Cheesy Grin",
      "hex": "#fae195",
      "good name": ""
    },
    {
      "name": "Chefchaouen Blue",
      "hex": "#a3d1e8",
      "good name": ""
    },
    {
      "name": "Chelsea Cucumber",
      "hex": "#88a95b",
      "good name": ""
    },
    {
      "name": "Chelsea Garden",
      "hex": "#546d66",
      "good name": ""
    },
    {
      "name": "Chelsea Gem",
      "hex": "#95532f",
      "good name": ""
    },
    {
      "name": "Chelsea Grey",
      "hex": "#b6b7b0",
      "good name": ""
    },
    {
      "name": "Chelsea Mauve",
      "hex": "#beac9f",
      "good name": ""
    },
    {
      "name": "Chéng Hóng Sè Orange",
      "hex": "#f94009",
      "good name": ""
    },
    {
      "name": "Chenille",
      "hex": "#a6cd91",
      "good name": ""
    },
    {
      "name": "Chenille Spread",
      "hex": "#f1e7d6",
      "good name": ""
    },
    {
      "name": "Chenille White",
      "hex": "#f9efe2",
      "good name": ""
    },
    {
      "name": "Chenin",
      "hex": "#dec371",
      "good name": ""
    },
    {
      "name": "Cherenkov Radiation",
      "hex": "#22bbff",
      "good name": ""
    },
    {
      "name": "Cherish Cream",
      "hex": "#f4e3cb",
      "good name": ""
    },
    {
      "name": "Cherish is the Word",
      "hex": "#e6e4da",
      "good name": ""
    },
    {
      "name": "Cherish the Moment",
      "hex": "#ccacd7",
      "good name": ""
    },
    {
      "name": "Cherished",
      "hex": "#ba97b1",
      "good name": ""
    },
    {
      "name": "Cherished One",
      "hex": "#fc9293",
      "good name": ""
    },
    {
      "name": "Chernobog",
      "hex": "#ac0132",
      "good name": ""
    },
    {
      "name": "Chernobog Breath",
      "hex": "#e3dcda",
      "good name": ""
    },
    {
      "name": "Cherokee",
      "hex": "#f5cd82",
      "good name": ""
    },
    {
      "name": "Cherokee Dignity",
      "hex": "#dd7722",
      "good name": ""
    },
    {
      "name": "Cherokee Red",
      "hex": "#824e4a",
      "good name": ""
    },
    {
      "name": "Cherries Jubilee",
      "hex": "#a22452",
      "good name": ""
    },
    {
      "name": "Cherry",
      "hex": "#cf0234",
      "good name": "x"
    },
    {
      "name": "Cherry Bark",
      "hex": "#908279",
      "good name": ""
    },
    {
      "name": "Cherry Berry",
      "hex": "#9f4d65",
      "good name": "x"
    },
    {
      "name": "Cherry Black",
      "hex": "#422329",
      "good name": ""
    },
    {
      "name": "Cherry Blink",
      "hex": "#ad5344",
      "good name": ""
    },
    {
      "name": "Cherry Blossom",
      "hex": "#f7cee0",
      "good name": "x"
    },
    {
      "name": "Cherry Blossom Pink",
      "hex": "#ffb7c5",
      "good name": ""
    },
    {
      "name": "Cherry Blush",
      "hex": "#ffc9dd",
      "good name": ""
    },
    {
      "name": "Cherry Bomb",
      "hex": "#b73d3f",
      "good name": ""
    },
    {
      "name": "Cherry Brandy",
      "hex": "#e26b81",
      "good name": ""
    },
    {
      "name": "Cherry Chip",
      "hex": "#ffbbb4",
      "good name": ""
    },
    {
      "name": "Cherry Cobbler",
      "hex": "#883f41",
      "good name": ""
    },
    {
      "name": "Cherry Cocoa",
      "hex": "#8e5e65",
      "good name": ""
    },
    {
      "name": "Cherry Cola",
      "hex": "#894c3b",
      "good name": ""
    },
    {
      "name": "Cherry Cordial",
      "hex": "#ebbed3",
      "good name": ""
    },
    {
      "name": "Cherry Fizz",
      "hex": "#bd6973",
      "good name": ""
    },
    {
      "name": "Cherry Flower",
      "hex": "#fbdae8",
      "good name": ""
    },
    {
      "name": "Cherry Foam",
      "hex": "#f392a0",
      "good name": ""
    },
    {
      "name": "Cherry Hill",
      "hex": "#cc5160",
      "good name": ""
    },
    {
      "name": "Cherry Juice",
      "hex": "#bd9095",
      "good name": ""
    },
    {
      "name": "Cherry Juice Red",
      "hex": "#6c2c45",
      "good name": ""
    },
    {
      "name": "Cherry Kiss",
      "hex": "#a32e39",
      "good name": ""
    },
    {
      "name": "Cherry Lolly",
      "hex": "#c8385a",
      "good name": ""
    },
    {
      "name": "Cherry Mahogany",
      "hex": "#66352b",
      "good name": ""
    },
    {
      "name": "Cherry On Top",
      "hex": "#ac495c",
      "good name": ""
    },
    {
      "name": "Cherry Paddle Pop",
      "hex": "#fe314b",
      "good name": "x"
    },
    {
      "name": "Cherry Pearl",
      "hex": "#f9e7f4",
      "good name": ""
    },
    {
      "name": "Cherry Pie",
      "hex": "#372d52",
      "good name": ""
    },
    {
      "name": "Cherry Pink",
      "hex": "#c7607b",
      "good name": ""
    },
    {
      "name": "Cherry Plum",
      "hex": "#a10047",
      "good name": ""
    },
    {
      "name": "Cherry Race",
      "hex": "#a64137",
      "good name": ""
    },
    {
      "name": "Cherry Red",
      "hex": "#f7022a",
      "good name": ""
    },
    {
      "name": "Cherry Sangria",
      "hex": "#c92435",
      "good name": "x"
    },
    {
      "name": "Cherry Tart",
      "hex": "#933d3e",
      "good name": ""
    },
    {
      "name": "Cherry Tomato",
      "hex": "#f2013f",
      "good name": "x"
    },
    {
      "name": "Cherry Tree",
      "hex": "#dfb7b4",
      "good name": ""
    },
    {
      "name": "Cherry Velvet",
      "hex": "#e10646",
      "good name": "x"
    },
    {
      "name": "Cherry Wine",
      "hex": "#b04556",
      "good name": ""
    },
    {
      "name": "Cherryade",
      "hex": "#b22743",
      "good name": "x"
    },
    {
      "name": "Cherrywood",
      "hex": "#651a14",
      "good name": ""
    },
    {
      "name": "Chert",
      "hex": "#848182",
      "good name": ""
    },
    {
      "name": "Cherub",
      "hex": "#f5d7dc",
      "good name": ""
    },
    {
      "name": "Cherubic",
      "hex": "#ffe6f1",
      "good name": ""
    },
    {
      "name": "Chervil Leaves",
      "hex": "#abbd90",
      "good name": ""
    },
    {
      "name": "Chess Ivory",
      "hex": "#ffe9c5",
      "good name": "x"
    },
    {
      "name": "Chester Brown",
      "hex": "#876b4b",
      "good name": ""
    },
    {
      "name": "Chestnut",
      "hex": "#742802",
      "good name": "x"
    },
    {
      "name": "Chestnut Bisque",
      "hex": "#c19c86",
      "good name": ""
    },
    {
      "name": "Chestnut Brown",
      "hex": "#6d1008",
      "good name": ""
    },
    {
      "name": "Chestnut Butter",
      "hex": "#bca486",
      "good name": ""
    },
    {
      "name": "Chestnut Chest",
      "hex": "#8e5637",
      "good name": ""
    },
    {
      "name": "Chestnut Gold",
      "hex": "#ab8508",
      "good name": ""
    },
    {
      "name": "Chestnut Green",
      "hex": "#2a4f21",
      "good name": ""
    },
    {
      "name": "Chestnut Leather",
      "hex": "#60281e",
      "good name": ""
    },
    {
      "name": "Chestnut Peel",
      "hex": "#6d3c32",
      "good name": ""
    },
    {
      "name": "Chestnut Plum",
      "hex": "#852e19",
      "good name": ""
    },
    {
      "name": "Chestnut Red",
      "hex": "#6c333f",
      "good name": ""
    },
    {
      "name": "Chestnut Rose",
      "hex": "#cd5252",
      "good name": ""
    },
    {
      "name": "Chestnut Shell",
      "hex": "#adff2f",
      "good name": ""
    },
    {
      "name": "Chestnut Stallion",
      "hex": "#995d3b",
      "good name": ""
    },
    {
      "name": "Chestnut White",
      "hex": "#eaf1e6",
      "good name": ""
    },
    {
      "name": "Chesty Bond",
      "hex": "#516fa0",
      "good name": ""
    },
    {
      "name": "Chetwode Blue",
      "hex": "#666fb4",
      "good name": ""
    },
    {
      "name": "Cheviot",
      "hex": "#f6f2e8",
      "good name": ""
    },
    {
      "name": "Chewing Gum",
      "hex": "#e6b0af",
      "good name": "x"
    },
    {
      "name": "Chewing Gum Pink",
      "hex": "#e292b6",
      "good name": ""
    },
    {
      "name": "Chewy Caramel",
      "hex": "#977043",
      "good name": ""
    },
    {
      "name": "Cheyenne Rock",
      "hex": "#9f918a",
      "good name": ""
    },
    {
      "name": "Chi-Gong",
      "hex": "#d52b2d",
      "good name": ""
    },
    {
      "name": "Chianti",
      "hex": "#734342",
      "good name": ""
    },
    {
      "name": "Chic Brick",
      "hex": "#a4725a",
      "good name": ""
    },
    {
      "name": "Chic Green",
      "hex": "#d8ebd6",
      "good name": ""
    },
    {
      "name": "Chic Grey",
      "hex": "#cfccc5",
      "good name": ""
    },
    {
      "name": "Chic Magnet",
      "hex": "#ede1c8",
      "good name": ""
    },
    {
      "name": "Chic Peach",
      "hex": "#f0d1c8",
      "good name": ""
    },
    {
      "name": "Chic Shade",
      "hex": "#7c9270",
      "good name": ""
    },
    {
      "name": "Chic Taupe",
      "hex": "#aa9788",
      "good name": ""
    },
    {
      "name": "Chicago",
      "hex": "#5b5d56",
      "good name": ""
    },
    {
      "name": "Chicago Blue",
      "hex": "#b6dbe9",
      "good name": ""
    },
    {
      "name": "Chicago Fog",
      "hex": "#cac2bd",
      "good name": ""
    },
    {
      "name": "Chicago Skyline",
      "hex": "#96adba",
      "good name": ""
    },
    {
      "name": "Chicha Morada",
      "hex": "#7e6072",
      "good name": ""
    },
    {
      "name": "Chick Flick",
      "hex": "#bf7d80",
      "good name": ""
    },
    {
      "name": "Chickadee",
      "hex": "#ffcf65",
      "good name": "x"
    },
    {
      "name": "Chicken Comb",
      "hex": "#dd2222",
      "good name": "x"
    },
    {
      "name": "Chicken Masala",
      "hex": "#cc8822",
      "good name": "x"
    },
    {
      "name": "Chickpea",
      "hex": "#efe7df",
      "good name": ""
    },
    {
      "name": "Chickweed",
      "hex": "#d9dfe3",
      "good name": ""
    },
    {
      "name": "Chicon",
      "hex": "#d9eeb4",
      "good name": ""
    },
    {
      "name": "Chicory",
      "hex": "#a78658",
      "good name": ""
    },
    {
      "name": "Chicory Coffee",
      "hex": "#4a342e",
      "good name": ""
    },
    {
      "name": "Chicory Flower",
      "hex": "#66789a",
      "good name": ""
    },
    {
      "name": "Chicory Green",
      "hex": "#bbab75",
      "good name": ""
    },
    {
      "name": "Chicory Root",
      "hex": "#5f423f",
      "good name": ""
    },
    {
      "name": "Chieftain",
      "hex": "#6a5637",
      "good name": ""
    },
    {
      "name": "Chiffon",
      "hex": "#f0f5bb",
      "good name": ""
    },
    {
      "name": "Chifle Yellow",
      "hex": "#dbc963",
      "good name": ""
    },
    {
      "name": "Child of Heaven",
      "hex": "#eae5c5",
      "good name": ""
    },
    {
      "name": "Child of Light",
      "hex": "#f0f4f8",
      "good name": ""
    },
    {
      "name": "Child of the Moon",
      "hex": "#c68d37",
      "good name": ""
    },
    {
      "name": "Child of the Night",
      "hex": "#220077",
      "good name": "x"
    },
    {
      "name": "Child's Play",
      "hex": "#e7bcd4",
      "good name": ""
    },
    {
      "name": "Childhood Crush",
      "hex": "#e26d68",
      "good name": ""
    },
    {
      "name": "Childish Wonder",
      "hex": "#a5a8d6",
      "good name": ""
    },
    {
      "name": "Childlike",
      "hex": "#e8c0cf",
      "good name": ""
    },
    {
      "name": "Children's Soft Blue",
      "hex": "#a1ced7",
      "good name": ""
    },
    {
      "name": "Chilean Fire",
      "hex": "#d05e34",
      "good name": ""
    },
    {
      "name": "Chilean Heath",
      "hex": "#f9f7de",
      "good name": ""
    },
    {
      "name": "Chili",
      "hex": "#be5141",
      "good name": ""
    },
    {
      "name": "Chili Con Carne",
      "hex": "#985e2b",
      "good name": "x"
    },
    {
      "name": "Chili Green",
      "hex": "#8d7040",
      "good name": ""
    },
    {
      "name": "Chili Oil",
      "hex": "#8e3c36",
      "good name": ""
    },
    {
      "name": "Chili Pepper",
      "hex": "#9b1b30",
      "good name": "x"
    },
    {
      "name": "Chili Sauce",
      "hex": "#bc4e40",
      "good name": ""
    },
    {
      "name": "Chili Soda",
      "hex": "#ca7c74",
      "good name": ""
    },
    {
      "name": "Chill in the Air",
      "hex": "#d1d5e7",
      "good name": ""
    },
    {
      "name": "Chilled Cucumber",
      "hex": "#cbcdb2",
      "good name": ""
    },
    {
      "name": "Chilled Lemonade",
      "hex": "#ffe696",
      "good name": ""
    },
    {
      "name": "Chilled Mint",
      "hex": "#e4efde",
      "good name": ""
    },
    {
      "name": "Chilled Wine",
      "hex": "#6d4052",
      "good name": ""
    },
    {
      "name": "Chilli Black Red",
      "hex": "#4b1c35",
      "good name": ""
    },
    {
      "name": "Chilli Cashew",
      "hex": "#cc5544",
      "good name": ""
    },
    {
      "name": "Chilly Blue",
      "hex": "#8aaec3",
      "good name": ""
    },
    {
      "name": "Chilly Spice",
      "hex": "#fd9989",
      "good name": ""
    },
    {
      "name": "Chilly White",
      "hex": "#e5f1ed",
      "good name": ""
    },
    {
      "name": "Chimayo Red",
      "hex": "#b16355",
      "good name": ""
    },
    {
      "name": "Chimera",
      "hex": "#74626d",
      "good name": "x"
    },
    {
      "name": "Chimera Brown",
      "hex": "#c89b75",
      "good name": ""
    },
    {
      "name": "Chimes",
      "hex": "#c7ca86",
      "good name": ""
    },
    {
      "name": "Chimney",
      "hex": "#4a5257",
      "good name": ""
    },
    {
      "name": "Chimney Sweep",
      "hex": "#272f38",
      "good name": ""
    },
    {
      "name": "Chin-Chin Cherry",
      "hex": "#dd3355",
      "good name": ""
    },
    {
      "name": "China Aster",
      "hex": "#444c60",
      "good name": ""
    },
    {
      "name": "China Blue",
      "hex": "#546477",
      "good name": ""
    },
    {
      "name": "China Cinnamon",
      "hex": "#8a7054",
      "good name": ""
    },
    {
      "name": "China Clay",
      "hex": "#718b9a",
      "good name": ""
    },
    {
      "name": "China Cup",
      "hex": "#f8f0e5",
      "good name": ""
    },
    {
      "name": "China Doll",
      "hex": "#f3e4d5",
      "good name": ""
    },
    {
      "name": "China Green Blue",
      "hex": "#3a6468",
      "good name": ""
    },
    {
      "name": "China Ivory",
      "hex": "#fbf3d3",
      "good name": ""
    },
    {
      "name": "China Light Green",
      "hex": "#bcc9c7",
      "good name": ""
    },
    {
      "name": "China Pattern",
      "hex": "#3d5c77",
      "good name": ""
    },
    {
      "name": "China Pink",
      "hex": "#df6ea1",
      "good name": ""
    },
    {
      "name": "China Red",
      "hex": "#ad2b10",
      "good name": ""
    },
    {
      "name": "China Rose",
      "hex": "#a8516e",
      "good name": ""
    },
    {
      "name": "China Seas",
      "hex": "#034f7c",
      "good name": ""
    },
    {
      "name": "China Silk",
      "hex": "#e3d1cc",
      "good name": "x"
    },
    {
      "name": "China White",
      "hex": "#eae6d9",
      "good name": ""
    },
    {
      "name": "Chinaberry",
      "hex": "#464960",
      "good name": ""
    },
    {
      "name": "Chinchilla",
      "hex": "#9c8e7b",
      "good name": ""
    },
    {
      "name": "Chinchilla Chenille",
      "hex": "#d0bba7",
      "good name": ""
    },
    {
      "name": "Chinchilla Grey",
      "hex": "#7f746e",
      "good name": ""
    },
    {
      "name": "Chinese Bellflower",
      "hex": "#4d5aaf",
      "good name": ""
    },
    {
      "name": "Chinese Black",
      "hex": "#111100",
      "good name": ""
    },
    {
      "name": "Chinese Blue",
      "hex": "#365194",
      "good name": ""
    },
    {
      "name": "Chinese Bronze",
      "hex": "#cd8032",
      "good name": ""
    },
    {
      "name": "Chinese Brown",
      "hex": "#ab381f",
      "good name": ""
    },
    {
      "name": "Chinese Cherry",
      "hex": "#f1d7cb",
      "good name": ""
    },
    {
      "name": "Chinese Dragon",
      "hex": "#cb5251",
      "good name": ""
    },
    {
      "name": "Chinese Garden",
      "hex": "#006967",
      "good name": ""
    },
    {
      "name": "Chinese Gold",
      "hex": "#ddaa00",
      "good name": ""
    },
    {
      "name": "Chinese Goldfish",
      "hex": "#f34723",
      "good name": ""
    },
    {
      "name": "Chinese Green",
      "hex": "#d0db61",
      "good name": ""
    },
    {
      "name": "Chinese Hamster",
      "hex": "#ebdbca",
      "good name": ""
    },
    {
      "name": "Chinese Ibis Brown",
      "hex": "#e09e87",
      "good name": ""
    },
    {
      "name": "Chinese Ink",
      "hex": "#3f312b",
      "good name": ""
    },
    {
      "name": "Chinese Jade",
      "hex": "#cbd1ba",
      "good name": ""
    },
    {
      "name": "Chinese Lacquer",
      "hex": "#60c7c2",
      "good name": ""
    },
    {
      "name": "Chinese Lantern",
      "hex": "#f09056",
      "good name": ""
    },
    {
      "name": "Chinese Leaf",
      "hex": "#ccd6b0",
      "good name": ""
    },
    {
      "name": "Chinese Money Plant",
      "hex": "#a4be5c",
      "good name": ""
    },
    {
      "name": "Chinese New Year",
      "hex": "#ff3366",
      "good name": "x"
    },
    {
      "name": "Chinese Night",
      "hex": "#aa381e",
      "good name": ""
    },
    {
      "name": "Chinese Orange",
      "hex": "#f37042",
      "good name": ""
    },
    {
      "name": "Chinese Pink",
      "hex": "#de70a1",
      "good name": ""
    },
    {
      "name": "Chinese Porcelain",
      "hex": "#3a5f7d",
      "good name": ""
    },
    {
      "name": "Chinese Purple",
      "hex": "#720b98",
      "good name": ""
    },
    {
      "name": "Chinese Red",
      "hex": "#cd071e",
      "good name": ""
    },
    {
      "name": "Chinese Safflower",
      "hex": "#b94047",
      "good name": ""
    },
    {
      "name": "Chinese Silver",
      "hex": "#dddcef",
      "good name": ""
    },
    {
      "name": "Chinese Tea Green",
      "hex": "#acad98",
      "good name": ""
    },
    {
      "name": "Chinese Tzu",
      "hex": "#8fbfbd",
      "good name": ""
    },
    {
      "name": "Chinese Violet",
      "hex": "#835e81",
      "good name": ""
    },
    {
      "name": "Chinese White",
      "hex": "#e2e5de",
      "good name": ""
    },
    {
      "name": "Chinese Yellow",
      "hex": "#ffb200",
      "good name": ""
    },
    {
      "name": "Chino",
      "hex": "#b8ad8a",
      "good name": ""
    },
    {
      "name": "Chino Green",
      "hex": "#d9caa5",
      "good name": ""
    },
    {
      "name": "Chinois Green",
      "hex": "#7c8c87",
      "good name": ""
    },
    {
      "name": "Chinook",
      "hex": "#9dd3a8",
      "good name": ""
    },
    {
      "name": "Chinook Salmon",
      "hex": "#c8987e",
      "good name": ""
    },
    {
      "name": "Chinotto",
      "hex": "#554747",
      "good name": "x"
    },
    {
      "name": "Chintz",
      "hex": "#d5c7b9",
      "good name": ""
    },
    {
      "name": "Chintz Rose",
      "hex": "#eec4be",
      "good name": ""
    },
    {
      "name": "Chipmunk",
      "hex": "#cfa14a",
      "good name": "x"
    },
    {
      "name": "Chipolata",
      "hex": "#aa4433",
      "good name": ""
    },
    {
      "name": "Chipotle Paste",
      "hex": "#683e3b",
      "good name": ""
    },
    {
      "name": "Chips Provencale",
      "hex": "#ddd618",
      "good name": ""
    },
    {
      "name": "Chitin Green",
      "hex": "#026b67",
      "good name": ""
    },
    {
      "name": "Chivalrous",
      "hex": "#aeb2c0",
      "good name": ""
    },
    {
      "name": "Chivalry Copper",
      "hex": "#bf784e",
      "good name": ""
    },
    {
      "name": "Chive",
      "hex": "#4a5335",
      "good name": ""
    },
    {
      "name": "Chive Bloom",
      "hex": "#4f3650",
      "good name": ""
    },
    {
      "name": "Chive Blossom",
      "hex": "#7d5d99",
      "good name": ""
    },
    {
      "name": "Chive Flower",
      "hex": "#a193bf",
      "good name": ""
    },
    {
      "name": "Chlorella Green",
      "hex": "#56ae57",
      "good name": ""
    },
    {
      "name": "Chloride",
      "hex": "#93d8c2",
      "good name": ""
    },
    {
      "name": "Chlorite",
      "hex": "#5e8e82",
      "good name": ""
    },
    {
      "name": "Chlorophyll",
      "hex": "#44891a",
      "good name": ""
    },
    {
      "name": "Chlorophyll Cream",
      "hex": "#b3d6c3",
      "good name": ""
    },
    {
      "name": "Chlorophyll Green",
      "hex": "#4aff00",
      "good name": ""
    },
    {
      "name": "Chlorosis",
      "hex": "#75876e",
      "good name": ""
    },
    {
      "name": "Choco Biscuit",
      "hex": "#b4835b",
      "good name": ""
    },
    {
      "name": "Choco Chic",
      "hex": "#993311",
      "good name": "x"
    },
    {
      "name": "Choco Death",
      "hex": "#63493e",
      "good name": ""
    },
    {
      "name": "Choco Loco",
      "hex": "#7d5f53",
      "good name": ""
    },
    {
      "name": "Chocobo Feather",
      "hex": "#f9bc08",
      "good name": ""
    },
    {
      "name": "Chocoholic",
      "hex": "#993300",
      "good name": "x"
    },
    {
      "name": "Chocolate",
      "hex": "#d2691e",
      "good name": "x"
    },
    {
      "name": "Chocolate Bar",
      "hex": "#773333",
      "good name": ""
    },
    {
      "name": "Chocolate Bells",
      "hex": "#775130",
      "good name": "x"
    },
    {
      "name": "Chocolate Bhut Jolokia",
      "hex": "#782a2e",
      "good name": ""
    },
    {
      "name": "Chocolate Brown",
      "hex": "#411900",
      "good name": ""
    },
    {
      "name": "Chocolate Caliente",
      "hex": "#765841",
      "good name": ""
    },
    {
      "name": "Chocolate Castle",
      "hex": "#452207",
      "good name": "x"
    },
    {
      "name": "Chocolate Chiffon",
      "hex": "#928178",
      "good name": ""
    },
    {
      "name": "Chocolate Chip",
      "hex": "#685a4e",
      "good name": ""
    },
    {
      "name": "Chocolate Chunk",
      "hex": "#6b574a",
      "good name": ""
    },
    {
      "name": "Chocolate Coco",
      "hex": "#644d42",
      "good name": ""
    },
    {
      "name": "Chocolate Cosmos",
      "hex": "#58111a",
      "good name": ""
    },
    {
      "name": "Chocolate Cupcake",
      "hex": "#605647",
      "good name": ""
    },
    {
      "name": "Chocolate Curl",
      "hex": "#916d5e",
      "good name": ""
    },
    {
      "name": "Chocolate Delight",
      "hex": "#96786d",
      "good name": ""
    },
    {
      "name": "Chocolate Eclair",
      "hex": "#674848",
      "good name": ""
    },
    {
      "name": "Chocolate Escape",
      "hex": "#623d2e",
      "good name": "x"
    },
    {
      "name": "Chocolate Explosion",
      "hex": "#8e473b",
      "good name": "x"
    },
    {
      "name": "Chocolate Fantasies",
      "hex": "#5c3612",
      "good name": "x"
    },
    {
      "name": "Chocolate Fondant",
      "hex": "#56352d",
      "good name": ""
    },
    {
      "name": "Chocolate Fondue",
      "hex": "#9a3001",
      "good name": ""
    },
    {
      "name": "Chocolate Froth",
      "hex": "#ded5c8",
      "good name": ""
    },
    {
      "name": "Chocolate Hazelnut",
      "hex": "#742719",
      "good name": ""
    },
    {
      "name": "Chocolate Heart",
      "hex": "#8f786c",
      "good name": ""
    },
    {
      "name": "Chocolate Kiss",
      "hex": "#3c1421",
      "good name": "x"
    },
    {
      "name": "Chocolate Lab",
      "hex": "#5c3e35",
      "good name": ""
    },
    {
      "name": "Chocolate Lust",
      "hex": "#993322",
      "good name": "x"
    },
    {
      "name": "Chocolate Magma",
      "hex": "#7a463a",
      "good name": ""
    },
    {
      "name": "Chocolate Melange",
      "hex": "#331100",
      "good name": ""
    },
    {
      "name": "Chocolate Milk",
      "hex": "#976f4c",
      "good name": ""
    },
    {
      "name": "Chocolate Moment",
      "hex": "#998069",
      "good name": ""
    },
    {
      "name": "Chocolate Oatmeal Cookie",
      "hex": "#bb5544",
      "good name": ""
    },
    {
      "name": "Chocolate Pancakes",
      "hex": "#884400",
      "good name": ""
    },
    {
      "name": "Chocolate Plum",
      "hex": "#3c2d2e",
      "good name": ""
    },
    {
      "name": "Chocolate Powder",
      "hex": "#a58c7b",
      "good name": ""
    },
    {
      "name": "Chocolate Praline",
      "hex": "#66424d",
      "good name": ""
    },
    {
      "name": "Chocolate Pretzel",
      "hex": "#60504b",
      "good name": ""
    },
    {
      "name": "Chocolate Pudding",
      "hex": "#6f6665",
      "good name": ""
    },
    {
      "name": "Chocolate Rain",
      "hex": "#714f29",
      "good name": "x"
    },
    {
      "name": "Chocolate Red",
      "hex": "#4d3635",
      "good name": ""
    },
    {
      "name": "Chocolate Ripple",
      "hex": "#76604e",
      "good name": ""
    },
    {
      "name": "Chocolate Soul",
      "hex": "#5c4945",
      "good name": ""
    },
    {
      "name": "Chocolate Sparkle",
      "hex": "#8c6c6f",
      "good name": ""
    },
    {
      "name": "Chocolate Sprinkle",
      "hex": "#6f4e43",
      "good name": ""
    },
    {
      "name": "Chocolate Stain",
      "hex": "#84563c",
      "good name": ""
    },
    {
      "name": "Chocolate Swirl",
      "hex": "#68574b",
      "good name": ""
    },
    {
      "name": "Chocolate Temptation",
      "hex": "#956e5f",
      "good name": "x"
    },
    {
      "name": "Chocolate Therapy",
      "hex": "#5f4940",
      "good name": ""
    },
    {
      "name": "Chocolate Torte",
      "hex": "#382e2d",
      "good name": ""
    },
    {
      "name": "Chocolate Truffle",
      "hex": "#612e35",
      "good name": "x"
    },
    {
      "name": "Chocolate Velvet",
      "hex": "#7f7453",
      "good name": "x"
    },
    {
      "name": "Choice Cream",
      "hex": "#f2e1d1",
      "good name": ""
    },
    {
      "name": "Chōjicha Brown",
      "hex": "#8f583c",
      "good name": ""
    },
    {
      "name": "Chokecherry",
      "hex": "#92000a",
      "good name": ""
    },
    {
      "name": "Choo Choo",
      "hex": "#867578",
      "good name": ""
    },
    {
      "name": "Chopped Chive",
      "hex": "#336b4b",
      "good name": ""
    },
    {
      "name": "Chopped Dill",
      "hex": "#b6c2a1",
      "good name": ""
    },
    {
      "name": "Chopsticks",
      "hex": "#e0d1b8",
      "good name": ""
    },
    {
      "name": "Choral Singer",
      "hex": "#b77795",
      "good name": ""
    },
    {
      "name": "Chorizo",
      "hex": "#aa0011",
      "good name": "x"
    },
    {
      "name": "Chōshun Red",
      "hex": "#b95754",
      "good name": ""
    },
    {
      "name": "Chowder Bowl",
      "hex": "#e5d2b2",
      "good name": ""
    },
    {
      "name": "Christalle",
      "hex": "#382161",
      "good name": ""
    },
    {
      "name": "Christi",
      "hex": "#71a91d",
      "good name": ""
    },
    {
      "name": "Christina Brown",
      "hex": "#009094",
      "good name": ""
    },
    {
      "name": "Christmas Blue",
      "hex": "#2a8fbd",
      "good name": ""
    },
    {
      "name": "Christmas Brown",
      "hex": "#5d2b2c",
      "good name": ""
    },
    {
      "name": "Christmas Gold",
      "hex": "#caa906",
      "good name": ""
    },
    {
      "name": "Christmas Green",
      "hex": "#3c8d0d",
      "good name": ""
    },
    {
      "name": "Christmas Holly",
      "hex": "#68846a",
      "good name": ""
    },
    {
      "name": "Christmas Ivy",
      "hex": "#477266",
      "good name": ""
    },
    {
      "name": "Christmas Orange",
      "hex": "#d56c2b",
      "good name": ""
    },
    {
      "name": "Christmas Ornament",
      "hex": "#6e5a49",
      "good name": ""
    },
    {
      "name": "Christmas Pink",
      "hex": "#e34285",
      "good name": ""
    },
    {
      "name": "Christmas Purple",
      "hex": "#4d084b",
      "good name": ""
    },
    {
      "name": "Christmas Red",
      "hex": "#b01b2e",
      "good name": "x"
    },
    {
      "name": "Christmas Rose",
      "hex": "#ffddbb",
      "good name": ""
    },
    {
      "name": "Christmas Silver",
      "hex": "#e1dfe0",
      "good name": ""
    },
    {
      "name": "Christobel",
      "hex": "#d4c5ba",
      "good name": ""
    },
    {
      "name": "Christy's Smile",
      "hex": "#f6bbca",
      "good name": ""
    },
    {
      "name": "Chromaphobic Black",
      "hex": "#292929",
      "good name": ""
    },
    {
      "name": "Chrome Aluminum",
      "hex": "#a8a9ad",
      "good name": ""
    },
    {
      "name": "Chrome Chalice",
      "hex": "#cdc8d2",
      "good name": ""
    },
    {
      "name": "Chrome White",
      "hex": "#cac7b7",
      "good name": "x"
    },
    {
      "name": "Chrome Yellow",
      "hex": "#ffa700",
      "good name": ""
    },
    {
      "name": "Chromis Damsel Blue",
      "hex": "#82cafc",
      "good name": ""
    },
    {
      "name": "Chromophobia Green",
      "hex": "#06b48b",
      "good name": ""
    },
    {
      "name": "Chronicle",
      "hex": "#3e4265",
      "good name": ""
    },
    {
      "name": "Chronus Blue",
      "hex": "#72a8d1",
      "good name": ""
    },
    {
      "name": "Chrysanthemum",
      "hex": "#be454f",
      "good name": ""
    },
    {
      "name": "Chrysanthemum Leaf",
      "hex": "#9db8ab",
      "good name": ""
    },
    {
      "name": "Chrysocolla Dark Green",
      "hex": "#004f39",
      "good name": ""
    },
    {
      "name": "Chrysocolla Green",
      "hex": "#378661",
      "good name": ""
    },
    {
      "name": "Chrysocolla Medium Green",
      "hex": "#006b57",
      "good name": ""
    },
    {
      "name": "Chrysolite",
      "hex": "#8e9849",
      "good name": ""
    },
    {
      "name": "Chrysomela Goettingensis",
      "hex": "#39334a",
      "good name": ""
    },
    {
      "name": "Chrysopal Light Green",
      "hex": "#8fb2a3",
      "good name": ""
    },
    {
      "name": "Chrysoprase",
      "hex": "#adba98",
      "good name": ""
    },
    {
      "name": "Chuckles",
      "hex": "#bf413a",
      "good name": ""
    },
    {
      "name": "Chuff Blue",
      "hex": "#91c1c6",
      "good name": ""
    },
    {
      "name": "Chun-Li Blue",
      "hex": "#1559db",
      "good name": ""
    },
    {
      "name": "Chunky Bee",
      "hex": "#ffc84b",
      "good name": ""
    },
    {
      "name": "Chupacabra Grey",
      "hex": "#cfcdcf",
      "good name": ""
    },
    {
      "name": "Church Blue",
      "hex": "#3d4161",
      "good name": ""
    },
    {
      "name": "Church Mouse",
      "hex": "#b3b5af",
      "good name": ""
    },
    {
      "name": "Churchill",
      "hex": "#4d4d58",
      "good name": ""
    },
    {
      "name": "Chutney",
      "hex": "#98594b",
      "good name": "x"
    },
    {
      "name": "Chutney Brown",
      "hex": "#a97765",
      "good name": ""
    },
    {
      "name": "Chyornyi Black",
      "hex": "#0f0809",
      "good name": ""
    },
    {
      "name": "Cider Mill",
      "hex": "#938a43",
      "good name": ""
    },
    {
      "name": "Cider Pear Green",
      "hex": "#8a946f",
      "good name": ""
    },
    {
      "name": "Cider Spice",
      "hex": "#ae8167",
      "good name": ""
    },
    {
      "name": "Cider Toddy",
      "hex": "#b98033",
      "good name": ""
    },
    {
      "name": "Cider Yellow",
      "hex": "#e7d6af",
      "good name": ""
    },
    {
      "name": "Cielo",
      "hex": "#a5cee8",
      "good name": ""
    },
    {
      "name": "Cigar",
      "hex": "#7d4e38",
      "good name": "x"
    },
    {
      "name": "Cigar Box",
      "hex": "#9c7351",
      "good name": ""
    },
    {
      "name": "Cigar Smoke",
      "hex": "#78857a",
      "good name": ""
    },
    {
      "name": "Cigarette Glow",
      "hex": "#ee5500",
      "good name": "x"
    },
    {
      "name": "Cilantro",
      "hex": "#43544b",
      "good name": ""
    },
    {
      "name": "Cilantro Cream",
      "hex": "#cecbae",
      "good name": ""
    },
    {
      "name": "Cimarron",
      "hex": "#6b3d38",
      "good name": ""
    },
    {
      "name": "Cinder",
      "hex": "#242a2e",
      "good name": "x"
    },
    {
      "name": "Cinderella",
      "hex": "#fbd7cc",
      "good name": "x"
    },
    {
      "name": "Cinderella Pink",
      "hex": "#ffc6c4",
      "good name": ""
    },
    {
      "name": "Cinema Screen",
      "hex": "#95878e",
      "good name": ""
    },
    {
      "name": "Cinereous",
      "hex": "#98817b",
      "good name": ""
    },
    {
      "name": "Cinnabar",
      "hex": "#730113",
      "good name": ""
    },
    {
      "name": "Cinnabark",
      "hex": "#634d45",
      "good name": ""
    },
    {
      "name": "Cinnamon",
      "hex": "#d26911",
      "good name": "x"
    },
    {
      "name": "Cinnamon Brandy",
      "hex": "#cf8d6c",
      "good name": ""
    },
    {
      "name": "Cinnamon Brown",
      "hex": "#9e6a19",
      "good name": ""
    },
    {
      "name": "Cinnamon Bun",
      "hex": "#ac4f06",
      "good name": ""
    },
    {
      "name": "Cinnamon Cake",
      "hex": "#e8ddcf",
      "good name": ""
    },
    {
      "name": "Cinnamon Candle",
      "hex": "#b15d63",
      "good name": ""
    },
    {
      "name": "Cinnamon Cherry",
      "hex": "#794344",
      "good name": ""
    },
    {
      "name": "Cinnamon Cocoa",
      "hex": "#d1a79c",
      "good name": ""
    },
    {
      "name": "Cinnamon Crumble",
      "hex": "#705742",
      "good name": ""
    },
    {
      "name": "Cinnamon Crunch",
      "hex": "#a37d5a",
      "good name": ""
    },
    {
      "name": "Cinnamon Diamonds",
      "hex": "#a97673",
      "good name": ""
    },
    {
      "name": "Cinnamon Frost",
      "hex": "#d3b191",
      "good name": ""
    },
    {
      "name": "Cinnamon Ice",
      "hex": "#dbbba7",
      "good name": ""
    },
    {
      "name": "Cinnamon Milk",
      "hex": "#ebdab5",
      "good name": ""
    },
    {
      "name": "Cinnamon Roast",
      "hex": "#bb9988",
      "good name": ""
    },
    {
      "name": "Cinnamon Roll",
      "hex": "#c0737a",
      "good name": ""
    },
    {
      "name": "Cinnamon Sand",
      "hex": "#b78153",
      "good name": ""
    },
    {
      "name": "Cinnamon Satin",
      "hex": "#cd607e",
      "good name": ""
    },
    {
      "name": "Cinnamon Spice",
      "hex": "#935f43",
      "good name": ""
    },
    {
      "name": "Cinnamon Stick",
      "hex": "#9b4722",
      "good name": ""
    },
    {
      "name": "Cinnamon Stone",
      "hex": "#c9543a",
      "good name": ""
    },
    {
      "name": "Cinnamon Tea",
      "hex": "#dec0ad",
      "good name": ""
    },
    {
      "name": "Cinnamon Toast",
      "hex": "#8d7d77",
      "good name": ""
    },
    {
      "name": "Cinnamon Twist",
      "hex": "#9f7250",
      "good name": ""
    },
    {
      "name": "Cinnamon Whip",
      "hex": "#dab2a4",
      "good name": ""
    },
    {
      "name": "Cinnapink",
      "hex": "#a6646f",
      "good name": ""
    },
    {
      "name": "Cinque Foil",
      "hex": "#ffff88",
      "good name": ""
    },
    {
      "name": "Cioccolato",
      "hex": "#5d3b2e",
      "good name": ""
    },
    {
      "name": "Cipher",
      "hex": "#aa7691",
      "good name": ""
    },
    {
      "name": "Cipollino",
      "hex": "#c8cec3",
      "good name": ""
    },
    {
      "name": "Circumorbital Ring",
      "hex": "#6258c4",
      "good name": ""
    },
    {
      "name": "Circus",
      "hex": "#fc5e30",
      "good name": ""
    },
    {
      "name": "Circus Peanut",
      "hex": "#ad835c",
      "good name": ""
    },
    {
      "name": "Circus Red",
      "hex": "#954a4c",
      "good name": ""
    },
    {
      "name": "Cistern",
      "hex": "#a9b0b6",
      "good name": ""
    },
    {
      "name": "Citadel",
      "hex": "#748995",
      "good name": "x"
    },
    {
      "name": "Citadel Blue",
      "hex": "#9eabad",
      "good name": ""
    },
    {
      "name": "Citrine",
      "hex": "#e4d00a",
      "good name": ""
    },
    {
      "name": "Citrine Brown",
      "hex": "#933709",
      "good name": ""
    },
    {
      "name": "Citrine White",
      "hex": "#faf7d6",
      "good name": ""
    },
    {
      "name": "Citrino",
      "hex": "#e9e89b",
      "good name": ""
    },
    {
      "name": "Citron",
      "hex": "#d5c757",
      "good name": ""
    },
    {
      "name": "Citron Goby",
      "hex": "#deff00",
      "good name": ""
    },
    {
      "name": "Citronella",
      "hex": "#66bb77",
      "good name": ""
    },
    {
      "name": "Citronelle",
      "hex": "#b8af23",
      "good name": ""
    },
    {
      "name": "Citronette",
      "hex": "#c4aa27",
      "good name": ""
    },
    {
      "name": "Citronne",
      "hex": "#cd9c2b",
      "good name": ""
    },
    {
      "name": "Citrus",
      "hex": "#9fb70a",
      "good name": "x"
    },
    {
      "name": "Citrus Blast",
      "hex": "#e1793a",
      "good name": ""
    },
    {
      "name": "Citrus Butter",
      "hex": "#e4de8e",
      "good name": ""
    },
    {
      "name": "Citrus Delight",
      "hex": "#d0d557",
      "good name": ""
    },
    {
      "name": "Citrus Hill",
      "hex": "#f9a78d",
      "good name": ""
    },
    {
      "name": "Citrus Honey",
      "hex": "#f6b96b",
      "good name": ""
    },
    {
      "name": "Citrus Leaf",
      "hex": "#b3d157",
      "good name": ""
    },
    {
      "name": "Citrus Lime",
      "hex": "#c3dc68",
      "good name": ""
    },
    {
      "name": "Citrus Mist",
      "hex": "#f7edde",
      "good name": ""
    },
    {
      "name": "Citrus Notes",
      "hex": "#d26643",
      "good name": ""
    },
    {
      "name": "Citrus Peel",
      "hex": "#b7bb6b",
      "good name": ""
    },
    {
      "name": "Citrus Punch",
      "hex": "#fdea83",
      "good name": ""
    },
    {
      "name": "Citrus Sachet",
      "hex": "#f2c6a7",
      "good name": ""
    },
    {
      "name": "Citrus Spice",
      "hex": "#e2cd52",
      "good name": ""
    },
    {
      "name": "Citrus Splash",
      "hex": "#ffc400",
      "good name": ""
    },
    {
      "name": "Citrus Sugar",
      "hex": "#e6d943",
      "good name": ""
    },
    {
      "name": "Citrus Yellow",
      "hex": "#d7c275",
      "good name": ""
    },
    {
      "name": "Citrus Zest",
      "hex": "#edc85a",
      "good name": ""
    },
    {
      "name": "City Bench",
      "hex": "#675c49",
      "good name": ""
    },
    {
      "name": "City Brume",
      "hex": "#e0e0dc",
      "good name": ""
    },
    {
      "name": "City Dweller",
      "hex": "#c0b9ac",
      "good name": "x"
    },
    {
      "name": "City Hunter Blue",
      "hex": "#0022aa",
      "good name": ""
    },
    {
      "name": "City Lights",
      "hex": "#dfe6ea",
      "good name": ""
    },
    {
      "name": "City Loft",
      "hex": "#a79b8a",
      "good name": ""
    },
    {
      "name": "City of Bridges",
      "hex": "#b3ada4",
      "good name": ""
    },
    {
      "name": "City of Diamonds",
      "hex": "#fae6cb",
      "good name": ""
    },
    {
      "name": "City of Pink Angels",
      "hex": "#e6b4a6",
      "good name": ""
    },
    {
      "name": "City Rain",
      "hex": "#525c61",
      "good name": ""
    },
    {
      "name": "City Roast",
      "hex": "#663333",
      "good name": ""
    },
    {
      "name": "City Street",
      "hex": "#bab2ab",
      "good name": ""
    },
    {
      "name": "City Sunrise",
      "hex": "#d1a67d",
      "good name": ""
    },
    {
      "name": "City Tower",
      "hex": "#aeaba5",
      "good name": ""
    },
    {
      "name": "Cityscape",
      "hex": "#dae3e7",
      "good name": ""
    },
    {
      "name": "Civara",
      "hex": "#c56138",
      "good name": ""
    },
    {
      "name": "Clair De Lune",
      "hex": "#dbe9df",
      "good name": ""
    },
    {
      "name": "Clairvoyance",
      "hex": "#838493",
      "good name": ""
    },
    {
      "name": "Clairvoyant",
      "hex": "#480656",
      "good name": "x"
    },
    {
      "name": "Clam",
      "hex": "#dad1c0",
      "good name": ""
    },
    {
      "name": "Clam Chowder",
      "hex": "#f4d9af",
      "good name": ""
    },
    {
      "name": "Clam Shell",
      "hex": "#d2b3a9",
      "good name": ""
    },
    {
      "name": "Clam Up",
      "hex": "#ebdbc1",
      "good name": ""
    },
    {
      "name": "Clambake",
      "hex": "#e0d1bb",
      "good name": ""
    },
    {
      "name": "Clamshell",
      "hex": "#edd0b6",
      "good name": ""
    },
    {
      "name": "Claret",
      "hex": "#680018",
      "good name": ""
    },
    {
      "name": "Claret Red",
      "hex": "#c84c61",
      "good name": ""
    },
    {
      "name": "Clarified Butter",
      "hex": "#e69c23",
      "good name": ""
    },
    {
      "name": "Clarified Orange",
      "hex": "#fea15b",
      "good name": ""
    },
    {
      "name": "Clarinet",
      "hex": "#002255",
      "good name": ""
    },
    {
      "name": "Clarity",
      "hex": "#eaf0e0",
      "good name": ""
    },
    {
      "name": "Clary",
      "hex": "#684976",
      "good name": ""
    },
    {
      "name": "Clary Sage",
      "hex": "#c7c0ce",
      "good name": ""
    },
    {
      "name": "Classic",
      "hex": "#bbaaa1",
      "good name": ""
    },
    {
      "name": "Classic Avocado",
      "hex": "#6e7042",
      "good name": ""
    },
    {
      "name": "Classic Berry",
      "hex": "#7c5261",
      "good name": ""
    },
    {
      "name": "Classic Blue",
      "hex": "#0f4c81",
      "good name": ""
    },
    {
      "name": "Classic Bouquet",
      "hex": "#a38bbf",
      "good name": ""
    },
    {
      "name": "Classic Bronze",
      "hex": "#6d624e",
      "good name": ""
    },
    {
      "name": "Classic Brown",
      "hex": "#6a493d",
      "good name": ""
    },
    {
      "name": "Classic Calm",
      "hex": "#6b8885",
      "good name": ""
    },
    {
      "name": "Classic Chalk",
      "hex": "#f4f4f0",
      "good name": ""
    },
    {
      "name": "Classic Cherry",
      "hex": "#974146",
      "good name": ""
    },
    {
      "name": "Classic Cloud",
      "hex": "#9197a3",
      "good name": ""
    },
    {
      "name": "Classic Cool",
      "hex": "#b7b2ac",
      "good name": ""
    },
    {
      "name": "Classic French Grey",
      "hex": "#888782",
      "good name": ""
    },
    {
      "name": "Classic Gold",
      "hex": "#c9a367",
      "good name": ""
    },
    {
      "name": "Classic Green",
      "hex": "#39a845",
      "good name": ""
    },
    {
      "name": "Classic Ivory",
      "hex": "#f2e0c3",
      "good name": ""
    },
    {
      "name": "Classic Light Buff",
      "hex": "#f0eadc",
      "good name": ""
    },
    {
      "name": "Classic Olive",
      "hex": "#685e3f",
      "good name": ""
    },
    {
      "name": "Classic Rose",
      "hex": "#fbcce7",
      "good name": ""
    },
    {
      "name": "Classic Sand",
      "hex": "#d6bcaa",
      "good name": ""
    },
    {
      "name": "Classic Silver",
      "hex": "#b9b9b4",
      "good name": ""
    },
    {
      "name": "Classic Taupe",
      "hex": "#d3bca4",
      "good name": ""
    },
    {
      "name": "Classic Terra",
      "hex": "#e4ceae",
      "good name": ""
    },
    {
      "name": "Classic Waltz",
      "hex": "#71588d",
      "good name": ""
    },
    {
      "name": "Classical Gold",
      "hex": "#ebb875",
      "good name": ""
    },
    {
      "name": "Classical White",
      "hex": "#ece1cb",
      "good name": ""
    },
    {
      "name": "Classical Yellow",
      "hex": "#f8d492",
      "good name": ""
    },
    {
      "name": "Classy",
      "hex": "#aeacad",
      "good name": ""
    },
    {
      "name": "Classy Mauve",
      "hex": "#bb99aa",
      "good name": "x"
    },
    {
      "name": "Classy Plum",
      "hex": "#887e82",
      "good name": ""
    },
    {
      "name": "Classy Red",
      "hex": "#911f21",
      "good name": ""
    },
    {
      "name": "Clay",
      "hex": "#b66a50",
      "good name": "x"
    },
    {
      "name": "Clay Ash",
      "hex": "#bdc8b3",
      "good name": ""
    },
    {
      "name": "Clay Bake",
      "hex": "#e1c68f",
      "good name": ""
    },
    {
      "name": "Clay Bath",
      "hex": "#8a7d69",
      "good name": ""
    },
    {
      "name": "Clay Beige",
      "hex": "#d5d1c3",
      "good name": ""
    },
    {
      "name": "Clay Brown",
      "hex": "#b2713d",
      "good name": ""
    },
    {
      "name": "Clay Court",
      "hex": "#a9765d",
      "good name": ""
    },
    {
      "name": "Clay Creek",
      "hex": "#897e59",
      "good name": ""
    },
    {
      "name": "Clay Dust",
      "hex": "#f8dca3",
      "good name": ""
    },
    {
      "name": "Clay Fire",
      "hex": "#d8a686",
      "good name": ""
    },
    {
      "name": "Clay Ground",
      "hex": "#bd856c",
      "good name": ""
    },
    {
      "name": "Clay Mug",
      "hex": "#d37959",
      "good name": ""
    },
    {
      "name": "Clay Ochre",
      "hex": "#ae895d",
      "good name": ""
    },
    {
      "name": "Clay Pebble",
      "hex": "#bdb298",
      "good name": ""
    },
    {
      "name": "Clay Pipe",
      "hex": "#d9c8b7",
      "good name": ""
    },
    {
      "name": "Clay Play",
      "hex": "#774433",
      "good name": ""
    },
    {
      "name": "Clay Pot",
      "hex": "#c3663f",
      "good name": ""
    },
    {
      "name": "Clay Red",
      "hex": "#af604d",
      "good name": ""
    },
    {
      "name": "Clay Ridge",
      "hex": "#956a66",
      "good name": ""
    },
    {
      "name": "Clay Slate Wacke",
      "hex": "#cdcace",
      "good name": ""
    },
    {
      "name": "Clay Terrace",
      "hex": "#d4823c",
      "good name": ""
    },
    {
      "name": "Clayton",
      "hex": "#83756c",
      "good name": ""
    },
    {
      "name": "Clean Air",
      "hex": "#d8ddb6",
      "good name": ""
    },
    {
      "name": "Clean Canvas",
      "hex": "#f6e9d3",
      "good name": ""
    },
    {
      "name": "Clean Green",
      "hex": "#8fe0c6",
      "good name": ""
    },
    {
      "name": "Clean N Crisp",
      "hex": "#d0e798",
      "good name": ""
    },
    {
      "name": "Clean Slate",
      "hex": "#577396",
      "good name": ""
    },
    {
      "name": "Clear Aqua",
      "hex": "#c4eae0",
      "good name": ""
    },
    {
      "name": "Clear Blue",
      "hex": "#247afd",
      "good name": ""
    },
    {
      "name": "Clear Brook",
      "hex": "#60949b",
      "good name": ""
    },
    {
      "name": "Clear Calamine",
      "hex": "#f6e6e4",
      "good name": ""
    },
    {
      "name": "Clear Camouflage Green",
      "hex": "#dae8e1",
      "good name": ""
    },
    {
      "name": "Clear Chill",
      "hex": "#1e90ff",
      "good name": ""
    },
    {
      "name": "Clear Cinnamon",
      "hex": "#dfdbd8",
      "good name": ""
    },
    {
      "name": "Clear Concrete",
      "hex": "#bab6b2",
      "good name": ""
    },
    {
      "name": "Clear Day",
      "hex": "#dfefea",
      "good name": ""
    },
    {
      "name": "Clear Green",
      "hex": "#12732b",
      "good name": ""
    },
    {
      "name": "Clear Lake Trail",
      "hex": "#a3bbda",
      "good name": ""
    },
    {
      "name": "Clear Mauve",
      "hex": "#766cb0",
      "good name": ""
    },
    {
      "name": "Clear Moon",
      "hex": "#faf6ea",
      "good name": ""
    },
    {
      "name": "Clear Orange",
      "hex": "#ee8800",
      "good name": ""
    },
    {
      "name": "Clear Plum",
      "hex": "#64005e",
      "good name": ""
    },
    {
      "name": "Clear Pond",
      "hex": "#b4cccb",
      "good name": ""
    },
    {
      "name": "Clear Purple",
      "hex": "#412a7a",
      "good name": ""
    },
    {
      "name": "Clear Red",
      "hex": "#ce261c",
      "good name": ""
    },
    {
      "name": "Clear Sand",
      "hex": "#eae7da",
      "good name": ""
    },
    {
      "name": "Clear Skies",
      "hex": "#e8f7fd",
      "good name": ""
    },
    {
      "name": "Clear Turquoise",
      "hex": "#008a81",
      "good name": ""
    },
    {
      "name": "Clear View",
      "hex": "#e2eae7",
      "good name": ""
    },
    {
      "name": "Clear Viridian",
      "hex": "#367588",
      "good name": ""
    },
    {
      "name": "Clear Vision",
      "hex": "#e7f0f7",
      "good name": ""
    },
    {
      "name": "Clear Vista",
      "hex": "#a3bec4",
      "good name": ""
    },
    {
      "name": "Clear Water",
      "hex": "#aad5db",
      "good name": "x"
    },
    {
      "name": "Clear Weather",
      "hex": "#66bbdd",
      "good name": ""
    },
    {
      "name": "Clear Yellow",
      "hex": "#f1f1e6",
      "good name": ""
    },
    {
      "name": "Clearly Aqua",
      "hex": "#cee1d4",
      "good name": ""
    },
    {
      "name": "Clearview",
      "hex": "#fbfbe5",
      "good name": ""
    },
    {
      "name": "Clematis",
      "hex": "#7e6596",
      "good name": ""
    },
    {
      "name": "Clematis Blue",
      "hex": "#363b7c",
      "good name": ""
    },
    {
      "name": "Clematis Green",
      "hex": "#98b652",
      "good name": ""
    },
    {
      "name": "Clematis Magenta",
      "hex": "#e05aec",
      "good name": ""
    },
    {
      "name": "Clementine",
      "hex": "#e96e00",
      "good name": "x"
    },
    {
      "name": "Clementine Earring",
      "hex": "#ff9d0a",
      "good name": ""
    },
    {
      "name": "Clementine Jelly",
      "hex": "#ffad01",
      "good name": ""
    },
    {
      "name": "Cleo's Bath",
      "hex": "#00507f",
      "good name": ""
    },
    {
      "name": "Cleopatra",
      "hex": "#007590",
      "good name": ""
    },
    {
      "name": "Cleopatra's Gown",
      "hex": "#795088",
      "good name": ""
    },
    {
      "name": "Clichy White",
      "hex": "#f6ebee",
      "good name": ""
    },
    {
      "name": "Cliff Brown",
      "hex": "#d0ab8c",
      "good name": ""
    },
    {
      "name": "Cliff Ridge",
      "hex": "#c5ae80",
      "good name": ""
    },
    {
      "name": "Cliff Rock",
      "hex": "#b19475",
      "good name": ""
    },
    {
      "name": "Cliff Swallow",
      "hex": "#ecddd4",
      "good name": ""
    },
    {
      "name": "Cliff's View",
      "hex": "#ddc5aa",
      "good name": ""
    },
    {
      "name": "Cliffside Park",
      "hex": "#6f8165",
      "good name": ""
    },
    {
      "name": "Climate Change",
      "hex": "#e5e1cd",
      "good name": ""
    },
    {
      "name": "Climate Control",
      "hex": "#466082",
      "good name": ""
    },
    {
      "name": "Climbing Ivy",
      "hex": "#58714a",
      "good name": ""
    },
    {
      "name": "Clinical Soft Blue",
      "hex": "#b2cfd3",
      "good name": ""
    },
    {
      "name": "Clinker",
      "hex": "#463623",
      "good name": ""
    },
    {
      "name": "Clinker Red",
      "hex": "#663145",
      "good name": ""
    },
    {
      "name": "Clipped Grass",
      "hex": "#a1b841",
      "good name": ""
    },
    {
      "name": "Clippership Twill",
      "hex": "#a6937d",
      "good name": ""
    },
    {
      "name": "Cloak and Dagger",
      "hex": "#550055",
      "good name": "x"
    },
    {
      "name": "Cloak Grey",
      "hex": "#605e63",
      "good name": "x"
    },
    {
      "name": "Clock Chimes Thirteen",
      "hex": "#002211",
      "good name": ""
    },
    {
      "name": "Clockworks",
      "hex": "#72573d",
      "good name": ""
    },
    {
      "name": "Cloisonne",
      "hex": "#0075af",
      "good name": ""
    },
    {
      "name": "Cloisonne Blue",
      "hex": "#84a1ad",
      "good name": ""
    },
    {
      "name": "Cloistered Garden",
      "hex": "#99b090",
      "good name": ""
    },
    {
      "name": "Clooney",
      "hex": "#5f6c84",
      "good name": ""
    },
    {
      "name": "Close Knit",
      "hex": "#d5d6cf",
      "good name": ""
    },
    {
      "name": "Closed Shutter",
      "hex": "#25252c",
      "good name": ""
    },
    {
      "name": "Clotted Cream",
      "hex": "#f3efcd",
      "good name": "x"
    },
    {
      "name": "Clotted Red",
      "hex": "#991115",
      "good name": ""
    },
    {
      "name": "Cloud Abyss",
      "hex": "#dfe7eb",
      "good name": ""
    },
    {
      "name": "Cloud Blue",
      "hex": "#a2b6b9",
      "good name": ""
    },
    {
      "name": "Cloud Break",
      "hex": "#f6f1fe",
      "good name": "x"
    },
    {
      "name": "Cloud Burst",
      "hex": "#899c96",
      "good name": ""
    },
    {
      "name": "Cloud Cream",
      "hex": "#e6ddc5",
      "good name": ""
    },
    {
      "name": "Cloud Dancer",
      "hex": "#f0eee9",
      "good name": "x"
    },
    {
      "name": "Cloud Grey",
      "hex": "#b8a9af",
      "good name": ""
    },
    {
      "name": "Cloud Nine",
      "hex": "#e9e0db",
      "good name": ""
    },
    {
      "name": "Cloud Number Nine",
      "hex": "#f9cec6",
      "good name": ""
    },
    {
      "name": "Cloud Over London",
      "hex": "#c2bcb1",
      "good name": ""
    },
    {
      "name": "Cloud Pink",
      "hex": "#f5d1c8",
      "good name": ""
    },
    {
      "name": "Cloud White",
      "hex": "#f2f2ed",
      "good name": ""
    },
    {
      "name": "Cloudberry",
      "hex": "#ffa168",
      "good name": ""
    },
    {
      "name": "Cloudburst",
      "hex": "#837f7f",
      "good name": ""
    },
    {
      "name": "Clouded Blue",
      "hex": "#1f75fe",
      "good name": ""
    },
    {
      "name": "Clouded Sky",
      "hex": "#7d93a2",
      "good name": ""
    },
    {
      "name": "Clouded Vision",
      "hex": "#d1d0d1",
      "good name": ""
    },
    {
      "name": "Cloudless",
      "hex": "#d6eafc",
      "good name": "x"
    },
    {
      "name": "Cloudless Day",
      "hex": "#9ab1bf",
      "good name": ""
    },
    {
      "name": "Cloudy",
      "hex": "#d8d7d3",
      "good name": ""
    },
    {
      "name": "Cloudy Blue",
      "hex": "#acc2d9",
      "good name": ""
    },
    {
      "name": "Cloudy Camouflage",
      "hex": "#177245",
      "good name": ""
    },
    {
      "name": "Cloudy Carrot",
      "hex": "#ffa812",
      "good name": ""
    },
    {
      "name": "Cloudy Cinnamon",
      "hex": "#87715f",
      "good name": ""
    },
    {
      "name": "Cloudy Day",
      "hex": "#dfe6da",
      "good name": ""
    },
    {
      "name": "Cloudy Desert",
      "hex": "#b0a99f",
      "good name": ""
    },
    {
      "name": "Cloudy Grey",
      "hex": "#ece3e1",
      "good name": ""
    },
    {
      "name": "Cloudy Plum",
      "hex": "#9d7aac",
      "good name": ""
    },
    {
      "name": "Cloudy Sea",
      "hex": "#6699aa",
      "good name": ""
    },
    {
      "name": "Cloudy Sky",
      "hex": "#c2d5da",
      "good name": ""
    },
    {
      "name": "Cloudy Today",
      "hex": "#a6a096",
      "good name": ""
    },
    {
      "name": "Cloudy Viridian",
      "hex": "#4b5f56",
      "good name": ""
    },
    {
      "name": "Clove",
      "hex": "#876155",
      "good name": ""
    },
    {
      "name": "Clove Brown",
      "hex": "#766051",
      "good name": ""
    },
    {
      "name": "Clove Dye",
      "hex": "#a96232",
      "good name": ""
    },
    {
      "name": "Clove Yellow Brown",
      "hex": "#523f21",
      "good name": ""
    },
    {
      "name": "Clovedust",
      "hex": "#b0705d",
      "good name": ""
    },
    {
      "name": "Clover",
      "hex": "#008f00",
      "good name": "x"
    },
    {
      "name": "Clover Brook",
      "hex": "#1c6a53",
      "good name": ""
    },
    {
      "name": "Clover Green",
      "hex": "#006c44",
      "good name": ""
    },
    {
      "name": "Clover Honey",
      "hex": "#f0e2bc",
      "good name": ""
    },
    {
      "name": "Clover Mist",
      "hex": "#6fc288",
      "good name": ""
    },
    {
      "name": "Clover Patch",
      "hex": "#4a9d5b",
      "good name": ""
    },
    {
      "name": "Clover Pink",
      "hex": "#cd9bc4",
      "good name": ""
    },
    {
      "name": "Clown Green",
      "hex": "#c4d056",
      "good name": ""
    },
    {
      "name": "Clown Nose",
      "hex": "#e94257",
      "good name": ""
    },
    {
      "name": "Club Cruise",
      "hex": "#8bc3e1",
      "good name": ""
    },
    {
      "name": "Club Grey",
      "hex": "#464159",
      "good name": ""
    },
    {
      "name": "Club Mauve",
      "hex": "#834370",
      "good name": ""
    },
    {
      "name": "Club Moss",
      "hex": "#6b977a",
      "good name": ""
    },
    {
      "name": "Club Navy",
      "hex": "#3e4a54",
      "good name": ""
    },
    {
      "name": "Club Soda",
      "hex": "#e2edeb",
      "good name": ""
    },
    {
      "name": "Club-Mate",
      "hex": "#f8de7e",
      "good name": ""
    },
    {
      "name": "Cluedo Night",
      "hex": "#2b245a",
      "good name": ""
    },
    {
      "name": "Clumsy Caramel",
      "hex": "#d3b683",
      "good name": ""
    },
    {
      "name": "Clytemnestra",
      "hex": "#e8e2e0",
      "good name": ""
    },
    {
      "name": "Co Pilot",
      "hex": "#4978a9",
      "good name": ""
    },
    {
      "name": "CO₂",
      "hex": "#cadfec",
      "good name": ""
    },
    {
      "name": "Coach Green",
      "hex": "#003527",
      "good name": ""
    },
    {
      "name": "Coal Mine",
      "hex": "#54555d",
      "good name": ""
    },
    {
      "name": "Coal Miner",
      "hex": "#777872",
      "good name": ""
    },
    {
      "name": "Coalmine",
      "hex": "#220033",
      "good name": "x"
    },
    {
      "name": "Coarse Wool",
      "hex": "#181b26",
      "good name": ""
    },
    {
      "name": "Coast Cream",
      "hex": "#f6e6db",
      "good name": ""
    },
    {
      "name": "Coastal Beige",
      "hex": "#f0ebd9",
      "good name": ""
    },
    {
      "name": "Coastal Breeze",
      "hex": "#e0f6fb",
      "good name": ""
    },
    {
      "name": "Coastal Calm",
      "hex": "#538f94",
      "good name": ""
    },
    {
      "name": "Coastal Crush",
      "hex": "#b4c0af",
      "good name": ""
    },
    {
      "name": "Coastal Fjord",
      "hex": "#505d7e",
      "good name": ""
    },
    {
      "name": "Coastal Foam",
      "hex": "#b0e5c9",
      "good name": ""
    },
    {
      "name": "Coastal Fog",
      "hex": "#e5e8e4",
      "good name": ""
    },
    {
      "name": "Coastal Fringe",
      "hex": "#80b9c0",
      "good name": ""
    },
    {
      "name": "Coastal Jetty",
      "hex": "#006e7f",
      "good name": ""
    },
    {
      "name": "Coastal Mist",
      "hex": "#d2e8ec",
      "good name": ""
    },
    {
      "name": "Coastal Plain",
      "hex": "#9fa694",
      "good name": ""
    },
    {
      "name": "Coastal Sand",
      "hex": "#c9a985",
      "good name": ""
    },
    {
      "name": "Coastal Storm",
      "hex": "#7d807b",
      "good name": ""
    },
    {
      "name": "Coastal Surf",
      "hex": "#2d4982",
      "good name": ""
    },
    {
      "name": "Coastal Trim",
      "hex": "#bdffca",
      "good name": ""
    },
    {
      "name": "Coastal Vista",
      "hex": "#8293a0",
      "good name": ""
    },
    {
      "name": "Coastline Trail",
      "hex": "#6e6c5b",
      "good name": ""
    },
    {
      "name": "Coated",
      "hex": "#2e2f30",
      "good name": ""
    },
    {
      "name": "Cobalite",
      "hex": "#9999ff",
      "good name": ""
    },
    {
      "name": "Cobalt",
      "hex": "#030aa7",
      "good name": "x"
    },
    {
      "name": "Cobalt Flame",
      "hex": "#4e719d",
      "good name": ""
    },
    {
      "name": "Cobalt Glaze",
      "hex": "#0072b5",
      "good name": ""
    },
    {
      "name": "Cobalt Night",
      "hex": "#353739",
      "good name": ""
    },
    {
      "name": "Cobalt Stone",
      "hex": "#0264ae",
      "good name": ""
    },
    {
      "name": "Cobble Brown",
      "hex": "#7a6455",
      "good name": ""
    },
    {
      "name": "Cobbler",
      "hex": "#c4ab7d",
      "good name": ""
    },
    {
      "name": "Cobblestone",
      "hex": "#a89a8e",
      "good name": ""
    },
    {
      "name": "Cobblestone Path",
      "hex": "#9e8779",
      "good name": ""
    },
    {
      "name": "Cobblestone Street",
      "hex": "#cfc7b9",
      "good name": ""
    },
    {
      "name": "Cobra Leather",
      "hex": "#b08e08",
      "good name": ""
    },
    {
      "name": "Cobre",
      "hex": "#996515",
      "good name": ""
    },
    {
      "name": "Cobrizo",
      "hex": "#b56d5d",
      "good name": ""
    },
    {
      "name": "Coca Mocha",
      "hex": "#bd9d95",
      "good name": "x"
    },
    {
      "name": "Cochin Chicken",
      "hex": "#f8b862",
      "good name": ""
    },
    {
      "name": "Cochineal Red",
      "hex": "#7a4848",
      "good name": ""
    },
    {
      "name": "Cochineal Red/Rouge",
      "hex": "#9d2933",
      "good name": ""
    },
    {
      "name": "Cochise",
      "hex": "#ddcdb3",
      "good name": ""
    },
    {
      "name": "Cochonnet",
      "hex": "#ff88bb",
      "good name": ""
    },
    {
      "name": "Cockatoo",
      "hex": "#58c8b6",
      "good name": "x"
    },
    {
      "name": "Cockatrice Brown",
      "hex": "#a46422",
      "good name": ""
    },
    {
      "name": "Cockleshell",
      "hex": "#e3c6af",
      "good name": ""
    },
    {
      "name": "Cockscomb Red",
      "hex": "#bc5378",
      "good name": ""
    },
    {
      "name": "Cocktail Blue",
      "hex": "#5a7aa2",
      "good name": ""
    },
    {
      "name": "Cocktail Green",
      "hex": "#8eb826",
      "good name": ""
    },
    {
      "name": "Cocktail Hour",
      "hex": "#fd9a52",
      "good name": ""
    },
    {
      "name": "Cocktail Olive",
      "hex": "#9fa36c",
      "good name": ""
    },
    {
      "name": "Coco",
      "hex": "#d1bba1",
      "good name": ""
    },
    {
      "name": "Coco Malt",
      "hex": "#e4dcc9",
      "good name": "x"
    },
    {
      "name": "Coco Rum",
      "hex": "#9b7757",
      "good name": ""
    },
    {
      "name": "Coco-Lemon Tart",
      "hex": "#eedd88",
      "good name": ""
    },
    {
      "name": "Cocoa",
      "hex": "#875f42",
      "good name": "x"
    },
    {
      "name": "Cocoa Bean",
      "hex": "#4f3835",
      "good name": ""
    },
    {
      "name": "Cocoa Berry",
      "hex": "#a08882",
      "good name": ""
    },
    {
      "name": "Cocoa Brown",
      "hex": "#35281e",
      "good name": ""
    },
    {
      "name": "Cocoa Butter",
      "hex": "#f5f4c1",
      "good name": ""
    },
    {
      "name": "Cocoa Craving",
      "hex": "#b9a39a",
      "good name": ""
    },
    {
      "name": "Cocoa Cream",
      "hex": "#dbc8b6",
      "good name": ""
    },
    {
      "name": "Cocoa Cupcake",
      "hex": "#967859",
      "good name": ""
    },
    {
      "name": "Cocoa Delight",
      "hex": "#8d725a",
      "good name": ""
    },
    {
      "name": "Cocoa Milk",
      "hex": "#7d675d",
      "good name": ""
    },
    {
      "name": "Cocoa Nib",
      "hex": "#bc9f7e",
      "good name": ""
    },
    {
      "name": "Cocoa Nutmeg",
      "hex": "#a8816f",
      "good name": ""
    },
    {
      "name": "Cocoa Parfait",
      "hex": "#dfcec2",
      "good name": ""
    },
    {
      "name": "Cocoa Pecan",
      "hex": "#967b5d",
      "good name": ""
    },
    {
      "name": "Cocoa Powder",
      "hex": "#766a5f",
      "good name": ""
    },
    {
      "name": "Cocoa Shell",
      "hex": "#7e6657",
      "good name": ""
    },
    {
      "name": "Cocoa Whip",
      "hex": "#a08e7e",
      "good name": ""
    },
    {
      "name": "Cocobolo",
      "hex": "#784848",
      "good name": ""
    },
    {
      "name": "Cocoloco",
      "hex": "#aa8f7a",
      "good name": "x"
    },
    {
      "name": "Coconut",
      "hex": "#965a3e",
      "good name": "x"
    },
    {
      "name": "Coconut Agony",
      "hex": "#ebe8e7",
      "good name": "x"
    },
    {
      "name": "Coconut Aroma",
      "hex": "#eeeedd",
      "good name": ""
    },
    {
      "name": "Coconut Butter",
      "hex": "#f2efe1",
      "good name": ""
    },
    {
      "name": "Coconut Cream",
      "hex": "#e1dabb",
      "good name": ""
    },
    {
      "name": "Coconut Crumble",
      "hex": "#e2cea6",
      "good name": ""
    },
    {
      "name": "Coconut Grove",
      "hex": "#676d43",
      "good name": ""
    },
    {
      "name": "Coconut Husk",
      "hex": "#7d6044",
      "good name": ""
    },
    {
      "name": "Coconut Ice",
      "hex": "#ddd4c7",
      "good name": ""
    },
    {
      "name": "Coconut Macaroon",
      "hex": "#dacac0",
      "good name": "x"
    },
    {
      "name": "Coconut Milk",
      "hex": "#f0ede5",
      "good name": "x"
    },
    {
      "name": "Coconut Pulp",
      "hex": "#fbf9e1",
      "good name": ""
    },
    {
      "name": "Coconut Shell",
      "hex": "#917a56",
      "good name": ""
    },
    {
      "name": "Coconut Twist",
      "hex": "#f7f1e1",
      "good name": ""
    },
    {
      "name": "Coconut White",
      "hex": "#e9edf6",
      "good name": ""
    },
    {
      "name": "Cocoon",
      "hex": "#dedbcc",
      "good name": "x"
    },
    {
      "name": "Cod Grey",
      "hex": "#2d3032",
      "good name": ""
    },
    {
      "name": "Codex Grey",
      "hex": "#9c9c9c",
      "good name": ""
    },
    {
      "name": "Codium Fragile",
      "hex": "#524b2a",
      "good name": ""
    },
    {
      "name": "Codman Claret",
      "hex": "#8c4040",
      "good name": ""
    },
    {
      "name": "Coelia Greenshade",
      "hex": "#0e7f78",
      "good name": ""
    },
    {
      "name": "Coelin Blue",
      "hex": "#497d93",
      "good name": ""
    },
    {
      "name": "Coffee",
      "hex": "#6f4e37",
      "good name": "x"
    },
    {
      "name": "Coffee Addiction",
      "hex": "#883300",
      "good name": ""
    },
    {
      "name": "Coffee Adept",
      "hex": "#775511",
      "good name": "x"
    },
    {
      "name": "Coffee Bag",
      "hex": "#dbd6d3",
      "good name": ""
    },
    {
      "name": "Coffee Bar",
      "hex": "#825c43",
      "good name": ""
    },
    {
      "name": "Coffee Bean",
      "hex": "#362d26",
      "good name": ""
    },
    {
      "name": "Coffee Bean Brown",
      "hex": "#765640",
      "good name": ""
    },
    {
      "name": "Coffee Beans",
      "hex": "#6e544b",
      "good name": ""
    },
    {
      "name": "Coffee Brick",
      "hex": "#6f0c0d",
      "good name": ""
    },
    {
      "name": "Coffee Clay",
      "hex": "#b7997c",
      "good name": ""
    },
    {
      "name": "Coffee Cream",
      "hex": "#fff2d7",
      "good name": ""
    },
    {
      "name": "Coffee Custard",
      "hex": "#ab9b9c",
      "good name": ""
    },
    {
      "name": "Coffee Diva",
      "hex": "#bea88d",
      "good name": "x"
    },
    {
      "name": "Coffee House",
      "hex": "#6c5b4d",
      "good name": ""
    },
    {
      "name": "Coffee Kiss",
      "hex": "#b19576",
      "good name": ""
    },
    {
      "name": "Coffee Liqueur",
      "hex": "#6a513b",
      "good name": ""
    },
    {
      "name": "Coffee Rose",
      "hex": "#a9898d",
      "good name": ""
    },
    {
      "name": "Coffee Shop",
      "hex": "#725042",
      "good name": ""
    },
    {
      "name": "Coffee With Cream",
      "hex": "#a68966",
      "good name": ""
    },
    {
      "name": "Cognac",
      "hex": "#d48c46",
      "good name": "x"
    },
    {
      "name": "Cognac Brown",
      "hex": "#b98563",
      "good name": ""
    },
    {
      "name": "Cogswell Cedar",
      "hex": "#90534a",
      "good name": ""
    },
    {
      "name": "Coin Purse",
      "hex": "#e0d5e3",
      "good name": ""
    },
    {
      "name": "Coin Slot",
      "hex": "#ff4411",
      "good name": "x"
    },
    {
      "name": "Coincidence",
      "hex": "#c7de88",
      "good name": ""
    },
    {
      "name": "Cola",
      "hex": "#3c2f23",
      "good name": "x"
    },
    {
      "name": "Cola Bubble",
      "hex": "#3c3024",
      "good name": ""
    },
    {
      "name": "Cold Air Turquoise",
      "hex": "#c1dcdb",
      "good name": ""
    },
    {
      "name": "Cold and Dark",
      "hex": "#154250",
      "good name": "x"
    },
    {
      "name": "Cold Blooded",
      "hex": "#bbeeee",
      "good name": ""
    },
    {
      "name": "Cold Blue",
      "hex": "#88dddd",
      "good name": "x"
    },
    {
      "name": "Cold Brew Coffee",
      "hex": "#785736",
      "good name": ""
    },
    {
      "name": "Cold Canada",
      "hex": "#dbfffe",
      "good name": "x"
    },
    {
      "name": "Cold Current",
      "hex": "#234272",
      "good name": ""
    },
    {
      "name": "Cold Foam",
      "hex": "#efece3",
      "good name": ""
    },
    {
      "name": "Cold Front Green",
      "hex": "#85b3b2",
      "good name": ""
    },
    {
      "name": "Cold Green",
      "hex": "#008b3c",
      "good name": ""
    },
    {
      "name": "Cold Grey",
      "hex": "#9f9f9f",
      "good name": ""
    },
    {
      "name": "Cold Heights",
      "hex": "#22ddee",
      "good name": ""
    },
    {
      "name": "Cold Light",
      "hex": "#dde3e6",
      "good name": ""
    },
    {
      "name": "Cold Light of Day",
      "hex": "#00eeee",
      "good name": "x"
    },
    {
      "name": "Cold Lips",
      "hex": "#9ba0ef",
      "good name": "x"
    },
    {
      "name": "Cold Morning",
      "hex": "#e6e5e4",
      "good name": ""
    },
    {
      "name": "Cold North",
      "hex": "#559c9b",
      "good name": ""
    },
    {
      "name": "Cold Pack",
      "hex": "#0033dd",
      "good name": ""
    },
    {
      "name": "Cold Pilsner",
      "hex": "#d09351",
      "good name": ""
    },
    {
      "name": "Cold Pink",
      "hex": "#bca5ad",
      "good name": ""
    },
    {
      "name": "Cold Purple",
      "hex": "#9d8abf",
      "good name": ""
    },
    {
      "name": "Cold Sea Currents",
      "hex": "#32545e",
      "good name": ""
    },
    {
      "name": "Cold Shoulder",
      "hex": "#d4e0ef",
      "good name": "x"
    },
    {
      "name": "Cold Snow",
      "hex": "#fff7fd",
      "good name": ""
    },
    {
      "name": "Cold Soft Blue",
      "hex": "#d9e7e6",
      "good name": ""
    },
    {
      "name": "Cold Spring",
      "hex": "#88bb66",
      "good name": ""
    },
    {
      "name": "Cold Steel",
      "hex": "#262335",
      "good name": ""
    },
    {
      "name": "Cold Turbulence",
      "hex": "#cfe1ef",
      "good name": ""
    },
    {
      "name": "Cold Turkey",
      "hex": "#cab5b2",
      "good name": "x"
    },
    {
      "name": "Cold Turquoise",
      "hex": "#a5d0cb",
      "good name": ""
    },
    {
      "name": "Cold Water",
      "hex": "#d9dfe0",
      "good name": ""
    },
    {
      "name": "Cold Wave",
      "hex": "#c2e2e3",
      "good name": "x"
    },
    {
      "name": "Cold Well Water",
      "hex": "#c1e2e3",
      "good name": ""
    },
    {
      "name": "Cold White",
      "hex": "#edfcfb",
      "good name": "x"
    },
    {
      "name": "Cold Wind",
      "hex": "#e1e3e4",
      "good name": ""
    },
    {
      "name": "Cold Winter's Morn",
      "hex": "#b4bcd1",
      "good name": ""
    },
    {
      "name": "Coliseum Marble",
      "hex": "#cec8b6",
      "good name": ""
    },
    {
      "name": "Collard Green",
      "hex": "#536861",
      "good name": ""
    },
    {
      "name": "Collectible",
      "hex": "#9b8467",
      "good name": ""
    },
    {
      "name": "Colleen Green",
      "hex": "#ebecda",
      "good name": ""
    },
    {
      "name": "Collensia",
      "hex": "#bdb7cd",
      "good name": ""
    },
    {
      "name": "Cologne",
      "hex": "#75bfd2",
      "good name": ""
    },
    {
      "name": "Colombo Red Mauve",
      "hex": "#ba7ab3",
      "good name": ""
    },
    {
      "name": "Colonel Mustard",
      "hex": "#b68238",
      "good name": ""
    },
    {
      "name": "Colonial Aqua",
      "hex": "#a1bdbf",
      "good name": ""
    },
    {
      "name": "Colonial Blue",
      "hex": "#2d6471",
      "good name": ""
    },
    {
      "name": "Colonial Brick",
      "hex": "#ad6961",
      "good name": ""
    },
    {
      "name": "Colonial Revival Green Stone",
      "hex": "#a39b7e",
      "good name": ""
    },
    {
      "name": "Colonial Revival Grey",
      "hex": "#b4b9b9",
      "good name": ""
    },
    {
      "name": "Colonial Revival Sea Green",
      "hex": "#aebea6",
      "good name": ""
    },
    {
      "name": "Colonial Revival Stone",
      "hex": "#a7947c",
      "good name": ""
    },
    {
      "name": "Colonial Revival Tan",
      "hex": "#d3b699",
      "good name": ""
    },
    {
      "name": "Colonial Rose",
      "hex": "#e7b6bc",
      "good name": ""
    },
    {
      "name": "Colonial White",
      "hex": "#ffedbc",
      "good name": "x"
    },
    {
      "name": "Colonial Yellow",
      "hex": "#efc488",
      "good name": ""
    },
    {
      "name": "Colonnade Grey",
      "hex": "#b2b1ad",
      "good name": ""
    },
    {
      "name": "Colonnade Stone",
      "hex": "#c6c0b6",
      "good name": ""
    },
    {
      "name": "Colony",
      "hex": "#67a195",
      "good name": ""
    },
    {
      "name": "Colony Blue",
      "hex": "#65769a",
      "good name": ""
    },
    {
      "name": "Colony Buff",
      "hex": "#ddc6ab",
      "good name": ""
    },
    {
      "name": "Color Blind",
      "hex": "#c6d2de",
      "good name": ""
    },
    {
      "name": "Color Me Green",
      "hex": "#7cb77b",
      "good name": ""
    },
    {
      "name": "Colorado Bronze",
      "hex": "#ee7766",
      "good name": ""
    },
    {
      "name": "Colorado Dawn",
      "hex": "#e09cab",
      "good name": ""
    },
    {
      "name": "Colorado Peach",
      "hex": "#e6994c",
      "good name": ""
    },
    {
      "name": "Colorado Peak",
      "hex": "#9c9ba7",
      "good name": ""
    },
    {
      "name": "Colorado Springs",
      "hex": "#88aac4",
      "good name": ""
    },
    {
      "name": "Colorado Trail",
      "hex": "#b49375",
      "good name": ""
    },
    {
      "name": "Colorful Leaves",
      "hex": "#aa5c43",
      "good name": ""
    },
    {
      "name": "Colossus",
      "hex": "#625c91",
      "good name": ""
    },
    {
      "name": "Columbia",
      "hex": "#009288",
      "good name": ""
    },
    {
      "name": "Columbia Blue",
      "hex": "#9bddff",
      "good name": ""
    },
    {
      "name": "Columbine",
      "hex": "#f5dae3",
      "good name": ""
    },
    {
      "name": "Columbo's Coat",
      "hex": "#d0cbce",
      "good name": "x"
    },
    {
      "name": "Columbus",
      "hex": "#5f758f",
      "good name": ""
    },
    {
      "name": "Column Of Oak Green",
      "hex": "#006f37",
      "good name": ""
    },
    {
      "name": "Colusa Wetlands",
      "hex": "#7f725c",
      "good name": ""
    },
    {
      "name": "Combed Cotton",
      "hex": "#f4f0de",
      "good name": ""
    },
    {
      "name": "Come Sail Away",
      "hex": "#5c92c5",
      "good name": ""
    },
    {
      "name": "Comet",
      "hex": "#636373",
      "good name": ""
    },
    {
      "name": "Comfort",
      "hex": "#e3ceb8",
      "good name": ""
    },
    {
      "name": "Comfort Grey",
      "hex": "#bec3bb",
      "good name": ""
    },
    {
      "name": "Comforting",
      "hex": "#d6c0ab",
      "good name": ""
    },
    {
      "name": "Comforting Cherry",
      "hex": "#cc1144",
      "good name": ""
    },
    {
      "name": "Comforting Green",
      "hex": "#d5e0cf",
      "good name": ""
    },
    {
      "name": "Comforting Grey",
      "hex": "#c5c3b4",
      "good name": ""
    },
    {
      "name": "Comfrey",
      "hex": "#5b7961",
      "good name": ""
    },
    {
      "name": "Comfy Beige",
      "hex": "#e3d2b6",
      "good name": ""
    },
    {
      "name": "Comical Coral",
      "hex": "#f3d1c8",
      "good name": ""
    },
    {
      "name": "Coming up Roses",
      "hex": "#de7485",
      "good name": ""
    },
    {
      "name": "Commandes",
      "hex": "#0b597c",
      "good name": ""
    },
    {
      "name": "Commercial White",
      "hex": "#edece6",
      "good name": ""
    },
    {
      "name": "Commodore",
      "hex": "#25476a",
      "good name": ""
    },
    {
      "name": "Common Chalcedony",
      "hex": "#c8ad7f",
      "good name": ""
    },
    {
      "name": "Common Chestnut",
      "hex": "#cd5c5c",
      "good name": ""
    },
    {
      "name": "Common Dandelion",
      "hex": "#fed85d",
      "good name": ""
    },
    {
      "name": "Common Feldspar",
      "hex": "#858f94",
      "good name": ""
    },
    {
      "name": "Common Jasper",
      "hex": "#946943",
      "good name": ""
    },
    {
      "name": "Common Teal",
      "hex": "#009193",
      "good name": ""
    },
    {
      "name": "Communist",
      "hex": "#cc0000",
      "good name": "x"
    },
    {
      "name": "Community",
      "hex": "#d0b997",
      "good name": ""
    },
    {
      "name": "Como",
      "hex": "#4c785c",
      "good name": ""
    },
    {
      "name": "Compact Disc Grey",
      "hex": "#cdcdcd",
      "good name": ""
    },
    {
      "name": "Compass",
      "hex": "#8a877b",
      "good name": ""
    },
    {
      "name": "Compass Blue",
      "hex": "#35475b",
      "good name": ""
    },
    {
      "name": "Compatible Cream",
      "hex": "#e8c89e",
      "good name": ""
    },
    {
      "name": "Complex Grey",
      "hex": "#847975",
      "good name": ""
    },
    {
      "name": "Composed",
      "hex": "#bbc8b2",
      "good name": ""
    },
    {
      "name": "Composer's Magic",
      "hex": "#7a6e7e",
      "good name": ""
    },
    {
      "name": "Composite Artefact Green",
      "hex": "#55cc00",
      "good name": ""
    },
    {
      "name": "Concealed Green",
      "hex": "#263130",
      "good name": ""
    },
    {
      "name": "Concealment",
      "hex": "#405852",
      "good name": ""
    },
    {
      "name": "Concept Beige",
      "hex": "#d5bda3",
      "good name": ""
    },
    {
      "name": "Conceptual",
      "hex": "#7ac34f",
      "good name": ""
    },
    {
      "name": "Concerto",
      "hex": "#9e6b75",
      "good name": ""
    },
    {
      "name": "Conch",
      "hex": "#a0b1ae",
      "good name": ""
    },
    {
      "name": "Conch Pink",
      "hex": "#dba496",
      "good name": ""
    },
    {
      "name": "Conch Shell",
      "hex": "#fc8f9b",
      "good name": ""
    },
    {
      "name": "Conclave",
      "hex": "#abb9d7",
      "good name": ""
    },
    {
      "name": "Concord",
      "hex": "#827f79",
      "good name": "x"
    },
    {
      "name": "Concord Buff",
      "hex": "#e2ceb0",
      "good name": ""
    },
    {
      "name": "Concord Grape",
      "hex": "#7c5379",
      "good name": ""
    },
    {
      "name": "Concord Jam",
      "hex": "#695a82",
      "good name": ""
    },
    {
      "name": "Concrete",
      "hex": "#d2d1cd",
      "good name": "x"
    },
    {
      "name": "Concrete Jungle",
      "hex": "#999988",
      "good name": "x"
    },
    {
      "name": "Concrete Sidewalk",
      "hex": "#8d8a81",
      "good name": ""
    },
    {
      "name": "Condiment",
      "hex": "#b98142",
      "good name": ""
    },
    {
      "name": "Conditioner",
      "hex": "#ffffcc",
      "good name": ""
    },
    {
      "name": "Cone Green Blue",
      "hex": "#4a6169",
      "good name": ""
    },
    {
      "name": "Coney Island",
      "hex": "#6d7e7d",
      "good name": ""
    },
    {
      "name": "Confection",
      "hex": "#f4ecda",
      "good name": ""
    },
    {
      "name": "Confederate",
      "hex": "#5c6272",
      "good name": ""
    },
    {
      "name": "Confetti",
      "hex": "#ddcb46",
      "good name": ""
    },
    {
      "name": "Confidence",
      "hex": "#a98a6b",
      "good name": ""
    },
    {
      "name": "Confident White",
      "hex": "#e4dfce",
      "good name": ""
    },
    {
      "name": "Confident Yellow",
      "hex": "#ffcc13",
      "good name": ""
    },
    {
      "name": "Cōng Lǜ Green",
      "hex": "#01c08d",
      "good name": ""
    },
    {
      "name": "Congo",
      "hex": "#e8c3be",
      "good name": ""
    },
    {
      "name": "Congo Brown",
      "hex": "#654d49",
      "good name": ""
    },
    {
      "name": "Congo Capture",
      "hex": "#776959",
      "good name": ""
    },
    {
      "name": "Congo Green",
      "hex": "#00a483",
      "good name": ""
    },
    {
      "name": "Congo Pink",
      "hex": "#f98379",
      "good name": ""
    },
    {
      "name": "Congress Blue",
      "hex": "#02478e",
      "good name": ""
    },
    {
      "name": "Congressional Navy",
      "hex": "#100438",
      "good name": ""
    },
    {
      "name": "Conifer",
      "hex": "#b1dd52",
      "good name": "x"
    },
    {
      "name": "Conifer Blossom",
      "hex": "#ffdd49",
      "good name": ""
    },
    {
      "name": "Conifer Cone",
      "hex": "#885555",
      "good name": ""
    },
    {
      "name": "Conifer Green",
      "hex": "#747767",
      "good name": ""
    },
    {
      "name": "Conker",
      "hex": "#b94e41",
      "good name": "x"
    },
    {
      "name": "Conker Brown",
      "hex": "#552200",
      "good name": ""
    },
    {
      "name": "Connaisseur",
      "hex": "#654e44",
      "good name": ""
    },
    {
      "name": "Connect Red",
      "hex": "#eb6651",
      "good name": ""
    },
    {
      "name": "Connected Grey",
      "hex": "#898473",
      "good name": ""
    },
    {
      "name": "Connecticut Lilac",
      "hex": "#ccbbee",
      "good name": ""
    },
    {
      "name": "Connor's Lakefront",
      "hex": "#175a6c",
      "good name": ""
    },
    {
      "name": "Cono De Vainilla",
      "hex": "#f2d9b8",
      "good name": ""
    },
    {
      "name": "Conservation",
      "hex": "#796e54",
      "good name": ""
    },
    {
      "name": "Conservative Grey",
      "hex": "#d1d0c6",
      "good name": ""
    },
    {
      "name": "Conspiracy Velvet",
      "hex": "#57465d",
      "good name": ""
    },
    {
      "name": "Constant Coral",
      "hex": "#cd8e7f",
      "good name": ""
    },
    {
      "name": "Constellation",
      "hex": "#bccedb",
      "good name": ""
    },
    {
      "name": "Constellation Blue",
      "hex": "#3c4670",
      "good name": ""
    },
    {
      "name": "Construction Zone",
      "hex": "#ee8442",
      "good name": ""
    },
    {
      "name": "Contemplation",
      "hex": "#bec6bb",
      "good name": ""
    },
    {
      "name": "Contented",
      "hex": "#bdc0b3",
      "good name": ""
    },
    {
      "name": "Contessa",
      "hex": "#c16f68",
      "good name": ""
    },
    {
      "name": "Continental Waters",
      "hex": "#98c6cb",
      "good name": "x"
    },
    {
      "name": "Contrail",
      "hex": "#dedeff",
      "good name": ""
    },
    {
      "name": "Contrasting Yellow",
      "hex": "#f2c200",
      "good name": ""
    },
    {
      "name": "Convivial Yellow",
      "hex": "#e9d6b0",
      "good name": ""
    },
    {
      "name": "Cook's Bay",
      "hex": "#014e83",
      "good name": ""
    },
    {
      "name": "Cookie",
      "hex": "#ffe2b7",
      "good name": ""
    },
    {
      "name": "Cookie Crumb",
      "hex": "#b19778",
      "good name": "x"
    },
    {
      "name": "Cookie Crust",
      "hex": "#e3b258",
      "good name": "x"
    },
    {
      "name": "Cookie Dough",
      "hex": "#ab7100",
      "good name": "x"
    },
    {
      "name": "Cookies And Cream",
      "hex": "#eee0b1",
      "good name": ""
    },
    {
      "name": "Cool",
      "hex": "#96b3b3",
      "good name": "x"
    },
    {
      "name": "Cool Aloe",
      "hex": "#a9d99c",
      "good name": ""
    },
    {
      "name": "Cool Ashes",
      "hex": "#929291",
      "good name": ""
    },
    {
      "name": "Cool Avocado",
      "hex": "#c4b47d",
      "good name": ""
    },
    {
      "name": "Cool Beige",
      "hex": "#c6b5a7",
      "good name": ""
    },
    {
      "name": "Cool Black",
      "hex": "#002e63",
      "good name": ""
    },
    {
      "name": "Cool Blue",
      "hex": "#4984b8",
      "good name": ""
    },
    {
      "name": "Cool Camel",
      "hex": "#ae996b",
      "good name": ""
    },
    {
      "name": "Cool Camo",
      "hex": "#827566",
      "good name": ""
    },
    {
      "name": "Cool Cantaloupe",
      "hex": "#f1d3ca",
      "good name": ""
    },
    {
      "name": "Cool Charcoal",
      "hex": "#807b76",
      "good name": ""
    },
    {
      "name": "Cool Clay",
      "hex": "#ba947b",
      "good name": ""
    },
    {
      "name": "Cool Concrete",
      "hex": "#d9d0c1",
      "good name": ""
    },
    {
      "name": "Cool Copper",
      "hex": "#ad8458",
      "good name": ""
    },
    {
      "name": "Cool Crayon",
      "hex": "#b0e6e3",
      "good name": ""
    },
    {
      "name": "Cool Cream",
      "hex": "#fbe5d9",
      "good name": ""
    },
    {
      "name": "Cool Current",
      "hex": "#283c44",
      "good name": ""
    },
    {
      "name": "Cool December",
      "hex": "#fdfbf8",
      "good name": ""
    },
    {
      "name": "Cool Dive",
      "hex": "#00606f",
      "good name": ""
    },
    {
      "name": "Cool Dusk",
      "hex": "#7b9dad",
      "good name": ""
    },
    {
      "name": "Cool Elegance",
      "hex": "#cfcfd0",
      "good name": ""
    },
    {
      "name": "Cool Frost",
      "hex": "#e7e6ed",
      "good name": ""
    },
    {
      "name": "Cool Granite",
      "hex": "#abaca8",
      "good name": ""
    },
    {
      "name": "Cool Green",
      "hex": "#33b864",
      "good name": ""
    },
    {
      "name": "Cool Grey",
      "hex": "#8c93ad",
      "good name": ""
    },
    {
      "name": "Cool Icicle",
      "hex": "#e1eee6",
      "good name": ""
    },
    {
      "name": "Cool Jazz",
      "hex": "#bee7e0",
      "good name": ""
    },
    {
      "name": "Cool Lava",
      "hex": "#e97c6b",
      "good name": ""
    },
    {
      "name": "Cool Lavender",
      "hex": "#b3a6a5",
      "good name": ""
    },
    {
      "name": "Cool Melon",
      "hex": "#ebd1cd",
      "good name": ""
    },
    {
      "name": "Cool Pink",
      "hex": "#e5ccd1",
      "good name": ""
    },
    {
      "name": "Cool Purple",
      "hex": "#aa23ff",
      "good name": ""
    },
    {
      "name": "Cool Quiet",
      "hex": "#cbb5c6",
      "good name": ""
    },
    {
      "name": "Cool Reflection",
      "hex": "#eaf0eb",
      "good name": ""
    },
    {
      "name": "Cool Sky",
      "hex": "#cfe0e4",
      "good name": ""
    },
    {
      "name": "Cool Slate",
      "hex": "#d0ccc5",
      "good name": ""
    },
    {
      "name": "Cool Spring",
      "hex": "#bbd9c3",
      "good name": ""
    },
    {
      "name": "Cool Touch",
      "hex": "#7295c9",
      "good name": ""
    },
    {
      "name": "Cool Water Lake",
      "hex": "#9bd9e5",
      "good name": ""
    },
    {
      "name": "Cool Waters",
      "hex": "#487678",
      "good name": ""
    },
    {
      "name": "Cool White",
      "hex": "#dae6e2",
      "good name": ""
    },
    {
      "name": "Cool Yellow",
      "hex": "#eaefce",
      "good name": ""
    },
    {
      "name": "Coolbox Ice Turquoise",
      "hex": "#499c9d",
      "good name": ""
    },
    {
      "name": "Cooled Blue",
      "hex": "#75b9ae",
      "good name": ""
    },
    {
      "name": "Cooled Cream",
      "hex": "#fadc97",
      "good name": ""
    },
    {
      "name": "Cooler Than Ever",
      "hex": "#77bbff",
      "good name": "x"
    },
    {
      "name": "Cooling Trend",
      "hex": "#e6e2e4",
      "good name": ""
    },
    {
      "name": "Copacabana",
      "hex": "#006c8d",
      "good name": "x"
    },
    {
      "name": "Copacabana Sand",
      "hex": "#e5d68e",
      "good name": ""
    },
    {
      "name": "Copen Blue",
      "hex": "#516b84",
      "good name": ""
    },
    {
      "name": "Copenhagen",
      "hex": "#adc8c0",
      "good name": ""
    },
    {
      "name": "Copenhagen Blue",
      "hex": "#21638b",
      "good name": ""
    },
    {
      "name": "Copper",
      "hex": "#b87333",
      "good name": "x"
    },
    {
      "name": "Copper Beech",
      "hex": "#b1715a",
      "good name": ""
    },
    {
      "name": "Copper Blush",
      "hex": "#e8c1ab",
      "good name": ""
    },
    {
      "name": "Copper Brown",
      "hex": "#9a6051",
      "good name": ""
    },
    {
      "name": "Copper Canyon",
      "hex": "#77422c",
      "good name": ""
    },
    {
      "name": "Copper Coin",
      "hex": "#da8a67",
      "good name": "x"
    },
    {
      "name": "Copper Cove",
      "hex": "#d89166",
      "good name": ""
    },
    {
      "name": "Copper Creek",
      "hex": "#a35d31",
      "good name": ""
    },
    {
      "name": "Copper Harbor",
      "hex": "#d57e52",
      "good name": ""
    },
    {
      "name": "Copper Lake",
      "hex": "#c09078",
      "good name": ""
    },
    {
      "name": "Copper Mine",
      "hex": "#b2764c",
      "good name": ""
    },
    {
      "name": "Copper Mineral Green",
      "hex": "#398174",
      "good name": ""
    },
    {
      "name": "Copper Mining",
      "hex": "#945c54",
      "good name": ""
    },
    {
      "name": "Copper Moon",
      "hex": "#c29978",
      "good name": ""
    },
    {
      "name": "Copper Mountain",
      "hex": "#ab714a",
      "good name": ""
    },
    {
      "name": "Copper Patina",
      "hex": "#9db4a0",
      "good name": "x"
    },
    {
      "name": "Copper Penny",
      "hex": "#ad6f69",
      "good name": ""
    },
    {
      "name": "Copper Pink",
      "hex": "#946877",
      "good name": ""
    },
    {
      "name": "Copper Pipe",
      "hex": "#da8f67",
      "good name": ""
    },
    {
      "name": "Copper Pot",
      "hex": "#936647",
      "good name": ""
    },
    {
      "name": "Copper Pyrite Green",
      "hex": "#3e4939",
      "good name": ""
    },
    {
      "name": "Copper Red",
      "hex": "#cb6d51",
      "good name": ""
    },
    {
      "name": "Copper River",
      "hex": "#f7a270",
      "good name": ""
    },
    {
      "name": "Copper Roof Green",
      "hex": "#6f978e",
      "good name": ""
    },
    {
      "name": "Copper Rose",
      "hex": "#996666",
      "good name": ""
    },
    {
      "name": "Copper Rust",
      "hex": "#95524c",
      "good name": ""
    },
    {
      "name": "Copper Tan",
      "hex": "#de8e65",
      "good name": ""
    },
    {
      "name": "Copper Trail",
      "hex": "#c18978",
      "good name": ""
    },
    {
      "name": "Copper Turquoise",
      "hex": "#38887f",
      "good name": ""
    },
    {
      "name": "Copper Wire",
      "hex": "#db8b67",
      "good name": ""
    },
    {
      "name": "Copper-Metal Red",
      "hex": "#ad6342",
      "good name": ""
    },
    {
      "name": "Copperfield",
      "hex": "#da8a88",
      "good name": ""
    },
    {
      "name": "Copperleaf",
      "hex": "#cf8874",
      "good name": ""
    },
    {
      "name": "Coppersmith",
      "hex": "#d98a3f",
      "good name": ""
    },
    {
      "name": "Coppery Orange",
      "hex": "#7f4330",
      "good name": ""
    },
    {
      "name": "Copra",
      "hex": "#654636",
      "good name": ""
    },
    {
      "name": "Coquelicot",
      "hex": "#ff3800",
      "good name": "x"
    },
    {
      "name": "Coquette",
      "hex": "#e5dcdc",
      "good name": ""
    },
    {
      "name": "Coquina",
      "hex": "#9d8d8e",
      "good name": ""
    },
    {
      "name": "Cor-de-pele",
      "hex": "#f4c2c2",
      "good name": ""
    },
    {
      "name": "Coral",
      "hex": "#ff7f50",
      "good name": "x"
    },
    {
      "name": "Coral Almond",
      "hex": "#e29d94",
      "good name": ""
    },
    {
      "name": "Coral Atoll",
      "hex": "#dc938d",
      "good name": ""
    },
    {
      "name": "Coral Bay",
      "hex": "#ddb8a3",
      "good name": ""
    },
    {
      "name": "Coral Beach",
      "hex": "#ffbbaa",
      "good name": ""
    },
    {
      "name": "Coral Bead",
      "hex": "#ef9a93",
      "good name": ""
    },
    {
      "name": "Coral Bells",
      "hex": "#fbc5bb",
      "good name": ""
    },
    {
      "name": "Coral Bisque",
      "hex": "#f7c6b1",
      "good name": ""
    },
    {
      "name": "Coral Blossom",
      "hex": "#f7bea2",
      "good name": ""
    },
    {
      "name": "Coral Blush",
      "hex": "#e5a090",
      "good name": ""
    },
    {
      "name": "Coral Burst",
      "hex": "#dd5544",
      "good name": ""
    },
    {
      "name": "Coral Candy",
      "hex": "#f5d0c9",
      "good name": ""
    },
    {
      "name": "Coral Clay",
      "hex": "#c2b1a1",
      "good name": ""
    },
    {
      "name": "Coral Cloud",
      "hex": "#e2a9a1",
      "good name": ""
    },
    {
      "name": "Coral Coast",
      "hex": "#068e9e",
      "good name": ""
    },
    {
      "name": "Coral Commander",
      "hex": "#ee6666",
      "good name": "x"
    },
    {
      "name": "Coral Confection",
      "hex": "#fccca7",
      "good name": ""
    },
    {
      "name": "Coral Corn Snake",
      "hex": "#e9adca",
      "good name": ""
    },
    {
      "name": "Coral Cove",
      "hex": "#dda69f",
      "good name": ""
    },
    {
      "name": "Coral Cream",
      "hex": "#ead6ce",
      "good name": ""
    },
    {
      "name": "Coral Dune",
      "hex": "#fcd5c5",
      "good name": ""
    },
    {
      "name": "Coral Dusk",
      "hex": "#ffb48a",
      "good name": ""
    },
    {
      "name": "Coral Dust",
      "hex": "#edaa86",
      "good name": ""
    },
    {
      "name": "Coral Expression",
      "hex": "#d76a69",
      "good name": ""
    },
    {
      "name": "Coral Fountain",
      "hex": "#e3a9a2",
      "good name": ""
    },
    {
      "name": "Coral Garden",
      "hex": "#cf8179",
      "good name": ""
    },
    {
      "name": "Coral Gold",
      "hex": "#d27d56",
      "good name": ""
    },
    {
      "name": "Coral Green",
      "hex": "#abe2cf",
      "good name": ""
    },
    {
      "name": "Coral Haze",
      "hex": "#e38e84",
      "good name": ""
    },
    {
      "name": "Coral Kiss",
      "hex": "#ffddc7",
      "good name": "x"
    },
    {
      "name": "Coral Mantle",
      "hex": "#fcd6cb",
      "good name": ""
    },
    {
      "name": "Coral Orange",
      "hex": "#e4694c",
      "good name": ""
    },
    {
      "name": "Coral Pink",
      "hex": "#f88379",
      "good name": ""
    },
    {
      "name": "Coral Quartz",
      "hex": "#f77464",
      "good name": ""
    },
    {
      "name": "Coral Red",
      "hex": "#ff4040",
      "good name": ""
    },
    {
      "name": "Coral Reef",
      "hex": "#c7bca2",
      "good name": ""
    },
    {
      "name": "Coral Rose",
      "hex": "#f3774d",
      "good name": ""
    },
    {
      "name": "Coral Sand",
      "hex": "#ca884e",
      "good name": ""
    },
    {
      "name": "Coral Serenade",
      "hex": "#f9a48e",
      "good name": ""
    },
    {
      "name": "Coral Silk",
      "hex": "#f2a37d",
      "good name": ""
    },
    {
      "name": "Coral Springs",
      "hex": "#abd1af",
      "good name": ""
    },
    {
      "name": "Coral Stone",
      "hex": "#ddc3b6",
      "good name": ""
    },
    {
      "name": "Coral Trails",
      "hex": "#ff8b87",
      "good name": ""
    },
    {
      "name": "Coral Tree",
      "hex": "#ab6e67",
      "good name": ""
    },
    {
      "name": "Coralette",
      "hex": "#f08674",
      "good name": ""
    },
    {
      "name": "Coralistic",
      "hex": "#ff917a",
      "good name": "x"
    },
    {
      "name": "Corallite",
      "hex": "#f0dfcd",
      "good name": ""
    },
    {
      "name": "Corally",
      "hex": "#fea89f",
      "good name": ""
    },
    {
      "name": "Corazon",
      "hex": "#9d6663",
      "good name": ""
    },
    {
      "name": "Corbeau",
      "hex": "#111122",
      "good name": "x"
    },
    {
      "name": "Cordial",
      "hex": "#864c52",
      "good name": ""
    },
    {
      "name": "Cordite",
      "hex": "#616665",
      "good name": ""
    },
    {
      "name": "Cordon Bleu Crust",
      "hex": "#ebe0c8",
      "good name": ""
    },
    {
      "name": "Cordova Burgundy",
      "hex": "#7c3744",
      "good name": ""
    },
    {
      "name": "Cordovan",
      "hex": "#893f45",
      "good name": ""
    },
    {
      "name": "Cordovan Leather",
      "hex": "#57443d",
      "good name": ""
    },
    {
      "name": "Corduroy",
      "hex": "#404d49",
      "good name": ""
    },
    {
      "name": "Corfu Shallows",
      "hex": "#008e8d",
      "good name": ""
    },
    {
      "name": "Corfu Sky",
      "hex": "#8993c3",
      "good name": ""
    },
    {
      "name": "Corfu Waters",
      "hex": "#008aad",
      "good name": "x"
    },
    {
      "name": "Coriander",
      "hex": "#bbb58d",
      "good name": ""
    },
    {
      "name": "Coriander Ochre",
      "hex": "#7e7463",
      "good name": ""
    },
    {
      "name": "Coriander Powder",
      "hex": "#ba9c75",
      "good name": ""
    },
    {
      "name": "Coriander Seed",
      "hex": "#bdaa6f",
      "good name": ""
    },
    {
      "name": "Corinthian Column",
      "hex": "#dedecf",
      "good name": ""
    },
    {
      "name": "Corinthian Pillar",
      "hex": "#e1d1b1",
      "good name": ""
    },
    {
      "name": "Cork",
      "hex": "#5a4c42",
      "good name": ""
    },
    {
      "name": "Cork Bark",
      "hex": "#7e6b43",
      "good name": ""
    },
    {
      "name": "Cork Brown",
      "hex": "#cc8855",
      "good name": ""
    },
    {
      "name": "Cork Wedge",
      "hex": "#c1a98a",
      "good name": ""
    },
    {
      "name": "Cork Wood",
      "hex": "#cc7744",
      "good name": "x"
    },
    {
      "name": "Corkboard",
      "hex": "#9d805d",
      "good name": ""
    },
    {
      "name": "Corkscrew Willow",
      "hex": "#d1b9ab",
      "good name": ""
    },
    {
      "name": "Corn",
      "hex": "#fbec5d",
      "good name": "x"
    },
    {
      "name": "Corn Bread",
      "hex": "#eec657",
      "good name": ""
    },
    {
      "name": "Corn Chowder",
      "hex": "#e1c595",
      "good name": ""
    },
    {
      "name": "Corn Field",
      "hex": "#f8f3c4",
      "good name": ""
    },
    {
      "name": "Corn Harvest",
      "hex": "#8d702a",
      "good name": ""
    },
    {
      "name": "Corn Husk",
      "hex": "#f2d6ae",
      "good name": ""
    },
    {
      "name": "Corn Husk Green",
      "hex": "#cecd95",
      "good name": ""
    },
    {
      "name": "Corn Kernel",
      "hex": "#ffcba4",
      "good name": ""
    },
    {
      "name": "Corn Maze",
      "hex": "#deaa6e",
      "good name": ""
    },
    {
      "name": "Corn Poppy Cherry",
      "hex": "#ee4411",
      "good name": ""
    },
    {
      "name": "Corn Snake",
      "hex": "#ab6134",
      "good name": ""
    },
    {
      "name": "Corn Stalk",
      "hex": "#fcdba6",
      "good name": ""
    },
    {
      "name": "Cornell Red",
      "hex": "#b31b11",
      "good name": ""
    },
    {
      "name": "Cornerstone",
      "hex": "#e3d7bb",
      "good name": ""
    },
    {
      "name": "Cornflake",
      "hex": "#f0e68c",
      "good name": "x"
    },
    {
      "name": "Cornflower",
      "hex": "#5170d7",
      "good name": ""
    },
    {
      "name": "Cornflower Blue",
      "hex": "#7391c8",
      "good name": ""
    },
    {
      "name": "Cornflower Lilac",
      "hex": "#ffb0ac",
      "good name": ""
    },
    {
      "name": "Cornmeal",
      "hex": "#ffd691",
      "good name": ""
    },
    {
      "name": "Cornmeal Beige",
      "hex": "#ebd5c5",
      "good name": ""
    },
    {
      "name": "Cornsilk",
      "hex": "#fff8dc",
      "good name": "x"
    },
    {
      "name": "Cornsilk Yellow",
      "hex": "#f4c96c",
      "good name": ""
    },
    {
      "name": "Cornstalk",
      "hex": "#a9947a",
      "good name": ""
    },
    {
      "name": "Cornucopia",
      "hex": "#ed9b44",
      "good name": ""
    },
    {
      "name": "Cornwall Slate",
      "hex": "#949488",
      "good name": ""
    },
    {
      "name": "Corona",
      "hex": "#ffb437",
      "good name": "x"
    },
    {
      "name": "Coronado Dunes",
      "hex": "#d5a68d",
      "good name": ""
    },
    {
      "name": "Coronado Moss",
      "hex": "#9ba591",
      "good name": ""
    },
    {
      "name": "Coronation",
      "hex": "#edecec",
      "good name": ""
    },
    {
      "name": "Coronation Blue",
      "hex": "#59529c",
      "good name": ""
    },
    {
      "name": "Coronet Blue",
      "hex": "#59728e",
      "good name": ""
    },
    {
      "name": "Corporate Green",
      "hex": "#78a486",
      "good name": ""
    },
    {
      "name": "Corral",
      "hex": "#61513d",
      "good name": ""
    },
    {
      "name": "Corral Brown",
      "hex": "#937360",
      "good name": ""
    },
    {
      "name": "Corrosion Red",
      "hex": "#772f21",
      "good name": ""
    },
    {
      "name": "Corsair",
      "hex": "#18576c",
      "good name": ""
    },
    {
      "name": "Corsican",
      "hex": "#85ac9d",
      "good name": ""
    },
    {
      "name": "Corsican Blue",
      "hex": "#646093",
      "good name": ""
    },
    {
      "name": "Corsican Purple",
      "hex": "#7a85af",
      "good name": ""
    },
    {
      "name": "Cortex",
      "hex": "#a99592",
      "good name": "x"
    },
    {
      "name": "Cortez Chocolate",
      "hex": "#a4896a",
      "good name": ""
    },
    {
      "name": "Corundum Blue",
      "hex": "#4a6267",
      "good name": ""
    },
    {
      "name": "Corundum Red",
      "hex": "#95687d",
      "good name": ""
    },
    {
      "name": "Corvette",
      "hex": "#e9ba81",
      "good name": ""
    },
    {
      "name": "Corydalis Blue",
      "hex": "#a9cada",
      "good name": ""
    },
    {
      "name": "Cos",
      "hex": "#a4c48e",
      "good name": ""
    },
    {
      "name": "Cosmetic Blush",
      "hex": "#f6e7e2",
      "good name": ""
    },
    {
      "name": "Cosmetic Mauve",
      "hex": "#d3bed5",
      "good name": ""
    },
    {
      "name": "Cosmetic Peach",
      "hex": "#f3c1ab",
      "good name": ""
    },
    {
      "name": "Cosmetic Red",
      "hex": "#a56078",
      "good name": ""
    },
    {
      "name": "Cosmic",
      "hex": "#b8b9cb",
      "good name": "x"
    },
    {
      "name": "Cosmic Aura",
      "hex": "#cfb3a6",
      "good name": ""
    },
    {
      "name": "Cosmic Bit Flip",
      "hex": "#001000",
      "good name": "x"
    },
    {
      "name": "Cosmic Blue",
      "hex": "#93c3cb",
      "good name": ""
    },
    {
      "name": "Cosmic Cobalt",
      "hex": "#2e2d88",
      "good name": ""
    },
    {
      "name": "Cosmic Coral",
      "hex": "#e77e6c",
      "good name": ""
    },
    {
      "name": "Cosmic Dust",
      "hex": "#dce2e5",
      "good name": ""
    },
    {
      "name": "Cosmic Energy",
      "hex": "#9392ab",
      "good name": ""
    },
    {
      "name": "Cosmic Explorer",
      "hex": "#551155",
      "good name": "x"
    },
    {
      "name": "Cosmic Latte",
      "hex": "#fff8e7",
      "good name": "x"
    },
    {
      "name": "Cosmic Quest",
      "hex": "#9ea19f",
      "good name": ""
    },
    {
      "name": "Cosmic Ray",
      "hex": "#cadada",
      "good name": ""
    },
    {
      "name": "Cosmic Sky",
      "hex": "#aaaac4",
      "good name": ""
    },
    {
      "name": "Cosmo Purple",
      "hex": "#a09bc6",
      "good name": ""
    },
    {
      "name": "Cosmopolitan",
      "hex": "#528bab",
      "good name": ""
    },
    {
      "name": "Cosmos",
      "hex": "#fcd5cf",
      "good name": ""
    },
    {
      "name": "Cosmos Blue",
      "hex": "#003249",
      "good name": ""
    },
    {
      "name": "Cossack Dancer",
      "hex": "#4d8aa1",
      "good name": ""
    },
    {
      "name": "Costa Del Sol",
      "hex": "#625d2a",
      "good name": ""
    },
    {
      "name": "Costa Rica Blue",
      "hex": "#77bce2",
      "good name": ""
    },
    {
      "name": "Costa Rican Palm",
      "hex": "#c44041",
      "good name": ""
    },
    {
      "name": "Costume Blue",
      "hex": "#6477a0",
      "good name": ""
    },
    {
      "name": "Cote D'Azur",
      "hex": "#017c85",
      "good name": ""
    },
    {
      "name": "Cotswold Dill",
      "hex": "#dbcdad",
      "good name": ""
    },
    {
      "name": "Cottage Cream",
      "hex": "#eddbbd",
      "good name": ""
    },
    {
      "name": "Cottage Green",
      "hex": "#dcecdc",
      "good name": ""
    },
    {
      "name": "Cottage Hill",
      "hex": "#acb397",
      "good name": ""
    },
    {
      "name": "Cottage Rose",
      "hex": "#d9a89a",
      "good name": ""
    },
    {
      "name": "Cottage Walk",
      "hex": "#a08e77",
      "good name": ""
    },
    {
      "name": "Cottage White",
      "hex": "#f7efdd",
      "good name": ""
    },
    {
      "name": "Cottagecore Sunset",
      "hex": "#ffdad9",
      "good name": ""
    },
    {
      "name": "Cottingley Fairies",
      "hex": "#eddbd7",
      "good name": ""
    },
    {
      "name": "Cotton",
      "hex": "#eeebe1",
      "good name": ""
    },
    {
      "name": "Cotton Ball",
      "hex": "#f2f7fd",
      "good name": "x"
    },
    {
      "name": "Cotton Blossom",
      "hex": "#f5f1e4",
      "good name": ""
    },
    {
      "name": "Cotton Boll",
      "hex": "#e7effb",
      "good name": "x"
    },
    {
      "name": "Cotton Candy",
      "hex": "#ffbcd9",
      "good name": "x"
    },
    {
      "name": "Cotton Candy Aesthetic",
      "hex": "#f5bcde",
      "good name": ""
    },
    {
      "name": "Cotton Candy Explosions",
      "hex": "#dd22ff",
      "good name": "x"
    },
    {
      "name": "Cotton Candy Grape",
      "hex": "#dec74b",
      "good name": ""
    },
    {
      "name": "Cotton Cardigan",
      "hex": "#7596b8",
      "good name": ""
    },
    {
      "name": "Cotton Cloth",
      "hex": "#faf4d4",
      "good name": ""
    },
    {
      "name": "Cotton Club",
      "hex": "#f3e4d3",
      "good name": ""
    },
    {
      "name": "Cotton Denim",
      "hex": "#91abbe",
      "good name": ""
    },
    {
      "name": "Cotton Field",
      "hex": "#f2f0e8",
      "good name": "x"
    },
    {
      "name": "Cotton Flannel",
      "hex": "#9090a2",
      "good name": ""
    },
    {
      "name": "Cotton Fluff",
      "hex": "#f9f4e5",
      "good name": ""
    },
    {
      "name": "Cotton Grey",
      "hex": "#d1ccc3",
      "good name": ""
    },
    {
      "name": "Cotton Indigo",
      "hex": "#066976",
      "good name": ""
    },
    {
      "name": "Cotton Knit",
      "hex": "#e5dfd2",
      "good name": ""
    },
    {
      "name": "Cotton Puff",
      "hex": "#ffffe7",
      "good name": ""
    },
    {
      "name": "Cotton Ridge",
      "hex": "#f1ebdb",
      "good name": ""
    },
    {
      "name": "Cotton Seed",
      "hex": "#bfbaaf",
      "good name": ""
    },
    {
      "name": "Cotton Sheets",
      "hex": "#f7ebdd",
      "good name": ""
    },
    {
      "name": "Cotton Tail",
      "hex": "#fff8d7",
      "good name": ""
    },
    {
      "name": "Cotton Whisper",
      "hex": "#faf1df",
      "good name": ""
    },
    {
      "name": "Cotton White",
      "hex": "#e4e3d8",
      "good name": ""
    },
    {
      "name": "Cotton Wool Blue",
      "hex": "#83abd2",
      "good name": ""
    },
    {
      "name": "Cottonseed",
      "hex": "#f5e6c7",
      "good name": ""
    },
    {
      "name": "Cougar",
      "hex": "#9a7f78",
      "good name": ""
    },
    {
      "name": "Count's Wardrobe",
      "hex": "#772277",
      "good name": ""
    },
    {
      "name": "Country Air",
      "hex": "#9fb6c6",
      "good name": ""
    },
    {
      "name": "Country Beige",
      "hex": "#eae1cb",
      "good name": ""
    },
    {
      "name": "Country Blue",
      "hex": "#717f9b",
      "good name": ""
    },
    {
      "name": "Country Breeze",
      "hex": "#e0d9d5",
      "good name": ""
    },
    {
      "name": "Country Charm",
      "hex": "#c7c0a7",
      "good name": ""
    },
    {
      "name": "Country Club",
      "hex": "#948675",
      "good name": ""
    },
    {
      "name": "Country Cork",
      "hex": "#b8a584",
      "good name": ""
    },
    {
      "name": "Country Cottage",
      "hex": "#d9c1b7",
      "good name": ""
    },
    {
      "name": "Country Dairy",
      "hex": "#f1e9d2",
      "good name": ""
    },
    {
      "name": "Country Dweller",
      "hex": "#b0967c",
      "good name": ""
    },
    {
      "name": "Country House Green",
      "hex": "#414634",
      "good name": ""
    },
    {
      "name": "Country Lake",
      "hex": "#5d7a85",
      "good name": ""
    },
    {
      "name": "Country Lane",
      "hex": "#fcead1",
      "good name": ""
    },
    {
      "name": "Country Lane Red",
      "hex": "#894340",
      "good name": ""
    },
    {
      "name": "Country Linens",
      "hex": "#d7c2a6",
      "good name": ""
    },
    {
      "name": "Country Mist",
      "hex": "#dfebe2",
      "good name": ""
    },
    {
      "name": "Country Rubble",
      "hex": "#d0bca2",
      "good name": ""
    },
    {
      "name": "Country Sky",
      "hex": "#49545a",
      "good name": ""
    },
    {
      "name": "Country Sleigh",
      "hex": "#7e4337",
      "good name": ""
    },
    {
      "name": "Country Squire",
      "hex": "#124a42",
      "good name": ""
    },
    {
      "name": "Country Summer",
      "hex": "#fffbd7",
      "good name": ""
    },
    {
      "name": "Country Tweed",
      "hex": "#837b68",
      "good name": ""
    },
    {
      "name": "Country Weekend",
      "hex": "#88c096",
      "good name": ""
    },
    {
      "name": "County Green",
      "hex": "#1b4b35",
      "good name": ""
    },
    {
      "name": "Courgette Yellow",
      "hex": "#daa135",
      "good name": ""
    },
    {
      "name": "Court Green",
      "hex": "#b9b7a0",
      "good name": ""
    },
    {
      "name": "Court Jester",
      "hex": "#926d9d",
      "good name": ""
    },
    {
      "name": "Court-Bouillon",
      "hex": "#cecb97",
      "good name": "x"
    },
    {
      "name": "Courteous",
      "hex": "#d2d3de",
      "good name": ""
    },
    {
      "name": "Courtly Purple",
      "hex": "#bbafc1",
      "good name": ""
    },
    {
      "name": "Courtyard",
      "hex": "#c8bda4",
      "good name": ""
    },
    {
      "name": "Courtyard Blue",
      "hex": "#718084",
      "good name": ""
    },
    {
      "name": "Courtyard Green",
      "hex": "#978d71",
      "good name": ""
    },
    {
      "name": "Couscous",
      "hex": "#ffe29b",
      "good name": "x"
    },
    {
      "name": "Cousteau",
      "hex": "#55a9d6",
      "good name": ""
    },
    {
      "name": "Cover of Night",
      "hex": "#494e4f",
      "good name": "x"
    },
    {
      "name": "Covered Bridge",
      "hex": "#6a3c3b",
      "good name": ""
    },
    {
      "name": "Covered in Platinum",
      "hex": "#b9baba",
      "good name": ""
    },
    {
      "name": "Covered Wagon",
      "hex": "#726449",
      "good name": ""
    },
    {
      "name": "Covert Green",
      "hex": "#80765f",
      "good name": ""
    },
    {
      "name": "Coverts Wood Pigeon",
      "hex": "#d4cdd2",
      "good name": ""
    },
    {
      "name": "Coveted Gem",
      "hex": "#b6b3bf",
      "good name": ""
    },
    {
      "name": "Cow's Milk",
      "hex": "#f1ede5",
      "good name": "x"
    },
    {
      "name": "Cowardly Custard",
      "hex": "#fbf1c0",
      "good name": ""
    },
    {
      "name": "Cowbell",
      "hex": "#ffe481",
      "good name": ""
    },
    {
      "name": "Cowboy",
      "hex": "#443736",
      "good name": "x"
    },
    {
      "name": "Cowboy Boots",
      "hex": "#695239",
      "good name": ""
    },
    {
      "name": "Cowboy Hat",
      "hex": "#b27d50",
      "good name": ""
    },
    {
      "name": "Cowboy Trails",
      "hex": "#8d6b4b",
      "good name": ""
    },
    {
      "name": "Cowgirl Blue",
      "hex": "#6a87ab",
      "good name": ""
    },
    {
      "name": "Cowgirl Boots",
      "hex": "#9e7c60",
      "good name": ""
    },
    {
      "name": "Cowhide",
      "hex": "#884344",
      "good name": ""
    },
    {
      "name": "Cowpeas",
      "hex": "#661100",
      "good name": ""
    },
    {
      "name": "Coy",
      "hex": "#fff4f3",
      "good name": ""
    },
    {
      "name": "Coy Pink",
      "hex": "#f9dad8",
      "good name": ""
    },
    {
      "name": "Coyote",
      "hex": "#dc9b68",
      "good name": "x"
    },
    {
      "name": "Coyote Brown",
      "hex": "#81613c",
      "good name": ""
    },
    {
      "name": "Coyote Tracks",
      "hex": "#b08f7f",
      "good name": ""
    },
    {
      "name": "Cozumel",
      "hex": "#0aafa4",
      "good name": ""
    },
    {
      "name": "Cozy Blanket",
      "hex": "#c3a598",
      "good name": ""
    },
    {
      "name": "Cozy Cocoa",
      "hex": "#aa8f7d",
      "good name": ""
    },
    {
      "name": "Cozy Cottage",
      "hex": "#f2ddd8",
      "good name": ""
    },
    {
      "name": "Cozy Cover",
      "hex": "#e4c38f",
      "good name": ""
    },
    {
      "name": "Cozy Cream",
      "hex": "#e0dbc7",
      "good name": ""
    },
    {
      "name": "Cozy Summer Sunset",
      "hex": "#eb9f9f",
      "good name": "x"
    },
    {
      "name": "Cozy Wool",
      "hex": "#d1b99b",
      "good name": "x"
    },
    {
      "name": "Crab Bisque",
      "hex": "#f0b599",
      "good name": ""
    },
    {
      "name": "Crab Nebula",
      "hex": "#004455",
      "good name": ""
    },
    {
      "name": "Crab-Apple",
      "hex": "#f0e681",
      "good name": ""
    },
    {
      "name": "Crabapple",
      "hex": "#87382f",
      "good name": ""
    },
    {
      "name": "Crabby Apple",
      "hex": "#753531",
      "good name": ""
    },
    {
      "name": "Crack Willow",
      "hex": "#b0a470",
      "good name": ""
    },
    {
      "name": "Cracked Earth",
      "hex": "#c5b1a0",
      "good name": ""
    },
    {
      "name": "Cracked Pepper",
      "hex": "#4f5152",
      "good name": ""
    },
    {
      "name": "Cracked Slate",
      "hex": "#69656a",
      "good name": ""
    },
    {
      "name": "Cracked Wheat",
      "hex": "#f4dfbd",
      "good name": ""
    },
    {
      "name": "Cracker Bitz",
      "hex": "#d1b088",
      "good name": ""
    },
    {
      "name": "Cracker Crumbs",
      "hex": "#d3b9b0",
      "good name": ""
    },
    {
      "name": "Crackled Leather",
      "hex": "#a27c4f",
      "good name": ""
    },
    {
      "name": "Crackling Lake",
      "hex": "#b3c5cc",
      "good name": ""
    },
    {
      "name": "Cradle Pillow",
      "hex": "#f1d3d9",
      "good name": ""
    },
    {
      "name": "Cradle Pink",
      "hex": "#edd0dd",
      "good name": ""
    },
    {
      "name": "Craft",
      "hex": "#293b4a",
      "good name": ""
    },
    {
      "name": "Craft Brown",
      "hex": "#b7a083",
      "good name": ""
    },
    {
      "name": "Craft Juggler",
      "hex": "#e3c8aa",
      "good name": ""
    },
    {
      "name": "Craft Paper",
      "hex": "#8a6645",
      "good name": ""
    },
    {
      "name": "Craftsman Blue",
      "hex": "#008193",
      "good name": ""
    },
    {
      "name": "Craftsman Brown",
      "hex": "#ae9278",
      "good name": ""
    },
    {
      "name": "Craftsman Gold",
      "hex": "#d3b78b",
      "good name": ""
    },
    {
      "name": "Craggy Skin",
      "hex": "#f7bd7b",
      "good name": ""
    },
    {
      "name": "Crail",
      "hex": "#a65648",
      "good name": ""
    },
    {
      "name": "Cranach Blue",
      "hex": "#2b8288",
      "good name": ""
    },
    {
      "name": "Cranapple",
      "hex": "#db8079",
      "good name": ""
    },
    {
      "name": "Cranapple Cream",
      "hex": "#e6c4c5",
      "good name": ""
    },
    {
      "name": "Cranberry",
      "hex": "#9e003a",
      "good name": "x"
    },
    {
      "name": "Cranberry Blue",
      "hex": "#7494b1",
      "good name": ""
    },
    {
      "name": "Cranberry Jam",
      "hex": "#a34f55",
      "good name": ""
    },
    {
      "name": "Cranberry Pie",
      "hex": "#c27277",
      "good name": ""
    },
    {
      "name": "Cranberry Red",
      "hex": "#7e5350",
      "good name": ""
    },
    {
      "name": "Cranberry Sauce",
      "hex": "#a53756",
      "good name": ""
    },
    {
      "name": "Cranberry Splash",
      "hex": "#da5265",
      "good name": "x"
    },
    {
      "name": "Cranberry Tart",
      "hex": "#893e40",
      "good name": ""
    },
    {
      "name": "Cranberry Whip",
      "hex": "#8e4541",
      "good name": ""
    },
    {
      "name": "Cranberry Zing",
      "hex": "#944944",
      "good name": ""
    },
    {
      "name": "Cranbrook",
      "hex": "#a65570",
      "good name": ""
    },
    {
      "name": "Crantini",
      "hex": "#954c52",
      "good name": ""
    },
    {
      "name": "Crash Dummy",
      "hex": "#eeee66",
      "good name": "x"
    },
    {
      "name": "Crash Pink",
      "hex": "#cc88ff",
      "good name": ""
    },
    {
      "name": "Crashing Waves",
      "hex": "#3e6f87",
      "good name": ""
    },
    {
      "name": "Crater Brown",
      "hex": "#4d3e3c",
      "good name": ""
    },
    {
      "name": "Crater Crawler",
      "hex": "#c8ced6",
      "good name": ""
    },
    {
      "name": "Crater Lake",
      "hex": "#63797e",
      "good name": ""
    },
    {
      "name": "Cray",
      "hex": "#bc763c",
      "good name": ""
    },
    {
      "name": "Crayola Green",
      "hex": "#1dac78",
      "good name": ""
    },
    {
      "name": "Crayola Orange",
      "hex": "#fe7438",
      "good name": ""
    },
    {
      "name": "Crazy",
      "hex": "#e5cb3f",
      "good name": ""
    },
    {
      "name": "Crazy Eyes",
      "hex": "#5eb68d",
      "good name": ""
    },
    {
      "name": "Crazy Horse",
      "hex": "#a57648",
      "good name": ""
    },
    {
      "name": "Crazy Horse Mountain",
      "hex": "#e9dbd2",
      "good name": ""
    },
    {
      "name": "Cream",
      "hex": "#ffffc2",
      "good name": "x"
    },
    {
      "name": "Cream and Butter",
      "hex": "#feeea5",
      "good name": "x"
    },
    {
      "name": "Cream and Sugar",
      "hex": "#ddcfb9",
      "good name": "x"
    },
    {
      "name": "Cream Blush",
      "hex": "#f8c19a",
      "good name": ""
    },
    {
      "name": "Cream Cake",
      "hex": "#e3d0ad",
      "good name": ""
    },
    {
      "name": "Cream Can",
      "hex": "#eec051",
      "good name": ""
    },
    {
      "name": "Cream Cheese Avocado",
      "hex": "#d7d3a6",
      "good name": ""
    },
    {
      "name": "Cream Cheese Frosting",
      "hex": "#f4efe2",
      "good name": ""
    },
    {
      "name": "Cream Clear",
      "hex": "#f1f3da",
      "good name": ""
    },
    {
      "name": "Cream Custard",
      "hex": "#f2d7b0",
      "good name": ""
    },
    {
      "name": "Cream Filling",
      "hex": "#f5f1da",
      "good name": ""
    },
    {
      "name": "Cream Gold",
      "hex": "#dec05f",
      "good name": ""
    },
    {
      "name": "Cream of Mushroom",
      "hex": "#ebd1be",
      "good name": ""
    },
    {
      "name": "Cream Pink",
      "hex": "#f6e4d9",
      "good name": ""
    },
    {
      "name": "Cream Puff",
      "hex": "#ffbb99",
      "good name": "x"
    },
    {
      "name": "Cream Rose",
      "hex": "#f7e4df",
      "good name": ""
    },
    {
      "name": "Cream Silk",
      "hex": "#eee3c6",
      "good name": ""
    },
    {
      "name": "Cream Tan",
      "hex": "#e4c7b8",
      "good name": ""
    },
    {
      "name": "Cream Violet",
      "hex": "#a9aabd",
      "good name": ""
    },
    {
      "name": "Cream Washed",
      "hex": "#f2e0c5",
      "good name": ""
    },
    {
      "name": "Cream Wave",
      "hex": "#e8dbc5",
      "good name": ""
    },
    {
      "name": "Cream White",
      "hex": "#f2eee2",
      "good name": ""
    },
    {
      "name": "Cream Yellow",
      "hex": "#f3daa7",
      "good name": ""
    },
    {
      "name": "Creamed Avocado",
      "hex": "#70804d",
      "good name": ""
    },
    {
      "name": "Creamed Butter",
      "hex": "#fffcd3",
      "good name": ""
    },
    {
      "name": "Creamed Caramel",
      "hex": "#b79c94",
      "good name": "x"
    },
    {
      "name": "Creamed Muscat",
      "hex": "#8b6962",
      "good name": ""
    },
    {
      "name": "Creamed Raspberry",
      "hex": "#bd6883",
      "good name": ""
    },
    {
      "name": "Creamery",
      "hex": "#edd2b7",
      "good name": ""
    },
    {
      "name": "Creamy",
      "hex": "#efe8db",
      "good name": "x"
    },
    {
      "name": "Creamy Apricot",
      "hex": "#ffe8bd",
      "good name": "x"
    },
    {
      "name": "Creamy Axolotl",
      "hex": "#ffdae8",
      "good name": ""
    },
    {
      "name": "Creamy Beige",
      "hex": "#fde1c5",
      "good name": ""
    },
    {
      "name": "Creamy Cameo",
      "hex": "#f9eedc",
      "good name": ""
    },
    {
      "name": "Creamy Cappuccino",
      "hex": "#dbccb5",
      "good name": ""
    },
    {
      "name": "Creamy Caramel",
      "hex": "#b3956c",
      "good name": ""
    },
    {
      "name": "Creamy Chenille",
      "hex": "#e1cfaf",
      "good name": ""
    },
    {
      "name": "Creamy Cloud Dreams",
      "hex": "#fff5e0",
      "good name": "x"
    },
    {
      "name": "Creamy Coral",
      "hex": "#dd7788",
      "good name": ""
    },
    {
      "name": "Creamy Corn",
      "hex": "#fff2c2",
      "good name": ""
    },
    {
      "name": "Creamy Custard",
      "hex": "#f9e7bf",
      "good name": ""
    },
    {
      "name": "Creamy Freesia",
      "hex": "#ebd0db",
      "good name": ""
    },
    {
      "name": "Creamy Gelato",
      "hex": "#f0e2c5",
      "good name": ""
    },
    {
      "name": "Creamy Ivory",
      "hex": "#eeddaa",
      "good name": "x"
    },
    {
      "name": "Creamy Mauve",
      "hex": "#dccad8",
      "good name": ""
    },
    {
      "name": "Creamy Mint",
      "hex": "#aaffaa",
      "good name": "x"
    },
    {
      "name": "Creamy Mushroom",
      "hex": "#cabdae",
      "good name": ""
    },
    {
      "name": "Creamy Nougat",
      "hex": "#d4b88f",
      "good name": ""
    },
    {
      "name": "Creamy Orange",
      "hex": "#fce9d1",
      "good name": ""
    },
    {
      "name": "Creamy Orange Blush",
      "hex": "#fe9c7b",
      "good name": ""
    },
    {
      "name": "Creamy Peach",
      "hex": "#f4a384",
      "good name": "x"
    },
    {
      "name": "Creamy Spinach",
      "hex": "#b2bfa6",
      "good name": ""
    },
    {
      "name": "Creamy Strawberry",
      "hex": "#fcd2df",
      "good name": ""
    },
    {
      "name": "Creamy Sunshine Pastel",
      "hex": "#fffbb0",
      "good name": ""
    },
    {
      "name": "Creamy White",
      "hex": "#f0e9d6",
      "good name": ""
    },
    {
      "name": "Crease",
      "hex": "#7a6d44",
      "good name": ""
    },
    {
      "name": "Create",
      "hex": "#c9cabf",
      "good name": ""
    },
    {
      "name": "Credo",
      "hex": "#dcba42",
      "good name": ""
    },
    {
      "name": "Creed",
      "hex": "#c1a44a",
      "good name": ""
    },
    {
      "name": "Creek Bay",
      "hex": "#ab9d89",
      "good name": ""
    },
    {
      "name": "Creek Bend",
      "hex": "#928c87",
      "good name": ""
    },
    {
      "name": "Creek Pebble",
      "hex": "#dbd7d9",
      "good name": ""
    },
    {
      "name": "Creeping Bellflower",
      "hex": "#b48ac2",
      "good name": ""
    },
    {
      "name": "Crema",
      "hex": "#c16104",
      "good name": ""
    },
    {
      "name": "Crème",
      "hex": "#ffffb6",
      "good name": ""
    },
    {
      "name": "Creme Angels",
      "hex": "#f8ede2",
      "good name": ""
    },
    {
      "name": "Creme Brulee",
      "hex": "#f5e9ce",
      "good name": ""
    },
    {
      "name": "Crème Brûlée",
      "hex": "#ffe39b",
      "good name": "x"
    },
    {
      "name": "Crème De Caramel",
      "hex": "#d4b38f",
      "good name": ""
    },
    {
      "name": "Crème De La Crème",
      "hex": "#e2ded7",
      "good name": ""
    },
    {
      "name": "Crème de la Crème",
      "hex": "#f3e7b4",
      "good name": "x"
    },
    {
      "name": "Crème de Menthe",
      "hex": "#f1fde9",
      "good name": ""
    },
    {
      "name": "Creme De Peche",
      "hex": "#f5d6c6",
      "good name": ""
    },
    {
      "name": "Creme Fraiche",
      "hex": "#eadbc9",
      "good name": ""
    },
    {
      "name": "Crème Fraîche",
      "hex": "#f7f0e2",
      "good name": "x"
    },
    {
      "name": "Cremini",
      "hex": "#cfa33b",
      "good name": ""
    },
    {
      "name": "Creole",
      "hex": "#393227",
      "good name": "x"
    },
    {
      "name": "Creole Cottage",
      "hex": "#e7b89a",
      "good name": ""
    },
    {
      "name": "Creole Pink",
      "hex": "#f7d5cc",
      "good name": ""
    },
    {
      "name": "Creole Sauce",
      "hex": "#ee8833",
      "good name": ""
    },
    {
      "name": "Crepe",
      "hex": "#d4bc94",
      "good name": "x"
    },
    {
      "name": "Crepe Myrtle",
      "hex": "#e399ca",
      "good name": ""
    },
    {
      "name": "Crêpe Papier",
      "hex": "#dbd7c4",
      "good name": ""
    },
    {
      "name": "Crepe Silk White",
      "hex": "#f0eee3",
      "good name": ""
    },
    {
      "name": "Crescendo",
      "hex": "#e3df84",
      "good name": ""
    },
    {
      "name": "Crescent Cream",
      "hex": "#edd1b1",
      "good name": ""
    },
    {
      "name": "Crescent Moon",
      "hex": "#f1e9cf",
      "good name": ""
    },
    {
      "name": "Cress Green",
      "hex": "#bca949",
      "good name": ""
    },
    {
      "name": "Cress Vinaigrette",
      "hex": "#bcb58a",
      "good name": ""
    },
    {
      "name": "Cressida",
      "hex": "#8aae7c",
      "good name": ""
    },
    {
      "name": "Crestline",
      "hex": "#b4bcbf",
      "good name": ""
    },
    {
      "name": "Cretan Green",
      "hex": "#598784",
      "good name": ""
    },
    {
      "name": "Crete",
      "hex": "#77712b",
      "good name": ""
    },
    {
      "name": "Crete Shore",
      "hex": "#96908b",
      "good name": ""
    },
    {
      "name": "Crewel Tan",
      "hex": "#cbb99b",
      "good name": ""
    },
    {
      "name": "Cria Wool",
      "hex": "#e4d5bc",
      "good name": ""
    },
    {
      "name": "Cricket",
      "hex": "#a6a081",
      "good name": ""
    },
    {
      "name": "Cricket Chirping",
      "hex": "#c7c10c",
      "good name": ""
    },
    {
      "name": "Cricket Field",
      "hex": "#c3d29c",
      "good name": ""
    },
    {
      "name": "Cricket Green",
      "hex": "#6a7b6b",
      "good name": ""
    },
    {
      "name": "Cricket's Cross",
      "hex": "#908a78",
      "good name": ""
    },
    {
      "name": "Crimson",
      "hex": "#8c000f",
      "good name": ""
    },
    {
      "name": "Crimson Glory",
      "hex": "#be0032",
      "good name": ""
    },
    {
      "name": "Crimson Red",
      "hex": "#980001",
      "good name": ""
    },
    {
      "name": "Crimson Silk",
      "hex": "#b5413b",
      "good name": ""
    },
    {
      "name": "Crimson Strawberry",
      "hex": "#9f2d47",
      "good name": ""
    },
    {
      "name": "Crisis Red",
      "hex": "#bb2222",
      "good name": ""
    },
    {
      "name": "Crisp",
      "hex": "#eaebaf",
      "good name": ""
    },
    {
      "name": "Crisp Candlelight",
      "hex": "#f4ebd0",
      "good name": ""
    },
    {
      "name": "Crisp Capsicum",
      "hex": "#5d6e3b",
      "good name": ""
    },
    {
      "name": "Crisp Celery",
      "hex": "#cdcca6",
      "good name": ""
    },
    {
      "name": "Crisp Cyan",
      "hex": "#22ffff",
      "good name": ""
    },
    {
      "name": "Crisp Green",
      "hex": "#abc43a",
      "good name": ""
    },
    {
      "name": "Crisp Lettuce",
      "hex": "#4f9785",
      "good name": ""
    },
    {
      "name": "Crisp Linen",
      "hex": "#e7e1d3",
      "good name": ""
    },
    {
      "name": "Crisp Muslin",
      "hex": "#e9e2d7",
      "good name": ""
    },
    {
      "name": "Crisp Wonton",
      "hex": "#f3dcc6",
      "good name": ""
    },
    {
      "name": "Crispa",
      "hex": "#e7dfc1",
      "good name": ""
    },
    {
      "name": "Crispy Chicken Skin",
      "hex": "#ddaa44",
      "good name": ""
    },
    {
      "name": "Crispy Crust",
      "hex": "#ebe0cf",
      "good name": ""
    },
    {
      "name": "Crispy Gingersnap",
      "hex": "#bb7838",
      "good name": ""
    },
    {
      "name": "Crispy Gold",
      "hex": "#c49832",
      "good name": ""
    },
    {
      "name": "Crispy Samosa",
      "hex": "#ffbb66",
      "good name": ""
    },
    {
      "name": "Crocker Grove",
      "hex": "#b1a685",
      "good name": ""
    },
    {
      "name": "Crockery",
      "hex": "#a49887",
      "good name": ""
    },
    {
      "name": "Crocodile",
      "hex": "#706950",
      "good name": ""
    },
    {
      "name": "Crocodile Eye",
      "hex": "#777722",
      "good name": ""
    },
    {
      "name": "Crocodile Green",
      "hex": "#b7ac87",
      "good name": ""
    },
    {
      "name": "Crocodile Smile",
      "hex": "#898e58",
      "good name": ""
    },
    {
      "name": "Crocodile Tears",
      "hex": "#d6d69b",
      "good name": ""
    },
    {
      "name": "Crocodile Tooth",
      "hex": "#d1ccc2",
      "good name": ""
    },
    {
      "name": "Crocus",
      "hex": "#c67fae",
      "good name": ""
    },
    {
      "name": "Crocus Petal",
      "hex": "#b99bc5",
      "good name": ""
    },
    {
      "name": "Crocus Tint",
      "hex": "#fdf1c7",
      "good name": ""
    },
    {
      "name": "Croissant",
      "hex": "#c4ab86",
      "good name": "x"
    },
    {
      "name": "Croissant Crumbs",
      "hex": "#f8efd8",
      "good name": ""
    },
    {
      "name": "Crooked River",
      "hex": "#797869",
      "good name": ""
    },
    {
      "name": "Crop Circle",
      "hex": "#e9bf63",
      "good name": ""
    },
    {
      "name": "Cropper Blue",
      "hex": "#5c7b97",
      "good name": ""
    },
    {
      "name": "Croque Monsieur",
      "hex": "#ac9877",
      "good name": ""
    },
    {
      "name": "Croquet Blue",
      "hex": "#4971ad",
      "good name": ""
    },
    {
      "name": "Cross My Heart",
      "hex": "#ad2a2d",
      "good name": ""
    },
    {
      "name": "Crossbow",
      "hex": "#60543f",
      "good name": ""
    },
    {
      "name": "Crossed Fingers",
      "hex": "#ddb596",
      "good name": ""
    },
    {
      "name": "Crossroads",
      "hex": "#edd2a3",
      "good name": ""
    },
    {
      "name": "Crow",
      "hex": "#180614",
      "good name": "x"
    },
    {
      "name": "Crow Black",
      "hex": "#263145",
      "good name": ""
    },
    {
      "name": "Crow Black Blue",
      "hex": "#112f4b",
      "good name": ""
    },
    {
      "name": "Crowberry",
      "hex": "#220055",
      "good name": ""
    },
    {
      "name": "Crowberry Blue",
      "hex": "#003447",
      "good name": ""
    },
    {
      "name": "Crowd Pleaser",
      "hex": "#5b4459",
      "good name": ""
    },
    {
      "name": "Crown Blue",
      "hex": "#464b65",
      "good name": ""
    },
    {
      "name": "Crown Gold",
      "hex": "#b48c60",
      "good name": ""
    },
    {
      "name": "Crown Jewel",
      "hex": "#482d54",
      "good name": "x"
    },
    {
      "name": "Crown Jewels",
      "hex": "#946dad",
      "good name": ""
    },
    {
      "name": "Crown of Thorns",
      "hex": "#763c33",
      "good name": "x"
    },
    {
      "name": "Crown Point Cream",
      "hex": "#fff0c1",
      "good name": ""
    },
    {
      "name": "Crowned One",
      "hex": "#d4b597",
      "good name": ""
    },
    {
      "name": "Crowning",
      "hex": "#5a4f6c",
      "good name": ""
    },
    {
      "name": "Crowshead",
      "hex": "#1c1208",
      "good name": ""
    },
    {
      "name": "Crucified Red",
      "hex": "#cc0044",
      "good name": ""
    },
    {
      "name": "Crude Banana",
      "hex": "#21c40e",
      "good name": "x"
    },
    {
      "name": "Cruel Jewel",
      "hex": "#ee2288",
      "good name": ""
    },
    {
      "name": "Cruel Ruby",
      "hex": "#dd3344",
      "good name": ""
    },
    {
      "name": "Cruel Sea",
      "hex": "#213638",
      "good name": ""
    },
    {
      "name": "Cruise",
      "hex": "#b4e2d5",
      "good name": ""
    },
    {
      "name": "Cruising",
      "hex": "#018498",
      "good name": ""
    },
    {
      "name": "Crumble Topping",
      "hex": "#efcea0",
      "good name": ""
    },
    {
      "name": "Crumbling Statue",
      "hex": "#cabfb4",
      "good name": "x"
    },
    {
      "name": "Crumbly Lipstick",
      "hex": "#ee66bb",
      "good name": ""
    },
    {
      "name": "Crunch",
      "hex": "#f2b95f",
      "good name": ""
    },
    {
      "name": "Crunchy Carrot",
      "hex": "#ea5013",
      "good name": "x"
    },
    {
      "name": "Crusade King",
      "hex": "#dbc364",
      "good name": "x"
    },
    {
      "name": "Crushed Almond",
      "hex": "#d4cac5",
      "good name": ""
    },
    {
      "name": "Crushed Berries",
      "hex": "#d15b9b",
      "good name": ""
    },
    {
      "name": "Crushed Berry",
      "hex": "#804f5a",
      "good name": ""
    },
    {
      "name": "Crushed Cashew",
      "hex": "#ffedd5",
      "good name": ""
    },
    {
      "name": "Crushed Cinnamon",
      "hex": "#b7735e",
      "good name": ""
    },
    {
      "name": "Crushed Clay",
      "hex": "#ae7f71",
      "good name": ""
    },
    {
      "name": "Crushed Grape",
      "hex": "#7a547f",
      "good name": ""
    },
    {
      "name": "Crushed Ice",
      "hex": "#c4fff7",
      "good name": "x"
    },
    {
      "name": "Crushed Limestone",
      "hex": "#d6ddd3",
      "good name": ""
    },
    {
      "name": "Crushed Orange",
      "hex": "#e37730",
      "good name": ""
    },
    {
      "name": "Crushed Oregano",
      "hex": "#635d46",
      "good name": ""
    },
    {
      "name": "Crushed Peony",
      "hex": "#e4ddd8",
      "good name": ""
    },
    {
      "name": "Crushed Pineapple",
      "hex": "#efcc44",
      "good name": ""
    },
    {
      "name": "Crushed Raspberry",
      "hex": "#b06880",
      "good name": ""
    },
    {
      "name": "Crushed Silk",
      "hex": "#d8cfbe",
      "good name": ""
    },
    {
      "name": "Crushed Stone",
      "hex": "#bcaa9f",
      "good name": ""
    },
    {
      "name": "Crushed Velvet",
      "hex": "#445397",
      "good name": ""
    },
    {
      "name": "Crushed Violets",
      "hex": "#643a4c",
      "good name": ""
    },
    {
      "name": "Crusoe",
      "hex": "#165b31",
      "good name": ""
    },
    {
      "name": "Crust",
      "hex": "#898076",
      "good name": ""
    },
    {
      "name": "Crusta",
      "hex": "#f38653",
      "good name": ""
    },
    {
      "name": "Crustose Lichen",
      "hex": "#c04e01",
      "good name": ""
    },
    {
      "name": "Cry Baby Blue",
      "hex": "#c3d4e7",
      "good name": ""
    },
    {
      "name": "Cryo Freeze",
      "hex": "#ddece0",
      "good name": "x"
    },
    {
      "name": "Crypt",
      "hex": "#373b40",
      "good name": ""
    },
    {
      "name": "Cryptic Light",
      "hex": "#6d434e",
      "good name": ""
    },
    {
      "name": "Crystal",
      "hex": "#a7d8de",
      "good name": "x"
    },
    {
      "name": "Crystal Apple",
      "hex": "#cee9a0",
      "good name": ""
    },
    {
      "name": "Crystal Ball",
      "hex": "#365955",
      "good name": ""
    },
    {
      "name": "Crystal Bell",
      "hex": "#efeeef",
      "good name": ""
    },
    {
      "name": "Crystal Blue",
      "hex": "#68a0b0",
      "good name": ""
    },
    {
      "name": "Crystal Brooke",
      "hex": "#e4e6dc",
      "good name": ""
    },
    {
      "name": "Crystal Clear",
      "hex": "#f4e9ea",
      "good name": ""
    },
    {
      "name": "Crystal Cut",
      "hex": "#f8f4ed",
      "good name": ""
    },
    {
      "name": "Crystal Dark Red",
      "hex": "#6d2c32",
      "good name": ""
    },
    {
      "name": "Crystal Falls",
      "hex": "#e1e6f2",
      "good name": ""
    },
    {
      "name": "Crystal Gem",
      "hex": "#79d0a7",
      "good name": "x"
    },
    {
      "name": "Crystal Glass",
      "hex": "#ddffee",
      "good name": ""
    },
    {
      "name": "Crystal Glass Green",
      "hex": "#b1e2cb",
      "good name": ""
    },
    {
      "name": "Crystal Green",
      "hex": "#a4d579",
      "good name": ""
    },
    {
      "name": "Crystal Grey",
      "hex": "#d7cbc4",
      "good name": ""
    },
    {
      "name": "Crystal Haze",
      "hex": "#e7e2d6",
      "good name": ""
    },
    {
      "name": "Crystal Lake",
      "hex": "#88b5c4",
      "good name": "x"
    },
    {
      "name": "Crystal Oasis",
      "hex": "#afc7bf",
      "good name": ""
    },
    {
      "name": "Crystal Palace",
      "hex": "#d3cfab",
      "good name": ""
    },
    {
      "name": "Crystal Pink",
      "hex": "#edd0ce",
      "good name": ""
    },
    {
      "name": "Crystal Rapids",
      "hex": "#b2e4d0",
      "good name": ""
    },
    {
      "name": "Crystal River",
      "hex": "#b1e2ee",
      "good name": ""
    },
    {
      "name": "Crystal Rose",
      "hex": "#fdc3c6",
      "good name": ""
    },
    {
      "name": "Crystal Salt White",
      "hex": "#d9e5dd",
      "good name": ""
    },
    {
      "name": "Crystal Seas",
      "hex": "#5dafce",
      "good name": ""
    },
    {
      "name": "Crystal Teal",
      "hex": "#00637c",
      "good name": ""
    },
    {
      "name": "Crystal Waters",
      "hex": "#b4cedf",
      "good name": ""
    },
    {
      "name": "Crystal Yellow",
      "hex": "#e4d99f",
      "good name": ""
    },
    {
      "name": "Crystalline",
      "hex": "#e9e3de",
      "good name": ""
    },
    {
      "name": "Crystalline Falls",
      "hex": "#d9e6e2",
      "good name": ""
    },
    {
      "name": "Crystalsong Blue",
      "hex": "#4fb3b3",
      "good name": ""
    },
    {
      "name": "Cub",
      "hex": "#6e5c4b",
      "good name": ""
    },
    {
      "name": "Cub Scout",
      "hex": "#4e6341",
      "good name": ""
    },
    {
      "name": "Cuba Brown",
      "hex": "#623d3d",
      "good name": ""
    },
    {
      "name": "Cuba Libre",
      "hex": "#73383c",
      "good name": "x"
    },
    {
      "name": "Cuban Cigar",
      "hex": "#927247",
      "good name": ""
    },
    {
      "name": "Cuban Rhythm",
      "hex": "#9b555d",
      "good name": ""
    },
    {
      "name": "Cuban Sand",
      "hex": "#c1a68d",
      "good name": ""
    },
    {
      "name": "Cucumber",
      "hex": "#006400",
      "good name": "x"
    },
    {
      "name": "Cucumber Bomber",
      "hex": "#bbdd11",
      "good name": "x"
    },
    {
      "name": "Cucumber Cream",
      "hex": "#e4ebb1",
      "good name": ""
    },
    {
      "name": "Cucumber Crush",
      "hex": "#a2ac86",
      "good name": ""
    },
    {
      "name": "Cucumber Green",
      "hex": "#466353",
      "good name": ""
    },
    {
      "name": "Cucumber Ice",
      "hex": "#cdd79d",
      "good name": ""
    },
    {
      "name": "Cucumber Milk",
      "hex": "#c2f177",
      "good name": "x"
    },
    {
      "name": "Cucuzza Verde",
      "hex": "#9ba373",
      "good name": ""
    },
    {
      "name": "Cuddle",
      "hex": "#bccae8",
      "good name": ""
    },
    {
      "name": "Cuddlepot",
      "hex": "#ad8068",
      "good name": ""
    },
    {
      "name": "Cuddly Yarn",
      "hex": "#fffce4",
      "good name": ""
    },
    {
      "name": "Culinary Blue",
      "hex": "#7bb6c1",
      "good name": ""
    },
    {
      "name": "Culpeo",
      "hex": "#e69b3a",
      "good name": ""
    },
    {
      "name": "Cultured",
      "hex": "#f6f4f5",
      "good name": ""
    },
    {
      "name": "Cultured Pearl",
      "hex": "#e5dcd6",
      "good name": ""
    },
    {
      "name": "Cultured Rose",
      "hex": "#e5867b",
      "good name": ""
    },
    {
      "name": "Cumberland Fog",
      "hex": "#dadbdf",
      "good name": ""
    },
    {
      "name": "Cumberland Sausage",
      "hex": "#e5dfdc",
      "good name": ""
    },
    {
      "name": "Cumin",
      "hex": "#a58459",
      "good name": "x"
    },
    {
      "name": "Cumin Ochre",
      "hex": "#a06600",
      "good name": ""
    },
    {
      "name": "Cummings Oak",
      "hex": "#695a45",
      "good name": ""
    },
    {
      "name": "Cumquat Cream",
      "hex": "#f19b7d",
      "good name": ""
    },
    {
      "name": "Cumulus",
      "hex": "#f3f3e6",
      "good name": "x"
    },
    {
      "name": "Cumulus Cloud",
      "hex": "#b0c6df",
      "good name": ""
    },
    {
      "name": "Cup of Cocoa",
      "hex": "#baa087",
      "good name": ""
    },
    {
      "name": "Cup of Tea",
      "hex": "#caae7b",
      "good name": ""
    },
    {
      "name": "Cupcake",
      "hex": "#8a6e53",
      "good name": ""
    },
    {
      "name": "Cupcake Pink",
      "hex": "#f6d8d2",
      "good name": ""
    },
    {
      "name": "Cupcake Rose",
      "hex": "#e6c7b7",
      "good name": ""
    },
    {
      "name": "Cupid",
      "hex": "#f5b2c5",
      "good name": "x"
    },
    {
      "name": "Cupid Arrow",
      "hex": "#f5e2e2",
      "good name": ""
    },
    {
      "name": "Cupid's Arrow",
      "hex": "#ee6b8b",
      "good name": ""
    },
    {
      "name": "Cupid's Eye",
      "hex": "#ff22dd",
      "good name": "x"
    },
    {
      "name": "Cupid's Revenge",
      "hex": "#eedcdf",
      "good name": ""
    },
    {
      "name": "Cupola Yellow",
      "hex": "#dcbc8e",
      "good name": ""
    },
    {
      "name": "Cuppa Coffee",
      "hex": "#b09f8f",
      "good name": ""
    },
    {
      "name": "Curaçao Blue",
      "hex": "#008894",
      "good name": ""
    },
    {
      "name": "Curd",
      "hex": "#f8e1ba",
      "good name": ""
    },
    {
      "name": "Curds and Whey",
      "hex": "#bca483",
      "good name": ""
    },
    {
      "name": "Cure All",
      "hex": "#aa6988",
      "good name": ""
    },
    {
      "name": "Cured Eggplant",
      "hex": "#380835",
      "good name": ""
    },
    {
      "name": "Curio",
      "hex": "#d3d8d2",
      "good name": ""
    },
    {
      "name": "Curio Brown",
      "hex": "#988977",
      "good name": ""
    },
    {
      "name": "Curious",
      "hex": "#d9e49e",
      "good name": ""
    },
    {
      "name": "Curious Blue",
      "hex": "#3d85b8",
      "good name": ""
    },
    {
      "name": "Curious Chipmunk",
      "hex": "#dabfa4",
      "good name": ""
    },
    {
      "name": "Curious Collection",
      "hex": "#d2bb98",
      "good name": ""
    },
    {
      "name": "Curlew",
      "hex": "#766859",
      "good name": ""
    },
    {
      "name": "Curly Maple",
      "hex": "#d8c8be",
      "good name": ""
    },
    {
      "name": "Curly Willow",
      "hex": "#b1a387",
      "good name": ""
    },
    {
      "name": "Currant Jam",
      "hex": "#884a50",
      "good name": ""
    },
    {
      "name": "Currant Violet",
      "hex": "#553e51",
      "good name": ""
    },
    {
      "name": "Curry",
      "hex": "#d6a332",
      "good name": "x"
    },
    {
      "name": "Curry Brown",
      "hex": "#845038",
      "good name": ""
    },
    {
      "name": "Curry Bubbels",
      "hex": "#f5b700",
      "good name": "x"
    },
    {
      "name": "Curry Powder",
      "hex": "#cc6600",
      "good name": ""
    },
    {
      "name": "Curry Sauce",
      "hex": "#be9e6f",
      "good name": "x"
    },
    {
      "name": "Currywurst",
      "hex": "#ddaa33",
      "good name": "x"
    },
    {
      "name": "Cursed Black",
      "hex": "#131313",
      "good name": "x"
    },
    {
      "name": "Curtain Call",
      "hex": "#70666a",
      "good name": ""
    },
    {
      "name": "Curtsy",
      "hex": "#ffd6b8",
      "good name": ""
    },
    {
      "name": "Cushion Bush",
      "hex": "#c1c8af",
      "good name": ""
    },
    {
      "name": "Custard",
      "hex": "#fffd78",
      "good name": ""
    },
    {
      "name": "Custard Cream",
      "hex": "#fbefd0",
      "good name": ""
    },
    {
      "name": "Custard Powder",
      "hex": "#f8dcaa",
      "good name": ""
    },
    {
      "name": "Custard Puff",
      "hex": "#fceeae",
      "good name": ""
    },
    {
      "name": "Customs Green",
      "hex": "#003839",
      "good name": ""
    },
    {
      "name": "Cut Heather",
      "hex": "#9e909e",
      "good name": ""
    },
    {
      "name": "Cut of Mustard",
      "hex": "#bc914d",
      "good name": ""
    },
    {
      "name": "Cut the Mustard",
      "hex": "#ba7f38",
      "good name": ""
    },
    {
      "name": "Cut Velvet",
      "hex": "#b391c8",
      "good name": ""
    },
    {
      "name": "Cute Crab",
      "hex": "#dd4444",
      "good name": "x"
    },
    {
      "name": "Cute Little Pink",
      "hex": "#f4e2e1",
      "good name": ""
    },
    {
      "name": "Cute Pixie",
      "hex": "#8d8d40",
      "good name": ""
    },
    {
      "name": "Cuticle Pink",
      "hex": "#e3a49a",
      "good name": ""
    },
    {
      "name": "Cutlery Polish",
      "hex": "#f4dda5",
      "good name": ""
    },
    {
      "name": "Cuttlefish",
      "hex": "#7fbbc2",
      "good name": "x"
    },
    {
      "name": "Cutty Sark",
      "hex": "#5c8173",
      "good name": ""
    },
    {
      "name": "Cyan",
      "hex": "#0ff0fe",
      "good name": "x"
    },
    {
      "name": "Cyan Azure",
      "hex": "#4e82b4",
      "good name": ""
    },
    {
      "name": "Cyan Blue",
      "hex": "#14a3c7",
      "good name": ""
    },
    {
      "name": "Cyan Cobalt Blue",
      "hex": "#28589c",
      "good name": ""
    },
    {
      "name": "Cyan Cornflower Blue",
      "hex": "#188bc2",
      "good name": ""
    },
    {
      "name": "Cyan Sky",
      "hex": "#00b5b8",
      "good name": ""
    },
    {
      "name": "Cyanara",
      "hex": "#779080",
      "good name": ""
    },
    {
      "name": "Cyanite",
      "hex": "#00b7eb",
      "good name": ""
    },
    {
      "name": "Cyber Grape",
      "hex": "#58427c",
      "good name": ""
    },
    {
      "name": "Cyber Lavender",
      "hex": "#e6e6fa",
      "good name": ""
    },
    {
      "name": "Cyber Yellow",
      "hex": "#ffd400",
      "good name": "x"
    },
    {
      "name": "Cyberpink",
      "hex": "#ff2077",
      "good name": "x"
    },
    {
      "name": "Cyberspace",
      "hex": "#44484d",
      "good name": ""
    },
    {
      "name": "Cyclamen",
      "hex": "#d687ba",
      "good name": ""
    },
    {
      "name": "Cyclamen Red",
      "hex": "#a7598d",
      "good name": ""
    },
    {
      "name": "Cymophane Yellow",
      "hex": "#f3e4a7",
      "good name": ""
    },
    {
      "name": "Cynical Black",
      "hex": "#171717",
      "good name": ""
    },
    {
      "name": "Cypress",
      "hex": "#545a3e",
      "good name": "x"
    },
    {
      "name": "Cypress Bark Red",
      "hex": "#6f3028",
      "good name": ""
    },
    {
      "name": "Cypress Garden",
      "hex": "#667c71",
      "good name": ""
    },
    {
      "name": "Cypress Green",
      "hex": "#9e8f57",
      "good name": ""
    },
    {
      "name": "Cypress Grey Blue",
      "hex": "#6a7786",
      "good name": ""
    },
    {
      "name": "Cypress Vine",
      "hex": "#5e6552",
      "good name": ""
    },
    {
      "name": "Cyprus",
      "hex": "#0f4645",
      "good name": ""
    },
    {
      "name": "Cyprus Green",
      "hex": "#699a88",
      "good name": ""
    },
    {
      "name": "Cyprus Spring",
      "hex": "#acb7b0",
      "good name": ""
    },
    {
      "name": "Cyrus Grass",
      "hex": "#cfc5a7",
      "good name": ""
    },
    {
      "name": "Czarina",
      "hex": "#775859",
      "good name": ""
    },
    {
      "name": "Czech Bakery",
      "hex": "#dec9a9",
      "good name": ""
    },
    {
      "name": "D. Darx Blue",
      "hex": "#030764",
      "good name": ""
    },
    {
      "name": "Da Blues",
      "hex": "#516172",
      "good name": ""
    },
    {
      "name": "Daah-Ling",
      "hex": "#aa6179",
      "good name": ""
    },
    {
      "name": "Dachshund",
      "hex": "#704f37",
      "good name": ""
    },
    {
      "name": "Dad's Coupe",
      "hex": "#2f484e",
      "good name": ""
    },
    {
      "name": "Daddy-O",
      "hex": "#b0af8a",
      "good name": ""
    },
    {
      "name": "Daemonette Hide",
      "hex": "#696684",
      "good name": ""
    },
    {
      "name": "Daffodil",
      "hex": "#ffff31",
      "good name": "x"
    },
    {
      "name": "Daffodil Yellow",
      "hex": "#ffe285",
      "good name": ""
    },
    {
      "name": "Dagger Moth",
      "hex": "#e8e1d5",
      "good name": ""
    },
    {
      "name": "Dahlia",
      "hex": "#843e83",
      "good name": ""
    },
    {
      "name": "Dahlia Delight",
      "hex": "#f8bbd3",
      "good name": ""
    },
    {
      "name": "Dahlia Matte Red",
      "hex": "#765067",
      "good name": ""
    },
    {
      "name": "Dahlia Mauve",
      "hex": "#a64f82",
      "good name": ""
    },
    {
      "name": "Dahlia Purple",
      "hex": "#7e6eac",
      "good name": ""
    },
    {
      "name": "Daikon White",
      "hex": "#d4d4c4",
      "good name": ""
    },
    {
      "name": "Daintree",
      "hex": "#012731",
      "good name": ""
    },
    {
      "name": "Dainty Apricot",
      "hex": "#fdc592",
      "good name": ""
    },
    {
      "name": "Dainty Debutante",
      "hex": "#f4bdb3",
      "good name": ""
    },
    {
      "name": "Dainty Flower",
      "hex": "#e9dfe5",
      "good name": ""
    },
    {
      "name": "Dainty Lace",
      "hex": "#decfbb",
      "good name": ""
    },
    {
      "name": "Dainty Pink",
      "hex": "#ecbcce",
      "good name": ""
    },
    {
      "name": "Daiquiri Green",
      "hex": "#c9d77e",
      "good name": ""
    },
    {
      "name": "Dairy Cream",
      "hex": "#edd2a4",
      "good name": ""
    },
    {
      "name": "Dairy Made",
      "hex": "#f0b33c",
      "good name": ""
    },
    {
      "name": "Daisy",
      "hex": "#fed340",
      "good name": ""
    },
    {
      "name": "Daisy Bush",
      "hex": "#5b3e90",
      "good name": ""
    },
    {
      "name": "Daisy Chain",
      "hex": "#fff09b",
      "good name": ""
    },
    {
      "name": "Daisy Desi",
      "hex": "#fcdf8a",
      "good name": "x"
    },
    {
      "name": "Daisy Field",
      "hex": "#f4f3e8",
      "good name": ""
    },
    {
      "name": "Daisy Leaf",
      "hex": "#55643b",
      "good name": ""
    },
    {
      "name": "Daisy White",
      "hex": "#f8f3e3",
      "good name": ""
    },
    {
      "name": "Dakota Wheat",
      "hex": "#e1bd8e",
      "good name": ""
    },
    {
      "name": "Dallas",
      "hex": "#664a2d",
      "good name": ""
    },
    {
      "name": "Dallas Dust",
      "hex": "#ece0d6",
      "good name": "x"
    },
    {
      "name": "Dallol Yellow",
      "hex": "#fddc00",
      "good name": ""
    },
    {
      "name": "Dalmatian Sage",
      "hex": "#97a3da",
      "good name": ""
    },
    {
      "name": "Daly Waters",
      "hex": "#afdadf",
      "good name": ""
    },
    {
      "name": "Damask",
      "hex": "#fcf2df",
      "good name": ""
    },
    {
      "name": "Dame Dignity",
      "hex": "#999ba8",
      "good name": ""
    },
    {
      "name": "Damp Basement",
      "hex": "#5f6171",
      "good name": ""
    },
    {
      "name": "Damsel",
      "hex": "#c69eae",
      "good name": ""
    },
    {
      "name": "Damson",
      "hex": "#854c65",
      "good name": ""
    },
    {
      "name": "Damson Mauve",
      "hex": "#583563",
      "good name": ""
    },
    {
      "name": "Damson Plum",
      "hex": "#dda0dd",
      "good name": ""
    },
    {
      "name": "Dana",
      "hex": "#576780",
      "good name": ""
    },
    {
      "name": "Dance Studio",
      "hex": "#064d83",
      "good name": ""
    },
    {
      "name": "Dancer",
      "hex": "#dc9399",
      "good name": ""
    },
    {
      "name": "Dancing Butterfly",
      "hex": "#fcf3c6",
      "good name": ""
    },
    {
      "name": "Dancing Crocodiles",
      "hex": "#254a47",
      "good name": ""
    },
    {
      "name": "Dancing Daisy",
      "hex": "#efc857",
      "good name": ""
    },
    {
      "name": "Dancing Dogs",
      "hex": "#6e493d",
      "good name": ""
    },
    {
      "name": "Dancing Dolphin",
      "hex": "#c4baa1",
      "good name": ""
    },
    {
      "name": "Dancing Dragonfly",
      "hex": "#006658",
      "good name": ""
    },
    {
      "name": "Dancing Green",
      "hex": "#c5cd8f",
      "good name": ""
    },
    {
      "name": "Dancing in the Rain",
      "hex": "#abc5d6",
      "good name": ""
    },
    {
      "name": "Dancing in the Spring",
      "hex": "#7b7289",
      "good name": ""
    },
    {
      "name": "Dancing Jewel",
      "hex": "#429b77",
      "good name": ""
    },
    {
      "name": "Dancing Kite",
      "hex": "#c8cc9e",
      "good name": ""
    },
    {
      "name": "Dancing Mist",
      "hex": "#bfc8d8",
      "good name": ""
    },
    {
      "name": "Dancing Sea",
      "hex": "#1c4d8f",
      "good name": "x"
    },
    {
      "name": "Dancing Wand",
      "hex": "#c8a4bd",
      "good name": ""
    },
    {
      "name": "Dancing-Lady Orchid",
      "hex": "#dfff00",
      "good name": ""
    },
    {
      "name": "Dandelion",
      "hex": "#fedf08",
      "good name": "x"
    },
    {
      "name": "Dandelion Floatie",
      "hex": "#eae8ec",
      "good name": ""
    },
    {
      "name": "Dandelion Tea",
      "hex": "#f7eac1",
      "good name": ""
    },
    {
      "name": "Dandelion Tincture",
      "hex": "#f0e130",
      "good name": ""
    },
    {
      "name": "Dandelion Whisper",
      "hex": "#fff0b5",
      "good name": ""
    },
    {
      "name": "Dandelion Wine",
      "hex": "#fcf2b9",
      "good name": ""
    },
    {
      "name": "Dandelion Wish",
      "hex": "#e3bb65",
      "good name": ""
    },
    {
      "name": "Dandelion Yellow",
      "hex": "#fcd93b",
      "good name": ""
    },
    {
      "name": "Dandy Lion",
      "hex": "#facc51",
      "good name": ""
    },
    {
      "name": "Danger",
      "hex": "#ff0e0e",
      "good name": "x"
    },
    {
      "name": "Danger Ridge",
      "hex": "#595539",
      "good name": ""
    },
    {
      "name": "Dangerous Robot",
      "hex": "#cbc5c6",
      "good name": "x"
    },
    {
      "name": "Dangerously Elegant",
      "hex": "#616b89",
      "good name": ""
    },
    {
      "name": "Dangerously Red",
      "hex": "#d84139",
      "good name": ""
    },
    {
      "name": "Daniel Boone",
      "hex": "#5e4235",
      "good name": ""
    },
    {
      "name": "Danish Pine",
      "hex": "#ba9967",
      "good name": ""
    },
    {
      "name": "Dante Peak",
      "hex": "#b4d5d5",
      "good name": ""
    },
    {
      "name": "Danube",
      "hex": "#5b89c0",
      "good name": ""
    },
    {
      "name": "Daphne",
      "hex": "#0f5f9a",
      "good name": ""
    },
    {
      "name": "Daphne Rose",
      "hex": "#c37cb3",
      "good name": ""
    },
    {
      "name": "Dapper",
      "hex": "#715b49",
      "good name": ""
    },
    {
      "name": "Dapper Dingo",
      "hex": "#e2c299",
      "good name": ""
    },
    {
      "name": "Dapper Greyhound",
      "hex": "#697078",
      "good name": ""
    },
    {
      "name": "Dapper Tan",
      "hex": "#947f65",
      "good name": ""
    },
    {
      "name": "Dapple Grey",
      "hex": "#959486",
      "good name": ""
    },
    {
      "name": "Dappled Sunlight",
      "hex": "#f2e3c9",
      "good name": ""
    },
    {
      "name": "Dard Hunter Green",
      "hex": "#3a4a3f",
      "good name": ""
    },
    {
      "name": "Daredevil",
      "hex": "#ab4343",
      "good name": ""
    },
    {
      "name": "Daring",
      "hex": "#df644e",
      "good name": ""
    },
    {
      "name": "Daring Deception",
      "hex": "#f0dfe0",
      "good name": ""
    },
    {
      "name": "Daring Indigo",
      "hex": "#374874",
      "good name": ""
    },
    {
      "name": "Dark",
      "hex": "#1b2431",
      "good name": "x"
    },
    {
      "name": "Dark & Stormy",
      "hex": "#353f51",
      "good name": "x"
    },
    {
      "name": "Dark Ages",
      "hex": "#9698a3",
      "good name": ""
    },
    {
      "name": "Dark as Night",
      "hex": "#495252",
      "good name": ""
    },
    {
      "name": "Dark Ash",
      "hex": "#6a6d6d",
      "good name": ""
    },
    {
      "name": "Dark Berry",
      "hex": "#5c464a",
      "good name": ""
    },
    {
      "name": "Dark Blackberry",
      "hex": "#533958",
      "good name": ""
    },
    {
      "name": "Dark Blond",
      "hex": "#a68a6e",
      "good name": ""
    },
    {
      "name": "Dark Blue",
      "hex": "#305679",
      "good name": "x"
    },
    {
      "name": "Dark Brazilian Topaz",
      "hex": "#92462f",
      "good name": ""
    },
    {
      "name": "Dark Burgundy Wine",
      "hex": "#4b4146",
      "good name": ""
    },
    {
      "name": "Dark Cavern",
      "hex": "#55504d",
      "good name": ""
    },
    {
      "name": "Dark Charcoal",
      "hex": "#333232",
      "good name": "x"
    },
    {
      "name": "Dark Cherry Mocha",
      "hex": "#774d41",
      "good name": ""
    },
    {
      "name": "Dark Citron",
      "hex": "#aabb00",
      "good name": ""
    },
    {
      "name": "Dark Clove",
      "hex": "#4c3d31",
      "good name": ""
    },
    {
      "name": "Dark Cobalt Blue",
      "hex": "#33578a",
      "good name": ""
    },
    {
      "name": "Dark Crimson",
      "hex": "#843c41",
      "good name": ""
    },
    {
      "name": "Dark Crypt",
      "hex": "#3f4551",
      "good name": "x"
    },
    {
      "name": "Dark Cyan",
      "hex": "#008b8b",
      "good name": "x"
    },
    {
      "name": "Dark Denim",
      "hex": "#005588",
      "good name": "x"
    },
    {
      "name": "Dark Denim Blue",
      "hex": "#00334f",
      "good name": ""
    },
    {
      "name": "Dark Dreams",
      "hex": "#332266",
      "good name": "x"
    },
    {
      "name": "Dark Earth",
      "hex": "#884455",
      "good name": ""
    },
    {
      "name": "Dark Eclipse",
      "hex": "#112244",
      "good name": "x"
    },
    {
      "name": "Dark Elf",
      "hex": "#3b3f42",
      "good name": ""
    },
    {
      "name": "Dark Emerald",
      "hex": "#00834e",
      "good name": ""
    },
    {
      "name": "Dark Energy",
      "hex": "#503d4d",
      "good name": ""
    },
    {
      "name": "Dark Engine",
      "hex": "#3e3f41",
      "good name": ""
    },
    {
      "name": "Dark Envy",
      "hex": "#a4a582",
      "good name": ""
    },
    {
      "name": "Dark Everglade",
      "hex": "#3e554f",
      "good name": ""
    },
    {
      "name": "Dark Fern",
      "hex": "#0a480d",
      "good name": ""
    },
    {
      "name": "Dark Fig Violet",
      "hex": "#573b4c",
      "good name": ""
    },
    {
      "name": "Dark Forest",
      "hex": "#556962",
      "good name": "x"
    },
    {
      "name": "Dark Galaxy",
      "hex": "#0018a8",
      "good name": "x"
    },
    {
      "name": "Dark Granite",
      "hex": "#4f443f",
      "good name": ""
    },
    {
      "name": "Dark Green",
      "hex": "#033500",
      "good name": ""
    },
    {
      "name": "Dark Grey",
      "hex": "#363737",
      "good name": ""
    },
    {
      "name": "Dark Grey Mauve",
      "hex": "#4e4459",
      "good name": ""
    },
    {
      "name": "Dark Horizon",
      "hex": "#666699",
      "good name": ""
    },
    {
      "name": "Dark Humor",
      "hex": "#661122",
      "good name": ""
    },
    {
      "name": "Dark Imperial Blue",
      "hex": "#00416a",
      "good name": ""
    },
    {
      "name": "Dark Iris",
      "hex": "#4d5a7e",
      "good name": ""
    },
    {
      "name": "Dark Ivy",
      "hex": "#5b7763",
      "good name": ""
    },
    {
      "name": "Dark Jade",
      "hex": "#5c8774",
      "good name": ""
    },
    {
      "name": "Dark Knight",
      "hex": "#151931",
      "good name": "x"
    },
    {
      "name": "Dark Lagoon",
      "hex": "#6a7f7d",
      "good name": ""
    },
    {
      "name": "Dark Lavender",
      "hex": "#856798",
      "good name": ""
    },
    {
      "name": "Dark Lemon Lime",
      "hex": "#8bbe1b",
      "good name": ""
    },
    {
      "name": "Dark Lilac",
      "hex": "#9c6da5",
      "good name": ""
    },
    {
      "name": "Dark Lime",
      "hex": "#84b701",
      "good name": ""
    },
    {
      "name": "Dark Lime Green",
      "hex": "#7ebd01",
      "good name": ""
    },
    {
      "name": "Dark Limestone",
      "hex": "#989a98",
      "good name": ""
    },
    {
      "name": "Dark LUA Console",
      "hex": "#5f574f",
      "good name": ""
    },
    {
      "name": "Dark Magenta",
      "hex": "#8b008b",
      "good name": ""
    },
    {
      "name": "Dark Mahogany",
      "hex": "#482029",
      "good name": ""
    },
    {
      "name": "Dark Marmalade",
      "hex": "#994939",
      "good name": ""
    },
    {
      "name": "Dark Maroon",
      "hex": "#3c0008",
      "good name": ""
    },
    {
      "name": "Dark Matter",
      "hex": "#110101",
      "good name": "x"
    },
    {
      "name": "Dark Midnight Blue",
      "hex": "#003377",
      "good name": ""
    },
    {
      "name": "Dark Mineral",
      "hex": "#515763",
      "good name": ""
    },
    {
      "name": "Dark Mountain Meadow",
      "hex": "#1ab385",
      "good name": ""
    },
    {
      "name": "Dark Navy",
      "hex": "#40495b",
      "good name": ""
    },
    {
      "name": "Dark Night",
      "hex": "#404b57",
      "good name": ""
    },
    {
      "name": "Dark Olive",
      "hex": "#373e02",
      "good name": "x"
    },
    {
      "name": "Dark Olive Green",
      "hex": "#454636",
      "good name": ""
    },
    {
      "name": "Dark Olive Paste",
      "hex": "#6e5160",
      "good name": ""
    },
    {
      "name": "Dark Onyx",
      "hex": "#2e2d30",
      "good name": ""
    },
    {
      "name": "Dark Orange",
      "hex": "#c65102",
      "good name": "x"
    },
    {
      "name": "Dark Pansy",
      "hex": "#653d7c",
      "good name": ""
    },
    {
      "name": "Dark Periwinkle",
      "hex": "#665fd1",
      "good name": ""
    },
    {
      "name": "Dark Pewter",
      "hex": "#606865",
      "good name": ""
    },
    {
      "name": "Dark Pine Green",
      "hex": "#193232",
      "good name": ""
    },
    {
      "name": "Dark Pink",
      "hex": "#cb416b",
      "good name": "x"
    },
    {
      "name": "Dark Potion",
      "hex": "#603e53",
      "good name": ""
    },
    {
      "name": "Dark Princess Pink",
      "hex": "#d9308a",
      "good name": ""
    },
    {
      "name": "Dark Puce",
      "hex": "#4f3a3c",
      "good name": ""
    },
    {
      "name": "Dark Purple",
      "hex": "#35063e",
      "good name": "x"
    },
    {
      "name": "Dark Purple Grey",
      "hex": "#6e576b",
      "good name": ""
    },
    {
      "name": "Dark Rainforest",
      "hex": "#505838",
      "good name": ""
    },
    {
      "name": "Dark Raspberry",
      "hex": "#872657",
      "good name": ""
    },
    {
      "name": "Dark Reaper",
      "hex": "#3b5150",
      "good name": ""
    },
    {
      "name": "Dark Red",
      "hex": "#840000",
      "good name": "x"
    },
    {
      "name": "Dark Red Brown",
      "hex": "#4a2125",
      "good name": ""
    },
    {
      "name": "Dark River",
      "hex": "#3e4445",
      "good name": ""
    },
    {
      "name": "Dark Room",
      "hex": "#626d7b",
      "good name": ""
    },
    {
      "name": "Dark Rose",
      "hex": "#b5485d",
      "good name": ""
    },
    {
      "name": "Dark Royalty",
      "hex": "#02066f",
      "good name": ""
    },
    {
      "name": "Dark Rum",
      "hex": "#45362b",
      "good name": "x"
    },
    {
      "name": "Dark Sage",
      "hex": "#6d765b",
      "good name": ""
    },
    {
      "name": "Dark Sakura",
      "hex": "#a2646f",
      "good name": ""
    },
    {
      "name": "Dark Salmon",
      "hex": "#c85a53",
      "good name": ""
    },
    {
      "name": "Dark Sanctuary",
      "hex": "#3f012c",
      "good name": "x"
    },
    {
      "name": "Dark Sand",
      "hex": "#a88f59",
      "good name": ""
    },
    {
      "name": "Dark Sapphire",
      "hex": "#082567",
      "good name": "x"
    },
    {
      "name": "Dark Sea",
      "hex": "#4c5560",
      "good name": ""
    },
    {
      "name": "Dark Seagreen",
      "hex": "#666655",
      "good name": ""
    },
    {
      "name": "Dark Seashore Night",
      "hex": "#113691",
      "good name": ""
    },
    {
      "name": "Dark Secret",
      "hex": "#3e5361",
      "good name": "x"
    },
    {
      "name": "Dark Shadow",
      "hex": "#4a4b4d",
      "good name": ""
    },
    {
      "name": "Dark Shadows",
      "hex": "#5b595d",
      "good name": ""
    },
    {
      "name": "Dark Shamrock",
      "hex": "#33cc99",
      "good name": ""
    },
    {
      "name": "Dark Side",
      "hex": "#004444",
      "good name": ""
    },
    {
      "name": "Dark Side of the Moon",
      "hex": "#070d0d",
      "good name": ""
    },
    {
      "name": "Dark Sienna",
      "hex": "#3c1414",
      "good name": ""
    },
    {
      "name": "Dark Sky",
      "hex": "#909989",
      "good name": ""
    },
    {
      "name": "Dark Slate",
      "hex": "#465352",
      "good name": ""
    },
    {
      "name": "Dark Slate Blue",
      "hex": "#214761",
      "good name": ""
    },
    {
      "name": "Dark Slate Grey",
      "hex": "#2f4f4f",
      "good name": ""
    },
    {
      "name": "Dark Slimelime",
      "hex": "#66aa11",
      "good name": ""
    },
    {
      "name": "Dark Sorrel",
      "hex": "#587a65",
      "good name": ""
    },
    {
      "name": "Dark Soul",
      "hex": "#112255",
      "good name": "x"
    },
    {
      "name": "Dark Souls",
      "hex": "#a3a3a2",
      "good name": "x"
    },
    {
      "name": "Dark Spell",
      "hex": "#303b4c",
      "good name": ""
    },
    {
      "name": "Dark Sting",
      "hex": "#7e736d",
      "good name": ""
    },
    {
      "name": "Dark Storm Cloud",
      "hex": "#819094",
      "good name": ""
    },
    {
      "name": "Dark Strawberry",
      "hex": "#80444c",
      "good name": ""
    },
    {
      "name": "Dark Summoning",
      "hex": "#383839",
      "good name": ""
    },
    {
      "name": "Dark Taupe",
      "hex": "#483c3c",
      "good name": ""
    },
    {
      "name": "Dark Tavern",
      "hex": "#634e43",
      "good name": ""
    },
    {
      "name": "Dark Teal",
      "hex": "#014d4e",
      "good name": ""
    },
    {
      "name": "Dark Tone Ink",
      "hex": "#121212",
      "good name": ""
    },
    {
      "name": "Dark Topaz",
      "hex": "#817c87",
      "good name": ""
    },
    {
      "name": "Dark Truffle",
      "hex": "#594d46",
      "good name": ""
    },
    {
      "name": "Dark Turquoise",
      "hex": "#045c5a",
      "good name": ""
    },
    {
      "name": "Dark Veil",
      "hex": "#141311",
      "good name": "x"
    },
    {
      "name": "Dark Violet",
      "hex": "#34013f",
      "good name": ""
    },
    {
      "name": "Dark Void",
      "hex": "#151517",
      "good name": "x"
    },
    {
      "name": "Dark Walnut",
      "hex": "#56443e",
      "good name": ""
    },
    {
      "name": "Dark Wood",
      "hex": "#855e42",
      "good name": "x"
    },
    {
      "name": "Dark Wood Grain",
      "hex": "#4f301f",
      "good name": ""
    },
    {
      "name": "Dark Yellow",
      "hex": "#e7bf8e",
      "good name": ""
    },
    {
      "name": "Darkest Dungeon",
      "hex": "#660011",
      "good name": "x"
    },
    {
      "name": "Darkest Grape",
      "hex": "#625768",
      "good name": ""
    },
    {
      "name": "Darkest Navy",
      "hex": "#43455e",
      "good name": ""
    },
    {
      "name": "Darkest Spruce",
      "hex": "#303f3d",
      "good name": ""
    },
    {
      "name": "Darkness",
      "hex": "#16160e",
      "good name": ""
    },
    {
      "name": "Darkness Green",
      "hex": "#3a4645",
      "good name": ""
    },
    {
      "name": "Darkout",
      "hex": "#2d1608",
      "good name": ""
    },
    {
      "name": "Darkroom",
      "hex": "#443e40",
      "good name": ""
    },
    {
      "name": "Darkshore",
      "hex": "#464964",
      "good name": ""
    },
    {
      "name": "Darlak",
      "hex": "#4f4969",
      "good name": ""
    },
    {
      "name": "Darling Bud",
      "hex": "#ff88ff",
      "good name": ""
    },
    {
      "name": "Darling Clementine",
      "hex": "#d29f7a",
      "good name": ""
    },
    {
      "name": "Darling Lilac",
      "hex": "#c9acd6",
      "good name": ""
    },
    {
      "name": "Darth Torus",
      "hex": "#1d045d",
      "good name": ""
    },
    {
      "name": "Darth Umber",
      "hex": "#932904",
      "good name": ""
    },
    {
      "name": "Darth Vader",
      "hex": "#0b0b0b",
      "good name": "x"
    },
    {
      "name": "Dartmoor Mist",
      "hex": "#cddce3",
      "good name": ""
    },
    {
      "name": "Dartmouth Green",
      "hex": "#00703c",
      "good name": ""
    },
    {
      "name": "Dash of Curry",
      "hex": "#ca6e5f",
      "good name": ""
    },
    {
      "name": "Dash of Oregano",
      "hex": "#928459",
      "good name": ""
    },
    {
      "name": "Dashing",
      "hex": "#eaebe8",
      "good name": ""
    },
    {
      "name": "Date Fruit Brown",
      "hex": "#af642b",
      "good name": ""
    },
    {
      "name": "DaVanzo Beige",
      "hex": "#ccac86",
      "good name": ""
    },
    {
      "name": "DaVanzo Green",
      "hex": "#58936d",
      "good name": ""
    },
    {
      "name": "Davao Green",
      "hex": "#b1d27b",
      "good name": ""
    },
    {
      "name": "Dave's Den",
      "hex": "#c3bfae",
      "good name": ""
    },
    {
      "name": "Davy's Grey",
      "hex": "#535554",
      "good name": ""
    },
    {
      "name": "Dawn",
      "hex": "#9f9d91",
      "good name": ""
    },
    {
      "name": "Dawn Blue",
      "hex": "#cacccb",
      "good name": ""
    },
    {
      "name": "Dawn Departs",
      "hex": "#ccffff",
      "good name": ""
    },
    {
      "name": "Dawn Grey",
      "hex": "#6d7273",
      "good name": ""
    },
    {
      "name": "Dawn of the Fairies",
      "hex": "#770044",
      "good name": ""
    },
    {
      "name": "Dawn Pink",
      "hex": "#e6d6cd",
      "good name": ""
    },
    {
      "name": "Dawnstone",
      "hex": "#70756e",
      "good name": ""
    },
    {
      "name": "Day At The Zoo",
      "hex": "#ffa373",
      "good name": ""
    },
    {
      "name": "Day Dreamer",
      "hex": "#d9cdc4",
      "good name": ""
    },
    {
      "name": "Day Glow",
      "hex": "#eadd82",
      "good name": ""
    },
    {
      "name": "Day Glow Orange",
      "hex": "#eb5c34",
      "good name": ""
    },
    {
      "name": "Day Lily",
      "hex": "#fff9ec",
      "good name": ""
    },
    {
      "name": "Day On Mercury",
      "hex": "#d5d2d1",
      "good name": "x"
    },
    {
      "name": "Day Spa",
      "hex": "#eaefed",
      "good name": ""
    },
    {
      "name": "Daybreak",
      "hex": "#8981a0",
      "good name": ""
    },
    {
      "name": "Daybreak Sun",
      "hex": "#f7eecb",
      "good name": ""
    },
    {
      "name": "Daydream",
      "hex": "#e3ebae",
      "good name": ""
    },
    {
      "name": "Daydreaming",
      "hex": "#f4f0e1",
      "good name": ""
    },
    {
      "name": "Dayflower",
      "hex": "#38a1db",
      "good name": ""
    },
    {
      "name": "Daylight Lilac",
      "hex": "#a385b3",
      "good name": ""
    },
    {
      "name": "Daylily Yellow",
      "hex": "#f8f0d2",
      "good name": ""
    },
    {
      "name": "Daystar",
      "hex": "#fff8da",
      "good name": ""
    },
    {
      "name": "Dazzle",
      "hex": "#5287b9",
      "good name": ""
    },
    {
      "name": "Dazzle and Delight",
      "hex": "#d99b7b",
      "good name": ""
    },
    {
      "name": "Dazzle Me",
      "hex": "#edebea",
      "good name": ""
    },
    {
      "name": "Dazzling Blue",
      "hex": "#3850a0",
      "good name": ""
    },
    {
      "name": "De York",
      "hex": "#85ca87",
      "good name": ""
    },
    {
      "name": "Dead 99",
      "hex": "#99dead",
      "good name": ""
    },
    {
      "name": "Dead Blue Eyes",
      "hex": "#0055cc",
      "good name": ""
    },
    {
      "name": "Dead Flesh",
      "hex": "#849b63",
      "good name": ""
    },
    {
      "name": "Dead Forest",
      "hex": "#434b4f",
      "good name": "x"
    },
    {
      "name": "Dead Grass",
      "hex": "#e4dc8a",
      "good name": ""
    },
    {
      "name": "Dead Lake",
      "hex": "#2e5a88",
      "good name": ""
    },
    {
      "name": "Dead Nettle White",
      "hex": "#d2dad0",
      "good name": ""
    },
    {
      "name": "Dead Pixel",
      "hex": "#3b3a3a",
      "good name": "x"
    },
    {
      "name": "Dead Sea",
      "hex": "#77eeee",
      "good name": ""
    },
    {
      "name": "Dead Sea Mud",
      "hex": "#3a403b",
      "good name": ""
    },
    {
      "name": "Deadlock",
      "hex": "#8f666a",
      "good name": ""
    },
    {
      "name": "Deadly Depths",
      "hex": "#111144",
      "good name": "x"
    },
    {
      "name": "Deadly Yellow",
      "hex": "#dead00",
      "good name": "x"
    },
    {
      "name": "Deadsy",
      "hex": "#c2a84b",
      "good name": ""
    },
    {
      "name": "Deadwind Pass",
      "hex": "#596d7f",
      "good name": ""
    },
    {
      "name": "Death by Chocolate",
      "hex": "#60443f",
      "good name": ""
    },
    {
      "name": "Death Cap",
      "hex": "#e7d9db",
      "good name": ""
    },
    {
      "name": "Death Guard",
      "hex": "#9eb37b",
      "good name": ""
    },
    {
      "name": "Death of a Star",
      "hex": "#e760d2",
      "good name": "x"
    },
    {
      "name": "Death Valley Beige",
      "hex": "#ddbb88",
      "good name": ""
    },
    {
      "name": "Deathclaw Brown",
      "hex": "#b36853",
      "good name": ""
    },
    {
      "name": "Deathworld Forest",
      "hex": "#5c6730",
      "good name": ""
    },
    {
      "name": "Deauville Mauve",
      "hex": "#af9294",
      "good name": ""
    },
    {
      "name": "Debian Red",
      "hex": "#d70a53",
      "good name": "x"
    },
    {
      "name": "Debonair",
      "hex": "#90a0a6",
      "good name": ""
    },
    {
      "name": "Debonaire",
      "hex": "#cbd0dd",
      "good name": ""
    },
    {
      "name": "Debrito",
      "hex": "#ee7744",
      "good name": ""
    },
    {
      "name": "Debutante Ball",
      "hex": "#6e8dbb",
      "good name": ""
    },
    {
      "name": "Decadence",
      "hex": "#73667b",
      "good name": ""
    },
    {
      "name": "Decadent Chocolate",
      "hex": "#513235",
      "good name": ""
    },
    {
      "name": "Decadial Pink",
      "hex": "#decade",
      "good name": "x"
    },
    {
      "name": "Decanter",
      "hex": "#ada3bb",
      "good name": ""
    },
    {
      "name": "Decanting",
      "hex": "#bfa1ad",
      "good name": ""
    },
    {
      "name": "Decaying Leave",
      "hex": "#d57835",
      "good name": ""
    },
    {
      "name": "December Dawn",
      "hex": "#dfe2ea",
      "good name": ""
    },
    {
      "name": "December Eve",
      "hex": "#415064",
      "good name": ""
    },
    {
      "name": "December Forest",
      "hex": "#e0e8db",
      "good name": ""
    },
    {
      "name": "December Rain",
      "hex": "#d6dddc",
      "good name": ""
    },
    {
      "name": "December Sky",
      "hex": "#d5d7d9",
      "good name": ""
    },
    {
      "name": "Decency",
      "hex": "#bfb5ca",
      "good name": ""
    },
    {
      "name": "Dechala Lilac",
      "hex": "#b69fcc",
      "good name": ""
    },
    {
      "name": "Dechant Pear Yellow",
      "hex": "#d79e62",
      "good name": ""
    },
    {
      "name": "Decisive Yellow",
      "hex": "#fdcc4e",
      "good name": ""
    },
    {
      "name": "Deck Crew",
      "hex": "#5e7cac",
      "good name": ""
    },
    {
      "name": "Deco",
      "hex": "#cccf82",
      "good name": ""
    },
    {
      "name": "Deco Grey",
      "hex": "#89978e",
      "good name": ""
    },
    {
      "name": "Deco Pink",
      "hex": "#f6c2cc",
      "good name": ""
    },
    {
      "name": "Deco Red",
      "hex": "#824942",
      "good name": ""
    },
    {
      "name": "Deco Rose",
      "hex": "#985f68",
      "good name": ""
    },
    {
      "name": "Deco Shell",
      "hex": "#f9d5c9",
      "good name": ""
    },
    {
      "name": "Deco-Rate",
      "hex": "#8fcbc0",
      "good name": ""
    },
    {
      "name": "Deconstruction",
      "hex": "#7b736b",
      "good name": ""
    },
    {
      "name": "Décor White",
      "hex": "#f2e5cf",
      "good name": ""
    },
    {
      "name": "Decor Yellow",
      "hex": "#f6bb00",
      "good name": ""
    },
    {
      "name": "Decoration Blue",
      "hex": "#3f74a3",
      "good name": ""
    },
    {
      "name": "Decorative Iris",
      "hex": "#817181",
      "good name": ""
    },
    {
      "name": "Decorator White",
      "hex": "#f6f4ec",
      "good name": ""
    },
    {
      "name": "Decore Splash",
      "hex": "#00829e",
      "good name": ""
    },
    {
      "name": "Decorous Amber",
      "hex": "#ac7559",
      "good name": ""
    },
    {
      "name": "Decorum",
      "hex": "#b39aa0",
      "good name": ""
    },
    {
      "name": "Decreasing Brown",
      "hex": "#987654",
      "good name": ""
    },
    {
      "name": "Dedication",
      "hex": "#fee2c8",
      "good name": ""
    },
    {
      "name": "Deduction",
      "hex": "#d4cb83",
      "good name": ""
    },
    {
      "name": "Deep Amethyst",
      "hex": "#5b3082",
      "good name": ""
    },
    {
      "name": "Deep Aquamarine",
      "hex": "#78dbe2",
      "good name": ""
    },
    {
      "name": "Deep Atlantic Blue",
      "hex": "#004f57",
      "good name": ""
    },
    {
      "name": "Deep Aubergine",
      "hex": "#5c4a4d",
      "good name": ""
    },
    {
      "name": "Deep Azure",
      "hex": "#3e5580",
      "good name": ""
    },
    {
      "name": "Deep Bamboo Yellow",
      "hex": "#d99f50",
      "good name": ""
    },
    {
      "name": "Deep Bloom",
      "hex": "#c57776",
      "good name": ""
    },
    {
      "name": "Deep Blue",
      "hex": "#040273",
      "good name": ""
    },
    {
      "name": "Deep Blue Sea",
      "hex": "#1a5d72",
      "good name": ""
    },
    {
      "name": "Deep Blush",
      "hex": "#e36f8a",
      "good name": ""
    },
    {
      "name": "Deep Bottlebrush",
      "hex": "#5e675a",
      "good name": ""
    },
    {
      "name": "Deep Breath",
      "hex": "#27275f",
      "good name": ""
    },
    {
      "name": "Deep Bronze",
      "hex": "#51412d",
      "good name": ""
    },
    {
      "name": "Deep Brown",
      "hex": "#342a2a",
      "good name": ""
    },
    {
      "name": "Deep Cerulean",
      "hex": "#007bbb",
      "good name": ""
    },
    {
      "name": "Deep Champagne",
      "hex": "#fad6c5",
      "good name": ""
    },
    {
      "name": "Deep Cherrywood",
      "hex": "#6b473d",
      "good name": ""
    },
    {
      "name": "Deep Chestnut",
      "hex": "#b94e48",
      "good name": ""
    },
    {
      "name": "Deep Claret",
      "hex": "#771133",
      "good name": ""
    },
    {
      "name": "Deep Cobalt",
      "hex": "#404466",
      "good name": ""
    },
    {
      "name": "Deep Coral",
      "hex": "#da7c55",
      "good name": ""
    },
    {
      "name": "Deep Cove",
      "hex": "#051040",
      "good name": ""
    },
    {
      "name": "Deep Current",
      "hex": "#007381",
      "good name": ""
    },
    {
      "name": "Deep Daichi Black",
      "hex": "#322d2d",
      "good name": ""
    },
    {
      "name": "Deep Daigi White",
      "hex": "#e9e7e6",
      "good name": ""
    },
    {
      "name": "Deep Daijin Blue",
      "hex": "#3311aa",
      "good name": ""
    },
    {
      "name": "Deep Dairei Red",
      "hex": "#7c2229",
      "good name": ""
    },
    {
      "name": "Deep Daishin Yellow",
      "hex": "#f0ca00",
      "good name": ""
    },
    {
      "name": "Deep Daitoku Purple",
      "hex": "#661177",
      "good name": ""
    },
    {
      "name": "Deep Denim",
      "hex": "#6688ff",
      "good name": ""
    },
    {
      "name": "Deep Depths",
      "hex": "#46483c",
      "good name": ""
    },
    {
      "name": "Deep Dive",
      "hex": "#29495c",
      "good name": ""
    },
    {
      "name": "Deep Diving",
      "hex": "#5e97a9",
      "good name": ""
    },
    {
      "name": "Deep Dungeon",
      "hex": "#553d3a",
      "good name": ""
    },
    {
      "name": "Deep Earth",
      "hex": "#4d4b4b",
      "good name": ""
    },
    {
      "name": "Deep Emerald",
      "hex": "#556551",
      "good name": ""
    },
    {
      "name": "Deep Evergreen",
      "hex": "#4c574b",
      "good name": ""
    },
    {
      "name": "Deep Exquisite",
      "hex": "#614454",
      "good name": ""
    },
    {
      "name": "Deep Fir",
      "hex": "#193925",
      "good name": ""
    },
    {
      "name": "Deep Fire",
      "hex": "#bf5c42",
      "good name": ""
    },
    {
      "name": "Deep Forest",
      "hex": "#37413a",
      "good name": "x"
    },
    {
      "name": "Deep Forest Brown",
      "hex": "#393437",
      "good name": ""
    },
    {
      "name": "Deep Forestial Escapade",
      "hex": "#335500",
      "good name": "x"
    },
    {
      "name": "Deep Garnet",
      "hex": "#5f4246",
      "good name": ""
    },
    {
      "name": "Deep Green",
      "hex": "#02590f",
      "good name": "x"
    },
    {
      "name": "Deep Indigo",
      "hex": "#4c567a",
      "good name": ""
    },
    {
      "name": "Deep into the Jungle",
      "hex": "#004b49",
      "good name": ""
    },
    {
      "name": "Deep into the Wood",
      "hex": "#306030",
      "good name": ""
    },
    {
      "name": "Deep Jungle",
      "hex": "#3f564a",
      "good name": ""
    },
    {
      "name": "Deep Koamaru",
      "hex": "#343467",
      "good name": ""
    },
    {
      "name": "Deep Lagoon",
      "hex": "#005265",
      "good name": "x"
    },
    {
      "name": "Deep Lake",
      "hex": "#00656b",
      "good name": ""
    },
    {
      "name": "Deep Lavender",
      "hex": "#565a7d",
      "good name": ""
    },
    {
      "name": "Deep Loch",
      "hex": "#2e5767",
      "good name": ""
    },
    {
      "name": "Deep Magenta",
      "hex": "#a0025c",
      "good name": ""
    },
    {
      "name": "Deep Marine",
      "hex": "#2e6469",
      "good name": ""
    },
    {
      "name": "Deep Maroon",
      "hex": "#623f45",
      "good name": ""
    },
    {
      "name": "Deep Marsh",
      "hex": "#938565",
      "good name": ""
    },
    {
      "name": "Deep Merlot",
      "hex": "#574958",
      "good name": ""
    },
    {
      "name": "Deep Mint",
      "hex": "#55aa66",
      "good name": ""
    },
    {
      "name": "Deep Mulberry",
      "hex": "#544954",
      "good name": ""
    },
    {
      "name": "Deep Mystery",
      "hex": "#494c59",
      "good name": ""
    },
    {
      "name": "Deep Night",
      "hex": "#494c55",
      "good name": "x"
    },
    {
      "name": "Deep Ocean",
      "hex": "#2a4b5f",
      "good name": ""
    },
    {
      "name": "Deep Orange",
      "hex": "#dc4d01",
      "good name": ""
    },
    {
      "name": "Deep Orange-coloured Brown",
      "hex": "#864735",
      "good name": ""
    },
    {
      "name": "Deep Orchid",
      "hex": "#525476",
      "good name": ""
    },
    {
      "name": "Deep Pacific",
      "hex": "#006e62",
      "good name": ""
    },
    {
      "name": "Deep Peacock Blue",
      "hex": "#008381",
      "good name": ""
    },
    {
      "name": "Deep Periwinkle",
      "hex": "#7c83bc",
      "good name": ""
    },
    {
      "name": "Deep Pond",
      "hex": "#014420",
      "good name": ""
    },
    {
      "name": "Deep Purple",
      "hex": "#36013f",
      "good name": ""
    },
    {
      "name": "Deep Red",
      "hex": "#9a0200",
      "good name": ""
    },
    {
      "name": "Deep Reddish Orange",
      "hex": "#bb603c",
      "good name": ""
    },
    {
      "name": "Deep Reservoir",
      "hex": "#424f5f",
      "good name": ""
    },
    {
      "name": "Deep Rhubarb",
      "hex": "#7f5153",
      "good name": ""
    },
    {
      "name": "Deep Rift",
      "hex": "#4c6a68",
      "good name": ""
    },
    {
      "name": "Deep River",
      "hex": "#0079b3",
      "good name": ""
    },
    {
      "name": "Deep Royal",
      "hex": "#364c68",
      "good name": ""
    },
    {
      "name": "Deep Saffron",
      "hex": "#ff9932",
      "good name": "x"
    },
    {
      "name": "Deep Sanction",
      "hex": "#195155",
      "good name": ""
    },
    {
      "name": "Deep Sea",
      "hex": "#167e65",
      "good name": ""
    },
    {
      "name": "Deep Sea Base",
      "hex": "#2c2c57",
      "good name": ""
    },
    {
      "name": "Deep Sea Blue",
      "hex": "#2a4b5a",
      "good name": ""
    },
    {
      "name": "Deep Sea Coral",
      "hex": "#d9615b",
      "good name": ""
    },
    {
      "name": "Deep Sea Dive",
      "hex": "#376167",
      "good name": ""
    },
    {
      "name": "Deep Sea Diver",
      "hex": "#255c61",
      "good name": "x"
    },
    {
      "name": "Deep Sea Dolphin",
      "hex": "#6a6873",
      "good name": ""
    },
    {
      "name": "Deep Sea Dream",
      "hex": "#002d69",
      "good name": ""
    },
    {
      "name": "Deep Sea Exploration",
      "hex": "#2000b1",
      "good name": ""
    },
    {
      "name": "Deep Sea Green",
      "hex": "#095859",
      "good name": ""
    },
    {
      "name": "Deep Sea Grey",
      "hex": "#879294",
      "good name": ""
    },
    {
      "name": "Deep Sea Nightmare",
      "hex": "#002366",
      "good name": "x"
    },
    {
      "name": "Deep Sea Shadow",
      "hex": "#4f5a4c",
      "good name": ""
    },
    {
      "name": "Deep Sea Turtle",
      "hex": "#5e5749",
      "good name": ""
    },
    {
      "name": "Deep Seagrass",
      "hex": "#959889",
      "good name": ""
    },
    {
      "name": "Deep Seaweed",
      "hex": "#37412a",
      "good name": ""
    },
    {
      "name": "Deep Serenity",
      "hex": "#7f6968",
      "good name": ""
    },
    {
      "name": "Deep Shadow",
      "hex": "#514a3d",
      "good name": ""
    },
    {
      "name": "Deep Shale",
      "hex": "#737c84",
      "good name": ""
    },
    {
      "name": "Deep Sky Blue",
      "hex": "#0d75f8",
      "good name": "x"
    },
    {
      "name": "Deep Smoke Signal",
      "hex": "#7d8392",
      "good name": ""
    },
    {
      "name": "Deep South",
      "hex": "#b4989f",
      "good name": ""
    },
    {
      "name": "Deep Space",
      "hex": "#3f4143",
      "good name": ""
    },
    {
      "name": "Deep Space Rodeo",
      "hex": "#332277",
      "good name": "x"
    },
    {
      "name": "Deep Space Royal",
      "hex": "#223382",
      "good name": ""
    },
    {
      "name": "Deep Space Sparkle",
      "hex": "#4a646c",
      "good name": ""
    },
    {
      "name": "Deep Tan",
      "hex": "#726751",
      "good name": ""
    },
    {
      "name": "Deep Taupe",
      "hex": "#7b6660",
      "good name": ""
    },
    {
      "name": "Deep Teal",
      "hex": "#00555a",
      "good name": ""
    },
    {
      "name": "Deep Terra Cotta",
      "hex": "#8b483d",
      "good name": ""
    },
    {
      "name": "Deep Velvet",
      "hex": "#313248",
      "good name": ""
    },
    {
      "name": "Deep Violet",
      "hex": "#330066",
      "good name": ""
    },
    {
      "name": "Deep Viridian",
      "hex": "#4b6443",
      "good name": ""
    },
    {
      "name": "Deep Walnut",
      "hex": "#615d58",
      "good name": ""
    },
    {
      "name": "Deep Water",
      "hex": "#266691",
      "good name": ""
    },
    {
      "name": "Deep Well",
      "hex": "#2c2a33",
      "good name": ""
    },
    {
      "name": "Deep Wisteria",
      "hex": "#443f6f",
      "good name": ""
    },
    {
      "name": "Deepest Mauve",
      "hex": "#6d595a",
      "good name": ""
    },
    {
      "name": "Deepest Sea",
      "hex": "#444d56",
      "good name": ""
    },
    {
      "name": "Deepest Water",
      "hex": "#466174",
      "good name": ""
    },
    {
      "name": "Deeply Embarrassed",
      "hex": "#ecb2b3",
      "good name": "x"
    },
    {
      "name": "Deepsea Kraken",
      "hex": "#082599",
      "good name": "x"
    },
    {
      "name": "Deer",
      "hex": "#ba8759",
      "good name": "x"
    },
    {
      "name": "Deer God",
      "hex": "#96847a",
      "good name": ""
    },
    {
      "name": "Deer Leather",
      "hex": "#ac7434",
      "good name": ""
    },
    {
      "name": "Deer Run",
      "hex": "#b2a69a",
      "good name": ""
    },
    {
      "name": "Deer Tracks",
      "hex": "#a1614c",
      "good name": ""
    },
    {
      "name": "Deer Trail",
      "hex": "#6a634c",
      "good name": ""
    },
    {
      "name": "Deer Valley",
      "hex": "#c7a485",
      "good name": ""
    },
    {
      "name": "Defenestration",
      "hex": "#c6d5e4",
      "good name": ""
    },
    {
      "name": "Defense Matrix",
      "hex": "#88ffee",
      "good name": ""
    },
    {
      "name": "Degas Pink",
      "hex": "#b37e8c",
      "good name": ""
    },
    {
      "name": "Déjà Vu",
      "hex": "#bed1cc",
      "good name": ""
    },
    {
      "name": "Del Rio",
      "hex": "#b5998e",
      "good name": ""
    },
    {
      "name": "Del Sol Maize",
      "hex": "#dabf92",
      "good name": ""
    },
    {
      "name": "Delaunay Green",
      "hex": "#aab350",
      "good name": ""
    },
    {
      "name": "Delaware Blue Hen",
      "hex": "#76a09e",
      "good name": ""
    },
    {
      "name": "Delayed Yellow",
      "hex": "#fdf901",
      "good name": "x"
    },
    {
      "name": "Delectable",
      "hex": "#9a92a7",
      "good name": ""
    },
    {
      "name": "Delft",
      "hex": "#3d5e8c",
      "good name": ""
    },
    {
      "name": "Delft Blue",
      "hex": "#3311ee",
      "good name": ""
    },
    {
      "name": "Delhi Dance Pink",
      "hex": "#fdc1c5",
      "good name": ""
    },
    {
      "name": "Delhi Spice",
      "hex": "#a36a6d",
      "good name": ""
    },
    {
      "name": "Deli Yellow",
      "hex": "#e8b523",
      "good name": "x"
    },
    {
      "name": "Delicacy",
      "hex": "#f5e3e2",
      "good name": ""
    },
    {
      "name": "Delicacy White",
      "hex": "#ebe2e5",
      "good name": ""
    },
    {
      "name": "Delicate Ballet Blue",
      "hex": "#c2d1e2",
      "good name": ""
    },
    {
      "name": "Delicate Bloom",
      "hex": "#dbbfce",
      "good name": ""
    },
    {
      "name": "Delicate Blue",
      "hex": "#bcdfe8",
      "good name": ""
    },
    {
      "name": "Delicate Blue Mist",
      "hex": "#bed7f0",
      "good name": ""
    },
    {
      "name": "Delicate Blush",
      "hex": "#efd7d1",
      "good name": ""
    },
    {
      "name": "Delicate Brown",
      "hex": "#a78c8b",
      "good name": ""
    },
    {
      "name": "Delicate Cloud",
      "hex": "#dddfe8",
      "good name": "x"
    },
    {
      "name": "Delicate Daisy",
      "hex": "#e9edc0",
      "good name": ""
    },
    {
      "name": "Delicate Dawn",
      "hex": "#fed9bc",
      "good name": ""
    },
    {
      "name": "Delicate Girl Blue",
      "hex": "#6ab2ca",
      "good name": ""
    },
    {
      "name": "Delicate Green",
      "hex": "#93b0a9",
      "good name": ""
    },
    {
      "name": "Delicate Honeysweet",
      "hex": "#bcab99",
      "good name": ""
    },
    {
      "name": "Delicate Ice",
      "hex": "#b7d2e3",
      "good name": "x"
    },
    {
      "name": "Delicate Lace",
      "hex": "#f3e6d4",
      "good name": ""
    },
    {
      "name": "Delicate Lemon",
      "hex": "#eedd77",
      "good name": "x"
    },
    {
      "name": "Delicate Lilac Crystal",
      "hex": "#d7d2e2",
      "good name": ""
    },
    {
      "name": "Delicate Mauve",
      "hex": "#c5b5ca",
      "good name": ""
    },
    {
      "name": "Delicate Mint",
      "hex": "#ddf3e6",
      "good name": ""
    },
    {
      "name": "Delicate Mist",
      "hex": "#e1ebe5",
      "good name": ""
    },
    {
      "name": "Delicate Pink",
      "hex": "#e4cfd3",
      "good name": ""
    },
    {
      "name": "Delicate Prunus",
      "hex": "#a95c68",
      "good name": ""
    },
    {
      "name": "Delicate Rose",
      "hex": "#f7e0d6",
      "good name": ""
    },
    {
      "name": "Delicate Sapling",
      "hex": "#d7f3dd",
      "good name": ""
    },
    {
      "name": "Delicate Seashell",
      "hex": "#ffefdd",
      "good name": "x"
    },
    {
      "name": "Delicate Snow Goose",
      "hex": "#d1e2d8",
      "good name": ""
    },
    {
      "name": "Delicate Sweet Apricot",
      "hex": "#fdcdbd",
      "good name": ""
    },
    {
      "name": "Delicate Truffle",
      "hex": "#aa9c8b",
      "good name": ""
    },
    {
      "name": "Delicate Turquoise",
      "hex": "#c0dfe2",
      "good name": ""
    },
    {
      "name": "Delicate Viola",
      "hex": "#d7d6dc",
      "good name": ""
    },
    {
      "name": "Delicate Violet",
      "hex": "#8c8da8",
      "good name": ""
    },
    {
      "name": "Delicate White",
      "hex": "#f1f2ee",
      "good name": ""
    },
    {
      "name": "Délicieux au Chocolat",
      "hex": "#412010",
      "good name": "x"
    },
    {
      "name": "Delicioso",
      "hex": "#3f352f",
      "good name": ""
    },
    {
      "name": "Delicious",
      "hex": "#585e46",
      "good name": ""
    },
    {
      "name": "Delicious Berry",
      "hex": "#654254",
      "good name": ""
    },
    {
      "name": "Delicious Dill",
      "hex": "#77cc00",
      "good name": ""
    },
    {
      "name": "Delicious Mandarin",
      "hex": "#ffaa11",
      "good name": ""
    },
    {
      "name": "Delicious Melon",
      "hex": "#ffd7b0",
      "good name": ""
    },
    {
      "name": "Delightful",
      "hex": "#d2b6be",
      "good name": ""
    },
    {
      "name": "Delightful Camouflage",
      "hex": "#a5a943",
      "good name": ""
    },
    {
      "name": "Delightful Dandelion",
      "hex": "#eeee33",
      "good name": ""
    },
    {
      "name": "Delightful Green",
      "hex": "#00ee00",
      "good name": ""
    },
    {
      "name": "Delightful Pastry",
      "hex": "#f9e7c8",
      "good name": ""
    },
    {
      "name": "Delightful Peach",
      "hex": "#ffebd1",
      "good name": ""
    },
    {
      "name": "Delirious Donkey",
      "hex": "#ddcccc",
      "good name": ""
    },
    {
      "name": "Dell",
      "hex": "#486531",
      "good name": ""
    },
    {
      "name": "Della Robbia Blue",
      "hex": "#7a9dcb",
      "good name": ""
    },
    {
      "name": "Delltone",
      "hex": "#8ec39e",
      "good name": ""
    },
    {
      "name": "Delos Blue",
      "hex": "#169ec0",
      "good name": ""
    },
    {
      "name": "Delphinium Blue",
      "hex": "#6198ae",
      "good name": ""
    },
    {
      "name": "Delta",
      "hex": "#999b95",
      "good name": ""
    },
    {
      "name": "Delta Break",
      "hex": "#979147",
      "good name": ""
    },
    {
      "name": "Delta Green",
      "hex": "#2d4a4c",
      "good name": ""
    },
    {
      "name": "Delta Mint",
      "hex": "#c5e6cf",
      "good name": "x"
    },
    {
      "name": "Delta Waters",
      "hex": "#c4c2ab",
      "good name": ""
    },
    {
      "name": "Deluge",
      "hex": "#0077aa",
      "good name": ""
    },
    {
      "name": "Delusional Dragonfly",
      "hex": "#66bbcc",
      "good name": ""
    },
    {
      "name": "Deluxe Days",
      "hex": "#8bc7e6",
      "good name": ""
    },
    {
      "name": "Demerara Sugar",
      "hex": "#e1b270",
      "good name": ""
    },
    {
      "name": "Demeter",
      "hex": "#ecda9e",
      "good name": ""
    },
    {
      "name": "Demeter Green",
      "hex": "#02cc02",
      "good name": "x"
    },
    {
      "name": "Demitasse",
      "hex": "#40342b",
      "good name": ""
    },
    {
      "name": "Democrat",
      "hex": "#00aef3",
      "good name": ""
    },
    {
      "name": "Demon",
      "hex": "#224376",
      "good name": ""
    },
    {
      "name": "Demonic",
      "hex": "#bb2233",
      "good name": "x"
    },
    {
      "name": "Demonic Presence",
      "hex": "#7c0a02",
      "good name": ""
    },
    {
      "name": "Demonic Purple",
      "hex": "#d725de",
      "good name": ""
    },
    {
      "name": "Demonic Yellow",
      "hex": "#ffe700",
      "good name": ""
    },
    {
      "name": "Demure",
      "hex": "#e8d4d5",
      "good name": ""
    },
    {
      "name": "Demure Pink",
      "hex": "#f7d2c4",
      "good name": ""
    },
    {
      "name": "Denali Green",
      "hex": "#7d775d",
      "good name": ""
    },
    {
      "name": "Denim",
      "hex": "#2243b6",
      "good name": "x"
    },
    {
      "name": "Denim Blue",
      "hex": "#2f6479",
      "good name": ""
    },
    {
      "name": "Denim Drift",
      "hex": "#7c8d96",
      "good name": ""
    },
    {
      "name": "Denim Light",
      "hex": "#b8cad5",
      "good name": ""
    },
    {
      "name": "Denim Tradition",
      "hex": "#7f97b5",
      "good name": ""
    },
    {
      "name": "Dense Shrub",
      "hex": "#636d65",
      "good name": ""
    },
    {
      "name": "Dent Corn",
      "hex": "#f2b717",
      "good name": ""
    },
    {
      "name": "Dentist Green",
      "hex": "#99d590",
      "good name": ""
    },
    {
      "name": "Denver River",
      "hex": "#7795c1",
      "good name": ""
    },
    {
      "name": "Dépaysement",
      "hex": "#e7d8c7",
      "good name": ""
    },
    {
      "name": "Depth Charge",
      "hex": "#355859",
      "good name": ""
    },
    {
      "name": "Derby",
      "hex": "#f9e4c6",
      "good name": ""
    },
    {
      "name": "Derby Brown",
      "hex": "#8a7265",
      "good name": ""
    },
    {
      "name": "Derby Green",
      "hex": "#599c89",
      "good name": ""
    },
    {
      "name": "Derbyshire",
      "hex": "#245e36",
      "good name": ""
    },
    {
      "name": "Derry Coast Sunrise",
      "hex": "#f9e1cf",
      "good name": ""
    },
    {
      "name": "Desaturated Cyan",
      "hex": "#669999",
      "good name": ""
    },
    {
      "name": "Descent to the Catacombs",
      "hex": "#445155",
      "good name": ""
    },
    {
      "name": "Desert",
      "hex": "#ccad60",
      "good name": "x"
    },
    {
      "name": "Desert Bud",
      "hex": "#c28996",
      "good name": ""
    },
    {
      "name": "Desert Cactus",
      "hex": "#afca9d",
      "good name": ""
    },
    {
      "name": "Desert Camel",
      "hex": "#c2ae88",
      "good name": ""
    },
    {
      "name": "Desert Caravan",
      "hex": "#d3a169",
      "good name": ""
    },
    {
      "name": "Desert Chaparral",
      "hex": "#727a60",
      "good name": ""
    },
    {
      "name": "Desert Clay",
      "hex": "#9e6e43",
      "good name": ""
    },
    {
      "name": "Desert Convoy",
      "hex": "#f7d497",
      "good name": ""
    },
    {
      "name": "Desert Coral",
      "hex": "#d16459",
      "good name": ""
    },
    {
      "name": "Desert Cover",
      "hex": "#d0c8a9",
      "good name": ""
    },
    {
      "name": "Desert Dawn",
      "hex": "#eddbe8",
      "good name": ""
    },
    {
      "name": "Desert Dessert",
      "hex": "#ffba6b",
      "good name": "x"
    },
    {
      "name": "Desert Dune",
      "hex": "#b5ab9c",
      "good name": "x"
    },
    {
      "name": "Desert Dusk",
      "hex": "#ad9a91",
      "good name": ""
    },
    {
      "name": "Desert Dust",
      "hex": "#e3bc8e",
      "good name": ""
    },
    {
      "name": "Desert Echo",
      "hex": "#b6a29d",
      "good name": ""
    },
    {
      "name": "Desert Field",
      "hex": "#efcdb8",
      "good name": ""
    },
    {
      "name": "Desert Floor",
      "hex": "#c6b183",
      "good name": ""
    },
    {
      "name": "Desert Flower",
      "hex": "#ff9687",
      "good name": ""
    },
    {
      "name": "Desert Grey",
      "hex": "#b8a487",
      "good name": ""
    },
    {
      "name": "Desert Hot Springs",
      "hex": "#c4c8aa",
      "good name": ""
    },
    {
      "name": "Desert Iguana",
      "hex": "#f3f2e1",
      "good name": ""
    },
    {
      "name": "Desert Khaki",
      "hex": "#d6cdb7",
      "good name": ""
    },
    {
      "name": "Desert Lights",
      "hex": "#bd9c9d",
      "good name": ""
    },
    {
      "name": "Desert Lily",
      "hex": "#fef5db",
      "good name": ""
    },
    {
      "name": "Desert Locust",
      "hex": "#a9a450",
      "good name": "x"
    },
    {
      "name": "Desert Mauve",
      "hex": "#e8d2d6",
      "good name": ""
    },
    {
      "name": "Desert Mesa",
      "hex": "#efcfbc",
      "good name": ""
    },
    {
      "name": "Desert Mirage",
      "hex": "#b9e0cf",
      "good name": ""
    },
    {
      "name": "Desert Mist",
      "hex": "#e0b589",
      "good name": ""
    },
    {
      "name": "Desert Morning",
      "hex": "#d0bbb0",
      "good name": ""
    },
    {
      "name": "Desert Moss",
      "hex": "#bea166",
      "good name": ""
    },
    {
      "name": "Desert Night",
      "hex": "#5f727a",
      "good name": ""
    },
    {
      "name": "Desert Palm",
      "hex": "#5a4632",
      "good name": ""
    },
    {
      "name": "Desert Panzer",
      "hex": "#c0cabc",
      "good name": ""
    },
    {
      "name": "Desert Pear",
      "hex": "#aaae9a",
      "good name": ""
    },
    {
      "name": "Desert Pebble",
      "hex": "#cab698",
      "good name": ""
    },
    {
      "name": "Desert Plain",
      "hex": "#e5ddc9",
      "good name": ""
    },
    {
      "name": "Desert Powder",
      "hex": "#fbefda",
      "good name": ""
    },
    {
      "name": "Desert Red",
      "hex": "#b3837f",
      "good name": ""
    },
    {
      "name": "Desert Riverbed",
      "hex": "#d5a884",
      "good name": ""
    },
    {
      "name": "Desert Rock",
      "hex": "#d5c6bd",
      "good name": ""
    },
    {
      "name": "Desert Rose",
      "hex": "#cf6977",
      "good name": ""
    },
    {
      "name": "Desert Sage",
      "hex": "#90926f",
      "good name": ""
    },
    {
      "name": "Desert Sand",
      "hex": "#edc9af",
      "good name": ""
    },
    {
      "name": "Desert Sandstorm",
      "hex": "#b9a795",
      "good name": ""
    },
    {
      "name": "Desert Shadow",
      "hex": "#403c39",
      "good name": ""
    },
    {
      "name": "Desert Shadows",
      "hex": "#9f927a",
      "good name": ""
    },
    {
      "name": "Desert Soil",
      "hex": "#a15f3b",
      "good name": ""
    },
    {
      "name": "Desert Spice",
      "hex": "#c66b30",
      "good name": ""
    },
    {
      "name": "Desert Springs",
      "hex": "#dcddcb",
      "good name": ""
    },
    {
      "name": "Desert Star",
      "hex": "#f9f0e1",
      "good name": ""
    },
    {
      "name": "Desert Storm",
      "hex": "#ede7e0",
      "good name": ""
    },
    {
      "name": "Desert Suede",
      "hex": "#d5c7b3",
      "good name": ""
    },
    {
      "name": "Desert Sun",
      "hex": "#c87629",
      "good name": ""
    },
    {
      "name": "Desert Sunrise",
      "hex": "#fcb58d",
      "good name": ""
    },
    {
      "name": "Desert Tan",
      "hex": "#a38c6c",
      "good name": ""
    },
    {
      "name": "Desert Taupe",
      "hex": "#8d7e71",
      "good name": ""
    },
    {
      "name": "Desert Temple",
      "hex": "#ddcc99",
      "good name": "x"
    },
    {
      "name": "Desert Willow",
      "hex": "#89734b",
      "good name": ""
    },
    {
      "name": "Desert Wind",
      "hex": "#e5d295",
      "good name": ""
    },
    {
      "name": "Desert Yellow",
      "hex": "#a29259",
      "good name": ""
    },
    {
      "name": "Deserted Beach",
      "hex": "#e7dbbf",
      "good name": "x"
    },
    {
      "name": "Deserted Island",
      "hex": "#857c64",
      "good name": ""
    },
    {
      "name": "Deserted Path",
      "hex": "#e7bf7b",
      "good name": ""
    },
    {
      "name": "Design Delight",
      "hex": "#a47bac",
      "good name": ""
    },
    {
      "name": "Designer Cream Yellow",
      "hex": "#efe5bb",
      "good name": ""
    },
    {
      "name": "Designer Pink",
      "hex": "#e1bcd8",
      "good name": ""
    },
    {
      "name": "Designer White",
      "hex": "#e7ded1",
      "good name": ""
    },
    {
      "name": "Desire",
      "hex": "#ea3c53",
      "good name": "x"
    },
    {
      "name": "Desire Pink",
      "hex": "#eec5d2",
      "good name": ""
    },
    {
      "name": "Desired Dawn",
      "hex": "#d8d7d9",
      "good name": "x"
    },
    {
      "name": "Desireé",
      "hex": "#c4adb8",
      "good name": ""
    },
    {
      "name": "Desolace Dew",
      "hex": "#b5c1a9",
      "good name": ""
    },
    {
      "name": "Desolate Field",
      "hex": "#d3cbc6",
      "good name": ""
    },
    {
      "name": "Dessert Cream",
      "hex": "#f6e4d0",
      "good name": ""
    },
    {
      "name": "Destiny",
      "hex": "#cfc9c6",
      "good name": ""
    },
    {
      "name": "Destroyer Grey",
      "hex": "#98968d",
      "good name": ""
    },
    {
      "name": "Destroying Angels",
      "hex": "#e9e9e1",
      "good name": ""
    },
    {
      "name": "Detailed Devil",
      "hex": "#ff3355",
      "good name": ""
    },
    {
      "name": "Detective Coat",
      "hex": "#8b8685",
      "good name": "x"
    },
    {
      "name": "Determined Orange",
      "hex": "#c56639",
      "good name": ""
    },
    {
      "name": "Detroit",
      "hex": "#bdd0d1",
      "good name": ""
    },
    {
      "name": "Deutzia White",
      "hex": "#f7fcfe",
      "good name": ""
    },
    {
      "name": "Device Green",
      "hex": "#006b4d",
      "good name": ""
    },
    {
      "name": "Devil Blue",
      "hex": "#277594",
      "good name": ""
    },
    {
      "name": "Devil's Advocate",
      "hex": "#ff3344",
      "good name": "x"
    },
    {
      "name": "Devil's Flower Mantis",
      "hex": "#8f9805",
      "good name": ""
    },
    {
      "name": "Devil's Grass",
      "hex": "#44aa55",
      "good name": ""
    },
    {
      "name": "Devil's Lip",
      "hex": "#662a2c",
      "good name": ""
    },
    {
      "name": "Devil's Plum",
      "hex": "#423450",
      "good name": ""
    },
    {
      "name": "Devil’s Butterfly",
      "hex": "#bb4422",
      "good name": ""
    },
    {
      "name": "Deviled Egg",
      "hex": "#fdd77a",
      "good name": ""
    },
    {
      "name": "Devilish",
      "hex": "#dd3322",
      "good name": "x"
    },
    {
      "name": "Devilish Diva",
      "hex": "#ce7790",
      "good name": "x"
    },
    {
      "name": "Devlan Mud",
      "hex": "#5a573f",
      "good name": ""
    },
    {
      "name": "Devlan Mud Wash",
      "hex": "#3c3523",
      "good name": ""
    },
    {
      "name": "Devon Rex",
      "hex": "#717e6f",
      "good name": ""
    },
    {
      "name": "Devonshire",
      "hex": "#f5efe7",
      "good name": ""
    },
    {
      "name": "Dew",
      "hex": "#e7f2e9",
      "good name": ""
    },
    {
      "name": "Dew Drop",
      "hex": "#e8eee5",
      "good name": ""
    },
    {
      "name": "Dew Green",
      "hex": "#97b391",
      "good name": ""
    },
    {
      "name": "Dew Not Disturb",
      "hex": "#cee3dc",
      "good name": ""
    },
    {
      "name": "Dew Pointe",
      "hex": "#d7ede8",
      "good name": ""
    },
    {
      "name": "Dewberry",
      "hex": "#8b5987",
      "good name": ""
    },
    {
      "name": "Dewdrop",
      "hex": "#dde4e3",
      "good name": ""
    },
    {
      "name": "Dewkist",
      "hex": "#c4d1c2",
      "good name": ""
    },
    {
      "name": "Dewmist Delight",
      "hex": "#dceedb",
      "good name": ""
    },
    {
      "name": "Dewpoint",
      "hex": "#b2ced2",
      "good name": ""
    },
    {
      "name": "Dewy",
      "hex": "#d6e1d8",
      "good name": ""
    },
    {
      "name": "Dexter",
      "hex": "#6bb1b4",
      "good name": ""
    },
    {
      "name": "Dhalsim's Yoga Flame",
      "hex": "#fae432",
      "good name": ""
    },
    {
      "name": "Dhurrie Beige",
      "hex": "#cabaa8",
      "good name": ""
    },
    {
      "name": "Dhūsar Grey",
      "hex": "#aaaaaa",
      "good name": ""
    },
    {
      "name": "Di Sierra",
      "hex": "#db995e",
      "good name": ""
    },
    {
      "name": "Diablo Red",
      "hex": "#cd0d01",
      "good name": ""
    },
    {
      "name": "Diamond",
      "hex": "#faf7e2",
      "good name": "x"
    },
    {
      "name": "Diamond Black",
      "hex": "#2b303e",
      "good name": ""
    },
    {
      "name": "Diamond Blue",
      "hex": "#cfe4ee",
      "good name": ""
    },
    {
      "name": "Diamond Dust",
      "hex": "#f8f5e5",
      "good name": ""
    },
    {
      "name": "Diamond Grey",
      "hex": "#3e474b",
      "good name": ""
    },
    {
      "name": "Diamond Light",
      "hex": "#dfe7ec",
      "good name": ""
    },
    {
      "name": "Diamond Soft Blue",
      "hex": "#bcdaec",
      "good name": ""
    },
    {
      "name": "Diamond Stud",
      "hex": "#dcdbdc",
      "good name": ""
    },
    {
      "name": "Diamond White",
      "hex": "#e2eff3",
      "good name": "x"
    },
    {
      "name": "Diamonds In The Sky",
      "hex": "#e5e2e1",
      "good name": ""
    },
    {
      "name": "Diamonds Therapy",
      "hex": "#e9e8e0",
      "good name": ""
    },
    {
      "name": "Diantha",
      "hex": "#fcf6dc",
      "good name": ""
    },
    {
      "name": "Dianthus Mauve",
      "hex": "#8d6d89",
      "good name": ""
    },
    {
      "name": "Dickie Bird",
      "hex": "#60b8be",
      "good name": ""
    },
    {
      "name": "Diesel",
      "hex": "#322c2b",
      "good name": "x"
    },
    {
      "name": "Different Gold",
      "hex": "#bc934d",
      "good name": ""
    },
    {
      "name": "Diffused Light",
      "hex": "#ebe5d5",
      "good name": ""
    },
    {
      "name": "Diffused Orchid",
      "hex": "#9879a2",
      "good name": ""
    },
    {
      "name": "Digger's Gold",
      "hex": "#a37336",
      "good name": "x"
    },
    {
      "name": "Digital",
      "hex": "#636365",
      "good name": ""
    },
    {
      "name": "Digital Garage",
      "hex": "#b7b3a4",
      "good name": ""
    },
    {
      "name": "Digital Violets",
      "hex": "#aa00ff",
      "good name": ""
    },
    {
      "name": "Digital Yellow",
      "hex": "#ffeb7e",
      "good name": ""
    },
    {
      "name": "Dignified",
      "hex": "#3b695f",
      "good name": ""
    },
    {
      "name": "Dignified Purple",
      "hex": "#716264",
      "good name": ""
    },
    {
      "name": "Dignity Blue",
      "hex": "#094c73",
      "good name": ""
    },
    {
      "name": "Diisha Green",
      "hex": "#007044",
      "good name": ""
    },
    {
      "name": "Dijon",
      "hex": "#97754c",
      "good name": ""
    },
    {
      "name": "Dijon Mustard",
      "hex": "#e2ca73",
      "good name": "x"
    },
    {
      "name": "Dijonnaise",
      "hex": "#9b8f55",
      "good name": ""
    },
    {
      "name": "Dill",
      "hex": "#6f7755",
      "good name": "x"
    },
    {
      "name": "Dill Grass",
      "hex": "#a2a57b",
      "good name": ""
    },
    {
      "name": "Dill Green",
      "hex": "#b6ac4b",
      "good name": ""
    },
    {
      "name": "Dill Pickle",
      "hex": "#67744a",
      "good name": ""
    },
    {
      "name": "Dill Powder",
      "hex": "#9da073",
      "good name": ""
    },
    {
      "name": "Dill Seed",
      "hex": "#b3b295",
      "good name": ""
    },
    {
      "name": "Dillard's Blue",
      "hex": "#d6e9e4",
      "good name": ""
    },
    {
      "name": "Dilly Blue",
      "hex": "#35495a",
      "good name": ""
    },
    {
      "name": "Dilly Dally",
      "hex": "#f6db5d",
      "good name": ""
    },
    {
      "name": "Diluno Red",
      "hex": "#f46860",
      "good name": ""
    },
    {
      "name": "Diluted Blue",
      "hex": "#b8def2",
      "good name": ""
    },
    {
      "name": "Diluted Green",
      "hex": "#ddeae0",
      "good name": ""
    },
    {
      "name": "Diluted Lilac",
      "hex": "#dadfea",
      "good name": ""
    },
    {
      "name": "Diluted Lime",
      "hex": "#e8efdb",
      "good name": ""
    },
    {
      "name": "Diluted Mint",
      "hex": "#daf4ea",
      "good name": ""
    },
    {
      "name": "Diluted Orange",
      "hex": "#fbe8e2",
      "good name": ""
    },
    {
      "name": "Diluted Pink",
      "hex": "#e9dfe8",
      "good name": ""
    },
    {
      "name": "Diluted Red",
      "hex": "#e8dde2",
      "good name": ""
    },
    {
      "name": "Dim",
      "hex": "#c8c2be",
      "good name": "x"
    },
    {
      "name": "Dim Grey",
      "hex": "#696969",
      "good name": ""
    },
    {
      "name": "Diminished Blue",
      "hex": "#bce1eb",
      "good name": ""
    },
    {
      "name": "Diminished Brown",
      "hex": "#e7ded7",
      "good name": ""
    },
    {
      "name": "Diminished Green",
      "hex": "#e3e6d6",
      "good name": ""
    },
    {
      "name": "Diminished Lime",
      "hex": "#edf5dd",
      "good name": ""
    },
    {
      "name": "Diminished Mint",
      "hex": "#e9f3dd",
      "good name": ""
    },
    {
      "name": "Diminished Orange",
      "hex": "#fae9e1",
      "good name": ""
    },
    {
      "name": "Diminished Pink",
      "hex": "#f1e5e0",
      "good name": ""
    },
    {
      "name": "Diminished Red",
      "hex": "#e8d8da",
      "good name": ""
    },
    {
      "name": "Diminished Sky",
      "hex": "#d3f2ed",
      "good name": ""
    },
    {
      "name": "Diminishing Green",
      "hex": "#062e03",
      "good name": ""
    },
    {
      "name": "Diminutive Pink",
      "hex": "#f1dede",
      "good name": ""
    },
    {
      "name": "Dimple",
      "hex": "#e9808b",
      "good name": ""
    },
    {
      "name": "Dingley",
      "hex": "#607c47",
      "good name": ""
    },
    {
      "name": "Dingy Dungeon",
      "hex": "#c53151",
      "good name": ""
    },
    {
      "name": "Dingy Sticky Note",
      "hex": "#e6f2a2",
      "good name": ""
    },
    {
      "name": "Dinner Mint",
      "hex": "#e8f3e4",
      "good name": ""
    },
    {
      "name": "Dinosaur",
      "hex": "#7f997d",
      "good name": ""
    },
    {
      "name": "Dinosaur Bone",
      "hex": "#827563",
      "good name": ""
    },
    {
      "name": "Dinosaur Egg",
      "hex": "#cabaa9",
      "good name": "x"
    },
    {
      "name": "Diopside Blue",
      "hex": "#8391a0",
      "good name": ""
    },
    {
      "name": "Dioptase Green",
      "hex": "#439e8d",
      "good name": ""
    },
    {
      "name": "Diorite",
      "hex": "#9dbfb1",
      "good name": ""
    },
    {
      "name": "Diplomatic",
      "hex": "#3a445d",
      "good name": ""
    },
    {
      "name": "Dire Wolf",
      "hex": "#282828",
      "good name": "x"
    },
    {
      "name": "Direct Green",
      "hex": "#3f8a24",
      "good name": ""
    },
    {
      "name": "Directoire Blue",
      "hex": "#0061a3",
      "good name": ""
    },
    {
      "name": "Diroset",
      "hex": "#5acaa4",
      "good name": ""
    },
    {
      "name": "Dirt",
      "hex": "#9b7653",
      "good name": ""
    },
    {
      "name": "Dirt Brown",
      "hex": "#836539",
      "good name": ""
    },
    {
      "name": "Dirt Track",
      "hex": "#bb6644",
      "good name": ""
    },
    {
      "name": "Dirt Yellow",
      "hex": "#926e2e",
      "good name": ""
    },
    {
      "name": "Dirty Blonde",
      "hex": "#dfc393",
      "good name": ""
    },
    {
      "name": "Dirty Blue",
      "hex": "#3f829d",
      "good name": ""
    },
    {
      "name": "Dirty Brown",
      "hex": "#b5651e",
      "good name": ""
    },
    {
      "name": "Dirty Green",
      "hex": "#667e2c",
      "good name": ""
    },
    {
      "name": "Dirty Leather",
      "hex": "#430005",
      "good name": ""
    },
    {
      "name": "Dirty Martini",
      "hex": "#ddd0b6",
      "good name": ""
    },
    {
      "name": "Dirty Orange",
      "hex": "#c87606",
      "good name": ""
    },
    {
      "name": "Dirty Pink",
      "hex": "#ca7b80",
      "good name": ""
    },
    {
      "name": "Dirty Purple",
      "hex": "#734a65",
      "good name": ""
    },
    {
      "name": "Dirty Snow",
      "hex": "#cdced5",
      "good name": ""
    },
    {
      "name": "Dirty White",
      "hex": "#e8e4c9",
      "good name": ""
    },
    {
      "name": "Dirty Yellow",
      "hex": "#cdc50a",
      "good name": ""
    },
    {
      "name": "Disappearing Island",
      "hex": "#bbdee5",
      "good name": ""
    },
    {
      "name": "Disappearing Memories",
      "hex": "#eae3e0",
      "good name": "x"
    },
    {
      "name": "Disappearing Purple",
      "hex": "#3f313a",
      "good name": ""
    },
    {
      "name": "Disarm",
      "hex": "#006e9d",
      "good name": ""
    },
    {
      "name": "Disc Jockey",
      "hex": "#47c6ac",
      "good name": ""
    },
    {
      "name": "Disco",
      "hex": "#892d4f",
      "good name": ""
    },
    {
      "name": "Discover",
      "hex": "#bdb0a0",
      "good name": ""
    },
    {
      "name": "Discover Deco",
      "hex": "#4a934e",
      "good name": ""
    },
    {
      "name": "Discovery Bay",
      "hex": "#276878",
      "good name": ""
    },
    {
      "name": "Discreet Orange",
      "hex": "#ffad98",
      "good name": "x"
    },
    {
      "name": "Discreet Romance",
      "hex": "#f5e5e1",
      "good name": ""
    },
    {
      "name": "Discreet White",
      "hex": "#dfdcdb",
      "good name": ""
    },
    {
      "name": "Discrete Pink",
      "hex": "#ebdbdd",
      "good name": "x"
    },
    {
      "name": "Discretion",
      "hex": "#9f6f62",
      "good name": ""
    },
    {
      "name": "Disembark",
      "hex": "#5bb4d7",
      "good name": ""
    },
    {
      "name": "Disguise",
      "hex": "#b7b698",
      "good name": ""
    },
    {
      "name": "Dishy Coral",
      "hex": "#ed9190",
      "good name": ""
    },
    {
      "name": "Dissolved Denim",
      "hex": "#e2ecf2",
      "good name": ""
    },
    {
      "name": "Distance",
      "hex": "#566a73",
      "good name": ""
    },
    {
      "name": "Distant Blue",
      "hex": "#2c66a0",
      "good name": ""
    },
    {
      "name": "Distant Cloud",
      "hex": "#e5eae6",
      "good name": "x"
    },
    {
      "name": "Distant Flare",
      "hex": "#ead1da",
      "good name": ""
    },
    {
      "name": "Distant Haze",
      "hex": "#dfe4da",
      "good name": ""
    },
    {
      "name": "Distant Homeworld",
      "hex": "#acdcee",
      "good name": "x"
    },
    {
      "name": "Distant Horizon",
      "hex": "#f1f8fa",
      "good name": ""
    },
    {
      "name": "Distant Land",
      "hex": "#a68a71",
      "good name": ""
    },
    {
      "name": "Distant Landscape",
      "hex": "#e1efdd",
      "good name": "x"
    },
    {
      "name": "Distant Searchlight",
      "hex": "#f2f3ce",
      "good name": ""
    },
    {
      "name": "Distant Shore",
      "hex": "#c2d8e3",
      "good name": ""
    },
    {
      "name": "Distant Sky",
      "hex": "#6f8daf",
      "good name": ""
    },
    {
      "name": "Distant Star",
      "hex": "#bac1c3",
      "good name": ""
    },
    {
      "name": "Distant Tan",
      "hex": "#cfbda5",
      "good name": ""
    },
    {
      "name": "Distant Thunder",
      "hex": "#7f8688",
      "good name": ""
    },
    {
      "name": "Distant Valley",
      "hex": "#c2b79a",
      "good name": ""
    },
    {
      "name": "Distant Wind Chime",
      "hex": "#eaeff2",
      "good name": ""
    },
    {
      "name": "Distilled Moss",
      "hex": "#ccffcc",
      "good name": ""
    },
    {
      "name": "Distilled Rose",
      "hex": "#ffbbff",
      "good name": ""
    },
    {
      "name": "Distilled Venom",
      "hex": "#c7fdb5",
      "good name": ""
    },
    {
      "name": "Distilled Watermelon",
      "hex": "#ede3e0",
      "good name": ""
    },
    {
      "name": "Distinct Purple",
      "hex": "#a294c9",
      "good name": ""
    },
    {
      "name": "Dithered Amber",
      "hex": "#feb308",
      "good name": ""
    },
    {
      "name": "Dithered Sky",
      "hex": "#bcdfff",
      "good name": ""
    },
    {
      "name": "Diva",
      "hex": "#c9a0ff",
      "good name": "x"
    },
    {
      "name": "Diva Blue",
      "hex": "#007bb2",
      "good name": ""
    },
    {
      "name": "Diva Girl",
      "hex": "#e1cbda",
      "good name": ""
    },
    {
      "name": "Diva Glam",
      "hex": "#b24e76",
      "good name": ""
    },
    {
      "name": "Diva Mecha",
      "hex": "#ee99ee",
      "good name": "x"
    },
    {
      "name": "Diva Rouge",
      "hex": "#e8b9a5",
      "good name": ""
    },
    {
      "name": "Diva Violet",
      "hex": "#5077ba",
      "good name": ""
    },
    {
      "name": "Dive In",
      "hex": "#3c4d85",
      "good name": ""
    },
    {
      "name": "Diver Lady",
      "hex": "#27546e",
      "good name": ""
    },
    {
      "name": "Diver's Eden",
      "hex": "#3a797e",
      "good name": "x"
    },
    {
      "name": "Diverse Beige",
      "hex": "#c2b4a7",
      "good name": ""
    },
    {
      "name": "Diversion",
      "hex": "#a99a89",
      "good name": ""
    },
    {
      "name": "Divine",
      "hex": "#9a7aa0",
      "good name": ""
    },
    {
      "name": "Divine Dove",
      "hex": "#eeddee",
      "good name": ""
    },
    {
      "name": "Divine Inspiration",
      "hex": "#d8e2e1",
      "good name": ""
    },
    {
      "name": "Divine Pleasure",
      "hex": "#f4efe1",
      "good name": "x"
    },
    {
      "name": "Divine Purple",
      "hex": "#69005f",
      "good name": ""
    },
    {
      "name": "Divine White",
      "hex": "#e6dccd",
      "good name": ""
    },
    {
      "name": "Divine Wine",
      "hex": "#583e3e",
      "good name": ""
    },
    {
      "name": "Dixie",
      "hex": "#cd8431",
      "good name": ""
    },
    {
      "name": "Dizzy Days",
      "hex": "#d14e2f",
      "good name": ""
    },
    {
      "name": "Do Not Disturb",
      "hex": "#99a456",
      "good name": ""
    },
    {
      "name": "Dobunezumi Brown",
      "hex": "#4b3c39",
      "good name": ""
    },
    {
      "name": "Dockside",
      "hex": "#95aed0",
      "good name": ""
    },
    {
      "name": "Dockside Blue",
      "hex": "#a0b3bc",
      "good name": ""
    },
    {
      "name": "Doctor",
      "hex": "#f9f9f9",
      "good name": "x"
    },
    {
      "name": "Dodge Pole",
      "hex": "#a37355",
      "good name": ""
    },
    {
      "name": "Dodger Blue",
      "hex": "#3e82fc",
      "good name": ""
    },
    {
      "name": "DodgeRoll Gold",
      "hex": "#f79a12",
      "good name": ""
    },
    {
      "name": "Dodie Yellow",
      "hex": "#fef65b",
      "good name": ""
    },
    {
      "name": "Doe",
      "hex": "#b98e68",
      "good name": ""
    },
    {
      "name": "Doeskin",
      "hex": "#fff2e4",
      "good name": ""
    },
    {
      "name": "Doeskin Grey",
      "hex": "#ccc3ba",
      "good name": ""
    },
    {
      "name": "Dogwood",
      "hex": "#faeae2",
      "good name": "x"
    },
    {
      "name": "Dogwood Bloom",
      "hex": "#c58f94",
      "good name": ""
    },
    {
      "name": "Dogwood Rose",
      "hex": "#d71868",
      "good name": ""
    },
    {
      "name": "Doll House",
      "hex": "#facfc1",
      "good name": ""
    },
    {
      "name": "Dollar",
      "hex": "#7d8774",
      "good name": ""
    },
    {
      "name": "Dollar Bill",
      "hex": "#85bb65",
      "good name": "x"
    },
    {
      "name": "Dollie",
      "hex": "#f590a0",
      "good name": ""
    },
    {
      "name": "Dollop of Cream",
      "hex": "#f8ebd4",
      "good name": ""
    },
    {
      "name": "Dolly",
      "hex": "#f5f171",
      "good name": "x"
    },
    {
      "name": "Dolly Cheek",
      "hex": "#fcc9b6",
      "good name": "x"
    },
    {
      "name": "Dolomite Crystal",
      "hex": "#fee8f5",
      "good name": ""
    },
    {
      "name": "Dolomite Red",
      "hex": "#c5769b",
      "good name": ""
    },
    {
      "name": "Dolphin",
      "hex": "#86c4da",
      "good name": "x"
    },
    {
      "name": "Dolphin Blue",
      "hex": "#7d9da9",
      "good name": ""
    },
    {
      "name": "Dolphin Daze",
      "hex": "#659fb5",
      "good name": ""
    },
    {
      "name": "Dolphin Dream",
      "hex": "#6b6f78",
      "good name": ""
    },
    {
      "name": "Dolphin Fin",
      "hex": "#cccac1",
      "good name": ""
    },
    {
      "name": "Dolphin Grey",
      "hex": "#9a9997",
      "good name": ""
    },
    {
      "name": "Dolphin Tales",
      "hex": "#c7c7c2",
      "good name": ""
    },
    {
      "name": "Domain",
      "hex": "#9c9c6e",
      "good name": ""
    },
    {
      "name": "Dominant Grey",
      "hex": "#5a5651",
      "good name": ""
    },
    {
      "name": "Domino",
      "hex": "#6c5b4c",
      "good name": ""
    },
    {
      "name": "Don Juan",
      "hex": "#5a4f51",
      "good name": ""
    },
    {
      "name": "Donegal Green",
      "hex": "#115500",
      "good name": "x"
    },
    {
      "name": "Donegal Tweed",
      "hex": "#c19964",
      "good name": ""
    },
    {
      "name": "Döner Kebab",
      "hex": "#bb7766",
      "good name": "x"
    },
    {
      "name": "Donkey Brown",
      "hex": "#816e5c",
      "good name": ""
    },
    {
      "name": "Donkey Kong",
      "hex": "#ab4210",
      "good name": "x"
    },
    {
      "name": "Donnegal",
      "hex": "#8caea3",
      "good name": ""
    },
    {
      "name": "Doodle",
      "hex": "#fbdca8",
      "good name": ""
    },
    {
      "name": "Doombull Brown",
      "hex": "#7c1e08",
      "good name": ""
    },
    {
      "name": "Dorado",
      "hex": "#6e5f56",
      "good name": ""
    },
    {
      "name": "Dorian Grey",
      "hex": "#aca79e",
      "good name": ""
    },
    {
      "name": "Doric White",
      "hex": "#d5cfbd",
      "good name": ""
    },
    {
      "name": "Dormer Brown",
      "hex": "#ad947c",
      "good name": ""
    },
    {
      "name": "Dormitory",
      "hex": "#5d71a9",
      "good name": ""
    },
    {
      "name": "Dorn Yellow",
      "hex": "#fff200",
      "good name": "x"
    },
    {
      "name": "Dorset Naga",
      "hex": "#9d2c31",
      "good name": ""
    },
    {
      "name": "Dotted Dove",
      "hex": "#6c6868",
      "good name": ""
    },
    {
      "name": "Dòu Lǜ Green",
      "hex": "#009276",
      "good name": ""
    },
    {
      "name": "Dòu Shā Sè Red",
      "hex": "#a52939",
      "good name": ""
    },
    {
      "name": "Double Chocolate",
      "hex": "#6f5245",
      "good name": ""
    },
    {
      "name": "Double Click",
      "hex": "#d0d2d1",
      "good name": ""
    },
    {
      "name": "Double Colonial White",
      "hex": "#e4cf99",
      "good name": ""
    },
    {
      "name": "Double Cream",
      "hex": "#f3e0ac",
      "good name": "x"
    },
    {
      "name": "Double Dragon Skin",
      "hex": "#fca044",
      "good name": ""
    },
    {
      "name": "Double Duty",
      "hex": "#686858",
      "good name": ""
    },
    {
      "name": "Double Espresso",
      "hex": "#54423e",
      "good name": ""
    },
    {
      "name": "Double Fudge",
      "hex": "#6d544b",
      "good name": ""
    },
    {
      "name": "Double Jeopardy",
      "hex": "#4d786c",
      "good name": ""
    },
    {
      "name": "Double Latte",
      "hex": "#a78c71",
      "good name": ""
    },
    {
      "name": "Double Pearl Lusta",
      "hex": "#e9dcbe",
      "good name": ""
    },
    {
      "name": "Double Spanish White",
      "hex": "#d2c3a3",
      "good name": ""
    },
    {
      "name": "Dough Yellow",
      "hex": "#f6d0b6",
      "good name": ""
    },
    {
      "name": "Douglas Fir Green",
      "hex": "#6f9881",
      "good name": ""
    },
    {
      "name": "Douro",
      "hex": "#555500",
      "good name": ""
    },
    {
      "name": "Dove",
      "hex": "#b3ada7",
      "good name": "x"
    },
    {
      "name": "Dove Feather",
      "hex": "#755d5b",
      "good name": ""
    },
    {
      "name": "Dove Grey",
      "hex": "#6d6c6c",
      "good name": ""
    },
    {
      "name": "Dove Tail",
      "hex": "#91b0c5",
      "good name": ""
    },
    {
      "name": "Dove White",
      "hex": "#e6e2d8",
      "good name": ""
    },
    {
      "name": "Dove's Wing",
      "hex": "#f4f2ea",
      "good name": ""
    },
    {
      "name": "Dover Cliffs",
      "hex": "#f0e9d8",
      "good name": ""
    },
    {
      "name": "Dover Grey",
      "hex": "#848585",
      "good name": ""
    },
    {
      "name": "Dover Plains",
      "hex": "#ccaf92",
      "good name": ""
    },
    {
      "name": "Dover Straits",
      "hex": "#326ab1",
      "good name": ""
    },
    {
      "name": "Dover White",
      "hex": "#f1ebdd",
      "good name": ""
    },
    {
      "name": "Dovetail",
      "hex": "#908a83",
      "good name": ""
    },
    {
      "name": "Dowager",
      "hex": "#838c82",
      "good name": ""
    },
    {
      "name": "Down Dog",
      "hex": "#baafb9",
      "good name": ""
    },
    {
      "name": "Down Feathers",
      "hex": "#fff9e7",
      "good name": "x"
    },
    {
      "name": "Down Home",
      "hex": "#cbc0ba",
      "good name": ""
    },
    {
      "name": "Down on the Sunflower Valley",
      "hex": "#ffdf2b",
      "good name": ""
    },
    {
      "name": "Down Pour",
      "hex": "#43718b",
      "good name": ""
    },
    {
      "name": "Down-to-Earth",
      "hex": "#5c6242",
      "good name": ""
    },
    {
      "name": "Downing Earth",
      "hex": "#887b67",
      "good name": ""
    },
    {
      "name": "Downing Sand",
      "hex": "#cbbca5",
      "good name": ""
    },
    {
      "name": "Downing Slate",
      "hex": "#777f86",
      "good name": ""
    },
    {
      "name": "Downing Stone",
      "hex": "#a6a397",
      "good name": ""
    },
    {
      "name": "Downing Straw",
      "hex": "#caab7d",
      "good name": ""
    },
    {
      "name": "Downing to Earth",
      "hex": "#635a4f",
      "good name": ""
    },
    {
      "name": "Download Progress",
      "hex": "#58d332",
      "good name": ""
    },
    {
      "name": "Downpour",
      "hex": "#9b9ea2",
      "good name": ""
    },
    {
      "name": "Downriver",
      "hex": "#092256",
      "good name": ""
    },
    {
      "name": "Downtown Benny Brown",
      "hex": "#7d6a58",
      "good name": ""
    },
    {
      "name": "Downtown Grey",
      "hex": "#adaaa2",
      "good name": ""
    },
    {
      "name": "Downwell",
      "hex": "#001100",
      "good name": ""
    },
    {
      "name": "Downy",
      "hex": "#6fd2be",
      "good name": ""
    },
    {
      "name": "Downy Feather",
      "hex": "#feaa66",
      "good name": ""
    },
    {
      "name": "Downy Fluff",
      "hex": "#ede9e4",
      "good name": ""
    },
    {
      "name": "Dozen Roses",
      "hex": "#803f3f",
      "good name": ""
    },
    {
      "name": "Dr Who",
      "hex": "#78587d",
      "good name": "x"
    },
    {
      "name": "Dr. White",
      "hex": "#fafafa",
      "good name": "x"
    },
    {
      "name": "Drab",
      "hex": "#828344",
      "good name": ""
    },
    {
      "name": "Drab Green",
      "hex": "#749551",
      "good name": ""
    },
    {
      "name": "Dracula Orchid",
      "hex": "#2c3539",
      "good name": ""
    },
    {
      "name": "Dragon Ball",
      "hex": "#ff9922",
      "good name": "x"
    },
    {
      "name": "Dragon Bay",
      "hex": "#5da99f",
      "good name": ""
    },
    {
      "name": "Dragon Fire",
      "hex": "#fc642d",
      "good name": "x"
    },
    {
      "name": "Dragon Fruit",
      "hex": "#d75969",
      "good name": ""
    },
    {
      "name": "Dragon Red",
      "hex": "#9e0200",
      "good name": ""
    },
    {
      "name": "Dragon Scale",
      "hex": "#00a877",
      "good name": ""
    },
    {
      "name": "Dragon's Blood",
      "hex": "#b84048",
      "good name": "x"
    },
    {
      "name": "Dragon's Breath",
      "hex": "#d41003",
      "good name": "x"
    },
    {
      "name": "Dragon's Fire",
      "hex": "#9c2d5d",
      "good name": ""
    },
    {
      "name": "Dragonfly",
      "hex": "#314a76",
      "good name": "x"
    },
    {
      "name": "Dragonfly Blue",
      "hex": "#45abca",
      "good name": ""
    },
    {
      "name": "Dragonlord Purple",
      "hex": "#6241c7",
      "good name": ""
    },
    {
      "name": "Dragons Lair",
      "hex": "#d50c15",
      "good name": ""
    },
    {
      "name": "Drake Tooth",
      "hex": "#bbb0a4",
      "good name": ""
    },
    {
      "name": "Drake’s Neck",
      "hex": "#31668a",
      "good name": ""
    },
    {
      "name": "Drakenhof Nightshade",
      "hex": "#1f5da0",
      "good name": ""
    },
    {
      "name": "Drama Queen",
      "hex": "#a37298",
      "good name": "x"
    },
    {
      "name": "Drama Violet",
      "hex": "#b883b0",
      "good name": ""
    },
    {
      "name": "Dramatical Red",
      "hex": "#991100",
      "good name": ""
    },
    {
      "name": "Dramatist",
      "hex": "#4b4775",
      "good name": ""
    },
    {
      "name": "Draw Your Sword",
      "hex": "#6c7179",
      "good name": ""
    },
    {
      "name": "Dream Blue",
      "hex": "#d7e6ee",
      "good name": ""
    },
    {
      "name": "Dream Catcher",
      "hex": "#e5ebea",
      "good name": ""
    },
    {
      "name": "Dream Dust",
      "hex": "#ebe2e8",
      "good name": ""
    },
    {
      "name": "Dream Green",
      "hex": "#35836a",
      "good name": ""
    },
    {
      "name": "Dream Seascape",
      "hex": "#d5dec3",
      "good name": ""
    },
    {
      "name": "Dream Setting",
      "hex": "#ff77bb",
      "good name": "x"
    },
    {
      "name": "Dream State",
      "hex": "#efdde1",
      "good name": ""
    },
    {
      "name": "Dream Sunset",
      "hex": "#9b868d",
      "good name": ""
    },
    {
      "name": "Dream Vapor",
      "hex": "#cc99ee",
      "good name": "x"
    },
    {
      "name": "Dreamcatcher",
      "hex": "#a5b2a9",
      "good name": ""
    },
    {
      "name": "Dreaming Blue",
      "hex": "#8ac2d6",
      "good name": ""
    },
    {
      "name": "Dreaming of the Day",
      "hex": "#abc1bd",
      "good name": ""
    },
    {
      "name": "Dreamland",
      "hex": "#b5b1bf",
      "good name": ""
    },
    {
      "name": "Dreamless Sleep",
      "hex": "#111111",
      "good name": "x"
    },
    {
      "name": "Dreams of Peach",
      "hex": "#ffd29d",
      "good name": ""
    },
    {
      "name": "Dreamscape Grey",
      "hex": "#c6c5c5",
      "good name": ""
    },
    {
      "name": "Dreamsicle",
      "hex": "#f5d5c2",
      "good name": ""
    },
    {
      "name": "Dreamweaver",
      "hex": "#ccc6d7",
      "good name": ""
    },
    {
      "name": "Dreamy Candy Forest",
      "hex": "#b195e4",
      "good name": "x"
    },
    {
      "name": "Dreamy Cloud",
      "hex": "#e5e6eb",
      "good name": ""
    },
    {
      "name": "Dreamy Heaven",
      "hex": "#594158",
      "good name": ""
    },
    {
      "name": "Dreamy White",
      "hex": "#e3d8d5",
      "good name": ""
    },
    {
      "name": "Drenched Rain",
      "hex": "#c1d1e2",
      "good name": ""
    },
    {
      "name": "Dresden Blue",
      "hex": "#0086bb",
      "good name": ""
    },
    {
      "name": "Dresden Doll",
      "hex": "#8ca8c6",
      "good name": ""
    },
    {
      "name": "Dresden Dream",
      "hex": "#8ea7b9",
      "good name": ""
    },
    {
      "name": "Dress Blues",
      "hex": "#2a3244",
      "good name": ""
    },
    {
      "name": "Dress Pink",
      "hex": "#f4ebef",
      "good name": ""
    },
    {
      "name": "Dress Up",
      "hex": "#fac7bf",
      "good name": ""
    },
    {
      "name": "Dressed to Impress",
      "hex": "#714640",
      "good name": ""
    },
    {
      "name": "Dressy Rose",
      "hex": "#b89d9a",
      "good name": ""
    },
    {
      "name": "Dreyfus",
      "hex": "#b2aba1",
      "good name": ""
    },
    {
      "name": "Dried Basil",
      "hex": "#898973",
      "good name": ""
    },
    {
      "name": "Dried Blood",
      "hex": "#4b0101",
      "good name": ""
    },
    {
      "name": "Dried Chamomile",
      "hex": "#d1b375",
      "good name": ""
    },
    {
      "name": "Dried Chervil",
      "hex": "#b5bda3",
      "good name": ""
    },
    {
      "name": "Dried Chive",
      "hex": "#7b7d69",
      "good name": ""
    },
    {
      "name": "Dried Coconut",
      "hex": "#ebe7d9",
      "good name": ""
    },
    {
      "name": "Dried Dates",
      "hex": "#4a423a",
      "good name": ""
    },
    {
      "name": "Dried Edamame",
      "hex": "#b19f80",
      "good name": ""
    },
    {
      "name": "Dried Flower Purple",
      "hex": "#752653",
      "good name": ""
    },
    {
      "name": "Dried Goldenrod",
      "hex": "#e2a829",
      "good name": ""
    },
    {
      "name": "Dried Grass",
      "hex": "#aca08d",
      "good name": ""
    },
    {
      "name": "Dried Herb",
      "hex": "#847a59",
      "good name": ""
    },
    {
      "name": "Dried Lavender",
      "hex": "#ebe9ec",
      "good name": ""
    },
    {
      "name": "Dried Lavender Flowers",
      "hex": "#77747f",
      "good name": ""
    },
    {
      "name": "Dried Leaf",
      "hex": "#5c5043",
      "good name": ""
    },
    {
      "name": "Dried Lilac",
      "hex": "#bbbbff",
      "good name": ""
    },
    {
      "name": "Dried Magenta",
      "hex": "#ff40ff",
      "good name": ""
    },
    {
      "name": "Dried Moss",
      "hex": "#ccb97e",
      "good name": ""
    },
    {
      "name": "Dried Mustard",
      "hex": "#804a00",
      "good name": ""
    },
    {
      "name": "Dried Palm",
      "hex": "#e1dbac",
      "good name": ""
    },
    {
      "name": "Dried Pipe Clay",
      "hex": "#d8d6cc",
      "good name": ""
    },
    {
      "name": "Dried Plantain",
      "hex": "#e5cea9",
      "good name": ""
    },
    {
      "name": "Dried Plum",
      "hex": "#683332",
      "good name": ""
    },
    {
      "name": "Dried Thyme",
      "hex": "#bbbca1",
      "good name": ""
    },
    {
      "name": "Dried Tobacco",
      "hex": "#997b38",
      "good name": ""
    },
    {
      "name": "Dried Tomatoes",
      "hex": "#ab6057",
      "good name": "x"
    },
    {
      "name": "Drift of Mist",
      "hex": "#dcd8d0",
      "good name": ""
    },
    {
      "name": "Drift on the Sea",
      "hex": "#87cefa",
      "good name": ""
    },
    {
      "name": "Drifting",
      "hex": "#beb4a8",
      "good name": ""
    },
    {
      "name": "Drifting Cloud",
      "hex": "#dbe0e1",
      "good name": ""
    },
    {
      "name": "Drifting Downstream",
      "hex": "#61736f",
      "good name": ""
    },
    {
      "name": "Drifting Dream",
      "hex": "#ccbbe3",
      "good name": ""
    },
    {
      "name": "Drifting Sand",
      "hex": "#a89f93",
      "good name": ""
    },
    {
      "name": "Drifting Tide",
      "hex": "#dfefeb",
      "good name": ""
    },
    {
      "name": "Driftwood",
      "hex": "#a67a45",
      "good name": "x"
    },
    {
      "name": "Drip",
      "hex": "#a6ccd6",
      "good name": ""
    },
    {
      "name": "Dripping Ice",
      "hex": "#d2dfed",
      "good name": ""
    },
    {
      "name": "Dripping Wisteria",
      "hex": "#bb99bb",
      "good name": "x"
    },
    {
      "name": "Drippy Honey",
      "hex": "#eebb22",
      "good name": ""
    },
    {
      "name": "Drisheen",
      "hex": "#a24857",
      "good name": ""
    },
    {
      "name": "Drive-In Cherry",
      "hex": "#a62e30",
      "good name": ""
    },
    {
      "name": "Drizzle",
      "hex": "#a0af9d",
      "good name": ""
    },
    {
      "name": "Droëwors",
      "hex": "#523839",
      "good name": ""
    },
    {
      "name": "Dromedary",
      "hex": "#e3c295",
      "good name": ""
    },
    {
      "name": "Dromedary Camel",
      "hex": "#caad87",
      "good name": ""
    },
    {
      "name": "Drop Green",
      "hex": "#69bd5a",
      "good name": ""
    },
    {
      "name": "Drop of Lemon",
      "hex": "#fcf1bd",
      "good name": ""
    },
    {
      "name": "Droplet",
      "hex": "#aaddff",
      "good name": "x"
    },
    {
      "name": "Dropped Brick",
      "hex": "#bb3300",
      "good name": "x"
    },
    {
      "name": "Drops of Honey",
      "hex": "#d4ae76",
      "good name": ""
    },
    {
      "name": "Drought",
      "hex": "#d5d1cc",
      "good name": ""
    },
    {
      "name": "Drover",
      "hex": "#fbeb9b",
      "good name": "x"
    },
    {
      "name": "Drowsy Lavender",
      "hex": "#d4dbe1",
      "good name": ""
    },
    {
      "name": "Druchii Violet",
      "hex": "#842994",
      "good name": ""
    },
    {
      "name": "Druid Green",
      "hex": "#427131",
      "good name": ""
    },
    {
      "name": "Drum Solo",
      "hex": "#a66e4b",
      "good name": ""
    },
    {
      "name": "Drunk-Tank Pink",
      "hex": "#dd11dd",
      "good name": "x"
    },
    {
      "name": "Drunken Dragonfly",
      "hex": "#33dd88",
      "good name": ""
    },
    {
      "name": "Drunken Flamingo",
      "hex": "#ff55cc",
      "good name": "x"
    },
    {
      "name": "Dry Bone",
      "hex": "#eadfce",
      "good name": "x"
    },
    {
      "name": "Dry Brown",
      "hex": "#968374",
      "good name": ""
    },
    {
      "name": "Dry Catmint",
      "hex": "#b9bdae",
      "good name": ""
    },
    {
      "name": "Dry Clay",
      "hex": "#bd5c00",
      "good name": ""
    },
    {
      "name": "Dry Creek",
      "hex": "#d8c7b6",
      "good name": ""
    },
    {
      "name": "Dry Dock",
      "hex": "#817665",
      "good name": ""
    },
    {
      "name": "Dry Dune",
      "hex": "#efdfcf",
      "good name": ""
    },
    {
      "name": "Dry Grass",
      "hex": "#9ea26b",
      "good name": ""
    },
    {
      "name": "Dry Hemlock",
      "hex": "#909373",
      "good name": ""
    },
    {
      "name": "Dry Highlighter Green",
      "hex": "#2ba727",
      "good name": ""
    },
    {
      "name": "Dry Lichen",
      "hex": "#c7d9cc",
      "good name": ""
    },
    {
      "name": "Dry Moss",
      "hex": "#769958",
      "good name": ""
    },
    {
      "name": "Dry Mud",
      "hex": "#777672",
      "good name": ""
    },
    {
      "name": "Dry Pasture",
      "hex": "#948971",
      "good name": ""
    },
    {
      "name": "Dry Peach",
      "hex": "#de7e5d",
      "good name": ""
    },
    {
      "name": "Dry Riverbed",
      "hex": "#d2c5ae",
      "good name": ""
    },
    {
      "name": "Dry Rose",
      "hex": "#c22f4d",
      "good name": "x"
    },
    {
      "name": "Dry Sand",
      "hex": "#eae4d6",
      "good name": ""
    },
    {
      "name": "Dry Sea Grass",
      "hex": "#ccb27a",
      "good name": ""
    },
    {
      "name": "Dry Season",
      "hex": "#d4cecd",
      "good name": ""
    },
    {
      "name": "Dry Seedlings",
      "hex": "#c7dc68",
      "good name": ""
    },
    {
      "name": "Dry Starfish",
      "hex": "#b09a77",
      "good name": ""
    },
    {
      "name": "Dryad Bark",
      "hex": "#33312d",
      "good name": ""
    },
    {
      "name": "Drying Grass Green",
      "hex": "#7bb369",
      "good name": ""
    },
    {
      "name": "Dubarry",
      "hex": "#f25f66",
      "good name": ""
    },
    {
      "name": "Dubbin",
      "hex": "#ae8b64",
      "good name": ""
    },
    {
      "name": "Dublin",
      "hex": "#73be6e",
      "good name": ""
    },
    {
      "name": "Dublin Jack",
      "hex": "#6fab92",
      "good name": ""
    },
    {
      "name": "Dubloon",
      "hex": "#d5b688",
      "good name": ""
    },
    {
      "name": "Dubuffet Green",
      "hex": "#6f7766",
      "good name": ""
    },
    {
      "name": "Ducal",
      "hex": "#763d35",
      "good name": ""
    },
    {
      "name": "Ducal Pink",
      "hex": "#ce9096",
      "good name": ""
    },
    {
      "name": "Ducati",
      "hex": "#16a0a6",
      "good name": ""
    },
    {
      "name": "Duchamp Light Green",
      "hex": "#d1dbc7",
      "good name": ""
    },
    {
      "name": "Duchess Lilac",
      "hex": "#9b909d",
      "good name": ""
    },
    {
      "name": "Duchess Rose",
      "hex": "#f7aa97",
      "good name": ""
    },
    {
      "name": "Duck Butter",
      "hex": "#ddc75b",
      "good name": "x"
    },
    {
      "name": "Duck Egg Blue",
      "hex": "#c3fbf4",
      "good name": ""
    },
    {
      "name": "Duck Egg Cream",
      "hex": "#c8e3d2",
      "good name": ""
    },
    {
      "name": "Duck Green",
      "hex": "#53665c",
      "good name": ""
    },
    {
      "name": "Duck Hunt",
      "hex": "#005800",
      "good name": "x"
    },
    {
      "name": "Duck Sauce",
      "hex": "#cc9922",
      "good name": ""
    },
    {
      "name": "Duck Tail",
      "hex": "#e9d6b1",
      "good name": ""
    },
    {
      "name": "Duck Willow",
      "hex": "#6a695a",
      "good name": ""
    },
    {
      "name": "Duck's Egg Blue",
      "hex": "#ccdfe8",
      "good name": ""
    },
    {
      "name": "Duckie Yellow",
      "hex": "#ffff11",
      "good name": ""
    },
    {
      "name": "Duckling",
      "hex": "#fcb057",
      "good name": ""
    },
    {
      "name": "Duckling Fluff",
      "hex": "#fafc5d",
      "good name": "x"
    },
    {
      "name": "Duct Tape Grey",
      "hex": "#aeacac",
      "good name": ""
    },
    {
      "name": "Duffel Bag",
      "hex": "#394034",
      "good name": ""
    },
    {
      "name": "Dugong",
      "hex": "#71706e",
      "good name": ""
    },
    {
      "name": "Duke Blue",
      "hex": "#00009c",
      "good name": ""
    },
    {
      "name": "Dulcet",
      "hex": "#9ad4d8",
      "good name": ""
    },
    {
      "name": "Dulcet Violet",
      "hex": "#59394c",
      "good name": ""
    },
    {
      "name": "Dull",
      "hex": "#727171",
      "good name": ""
    },
    {
      "name": "Dull Apricot",
      "hex": "#d09c97",
      "good name": ""
    },
    {
      "name": "Dull Blue",
      "hex": "#49759c",
      "good name": ""
    },
    {
      "name": "Dull Brown",
      "hex": "#876e4b",
      "good name": ""
    },
    {
      "name": "Dull Desert",
      "hex": "#dcd6d3",
      "good name": ""
    },
    {
      "name": "Dull Dusky Pink",
      "hex": "#8f6d73",
      "good name": ""
    },
    {
      "name": "Dull Gold",
      "hex": "#8a6f48",
      "good name": ""
    },
    {
      "name": "Dull Green",
      "hex": "#74a662",
      "good name": ""
    },
    {
      "name": "Dull Lavender",
      "hex": "#a899e6",
      "good name": ""
    },
    {
      "name": "Dull Light Yellow",
      "hex": "#e5d9b4",
      "good name": ""
    },
    {
      "name": "Dull Magenta",
      "hex": "#8d4856",
      "good name": ""
    },
    {
      "name": "Dull Mauve",
      "hex": "#7d7485",
      "good name": ""
    },
    {
      "name": "Dull Olive",
      "hex": "#7a7564",
      "good name": ""
    },
    {
      "name": "Dull Orange",
      "hex": "#d8863b",
      "good name": ""
    },
    {
      "name": "Dull Pink",
      "hex": "#d5869d",
      "good name": ""
    },
    {
      "name": "Dull Purple",
      "hex": "#84597e",
      "good name": ""
    },
    {
      "name": "Dull Red",
      "hex": "#bb3f3f",
      "good name": ""
    },
    {
      "name": "Dull Sage",
      "hex": "#dbd4ab",
      "good name": ""
    },
    {
      "name": "Dull Teal",
      "hex": "#5f9e8f",
      "good name": ""
    },
    {
      "name": "Dull Turquoise",
      "hex": "#557d73",
      "good name": ""
    },
    {
      "name": "Dull Violet",
      "hex": "#803790",
      "good name": ""
    },
    {
      "name": "Dull Yellow",
      "hex": "#eedc5b",
      "good name": ""
    },
    {
      "name": "Dumpling",
      "hex": "#f7ddaa",
      "good name": "x"
    },
    {
      "name": "Dun Morogh Blue",
      "hex": "#80b4dc",
      "good name": ""
    },
    {
      "name": "Dune",
      "hex": "#d5c0a1",
      "good name": "x"
    },
    {
      "name": "Dune Drift",
      "hex": "#b88d70",
      "good name": ""
    },
    {
      "name": "Dune Grass",
      "hex": "#cbc5b1",
      "good name": ""
    },
    {
      "name": "Dune Shadow",
      "hex": "#867665",
      "good name": ""
    },
    {
      "name": "Dunes Manor",
      "hex": "#514f4a",
      "good name": ""
    },
    {
      "name": "Dungeon Keeper",
      "hex": "#ef3038",
      "good name": "x"
    },
    {
      "name": "Dunnock Egg",
      "hex": "#d9ece6",
      "good name": ""
    },
    {
      "name": "Duomo",
      "hex": "#6e6064",
      "good name": ""
    },
    {
      "name": "Dupain",
      "hex": "#58a0bc",
      "good name": ""
    },
    {
      "name": "Duqqa Brown",
      "hex": "#442211",
      "good name": ""
    },
    {
      "name": "Durango Blue",
      "hex": "#566777",
      "good name": ""
    },
    {
      "name": "Durango Dust",
      "hex": "#fbe3a1",
      "good name": ""
    },
    {
      "name": "Durazno Maduro",
      "hex": "#ffb978",
      "good name": ""
    },
    {
      "name": "Durazno Palido",
      "hex": "#ffd8bb",
      "good name": ""
    },
    {
      "name": "Durban Sky",
      "hex": "#5d8a9b",
      "good name": ""
    },
    {
      "name": "Durian",
      "hex": "#b07939",
      "good name": ""
    },
    {
      "name": "Durian Smell",
      "hex": "#e5e0db",
      "good name": ""
    },
    {
      "name": "Durian White",
      "hex": "#e6d0ab",
      "good name": "x"
    },
    {
      "name": "Durian Yellow",
      "hex": "#e1bd27",
      "good name": ""
    },
    {
      "name": "Durotar Fire",
      "hex": "#f06126",
      "good name": ""
    },
    {
      "name": "Dusk",
      "hex": "#4e5481",
      "good name": "x"
    },
    {
      "name": "Dusk Blue",
      "hex": "#7ba0c0",
      "good name": ""
    },
    {
      "name": "Dusk Green",
      "hex": "#6e7a77",
      "good name": ""
    },
    {
      "name": "Dusk Mauve",
      "hex": "#545883",
      "good name": ""
    },
    {
      "name": "Dusk Orange",
      "hex": "#fe4c40",
      "good name": ""
    },
    {
      "name": "Duskwood",
      "hex": "#123d55",
      "good name": ""
    },
    {
      "name": "Dusky",
      "hex": "#c3aba8",
      "good name": ""
    },
    {
      "name": "Dusky Alpine Blue",
      "hex": "#296767",
      "good name": ""
    },
    {
      "name": "Dusky Citron",
      "hex": "#e3cc81",
      "good name": ""
    },
    {
      "name": "Dusky Cyclamen",
      "hex": "#7d6d70",
      "good name": ""
    },
    {
      "name": "Dusky Damask",
      "hex": "#b98478",
      "good name": ""
    },
    {
      "name": "Dusky Dawn",
      "hex": "#e5e1de",
      "good name": ""
    },
    {
      "name": "Dusky Flesh",
      "hex": "#774400",
      "good name": ""
    },
    {
      "name": "Dusky Grape",
      "hex": "#877f95",
      "good name": ""
    },
    {
      "name": "Dusky Green",
      "hex": "#746c57",
      "good name": ""
    },
    {
      "name": "Dusky Grouse",
      "hex": "#8e969e",
      "good name": ""
    },
    {
      "name": "Dusky Haze",
      "hex": "#a77572",
      "good name": ""
    },
    {
      "name": "Dusky Lilac",
      "hex": "#d6cbda",
      "good name": ""
    },
    {
      "name": "Dusky Mood",
      "hex": "#979ba8",
      "good name": "x"
    },
    {
      "name": "Dusky Moon",
      "hex": "#edecd7",
      "good name": ""
    },
    {
      "name": "Dusky Orchid",
      "hex": "#9a7182",
      "good name": ""
    },
    {
      "name": "Dusky Pink",
      "hex": "#cc7a8b",
      "good name": ""
    },
    {
      "name": "Dusky Purple",
      "hex": "#895b7b",
      "good name": ""
    },
    {
      "name": "Dusky Rose",
      "hex": "#ba6873",
      "good name": ""
    },
    {
      "name": "Dusky Taupe",
      "hex": "#c9bdb7",
      "good name": ""
    },
    {
      "name": "Dusky Violet",
      "hex": "#d0bfbe",
      "good name": ""
    },
    {
      "name": "Dusky Yellow",
      "hex": "#ffff05",
      "good name": ""
    },
    {
      "name": "Dust",
      "hex": "#b2996e",
      "good name": ""
    },
    {
      "name": "Dust Bowl",
      "hex": "#e2d8d3",
      "good name": ""
    },
    {
      "name": "Dust Green",
      "hex": "#c6c8be",
      "good name": ""
    },
    {
      "name": "Dust of the Moon",
      "hex": "#cfc9df",
      "good name": "x"
    },
    {
      "name": "Dust Storm",
      "hex": "#e7d3b7",
      "good name": "x"
    },
    {
      "name": "Dust to Dust",
      "hex": "#bbbcbc",
      "good name": "x"
    },
    {
      "name": "Dustblu",
      "hex": "#959ba0",
      "good name": ""
    },
    {
      "name": "Dusted Clay",
      "hex": "#cc7357",
      "good name": ""
    },
    {
      "name": "Dusted Olive",
      "hex": "#bea775",
      "good name": ""
    },
    {
      "name": "Dusted Peri",
      "hex": "#696ba0",
      "good name": ""
    },
    {
      "name": "Dusted Truffle",
      "hex": "#9c8373",
      "good name": ""
    },
    {
      "name": "Dusting Powder",
      "hex": "#e7ece8",
      "good name": ""
    },
    {
      "name": "Dustwallow Marsh",
      "hex": "#685243",
      "good name": ""
    },
    {
      "name": "Dusty Aqua",
      "hex": "#c0dccd",
      "good name": ""
    },
    {
      "name": "Dusty Attic",
      "hex": "#bfb6a3",
      "good name": ""
    },
    {
      "name": "Dusty Blue",
      "hex": "#8c9dad",
      "good name": ""
    },
    {
      "name": "Dusty Cedar",
      "hex": "#dd9592",
      "good name": ""
    },
    {
      "name": "Dusty Chestnut",
      "hex": "#847163",
      "good name": ""
    },
    {
      "name": "Dusty Chimney",
      "hex": "#888899",
      "good name": "x"
    },
    {
      "name": "Dusty Coral",
      "hex": "#d29b83",
      "good name": ""
    },
    {
      "name": "Dusty Dream",
      "hex": "#97a2a0",
      "good name": ""
    },
    {
      "name": "Dusty Gold",
      "hex": "#d7b999",
      "good name": ""
    },
    {
      "name": "Dusty Green",
      "hex": "#76a973",
      "good name": ""
    },
    {
      "name": "Dusty Grey",
      "hex": "#cdccd0",
      "good name": ""
    },
    {
      "name": "Dusty Heather",
      "hex": "#8990a3",
      "good name": ""
    },
    {
      "name": "Dusty Ivory",
      "hex": "#f1ddbe",
      "good name": ""
    },
    {
      "name": "Dusty Jade Green",
      "hex": "#7bb5a3",
      "good name": ""
    },
    {
      "name": "Dusty Lavender",
      "hex": "#ac86a8",
      "good name": ""
    },
    {
      "name": "Dusty Lilac",
      "hex": "#d3cacd",
      "good name": ""
    },
    {
      "name": "Dusty Mountain",
      "hex": "#716d63",
      "good name": ""
    },
    {
      "name": "Dusty Olive",
      "hex": "#646356",
      "good name": ""
    },
    {
      "name": "Dusty Orange",
      "hex": "#e27a53",
      "good name": ""
    },
    {
      "name": "Dusty Path",
      "hex": "#8c7763",
      "good name": ""
    },
    {
      "name": "Dusty Pink",
      "hex": "#d58a94",
      "good name": ""
    },
    {
      "name": "Dusty Plum",
      "hex": "#d7d0e1",
      "good name": ""
    },
    {
      "name": "Dusty Purple",
      "hex": "#825f87",
      "good name": ""
    },
    {
      "name": "Dusty Red",
      "hex": "#b9484e",
      "good name": ""
    },
    {
      "name": "Dusty Rose",
      "hex": "#ba797d",
      "good name": ""
    },
    {
      "name": "Dusty Rosewood",
      "hex": "#c0aa9f",
      "good name": ""
    },
    {
      "name": "Dusty Sand",
      "hex": "#bdbaae",
      "good name": ""
    },
    {
      "name": "Dusty Sky",
      "hex": "#95a3a6",
      "good name": ""
    },
    {
      "name": "Dusty Teal",
      "hex": "#4c9085",
      "good name": ""
    },
    {
      "name": "Dusty Trail",
      "hex": "#c9bba3",
      "good name": ""
    },
    {
      "name": "Dusty Trail Rider",
      "hex": "#c3b9a6",
      "good name": ""
    },
    {
      "name": "Dusty Turquoise",
      "hex": "#649b9e",
      "good name": ""
    },
    {
      "name": "Dusty Warrior",
      "hex": "#bab7b3",
      "good name": ""
    },
    {
      "name": "Dusty Yellow",
      "hex": "#d4cc9a",
      "good name": ""
    },
    {
      "name": "Dutch Blue",
      "hex": "#4a638d",
      "good name": ""
    },
    {
      "name": "Dutch Cocoa",
      "hex": "#8c706a",
      "good name": ""
    },
    {
      "name": "Dutch Jug",
      "hex": "#a5abb6",
      "good name": ""
    },
    {
      "name": "Dutch Orange",
      "hex": "#dfa837",
      "good name": ""
    },
    {
      "name": "Dutch Tile Blue",
      "hex": "#9aabab",
      "good name": ""
    },
    {
      "name": "Dutch White",
      "hex": "#f0dfbb",
      "good name": ""
    },
    {
      "name": "Dutchess Dawn",
      "hex": "#c9a7ac",
      "good name": ""
    },
    {
      "name": "Duvall",
      "hex": "#0f8b8e",
      "good name": ""
    },
    {
      "name": "Dwarf Fortress",
      "hex": "#1d0200",
      "good name": "x"
    },
    {
      "name": "Dwarf Pony",
      "hex": "#af7b57",
      "good name": ""
    },
    {
      "name": "Dwarf Rabbit",
      "hex": "#c8ac89",
      "good name": ""
    },
    {
      "name": "Dwarf Spruce",
      "hex": "#71847d",
      "good name": ""
    },
    {
      "name": "Dwarven Bronze",
      "hex": "#bf652e",
      "good name": "x"
    },
    {
      "name": "Dwarven Flesh",
      "hex": "#ffa07a",
      "good name": ""
    },
    {
      "name": "Dwindling Damon",
      "hex": "#efdfe7",
      "good name": ""
    },
    {
      "name": "Dwindling Dandelion",
      "hex": "#f9e9d7",
      "good name": "x"
    },
    {
      "name": "Dwindling Denim",
      "hex": "#cce1ee",
      "good name": ""
    },
    {
      "name": "Dyer's Woad",
      "hex": "#7b99b0",
      "good name": ""
    },
    {
      "name": "Dying Light",
      "hex": "#364141",
      "good name": ""
    },
    {
      "name": "Dying Moss",
      "hex": "#669c7d",
      "good name": ""
    },
    {
      "name": "Dying Storm Blue",
      "hex": "#111166",
      "good name": "x"
    },
    {
      "name": "Dynamic",
      "hex": "#6d5160",
      "good name": ""
    },
    {
      "name": "Dynamic Blue",
      "hex": "#0192c6",
      "good name": ""
    },
    {
      "name": "Dynamic Green",
      "hex": "#a7e142",
      "good name": ""
    },
    {
      "name": "Dynamic Magenta",
      "hex": "#8a547f",
      "good name": ""
    },
    {
      "name": "Dynamic Yellow",
      "hex": "#ffe36d",
      "good name": ""
    },
    {
      "name": "Dynamite",
      "hex": "#ff4422",
      "good name": "x"
    },
    {
      "name": "Dynamite Red",
      "hex": "#dd3311",
      "good name": ""
    },
    {
      "name": "Dynamo",
      "hex": "#953d68",
      "good name": ""
    },
    {
      "name": "Dynasty Celadon",
      "hex": "#c7cbbe",
      "good name": ""
    },
    {
      "name": "Dynasty Green",
      "hex": "#008e80",
      "good name": "x"
    },
    {
      "name": "E. Honda Beige",
      "hex": "#f8d77f",
      "good name": ""
    },
    {
      "name": "Eagle",
      "hex": "#b0ac94",
      "good name": "x"
    },
    {
      "name": "Eagle Eye",
      "hex": "#736665",
      "good name": ""
    },
    {
      "name": "Eagle Ridge",
      "hex": "#7d776c",
      "good name": ""
    },
    {
      "name": "Eagle Rock",
      "hex": "#5c5242",
      "good name": ""
    },
    {
      "name": "Eagle's Meadow",
      "hex": "#8d7d68",
      "good name": ""
    },
    {
      "name": "Eagle's View",
      "hex": "#d4cbcc",
      "good name": ""
    },
    {
      "name": "Eagles Nest",
      "hex": "#8a693f",
      "good name": ""
    },
    {
      "name": "Eaglet Beige",
      "hex": "#e9d9c0",
      "good name": ""
    },
    {
      "name": "Eames for Blue",
      "hex": "#466b82",
      "good name": ""
    },
    {
      "name": "Earhart Emerald",
      "hex": "#416659",
      "good name": ""
    },
    {
      "name": "Earl Grey",
      "hex": "#a6978a",
      "good name": "x"
    },
    {
      "name": "Earls Green",
      "hex": "#b8a722",
      "good name": ""
    },
    {
      "name": "Early Blossom",
      "hex": "#ffe5ed",
      "good name": ""
    },
    {
      "name": "Early Crocus",
      "hex": "#eae7e7",
      "good name": ""
    },
    {
      "name": "Early Dawn",
      "hex": "#797287",
      "good name": ""
    },
    {
      "name": "Early Dew",
      "hex": "#44aa00",
      "good name": ""
    },
    {
      "name": "Early Dog Violet",
      "hex": "#d3d6e9",
      "good name": ""
    },
    {
      "name": "Early Evening",
      "hex": "#cac7bf",
      "good name": ""
    },
    {
      "name": "Early Forget-Me-Not",
      "hex": "#bae5ee",
      "good name": ""
    },
    {
      "name": "Early Frost",
      "hex": "#dae3e9",
      "good name": ""
    },
    {
      "name": "Early Harvest",
      "hex": "#b9be82",
      "good name": ""
    },
    {
      "name": "Early July",
      "hex": "#a5ddea",
      "good name": ""
    },
    {
      "name": "Early June",
      "hex": "#b1d2df",
      "good name": ""
    },
    {
      "name": "Early September",
      "hex": "#adcddc",
      "good name": ""
    },
    {
      "name": "Early Snow",
      "hex": "#fdf3e4",
      "good name": ""
    },
    {
      "name": "Early Spring",
      "hex": "#96bc4a",
      "good name": ""
    },
    {
      "name": "Early Spring Night",
      "hex": "#3c3fb1",
      "good name": ""
    },
    {
      "name": "Early Sunset",
      "hex": "#f3e3d8",
      "good name": ""
    },
    {
      "name": "Earth",
      "hex": "#a2653e",
      "good name": ""
    },
    {
      "name": "Earth Black",
      "hex": "#49433b",
      "good name": ""
    },
    {
      "name": "Earth Brown",
      "hex": "#4f1507",
      "good name": ""
    },
    {
      "name": "Earth Brown Violet",
      "hex": "#705364",
      "good name": ""
    },
    {
      "name": "Earth Chi",
      "hex": "#c7af88",
      "good name": ""
    },
    {
      "name": "Earth Chicory",
      "hex": "#664b40",
      "good name": ""
    },
    {
      "name": "Earth Crust",
      "hex": "#8c4f42",
      "good name": ""
    },
    {
      "name": "Earth Eclipse",
      "hex": "#71bab4",
      "good name": ""
    },
    {
      "name": "Earth Fired Red",
      "hex": "#785240",
      "good name": ""
    },
    {
      "name": "Earth Green",
      "hex": "#545f5b",
      "good name": ""
    },
    {
      "name": "Earth Happiness",
      "hex": "#e3edc8",
      "good name": ""
    },
    {
      "name": "Earth Red",
      "hex": "#95424e",
      "good name": ""
    },
    {
      "name": "Earth Rose",
      "hex": "#b57770",
      "good name": ""
    },
    {
      "name": "Earth Tone",
      "hex": "#a06e57",
      "good name": ""
    },
    {
      "name": "Earth Warming",
      "hex": "#bf9f91",
      "good name": ""
    },
    {
      "name": "Earth Yellow",
      "hex": "#e1a95f",
      "good name": ""
    },
    {
      "name": "Earthbound",
      "hex": "#a48a80",
      "good name": "x"
    },
    {
      "name": "Earthen Cheer",
      "hex": "#667971",
      "good name": ""
    },
    {
      "name": "Earthen Jug",
      "hex": "#a85e39",
      "good name": ""
    },
    {
      "name": "Earthenware",
      "hex": "#a89373",
      "good name": ""
    },
    {
      "name": "Earthling",
      "hex": "#ded6c7",
      "good name": ""
    },
    {
      "name": "Earthly Delight",
      "hex": "#ab8a68",
      "good name": ""
    },
    {
      "name": "Earthly Pleasure",
      "hex": "#693c3b",
      "good name": ""
    },
    {
      "name": "Earthly Pleasures",
      "hex": "#9f8863",
      "good name": ""
    },
    {
      "name": "Earthnut",
      "hex": "#9d8675",
      "good name": ""
    },
    {
      "name": "Earthtone",
      "hex": "#5d3a1a",
      "good name": ""
    },
    {
      "name": "Earthworm",
      "hex": "#c3816e",
      "good name": "x"
    },
    {
      "name": "Earthy Cane",
      "hex": "#c5b28b",
      "good name": ""
    },
    {
      "name": "Earthy Khaki Green",
      "hex": "#666600",
      "good name": ""
    },
    {
      "name": "Earthy Ocher",
      "hex": "#b89e78",
      "good name": ""
    },
    {
      "name": "Earthy Ochre",
      "hex": "#beae88",
      "good name": ""
    },
    {
      "name": "Eased Pink",
      "hex": "#fae3e3",
      "good name": ""
    },
    {
      "name": "Easily Suede",
      "hex": "#b29d8a",
      "good name": ""
    },
    {
      "name": "East Bay",
      "hex": "#47526e",
      "good name": ""
    },
    {
      "name": "East Cape",
      "hex": "#b0eee2",
      "good name": ""
    },
    {
      "name": "East Side",
      "hex": "#aa8cbc",
      "good name": ""
    },
    {
      "name": "Easter Bunny",
      "hex": "#ebe5eb",
      "good name": ""
    },
    {
      "name": "Easter Egg",
      "hex": "#919bc9",
      "good name": "x"
    },
    {
      "name": "Easter Green",
      "hex": "#8cfd7e",
      "good name": ""
    },
    {
      "name": "Easter Purple",
      "hex": "#c071fe",
      "good name": ""
    },
    {
      "name": "Easter Rabbit",
      "hex": "#c7bfc3",
      "good name": ""
    },
    {
      "name": "Eastern Amber",
      "hex": "#ebb67e",
      "good name": ""
    },
    {
      "name": "Eastern Bamboo",
      "hex": "#5e5d3d",
      "good name": ""
    },
    {
      "name": "Eastern Blue",
      "hex": "#00879f",
      "good name": ""
    },
    {
      "name": "Eastern Bluebird",
      "hex": "#748695",
      "good name": ""
    },
    {
      "name": "Eastern Breeze",
      "hex": "#dae0e6",
      "good name": ""
    },
    {
      "name": "Eastern Gold",
      "hex": "#b89b6c",
      "good name": ""
    },
    {
      "name": "Eastern Sky",
      "hex": "#8fc1d2",
      "good name": ""
    },
    {
      "name": "Eastern Spice",
      "hex": "#dba87f",
      "good name": ""
    },
    {
      "name": "Eastern Wind",
      "hex": "#ede6d5",
      "good name": ""
    },
    {
      "name": "Eastern Wolf",
      "hex": "#dbd7d2",
      "good name": ""
    },
    {
      "name": "Eastlake Gold",
      "hex": "#c28e61",
      "good name": ""
    },
    {
      "name": "Eastlake Lavender",
      "hex": "#887d79",
      "good name": ""
    },
    {
      "name": "Eastlake Olive",
      "hex": "#a9a482",
      "good name": ""
    },
    {
      "name": "Easy",
      "hex": "#beb394",
      "good name": ""
    },
    {
      "name": "Easy Breezy Blue",
      "hex": "#9eb1ae",
      "good name": ""
    },
    {
      "name": "Easy Green",
      "hex": "#9fb289",
      "good name": ""
    },
    {
      "name": "Easy On The Eyes",
      "hex": "#f9ecb6",
      "good name": ""
    },
    {
      "name": "Eat Your Greens",
      "hex": "#696845",
      "good name": "x"
    },
    {
      "name": "Eat Your Peas",
      "hex": "#80987a",
      "good name": ""
    },
    {
      "name": "Eaton Gold",
      "hex": "#bb9f60",
      "good name": ""
    },
    {
      "name": "Eaves",
      "hex": "#cecdad",
      "good name": ""
    },
    {
      "name": "Ebb",
      "hex": "#e6d8d4",
      "good name": ""
    },
    {
      "name": "Ebbing Tide",
      "hex": "#688d8a",
      "good name": ""
    },
    {
      "name": "Ebbtide",
      "hex": "#84b4be",
      "good name": ""
    },
    {
      "name": "Ebi Brown",
      "hex": "#773c30",
      "good name": "x"
    },
    {
      "name": "Ebicha Brown",
      "hex": "#5e2824",
      "good name": ""
    },
    {
      "name": "Ebizome Purple",
      "hex": "#6d2b50",
      "good name": ""
    },
    {
      "name": "Ebony",
      "hex": "#313337",
      "good name": "x"
    },
    {
      "name": "Ebony Clay",
      "hex": "#323438",
      "good name": ""
    },
    {
      "name": "Ebony Lips",
      "hex": "#b06a40",
      "good name": ""
    },
    {
      "name": "Ebony Wood",
      "hex": "#2c3227",
      "good name": ""
    },
    {
      "name": "Eburnean",
      "hex": "#ffffee",
      "good name": ""
    },
    {
      "name": "Eccentric Magenta",
      "hex": "#b576a7",
      "good name": ""
    },
    {
      "name": "Eccentricity",
      "hex": "#968a9f",
      "good name": ""
    },
    {
      "name": "Echelon Ecru",
      "hex": "#e7d8be",
      "good name": ""
    },
    {
      "name": "Echinoderm",
      "hex": "#ffa565",
      "good name": ""
    },
    {
      "name": "Echinoidea Thorns",
      "hex": "#ffa756",
      "good name": ""
    },
    {
      "name": "Echo",
      "hex": "#d7e7e0",
      "good name": ""
    },
    {
      "name": "Echo Blue",
      "hex": "#a4afcd",
      "good name": ""
    },
    {
      "name": "Echo Iris",
      "hex": "#b6dff4",
      "good name": ""
    },
    {
      "name": "Echo Isles Water",
      "hex": "#95b5db",
      "good name": ""
    },
    {
      "name": "Echo Mist",
      "hex": "#d8dfdf",
      "good name": ""
    },
    {
      "name": "Echo One",
      "hex": "#629da6",
      "good name": ""
    },
    {
      "name": "Echo Park",
      "hex": "#758883",
      "good name": ""
    },
    {
      "name": "Echo Valley",
      "hex": "#e6e2d6",
      "good name": ""
    },
    {
      "name": "Echoes of Love",
      "hex": "#eededd",
      "good name": ""
    },
    {
      "name": "Eclectic",
      "hex": "#aaafbd",
      "good name": ""
    },
    {
      "name": "Eclectic Plum",
      "hex": "#8c6e67",
      "good name": ""
    },
    {
      "name": "Eclectic Purple",
      "hex": "#483e45",
      "good name": ""
    },
    {
      "name": "Eclipse",
      "hex": "#3f3939",
      "good name": "x"
    },
    {
      "name": "Eclipse Blue",
      "hex": "#456074",
      "good name": ""
    },
    {
      "name": "Eco Green",
      "hex": "#a89768",
      "good name": ""
    },
    {
      "name": "Ecological",
      "hex": "#677f70",
      "good name": "x"
    },
    {
      "name": "Ecru",
      "hex": "#c2b280",
      "good name": ""
    },
    {
      "name": "Ecru Ochre",
      "hex": "#a48d83",
      "good name": ""
    },
    {
      "name": "Ecru Olive",
      "hex": "#927b3c",
      "good name": ""
    },
    {
      "name": "Ecru Wealth",
      "hex": "#d5cdb4",
      "good name": ""
    },
    {
      "name": "Ecru White",
      "hex": "#d6d1c0",
      "good name": ""
    },
    {
      "name": "Ecstasy",
      "hex": "#c96138",
      "good name": ""
    },
    {
      "name": "Ecstatic Red",
      "hex": "#aa1122",
      "good name": "x"
    },
    {
      "name": "Ecuadorian Banana",
      "hex": "#ffff7e",
      "good name": ""
    },
    {
      "name": "Edamame",
      "hex": "#9ca389",
      "good name": "x"
    },
    {
      "name": "Edelweiss",
      "hex": "#eee8d9",
      "good name": ""
    },
    {
      "name": "Eden",
      "hex": "#266255",
      "good name": ""
    },
    {
      "name": "Eden Prairie",
      "hex": "#95863c",
      "good name": ""
    },
    {
      "name": "Edge of Black",
      "hex": "#54585e",
      "good name": ""
    },
    {
      "name": "Edge of Space",
      "hex": "#330044",
      "good name": ""
    },
    {
      "name": "Edge of the Galaxy",
      "hex": "#303d3c",
      "good name": ""
    },
    {
      "name": "Edgewater",
      "hex": "#c1d8c5",
      "good name": ""
    },
    {
      "name": "Edgy Gold",
      "hex": "#b1975f",
      "good name": ""
    },
    {
      "name": "Edgy Red",
      "hex": "#ba3d3c",
      "good name": ""
    },
    {
      "name": "Edocha",
      "hex": "#a13d2d",
      "good name": ""
    },
    {
      "name": "Edward",
      "hex": "#5e7e7d",
      "good name": ""
    },
    {
      "name": "Edwardian Lace",
      "hex": "#f6ede0",
      "good name": ""
    },
    {
      "name": "Eerie Black",
      "hex": "#1b1b1b",
      "good name": ""
    },
    {
      "name": "Effervescent",
      "hex": "#fbf4d1",
      "good name": ""
    },
    {
      "name": "Effervescent Blue",
      "hex": "#00315a",
      "good name": ""
    },
    {
      "name": "Effervescent Lime",
      "hex": "#98da2c",
      "good name": ""
    },
    {
      "name": "EGA Green",
      "hex": "#01ff07",
      "good name": "x"
    },
    {
      "name": "Egg Blue",
      "hex": "#c1e7eb",
      "good name": ""
    },
    {
      "name": "Egg Cream",
      "hex": "#ffd98c",
      "good name": ""
    },
    {
      "name": "Egg Liqueur",
      "hex": "#dccaa8",
      "good name": ""
    },
    {
      "name": "Egg Noodle",
      "hex": "#f1e3bd",
      "good name": ""
    },
    {
      "name": "Egg Sour",
      "hex": "#f9e4c5",
      "good name": ""
    },
    {
      "name": "Egg Toast",
      "hex": "#f2c911",
      "good name": "x"
    },
    {
      "name": "Egg Wash",
      "hex": "#e2e1c8",
      "good name": ""
    },
    {
      "name": "Egg White",
      "hex": "#ffefc1",
      "good name": ""
    },
    {
      "name": "Egg Yolk",
      "hex": "#ffce81",
      "good name": "x"
    },
    {
      "name": "Egg Yolk Sunrise",
      "hex": "#ffdb0b",
      "good name": ""
    },
    {
      "name": "Eggnog",
      "hex": "#fdea9f",
      "good name": "x"
    },
    {
      "name": "Eggplant",
      "hex": "#430541",
      "good name": "x"
    },
    {
      "name": "Eggplant Ash",
      "hex": "#656579",
      "good name": ""
    },
    {
      "name": "Eggplant Tint",
      "hex": "#531b93",
      "good name": ""
    },
    {
      "name": "Eggshell",
      "hex": "#f0ead6",
      "good name": "x"
    },
    {
      "name": "Eggshell Blue",
      "hex": "#a3ccc9",
      "good name": ""
    },
    {
      "name": "Eggshell Cream",
      "hex": "#f5eedb",
      "good name": ""
    },
    {
      "name": "Eggshell Paper",
      "hex": "#e2be9f",
      "good name": ""
    },
    {
      "name": "Eggshell White",
      "hex": "#f3e4dc",
      "good name": ""
    },
    {
      "name": "Eggwhite",
      "hex": "#f3e5d2",
      "good name": ""
    },
    {
      "name": "Egret",
      "hex": "#f3ece0",
      "good name": ""
    },
    {
      "name": "Egret White",
      "hex": "#dfd9cf",
      "good name": ""
    },
    {
      "name": "Egyptian Blue",
      "hex": "#1034a6",
      "good name": ""
    },
    {
      "name": "Egyptian Enamel",
      "hex": "#005c69",
      "good name": ""
    },
    {
      "name": "Egyptian Gold",
      "hex": "#efa84c",
      "good name": ""
    },
    {
      "name": "Egyptian Green",
      "hex": "#08847c",
      "good name": ""
    },
    {
      "name": "Egyptian Jasper",
      "hex": "#7a4b3a",
      "good name": ""
    },
    {
      "name": "Egyptian Javelin",
      "hex": "#febcad",
      "good name": ""
    },
    {
      "name": "Egyptian Nile",
      "hex": "#70775c",
      "good name": ""
    },
    {
      "name": "Egyptian Pyramid",
      "hex": "#c19a7d",
      "good name": ""
    },
    {
      "name": "Egyptian Red",
      "hex": "#983f4a",
      "good name": ""
    },
    {
      "name": "Egyptian Sand",
      "hex": "#beac90",
      "good name": ""
    },
    {
      "name": "Egyptian Teal",
      "hex": "#008c8d",
      "good name": ""
    },
    {
      "name": "Egyptian Temple",
      "hex": "#d6b378",
      "good name": ""
    },
    {
      "name": "Egyptian Violet",
      "hex": "#3d496d",
      "good name": ""
    },
    {
      "name": "Egyptian White",
      "hex": "#e5f1ec",
      "good name": ""
    },
    {
      "name": "Eider White",
      "hex": "#e1ded7",
      "good name": ""
    },
    {
      "name": "Eiffel Tower",
      "hex": "#998e83",
      "good name": "x"
    },
    {
      "name": "Eigengrau",
      "hex": "#16161d",
      "good name": "x"
    },
    {
      "name": "Eiger Nordwand",
      "hex": "#7799bb",
      "good name": ""
    },
    {
      "name": "Eight Ball",
      "hex": "#103020",
      "good name": "x"
    },
    {
      "name": "El Capitan",
      "hex": "#b7a696",
      "good name": ""
    },
    {
      "name": "El Caramelo",
      "hex": "#946e48",
      "good name": ""
    },
    {
      "name": "El Niño",
      "hex": "#d0cacd",
      "good name": ""
    },
    {
      "name": "El Paso",
      "hex": "#39392c",
      "good name": ""
    },
    {
      "name": "El Salva",
      "hex": "#8f4e45",
      "good name": ""
    },
    {
      "name": "Elastic Pink",
      "hex": "#eca6ca",
      "good name": "x"
    },
    {
      "name": "Elation",
      "hex": "#dfdce5",
      "good name": ""
    },
    {
      "name": "Eldar Flesh",
      "hex": "#ecc083",
      "good name": ""
    },
    {
      "name": "Elden Ring Orange",
      "hex": "#ed8a09",
      "good name": "x"
    },
    {
      "name": "Elder Creek",
      "hex": "#afa892",
      "good name": ""
    },
    {
      "name": "Elderberry",
      "hex": "#2e2249",
      "good name": ""
    },
    {
      "name": "Elderberry Black",
      "hex": "#1e323b",
      "good name": ""
    },
    {
      "name": "Elderberry Grey",
      "hex": "#aea8b0",
      "good name": ""
    },
    {
      "name": "Elderberry White",
      "hex": "#eae5cf",
      "good name": ""
    },
    {
      "name": "Elderflower",
      "hex": "#fbf9e8",
      "good name": ""
    },
    {
      "name": "Eleanor Ann",
      "hex": "#40373e",
      "good name": ""
    },
    {
      "name": "Election Night",
      "hex": "#110320",
      "good name": ""
    },
    {
      "name": "Electra",
      "hex": "#55b492",
      "good name": "x"
    },
    {
      "name": "Electric Blue",
      "hex": "#7df9ff",
      "good name": ""
    },
    {
      "name": "Electric Brown",
      "hex": "#b56257",
      "good name": ""
    },
    {
      "name": "Electric Crimson",
      "hex": "#ff003f",
      "good name": ""
    },
    {
      "name": "Electric Cyan",
      "hex": "#0ff0fc",
      "good name": ""
    },
    {
      "name": "Electric Eel",
      "hex": "#88bbee",
      "good name": "x"
    },
    {
      "name": "Electric Energy",
      "hex": "#c9e423",
      "good name": ""
    },
    {
      "name": "Electric Flamingo",
      "hex": "#fc74fd",
      "good name": ""
    },
    {
      "name": "Electric Glow",
      "hex": "#ffd100",
      "good name": ""
    },
    {
      "name": "Electric Green",
      "hex": "#21fc0d",
      "good name": ""
    },
    {
      "name": "Electric Indigo",
      "hex": "#6600ff",
      "good name": ""
    },
    {
      "name": "Electric Laser Lime",
      "hex": "#26ff2a",
      "good name": "x"
    },
    {
      "name": "Electric Lavender",
      "hex": "#f4bfff",
      "good name": ""
    },
    {
      "name": "Electric Leaf",
      "hex": "#89dd01",
      "good name": ""
    },
    {
      "name": "Electric Lime",
      "hex": "#ccff00",
      "good name": ""
    },
    {
      "name": "Electric Orange",
      "hex": "#ff3503",
      "good name": ""
    },
    {
      "name": "Electric Pink",
      "hex": "#ff0490",
      "good name": ""
    },
    {
      "name": "Electric Purple",
      "hex": "#bf00ff",
      "good name": ""
    },
    {
      "name": "Electric Red",
      "hex": "#e60000",
      "good name": ""
    },
    {
      "name": "Electric Sheep",
      "hex": "#55ffff",
      "good name": ""
    },
    {
      "name": "Electric Slide",
      "hex": "#9db0b9",
      "good name": ""
    },
    {
      "name": "Electric Ultramarine",
      "hex": "#3f00ff",
      "good name": ""
    },
    {
      "name": "Electric Violet",
      "hex": "#8f00f1",
      "good name": ""
    },
    {
      "name": "Electric Yellow",
      "hex": "#fffc00",
      "good name": "x"
    },
    {
      "name": "Electrify",
      "hex": "#5665a0",
      "good name": ""
    },
    {
      "name": "Electromagnetic",
      "hex": "#2e3840",
      "good name": ""
    },
    {
      "name": "Electron Blue",
      "hex": "#0881d1",
      "good name": ""
    },
    {
      "name": "Electronic",
      "hex": "#556d88",
      "good name": ""
    },
    {
      "name": "Electrum",
      "hex": "#e7c697",
      "good name": ""
    },
    {
      "name": "Elegant Ice",
      "hex": "#c4b9b7",
      "good name": ""
    },
    {
      "name": "Elegant Ivory",
      "hex": "#f1e6d6",
      "good name": ""
    },
    {
      "name": "Elegant Light Rose",
      "hex": "#fdcaca",
      "good name": ""
    },
    {
      "name": "Elegant Midnight",
      "hex": "#5500bb",
      "good name": ""
    },
    {
      "name": "Elegant Navy",
      "hex": "#48516a",
      "good name": ""
    },
    {
      "name": "Elegant White",
      "hex": "#f5f0e1",
      "good name": ""
    },
    {
      "name": "Elemental",
      "hex": "#d0d3d3",
      "good name": ""
    },
    {
      "name": "Elemental Green",
      "hex": "#969783",
      "good name": ""
    },
    {
      "name": "Elemental Grey",
      "hex": "#a0a09f",
      "good name": ""
    },
    {
      "name": "Elemental Tan",
      "hex": "#cab79c",
      "good name": ""
    },
    {
      "name": "Elephant",
      "hex": "#243640",
      "good name": ""
    },
    {
      "name": "Elephant Ear",
      "hex": "#988f85",
      "good name": ""
    },
    {
      "name": "Elephant Grey",
      "hex": "#95918c",
      "good name": ""
    },
    {
      "name": "Elephant in the Room",
      "hex": "#a8a9a8",
      "good name": "x"
    },
    {
      "name": "Elephant Skin",
      "hex": "#8f8982",
      "good name": ""
    },
    {
      "name": "Elevated",
      "hex": "#b3c3d4",
      "good name": ""
    },
    {
      "name": "Elf Flesh",
      "hex": "#f7c380",
      "good name": ""
    },
    {
      "name": "Elf Green",
      "hex": "#1b8a6b",
      "good name": ""
    },
    {
      "name": "Elf Shoe",
      "hex": "#68b082",
      "good name": ""
    },
    {
      "name": "Elf Skintone",
      "hex": "#f7c985",
      "good name": ""
    },
    {
      "name": "Elf Slippers",
      "hex": "#a6a865",
      "good name": ""
    },
    {
      "name": "Elfin Games",
      "hex": "#9dd196",
      "good name": ""
    },
    {
      "name": "Elfin Herb",
      "hex": "#cab4d4",
      "good name": ""
    },
    {
      "name": "Elfin Magic",
      "hex": "#eddbe9",
      "good name": ""
    },
    {
      "name": "Elfin Yellow",
      "hex": "#eeea97",
      "good name": ""
    },
    {
      "name": "Elise",
      "hex": "#d8d7b9",
      "good name": ""
    },
    {
      "name": "Elite Blue",
      "hex": "#1b3053",
      "good name": ""
    },
    {
      "name": "Elite Green",
      "hex": "#133700",
      "good name": ""
    },
    {
      "name": "Elite Pink",
      "hex": "#bb8da8",
      "good name": ""
    },
    {
      "name": "Elite Teal",
      "hex": "#133337",
      "good name": "x"
    },
    {
      "name": "Elite Wisteria",
      "hex": "#987fa9",
      "good name": ""
    },
    {
      "name": "Elizabeth Blue",
      "hex": "#a1b8d2",
      "good name": ""
    },
    {
      "name": "Elizabeth Rose",
      "hex": "#fadfd2",
      "good name": ""
    },
    {
      "name": "Elk Horn",
      "hex": "#e9e2d3",
      "good name": ""
    },
    {
      "name": "Elk Skin",
      "hex": "#eae6dc",
      "good name": ""
    },
    {
      "name": "Elkhound",
      "hex": "#897269",
      "good name": ""
    },
    {
      "name": "Ellen",
      "hex": "#e2c8b7",
      "good name": ""
    },
    {
      "name": "Ellie Grey",
      "hex": "#aaa9a4",
      "good name": ""
    },
    {
      "name": "Ellis Mist",
      "hex": "#778070",
      "good name": ""
    },
    {
      "name": "Elm",
      "hex": "#297b76",
      "good name": ""
    },
    {
      "name": "Elm Brown Red",
      "hex": "#b25b09",
      "good name": ""
    },
    {
      "name": "Elm Green",
      "hex": "#547053",
      "good name": ""
    },
    {
      "name": "Elmer's Echo",
      "hex": "#264066",
      "good name": ""
    },
    {
      "name": "Elmwood",
      "hex": "#8c7c61",
      "good name": ""
    },
    {
      "name": "Elote",
      "hex": "#ffe8ab",
      "good name": ""
    },
    {
      "name": "Elusion",
      "hex": "#d2cfcc",
      "good name": ""
    },
    {
      "name": "Elusive",
      "hex": "#fed7cf",
      "good name": ""
    },
    {
      "name": "Elusive Blue",
      "hex": "#dde4e8",
      "good name": ""
    },
    {
      "name": "Elusive Dawn",
      "hex": "#d5bfad",
      "good name": ""
    },
    {
      "name": "Elusive Dream",
      "hex": "#cdbfc6",
      "good name": ""
    },
    {
      "name": "Elusive Mauve",
      "hex": "#dec4d2",
      "good name": ""
    },
    {
      "name": "Elusive Violet",
      "hex": "#d4c0c5",
      "good name": ""
    },
    {
      "name": "Elusive White",
      "hex": "#e8e3d6",
      "good name": ""
    },
    {
      "name": "Elven Flesh",
      "hex": "#f7cf8a",
      "good name": ""
    },
    {
      "name": "Elwynn Forest Olive",
      "hex": "#7a8716",
      "good name": ""
    },
    {
      "name": "Elysia Chlorotica",
      "hex": "#9aae07",
      "good name": ""
    },
    {
      "name": "Elysian Green",
      "hex": "#a5b145",
      "good name": ""
    },
    {
      "name": "Elysium Gold",
      "hex": "#ce9500",
      "good name": ""
    },
    {
      "name": "Emanation",
      "hex": "#b4a3bb",
      "good name": ""
    },
    {
      "name": "Embarcadero",
      "hex": "#5d4643",
      "good name": ""
    },
    {
      "name": "Embarrassed",
      "hex": "#ee7799",
      "good name": "x"
    },
    {
      "name": "Embarrassed Frog",
      "hex": "#996611",
      "good name": "x"
    },
    {
      "name": "Embarrassment",
      "hex": "#ff7777",
      "good name": "x"
    },
    {
      "name": "Embellished Blue",
      "hex": "#8bc7c8",
      "good name": ""
    },
    {
      "name": "Embellishment",
      "hex": "#cbdee2",
      "good name": ""
    },
    {
      "name": "Ember Red",
      "hex": "#792445",
      "good name": ""
    },
    {
      "name": "Emberglow",
      "hex": "#ea6759",
      "good name": ""
    },
    {
      "name": "Embrace",
      "hex": "#e8b8a7",
      "good name": ""
    },
    {
      "name": "Embracing",
      "hex": "#246453",
      "good name": ""
    },
    {
      "name": "Embroidered Silk",
      "hex": "#b8dca7",
      "good name": ""
    },
    {
      "name": "Embroidery",
      "hex": "#d4bebf",
      "good name": ""
    },
    {
      "name": "Emerald",
      "hex": "#028f1e",
      "good name": "x"
    },
    {
      "name": "Emerald City",
      "hex": "#6a7e5f",
      "good name": ""
    },
    {
      "name": "Emerald Clear Green",
      "hex": "#4f8129",
      "good name": ""
    },
    {
      "name": "Emerald Coast",
      "hex": "#009185",
      "good name": ""
    },
    {
      "name": "Emerald Dream",
      "hex": "#007a5e",
      "good name": ""
    },
    {
      "name": "Emerald Forest",
      "hex": "#224347",
      "good name": "x"
    },
    {
      "name": "Emerald Glitter",
      "hex": "#66bb00",
      "good name": "x"
    },
    {
      "name": "Emerald Green",
      "hex": "#046307",
      "good name": ""
    },
    {
      "name": "Emerald Ice Palace",
      "hex": "#2af589",
      "good name": "x"
    },
    {
      "name": "Emerald Lake",
      "hex": "#069261",
      "good name": ""
    },
    {
      "name": "Emerald Light Green",
      "hex": "#00a267",
      "good name": ""
    },
    {
      "name": "Emerald Pool",
      "hex": "#155e60",
      "good name": ""
    },
    {
      "name": "Emerald Reflection",
      "hex": "#50c878",
      "good name": ""
    },
    {
      "name": "Emerald Ring",
      "hex": "#578758",
      "good name": ""
    },
    {
      "name": "Emerald Spring",
      "hex": "#095155",
      "good name": ""
    },
    {
      "name": "Emerald Starling",
      "hex": "#11bb11",
      "good name": ""
    },
    {
      "name": "Emerald Stone",
      "hex": "#016360",
      "good name": ""
    },
    {
      "name": "Emerald Succulent",
      "hex": "#55aaaa",
      "good name": ""
    },
    {
      "name": "Emerald Wave",
      "hex": "#4fb3a9",
      "good name": ""
    },
    {
      "name": "Emerald-Crested Manakin",
      "hex": "#5c6b8f",
      "good name": ""
    },
    {
      "name": "Emergency",
      "hex": "#911911",
      "good name": "x"
    },
    {
      "name": "Emergency Zone",
      "hex": "#e36940",
      "good name": ""
    },
    {
      "name": "Emerging Leaf",
      "hex": "#e1e1cf",
      "good name": ""
    },
    {
      "name": "Emerging Taupe",
      "hex": "#b8a196",
      "good name": ""
    },
    {
      "name": "Emerson",
      "hex": "#3e6058",
      "good name": ""
    },
    {
      "name": "Emilie's Dream",
      "hex": "#eccee5",
      "good name": ""
    },
    {
      "name": "Emily",
      "hex": "#abd1e1",
      "good name": ""
    },
    {
      "name": "Emily Ann Tan",
      "hex": "#d5c7b6",
      "good name": ""
    },
    {
      "name": "Eminence",
      "hex": "#6e3974",
      "good name": "x"
    },
    {
      "name": "Eminent Bronze",
      "hex": "#7a6841",
      "good name": ""
    },
    {
      "name": "Emoji Yellow",
      "hex": "#ffde34",
      "good name": "x"
    },
    {
      "name": "Emotional",
      "hex": "#c65f47",
      "good name": ""
    },
    {
      "name": "Emotive Ring",
      "hex": "#856d70",
      "good name": ""
    },
    {
      "name": "Emperador",
      "hex": "#684832",
      "good name": ""
    },
    {
      "name": "Emperor",
      "hex": "#50494a",
      "good name": ""
    },
    {
      "name": "Emperor Cherry Red",
      "hex": "#ac2c32",
      "good name": ""
    },
    {
      "name": "Emperor Jade",
      "hex": "#007b75",
      "good name": "x"
    },
    {
      "name": "Emperor Jewel",
      "hex": "#715a8d",
      "good name": ""
    },
    {
      "name": "Emperor's Children",
      "hex": "#f0a0b6",
      "good name": ""
    },
    {
      "name": "Emperor's Gold",
      "hex": "#b0976d",
      "good name": ""
    },
    {
      "name": "Emperor's Robe",
      "hex": "#99959d",
      "good name": ""
    },
    {
      "name": "Emperor's Silk",
      "hex": "#00816a",
      "good name": ""
    },
    {
      "name": "Emperors Children",
      "hex": "#b94278",
      "good name": ""
    },
    {
      "name": "Empire Blue",
      "hex": "#6193b4",
      "good name": ""
    },
    {
      "name": "Empire Gold",
      "hex": "#c19f6e",
      "good name": ""
    },
    {
      "name": "Empire Porcelain",
      "hex": "#e0dbd3",
      "good name": ""
    },
    {
      "name": "Empire Ranch",
      "hex": "#93826a",
      "good name": ""
    },
    {
      "name": "Empire Rose",
      "hex": "#e7c5c1",
      "good name": ""
    },
    {
      "name": "Empire State Grey",
      "hex": "#d9dbdf",
      "good name": ""
    },
    {
      "name": "Empire Violet",
      "hex": "#9264a2",
      "good name": ""
    },
    {
      "name": "Empire Yellow",
      "hex": "#f7d000",
      "good name": ""
    },
    {
      "name": "Empower",
      "hex": "#b54644",
      "good name": ""
    },
    {
      "name": "Empress",
      "hex": "#7c7173",
      "good name": "x"
    },
    {
      "name": "Empress Envy",
      "hex": "#2a9ca0",
      "good name": ""
    },
    {
      "name": "Empress Teal",
      "hex": "#10605a",
      "good name": ""
    },
    {
      "name": "Emptiness",
      "hex": "#fcfdfc",
      "good name": "x"
    },
    {
      "name": "Emu",
      "hex": "#756e6d",
      "good name": ""
    },
    {
      "name": "Emu Egg",
      "hex": "#3d8481",
      "good name": ""
    },
    {
      "name": "En Plein Air",
      "hex": "#d0c5be",
      "good name": ""
    },
    {
      "name": "Enamel Antique Green",
      "hex": "#427f85",
      "good name": ""
    },
    {
      "name": "Enamel Blue",
      "hex": "#007a8e",
      "good name": ""
    },
    {
      "name": "Enamel Green",
      "hex": "#bacca8",
      "good name": ""
    },
    {
      "name": "Enamelled Dragon",
      "hex": "#54c589",
      "good name": ""
    },
    {
      "name": "Enamelled Jewel",
      "hex": "#045c61",
      "good name": ""
    },
    {
      "name": "Enamored",
      "hex": "#c67d84",
      "good name": ""
    },
    {
      "name": "Encaje Aperlado",
      "hex": "#f7ebd6",
      "good name": ""
    },
    {
      "name": "Encarnado",
      "hex": "#fd0202",
      "good name": ""
    },
    {
      "name": "Enchant",
      "hex": "#d1c6d2",
      "good name": ""
    },
    {
      "name": "Enchanted",
      "hex": "#c9e2cf",
      "good name": ""
    },
    {
      "name": "Enchanted Blue",
      "hex": "#047495",
      "good name": ""
    },
    {
      "name": "Enchanted Eve",
      "hex": "#79837f",
      "good name": ""
    },
    {
      "name": "Enchanted Evening",
      "hex": "#d3e9ec",
      "good name": ""
    },
    {
      "name": "Enchanted Meadow",
      "hex": "#b1d4b7",
      "good name": ""
    },
    {
      "name": "Enchanted Silver",
      "hex": "#b5b5bd",
      "good name": ""
    },
    {
      "name": "Enchanted Wells",
      "hex": "#26ad8d",
      "good name": ""
    },
    {
      "name": "Enchanted Wood",
      "hex": "#94895f",
      "good name": ""
    },
    {
      "name": "Enchanting",
      "hex": "#82badf",
      "good name": ""
    },
    {
      "name": "Enchanting Ginger",
      "hex": "#ac7435",
      "good name": ""
    },
    {
      "name": "Enchanting Ivy",
      "hex": "#315955",
      "good name": "x"
    },
    {
      "name": "Enchanting Sapphire",
      "hex": "#276dd6",
      "good name": ""
    },
    {
      "name": "Enchanting Sky",
      "hex": "#7886aa",
      "good name": ""
    },
    {
      "name": "Enchantress",
      "hex": "#5d3a47",
      "good name": ""
    },
    {
      "name": "Encore",
      "hex": "#6d7383",
      "good name": ""
    },
    {
      "name": "Encore Teal",
      "hex": "#30525b",
      "good name": ""
    },
    {
      "name": "Encounter",
      "hex": "#ff9552",
      "good name": ""
    },
    {
      "name": "End of Summer",
      "hex": "#cc8f15",
      "good name": "x"
    },
    {
      "name": "End of the Rainbow",
      "hex": "#d2eed6",
      "good name": ""
    },
    {
      "name": "Endearment",
      "hex": "#ffd8a1",
      "good name": ""
    },
    {
      "name": "Endeavour",
      "hex": "#29598b",
      "good name": ""
    },
    {
      "name": "Ending Autumn",
      "hex": "#8b6f64",
      "good name": ""
    },
    {
      "name": "Ending Dawn",
      "hex": "#fcc9b9",
      "good name": ""
    },
    {
      "name": "Ending Navy Blue",
      "hex": "#1c305c",
      "good name": ""
    },
    {
      "name": "Endive",
      "hex": "#cee1c8",
      "good name": "x"
    },
    {
      "name": "Endless",
      "hex": "#5b976a",
      "good name": ""
    },
    {
      "name": "Endless Galaxy",
      "hex": "#000044",
      "good name": "x"
    },
    {
      "name": "Endless Possibilities",
      "hex": "#e0413a",
      "good name": ""
    },
    {
      "name": "Endless Sea",
      "hex": "#32586e",
      "good name": ""
    },
    {
      "name": "Endless Silk",
      "hex": "#ddddbb",
      "good name": ""
    },
    {
      "name": "Endless Sky",
      "hex": "#cae3ea",
      "good name": ""
    },
    {
      "name": "Endless Slumber",
      "hex": "#b1aab3",
      "good name": ""
    },
    {
      "name": "Endo",
      "hex": "#5da464",
      "good name": "x"
    },
    {
      "name": "Enduring",
      "hex": "#586683",
      "good name": ""
    },
    {
      "name": "Enduring Bronze",
      "hex": "#554c3e",
      "good name": ""
    },
    {
      "name": "Enduring Ice",
      "hex": "#ebe8db",
      "good name": ""
    },
    {
      "name": "Energetic Orange",
      "hex": "#d85739",
      "good name": ""
    },
    {
      "name": "Energetic Pink",
      "hex": "#f3c6cc",
      "good name": ""
    },
    {
      "name": "Energic Eggplant",
      "hex": "#b300b3",
      "good name": ""
    },
    {
      "name": "Energise",
      "hex": "#7cca6b",
      "good name": ""
    },
    {
      "name": "Energized",
      "hex": "#d2d25a",
      "good name": ""
    },
    {
      "name": "Energos",
      "hex": "#c0e740",
      "good name": ""
    },
    {
      "name": "Energy Green",
      "hex": "#1ca350",
      "good name": ""
    },
    {
      "name": "Energy Orange",
      "hex": "#ff9532",
      "good name": ""
    },
    {
      "name": "Energy Peak",
      "hex": "#bb5f60",
      "good name": ""
    },
    {
      "name": "Energy Yellow",
      "hex": "#f5d752",
      "good name": ""
    },
    {
      "name": "Enfield Brown",
      "hex": "#a73211",
      "good name": ""
    },
    {
      "name": "Engagement Silver",
      "hex": "#c2c6c0",
      "good name": ""
    },
    {
      "name": "English Bartlett",
      "hex": "#a17548",
      "good name": ""
    },
    {
      "name": "English Breakfast",
      "hex": "#441111",
      "good name": "x"
    },
    {
      "name": "English Channel",
      "hex": "#4e6173",
      "good name": ""
    },
    {
      "name": "English Channel Fog",
      "hex": "#cbd3e6",
      "good name": ""
    },
    {
      "name": "English Coral",
      "hex": "#c64a55",
      "good name": ""
    },
    {
      "name": "English Custard",
      "hex": "#e2b66c",
      "good name": ""
    },
    {
      "name": "English Daisy",
      "hex": "#ffca46",
      "good name": ""
    },
    {
      "name": "English Forest",
      "hex": "#606256",
      "good name": ""
    },
    {
      "name": "English Green",
      "hex": "#1b4d3f",
      "good name": ""
    },
    {
      "name": "English Holly",
      "hex": "#274234",
      "good name": ""
    },
    {
      "name": "English Hollyhock",
      "hex": "#b5c9d3",
      "good name": ""
    },
    {
      "name": "English Ivy",
      "hex": "#61845b",
      "good name": ""
    },
    {
      "name": "English Lavender",
      "hex": "#9d7bb0",
      "good name": ""
    },
    {
      "name": "English Manor",
      "hex": "#7181a4",
      "good name": "x"
    },
    {
      "name": "English Meadow",
      "hex": "#028a52",
      "good name": ""
    },
    {
      "name": "English Red",
      "hex": "#ab4b52",
      "good name": ""
    },
    {
      "name": "English River",
      "hex": "#3c768a",
      "good name": ""
    },
    {
      "name": "English Rose",
      "hex": "#f4c6c3",
      "good name": ""
    },
    {
      "name": "English Rose Bud",
      "hex": "#e9c9cb",
      "good name": ""
    },
    {
      "name": "English Saddle",
      "hex": "#8e6947",
      "good name": ""
    },
    {
      "name": "English Scone",
      "hex": "#e9cfbb",
      "good name": ""
    },
    {
      "name": "English Vermillion",
      "hex": "#cc474b",
      "good name": ""
    },
    {
      "name": "English Violet",
      "hex": "#563d5d",
      "good name": ""
    },
    {
      "name": "English Walnut",
      "hex": "#3e2b23",
      "good name": "x"
    },
    {
      "name": "Enhance",
      "hex": "#d2a5be",
      "good name": ""
    },
    {
      "name": "Enigma",
      "hex": "#bdbf35",
      "good name": ""
    },
    {
      "name": "Enigmatic",
      "hex": "#7e7275",
      "good name": ""
    },
    {
      "name": "Enjoy",
      "hex": "#ead4c4",
      "good name": ""
    },
    {
      "name": "Enjoyable Yellow",
      "hex": "#f5d6a9",
      "good name": ""
    },
    {
      "name": "Enlightened Lime",
      "hex": "#e3ead6",
      "good name": ""
    },
    {
      "name": "Enoki",
      "hex": "#f8faee",
      "good name": "x"
    },
    {
      "name": "Enokitake Mushroom",
      "hex": "#ffeedd",
      "good name": ""
    },
    {
      "name": "Enough Is Enough",
      "hex": "#898c4a",
      "good name": ""
    },
    {
      "name": "Enraged",
      "hex": "#ee0044",
      "good name": "x"
    },
    {
      "name": "Enshūcha Red",
      "hex": "#cb6649",
      "good name": ""
    },
    {
      "name": "Ensign Blue",
      "hex": "#384c67",
      "good name": ""
    },
    {
      "name": "Entan Red",
      "hex": "#ec6d51",
      "good name": ""
    },
    {
      "name": "Enterprise",
      "hex": "#65788c",
      "good name": ""
    },
    {
      "name": "Enthroned Above",
      "hex": "#ac92b0",
      "good name": ""
    },
    {
      "name": "Enthusiasm",
      "hex": "#00ffaa",
      "good name": ""
    },
    {
      "name": "Enticing Red",
      "hex": "#b74e4f",
      "good name": ""
    },
    {
      "name": "Entrapment",
      "hex": "#005961",
      "good name": ""
    },
    {
      "name": "Enviable",
      "hex": "#53983c",
      "good name": ""
    },
    {
      "name": "Envious Pastel",
      "hex": "#ddf3c2",
      "good name": ""
    },
    {
      "name": "Environmental",
      "hex": "#b1b5a0",
      "good name": ""
    },
    {
      "name": "Environmental Green",
      "hex": "#006c4b",
      "good name": ""
    },
    {
      "name": "Environmental Study",
      "hex": "#88bb00",
      "good name": ""
    },
    {
      "name": "Envisage",
      "hex": "#96bfb7",
      "good name": ""
    },
    {
      "name": "Envy",
      "hex": "#8ba58f",
      "good name": ""
    },
    {
      "name": "Eon",
      "hex": "#d4d3c9",
      "good name": ""
    },
    {
      "name": "Ephemera",
      "hex": "#6f5965",
      "good name": ""
    },
    {
      "name": "Ephemeral Blue",
      "hex": "#cbd4df",
      "good name": "x"
    },
    {
      "name": "Ephemeral Fog",
      "hex": "#d6ced3",
      "good name": ""
    },
    {
      "name": "Ephemeral Mist",
      "hex": "#c7cdd3",
      "good name": ""
    },
    {
      "name": "Ephemeral Peach",
      "hex": "#fce2d4",
      "good name": ""
    },
    {
      "name": "Ephemeral Red",
      "hex": "#e4cfd7",
      "good name": "x"
    },
    {
      "name": "Ephren Blue",
      "hex": "#1164b4",
      "good name": ""
    },
    {
      "name": "Epic Blue",
      "hex": "#0066ee",
      "good name": "x"
    },
    {
      "name": "Epicurean Orange",
      "hex": "#ea6a0a",
      "good name": ""
    },
    {
      "name": "Epidote Olvene Ore",
      "hex": "#ab924b",
      "good name": ""
    },
    {
      "name": "Epimetheus",
      "hex": "#4bb2d5",
      "good name": ""
    },
    {
      "name": "Epink",
      "hex": "#dd33ff",
      "good name": "x"
    },
    {
      "name": "Epiphany",
      "hex": "#dbc1de",
      "good name": ""
    },
    {
      "name": "Epsom",
      "hex": "#849161",
      "good name": ""
    },
    {
      "name": "Equanimity",
      "hex": "#83a9b3",
      "good name": "x"
    },
    {
      "name": "Equator",
      "hex": "#dab160",
      "good name": ""
    },
    {
      "name": "Equator Glow",
      "hex": "#ffe6a0",
      "good name": ""
    },
    {
      "name": "Equatorial",
      "hex": "#ffce84",
      "good name": ""
    },
    {
      "name": "Equatorial Forest",
      "hex": "#70855e",
      "good name": ""
    },
    {
      "name": "Equestrian",
      "hex": "#bea781",
      "good name": ""
    },
    {
      "name": "Equestrian Green",
      "hex": "#54654f",
      "good name": ""
    },
    {
      "name": "Equestrian Leather",
      "hex": "#5b5652",
      "good name": ""
    },
    {
      "name": "Equilibrium",
      "hex": "#a49f9f",
      "good name": ""
    },
    {
      "name": "Equinox",
      "hex": "#62696b",
      "good name": ""
    },
    {
      "name": "Era",
      "hex": "#d7e3e5",
      "good name": ""
    },
    {
      "name": "Erebus Blue",
      "hex": "#060030",
      "good name": ""
    },
    {
      "name": "Ermine",
      "hex": "#836b4f",
      "good name": ""
    },
    {
      "name": "Eros Pink",
      "hex": "#c84f68",
      "good name": ""
    },
    {
      "name": "Erosion",
      "hex": "#ddd1bf",
      "good name": ""
    },
    {
      "name": "Errigal White",
      "hex": "#f2f2f4",
      "good name": "x"
    },
    {
      "name": "Erythrosine",
      "hex": "#fc7ab0",
      "good name": ""
    },
    {
      "name": "Escalope",
      "hex": "#cc8866",
      "good name": "x"
    },
    {
      "name": "Escapade Gold",
      "hex": "#b89b59",
      "good name": ""
    },
    {
      "name": "Escape from Columbia",
      "hex": "#d2e2ef",
      "good name": ""
    },
    {
      "name": "Escape Grey",
      "hex": "#abac9f",
      "good name": ""
    },
    {
      "name": "Escargot",
      "hex": "#fff1d8",
      "good name": "x"
    },
    {
      "name": "Escarpment",
      "hex": "#d5b79b",
      "good name": ""
    },
    {
      "name": "Eshin Grey",
      "hex": "#4a4f52",
      "good name": ""
    },
    {
      "name": "Eskimo",
      "hex": "#55a0b7",
      "good name": ""
    },
    {
      "name": "Eskimo White",
      "hex": "#c2bdc2",
      "good name": ""
    },
    {
      "name": "Esmeralda",
      "hex": "#45be76",
      "good name": ""
    },
    {
      "name": "Esoteric Touch Green",
      "hex": "#abedc9",
      "good name": ""
    },
    {
      "name": "Espalier",
      "hex": "#2f5f3a",
      "good name": ""
    },
    {
      "name": "Esper's Fungus Green",
      "hex": "#80f9ad",
      "good name": ""
    },
    {
      "name": "Esplanade",
      "hex": "#d5bda4",
      "good name": ""
    },
    {
      "name": "Espresso",
      "hex": "#4e312d",
      "good name": "x"
    },
    {
      "name": "Espresso Beans",
      "hex": "#4c443e",
      "good name": ""
    },
    {
      "name": "Espresso Macchiato",
      "hex": "#4f4744",
      "good name": "x"
    },
    {
      "name": "Espresso Martini",
      "hex": "#aa9c8e",
      "good name": ""
    },
    {
      "name": "Esprit",
      "hex": "#bebd99",
      "good name": ""
    },
    {
      "name": "Essence of Violet",
      "hex": "#efedee",
      "good name": ""
    },
    {
      "name": "Essential Brown",
      "hex": "#7d6848",
      "good name": ""
    },
    {
      "name": "Essential Grey",
      "hex": "#bcb8b6",
      "good name": ""
    },
    {
      "name": "Essential Teal",
      "hex": "#007377",
      "good name": ""
    },
    {
      "name": "Essentially Bright",
      "hex": "#ffde9f",
      "good name": ""
    },
    {
      "name": "Essex Blue",
      "hex": "#b0ccda",
      "good name": ""
    },
    {
      "name": "Establish Mint",
      "hex": "#e2eddd",
      "good name": ""
    },
    {
      "name": "Estate Blue",
      "hex": "#233658",
      "good name": ""
    },
    {
      "name": "Estate Limestone",
      "hex": "#dccdb4",
      "good name": ""
    },
    {
      "name": "Estate Vineyard",
      "hex": "#68454b",
      "good name": ""
    },
    {
      "name": "Estragon",
      "hex": "#a5af76",
      "good name": "x"
    },
    {
      "name": "Estroruby",
      "hex": "#9b101f",
      "good name": ""
    },
    {
      "name": "Estuary Blue",
      "hex": "#70a5b7",
      "good name": ""
    },
    {
      "name": "Etcetera",
      "hex": "#e1c6d4",
      "good name": ""
    },
    {
      "name": "Etched Glass",
      "hex": "#dde2e2",
      "good name": ""
    },
    {
      "name": "Eternal Cherry",
      "hex": "#dd0044",
      "good name": ""
    },
    {
      "name": "Eternal Elegance",
      "hex": "#b3c3dd",
      "good name": ""
    },
    {
      "name": "Eternal Flame",
      "hex": "#a13f49",
      "good name": "x"
    },
    {
      "name": "Eternal White",
      "hex": "#faf3dc",
      "good name": ""
    },
    {
      "name": "Eternity",
      "hex": "#2d2f28",
      "good name": ""
    },
    {
      "name": "Ether",
      "hex": "#9eb6b8",
      "good name": "x"
    },
    {
      "name": "Etherea",
      "hex": "#a5958f",
      "good name": ""
    },
    {
      "name": "Ethereal",
      "hex": "#f9eecb",
      "good name": ""
    },
    {
      "name": "Ethereal Blue",
      "hex": "#5ca6ce",
      "good name": ""
    },
    {
      "name": "Ethereal Green",
      "hex": "#f1ecca",
      "good name": ""
    },
    {
      "name": "Ethereal Mood",
      "hex": "#cce7eb",
      "good name": ""
    },
    {
      "name": "Ethereal White",
      "hex": "#e6f1f1",
      "good name": ""
    },
    {
      "name": "Etherium Blue",
      "hex": "#b9c4de",
      "good name": ""
    },
    {
      "name": "Ethiopia",
      "hex": "#968777",
      "good name": ""
    },
    {
      "name": "Ethiopian Wolf",
      "hex": "#985629",
      "good name": ""
    },
    {
      "name": "Etiquette",
      "hex": "#e2d0d6",
      "good name": ""
    },
    {
      "name": "Eton Blue",
      "hex": "#96c8a2",
      "good name": ""
    },
    {
      "name": "Etruscan Red",
      "hex": "#a2574b",
      "good name": ""
    },
    {
      "name": "Etude Lilac",
      "hex": "#d5d2d7",
      "good name": ""
    },
    {
      "name": "Eucalipto",
      "hex": "#4bc3a8",
      "good name": ""
    },
    {
      "name": "Eucalyptus",
      "hex": "#329760",
      "good name": "x"
    },
    {
      "name": "Eucalyptus Green",
      "hex": "#1e675a",
      "good name": ""
    },
    {
      "name": "Eucalyptus Leaf",
      "hex": "#bad2b8",
      "good name": ""
    },
    {
      "name": "Eucalyptus Wreath",
      "hex": "#88927e",
      "good name": ""
    },
    {
      "name": "Eugenia",
      "hex": "#f2e8d4",
      "good name": ""
    },
    {
      "name": "Eunry",
      "hex": "#cda59c",
      "good name": ""
    },
    {
      "name": "Euphoria",
      "hex": "#eebbff",
      "good name": ""
    },
    {
      "name": "Euphoric Lilac",
      "hex": "#dac7da",
      "good name": ""
    },
    {
      "name": "Euphoric Magenta",
      "hex": "#7f576d",
      "good name": ""
    },
    {
      "name": "Euro Linen",
      "hex": "#f2e8db",
      "good name": ""
    },
    {
      "name": "Eurolinen",
      "hex": "#eee2d3",
      "good name": ""
    },
    {
      "name": "Europe Blue",
      "hex": "#006796",
      "good name": ""
    },
    {
      "name": "European Pine",
      "hex": "#756556",
      "good name": ""
    },
    {
      "name": "Eva Green",
      "hex": "#36ff9a",
      "good name": ""
    },
    {
      "name": "Evaporation",
      "hex": "#d1d5d3",
      "good name": ""
    },
    {
      "name": "Even Evan",
      "hex": "#998371",
      "good name": ""
    },
    {
      "name": "Even Growth",
      "hex": "#b2aa7a",
      "good name": ""
    },
    {
      "name": "Evening Blue",
      "hex": "#2a293e",
      "good name": ""
    },
    {
      "name": "Evening Blush",
      "hex": "#c49087",
      "good name": ""
    },
    {
      "name": "Evening Canyon",
      "hex": "#454341",
      "good name": ""
    },
    {
      "name": "Evening Cityscape",
      "hex": "#4b535c",
      "good name": ""
    },
    {
      "name": "Evening Crimson",
      "hex": "#8e6b76",
      "good name": ""
    },
    {
      "name": "Evening Dove",
      "hex": "#c2bead",
      "good name": ""
    },
    {
      "name": "Evening Dress",
      "hex": "#d1a19b",
      "good name": ""
    },
    {
      "name": "Evening East",
      "hex": "#585e6a",
      "good name": ""
    },
    {
      "name": "Evening Emerald",
      "hex": "#56736f",
      "good name": ""
    },
    {
      "name": "Evening Fizz",
      "hex": "#4d4970",
      "good name": ""
    },
    {
      "name": "Evening Fog",
      "hex": "#8c9997",
      "good name": ""
    },
    {
      "name": "Evening Glory",
      "hex": "#3a4a62",
      "good name": ""
    },
    {
      "name": "Evening Glow",
      "hex": "#fdd792",
      "good name": "x"
    },
    {
      "name": "Evening Green",
      "hex": "#7c7a3a",
      "good name": ""
    },
    {
      "name": "Evening Haze",
      "hex": "#bdb8c7",
      "good name": ""
    },
    {
      "name": "Evening Hush",
      "hex": "#7b8ca8",
      "good name": ""
    },
    {
      "name": "Evening in Paris",
      "hex": "#938f9f",
      "good name": ""
    },
    {
      "name": "Evening Lagoon",
      "hex": "#5868ae",
      "good name": ""
    },
    {
      "name": "Evening Lavender",
      "hex": "#4d4469",
      "good name": ""
    },
    {
      "name": "Evening Mauve",
      "hex": "#463f67",
      "good name": ""
    },
    {
      "name": "Evening Mist",
      "hex": "#e3e9e8",
      "good name": ""
    },
    {
      "name": "Evening Pink",
      "hex": "#a7879a",
      "good name": ""
    },
    {
      "name": "Evening Primrose",
      "hex": "#ccdb1e",
      "good name": ""
    },
    {
      "name": "Evening Sand",
      "hex": "#ddb6ab",
      "good name": ""
    },
    {
      "name": "Evening Sea",
      "hex": "#26604f",
      "good name": ""
    },
    {
      "name": "Evening Shadow",
      "hex": "#a1838b",
      "good name": ""
    },
    {
      "name": "Evening Slipper",
      "hex": "#a99ec1",
      "good name": ""
    },
    {
      "name": "Evening Star",
      "hex": "#ffd160",
      "good name": ""
    },
    {
      "name": "Evening Storm",
      "hex": "#465058",
      "good name": ""
    },
    {
      "name": "Evening Sunset",
      "hex": "#edb06d",
      "good name": ""
    },
    {
      "name": "Evening Symphony",
      "hex": "#51637b",
      "good name": ""
    },
    {
      "name": "Evening White",
      "hex": "#d8dbd7",
      "good name": ""
    },
    {
      "name": "Eventide",
      "hex": "#656470",
      "good name": ""
    },
    {
      "name": "Everblooming",
      "hex": "#f0c8b6",
      "good name": ""
    },
    {
      "name": "Everest",
      "hex": "#a0e3e0",
      "good name": ""
    },
    {
      "name": "Everglade",
      "hex": "#264334",
      "good name": "x"
    },
    {
      "name": "Everglade Mist",
      "hex": "#b7d7de",
      "good name": ""
    },
    {
      "name": "Evergreen",
      "hex": "#11574a",
      "good name": "x"
    },
    {
      "name": "Evergreen Bough",
      "hex": "#535c55",
      "good name": ""
    },
    {
      "name": "Evergreen Boughs",
      "hex": "#50594f",
      "good name": ""
    },
    {
      "name": "Evergreen Field",
      "hex": "#47534f",
      "good name": ""
    },
    {
      "name": "Evergreen Fog",
      "hex": "#95978a",
      "good name": ""
    },
    {
      "name": "Evergreen Forest",
      "hex": "#0e695f",
      "good name": ""
    },
    {
      "name": "Evergreen Trail",
      "hex": "#6f7568",
      "good name": ""
    },
    {
      "name": "Evergreens",
      "hex": "#405840",
      "good name": ""
    },
    {
      "name": "Everlasting",
      "hex": "#a1bed9",
      "good name": ""
    },
    {
      "name": "Everlasting Ice",
      "hex": "#f6fdfa",
      "good name": "x"
    },
    {
      "name": "Everlasting Sage",
      "hex": "#949587",
      "good name": ""
    },
    {
      "name": "Evermore",
      "hex": "#463e3b",
      "good name": ""
    },
    {
      "name": "Eversong Orange",
      "hex": "#ffa62d",
      "good name": ""
    },
    {
      "name": "Everyday White",
      "hex": "#e4dcd4",
      "good name": ""
    },
    {
      "name": "Everything's Rosy",
      "hex": "#d8aca0",
      "good name": ""
    },
    {
      "name": "Evil Centipede",
      "hex": "#aa2211",
      "good name": ""
    },
    {
      "name": "Evil Curse",
      "hex": "#884488",
      "good name": ""
    },
    {
      "name": "Evil Eye",
      "hex": "#1100cc",
      "good name": ""
    },
    {
      "name": "Evil Forces",
      "hex": "#770022",
      "good name": "x"
    },
    {
      "name": "Evil Sunz Scarlet",
      "hex": "#c2191f",
      "good name": ""
    },
    {
      "name": "Evil-Lyn",
      "hex": "#fed903",
      "good name": ""
    },
    {
      "name": "Evolution",
      "hex": "#704a3d",
      "good name": ""
    },
    {
      "name": "Evora",
      "hex": "#538b89",
      "good name": ""
    },
    {
      "name": "Ewa",
      "hex": "#454042",
      "good name": ""
    },
    {
      "name": "Exaggerated Blush",
      "hex": "#b55067",
      "good name": ""
    },
    {
      "name": "Excalibur",
      "hex": "#676168",
      "good name": "x"
    },
    {
      "name": "Excelsior",
      "hex": "#908b85",
      "good name": ""
    },
    {
      "name": "Exciting Orange",
      "hex": "#f0b07a",
      "good name": ""
    },
    {
      "name": "Exclusive Elixir",
      "hex": "#f9f1dd",
      "good name": "x"
    },
    {
      "name": "Exclusive Green",
      "hex": "#38493e",
      "good name": ""
    },
    {
      "name": "Exclusive Ivory",
      "hex": "#e2d8c3",
      "good name": "x"
    },
    {
      "name": "Exclusive Plum",
      "hex": "#736f78",
      "good name": ""
    },
    {
      "name": "Exclusive Violet",
      "hex": "#b9adbb",
      "good name": ""
    },
    {
      "name": "Exclusively",
      "hex": "#6b515f",
      "good name": ""
    },
    {
      "name": "Exclusively Yours",
      "hex": "#f2aeb8",
      "good name": ""
    },
    {
      "name": "Executive Course",
      "hex": "#8f8a70",
      "good name": ""
    },
    {
      "name": "Existential Angst",
      "hex": "#0a0a0a",
      "good name": ""
    },
    {
      "name": "Exit Light",
      "hex": "#55bb33",
      "good name": "x"
    },
    {
      "name": "Exodus Fruit",
      "hex": "#6264dc",
      "good name": ""
    },
    {
      "name": "Exotic Bloom",
      "hex": "#ac6292",
      "good name": ""
    },
    {
      "name": "Exotic Blossom",
      "hex": "#fd9d43",
      "good name": ""
    },
    {
      "name": "Exotic Eggplant",
      "hex": "#705660",
      "good name": ""
    },
    {
      "name": "Exotic Escape",
      "hex": "#96d9df",
      "good name": "x"
    },
    {
      "name": "Exotic Evening",
      "hex": "#58516e",
      "good name": ""
    },
    {
      "name": "Exotic Flower",
      "hex": "#ffa24c",
      "good name": ""
    },
    {
      "name": "Exotic Flowers",
      "hex": "#833f51",
      "good name": ""
    },
    {
      "name": "Exotic Honey",
      "hex": "#c47f33",
      "good name": ""
    },
    {
      "name": "Exotic Incense",
      "hex": "#b86f73",
      "good name": ""
    },
    {
      "name": "Exotic Life",
      "hex": "#ae7543",
      "good name": ""
    },
    {
      "name": "Exotic Lilac",
      "hex": "#d198b5",
      "good name": "x"
    },
    {
      "name": "Exotic Liras",
      "hex": "#de0c62",
      "good name": ""
    },
    {
      "name": "Exotic Orange",
      "hex": "#f96531",
      "good name": ""
    },
    {
      "name": "Exotic Orchid",
      "hex": "#75566c",
      "good name": ""
    },
    {
      "name": "Exotic Palm",
      "hex": "#909969",
      "good name": ""
    },
    {
      "name": "Exotic Purple",
      "hex": "#6a5078",
      "good name": ""
    },
    {
      "name": "Exotic Violet",
      "hex": "#e1a0cf",
      "good name": ""
    },
    {
      "name": "Exotica",
      "hex": "#938586",
      "good name": ""
    },
    {
      "name": "Expanse",
      "hex": "#777e65",
      "good name": ""
    },
    {
      "name": "Expedition Khaki",
      "hex": "#dbbf90",
      "good name": ""
    },
    {
      "name": "Experience",
      "hex": "#64acb5",
      "good name": ""
    },
    {
      "name": "Exploding Star",
      "hex": "#fed83a",
      "good name": "x"
    },
    {
      "name": "Exploration Green",
      "hex": "#55a860",
      "good name": ""
    },
    {
      "name": "Explore Blue",
      "hex": "#30aabc",
      "good name": ""
    },
    {
      "name": "Explorer Blue",
      "hex": "#57a3b3",
      "good name": ""
    },
    {
      "name": "Explorer Khaki",
      "hex": "#b6ac95",
      "good name": ""
    },
    {
      "name": "Exploring Khaki",
      "hex": "#aa9a79",
      "good name": ""
    },
    {
      "name": "Explosive Purple",
      "hex": "#cc11bb",
      "good name": "x"
    },
    {
      "name": "Express Blue",
      "hex": "#395a73",
      "good name": ""
    },
    {
      "name": "Expressionism",
      "hex": "#39497b",
      "good name": ""
    },
    {
      "name": "Expressionism Green",
      "hex": "#52bc9a",
      "good name": ""
    },
    {
      "name": "Expressive Plum",
      "hex": "#695c62",
      "good name": ""
    },
    {
      "name": "Exquisite",
      "hex": "#c8a3bb",
      "good name": ""
    },
    {
      "name": "Exquisite Eggplant",
      "hex": "#330033",
      "good name": ""
    },
    {
      "name": "Exquisite Emerald",
      "hex": "#338860",
      "good name": ""
    },
    {
      "name": "Exquisite Turquoise",
      "hex": "#11ccbb",
      "good name": ""
    },
    {
      "name": "Extinct",
      "hex": "#9490b2",
      "good name": ""
    },
    {
      "name": "Extinct Volcano",
      "hex": "#4a4f5a",
      "good name": ""
    },
    {
      "name": "Extra Life",
      "hex": "#6ab417",
      "good name": "x"
    },
    {
      "name": "Extra Mile",
      "hex": "#91916d",
      "good name": ""
    },
    {
      "name": "Extra White",
      "hex": "#eeefea",
      "good name": ""
    },
    {
      "name": "Extraordinaire",
      "hex": "#bda6c5",
      "good name": ""
    },
    {
      "name": "Extravagance",
      "hex": "#4e4850",
      "good name": ""
    },
    {
      "name": "Extravehicular Activity",
      "hex": "#0011aa",
      "good name": ""
    },
    {
      "name": "Extraviolet",
      "hex": "#661188",
      "good name": "x"
    },
    {
      "name": "Extreme",
      "hex": "#536078",
      "good name": ""
    },
    {
      "name": "Extreme Lavender",
      "hex": "#dfc5d5",
      "good name": ""
    },
    {
      "name": "Extreme Yellow",
      "hex": "#ffb729",
      "good name": ""
    },
    {
      "name": "Exuberance",
      "hex": "#e86800",
      "good name": ""
    },
    {
      "name": "Exuberant Orange",
      "hex": "#f0622f",
      "good name": ""
    },
    {
      "name": "Exuberant Pink",
      "hex": "#b54d7f",
      "good name": ""
    },
    {
      "name": "Eye Blue",
      "hex": "#1e80c7",
      "good name": ""
    },
    {
      "name": "Eye Catching",
      "hex": "#ddb835",
      "good name": ""
    },
    {
      "name": "Eye Grey",
      "hex": "#607b7b",
      "good name": ""
    },
    {
      "name": "Eye Of Newt",
      "hex": "#ae3d3b",
      "good name": ""
    },
    {
      "name": "Eye of the Storm",
      "hex": "#d9e3d9",
      "good name": ""
    },
    {
      "name": "Eye Patch",
      "hex": "#232121",
      "good name": ""
    },
    {
      "name": "Eye Popping Cherry",
      "hex": "#bb0077",
      "good name": ""
    },
    {
      "name": "Eyeball",
      "hex": "#fffbf8",
      "good name": "x"
    },
    {
      "name": "Eyefull",
      "hex": "#8db6b7",
      "good name": ""
    },
    {
      "name": "Eyelash Camel",
      "hex": "#553300",
      "good name": ""
    },
    {
      "name": "Eyelash Viper",
      "hex": "#f4c54b",
      "good name": ""
    },
    {
      "name": "Eyelids",
      "hex": "#440000",
      "good name": ""
    },
    {
      "name": "Eyeshadow",
      "hex": "#d9d9ea",
      "good name": ""
    },
    {
      "name": "Eyeshadow Blue",
      "hex": "#6b94c5",
      "good name": ""
    },
    {
      "name": "Eyeshadow Turquoise",
      "hex": "#008980",
      "good name": ""
    },
    {
      "name": "Eyeshadow Viola",
      "hex": "#ada6c2",
      "good name": ""
    },
    {
      "name": "Eyre",
      "hex": "#8f9482",
      "good name": ""
    },
    {
      "name": "Fabric of Love",
      "hex": "#aa1177",
      "good name": "x"
    },
    {
      "name": "Fabric of Space",
      "hex": "#341758",
      "good name": "x"
    },
    {
      "name": "Fabulous Fantasy",
      "hex": "#ba90ad",
      "good name": ""
    },
    {
      "name": "Fabulous Fawn",
      "hex": "#e5c1a3",
      "good name": ""
    },
    {
      "name": "Fabulous Find",
      "hex": "#abe3c9",
      "good name": ""
    },
    {
      "name": "Fabulous Forties",
      "hex": "#ddcdab",
      "good name": ""
    },
    {
      "name": "Fabulous Frog",
      "hex": "#88cc00",
      "good name": ""
    },
    {
      "name": "Fabulous Fuchsia",
      "hex": "#ee1188",
      "good name": "x"
    },
    {
      "name": "Fabulous Grape",
      "hex": "#9083a5",
      "good name": ""
    },
    {
      "name": "Facemark",
      "hex": "#f7cf89",
      "good name": ""
    },
    {
      "name": "Fade to Black",
      "hex": "#676965",
      "good name": ""
    },
    {
      "name": "Faded Blue",
      "hex": "#658cbb",
      "good name": ""
    },
    {
      "name": "Faded Denim",
      "hex": "#798ea4",
      "good name": ""
    },
    {
      "name": "Faded Firebrick",
      "hex": "#e5d9dc",
      "good name": ""
    },
    {
      "name": "Faded Flaxflower",
      "hex": "#9eb4c0",
      "good name": ""
    },
    {
      "name": "Faded Forest",
      "hex": "#e3e2d7",
      "good name": ""
    },
    {
      "name": "Faded Fuchsia",
      "hex": "#ede2ee",
      "good name": ""
    },
    {
      "name": "Faded Green",
      "hex": "#7bb274",
      "good name": ""
    },
    {
      "name": "Faded Grey",
      "hex": "#eae8e4",
      "good name": ""
    },
    {
      "name": "Faded Jade",
      "hex": "#427977",
      "good name": ""
    },
    {
      "name": "Faded Jeans",
      "hex": "#5dbdcb",
      "good name": ""
    },
    {
      "name": "Faded Khaki",
      "hex": "#a5975b",
      "good name": ""
    },
    {
      "name": "Faded Light",
      "hex": "#f5e4de",
      "good name": ""
    },
    {
      "name": "Faded Orange",
      "hex": "#f0944d",
      "good name": ""
    },
    {
      "name": "Faded Pink",
      "hex": "#de9dac",
      "good name": ""
    },
    {
      "name": "Faded Poster",
      "hex": "#80dbeb",
      "good name": ""
    },
    {
      "name": "Faded Purple",
      "hex": "#916e99",
      "good name": ""
    },
    {
      "name": "Faded Red",
      "hex": "#d3494e",
      "good name": ""
    },
    {
      "name": "Faded Rose",
      "hex": "#bf6464",
      "good name": ""
    },
    {
      "name": "Faded Sea",
      "hex": "#8d9cae",
      "good name": ""
    },
    {
      "name": "Faded Shells",
      "hex": "#ebdcd7",
      "good name": ""
    },
    {
      "name": "Faded Violet",
      "hex": "#ddbedd",
      "good name": ""
    },
    {
      "name": "Faded Yellow",
      "hex": "#feff7f",
      "good name": ""
    },
    {
      "name": "Fading Ember",
      "hex": "#df691e",
      "good name": ""
    },
    {
      "name": "Fading Fog",
      "hex": "#e8e4e0",
      "good name": ""
    },
    {
      "name": "Fading Horizon",
      "hex": "#442266",
      "good name": "x"
    },
    {
      "name": "Fading Love",
      "hex": "#c973a2",
      "good name": "x"
    },
    {
      "name": "Fading Night",
      "hex": "#3377cc",
      "good name": "x"
    },
    {
      "name": "Fading Parchment",
      "hex": "#ece6dc",
      "good name": ""
    },
    {
      "name": "Fading Rose",
      "hex": "#fad0d1",
      "good name": ""
    },
    {
      "name": "Fading Sunset",
      "hex": "#b3b3c2",
      "good name": ""
    },
    {
      "name": "Fahrenheit",
      "hex": "#fbd2bb",
      "good name": ""
    },
    {
      "name": "Faience",
      "hex": "#2a6a8b",
      "good name": ""
    },
    {
      "name": "Faience Green",
      "hex": "#81762b",
      "good name": ""
    },
    {
      "name": "Fail Whale",
      "hex": "#99ccee",
      "good name": "x"
    },
    {
      "name": "Faint Clover",
      "hex": "#b2eed3",
      "good name": ""
    },
    {
      "name": "Faint Coral",
      "hex": "#eeded5",
      "good name": ""
    },
    {
      "name": "Faint Fawn",
      "hex": "#e2c59c",
      "good name": ""
    },
    {
      "name": "Faint Fern",
      "hex": "#dadbe0",
      "good name": ""
    },
    {
      "name": "Faint Fuchsia",
      "hex": "#e6deea",
      "good name": ""
    },
    {
      "name": "Faint Gold",
      "hex": "#b59410",
      "good name": "x"
    },
    {
      "name": "Faint Green",
      "hex": "#a58b2c",
      "good name": ""
    },
    {
      "name": "Faint Peach",
      "hex": "#f5ddc5",
      "good name": ""
    },
    {
      "name": "Fainting Light",
      "hex": "#1f2847",
      "good name": ""
    },
    {
      "name": "Fair Aqua",
      "hex": "#b8e2dc",
      "good name": ""
    },
    {
      "name": "Fair Green",
      "hex": "#92af88",
      "good name": ""
    },
    {
      "name": "Fair Ivory",
      "hex": "#fce7cf",
      "good name": ""
    },
    {
      "name": "Fair Maiden",
      "hex": "#f1e7dc",
      "good name": ""
    },
    {
      "name": "Fair Orchid",
      "hex": "#c0aac0",
      "good name": ""
    },
    {
      "name": "Fair Pink",
      "hex": "#f3e5dc",
      "good name": ""
    },
    {
      "name": "Fair Spring",
      "hex": "#93977f",
      "good name": ""
    },
    {
      "name": "Fair Winds",
      "hex": "#f3e6d6",
      "good name": ""
    },
    {
      "name": "Fairbank Green",
      "hex": "#9d9c7e",
      "good name": ""
    },
    {
      "name": "Fairest Jade",
      "hex": "#d8e3d7",
      "good name": ""
    },
    {
      "name": "Fairfax Brown",
      "hex": "#61463a",
      "good name": ""
    },
    {
      "name": "Fairstar",
      "hex": "#6ba5a9",
      "good name": ""
    },
    {
      "name": "Fairview Taupe",
      "hex": "#dac7c4",
      "good name": ""
    },
    {
      "name": "Fairway",
      "hex": "#477050",
      "good name": ""
    },
    {
      "name": "Fairway Green",
      "hex": "#26623f",
      "good name": ""
    },
    {
      "name": "Fairway Mist",
      "hex": "#cde8b6",
      "good name": ""
    },
    {
      "name": "Fairy Bubblegum Cloud",
      "hex": "#ffebfe",
      "good name": ""
    },
    {
      "name": "Fairy Dust",
      "hex": "#ffe8f4",
      "good name": "x"
    },
    {
      "name": "Fairy Pink",
      "hex": "#eed3cb",
      "good name": ""
    },
    {
      "name": "Fairy Princess",
      "hex": "#f6dbdd",
      "good name": ""
    },
    {
      "name": "Fairy Salt",
      "hex": "#ffe0f5",
      "good name": ""
    },
    {
      "name": "Fairy Sparkles",
      "hex": "#b0e0f7",
      "good name": ""
    },
    {
      "name": "Fairy Tail",
      "hex": "#ecdde5",
      "good name": ""
    },
    {
      "name": "Fairy Tale",
      "hex": "#f2c1d1",
      "good name": "x"
    },
    {
      "name": "Fairy Wand",
      "hex": "#aea4c1",
      "good name": ""
    },
    {
      "name": "Fairy White",
      "hex": "#ded4d8",
      "good name": ""
    },
    {
      "name": "Fairy Wings",
      "hex": "#ffebf2",
      "good name": ""
    },
    {
      "name": "Fairy Wren",
      "hex": "#9479af",
      "good name": ""
    },
    {
      "name": "Fairy-Nuff",
      "hex": "#e2d7da",
      "good name": ""
    },
    {
      "name": "Fairytale",
      "hex": "#e5dbeb",
      "good name": ""
    },
    {
      "name": "Fairytale Blue",
      "hex": "#3e9abd",
      "good name": ""
    },
    {
      "name": "Fairytale Dream",
      "hex": "#facfcc",
      "good name": ""
    },
    {
      "name": "Faith",
      "hex": "#d5ebac",
      "good name": ""
    },
    {
      "name": "Fake Crush",
      "hex": "#c88088",
      "good name": ""
    },
    {
      "name": "Fake Jade",
      "hex": "#13eac9",
      "good name": "x"
    },
    {
      "name": "Fake Love",
      "hex": "#cc77ee",
      "good name": "x"
    },
    {
      "name": "Falafel",
      "hex": "#aa7711",
      "good name": "x"
    },
    {
      "name": "Falcon",
      "hex": "#6e5a5b",
      "good name": ""
    },
    {
      "name": "Falcon Grey",
      "hex": "#898887",
      "good name": ""
    },
    {
      "name": "Falcon Turquoise",
      "hex": "#007062",
      "good name": ""
    },
    {
      "name": "Fall Canyon",
      "hex": "#c69896",
      "good name": ""
    },
    {
      "name": "Fall Chill",
      "hex": "#e1dddb",
      "good name": ""
    },
    {
      "name": "Fall Foliage",
      "hex": "#c28359",
      "good name": ""
    },
    {
      "name": "Fall Gold",
      "hex": "#ffbc35",
      "good name": ""
    },
    {
      "name": "Fall Green",
      "hex": "#ecfcbd",
      "good name": ""
    },
    {
      "name": "Fall Harvest",
      "hex": "#a78a59",
      "good name": ""
    },
    {
      "name": "Fall Heliotrope",
      "hex": "#a49491",
      "good name": ""
    },
    {
      "name": "Fall in Season",
      "hex": "#7f6144",
      "good name": ""
    },
    {
      "name": "Fall Leaf",
      "hex": "#e5b7a5",
      "good name": ""
    },
    {
      "name": "Fall Leaves",
      "hex": "#c17a3c",
      "good name": ""
    },
    {
      "name": "Fall Mood",
      "hex": "#c2ac9b",
      "good name": ""
    },
    {
      "name": "Fall Straw",
      "hex": "#fee3c5",
      "good name": ""
    },
    {
      "name": "Fallen Blossoms",
      "hex": "#edb2c4",
      "good name": "x"
    },
    {
      "name": "Fallen Leaves",
      "hex": "#917347",
      "good name": ""
    },
    {
      "name": "Fallen Rock",
      "hex": "#807669",
      "good name": ""
    },
    {
      "name": "Falling Leaves",
      "hex": "#a55a3b",
      "good name": ""
    },
    {
      "name": "Falling Snow",
      "hex": "#f0f1e7",
      "good name": ""
    },
    {
      "name": "Falling Star",
      "hex": "#cad5c8",
      "good name": ""
    },
    {
      "name": "Falling Tears",
      "hex": "#c2d7df",
      "good name": ""
    },
    {
      "name": "Fallout Green",
      "hex": "#b6c121",
      "good name": ""
    },
    {
      "name": "Fallow",
      "hex": "#c19a51",
      "good name": ""
    },
    {
      "name": "Fallow Deer",
      "hex": "#9f8d57",
      "good name": ""
    },
    {
      "name": "False Cypress",
      "hex": "#939b88",
      "good name": ""
    },
    {
      "name": "False Morel",
      "hex": "#784d4c",
      "good name": ""
    },
    {
      "name": "False Puce",
      "hex": "#a57e52",
      "good name": ""
    },
    {
      "name": "Falu Red",
      "hex": "#801818",
      "good name": ""
    },
    {
      "name": "Fame Orange",
      "hex": "#db9c7b",
      "good name": ""
    },
    {
      "name": "Familiar Beige",
      "hex": "#cab3a0",
      "good name": ""
    },
    {
      "name": "Family Tree",
      "hex": "#a7b191",
      "good name": ""
    },
    {
      "name": "Fanatic Fuchsia",
      "hex": "#ee1199",
      "good name": "x"
    },
    {
      "name": "Fancy Flamingo",
      "hex": "#ffb1b0",
      "good name": ""
    },
    {
      "name": "Fancy Flirt",
      "hex": "#b4b780",
      "good name": ""
    },
    {
      "name": "Fancy Fuchsia",
      "hex": "#ff0088",
      "good name": "x"
    },
    {
      "name": "Fancy Pants",
      "hex": "#f3dae1",
      "good name": ""
    },
    {
      "name": "Fancy Pink",
      "hex": "#f6e9e8",
      "good name": ""
    },
    {
      "name": "Fandangle",
      "hex": "#e4de65",
      "good name": ""
    },
    {
      "name": "Fandango",
      "hex": "#b53389",
      "good name": "x"
    },
    {
      "name": "Fandango Pink",
      "hex": "#e04f80",
      "good name": ""
    },
    {
      "name": "Fanfare",
      "hex": "#006d70",
      "good name": ""
    },
    {
      "name": "Fangtooth Fish",
      "hex": "#bbaa97",
      "good name": ""
    },
    {
      "name": "Fanlight",
      "hex": "#f2eeaf",
      "good name": ""
    },
    {
      "name": "Fantan",
      "hex": "#9f7e53",
      "good name": ""
    },
    {
      "name": "Fantasia",
      "hex": "#73788b",
      "good name": ""
    },
    {
      "name": "Fantastic Pink",
      "hex": "#e6c8c9",
      "good name": ""
    },
    {
      "name": "Fantasy",
      "hex": "#f2e6dd",
      "good name": ""
    },
    {
      "name": "Fantasy Console Sky",
      "hex": "#29adff",
      "good name": ""
    },
    {
      "name": "Fantasy Grey",
      "hex": "#8591a2",
      "good name": ""
    },
    {
      "name": "Fantasy Romance",
      "hex": "#e83a72",
      "good name": "x"
    },
    {
      "name": "Far Away Grey",
      "hex": "#2d383a",
      "good name": ""
    },
    {
      "name": "Faraway Blue",
      "hex": "#e5eeee",
      "good name": ""
    },
    {
      "name": "Faraway Sky",
      "hex": "#8980c1",
      "good name": ""
    },
    {
      "name": "Farfalle Noodle",
      "hex": "#e5d4c9",
      "good name": ""
    },
    {
      "name": "Farina",
      "hex": "#dfc38d",
      "good name": ""
    },
    {
      "name": "Farm Fresh",
      "hex": "#8e9b88",
      "good name": ""
    },
    {
      "name": "Farm House",
      "hex": "#efe8d7",
      "good name": ""
    },
    {
      "name": "Farm Straw",
      "hex": "#d5b54c",
      "good name": ""
    },
    {
      "name": "Farmer's Market",
      "hex": "#8f917c",
      "good name": "x"
    },
    {
      "name": "Farmers Green",
      "hex": "#96a69f",
      "good name": ""
    },
    {
      "name": "Farmers Milk",
      "hex": "#eee3d6",
      "good name": ""
    },
    {
      "name": "Farmhouse Ochre",
      "hex": "#bd8339",
      "good name": ""
    },
    {
      "name": "Farmhouse Red",
      "hex": "#a34b41",
      "good name": ""
    },
    {
      "name": "Farmyard",
      "hex": "#a6917d",
      "good name": ""
    },
    {
      "name": "Farrago",
      "hex": "#456f6e",
      "good name": ""
    },
    {
      "name": "Farro",
      "hex": "#c1a485",
      "good name": ""
    },
    {
      "name": "Farsighted",
      "hex": "#e5e3ef",
      "good name": ""
    },
    {
      "name": "Fashion Blue",
      "hex": "#006b64",
      "good name": ""
    },
    {
      "name": "Fashion Fuchsia",
      "hex": "#f400a1",
      "good name": ""
    },
    {
      "name": "Fashion Green",
      "hex": "#b3d26d",
      "good name": ""
    },
    {
      "name": "Fashion Grey",
      "hex": "#a29c94",
      "good name": ""
    },
    {
      "name": "Fashion Mauve",
      "hex": "#b5a8a8",
      "good name": ""
    },
    {
      "name": "Fashion Week",
      "hex": "#998988",
      "good name": ""
    },
    {
      "name": "Fashion Yellow",
      "hex": "#edc537",
      "good name": ""
    },
    {
      "name": "Fashionable Grey",
      "hex": "#bdb8b8",
      "good name": ""
    },
    {
      "name": "Fashionably Plum",
      "hex": "#b28ca9",
      "good name": ""
    },
    {
      "name": "Fashionista",
      "hex": "#66616f",
      "good name": ""
    },
    {
      "name": "Fast as the Wind",
      "hex": "#c7cbc8",
      "good name": ""
    },
    {
      "name": "Fast Velvet",
      "hex": "#8b94c7",
      "good name": ""
    },
    {
      "name": "Fat Gold",
      "hex": "#e6bc00",
      "good name": "x"
    },
    {
      "name": "Fat Tuesday",
      "hex": "#352235",
      "good name": ""
    },
    {
      "name": "Fatal Fields",
      "hex": "#008822",
      "good name": ""
    },
    {
      "name": "Fatal Fury",
      "hex": "#da321c",
      "good name": "x"
    },
    {
      "name": "Fatback",
      "hex": "#fff7ed",
      "good name": "x"
    },
    {
      "name": "Fate",
      "hex": "#6ba0bf",
      "good name": ""
    },
    {
      "name": "Fatty Fuchsia",
      "hex": "#ee0077",
      "good name": "x"
    },
    {
      "name": "Favored One",
      "hex": "#fae6cc",
      "good name": ""
    },
    {
      "name": "Favorite Fudge",
      "hex": "#877252",
      "good name": ""
    },
    {
      "name": "Favorite Jeans",
      "hex": "#8aa3b1",
      "good name": ""
    },
    {
      "name": "Favorite Lavender",
      "hex": "#d3a5d6",
      "good name": ""
    },
    {
      "name": "Favorite Tan",
      "hex": "#c1ae91",
      "good name": ""
    },
    {
      "name": "Favourite Lady",
      "hex": "#e3c5d6",
      "good name": ""
    },
    {
      "name": "Fawn",
      "hex": "#cfaf7b",
      "good name": "x"
    },
    {
      "name": "Fawn Brindle",
      "hex": "#a7a094",
      "good name": ""
    },
    {
      "name": "Fawn Brown",
      "hex": "#71452a",
      "good name": ""
    },
    {
      "name": "Feasty Fuchsia",
      "hex": "#ee0088",
      "good name": "x"
    },
    {
      "name": "Feather Boa",
      "hex": "#f1c9cd",
      "good name": ""
    },
    {
      "name": "Feather Falls",
      "hex": "#606972",
      "good name": ""
    },
    {
      "name": "Feather Fern",
      "hex": "#d5dcd0",
      "good name": ""
    },
    {
      "name": "Feather Gold",
      "hex": "#edd382",
      "good name": ""
    },
    {
      "name": "Feather Green",
      "hex": "#a3d0b6",
      "good name": ""
    },
    {
      "name": "Feather Grey",
      "hex": "#b8ad9e",
      "good name": ""
    },
    {
      "name": "Feather Plume",
      "hex": "#ffdcb2",
      "good name": ""
    },
    {
      "name": "Feather Soft Blue",
      "hex": "#a2aebf",
      "good name": ""
    },
    {
      "name": "Feather Stone",
      "hex": "#e3ded2",
      "good name": ""
    },
    {
      "name": "Feather White",
      "hex": "#e7eae5",
      "good name": ""
    },
    {
      "name": "Featherbed",
      "hex": "#afcbe5",
      "good name": "x"
    },
    {
      "name": "Featherstone",
      "hex": "#cdc7bb",
      "good name": ""
    },
    {
      "name": "Feathery Blue",
      "hex": "#abc2c7",
      "good name": ""
    },
    {
      "name": "Feathery Lilac",
      "hex": "#ece7ed",
      "good name": ""
    },
    {
      "name": "February Frost",
      "hex": "#e0dee3",
      "good name": ""
    },
    {
      "name": "Federal Blue",
      "hex": "#43628b",
      "good name": ""
    },
    {
      "name": "Federal Fund",
      "hex": "#30594b",
      "good name": ""
    },
    {
      "name": "Federation Brown",
      "hex": "#634041",
      "good name": ""
    },
    {
      "name": "Fedora",
      "hex": "#625665",
      "good name": "x"
    },
    {
      "name": "Fēi Hóng Scarlet",
      "hex": "#fe420f",
      "good name": ""
    },
    {
      "name": "Feijoa",
      "hex": "#a5d785",
      "good name": "x"
    },
    {
      "name": "Feijoa Flower",
      "hex": "#edf2c3",
      "good name": ""
    },
    {
      "name": "Feldgrau",
      "hex": "#4d5d53",
      "good name": ""
    },
    {
      "name": "Feldspar",
      "hex": "#d19275",
      "good name": ""
    },
    {
      "name": "Feldspar Grey",
      "hex": "#bca885",
      "good name": ""
    },
    {
      "name": "Feldspar Silver",
      "hex": "#a0ada9",
      "good name": ""
    },
    {
      "name": "Felicia",
      "hex": "#917292",
      "good name": ""
    },
    {
      "name": "Felicity",
      "hex": "#e5e4df",
      "good name": ""
    },
    {
      "name": "Felix",
      "hex": "#00608f",
      "good name": ""
    },
    {
      "name": "Felt",
      "hex": "#247345",
      "good name": ""
    },
    {
      "name": "Felt Green",
      "hex": "#6fc391",
      "good name": ""
    },
    {
      "name": "Felted Wool",
      "hex": "#979083",
      "good name": ""
    },
    {
      "name": "Felwood Leaves",
      "hex": "#2bc51b",
      "good name": ""
    },
    {
      "name": "Feminin Nightshade",
      "hex": "#4f4352",
      "good name": ""
    },
    {
      "name": "Feminine Fancy",
      "hex": "#c4a8cf",
      "good name": ""
    },
    {
      "name": "Femininity",
      "hex": "#c7c2ce",
      "good name": ""
    },
    {
      "name": "Feminism",
      "hex": "#9d5783",
      "good name": "x"
    },
    {
      "name": "Femme Fatale",
      "hex": "#948593",
      "good name": "x"
    },
    {
      "name": "Fěn Hóng Pink",
      "hex": "#ff6cb5",
      "good name": ""
    },
    {
      "name": "Fence Green",
      "hex": "#09332c",
      "good name": ""
    },
    {
      "name": "Feng Shui",
      "hex": "#d7d9c2",
      "good name": ""
    },
    {
      "name": "Fenland",
      "hex": "#ac9d83",
      "good name": ""
    },
    {
      "name": "Fennec Fox",
      "hex": "#dad7c8",
      "good name": "x"
    },
    {
      "name": "Fennel Bulb",
      "hex": "#ddeebb",
      "good name": ""
    },
    {
      "name": "Fennel Fiasco",
      "hex": "#00aa44",
      "good name": "x"
    },
    {
      "name": "Fennel Fiesta",
      "hex": "#00bb77",
      "good name": "x"
    },
    {
      "name": "Fennel Flower",
      "hex": "#77aaff",
      "good name": "x"
    },
    {
      "name": "Fennel Seed",
      "hex": "#998456",
      "good name": ""
    },
    {
      "name": "Fennel Stem",
      "hex": "#b1b6a3",
      "good name": ""
    },
    {
      "name": "Fennel Tea",
      "hex": "#d2f4dd",
      "good name": ""
    },
    {
      "name": "Fennelly",
      "hex": "#9a9e80",
      "good name": ""
    },
    {
      "name": "Fenrisian Grey",
      "hex": "#cedee7",
      "good name": ""
    },
    {
      "name": "Fenugreek",
      "hex": "#c0916c",
      "good name": ""
    },
    {
      "name": "Feralas Lime",
      "hex": "#8de07c",
      "good name": ""
    },
    {
      "name": "Fern",
      "hex": "#548d44",
      "good name": "x"
    },
    {
      "name": "Fern Canopy",
      "hex": "#758a5f",
      "good name": ""
    },
    {
      "name": "Fern Flower",
      "hex": "#576a7d",
      "good name": ""
    },
    {
      "name": "Fern Frond",
      "hex": "#657220",
      "good name": ""
    },
    {
      "name": "Fern Green",
      "hex": "#008c45",
      "good name": ""
    },
    {
      "name": "Fern Grove",
      "hex": "#837b53",
      "good name": ""
    },
    {
      "name": "Fern Gully",
      "hex": "#595646",
      "good name": ""
    },
    {
      "name": "Fern Leaf",
      "hex": "#99a787",
      "good name": ""
    },
    {
      "name": "Fern Shade",
      "hex": "#797447",
      "good name": ""
    },
    {
      "name": "Ferntastic",
      "hex": "#71ab62",
      "good name": "x"
    },
    {
      "name": "Ferocious Flamingo",
      "hex": "#ee00cc",
      "good name": "x"
    },
    {
      "name": "Ferocious Fuchsia",
      "hex": "#aa00cc",
      "good name": "x"
    },
    {
      "name": "Ferra",
      "hex": "#876a68",
      "good name": ""
    },
    {
      "name": "Ferrari Red",
      "hex": "#ff2800",
      "good name": ""
    },
    {
      "name": "Ferris Wheel",
      "hex": "#ad7d76",
      "good name": ""
    },
    {
      "name": "Ferrous",
      "hex": "#cc926c",
      "good name": ""
    },
    {
      "name": "Ferry",
      "hex": "#383e44",
      "good name": ""
    },
    {
      "name": "Fertile Green",
      "hex": "#8b8757",
      "good name": ""
    },
    {
      "name": "Fertility Green",
      "hex": "#66fc00",
      "good name": "x"
    },
    {
      "name": "Fervent Brass",
      "hex": "#bc9042",
      "good name": ""
    },
    {
      "name": "Fervent Green",
      "hex": "#469f4e",
      "good name": ""
    },
    {
      "name": "Festering Brown",
      "hex": "#cb8e00",
      "good name": ""
    },
    {
      "name": "Festival",
      "hex": "#eacc4a",
      "good name": ""
    },
    {
      "name": "Festival De Verano",
      "hex": "#b5e1db",
      "good name": ""
    },
    {
      "name": "Festival Fuchsia",
      "hex": "#9e2c6a",
      "good name": ""
    },
    {
      "name": "Festival Green",
      "hex": "#6ea43c",
      "good name": ""
    },
    {
      "name": "Festive Fennec",
      "hex": "#ff5566",
      "good name": ""
    },
    {
      "name": "Festive Ferret",
      "hex": "#dfdfe5",
      "good name": "x"
    },
    {
      "name": "Festive Green",
      "hex": "#008c6c",
      "good name": ""
    },
    {
      "name": "Festoon Aqua",
      "hex": "#a0bbb8",
      "good name": ""
    },
    {
      "name": "Feta",
      "hex": "#dbe0d0",
      "good name": "x"
    },
    {
      "name": "Fever Dream",
      "hex": "#dd5577",
      "good name": "x"
    },
    {
      "name": "Feverish",
      "hex": "#dd6677",
      "good name": "x"
    },
    {
      "name": "Feverish Pink",
      "hex": "#cb3e50",
      "good name": ""
    },
    {
      "name": "Fibonacci Blue",
      "hex": "#112358",
      "good name": "x"
    },
    {
      "name": "Fibre Moss",
      "hex": "#bec0af",
      "good name": ""
    },
    {
      "name": "Ficus",
      "hex": "#3b593a",
      "good name": "x"
    },
    {
      "name": "Ficus Elastica",
      "hex": "#006131",
      "good name": "x"
    },
    {
      "name": "Fiddle Leaf",
      "hex": "#5f674b",
      "good name": ""
    },
    {
      "name": "Fiddle-Leaf Fig",
      "hex": "#a6c875",
      "good name": "x"
    },
    {
      "name": "Fiddlehead Fern",
      "hex": "#c8c387",
      "good name": ""
    },
    {
      "name": "Fiddler",
      "hex": "#5a9589",
      "good name": ""
    },
    {
      "name": "Fiddlesticks",
      "hex": "#bb9fb1",
      "good name": ""
    },
    {
      "name": "Field Blue",
      "hex": "#4477aa",
      "good name": ""
    },
    {
      "name": "Field Day",
      "hex": "#c5e6a4",
      "good name": ""
    },
    {
      "name": "Field Drab",
      "hex": "#6c541e",
      "good name": ""
    },
    {
      "name": "Field Green",
      "hex": "#60b922",
      "good name": ""
    },
    {
      "name": "Field Khaki",
      "hex": "#b1a891",
      "good name": ""
    },
    {
      "name": "Field Maple",
      "hex": "#80884e",
      "good name": ""
    },
    {
      "name": "Field of Wheat",
      "hex": "#deb699",
      "good name": ""
    },
    {
      "name": "Field Poppy",
      "hex": "#d86f3c",
      "good name": ""
    },
    {
      "name": "Fieldstone",
      "hex": "#807e77",
      "good name": ""
    },
    {
      "name": "Fierce Mantis",
      "hex": "#7fc15c",
      "good name": ""
    },
    {
      "name": "Fiery Brown",
      "hex": "#5d3831",
      "good name": ""
    },
    {
      "name": "Fiery Coral",
      "hex": "#e26058",
      "good name": ""
    },
    {
      "name": "Fiery Flamingo",
      "hex": "#f96d7b",
      "good name": ""
    },
    {
      "name": "Fiery Fuchsia",
      "hex": "#b7386e",
      "good name": ""
    },
    {
      "name": "Fiery Glow",
      "hex": "#f0531c",
      "good name": "x"
    },
    {
      "name": "Fiery Orange",
      "hex": "#b1592f",
      "good name": ""
    },
    {
      "name": "Fiery Red",
      "hex": "#d01c1f",
      "good name": ""
    },
    {
      "name": "Fiery Rose",
      "hex": "#ff5470",
      "good name": ""
    },
    {
      "name": "Fiery Salmon",
      "hex": "#f76564",
      "good name": ""
    },
    {
      "name": "Fiesta",
      "hex": "#edd8d2",
      "good name": "x"
    },
    {
      "name": "Fiesta Blue",
      "hex": "#6fc0b1",
      "good name": ""
    },
    {
      "name": "Fiesta Pink",
      "hex": "#d47194",
      "good name": ""
    },
    {
      "name": "Fiesta Rojo",
      "hex": "#b67c80",
      "good name": ""
    },
    {
      "name": "Fife",
      "hex": "#a9a5c2",
      "good name": ""
    },
    {
      "name": "Fifth Olive-Nue",
      "hex": "#8e8779",
      "good name": ""
    },
    {
      "name": "Fiftieth Shade of Grey",
      "hex": "#505050",
      "good name": ""
    },
    {
      "name": "Fig",
      "hex": "#532d3b",
      "good name": ""
    },
    {
      "name": "Fig Balsamic",
      "hex": "#550022",
      "good name": ""
    },
    {
      "name": "Fig Branches",
      "hex": "#7a634d",
      "good name": ""
    },
    {
      "name": "Fig Fruit Mauve",
      "hex": "#a98691",
      "good name": ""
    },
    {
      "name": "Fig Leaf",
      "hex": "#556b2f",
      "good name": ""
    },
    {
      "name": "Fig Mustard Yellow",
      "hex": "#bb8610",
      "good name": ""
    },
    {
      "name": "Fig Preserves",
      "hex": "#a7989e",
      "good name": ""
    },
    {
      "name": "Fig Tree",
      "hex": "#605f4b",
      "good name": ""
    },
    {
      "name": "Fight the Sunrise",
      "hex": "#ff99aa",
      "good name": ""
    },
    {
      "name": "Figue",
      "hex": "#9469a2",
      "good name": ""
    },
    {
      "name": "Figue Pulp",
      "hex": "#962c54",
      "good name": ""
    },
    {
      "name": "Figure Stone",
      "hex": "#eedac3",
      "good name": ""
    },
    {
      "name": "Figurine",
      "hex": "#e4d5c0",
      "good name": ""
    },
    {
      "name": "Fiji",
      "hex": "#00aaac",
      "good name": ""
    },
    {
      "name": "Fiji Coral",
      "hex": "#6b5f68",
      "good name": ""
    },
    {
      "name": "Fiji Green",
      "hex": "#636f22",
      "good name": ""
    },
    {
      "name": "Fiji Palm",
      "hex": "#528d3c",
      "good name": ""
    },
    {
      "name": "Fiji Sands",
      "hex": "#d8caa9",
      "good name": "x"
    },
    {
      "name": "Filigree",
      "hex": "#dfe7e8",
      "good name": ""
    },
    {
      "name": "Filigree Green",
      "hex": "#a5af89",
      "good name": ""
    },
    {
      "name": "Film Fest",
      "hex": "#93877c",
      "good name": ""
    },
    {
      "name": "Film Noir",
      "hex": "#473933",
      "good name": "x"
    },
    {
      "name": "Filmy Green",
      "hex": "#d1d3c7",
      "good name": ""
    },
    {
      "name": "Filtered Forest",
      "hex": "#b7e1d2",
      "good name": ""
    },
    {
      "name": "Filtered Light",
      "hex": "#b1b2c4",
      "good name": ""
    },
    {
      "name": "Filtered Moon",
      "hex": "#ecca9a",
      "good name": ""
    },
    {
      "name": "Filtered Rays",
      "hex": "#d0b064",
      "good name": ""
    },
    {
      "name": "Filthy Brown",
      "hex": "#e8aa08",
      "good name": ""
    },
    {
      "name": "Final Straw",
      "hex": "#d0bf9e",
      "good name": ""
    },
    {
      "name": "Finch",
      "hex": "#75785a",
      "good name": ""
    },
    {
      "name": "Fine Alabaster",
      "hex": "#ecd3cb",
      "good name": ""
    },
    {
      "name": "Fine Blue",
      "hex": "#b6e1e1",
      "good name": ""
    },
    {
      "name": "Fine Burgundy",
      "hex": "#815158",
      "good name": ""
    },
    {
      "name": "Fine Grain",
      "hex": "#d8cfc1",
      "good name": ""
    },
    {
      "name": "Fine Greige",
      "hex": "#b5a998",
      "good name": ""
    },
    {
      "name": "Fine Linen",
      "hex": "#faf5c3",
      "good name": ""
    },
    {
      "name": "Fine Pine",
      "hex": "#008800",
      "good name": "x"
    },
    {
      "name": "Fine Porcelain",
      "hex": "#faf0e1",
      "good name": ""
    },
    {
      "name": "Fine Purple",
      "hex": "#5e548d",
      "good name": ""
    },
    {
      "name": "Fine Sand",
      "hex": "#f1d5ae",
      "good name": ""
    },
    {
      "name": "Fine White",
      "hex": "#faede1",
      "good name": ""
    },
    {
      "name": "Fine White Sand",
      "hex": "#e4d4c0",
      "good name": ""
    },
    {
      "name": "Fine Wine",
      "hex": "#744e5b",
      "good name": ""
    },
    {
      "name": "Finesse",
      "hex": "#96a8c8",
      "good name": ""
    },
    {
      "name": "Finest Blush",
      "hex": "#dd8888",
      "good name": ""
    },
    {
      "name": "Finest Silk",
      "hex": "#f1e5d7",
      "good name": ""
    },
    {
      "name": "Finger Banana",
      "hex": "#e1c12f",
      "good name": "x"
    },
    {
      "name": "Fingerpaint",
      "hex": "#8a7e61",
      "good name": ""
    },
    {
      "name": "Fingerprint",
      "hex": "#555356",
      "good name": ""
    },
    {
      "name": "Finishing Touch",
      "hex": "#cbbfb3",
      "good name": ""
    },
    {
      "name": "Finlandia",
      "hex": "#61755b",
      "good name": ""
    },
    {
      "name": "Finn",
      "hex": "#694554",
      "good name": ""
    },
    {
      "name": "Finnish Fiord",
      "hex": "#5db0be",
      "good name": "x"
    },
    {
      "name": "Fioletowy Beige",
      "hex": "#fffce3",
      "good name": ""
    },
    {
      "name": "Fioletowy Purple",
      "hex": "#fc44a3",
      "good name": ""
    },
    {
      "name": "Fiord",
      "hex": "#4b5a62",
      "good name": "x"
    },
    {
      "name": "Fiorito",
      "hex": "#bfbfaf",
      "good name": ""
    },
    {
      "name": "Fir",
      "hex": "#3a725f",
      "good name": ""
    },
    {
      "name": "Fir Blue",
      "hex": "#46807b",
      "good name": ""
    },
    {
      "name": "Fir Green",
      "hex": "#67592a",
      "good name": ""
    },
    {
      "name": "Fir Spruce Green",
      "hex": "#6d7969",
      "good name": ""
    },
    {
      "name": "Fire",
      "hex": "#8f3f2a",
      "good name": "x"
    },
    {
      "name": "Fire Ant",
      "hex": "#be6400",
      "good name": "x"
    },
    {
      "name": "Fire Axe Red",
      "hex": "#ce1620",
      "good name": ""
    },
    {
      "name": "Fire Bolt",
      "hex": "#cc4411",
      "good name": "x"
    },
    {
      "name": "Fire Bush",
      "hex": "#e09842",
      "good name": ""
    },
    {
      "name": "Fire Chalk",
      "hex": "#d2806c",
      "good name": ""
    },
    {
      "name": "Fire Chi",
      "hex": "#92353a",
      "good name": ""
    },
    {
      "name": "Fire Coral",
      "hex": "#e3b46f",
      "good name": ""
    },
    {
      "name": "Fire Dance",
      "hex": "#e3d590",
      "good name": ""
    },
    {
      "name": "Fire Dragon Bright",
      "hex": "#f97306",
      "good name": ""
    },
    {
      "name": "Fire Dust",
      "hex": "#b98d68",
      "good name": ""
    },
    {
      "name": "Fire Engine",
      "hex": "#fe0002",
      "good name": "x"
    },
    {
      "name": "Fire Flower",
      "hex": "#f68f37",
      "good name": ""
    },
    {
      "name": "Fire Hydrant",
      "hex": "#ff0d00",
      "good name": "x"
    },
    {
      "name": "Fire Island",
      "hex": "#d95137",
      "good name": ""
    },
    {
      "name": "Fire Lord",
      "hex": "#bb7733",
      "good name": ""
    },
    {
      "name": "Fire Mist",
      "hex": "#fbd9c4",
      "good name": ""
    },
    {
      "name": "Fire Opal",
      "hex": "#fd3c06",
      "good name": ""
    },
    {
      "name": "Fire Orange",
      "hex": "#ff8e57",
      "good name": ""
    },
    {
      "name": "Fire Roasted",
      "hex": "#79483e",
      "good name": ""
    },
    {
      "name": "Fire Yellow",
      "hex": "#ffb70b",
      "good name": ""
    },
    {
      "name": "Fireball",
      "hex": "#ce2029",
      "good name": "x"
    },
    {
      "name": "Firebird Tail Lights",
      "hex": "#dd5522",
      "good name": ""
    },
    {
      "name": "Firebrick",
      "hex": "#b22222",
      "good name": ""
    },
    {
      "name": "Firebug",
      "hex": "#cd5c51",
      "good name": "x"
    },
    {
      "name": "Firecracker",
      "hex": "#f36944",
      "good name": "x"
    },
    {
      "name": "Firecracker Salmon",
      "hex": "#f36363",
      "good name": ""
    },
    {
      "name": "Fired Brick",
      "hex": "#6a2e2a",
      "good name": ""
    },
    {
      "name": "Fired Clay",
      "hex": "#884444",
      "good name": ""
    },
    {
      "name": "Fired Up",
      "hex": "#d37a38",
      "good name": ""
    },
    {
      "name": "Fireflies",
      "hex": "#f6daa7",
      "good name": ""
    },
    {
      "name": "Firefly",
      "hex": "#314643",
      "good name": ""
    },
    {
      "name": "Firefly Glow",
      "hex": "#fff3a1",
      "good name": "x"
    },
    {
      "name": "Fireglow",
      "hex": "#d65e40",
      "good name": ""
    },
    {
      "name": "Firelight",
      "hex": "#f9d97b",
      "good name": ""
    },
    {
      "name": "Fireplace Glow",
      "hex": "#d08b73",
      "good name": ""
    },
    {
      "name": "Fireplace Kitten",
      "hex": "#c5c9c7",
      "good name": ""
    },
    {
      "name": "Fireplace Mantel",
      "hex": "#847c70",
      "good name": ""
    },
    {
      "name": "Fireside",
      "hex": "#6e4a44",
      "good name": ""
    },
    {
      "name": "Firewatch",
      "hex": "#ee8866",
      "good name": "x"
    },
    {
      "name": "Fireweed",
      "hex": "#b38491",
      "good name": ""
    },
    {
      "name": "Fireworks",
      "hex": "#44363d",
      "good name": ""
    },
    {
      "name": "Firm Green",
      "hex": "#47654a",
      "good name": ""
    },
    {
      "name": "Firm Pink",
      "hex": "#da93c1",
      "good name": ""
    },
    {
      "name": "Firmament Blue",
      "hex": "#11353f",
      "good name": ""
    },
    {
      "name": "First Blush",
      "hex": "#f4edec",
      "good name": ""
    },
    {
      "name": "First Colors of Spring",
      "hex": "#dbe64c",
      "good name": ""
    },
    {
      "name": "First Crush",
      "hex": "#f6e2ea",
      "good name": "x"
    },
    {
      "name": "First Date",
      "hex": "#f5b1a2",
      "good name": ""
    },
    {
      "name": "First Daughter",
      "hex": "#f7d2d8",
      "good name": ""
    },
    {
      "name": "First Day of School",
      "hex": "#fadba0",
      "good name": ""
    },
    {
      "name": "First Day of Summer",
      "hex": "#f1e798",
      "good name": "x"
    },
    {
      "name": "First Frost",
      "hex": "#cfe5f0",
      "good name": ""
    },
    {
      "name": "First Impression",
      "hex": "#f4e5e7",
      "good name": ""
    },
    {
      "name": "First Lady",
      "hex": "#c47967",
      "good name": ""
    },
    {
      "name": "First Landing",
      "hex": "#59a6cf",
      "good name": ""
    },
    {
      "name": "First Light",
      "hex": "#d9e6ee",
      "good name": ""
    },
    {
      "name": "First Lilac",
      "hex": "#e7d6ed",
      "good name": ""
    },
    {
      "name": "First Love",
      "hex": "#cf758a",
      "good name": "x"
    },
    {
      "name": "First of July",
      "hex": "#bce6ef",
      "good name": ""
    },
    {
      "name": "First Peach",
      "hex": "#f4cac6",
      "good name": ""
    },
    {
      "name": "First Plum",
      "hex": "#b87592",
      "good name": ""
    },
    {
      "name": "First Post",
      "hex": "#2fbda1",
      "good name": ""
    },
    {
      "name": "First Rain",
      "hex": "#bdd8ec",
      "good name": ""
    },
    {
      "name": "First Shade of Blue",
      "hex": "#cbe1f2",
      "good name": ""
    },
    {
      "name": "First Snow",
      "hex": "#e8eff8",
      "good name": "x"
    },
    {
      "name": "First Star",
      "hex": "#dad9d4",
      "good name": ""
    },
    {
      "name": "First Timer Green",
      "hex": "#00e8d8",
      "good name": ""
    },
    {
      "name": "First Tulip",
      "hex": "#ffe79c",
      "good name": ""
    },
    {
      "name": "First Waltz",
      "hex": "#d5bcb2",
      "good name": ""
    },
    {
      "name": "Fischer Blue",
      "hex": "#32a0b1",
      "good name": ""
    },
    {
      "name": "Fish Bone",
      "hex": "#e4d9c5",
      "good name": "x"
    },
    {
      "name": "Fish Boy",
      "hex": "#11dddd",
      "good name": "x"
    },
    {
      "name": "Fish Camp Woods",
      "hex": "#7a9682",
      "good name": ""
    },
    {
      "name": "Fish Ceviche",
      "hex": "#e1e1d5",
      "good name": "x"
    },
    {
      "name": "Fish Finger",
      "hex": "#eecc55",
      "good name": ""
    },
    {
      "name": "Fish Net Blue",
      "hex": "#1e446e",
      "good name": ""
    },
    {
      "name": "Fish Pond",
      "hex": "#86c8ed",
      "good name": "x"
    },
    {
      "name": "Fisher King",
      "hex": "#5182b9",
      "good name": "x"
    },
    {
      "name": "Fishy House",
      "hex": "#1ba590",
      "good name": ""
    },
    {
      "name": "Fist of the North Star",
      "hex": "#225599",
      "good name": "x"
    },
    {
      "name": "Fistfull of Green",
      "hex": "#a2a415",
      "good name": ""
    },
    {
      "name": "Fitness Blue",
      "hex": "#5bb9d2",
      "good name": ""
    },
    {
      "name": "Fitzgerald Smoke",
      "hex": "#b3b6b0",
      "good name": ""
    },
    {
      "name": "Five Star",
      "hex": "#ffaa4a",
      "good name": "x"
    },
    {
      "name": "Fizz",
      "hex": "#b1dbaa",
      "good name": "x"
    },
    {
      "name": "Fizzing Whizbees",
      "hex": "#ddbcbc",
      "good name": ""
    },
    {
      "name": "Fizzle",
      "hex": "#d8e4de",
      "good name": ""
    },
    {
      "name": "Fjord",
      "hex": "#616242",
      "good name": ""
    },
    {
      "name": "Fjord Blue",
      "hex": "#007290",
      "good name": ""
    },
    {
      "name": "Fjord Green",
      "hex": "#005043",
      "good name": ""
    },
    {
      "name": "Flag Green",
      "hex": "#717c00",
      "good name": ""
    },
    {
      "name": "Flagstaff Green",
      "hex": "#b3bfb0",
      "good name": ""
    },
    {
      "name": "Flagstone",
      "hex": "#acadad",
      "good name": ""
    },
    {
      "name": "Flagstone Quartzite",
      "hex": "#9a9e88",
      "good name": ""
    },
    {
      "name": "Flamboyant",
      "hex": "#129c8b",
      "good name": ""
    },
    {
      "name": "Flamboyant Plum",
      "hex": "#694e52",
      "good name": ""
    },
    {
      "name": "Flame",
      "hex": "#e25822",
      "good name": "x"
    },
    {
      "name": "Flame Hawkfish",
      "hex": "#960018",
      "good name": ""
    },
    {
      "name": "Flame Orange",
      "hex": "#fb8b23",
      "good name": ""
    },
    {
      "name": "Flame Pea",
      "hex": "#be5c48",
      "good name": ""
    },
    {
      "name": "Flame Red",
      "hex": "#86282e",
      "good name": ""
    },
    {
      "name": "Flame Scarlet",
      "hex": "#cd212a",
      "good name": ""
    },
    {
      "name": "Flame Yellow",
      "hex": "#ffcf49",
      "good name": ""
    },
    {
      "name": "Flamenco",
      "hex": "#ea8645",
      "good name": "x"
    },
    {
      "name": "Flaming Flamingo",
      "hex": "#dd55ff",
      "good name": "x"
    },
    {
      "name": "Flaming Hot Flamingoes",
      "hex": "#ff005d",
      "good name": "x"
    },
    {
      "name": "Flaming June",
      "hex": "#eebb66",
      "good name": ""
    },
    {
      "name": "Flaming Torch",
      "hex": "#d2864e",
      "good name": ""
    },
    {
      "name": "Flamingo",
      "hex": "#e1634f",
      "good name": ""
    },
    {
      "name": "Flamingo Diva",
      "hex": "#ff44dd",
      "good name": ""
    },
    {
      "name": "Flamingo Dream",
      "hex": "#ee888b",
      "good name": ""
    },
    {
      "name": "Flamingo Feather",
      "hex": "#f8bdd9",
      "good name": ""
    },
    {
      "name": "Flamingo Fury",
      "hex": "#df01f0",
      "good name": ""
    },
    {
      "name": "Flamingo Peach",
      "hex": "#f6e2d8",
      "good name": ""
    },
    {
      "name": "Flamingo Pink",
      "hex": "#fc8eac",
      "good name": ""
    },
    {
      "name": "Flamingo Queen",
      "hex": "#cc33ff",
      "good name": "x"
    },
    {
      "name": "Flamingo Red",
      "hex": "#ef8e87",
      "good name": ""
    },
    {
      "name": "Flan",
      "hex": "#f6e3b4",
      "good name": "x"
    },
    {
      "name": "Flannel Grey",
      "hex": "#aeadac",
      "good name": ""
    },
    {
      "name": "Flannel Pajamas",
      "hex": "#8b8d98",
      "good name": ""
    },
    {
      "name": "Flapper Dance",
      "hex": "#495762",
      "good name": ""
    },
    {
      "name": "Flare Gun",
      "hex": "#ff4519",
      "good name": ""
    },
    {
      "name": "Flash Gitz Yellow",
      "hex": "#fffb05",
      "good name": ""
    },
    {
      "name": "Flash in the Pan",
      "hex": "#ff9977",
      "good name": "x"
    },
    {
      "name": "Flash of Orange",
      "hex": "#ffaa00",
      "good name": ""
    },
    {
      "name": "Flashlight",
      "hex": "#f9eed6",
      "good name": "x"
    },
    {
      "name": "Flashman",
      "hex": "#7cbd85",
      "good name": ""
    },
    {
      "name": "Flashpoint",
      "hex": "#f9f2d1",
      "good name": ""
    },
    {
      "name": "Flashy Sapphire",
      "hex": "#2c538a",
      "good name": ""
    },
    {
      "name": "Flat Aluminum",
      "hex": "#c3c6cd",
      "good name": ""
    },
    {
      "name": "Flat Blue",
      "hex": "#3c73a8",
      "good name": ""
    },
    {
      "name": "Flat Brown",
      "hex": "#754600",
      "good name": ""
    },
    {
      "name": "Flat Earth",
      "hex": "#aa5533",
      "good name": ""
    },
    {
      "name": "Flat Flesh",
      "hex": "#f7d48f",
      "good name": ""
    },
    {
      "name": "Flat Green",
      "hex": "#699d4c",
      "good name": ""
    },
    {
      "name": "Flat Yellow",
      "hex": "#fff005",
      "good name": ""
    },
    {
      "name": "Flattered Flamingo",
      "hex": "#ee6655",
      "good name": "x"
    },
    {
      "name": "Flattering Peach",
      "hex": "#f4d3b3",
      "good name": ""
    },
    {
      "name": "Flattery",
      "hex": "#6b4424",
      "good name": ""
    },
    {
      "name": "Flavescent",
      "hex": "#f7e98e",
      "good name": ""
    },
    {
      "name": "Flavoparmelia Caperata",
      "hex": "#8fb67b",
      "good name": ""
    },
    {
      "name": "Flawed White",
      "hex": "#fffbfc",
      "good name": ""
    },
    {
      "name": "Flax",
      "hex": "#eedc82",
      "good name": ""
    },
    {
      "name": "Flax Beige",
      "hex": "#d4c3b3",
      "good name": ""
    },
    {
      "name": "Flax Bloom",
      "hex": "#d2d8f4",
      "good name": ""
    },
    {
      "name": "Flax Fiber",
      "hex": "#e0d68e",
      "good name": ""
    },
    {
      "name": "Flax Fibre Grey",
      "hex": "#b7a99a",
      "good name": ""
    },
    {
      "name": "Flax Flower",
      "hex": "#5577aa",
      "good name": ""
    },
    {
      "name": "Flax Flower Blue",
      "hex": "#4499dd",
      "good name": ""
    },
    {
      "name": "Flax Smoke",
      "hex": "#7b8265",
      "good name": ""
    },
    {
      "name": "Flax Straw",
      "hex": "#cbaa7d",
      "good name": ""
    },
    {
      "name": "Flax-Flower Blue",
      "hex": "#6f88af",
      "good name": ""
    },
    {
      "name": "Flaxen",
      "hex": "#fbecc9",
      "good name": ""
    },
    {
      "name": "Flaxen Fair",
      "hex": "#e3ddbd",
      "good name": ""
    },
    {
      "name": "Flaxen Field",
      "hex": "#bba684",
      "good name": ""
    },
    {
      "name": "Flaxseed",
      "hex": "#f7e6c6",
      "good name": ""
    },
    {
      "name": "Flayed One Flesh",
      "hex": "#fcfcde",
      "good name": ""
    },
    {
      "name": "Fleck",
      "hex": "#97bbe1",
      "good name": ""
    },
    {
      "name": "Fleeting Green",
      "hex": "#d8e2d8",
      "good name": ""
    },
    {
      "name": "Flemish Blue",
      "hex": "#add0e0",
      "good name": ""
    },
    {
      "name": "Flesh",
      "hex": "#ffcbc4",
      "good name": ""
    },
    {
      "name": "Flesh Fly",
      "hex": "#894585",
      "good name": ""
    },
    {
      "name": "Flesh Grey",
      "hex": "#aaa197",
      "good name": ""
    },
    {
      "name": "Flesh Pink",
      "hex": "#f9cbd3",
      "good name": ""
    },
    {
      "name": "Flesh Red",
      "hex": "#e9c49d",
      "good name": ""
    },
    {
      "name": "Flesh Wash",
      "hex": "#ce8c42",
      "good name": ""
    },
    {
      "name": "Fleshtone Shade Wash",
      "hex": "#cf9346",
      "good name": ""
    },
    {
      "name": "Fleur de Sel",
      "hex": "#dcddd8",
      "good name": ""
    },
    {
      "name": "Fleur de Sel Caramel",
      "hex": "#da8704",
      "good name": "x"
    },
    {
      "name": "Fleur-De-Lis",
      "hex": "#b090c7",
      "good name": "x"
    },
    {
      "name": "Flexible Grey",
      "hex": "#b1a3a1",
      "good name": ""
    },
    {
      "name": "Flickering Firefly",
      "hex": "#f8f6e6",
      "good name": "x"
    },
    {
      "name": "Flickering Flame",
      "hex": "#aa6e49",
      "good name": ""
    },
    {
      "name": "Flickering Gold",
      "hex": "#c6a668",
      "good name": ""
    },
    {
      "name": "Flickering Light",
      "hex": "#fff1dc",
      "good name": "x"
    },
    {
      "name": "Flickering Sea",
      "hex": "#5566ee",
      "good name": ""
    },
    {
      "name": "Flickery C64",
      "hex": "#4f81ff",
      "good name": ""
    },
    {
      "name": "Flickery CRT Green",
      "hex": "#90f215",
      "good name": ""
    },
    {
      "name": "Flickr Blue",
      "hex": "#216bd6",
      "good name": ""
    },
    {
      "name": "Flickr Pink",
      "hex": "#fb0081",
      "good name": "x"
    },
    {
      "name": "Flier Lie",
      "hex": "#cdb891",
      "good name": ""
    },
    {
      "name": "Flight Time",
      "hex": "#a3b8ce",
      "good name": ""
    },
    {
      "name": "Flinders Green",
      "hex": "#6d7058",
      "good name": ""
    },
    {
      "name": "Fling Green",
      "hex": "#8ecfd0",
      "good name": ""
    },
    {
      "name": "Flint",
      "hex": "#716e61",
      "good name": ""
    },
    {
      "name": "Flint Corn Red",
      "hex": "#d9623b",
      "good name": ""
    },
    {
      "name": "Flint Grey",
      "hex": "#a09c98",
      "good name": ""
    },
    {
      "name": "Flint Purple",
      "hex": "#42424d",
      "good name": ""
    },
    {
      "name": "Flint Rock",
      "hex": "#989493",
      "good name": "x"
    },
    {
      "name": "Flint Shard",
      "hex": "#8f9395",
      "good name": ""
    },
    {
      "name": "Flint Smoke",
      "hex": "#a8b2b1",
      "good name": ""
    },
    {
      "name": "Flintstone",
      "hex": "#677283",
      "good name": ""
    },
    {
      "name": "Flintstone Blue",
      "hex": "#434252",
      "good name": ""
    },
    {
      "name": "Flip",
      "hex": "#45747e",
      "good name": ""
    },
    {
      "name": "Flip a Coin",
      "hex": "#ccddcc",
      "good name": "x"
    },
    {
      "name": "Flip-Flop",
      "hex": "#f2c4a7",
      "good name": "x"
    },
    {
      "name": "Flipper",
      "hex": "#7f726b",
      "good name": ""
    },
    {
      "name": "Flirt",
      "hex": "#7a2e4d",
      "good name": "x"
    },
    {
      "name": "Flirt Alert",
      "hex": "#be3c37",
      "good name": ""
    },
    {
      "name": "Flirtatious",
      "hex": "#ffd637",
      "good name": ""
    },
    {
      "name": "Flirtatious Flamingo",
      "hex": "#cc22ff",
      "good name": "x"
    },
    {
      "name": "Flirtatious Indigo Tea",
      "hex": "#473f2d",
      "good name": ""
    },
    {
      "name": "Flirty Pink",
      "hex": "#9e88b1",
      "good name": ""
    },
    {
      "name": "Flirty Salmon",
      "hex": "#fa7069",
      "good name": "x"
    },
    {
      "name": "Floating Blue",
      "hex": "#b0c9cd",
      "good name": ""
    },
    {
      "name": "Floating Feather",
      "hex": "#e9d8c2",
      "good name": "x"
    },
    {
      "name": "Floating Island",
      "hex": "#ece5cf",
      "good name": ""
    },
    {
      "name": "Floating Lily",
      "hex": "#edebce",
      "good name": ""
    },
    {
      "name": "Floating Lily Pad",
      "hex": "#ccc7a1",
      "good name": ""
    },
    {
      "name": "Flood",
      "hex": "#6677bb",
      "good name": "x"
    },
    {
      "name": "Flood Mud",
      "hex": "#877966",
      "good name": ""
    },
    {
      "name": "Flood Out",
      "hex": "#579dab",
      "good name": ""
    },
    {
      "name": "Floppy Disk",
      "hex": "#110044",
      "good name": ""
    },
    {
      "name": "Flor Lila",
      "hex": "#e0e0eb",
      "good name": ""
    },
    {
      "name": "Flora",
      "hex": "#73fa79",
      "good name": "x"
    },
    {
      "name": "Flora Green",
      "hex": "#91ad8a",
      "good name": ""
    },
    {
      "name": "Floral Arrangement",
      "hex": "#c6ac9f",
      "good name": ""
    },
    {
      "name": "Floral Bluff",
      "hex": "#e7cfb9",
      "good name": ""
    },
    {
      "name": "Floral Bouquet",
      "hex": "#bacb7c",
      "good name": ""
    },
    {
      "name": "Floral Leaf",
      "hex": "#ffb94e",
      "good name": ""
    },
    {
      "name": "Floral Linen",
      "hex": "#f5e2de",
      "good name": ""
    },
    {
      "name": "Floral Scent",
      "hex": "#eeede9",
      "good name": ""
    },
    {
      "name": "Floral Tapestry",
      "hex": "#c39191",
      "good name": ""
    },
    {
      "name": "Floral White",
      "hex": "#fffaf0",
      "good name": ""
    },
    {
      "name": "Florence",
      "hex": "#96b576",
      "good name": ""
    },
    {
      "name": "Florence Brown",
      "hex": "#835740",
      "good name": ""
    },
    {
      "name": "Florence Red",
      "hex": "#753f38",
      "good name": ""
    },
    {
      "name": "Florentine Brown",
      "hex": "#7a5544",
      "good name": ""
    },
    {
      "name": "Florentine Clay",
      "hex": "#c1937a",
      "good name": ""
    },
    {
      "name": "Florentine Lapis",
      "hex": "#1c5798",
      "good name": ""
    },
    {
      "name": "Florida Grey",
      "hex": "#bea4a2",
      "good name": ""
    },
    {
      "name": "Florida Keys",
      "hex": "#56beab",
      "good name": ""
    },
    {
      "name": "Florida Mango",
      "hex": "#ed9f6c",
      "good name": ""
    },
    {
      "name": "Florida Sunrise",
      "hex": "#f7aa6f",
      "good name": ""
    },
    {
      "name": "Florida Turquoise",
      "hex": "#6bb8b1",
      "good name": ""
    },
    {
      "name": "Florida Waters",
      "hex": "#2a4983",
      "good name": ""
    },
    {
      "name": "Florida's Alligator",
      "hex": "#664422",
      "good name": "x"
    },
    {
      "name": "Floriography",
      "hex": "#a54049",
      "good name": ""
    },
    {
      "name": "Floss",
      "hex": "#d7b3b9",
      "good name": ""
    },
    {
      "name": "Flotation",
      "hex": "#7bb0ba",
      "good name": ""
    },
    {
      "name": "Flounce",
      "hex": "#4a8791",
      "good name": ""
    },
    {
      "name": "Flour Sack",
      "hex": "#b9b297",
      "good name": ""
    },
    {
      "name": "Flourish",
      "hex": "#ebdc9c",
      "good name": ""
    },
    {
      "name": "Flower Bulb",
      "hex": "#d9e8c9",
      "good name": ""
    },
    {
      "name": "Flower Centre",
      "hex": "#fde6c6",
      "good name": ""
    },
    {
      "name": "Flower Field",
      "hex": "#d9a96f",
      "good name": ""
    },
    {
      "name": "Flower Girl",
      "hex": "#f498ad",
      "good name": ""
    },
    {
      "name": "Flower Girl Dress",
      "hex": "#ede7e6",
      "good name": ""
    },
    {
      "name": "Flower Hat Jellyfish",
      "hex": "#f9d593",
      "good name": ""
    },
    {
      "name": "Flower of Oahu",
      "hex": "#f5dfc5",
      "good name": ""
    },
    {
      "name": "Flower Pot",
      "hex": "#8f4438",
      "good name": ""
    },
    {
      "name": "Flower Spell",
      "hex": "#ffc9d7",
      "good name": ""
    },
    {
      "name": "Flower Stem",
      "hex": "#b5d5b0",
      "good name": ""
    },
    {
      "name": "Flower Wood",
      "hex": "#988378",
      "good name": ""
    },
    {
      "name": "Flowerbed",
      "hex": "#ffebda",
      "good name": ""
    },
    {
      "name": "Flowering Cactus",
      "hex": "#a2d4bd",
      "good name": ""
    },
    {
      "name": "Flowering Chestnut",
      "hex": "#875657",
      "good name": ""
    },
    {
      "name": "Flowering Raspberry",
      "hex": "#a16c94",
      "good name": ""
    },
    {
      "name": "Flowering Reed",
      "hex": "#e1d8b8",
      "good name": ""
    },
    {
      "name": "Flowerpot",
      "hex": "#d8b0a0",
      "good name": ""
    },
    {
      "name": "Flowers of May",
      "hex": "#e3d7e3",
      "good name": ""
    },
    {
      "name": "Flowery",
      "hex": "#e4dcbf",
      "good name": ""
    },
    {
      "name": "Flowing Breeze",
      "hex": "#b9c6cb",
      "good name": ""
    },
    {
      "name": "Flowing River",
      "hex": "#335e6f",
      "good name": ""
    },
    {
      "name": "Fluffy Duckling",
      "hex": "#fcdf39",
      "good name": "x"
    },
    {
      "name": "Fluffy Pink",
      "hex": "#f7d6cb",
      "good name": ""
    },
    {
      "name": "Fluid Blue",
      "hex": "#c5d6eb",
      "good name": ""
    },
    {
      "name": "Fluor Spar",
      "hex": "#a77d35",
      "good name": ""
    },
    {
      "name": "Fluorescence",
      "hex": "#89d178",
      "good name": "x"
    },
    {
      "name": "Fluorescent Fire",
      "hex": "#984427",
      "good name": ""
    },
    {
      "name": "Fluorescent Green",
      "hex": "#08ff08",
      "good name": "x"
    },
    {
      "name": "Fluorescent Lime",
      "hex": "#bdc233",
      "good name": ""
    },
    {
      "name": "Fluorescent Orange",
      "hex": "#ffcf00",
      "good name": ""
    },
    {
      "name": "Fluorescent Pink",
      "hex": "#fe1493",
      "good name": "x"
    },
    {
      "name": "Fluorescent Red",
      "hex": "#ff5555",
      "good name": ""
    },
    {
      "name": "Fluorescent Red Orange",
      "hex": "#fc8427",
      "good name": ""
    },
    {
      "name": "Fluorescent Turquoise",
      "hex": "#00fdff",
      "good name": ""
    },
    {
      "name": "Fluorescent Yellow",
      "hex": "#ccff02",
      "good name": ""
    },
    {
      "name": "Fluorite Blue",
      "hex": "#b4ccc2",
      "good name": ""
    },
    {
      "name": "Fluorite Green",
      "hex": "#699158",
      "good name": ""
    },
    {
      "name": "Fluro Green",
      "hex": "#0aff02",
      "good name": ""
    },
    {
      "name": "Flurries",
      "hex": "#f2ede3",
      "good name": ""
    },
    {
      "name": "Flush Mahogany",
      "hex": "#ca2425",
      "good name": ""
    },
    {
      "name": "Flush Orange",
      "hex": "#ff6f01",
      "good name": "x"
    },
    {
      "name": "Flush Pink",
      "hex": "#f8cbc4",
      "good name": ""
    },
    {
      "name": "Flushed",
      "hex": "#dd5555",
      "good name": ""
    },
    {
      "name": "Fly a Kite",
      "hex": "#c8daf5",
      "good name": "x"
    },
    {
      "name": "Fly Agaric",
      "hex": "#ff2052",
      "good name": ""
    },
    {
      "name": "Fly by Night",
      "hex": "#1c1e4d",
      "good name": "x"
    },
    {
      "name": "Flying Carpet",
      "hex": "#787489",
      "good name": "x"
    },
    {
      "name": "Flying Fish",
      "hex": "#5376ab",
      "good name": ""
    },
    {
      "name": "Flying Fish Blue",
      "hex": "#024aca",
      "good name": "x"
    },
    {
      "name": "Flyway",
      "hex": "#5db3d4",
      "good name": ""
    },
    {
      "name": "Foam",
      "hex": "#d0eae8",
      "good name": ""
    },
    {
      "name": "Foam Green",
      "hex": "#90fda9",
      "good name": ""
    },
    {
      "name": "Foaming Surf",
      "hex": "#90d1dd",
      "good name": ""
    },
    {
      "name": "Foamy Milk",
      "hex": "#f7f4f7",
      "good name": ""
    },
    {
      "name": "Focus",
      "hex": "#e5e0d2",
      "good name": ""
    },
    {
      "name": "Focus on Light",
      "hex": "#fef9d3",
      "good name": ""
    },
    {
      "name": "Focus Point",
      "hex": "#91c3bd",
      "good name": ""
    },
    {
      "name": "Fog",
      "hex": "#d6d7d2",
      "good name": "x"
    },
    {
      "name": "Fog Beacon",
      "hex": "#d8d6d1",
      "good name": ""
    },
    {
      "name": "Fog Green",
      "hex": "#c2cbb4",
      "good name": ""
    },
    {
      "name": "Fog of War",
      "hex": "#112233",
      "good name": ""
    },
    {
      "name": "Fog White",
      "hex": "#f1efe4",
      "good name": ""
    },
    {
      "name": "Foggy Amethyst",
      "hex": "#57317e",
      "good name": ""
    },
    {
      "name": "Foggy Blue",
      "hex": "#99aebb",
      "good name": ""
    },
    {
      "name": "Foggy Bog",
      "hex": "#7f8e1d",
      "good name": ""
    },
    {
      "name": "Foggy Day",
      "hex": "#e7e3db",
      "good name": "x"
    },
    {
      "name": "Foggy Dew",
      "hex": "#d1d5d0",
      "good name": ""
    },
    {
      "name": "Foggy Grey",
      "hex": "#a7a69d",
      "good name": ""
    },
    {
      "name": "Foggy Heath",
      "hex": "#e2c9ff",
      "good name": ""
    },
    {
      "name": "Foggy London",
      "hex": "#5c5658",
      "good name": ""
    },
    {
      "name": "Foggy Love",
      "hex": "#d5c7e8",
      "good name": "x"
    },
    {
      "name": "Foggy Mist",
      "hex": "#c8d1cc",
      "good name": ""
    },
    {
      "name": "Foggy Morn",
      "hex": "#cad0ce",
      "good name": ""
    },
    {
      "name": "Foggy Night",
      "hex": "#a79c8e",
      "good name": ""
    },
    {
      "name": "Foggy Pith",
      "hex": "#fbf6ef",
      "good name": ""
    },
    {
      "name": "Foggy Quartz",
      "hex": "#bfa2a1",
      "good name": ""
    },
    {
      "name": "Fogtown",
      "hex": "#eef0e7",
      "good name": "x"
    },
    {
      "name": "Foil",
      "hex": "#c0c3c4",
      "good name": "x"
    },
    {
      "name": "Foille",
      "hex": "#b0b99c",
      "good name": ""
    },
    {
      "name": "Foliage",
      "hex": "#95b388",
      "good name": "x"
    },
    {
      "name": "Foliage Green",
      "hex": "#3e6f58",
      "good name": ""
    },
    {
      "name": "Folk Guitar",
      "hex": "#7a634f",
      "good name": ""
    },
    {
      "name": "Folk Song",
      "hex": "#65a19f",
      "good name": ""
    },
    {
      "name": "Folk Tale",
      "hex": "#b2e1bc",
      "good name": ""
    },
    {
      "name": "Folk Tales",
      "hex": "#a5c1b6",
      "good name": ""
    },
    {
      "name": "Folklore",
      "hex": "#684141",
      "good name": ""
    },
    {
      "name": "Folkstone",
      "hex": "#6d6562",
      "good name": ""
    },
    {
      "name": "Folkstone Grey",
      "hex": "#626879",
      "good name": ""
    },
    {
      "name": "Folksy Gold",
      "hex": "#d69969",
      "good name": ""
    },
    {
      "name": "Follow the Leader",
      "hex": "#f7e5d0",
      "good name": ""
    },
    {
      "name": "Folly",
      "hex": "#fd004d",
      "good name": ""
    },
    {
      "name": "Fond de Teint",
      "hex": "#ffaaaa",
      "good name": ""
    },
    {
      "name": "Fond Memory",
      "hex": "#c8bcb7",
      "good name": ""
    },
    {
      "name": "Fondue",
      "hex": "#c99f97",
      "good name": ""
    },
    {
      "name": "Fondue Fudge",
      "hex": "#5d4236",
      "good name": ""
    },
    {
      "name": "Fool's Gold",
      "hex": "#cad175",
      "good name": "x"
    },
    {
      "name": "Football",
      "hex": "#825736",
      "good name": ""
    },
    {
      "name": "Football Field",
      "hex": "#7eaf34",
      "good name": ""
    },
    {
      "name": "Foothill Drive",
      "hex": "#cab48e",
      "good name": ""
    },
    {
      "name": "Foothills",
      "hex": "#e1cfa5",
      "good name": ""
    },
    {
      "name": "Footie Pajamas",
      "hex": "#e6cee6",
      "good name": ""
    },
    {
      "name": "For the Love of Hue",
      "hex": "#457e87",
      "good name": ""
    },
    {
      "name": "Forbidden Blackberry",
      "hex": "#323f75",
      "good name": ""
    },
    {
      "name": "Forbidden Forest",
      "hex": "#215354",
      "good name": ""
    },
    {
      "name": "Forbidden Fruit",
      "hex": "#fe7b7c",
      "good name": "x"
    },
    {
      "name": "Forbidden Red",
      "hex": "#8a4646",
      "good name": ""
    },
    {
      "name": "Forbidden Thrill",
      "hex": "#856363",
      "good name": ""
    },
    {
      "name": "Force of Nature",
      "hex": "#d5ce69",
      "good name": "x"
    },
    {
      "name": "Forceful Orange",
      "hex": "#f29312",
      "good name": ""
    },
    {
      "name": "Foresight",
      "hex": "#94a8d3",
      "good name": ""
    },
    {
      "name": "Forest",
      "hex": "#0b5509",
      "good name": "x"
    },
    {
      "name": "Forest Berry",
      "hex": "#956378",
      "good name": ""
    },
    {
      "name": "Forest Biome",
      "hex": "#184a45",
      "good name": ""
    },
    {
      "name": "Forest Blues",
      "hex": "#0d4462",
      "good name": ""
    },
    {
      "name": "Forest Bound",
      "hex": "#738f50",
      "good name": ""
    },
    {
      "name": "Forest Canopy",
      "hex": "#969582",
      "good name": ""
    },
    {
      "name": "Forest Edge",
      "hex": "#627b72",
      "good name": ""
    },
    {
      "name": "Forest Fern",
      "hex": "#63b76c",
      "good name": ""
    },
    {
      "name": "Forest Floor",
      "hex": "#555142",
      "good name": ""
    },
    {
      "name": "Forest Floor Khaki",
      "hex": "#78766d",
      "good name": ""
    },
    {
      "name": "Forest Found",
      "hex": "#e1dfbb",
      "good name": ""
    },
    {
      "name": "Forest Frolic",
      "hex": "#88bb95",
      "good name": ""
    },
    {
      "name": "Forest Fruit Pink",
      "hex": "#68393b",
      "good name": ""
    },
    {
      "name": "Forest Fruit Red",
      "hex": "#6e2759",
      "good name": ""
    },
    {
      "name": "Forest Green",
      "hex": "#154406",
      "good name": ""
    },
    {
      "name": "Forest Greenery",
      "hex": "#3e645b",
      "good name": ""
    },
    {
      "name": "Forest Lichen",
      "hex": "#9aa22b",
      "good name": ""
    },
    {
      "name": "Forest Maid",
      "hex": "#52b963",
      "good name": ""
    },
    {
      "name": "Forest Moss",
      "hex": "#858f83",
      "good name": ""
    },
    {
      "name": "Forest Night",
      "hex": "#434237",
      "good name": ""
    },
    {
      "name": "Forest Path",
      "hex": "#708d6c",
      "good name": ""
    },
    {
      "name": "Forest Rain",
      "hex": "#216957",
      "good name": ""
    },
    {
      "name": "Forest Ride",
      "hex": "#006800",
      "good name": ""
    },
    {
      "name": "Forest Ridge",
      "hex": "#555d46",
      "good name": ""
    },
    {
      "name": "Forest Shade",
      "hex": "#91ac80",
      "good name": ""
    },
    {
      "name": "Forest Spirit",
      "hex": "#667028",
      "good name": ""
    },
    {
      "name": "Forest Splendor",
      "hex": "#016e61",
      "good name": ""
    },
    {
      "name": "Forest Tapestry",
      "hex": "#a4ba8a",
      "good name": ""
    },
    {
      "name": "Forest Tent",
      "hex": "#bba748",
      "good name": ""
    },
    {
      "name": "Forester",
      "hex": "#9aa77c",
      "good name": "x"
    },
    {
      "name": "Forestial",
      "hex": "#007733",
      "good name": "x"
    },
    {
      "name": "Forestial Outpost",
      "hex": "#556611",
      "good name": "x"
    },
    {
      "name": "Forestwood",
      "hex": "#4d5346",
      "good name": ""
    },
    {
      "name": "Forever Blue",
      "hex": "#899bb8",
      "good name": ""
    },
    {
      "name": "Forever Denim",
      "hex": "#778590",
      "good name": ""
    },
    {
      "name": "Forever Fairytale",
      "hex": "#d2bbb2",
      "good name": ""
    },
    {
      "name": "Forever Faithful",
      "hex": "#efe6e1",
      "good name": ""
    },
    {
      "name": "Forever Green",
      "hex": "#aab4a7",
      "good name": ""
    },
    {
      "name": "Forever Lilac",
      "hex": "#afa5c7",
      "good name": ""
    },
    {
      "name": "Forged Iron",
      "hex": "#48464a",
      "good name": ""
    },
    {
      "name": "Forged Steel",
      "hex": "#5b5b59",
      "good name": ""
    },
    {
      "name": "Forget-Me-Not",
      "hex": "#0087bd",
      "good name": "x"
    },
    {
      "name": "Forget-Me-Not Blue",
      "hex": "#358094",
      "good name": ""
    },
    {
      "name": "Forgive Quickly",
      "hex": "#e1e1be",
      "good name": ""
    },
    {
      "name": "Forgiven Sin",
      "hex": "#ff1199",
      "good name": "x"
    },
    {
      "name": "Forgotten Blue",
      "hex": "#c0e5ec",
      "good name": ""
    },
    {
      "name": "Forgotten Gold",
      "hex": "#c7b89f",
      "good name": ""
    },
    {
      "name": "Forgotten Mosque",
      "hex": "#e2d9db",
      "good name": "x"
    },
    {
      "name": "Forgotten Pink",
      "hex": "#ffd9d6",
      "good name": ""
    },
    {
      "name": "Forgotten Purple",
      "hex": "#9878f8",
      "good name": ""
    },
    {
      "name": "Forgotten Sandstone",
      "hex": "#afa696",
      "good name": "x"
    },
    {
      "name": "Forgotten Sunset",
      "hex": "#fdd5b1",
      "good name": ""
    },
    {
      "name": "Formal Affair",
      "hex": "#848391",
      "good name": ""
    },
    {
      "name": "Formal Garden",
      "hex": "#3a984d",
      "good name": ""
    },
    {
      "name": "Formal Grey",
      "hex": "#97969a",
      "good name": ""
    },
    {
      "name": "Formal Maroon",
      "hex": "#70474b",
      "good name": ""
    },
    {
      "name": "Forsythia",
      "hex": "#ffc801",
      "good name": ""
    },
    {
      "name": "Forsythia Blossom",
      "hex": "#f6d76e",
      "good name": ""
    },
    {
      "name": "Forsythia Bud",
      "hex": "#bbcc55",
      "good name": ""
    },
    {
      "name": "Fortitude",
      "hex": "#c6c5c1",
      "good name": ""
    },
    {
      "name": "Fortress Grey",
      "hex": "#b8b8b8",
      "good name": ""
    },
    {
      "name": "Fortress Stone",
      "hex": "#c5c0b0",
      "good name": ""
    },
    {
      "name": "Fortune",
      "hex": "#9f97a3",
      "good name": ""
    },
    {
      "name": "Fortune Cookie",
      "hex": "#e0c5a1",
      "good name": "x"
    },
    {
      "name": "Fortune Red",
      "hex": "#b0534d",
      "good name": ""
    },
    {
      "name": "Fortune's Prize",
      "hex": "#daa994",
      "good name": ""
    },
    {
      "name": "Forward Fuchsia",
      "hex": "#92345b",
      "good name": ""
    },
    {
      "name": "Fossil",
      "hex": "#806f63",
      "good name": ""
    },
    {
      "name": "Fossil Butte",
      "hex": "#a78f65",
      "good name": ""
    },
    {
      "name": "Fossil Green",
      "hex": "#6c6a43",
      "good name": ""
    },
    {
      "name": "Fossil Sand",
      "hex": "#d2c8bb",
      "good name": ""
    },
    {
      "name": "Fossil Stone",
      "hex": "#e3ddcc",
      "good name": "x"
    },
    {
      "name": "Fossil Tan",
      "hex": "#d1af90",
      "good name": ""
    },
    {
      "name": "Fossilized",
      "hex": "#b6b8b0",
      "good name": ""
    },
    {
      "name": "Fossilized Leaf",
      "hex": "#756a43",
      "good name": ""
    },
    {
      "name": "Foul Green",
      "hex": "#85c7a1",
      "good name": ""
    },
    {
      "name": "Foundation",
      "hex": "#f8e8c5",
      "good name": ""
    },
    {
      "name": "Foundation White",
      "hex": "#efeeff",
      "good name": "x"
    },
    {
      "name": "Fountain",
      "hex": "#56b5ca",
      "good name": ""
    },
    {
      "name": "Fountain Blue",
      "hex": "#65adb2",
      "good name": ""
    },
    {
      "name": "Fountain City",
      "hex": "#9cd4cf",
      "good name": ""
    },
    {
      "name": "Fountain Frolic",
      "hex": "#e4e4c5",
      "good name": ""
    },
    {
      "name": "Fountain Spout",
      "hex": "#cdebec",
      "good name": ""
    },
    {
      "name": "Fountains of Budapest",
      "hex": "#b9def0",
      "good name": ""
    },
    {
      "name": "Four Leaf Clover",
      "hex": "#738f5d",
      "good name": "x"
    },
    {
      "name": "Fox",
      "hex": "#c38743",
      "good name": "x"
    },
    {
      "name": "Fox Hill",
      "hex": "#c8aa92",
      "good name": ""
    },
    {
      "name": "Fox Red",
      "hex": "#ca4e33",
      "good name": ""
    },
    {
      "name": "Fox Tails",
      "hex": "#dd8800",
      "good name": ""
    },
    {
      "name": "Foxen",
      "hex": "#bf8e7f",
      "good name": ""
    },
    {
      "name": "Foxfire Brown",
      "hex": "#9f6949",
      "good name": ""
    },
    {
      "name": "Foxflower Viola",
      "hex": "#a2acc5",
      "good name": ""
    },
    {
      "name": "Foxglove",
      "hex": "#b98391",
      "good name": ""
    },
    {
      "name": "Foxgloves",
      "hex": "#c6c0ca",
      "good name": ""
    },
    {
      "name": "Foxhall Green",
      "hex": "#454b40",
      "good name": ""
    },
    {
      "name": "Foxtail",
      "hex": "#bc896e",
      "good name": ""
    },
    {
      "name": "Foxy",
      "hex": "#a85e53",
      "good name": ""
    },
    {
      "name": "Foxy Fuchsia",
      "hex": "#9f00c5",
      "good name": ""
    },
    {
      "name": "Foxy Lady",
      "hex": "#d5a6ad",
      "good name": ""
    },
    {
      "name": "Foxy Pink",
      "hex": "#db95ab",
      "good name": "x"
    },
    {
      "name": "Fozzie Bear",
      "hex": "#70625c",
      "good name": ""
    },
    {
      "name": "Fragile",
      "hex": "#bbb8d0",
      "good name": ""
    },
    {
      "name": "Fragile Beauty",
      "hex": "#e7d7c6",
      "good name": ""
    },
    {
      "name": "Fragile Fern",
      "hex": "#eff2db",
      "good name": ""
    },
    {
      "name": "Fragrant Cherry",
      "hex": "#8e545c",
      "good name": ""
    },
    {
      "name": "Fragrant Cloves",
      "hex": "#ac5e3a",
      "good name": ""
    },
    {
      "name": "Fragrant Jasmine",
      "hex": "#fbf6e7",
      "good name": ""
    },
    {
      "name": "Fragrant Lilac",
      "hex": "#ceadbe",
      "good name": ""
    },
    {
      "name": "Fragrant Satchel",
      "hex": "#a99fba",
      "good name": ""
    },
    {
      "name": "Fragrant Snowbell",
      "hex": "#d5c5d4",
      "good name": ""
    },
    {
      "name": "Fragrant Wand",
      "hex": "#adb1c1",
      "good name": ""
    },
    {
      "name": "Frail Fuchsia",
      "hex": "#ee88ee",
      "good name": "x"
    },
    {
      "name": "Framboise",
      "hex": "#e40058",
      "good name": "x"
    },
    {
      "name": "Frangipane",
      "hex": "#f4d5b2",
      "good name": ""
    },
    {
      "name": "Frangipani",
      "hex": "#ffd7a0",
      "good name": ""
    },
    {
      "name": "Frank Blue",
      "hex": "#225288",
      "good name": ""
    },
    {
      "name": "Frank Lloyd White",
      "hex": "#efebdb",
      "good name": ""
    },
    {
      "name": "Frankenstein",
      "hex": "#7ba05b",
      "good name": "x"
    },
    {
      "name": "Frankly Earnest",
      "hex": "#e2dbca",
      "good name": ""
    },
    {
      "name": "Frappe",
      "hex": "#d1b7a0",
      "good name": ""
    },
    {
      "name": "Freckles",
      "hex": "#d78775",
      "good name": ""
    },
    {
      "name": "Free Green",
      "hex": "#74a690",
      "good name": ""
    },
    {
      "name": "Free Reign",
      "hex": "#d1cdca",
      "good name": ""
    },
    {
      "name": "Free Speech Aquamarine",
      "hex": "#029d74",
      "good name": ""
    },
    {
      "name": "Free Speech Blue",
      "hex": "#4156c5",
      "good name": ""
    },
    {
      "name": "Free Speech Green",
      "hex": "#09f911",
      "good name": ""
    },
    {
      "name": "Free Speech Magenta",
      "hex": "#e35bd8",
      "good name": ""
    },
    {
      "name": "Free Speech Red",
      "hex": "#c00000",
      "good name": ""
    },
    {
      "name": "Free Spirit",
      "hex": "#deeeed",
      "good name": "x"
    },
    {
      "name": "Freedom",
      "hex": "#3b5e68",
      "good name": ""
    },
    {
      "name": "Freedom Found",
      "hex": "#657682",
      "good name": ""
    },
    {
      "name": "Freefall",
      "hex": "#565266",
      "good name": "x"
    },
    {
      "name": "Freesia",
      "hex": "#f3c12c",
      "good name": ""
    },
    {
      "name": "Freesia Purple",
      "hex": "#b3b0d4",
      "good name": ""
    },
    {
      "name": "Freezing Vapor",
      "hex": "#d4e9f5",
      "good name": "x"
    },
    {
      "name": "Freezy Breezy",
      "hex": "#99eeee",
      "good name": "x"
    },
    {
      "name": "Freezy Wind",
      "hex": "#99ffdd",
      "good name": ""
    },
    {
      "name": "Freinacht Black",
      "hex": "#232f36",
      "good name": ""
    },
    {
      "name": "French 75",
      "hex": "#f9f3d5",
      "good name": ""
    },
    {
      "name": "French Beige",
      "hex": "#a67b50",
      "good name": ""
    },
    {
      "name": "French Bistre",
      "hex": "#856d4d",
      "good name": ""
    },
    {
      "name": "French Blue",
      "hex": "#0072bb",
      "good name": "x"
    },
    {
      "name": "French Bustle",
      "hex": "#f2d5d4",
      "good name": ""
    },
    {
      "name": "French Castle",
      "hex": "#cdc0b7",
      "good name": ""
    },
    {
      "name": "French Colony",
      "hex": "#90a1aa",
      "good name": ""
    },
    {
      "name": "French Court",
      "hex": "#6a8ea2",
      "good name": ""
    },
    {
      "name": "French Creme",
      "hex": "#f2e6cf",
      "good name": ""
    },
    {
      "name": "French Diamond",
      "hex": "#597191",
      "good name": ""
    },
    {
      "name": "French Fry",
      "hex": "#ebc263",
      "good name": "x"
    },
    {
      "name": "French Fuchsia",
      "hex": "#fd3f92",
      "good name": ""
    },
    {
      "name": "French Grey",
      "hex": "#bfbdc1",
      "good name": ""
    },
    {
      "name": "French Grey Linen",
      "hex": "#cac8b6",
      "good name": ""
    },
    {
      "name": "French Heirloom",
      "hex": "#e9e2e0",
      "good name": ""
    },
    {
      "name": "French Lavender",
      "hex": "#dfc9d1",
      "good name": ""
    },
    {
      "name": "French Lilac",
      "hex": "#deb7d9",
      "good name": ""
    },
    {
      "name": "French Lilac Blue",
      "hex": "#adbae3",
      "good name": ""
    },
    {
      "name": "French Lime",
      "hex": "#c0ff00",
      "good name": ""
    },
    {
      "name": "French Limestone",
      "hex": "#c9d6c2",
      "good name": ""
    },
    {
      "name": "French Manicure",
      "hex": "#fee6dc",
      "good name": ""
    },
    {
      "name": "French Market",
      "hex": "#a2c7a3",
      "good name": ""
    },
    {
      "name": "French Mauve",
      "hex": "#d473d4",
      "good name": ""
    },
    {
      "name": "French Mirage Blue",
      "hex": "#446688",
      "good name": ""
    },
    {
      "name": "French Moire",
      "hex": "#9fbbc3",
      "good name": ""
    },
    {
      "name": "French Oak",
      "hex": "#bb9e7c",
      "good name": "x"
    },
    {
      "name": "French Pale Gold",
      "hex": "#d4ab60",
      "good name": ""
    },
    {
      "name": "French Parsley",
      "hex": "#9ea07d",
      "good name": ""
    },
    {
      "name": "French Pass",
      "hex": "#a4d2e0",
      "good name": ""
    },
    {
      "name": "French Pastry",
      "hex": "#c4aa92",
      "good name": ""
    },
    {
      "name": "French Pear",
      "hex": "#9e9f7d",
      "good name": ""
    },
    {
      "name": "French Pink",
      "hex": "#fd6c9e",
      "good name": ""
    },
    {
      "name": "French Plum",
      "hex": "#811453",
      "good name": ""
    },
    {
      "name": "French Porcelain",
      "hex": "#f6f4f6",
      "good name": "x"
    },
    {
      "name": "French Porcelain Clay",
      "hex": "#faf1d7",
      "good name": ""
    },
    {
      "name": "French Puce",
      "hex": "#4e1609",
      "good name": ""
    },
    {
      "name": "French Raspberry",
      "hex": "#c72c48",
      "good name": ""
    },
    {
      "name": "French Roast",
      "hex": "#58423f",
      "good name": ""
    },
    {
      "name": "French Rose",
      "hex": "#f64a8a",
      "good name": ""
    },
    {
      "name": "French Shutter",
      "hex": "#bab6a0",
      "good name": ""
    },
    {
      "name": "French Silver",
      "hex": "#b8bcbc",
      "good name": ""
    },
    {
      "name": "French Sky Blue",
      "hex": "#77b5fe",
      "good name": ""
    },
    {
      "name": "French Tarragon",
      "hex": "#667255",
      "good name": ""
    },
    {
      "name": "French Taupe",
      "hex": "#d3c2bf",
      "good name": ""
    },
    {
      "name": "French Toast",
      "hex": "#dd8822",
      "good name": ""
    },
    {
      "name": "French Truffle",
      "hex": "#896d61",
      "good name": ""
    },
    {
      "name": "French Vanilla",
      "hex": "#efe1a7",
      "good name": ""
    },
    {
      "name": "French Vanilla Sorbet",
      "hex": "#fbe8ce",
      "good name": ""
    },
    {
      "name": "French Violet",
      "hex": "#8806ce",
      "good name": ""
    },
    {
      "name": "French White",
      "hex": "#f1e7db",
      "good name": ""
    },
    {
      "name": "French Wine",
      "hex": "#ac1e44",
      "good name": "x"
    },
    {
      "name": "French Winery",
      "hex": "#991133",
      "good name": "x"
    },
    {
      "name": "Frenzied Red",
      "hex": "#814a5c",
      "good name": ""
    },
    {
      "name": "Frenzy",
      "hex": "#feb101",
      "good name": ""
    },
    {
      "name": "Fresco",
      "hex": "#f4dbd9",
      "good name": "x"
    },
    {
      "name": "Fresco Blue",
      "hex": "#034c67",
      "good name": ""
    },
    {
      "name": "Fresco Cream",
      "hex": "#fcc9a6",
      "good name": ""
    },
    {
      "name": "Fresco Green",
      "hex": "#7bd9ad",
      "good name": ""
    },
    {
      "name": "Fresh Acorn",
      "hex": "#d2693e",
      "good name": ""
    },
    {
      "name": "Fresh Air",
      "hex": "#a6e7ff",
      "good name": "x"
    },
    {
      "name": "Fresh Apple",
      "hex": "#97a346",
      "good name": ""
    },
    {
      "name": "Fresh Apricot",
      "hex": "#ffd7a5",
      "good name": ""
    },
    {
      "name": "Fresh Artichoke",
      "hex": "#7c8447",
      "good name": ""
    },
    {
      "name": "Fresh Auburn",
      "hex": "#a52a24",
      "good name": ""
    },
    {
      "name": "Fresh Baked Bread",
      "hex": "#f8d7be",
      "good name": ""
    },
    {
      "name": "Fresh Basil",
      "hex": "#5c5f4b",
      "good name": ""
    },
    {
      "name": "Fresh Blue",
      "hex": "#8bd6e2",
      "good name": ""
    },
    {
      "name": "Fresh Blue of Bel Air",
      "hex": "#069af3",
      "good name": "x"
    },
    {
      "name": "Fresh Breeze",
      "hex": "#beeddc",
      "good name": ""
    },
    {
      "name": "Fresh Brew",
      "hex": "#b8aa7d",
      "good name": ""
    },
    {
      "name": "Fresh Cantaloupe",
      "hex": "#ff9c68",
      "good name": ""
    },
    {
      "name": "Fresh Cedar",
      "hex": "#a77f74",
      "good name": ""
    },
    {
      "name": "Fresh Cinnamon",
      "hex": "#995511",
      "good name": ""
    },
    {
      "name": "Fresh Clay",
      "hex": "#be8035",
      "good name": ""
    },
    {
      "name": "Fresh Cream",
      "hex": "#fcf7e0",
      "good name": ""
    },
    {
      "name": "Fresh Croissant",
      "hex": "#cc9f76",
      "good name": ""
    },
    {
      "name": "Fresh Cut",
      "hex": "#f2003c",
      "good name": ""
    },
    {
      "name": "Fresh Cut Grass",
      "hex": "#91cb7d",
      "good name": "x"
    },
    {
      "name": "Fresh Day",
      "hex": "#dfe9e5",
      "good name": ""
    },
    {
      "name": "Fresh Dew",
      "hex": "#f0f4e5",
      "good name": ""
    },
    {
      "name": "Fresh Dough",
      "hex": "#f2ebe6",
      "good name": ""
    },
    {
      "name": "Fresh Eggplant",
      "hex": "#4f467e",
      "good name": ""
    },
    {
      "name": "Fresh Eggs",
      "hex": "#faf4ce",
      "good name": ""
    },
    {
      "name": "Fresh Eucalyptus",
      "hex": "#adbcb4",
      "good name": ""
    },
    {
      "name": "Fresh Frappe",
      "hex": "#dbe69d",
      "good name": ""
    },
    {
      "name": "Fresh Gingerbread",
      "hex": "#d3691f",
      "good name": ""
    },
    {
      "name": "Fresh Granny Smith",
      "hex": "#7ff217",
      "good name": ""
    },
    {
      "name": "Fresh Green",
      "hex": "#69d84f",
      "good name": ""
    },
    {
      "name": "Fresh Greens",
      "hex": "#3fad71",
      "good name": ""
    },
    {
      "name": "Fresh Grown",
      "hex": "#f0f7c4",
      "good name": ""
    },
    {
      "name": "Fresh Guacamole",
      "hex": "#a2b07e",
      "good name": ""
    },
    {
      "name": "Fresh Gum",
      "hex": "#ffaadd",
      "good name": "x"
    },
    {
      "name": "Fresh Heather",
      "hex": "#d1c1dd",
      "good name": ""
    },
    {
      "name": "Fresh Herb",
      "hex": "#77913b",
      "good name": ""
    },
    {
      "name": "Fresh Herbs",
      "hex": "#3a5f49",
      "good name": ""
    },
    {
      "name": "Fresh Honeydew",
      "hex": "#f6efc5",
      "good name": ""
    },
    {
      "name": "Fresh Ivy Green",
      "hex": "#006a5b",
      "good name": ""
    },
    {
      "name": "Fresh Lavender",
      "hex": "#8e90b4",
      "good name": ""
    },
    {
      "name": "Fresh Lawn",
      "hex": "#88aa00",
      "good name": ""
    },
    {
      "name": "Fresh Leaf",
      "hex": "#93ef10",
      "good name": ""
    },
    {
      "name": "Fresh Lemonade",
      "hex": "#ece678",
      "good name": ""
    },
    {
      "name": "Fresh Lettuce",
      "hex": "#b2d58c",
      "good name": ""
    },
    {
      "name": "Fresh Lime",
      "hex": "#d8f1cb",
      "good name": ""
    },
    {
      "name": "Fresh Linen",
      "hex": "#ebe8da",
      "good name": ""
    },
    {
      "name": "Fresh Mint",
      "hex": "#2a5443",
      "good name": ""
    },
    {
      "name": "Fresh Nectar",
      "hex": "#daa674",
      "good name": ""
    },
    {
      "name": "Fresh Neon Pink",
      "hex": "#ff11ff",
      "good name": ""
    },
    {
      "name": "Fresh Olive",
      "hex": "#a69e73",
      "good name": ""
    },
    {
      "name": "Fresh Onion",
      "hex": "#5b8930",
      "good name": ""
    },
    {
      "name": "Fresh Oregano",
      "hex": "#4faa6c",
      "good name": ""
    },
    {
      "name": "Fresh Peaches",
      "hex": "#f6b98a",
      "good name": ""
    },
    {
      "name": "Fresh Piglet",
      "hex": "#fddde6",
      "good name": ""
    },
    {
      "name": "Fresh Pine",
      "hex": "#4f5b49",
      "good name": ""
    },
    {
      "name": "Fresh Pineapple",
      "hex": "#f3d64f",
      "good name": ""
    },
    {
      "name": "Fresh Pink",
      "hex": "#e19091",
      "good name": ""
    },
    {
      "name": "Fresh Pink Lemonade",
      "hex": "#d2adb5",
      "good name": ""
    },
    {
      "name": "Fresh Popcorn",
      "hex": "#f4f3e9",
      "good name": ""
    },
    {
      "name": "Fresh Praline",
      "hex": "#e7bb95",
      "good name": ""
    },
    {
      "name": "Fresh Salmon",
      "hex": "#ff7f6a",
      "good name": ""
    },
    {
      "name": "Fresh Sawdust",
      "hex": "#c8a278",
      "good name": ""
    },
    {
      "name": "Fresh Scent",
      "hex": "#f1c11c",
      "good name": ""
    },
    {
      "name": "Fresh Snow",
      "hex": "#f6efe1",
      "good name": "x"
    },
    {
      "name": "Fresh Sod",
      "hex": "#91a085",
      "good name": ""
    },
    {
      "name": "Fresh Soft Blue",
      "hex": "#6ab9bb",
      "good name": ""
    },
    {
      "name": "Fresh Sprout",
      "hex": "#c7c176",
      "good name": ""
    },
    {
      "name": "Fresh Squeezed",
      "hex": "#ffad00",
      "good name": ""
    },
    {
      "name": "Fresh Start",
      "hex": "#cfd4a4",
      "good name": ""
    },
    {
      "name": "Fresh Straw",
      "hex": "#eecc66",
      "good name": ""
    },
    {
      "name": "Fresh Take",
      "hex": "#505b93",
      "good name": ""
    },
    {
      "name": "Fresh Thyme",
      "hex": "#aebda8",
      "good name": ""
    },
    {
      "name": "Fresh Tone",
      "hex": "#b2c7c0",
      "good name": ""
    },
    {
      "name": "Fresh Turquoise",
      "hex": "#40e0d0",
      "good name": ""
    },
    {
      "name": "Fresh Up",
      "hex": "#dfebb1",
      "good name": ""
    },
    {
      "name": "Fresh Water",
      "hex": "#c6e3f7",
      "good name": ""
    },
    {
      "name": "Fresh Watermelon",
      "hex": "#df9689",
      "good name": ""
    },
    {
      "name": "Fresh Willow",
      "hex": "#e1d9aa",
      "good name": ""
    },
    {
      "name": "Fresh Wood Ashes",
      "hex": "#eae6cc",
      "good name": ""
    },
    {
      "name": "Fresh Yellow",
      "hex": "#f7e190",
      "good name": ""
    },
    {
      "name": "Fresh Zest",
      "hex": "#f5e9cf",
      "good name": ""
    },
    {
      "name": "Freshly Roasted Coffee",
      "hex": "#663322",
      "good name": ""
    },
    {
      "name": "Freshman",
      "hex": "#e6f2c4",
      "good name": ""
    },
    {
      "name": "Freshmint",
      "hex": "#d9f4ea",
      "good name": ""
    },
    {
      "name": "Freshwater",
      "hex": "#4da6b2",
      "good name": ""
    },
    {
      "name": "Freshwater Marsh",
      "hex": "#535644",
      "good name": ""
    },
    {
      "name": "Fretwire",
      "hex": "#b2a490",
      "good name": ""
    },
    {
      "name": "Friar Brown",
      "hex": "#6e493a",
      "good name": ""
    },
    {
      "name": "Friar Grey",
      "hex": "#807e79",
      "good name": ""
    },
    {
      "name": "Friar Tuck",
      "hex": "#ddb994",
      "good name": ""
    },
    {
      "name": "Friar's Brown",
      "hex": "#5e5241",
      "good name": ""
    },
    {
      "name": "Fricassée",
      "hex": "#ffe6c2",
      "good name": "x"
    },
    {
      "name": "Friend Flesh",
      "hex": "#f1a4b7",
      "good name": ""
    },
    {
      "name": "Friendly Basilisk",
      "hex": "#e2f5e1",
      "good name": ""
    },
    {
      "name": "Friendly Homestead",
      "hex": "#c8a992",
      "good name": ""
    },
    {
      "name": "Friendly Yellow",
      "hex": "#f5e0b1",
      "good name": ""
    },
    {
      "name": "Friends",
      "hex": "#e8c5c1",
      "good name": ""
    },
    {
      "name": "Friendship",
      "hex": "#fed8c2",
      "good name": ""
    },
    {
      "name": "Fright Night",
      "hex": "#004499",
      "good name": ""
    },
    {
      "name": "Frijid Pink",
      "hex": "#ee77ff",
      "good name": ""
    },
    {
      "name": "Frilled Shark",
      "hex": "#939fa9",
      "good name": ""
    },
    {
      "name": "Frills",
      "hex": "#8fa6c1",
      "good name": ""
    },
    {
      "name": "Fringy Flower",
      "hex": "#b4e1bb",
      "good name": ""
    },
    {
      "name": "Frisky",
      "hex": "#ccdda1",
      "good name": ""
    },
    {
      "name": "Frisky Blue",
      "hex": "#7bb1c9",
      "good name": ""
    },
    {
      "name": "Frittata",
      "hex": "#feebc8",
      "good name": ""
    },
    {
      "name": "Frivolous Folly",
      "hex": "#cfd2c7",
      "good name": ""
    },
    {
      "name": "Frog",
      "hex": "#58bc08",
      "good name": "x"
    },
    {
      "name": "Frog Green",
      "hex": "#00693c",
      "good name": ""
    },
    {
      "name": "Frog Hollow",
      "hex": "#7da270",
      "good name": ""
    },
    {
      "name": "Frog Prince",
      "hex": "#bbd75a",
      "good name": "x"
    },
    {
      "name": "Frog's Legs",
      "hex": "#8c8449",
      "good name": ""
    },
    {
      "name": "Frogger",
      "hex": "#8cd612",
      "good name": "x"
    },
    {
      "name": "Frolic",
      "hex": "#f9e7e1",
      "good name": ""
    },
    {
      "name": "Froly",
      "hex": "#e56d75",
      "good name": ""
    },
    {
      "name": "Frond",
      "hex": "#7b7f56",
      "good name": ""
    },
    {
      "name": "Front Porch",
      "hex": "#cdccc5",
      "good name": ""
    },
    {
      "name": "Frontier",
      "hex": "#314a49",
      "good name": ""
    },
    {
      "name": "Frontier Brown",
      "hex": "#9a8172",
      "good name": ""
    },
    {
      "name": "Frontier Fort",
      "hex": "#c3b19f",
      "good name": ""
    },
    {
      "name": "Frontier Land",
      "hex": "#bca59a",
      "good name": ""
    },
    {
      "name": "Frontier Shadow",
      "hex": "#655a4a",
      "good name": ""
    },
    {
      "name": "Frontier Shingle",
      "hex": "#7b5f46",
      "good name": ""
    },
    {
      "name": "Frost",
      "hex": "#e1e4c5",
      "good name": "x"
    },
    {
      "name": "Frost Bite",
      "hex": "#f6f0e5",
      "good name": ""
    },
    {
      "name": "Frost Blue",
      "hex": "#5d9aa6",
      "good name": ""
    },
    {
      "name": "Frost Grey",
      "hex": "#848283",
      "good name": ""
    },
    {
      "name": "Frost Gum",
      "hex": "#8ecb9e",
      "good name": ""
    },
    {
      "name": "Frost Wind",
      "hex": "#daebef",
      "good name": ""
    },
    {
      "name": "Frostbite",
      "hex": "#acfffc",
      "good name": "x"
    },
    {
      "name": "Frosted Almond",
      "hex": "#d2c2ac",
      "good name": ""
    },
    {
      "name": "Frosted Blueberries",
      "hex": "#0055dd",
      "good name": "x"
    },
    {
      "name": "Frosted Cocoa",
      "hex": "#a89c91",
      "good name": ""
    },
    {
      "name": "Frosted Emerald",
      "hex": "#78b185",
      "good name": ""
    },
    {
      "name": "Frosted Fern",
      "hex": "#a7a796",
      "good name": ""
    },
    {
      "name": "Frosted Garden",
      "hex": "#e2f7d9",
      "good name": ""
    },
    {
      "name": "Frosted Glass",
      "hex": "#eaf0f0",
      "good name": ""
    },
    {
      "name": "Frosted Grape",
      "hex": "#d4c4d2",
      "good name": ""
    },
    {
      "name": "Frosted Hills",
      "hex": "#aaeeaa",
      "good name": ""
    },
    {
      "name": "Frosted Iris",
      "hex": "#b1b9d9",
      "good name": ""
    },
    {
      "name": "Frosted Jade",
      "hex": "#c2d1c4",
      "good name": ""
    },
    {
      "name": "Frosted Juniper",
      "hex": "#f0f4eb",
      "good name": ""
    },
    {
      "name": "Frosted Lemon",
      "hex": "#ffedc7",
      "good name": ""
    },
    {
      "name": "Frosted Lilac",
      "hex": "#d3d1dc",
      "good name": ""
    },
    {
      "name": "Frosted Mint",
      "hex": "#e2f2e4",
      "good name": ""
    },
    {
      "name": "Frosted Mint Hills",
      "hex": "#ccffc2",
      "good name": "x"
    },
    {
      "name": "Frosted Plains",
      "hex": "#e0ffdf",
      "good name": ""
    },
    {
      "name": "Frosted Pomegranate",
      "hex": "#ad3d46",
      "good name": ""
    },
    {
      "name": "Frosted Sage",
      "hex": "#c6d1c4",
      "good name": ""
    },
    {
      "name": "Frosted Silver",
      "hex": "#c5c9c5",
      "good name": ""
    },
    {
      "name": "Frosted Sugar",
      "hex": "#d5bcc2",
      "good name": ""
    },
    {
      "name": "Frosted Toffee",
      "hex": "#f1dbbf",
      "good name": ""
    },
    {
      "name": "Frosted Tulip",
      "hex": "#f6d8d7",
      "good name": ""
    },
    {
      "name": "Frostee",
      "hex": "#dbe5d2",
      "good name": ""
    },
    {
      "name": "Frosting Cream",
      "hex": "#fffbee",
      "good name": ""
    },
    {
      "name": "Frostini",
      "hex": "#dbf2d9",
      "good name": ""
    },
    {
      "name": "Frostproof",
      "hex": "#d1f0f6",
      "good name": ""
    },
    {
      "name": "Frostwork",
      "hex": "#eff1e3",
      "good name": ""
    },
    {
      "name": "Frosty Dawn",
      "hex": "#cbe9c9",
      "good name": ""
    },
    {
      "name": "Frosty Day",
      "hex": "#ccebf5",
      "good name": ""
    },
    {
      "name": "Frosty Fog",
      "hex": "#dee1e9",
      "good name": ""
    },
    {
      "name": "Frosty Glade",
      "hex": "#a0c0bf",
      "good name": ""
    },
    {
      "name": "Frosty Green",
      "hex": "#a3b5a6",
      "good name": ""
    },
    {
      "name": "Frosty Mint",
      "hex": "#e2f7f1",
      "good name": ""
    },
    {
      "name": "Frosty Morning",
      "hex": "#efe8e8",
      "good name": ""
    },
    {
      "name": "Frosty Pine",
      "hex": "#c7cfbe",
      "good name": ""
    },
    {
      "name": "Frosty Soft Blue",
      "hex": "#b4e0de",
      "good name": ""
    },
    {
      "name": "Frosty Spruce",
      "hex": "#578270",
      "good name": ""
    },
    {
      "name": "Frosty White",
      "hex": "#ddddd6",
      "good name": ""
    },
    {
      "name": "Frosty White Blue",
      "hex": "#cce9e4",
      "good name": ""
    },
    {
      "name": "Froth",
      "hex": "#c6b8ae",
      "good name": ""
    },
    {
      "name": "Frothy Milk",
      "hex": "#faede6",
      "good name": "x"
    },
    {
      "name": "Frothy Surf",
      "hex": "#e7ebe6",
      "good name": ""
    },
    {
      "name": "Frozen Banana",
      "hex": "#fbf5d6",
      "good name": ""
    },
    {
      "name": "Frozen Blue",
      "hex": "#a5c5d9",
      "good name": ""
    },
    {
      "name": "Frozen Boubble",
      "hex": "#00eedd",
      "good name": "x"
    },
    {
      "name": "Frozen Civilization",
      "hex": "#e1f5e5",
      "good name": "x"
    },
    {
      "name": "Frozen Custard",
      "hex": "#fbeabd",
      "good name": ""
    },
    {
      "name": "Frozen Dew",
      "hex": "#d8cfb2",
      "good name": ""
    },
    {
      "name": "Frozen Edamame",
      "hex": "#9ca48a",
      "good name": ""
    },
    {
      "name": "Frozen Forest",
      "hex": "#cfe8b6",
      "good name": "x"
    },
    {
      "name": "Frozen Frappe",
      "hex": "#ddc5d2",
      "good name": ""
    },
    {
      "name": "Frozen Fruit",
      "hex": "#e1ca99",
      "good name": ""
    },
    {
      "name": "Frozen Grass",
      "hex": "#deeadc",
      "good name": ""
    },
    {
      "name": "Frozen Lake",
      "hex": "#7b9cb3",
      "good name": ""
    },
    {
      "name": "Frozen Landscape",
      "hex": "#aee4ff",
      "good name": "x"
    },
    {
      "name": "Frozen Mammoth",
      "hex": "#dfd9da",
      "good name": "x"
    },
    {
      "name": "Frozen Margarita",
      "hex": "#dbe2cc",
      "good name": ""
    },
    {
      "name": "Frozen Mint",
      "hex": "#d8e8e6",
      "good name": ""
    },
    {
      "name": "Frozen Moss Green",
      "hex": "#addfad",
      "good name": ""
    },
    {
      "name": "Frozen Pea",
      "hex": "#c4ead5",
      "good name": ""
    },
    {
      "name": "Frozen Periwinkle",
      "hex": "#c9d1ef",
      "good name": "x"
    },
    {
      "name": "Frozen Pond",
      "hex": "#a5b4ae",
      "good name": ""
    },
    {
      "name": "Frozen Salmon",
      "hex": "#fea993",
      "good name": "x"
    },
    {
      "name": "Frozen State",
      "hex": "#26f7fd",
      "good name": ""
    },
    {
      "name": "Frozen Statues",
      "hex": "#e1dee5",
      "good name": ""
    },
    {
      "name": "Frozen Stream",
      "hex": "#30555d",
      "good name": ""
    },
    {
      "name": "Frozen Tomato",
      "hex": "#dd5533",
      "good name": "x"
    },
    {
      "name": "Frozen Tundra",
      "hex": "#a3bfcb",
      "good name": ""
    },
    {
      "name": "Frozen Turquoise",
      "hex": "#53f6ff",
      "good name": "x"
    },
    {
      "name": "Frozen Veins",
      "hex": "#ecb3be",
      "good name": ""
    },
    {
      "name": "Frozen Wave",
      "hex": "#56acca",
      "good name": "x"
    },
    {
      "name": "Frugal",
      "hex": "#a5d7b2",
      "good name": ""
    },
    {
      "name": "Fruit Bowl",
      "hex": "#fdc9d0",
      "good name": ""
    },
    {
      "name": "Fruit Cocktail",
      "hex": "#d08995",
      "good name": ""
    },
    {
      "name": "Fruit Dove",
      "hex": "#ce5b78",
      "good name": ""
    },
    {
      "name": "Fruit Of Passion",
      "hex": "#946985",
      "good name": ""
    },
    {
      "name": "Fruit Red",
      "hex": "#fa8970",
      "good name": ""
    },
    {
      "name": "Fruit Salad",
      "hex": "#4ba351",
      "good name": ""
    },
    {
      "name": "Fruit Shake",
      "hex": "#f39d8d",
      "good name": ""
    },
    {
      "name": "Fruit Yard",
      "hex": "#604241",
      "good name": ""
    },
    {
      "name": "Fruit Yellow",
      "hex": "#eac064",
      "good name": ""
    },
    {
      "name": "Fruitful Orchard",
      "hex": "#773b3e",
      "good name": ""
    },
    {
      "name": "Fruitless Fig Tree",
      "hex": "#448822",
      "good name": ""
    },
    {
      "name": "Fruity Licious",
      "hex": "#f69092",
      "good name": "x"
    },
    {
      "name": "Fuchsia",
      "hex": "#ed0dd9",
      "good name": "x"
    },
    {
      "name": "Fuchsia Berries",
      "hex": "#333322",
      "good name": ""
    },
    {
      "name": "Fuchsia Blue",
      "hex": "#7a58c1",
      "good name": ""
    },
    {
      "name": "Fuchsia Blush",
      "hex": "#e47cb8",
      "good name": ""
    },
    {
      "name": "Fuchsia Felicity",
      "hex": "#f44772",
      "good name": "x"
    },
    {
      "name": "Fuchsia Fever",
      "hex": "#ff5599",
      "good name": ""
    },
    {
      "name": "Fuchsia Flair",
      "hex": "#bb22bb",
      "good name": ""
    },
    {
      "name": "Fuchsia Flash",
      "hex": "#dd55cc",
      "good name": ""
    },
    {
      "name": "Fuchsia Flock",
      "hex": "#ab446b",
      "good name": ""
    },
    {
      "name": "Fuchsia Flourish",
      "hex": "#bb2299",
      "good name": ""
    },
    {
      "name": "Fúchsia Intenso",
      "hex": "#d800cc",
      "good name": ""
    },
    {
      "name": "Fuchsia Kiss",
      "hex": "#cb6e98",
      "good name": ""
    },
    {
      "name": "Fuchsia Nebula",
      "hex": "#7722aa",
      "good name": "x"
    },
    {
      "name": "Fuchsia Pink",
      "hex": "#ff77ff",
      "good name": ""
    },
    {
      "name": "Fuchsia Purple",
      "hex": "#d33479",
      "good name": ""
    },
    {
      "name": "Fuchsia Red",
      "hex": "#ab3475",
      "good name": ""
    },
    {
      "name": "Fuchsia Rose",
      "hex": "#c74375",
      "good name": ""
    },
    {
      "name": "Fuchsia Tint",
      "hex": "#c255c1",
      "good name": ""
    },
    {
      "name": "Fuchsite",
      "hex": "#c3d9ce",
      "good name": ""
    },
    {
      "name": "Fuchsite Green",
      "hex": "#5b7e70",
      "good name": ""
    },
    {
      "name": "Fudge",
      "hex": "#493338",
      "good name": ""
    },
    {
      "name": "Fudge Bar",
      "hex": "#997964",
      "good name": ""
    },
    {
      "name": "Fudge Truffle",
      "hex": "#604a3f",
      "good name": ""
    },
    {
      "name": "Fudgesicle",
      "hex": "#d46bac",
      "good name": ""
    },
    {
      "name": "Fuegan Orange",
      "hex": "#c77e4d",
      "good name": ""
    },
    {
      "name": "Fuego",
      "hex": "#ee5533",
      "good name": "x"
    },
    {
      "name": "Fuego Nuevo",
      "hex": "#ee6622",
      "good name": ""
    },
    {
      "name": "Fuego Verde",
      "hex": "#c2d62e",
      "good name": ""
    },
    {
      "name": "Fuel Town",
      "hex": "#596472",
      "good name": ""
    },
    {
      "name": "Fuel Yellow",
      "hex": "#d19033",
      "good name": ""
    },
    {
      "name": "Fugitive Flamingo",
      "hex": "#ee66aa",
      "good name": "x"
    },
    {
      "name": "Fuji Peak",
      "hex": "#f6eee2",
      "good name": "x"
    },
    {
      "name": "Fuji Purple",
      "hex": "#89729e",
      "good name": ""
    },
    {
      "name": "Fuji Snow",
      "hex": "#f1efe8",
      "good name": ""
    },
    {
      "name": "Fujinezumi",
      "hex": "#766980",
      "good name": ""
    },
    {
      "name": "Fulgrim Pink",
      "hex": "#f5b3ce",
      "good name": ""
    },
    {
      "name": "Fulgurite Copper",
      "hex": "#e6b77e",
      "good name": ""
    },
    {
      "name": "Full Bloom",
      "hex": "#fbcdc3",
      "good name": ""
    },
    {
      "name": "Full City Roast",
      "hex": "#662222",
      "good name": ""
    },
    {
      "name": "Full Cream",
      "hex": "#fae4ce",
      "good name": ""
    },
    {
      "name": "Full Glass",
      "hex": "#916b77",
      "good name": ""
    },
    {
      "name": "Full Moon",
      "hex": "#f4f3e0",
      "good name": "x"
    },
    {
      "name": "Full Moon Grey",
      "hex": "#cfeae9",
      "good name": ""
    },
    {
      "name": "Full Of Life",
      "hex": "#de5f2f",
      "good name": ""
    },
    {
      "name": "Full Yellow",
      "hex": "#f9bc4f",
      "good name": ""
    },
    {
      "name": "Fully Purple",
      "hex": "#514c7e",
      "good name": ""
    },
    {
      "name": "Fulvous",
      "hex": "#e48400",
      "good name": ""
    },
    {
      "name": "Fun and Games",
      "hex": "#33789c",
      "good name": ""
    },
    {
      "name": "Fun Blue",
      "hex": "#335083",
      "good name": ""
    },
    {
      "name": "Fun Green",
      "hex": "#15633d",
      "good name": ""
    },
    {
      "name": "Fun Yellow",
      "hex": "#f7e594",
      "good name": ""
    },
    {
      "name": "Funchal Yellow",
      "hex": "#b6884d",
      "good name": ""
    },
    {
      "name": "Functional Blue",
      "hex": "#3f6086",
      "good name": ""
    },
    {
      "name": "Functional Grey",
      "hex": "#aba39a",
      "good name": ""
    },
    {
      "name": "Fundy Bay",
      "hex": "#cdd2c9",
      "good name": ""
    },
    {
      "name": "Fungal Hallucinations",
      "hex": "#cc00dd",
      "good name": ""
    },
    {
      "name": "Fungi",
      "hex": "#8f8177",
      "good name": ""
    },
    {
      "name": "Funhouse",
      "hex": "#f3d9dc",
      "good name": ""
    },
    {
      "name": "Funk",
      "hex": "#3ea380",
      "good name": ""
    },
    {
      "name": "Funki Porcini",
      "hex": "#ee9999",
      "good name": "x"
    },
    {
      "name": "Funkie Friday",
      "hex": "#4a3c4a",
      "good name": ""
    },
    {
      "name": "Funky Frog",
      "hex": "#98bd3c",
      "good name": "x"
    },
    {
      "name": "Funky Yellow",
      "hex": "#edd26f",
      "good name": ""
    },
    {
      "name": "Funnel Cloud",
      "hex": "#113366",
      "good name": ""
    },
    {
      "name": "Funny Face",
      "hex": "#edc8ce",
      "good name": ""
    },
    {
      "name": "Furious Fox",
      "hex": "#e35519",
      "good name": "x"
    },
    {
      "name": "Furious Frog",
      "hex": "#55ee00",
      "good name": "x"
    },
    {
      "name": "Furious Fuchsia",
      "hex": "#ee2277",
      "good name": "x"
    },
    {
      "name": "Furious Red",
      "hex": "#ff1100",
      "good name": "x"
    },
    {
      "name": "Furnace",
      "hex": "#dd4124",
      "good name": "x"
    },
    {
      "name": "Furry Lady",
      "hex": "#f5efeb",
      "good name": ""
    },
    {
      "name": "Furry Lion",
      "hex": "#f09338",
      "good name": "x"
    },
    {
      "name": "Fury",
      "hex": "#ff0011",
      "good name": ""
    },
    {
      "name": "Fuschia Flair",
      "hex": "#a44769",
      "good name": ""
    },
    {
      "name": "Fuscia Fizz",
      "hex": "#b56e91",
      "good name": ""
    },
    {
      "name": "Fuscous Grey",
      "hex": "#54534d",
      "good name": ""
    },
    {
      "name": "Fusilli",
      "hex": "#f1e8d6",
      "good name": "x"
    },
    {
      "name": "Fusion",
      "hex": "#b0ae26",
      "good name": ""
    },
    {
      "name": "Fusion Coral",
      "hex": "#ff8576",
      "good name": ""
    },
    {
      "name": "Fusion Red",
      "hex": "#ff6163",
      "good name": "x"
    },
    {
      "name": "Fussy Pink",
      "hex": "#e6a3b9",
      "good name": ""
    },
    {
      "name": "Futaai Indigo",
      "hex": "#614e6e",
      "good name": ""
    },
    {
      "name": "Futon",
      "hex": "#edf6db",
      "good name": "x"
    },
    {
      "name": "Future",
      "hex": "#15abbe",
      "good name": ""
    },
    {
      "name": "Future Hair",
      "hex": "#20b562",
      "good name": ""
    },
    {
      "name": "Future Vision",
      "hex": "#bcb6bc",
      "good name": ""
    },
    {
      "name": "Futuristic",
      "hex": "#998da8",
      "good name": ""
    },
    {
      "name": "Fuzzy Duckling",
      "hex": "#ffea70",
      "good name": "x"
    },
    {
      "name": "Fuzzy Navel",
      "hex": "#ffd69f",
      "good name": ""
    },
    {
      "name": "Fuzzy Peach",
      "hex": "#ffbb8f",
      "good name": ""
    },
    {
      "name": "Fuzzy Sheep",
      "hex": "#f0e9d1",
      "good name": "x"
    },
    {
      "name": "Fuzzy Unicorn",
      "hex": "#eae3db",
      "good name": ""
    },
    {
      "name": "Fuzzy Wuzzy",
      "hex": "#cc6666",
      "good name": "x"
    },
    {
      "name": "Fuzzy Wuzzy Brown",
      "hex": "#c45655",
      "good name": ""
    },
    {
      "name": "Fynbos Leaf",
      "hex": "#aeb1ac",
      "good name": ""
    },
    {
      "name": "Gable Green",
      "hex": "#2c4641",
      "good name": ""
    },
    {
      "name": "Gaboon Viper",
      "hex": "#8c6450",
      "good name": ""
    },
    {
      "name": "Gabriel's Light",
      "hex": "#dacca8",
      "good name": ""
    },
    {
      "name": "Gabriel's Torch",
      "hex": "#f8e6c6",
      "good name": ""
    },
    {
      "name": "Gadabout",
      "hex": "#ffc4ae",
      "good name": ""
    },
    {
      "name": "Gaelic Garden",
      "hex": "#a5b3ab",
      "good name": ""
    },
    {
      "name": "Gaharā Lāl",
      "hex": "#ac0c20",
      "good name": ""
    },
    {
      "name": "Gaia",
      "hex": "#d3bc9e",
      "good name": ""
    },
    {
      "name": "Gaiety",
      "hex": "#f4e4e5",
      "good name": ""
    },
    {
      "name": "Gainsboro",
      "hex": "#dcdcdc",
      "good name": ""
    },
    {
      "name": "Gala Ball",
      "hex": "#785d7a",
      "good name": ""
    },
    {
      "name": "Gala Pink",
      "hex": "#b04b63",
      "good name": ""
    },
    {
      "name": "Galactic Civilization",
      "hex": "#442288",
      "good name": "x"
    },
    {
      "name": "Galactic Emerald",
      "hex": "#0afa1e",
      "good name": ""
    },
    {
      "name": "Galactic Federation",
      "hex": "#330077",
      "good name": "x"
    },
    {
      "name": "Galactic Highway",
      "hex": "#3311bb",
      "good name": "x"
    },
    {
      "name": "Galactic Mediator",
      "hex": "#e0dfdb",
      "good name": ""
    },
    {
      "name": "Galactic Tint",
      "hex": "#c0c4c6",
      "good name": ""
    },
    {
      "name": "Galactic Wonder",
      "hex": "#442255",
      "good name": ""
    },
    {
      "name": "Galactica",
      "hex": "#c4dde2",
      "good name": ""
    },
    {
      "name": "Galago",
      "hex": "#95a69f",
      "good name": ""
    },
    {
      "name": "Galah",
      "hex": "#d28083",
      "good name": ""
    },
    {
      "name": "Galapagos",
      "hex": "#085f6d",
      "good name": ""
    },
    {
      "name": "Galapagos Green",
      "hex": "#29685f",
      "good name": ""
    },
    {
      "name": "Galaxy Blue",
      "hex": "#2a4b7c",
      "good name": "x"
    },
    {
      "name": "Galaxy Green",
      "hex": "#79afad",
      "good name": ""
    },
    {
      "name": "Gale Force",
      "hex": "#35454e",
      "good name": ""
    },
    {
      "name": "Gale of the Wind",
      "hex": "#007844",
      "good name": "x"
    },
    {
      "name": "Galenite Blue",
      "hex": "#374b52",
      "good name": ""
    },
    {
      "name": "Gallant Gold",
      "hex": "#a4763c",
      "good name": ""
    },
    {
      "name": "Gallant Green",
      "hex": "#99aa66",
      "good name": "x"
    },
    {
      "name": "Galleon Blue",
      "hex": "#3f95bf",
      "good name": ""
    },
    {
      "name": "Gallery",
      "hex": "#dcd7d1",
      "good name": ""
    },
    {
      "name": "Gallery Blue",
      "hex": "#9bbce4",
      "good name": ""
    },
    {
      "name": "Gallery Green",
      "hex": "#88a385",
      "good name": ""
    },
    {
      "name": "Gallery Grey",
      "hex": "#c5c2be",
      "good name": ""
    },
    {
      "name": "Gallery Red",
      "hex": "#935a59",
      "good name": ""
    },
    {
      "name": "Gallery Taupe",
      "hex": "#d0c5b8",
      "good name": ""
    },
    {
      "name": "Gallery White",
      "hex": "#eaebe4",
      "good name": ""
    },
    {
      "name": "Galley Gold",
      "hex": "#d5aa5e",
      "good name": ""
    },
    {
      "name": "Galliano",
      "hex": "#d8a723",
      "good name": ""
    },
    {
      "name": "Gallstone Yellow",
      "hex": "#a36629",
      "good name": ""
    },
    {
      "name": "Galveston Tan",
      "hex": "#e8c8b8",
      "good name": ""
    },
    {
      "name": "Galway",
      "hex": "#c4ddbb",
      "good name": ""
    },
    {
      "name": "Galway Bay",
      "hex": "#95a7a4",
      "good name": ""
    },
    {
      "name": "Gamboge",
      "hex": "#e49b0f",
      "good name": ""
    },
    {
      "name": "Gamboge Brown",
      "hex": "#996600",
      "good name": ""
    },
    {
      "name": "Gamboge Yellow",
      "hex": "#e6d058",
      "good name": ""
    },
    {
      "name": "Gambol Gold",
      "hex": "#e1b047",
      "good name": ""
    },
    {
      "name": "Game Over",
      "hex": "#7e8181",
      "good name": ""
    },
    {
      "name": "Gameboy Contrast",
      "hex": "#0f380f",
      "good name": ""
    },
    {
      "name": "Gameboy Light",
      "hex": "#9bbc0f",
      "good name": ""
    },
    {
      "name": "Gameboy Screen",
      "hex": "#8bac0f",
      "good name": "x"
    },
    {
      "name": "Gameboy Shade",
      "hex": "#306230",
      "good name": ""
    },
    {
      "name": "Gamin",
      "hex": "#bfd1af",
      "good name": ""
    },
    {
      "name": "Gǎn Lǎn Huáng Olive",
      "hex": "#c9ff27",
      "good name": ""
    },
    {
      "name": "Gǎn Lǎn Lǜ Green",
      "hex": "#658b38",
      "good name": ""
    },
    {
      "name": "Ganache",
      "hex": "#34292a",
      "good name": ""
    },
    {
      "name": "Gangsters Gold",
      "hex": "#ffdd22",
      "good name": "x"
    },
    {
      "name": "Ganon Blue",
      "hex": "#a4e4fc",
      "good name": ""
    },
    {
      "name": "Ganymede",
      "hex": "#8b7d82",
      "good name": ""
    },
    {
      "name": "Garbanzo Bean",
      "hex": "#f1d5a5",
      "good name": ""
    },
    {
      "name": "Garbanzo Paste",
      "hex": "#eec684",
      "good name": ""
    },
    {
      "name": "Garden Aroma",
      "hex": "#9c6989",
      "good name": ""
    },
    {
      "name": "Garden Country",
      "hex": "#d5c5a8",
      "good name": ""
    },
    {
      "name": "Garden Cucumber",
      "hex": "#506a48",
      "good name": ""
    },
    {
      "name": "Garden Dawn",
      "hex": "#f1f8ec",
      "good name": ""
    },
    {
      "name": "Garden Fairy",
      "hex": "#ccd4ec",
      "good name": ""
    },
    {
      "name": "Garden Flower",
      "hex": "#a892a8",
      "good name": ""
    },
    {
      "name": "Garden Fountain",
      "hex": "#729588",
      "good name": ""
    },
    {
      "name": "Garden Gate",
      "hex": "#dadcc1",
      "good name": ""
    },
    {
      "name": "Garden Gazebo",
      "hex": "#abc0bb",
      "good name": ""
    },
    {
      "name": "Garden Glade",
      "hex": "#dcd8a8",
      "good name": ""
    },
    {
      "name": "Garden Glory",
      "hex": "#ffc1d0",
      "good name": ""
    },
    {
      "name": "Garden Glow",
      "hex": "#7dcc98",
      "good name": ""
    },
    {
      "name": "Garden Gnome Red",
      "hex": "#9b2002",
      "good name": ""
    },
    {
      "name": "Garden Goddess",
      "hex": "#99cea0",
      "good name": "x"
    },
    {
      "name": "Garden Green",
      "hex": "#495e35",
      "good name": ""
    },
    {
      "name": "Garden Greenery",
      "hex": "#658369",
      "good name": ""
    },
    {
      "name": "Garden Grove",
      "hex": "#5e7f57",
      "good name": ""
    },
    {
      "name": "Garden Hedge",
      "hex": "#6f7d6d",
      "good name": ""
    },
    {
      "name": "Garden Lattice",
      "hex": "#e1d4b4",
      "good name": ""
    },
    {
      "name": "Garden Lettuce Green",
      "hex": "#87762b",
      "good name": ""
    },
    {
      "name": "Garden Medley",
      "hex": "#28a873",
      "good name": ""
    },
    {
      "name": "Garden of Eden",
      "hex": "#7fa771",
      "good name": ""
    },
    {
      "name": "Garden Pansy",
      "hex": "#a890b8",
      "good name": ""
    },
    {
      "name": "Garden Party",
      "hex": "#e3a4b8",
      "good name": ""
    },
    {
      "name": "Garden Path",
      "hex": "#424330",
      "good name": ""
    },
    {
      "name": "Garden Pebble",
      "hex": "#e4e4d5",
      "good name": ""
    },
    {
      "name": "Garden Picket",
      "hex": "#e4d195",
      "good name": ""
    },
    {
      "name": "Garden Plum",
      "hex": "#9d8292",
      "good name": ""
    },
    {
      "name": "Garden Pond",
      "hex": "#afc09e",
      "good name": ""
    },
    {
      "name": "Garden Promenade",
      "hex": "#a4a99b",
      "good name": ""
    },
    {
      "name": "Garden Room",
      "hex": "#accfa9",
      "good name": ""
    },
    {
      "name": "Garden Rose White",
      "hex": "#f7ead4",
      "good name": ""
    },
    {
      "name": "Garden Salt Green",
      "hex": "#a18b62",
      "good name": ""
    },
    {
      "name": "Garden Seat",
      "hex": "#ebe6c7",
      "good name": ""
    },
    {
      "name": "Garden Shadow",
      "hex": "#334400",
      "good name": ""
    },
    {
      "name": "Garden Shed",
      "hex": "#d6efda",
      "good name": ""
    },
    {
      "name": "Garden Snail",
      "hex": "#cdb1ab",
      "good name": "x"
    },
    {
      "name": "Garden Spot",
      "hex": "#b1ca95",
      "good name": ""
    },
    {
      "name": "Garden Sprout",
      "hex": "#ab863a",
      "good name": ""
    },
    {
      "name": "Garden Statue",
      "hex": "#bfd4c4",
      "good name": ""
    },
    {
      "name": "Garden Stroll",
      "hex": "#7dc683",
      "good name": ""
    },
    {
      "name": "Garden Swing",
      "hex": "#8cbd97",
      "good name": ""
    },
    {
      "name": "Garden Topiary",
      "hex": "#3e524b",
      "good name": ""
    },
    {
      "name": "Garden Twilight",
      "hex": "#a3bbb3",
      "good name": ""
    },
    {
      "name": "Garden View",
      "hex": "#89b89a",
      "good name": ""
    },
    {
      "name": "Garden Vista",
      "hex": "#9fb1ab",
      "good name": ""
    },
    {
      "name": "Garden Wall",
      "hex": "#aea492",
      "good name": ""
    },
    {
      "name": "Garden Weed",
      "hex": "#786e38",
      "good name": "x"
    },
    {
      "name": "Gardener Green",
      "hex": "#5e602a",
      "good name": ""
    },
    {
      "name": "Gardener's Soil",
      "hex": "#5c534d",
      "good name": ""
    },
    {
      "name": "Gardenia",
      "hex": "#f1e8df",
      "good name": ""
    },
    {
      "name": "Gardening",
      "hex": "#acba8d",
      "good name": ""
    },
    {
      "name": "Gardens Sericourt",
      "hex": "#337700",
      "good name": ""
    },
    {
      "name": "Garfield",
      "hex": "#a75429",
      "good name": "x"
    },
    {
      "name": "Gargantua",
      "hex": "#eeee55",
      "good name": ""
    },
    {
      "name": "Gargoyle",
      "hex": "#abb39e",
      "good name": "x"
    },
    {
      "name": "Gargoyle Gas",
      "hex": "#ffdf46",
      "good name": ""
    },
    {
      "name": "Garish Blue",
      "hex": "#00a4b1",
      "good name": ""
    },
    {
      "name": "Garish Green",
      "hex": "#51bf8a",
      "good name": ""
    },
    {
      "name": "Garland",
      "hex": "#69887b",
      "good name": ""
    },
    {
      "name": "Garlic Beige",
      "hex": "#b0aaa1",
      "good name": ""
    },
    {
      "name": "Garlic Clove",
      "hex": "#e2d7c1",
      "good name": "x"
    },
    {
      "name": "Garlic Pesto",
      "hex": "#bfcf00",
      "good name": ""
    },
    {
      "name": "Garlic Suede",
      "hex": "#cdd2bc",
      "good name": ""
    },
    {
      "name": "Garlic Toast",
      "hex": "#dddd88",
      "good name": "x"
    },
    {
      "name": "Garnet",
      "hex": "#733635",
      "good name": ""
    },
    {
      "name": "Garnet Black Green",
      "hex": "#354a41",
      "good name": ""
    },
    {
      "name": "Garnet Evening",
      "hex": "#763b42",
      "good name": ""
    },
    {
      "name": "Garnet Rose",
      "hex": "#ac4b55",
      "good name": ""
    },
    {
      "name": "Garnet Sand",
      "hex": "#cc7446",
      "good name": ""
    },
    {
      "name": "Garnet Shadow",
      "hex": "#c89095",
      "good name": ""
    },
    {
      "name": "Garnet Stone Blue",
      "hex": "#384866",
      "good name": ""
    },
    {
      "name": "Garnish",
      "hex": "#1e9752",
      "good name": ""
    },
    {
      "name": "Garret Brown",
      "hex": "#756861",
      "good name": ""
    },
    {
      "name": "Garrison Grey",
      "hex": "#7b8588",
      "good name": ""
    },
    {
      "name": "Garuda Gold",
      "hex": "#ffbb31",
      "good name": ""
    },
    {
      "name": "Gas Giant",
      "hex": "#98dcff",
      "good name": ""
    },
    {
      "name": "Gaslight",
      "hex": "#feffea",
      "good name": ""
    },
    {
      "name": "Gates of Gold",
      "hex": "#d2935d",
      "good name": ""
    },
    {
      "name": "Gateway Grey",
      "hex": "#a0a09c",
      "good name": "x"
    },
    {
      "name": "Gateway Pillar",
      "hex": "#b2ac9c",
      "good name": ""
    },
    {
      "name": "Gathering Field",
      "hex": "#ab8f55",
      "good name": ""
    },
    {
      "name": "Gathering Place",
      "hex": "#ad9466",
      "good name": ""
    },
    {
      "name": "Gatsby Brick",
      "hex": "#8e3b2f",
      "good name": ""
    },
    {
      "name": "Gatsby Glitter",
      "hex": "#eed683",
      "good name": "x"
    },
    {
      "name": "Gauntlet Grey",
      "hex": "#78736e",
      "good name": "x"
    },
    {
      "name": "Gauss Blaster Green",
      "hex": "#84c3aa",
      "good name": ""
    },
    {
      "name": "Gauzy White",
      "hex": "#e3dbd4",
      "good name": ""
    },
    {
      "name": "Gazebo Green",
      "hex": "#76826c",
      "good name": ""
    },
    {
      "name": "Gazebo Grey",
      "hex": "#d1d0cb",
      "good name": ""
    },
    {
      "name": "Gazelle",
      "hex": "#947e68",
      "good name": "x"
    },
    {
      "name": "Gazpacho",
      "hex": "#c23b22",
      "good name": ""
    },
    {
      "name": "Gecko",
      "hex": "#9d913c",
      "good name": "x"
    },
    {
      "name": "Gecko's Dream",
      "hex": "#669900",
      "good name": "x"
    },
    {
      "name": "Gédéon Brown",
      "hex": "#7f5f00",
      "good name": "x"
    },
    {
      "name": "Gedney Green",
      "hex": "#40534e",
      "good name": ""
    },
    {
      "name": "Geebung",
      "hex": "#c5832e",
      "good name": ""
    },
    {
      "name": "Gehenna's Gold",
      "hex": "#dba674",
      "good name": ""
    },
    {
      "name": "Geisha Pink",
      "hex": "#dd44ff",
      "good name": ""
    },
    {
      "name": "Gellibrand",
      "hex": "#b5acb2",
      "good name": ""
    },
    {
      "name": "Gem",
      "hex": "#4d5b8a",
      "good name": ""
    },
    {
      "name": "Gem Silica",
      "hex": "#73c4a4",
      "good name": ""
    },
    {
      "name": "Gem Turquoise",
      "hex": "#53c2c3",
      "good name": ""
    },
    {
      "name": "Gemstone Blue",
      "hex": "#004f6d",
      "good name": ""
    },
    {
      "name": "Gemstone Green",
      "hex": "#4b6331",
      "good name": ""
    },
    {
      "name": "Generic Viridian",
      "hex": "#007f66",
      "good name": ""
    },
    {
      "name": "Genestealer Purple",
      "hex": "#7761ab",
      "good name": ""
    },
    {
      "name": "Genetic Code",
      "hex": "#18515d",
      "good name": ""
    },
    {
      "name": "Geneva Green",
      "hex": "#1f7f76",
      "good name": ""
    },
    {
      "name": "Geneva Morn",
      "hex": "#bab7b8",
      "good name": ""
    },
    {
      "name": "Genever Green",
      "hex": "#33673f",
      "good name": ""
    },
    {
      "name": "Genevieve",
      "hex": "#bcc4e0",
      "good name": ""
    },
    {
      "name": "Gengiana",
      "hex": "#5f4871",
      "good name": ""
    },
    {
      "name": "Genie",
      "hex": "#3e4364",
      "good name": "x"
    },
    {
      "name": "Genoa",
      "hex": "#31796d",
      "good name": ""
    },
    {
      "name": "Genoa Lemon",
      "hex": "#fde910",
      "good name": ""
    },
    {
      "name": "Genteel Blue",
      "hex": "#698eb3",
      "good name": ""
    },
    {
      "name": "Genteel Lavender",
      "hex": "#e2e6ec",
      "good name": ""
    },
    {
      "name": "Gentian",
      "hex": "#9079ad",
      "good name": ""
    },
    {
      "name": "Gentian Blue",
      "hex": "#312297",
      "good name": "x"
    },
    {
      "name": "Gentian Flower",
      "hex": "#3366ff",
      "good name": ""
    },
    {
      "name": "Gentian Violet",
      "hex": "#544275",
      "good name": ""
    },
    {
      "name": "Gentle Aquamarine",
      "hex": "#97cbd2",
      "good name": ""
    },
    {
      "name": "Gentle Blue",
      "hex": "#cdd2de",
      "good name": ""
    },
    {
      "name": "Gentle Calm",
      "hex": "#c4cebf",
      "good name": ""
    },
    {
      "name": "Gentle Caress",
      "hex": "#fcd7ba",
      "good name": "x"
    },
    {
      "name": "Gentle Cold",
      "hex": "#c3ece9",
      "good name": "x"
    },
    {
      "name": "Gentle Doe",
      "hex": "#e8b793",
      "good name": ""
    },
    {
      "name": "Gentle Frost",
      "hex": "#dce0cd",
      "good name": "x"
    },
    {
      "name": "Gentle Giant",
      "hex": "#b3ebe0",
      "good name": ""
    },
    {
      "name": "Gentle Glow",
      "hex": "#f6e5b9",
      "good name": "x"
    },
    {
      "name": "Gentle Grape",
      "hex": "#908a9b",
      "good name": ""
    },
    {
      "name": "Gentle Mauve",
      "hex": "#958c9e",
      "good name": ""
    },
    {
      "name": "Gentle Rain",
      "hex": "#cbc9c5",
      "good name": ""
    },
    {
      "name": "Gentle Sea",
      "hex": "#b0c8d0",
      "good name": ""
    },
    {
      "name": "Gentle Sky",
      "hex": "#99bdd2",
      "good name": ""
    },
    {
      "name": "Gentle Touch",
      "hex": "#e3d5b8",
      "good name": ""
    },
    {
      "name": "Gentle Yellow",
      "hex": "#fff5be",
      "good name": ""
    },
    {
      "name": "Gentleman's Suit",
      "hex": "#c1becd",
      "good name": ""
    },
    {
      "name": "Geode",
      "hex": "#4b3f69",
      "good name": ""
    },
    {
      "name": "Georgia Clay",
      "hex": "#b06144",
      "good name": ""
    },
    {
      "name": "Georgia On My Mind",
      "hex": "#fdd4c5",
      "good name": ""
    },
    {
      "name": "Georgia Peach",
      "hex": "#f97272",
      "good name": "x"
    },
    {
      "name": "Georgian Bay",
      "hex": "#22657f",
      "good name": ""
    },
    {
      "name": "Georgian Leather",
      "hex": "#cf875e",
      "good name": ""
    },
    {
      "name": "Georgian Pink",
      "hex": "#c6b8b4",
      "good name": ""
    },
    {
      "name": "Georgian Revival Blue",
      "hex": "#5b8d9f",
      "good name": ""
    },
    {
      "name": "Georgian Yellow",
      "hex": "#d1974c",
      "good name": ""
    },
    {
      "name": "Geraldine",
      "hex": "#e77b75",
      "good name": ""
    },
    {
      "name": "Geranium",
      "hex": "#da3d58",
      "good name": ""
    },
    {
      "name": "Geranium Bud",
      "hex": "#cfa1c7",
      "good name": ""
    },
    {
      "name": "Geranium Leaf",
      "hex": "#90ac74",
      "good name": ""
    },
    {
      "name": "Geranium Pink",
      "hex": "#f6909d",
      "good name": ""
    },
    {
      "name": "Geranium Red",
      "hex": "#d76968",
      "good name": ""
    },
    {
      "name": "Gerbera Red",
      "hex": "#f6611a",
      "good name": ""
    },
    {
      "name": "German Camouflage Beige",
      "hex": "#9b8c7b",
      "good name": ""
    },
    {
      "name": "German Grey",
      "hex": "#53504e",
      "good name": ""
    },
    {
      "name": "German Hop",
      "hex": "#89ac27",
      "good name": "x"
    },
    {
      "name": "German Liquorice",
      "hex": "#2e3749",
      "good name": ""
    },
    {
      "name": "German Mustard",
      "hex": "#cd7a00",
      "good name": ""
    },
    {
      "name": "Germander Speedwell",
      "hex": "#0094c8",
      "good name": ""
    },
    {
      "name": "Germania",
      "hex": "#ddc47e",
      "good name": ""
    },
    {
      "name": "Get Up and Go",
      "hex": "#1a9d49",
      "good name": ""
    },
    {
      "name": "Getting Wet",
      "hex": "#c3dae3",
      "good name": "x"
    },
    {
      "name": "Gettysburg Grey",
      "hex": "#c7c1b7",
      "good name": ""
    },
    {
      "name": "Geyser",
      "hex": "#c4d7cf",
      "good name": ""
    },
    {
      "name": "Geyser Basin",
      "hex": "#e3cab5",
      "good name": ""
    },
    {
      "name": "Geyser Steam",
      "hex": "#cbd0cf",
      "good name": ""
    },
    {
      "name": "Ghee Yellow",
      "hex": "#d8bc23",
      "good name": ""
    },
    {
      "name": "Ghost",
      "hex": "#c0bfc7",
      "good name": "x"
    },
    {
      "name": "Ghost Grey",
      "hex": "#9c9b98",
      "good name": ""
    },
    {
      "name": "Ghost Pepper",
      "hex": "#c10102",
      "good name": "x"
    },
    {
      "name": "Ghost Ship",
      "hex": "#887b6e",
      "good name": ""
    },
    {
      "name": "Ghost Town",
      "hex": "#beb6a8",
      "good name": ""
    },
    {
      "name": "Ghost Whisperer",
      "hex": "#cbd1d0",
      "good name": "x"
    },
    {
      "name": "Ghost White",
      "hex": "#f8f8ff",
      "good name": "x"
    },
    {
      "name": "Ghost Writer",
      "hex": "#bcb7ad",
      "good name": ""
    },
    {
      "name": "Ghosted",
      "hex": "#e2e0dc",
      "good name": ""
    },
    {
      "name": "Ghosting",
      "hex": "#cac6ba",
      "good name": ""
    },
    {
      "name": "Ghostlands Coal",
      "hex": "#113c42",
      "good name": ""
    },
    {
      "name": "Ghostly",
      "hex": "#a7a09f",
      "good name": ""
    },
    {
      "name": "Ghostly Green",
      "hex": "#d9d7b8",
      "good name": ""
    },
    {
      "name": "Ghostly Grey",
      "hex": "#ccccd3",
      "good name": ""
    },
    {
      "name": "Ghostly Purple",
      "hex": "#7b5d92",
      "good name": ""
    },
    {
      "name": "Ghostwaver",
      "hex": "#e2dbdb",
      "good name": ""
    },
    {
      "name": "Ghoul",
      "hex": "#667744",
      "good name": "x"
    },
    {
      "name": "Giant Cactus Green",
      "hex": "#88763f",
      "good name": ""
    },
    {
      "name": "Giant Onion",
      "hex": "#665d9e",
      "good name": ""
    },
    {
      "name": "Giant's Club",
      "hex": "#b05c52",
      "good name": ""
    },
    {
      "name": "Giants Orange",
      "hex": "#fe5a1d",
      "good name": ""
    },
    {
      "name": "Gibraltar",
      "hex": "#626970",
      "good name": ""
    },
    {
      "name": "Gibraltar Grey",
      "hex": "#6f6a68",
      "good name": ""
    },
    {
      "name": "Gibraltar Sea",
      "hex": "#123850",
      "good name": ""
    },
    {
      "name": "Gigas",
      "hex": "#564786",
      "good name": ""
    },
    {
      "name": "Giggle",
      "hex": "#eff0d3",
      "good name": "x"
    },
    {
      "name": "Gilded",
      "hex": "#f4db4f",
      "good name": ""
    },
    {
      "name": "Gilded Beige",
      "hex": "#b39f8d",
      "good name": ""
    },
    {
      "name": "Gilded Glamour",
      "hex": "#956841",
      "good name": ""
    },
    {
      "name": "Gilded Leaves",
      "hex": "#eba13c",
      "good name": ""
    },
    {
      "name": "Gilded Pear",
      "hex": "#c09e6c",
      "good name": ""
    },
    {
      "name": "Gilneas Grey",
      "hex": "#6c8396",
      "good name": ""
    },
    {
      "name": "Gimblet",
      "hex": "#b9ad61",
      "good name": ""
    },
    {
      "name": "Gin",
      "hex": "#d9dfcd",
      "good name": "x"
    },
    {
      "name": "Gin Fizz",
      "hex": "#f8eaca",
      "good name": "x"
    },
    {
      "name": "Gin Tonic",
      "hex": "#ecebe5",
      "good name": "x"
    },
    {
      "name": "Ginger",
      "hex": "#b06500",
      "good name": "x"
    },
    {
      "name": "Ginger Ale",
      "hex": "#c9a86a",
      "good name": "x"
    },
    {
      "name": "Ginger Ale Fizz",
      "hex": "#f5dfbc",
      "good name": ""
    },
    {
      "name": "Ginger Beer",
      "hex": "#c27f38",
      "good name": "x"
    },
    {
      "name": "Ginger Cream",
      "hex": "#efe0d7",
      "good name": ""
    },
    {
      "name": "Ginger Crunch",
      "hex": "#ceaa64",
      "good name": ""
    },
    {
      "name": "Ginger Dough",
      "hex": "#b06d3b",
      "good name": "x"
    },
    {
      "name": "Ginger Dy",
      "hex": "#97653c",
      "good name": ""
    },
    {
      "name": "Ginger Flower",
      "hex": "#cf524e",
      "good name": ""
    },
    {
      "name": "Ginger Grey Yellow",
      "hex": "#b8a899",
      "good name": ""
    },
    {
      "name": "Ginger Jar",
      "hex": "#c6a05e",
      "good name": ""
    },
    {
      "name": "Ginger Lemon Tea",
      "hex": "#ffffaa",
      "good name": ""
    },
    {
      "name": "Ginger Milk",
      "hex": "#f7a454",
      "good name": ""
    },
    {
      "name": "Ginger Peach",
      "hex": "#f9d09f",
      "good name": ""
    },
    {
      "name": "Ginger Pie",
      "hex": "#9a7d61",
      "good name": ""
    },
    {
      "name": "Ginger Root",
      "hex": "#c17444",
      "good name": ""
    },
    {
      "name": "Ginger Root Peel",
      "hex": "#f0c48c",
      "good name": ""
    },
    {
      "name": "Ginger Rose",
      "hex": "#be8774",
      "good name": ""
    },
    {
      "name": "Ginger Shortbread",
      "hex": "#e3cec6",
      "good name": ""
    },
    {
      "name": "Ginger Snap",
      "hex": "#977d70",
      "good name": ""
    },
    {
      "name": "Ginger Spice",
      "hex": "#b65d48",
      "good name": ""
    },
    {
      "name": "Ginger Sugar",
      "hex": "#dddace",
      "good name": ""
    },
    {
      "name": "Ginger Tea",
      "hex": "#b19d77",
      "good name": ""
    },
    {
      "name": "Ginger Whisper",
      "hex": "#cc8877",
      "good name": ""
    },
    {
      "name": "Gingerbread",
      "hex": "#8c4a2f",
      "good name": "x"
    },
    {
      "name": "Gingerbread Crumble",
      "hex": "#9c5e33",
      "good name": "x"
    },
    {
      "name": "Gingerbread House",
      "hex": "#ca994e",
      "good name": "x"
    },
    {
      "name": "Gingerbread Latte",
      "hex": "#b39479",
      "good name": ""
    },
    {
      "name": "Gingerline",
      "hex": "#ffdd11",
      "good name": ""
    },
    {
      "name": "Gingersnap",
      "hex": "#c79e73",
      "good name": ""
    },
    {
      "name": "Gingery",
      "hex": "#b06c3e",
      "good name": ""
    },
    {
      "name": "Gingko",
      "hex": "#a3c899",
      "good name": ""
    },
    {
      "name": "Gingko Tree",
      "hex": "#918260",
      "good name": ""
    },
    {
      "name": "Ginkgo Green",
      "hex": "#a5aca4",
      "good name": ""
    },
    {
      "name": "Ginnezumi",
      "hex": "#97867c",
      "good name": ""
    },
    {
      "name": "Ginninderra",
      "hex": "#b3d5c0",
      "good name": ""
    },
    {
      "name": "Ginseng Root",
      "hex": "#e6cdb5",
      "good name": ""
    },
    {
      "name": "Ginshu",
      "hex": "#bc2d29",
      "good name": ""
    },
    {
      "name": "Gio Ponti Green",
      "hex": "#b3ceab",
      "good name": ""
    },
    {
      "name": "Giraffe",
      "hex": "#fefe33",
      "good name": "x"
    },
    {
      "name": "Girl Power",
      "hex": "#d39bcb",
      "good name": "x"
    },
    {
      "name": "Girl Talk",
      "hex": "#e4c7c8",
      "good name": ""
    },
    {
      "name": "Girlie",
      "hex": "#ffd3cf",
      "good name": "x"
    },
    {
      "name": "Girls Night Out",
      "hex": "#ff69b4",
      "good name": ""
    },
    {
      "name": "Girly Nursery",
      "hex": "#f6e6e5",
      "good name": ""
    },
    {
      "name": "Give Me Your Love",
      "hex": "#ee88ff",
      "good name": ""
    },
    {
      "name": "Givry",
      "hex": "#ebd4ae",
      "good name": ""
    },
    {
      "name": "Gizmo",
      "hex": "#d4a1b5",
      "good name": ""
    },
    {
      "name": "Glacial Green",
      "hex": "#6fb7a8",
      "good name": ""
    },
    {
      "name": "Glacial Ice",
      "hex": "#eae9e7",
      "good name": "x"
    },
    {
      "name": "Glacial Stream",
      "hex": "#bcd8e2",
      "good name": ""
    },
    {
      "name": "Glacial Tint",
      "hex": "#eaf2ed",
      "good name": ""
    },
    {
      "name": "Glacial Water Green",
      "hex": "#c9ead4",
      "good name": ""
    },
    {
      "name": "Glacier",
      "hex": "#78b1bf",
      "good name": "x"
    },
    {
      "name": "Glacier Bay",
      "hex": "#def2ee",
      "good name": ""
    },
    {
      "name": "Glacier Blue",
      "hex": "#a9c1c0",
      "good name": ""
    },
    {
      "name": "Glacier Green",
      "hex": "#3e9eac",
      "good name": ""
    },
    {
      "name": "Glacier Grey",
      "hex": "#c5c6c7",
      "good name": ""
    },
    {
      "name": "Glacier Ivy",
      "hex": "#eaf3e6",
      "good name": ""
    },
    {
      "name": "Glacier Lake",
      "hex": "#62b4c0",
      "good name": ""
    },
    {
      "name": "Glacier Pearl",
      "hex": "#d1d2dc",
      "good name": ""
    },
    {
      "name": "Glacier Point",
      "hex": "#b3d8e5",
      "good name": ""
    },
    {
      "name": "Glacier Valley",
      "hex": "#e2e3d7",
      "good name": ""
    },
    {
      "name": "Glad Yellow",
      "hex": "#f5e1ac",
      "good name": ""
    },
    {
      "name": "Glade",
      "hex": "#9ca687",
      "good name": ""
    },
    {
      "name": "Glade Green",
      "hex": "#5f8151",
      "good name": ""
    },
    {
      "name": "Gladeye",
      "hex": "#7a8ca6",
      "good name": ""
    },
    {
      "name": "Gladiator Grey",
      "hex": "#6e6c5e",
      "good name": ""
    },
    {
      "name": "Gladiator Leather",
      "hex": "#a95c3e",
      "good name": ""
    },
    {
      "name": "Gladiola",
      "hex": "#d54f43",
      "good name": ""
    },
    {
      "name": "Gladiola Blue",
      "hex": "#6370b6",
      "good name": ""
    },
    {
      "name": "Gladiola Violet",
      "hex": "#6e5178",
      "good name": ""
    },
    {
      "name": "Glam",
      "hex": "#cf748c",
      "good name": ""
    },
    {
      "name": "Glamorgan Sausage",
      "hex": "#dacba7",
      "good name": ""
    },
    {
      "name": "Glamorous",
      "hex": "#b74e64",
      "good name": ""
    },
    {
      "name": "Glamorous White",
      "hex": "#f0eae0",
      "good name": ""
    },
    {
      "name": "Glamour",
      "hex": "#db9da7",
      "good name": ""
    },
    {
      "name": "Glamour Pink",
      "hex": "#ff1dcd",
      "good name": "x"
    },
    {
      "name": "Glamour White",
      "hex": "#fffcec",
      "good name": "x"
    },
    {
      "name": "Glasgow Fog",
      "hex": "#bdb8ae",
      "good name": ""
    },
    {
      "name": "Glass Bead",
      "hex": "#c7bec4",
      "good name": ""
    },
    {
      "name": "Glass Bottle",
      "hex": "#93ba59",
      "good name": ""
    },
    {
      "name": "Glass Bull",
      "hex": "#880000",
      "good name": ""
    },
    {
      "name": "Glass Green",
      "hex": "#dcdfb0",
      "good name": ""
    },
    {
      "name": "Glass Jar Blue",
      "hex": "#20b2aa",
      "good name": ""
    },
    {
      "name": "Glass Of Milk",
      "hex": "#fcf3dd",
      "good name": ""
    },
    {
      "name": "Glass Sand",
      "hex": "#cdb69b",
      "good name": ""
    },
    {
      "name": "Glass Sapphire",
      "hex": "#587b9b",
      "good name": ""
    },
    {
      "name": "Glass Sea",
      "hex": "#095d75",
      "good name": ""
    },
    {
      "name": "Glass Tile",
      "hex": "#cdd0c0",
      "good name": ""
    },
    {
      "name": "Glass Violet",
      "hex": "#b7a2cc",
      "good name": ""
    },
    {
      "name": "Glassine",
      "hex": "#d7e2e5",
      "good name": ""
    },
    {
      "name": "Glaucous",
      "hex": "#6082b6",
      "good name": ""
    },
    {
      "name": "Glaze White",
      "hex": "#eae1df",
      "good name": ""
    },
    {
      "name": "Glazed Carrot",
      "hex": "#e9692c",
      "good name": ""
    },
    {
      "name": "Glazed Chestnut",
      "hex": "#967217",
      "good name": ""
    },
    {
      "name": "Glazed Ginger",
      "hex": "#91552b",
      "good name": ""
    },
    {
      "name": "Glazed Granite",
      "hex": "#5b5e61",
      "good name": ""
    },
    {
      "name": "Glazed Pears",
      "hex": "#efe3d2",
      "good name": ""
    },
    {
      "name": "Glazed Pecan",
      "hex": "#d19564",
      "good name": ""
    },
    {
      "name": "Glazed Persimmon",
      "hex": "#d34e36",
      "good name": ""
    },
    {
      "name": "Glazed Pot",
      "hex": "#ad7356",
      "good name": ""
    },
    {
      "name": "Glazed Raspberry",
      "hex": "#a44b62",
      "good name": ""
    },
    {
      "name": "Glazed Ringlet",
      "hex": "#89626d",
      "good name": ""
    },
    {
      "name": "Glazed Sugar",
      "hex": "#ffdccc",
      "good name": "x"
    },
    {
      "name": "Gleam",
      "hex": "#bfd1ad",
      "good name": ""
    },
    {
      "name": "Gleaming Shells",
      "hex": "#f8ded1",
      "good name": ""
    },
    {
      "name": "Gleeful",
      "hex": "#9dbb7d",
      "good name": ""
    },
    {
      "name": "Glen",
      "hex": "#4aac72",
      "good name": ""
    },
    {
      "name": "Glen Falls",
      "hex": "#acb8c1",
      "good name": ""
    },
    {
      "name": "Glendale",
      "hex": "#a1bb8b",
      "good name": ""
    },
    {
      "name": "Glenwood Green",
      "hex": "#a7d3b7",
      "good name": ""
    },
    {
      "name": "Glide Time",
      "hex": "#5d6f80",
      "good name": ""
    },
    {
      "name": "Glimmer",
      "hex": "#e1e8e3",
      "good name": ""
    },
    {
      "name": "Glimpse",
      "hex": "#4fb9ce",
      "good name": ""
    },
    {
      "name": "Glimpse into Space",
      "hex": "#121210",
      "good name": "x"
    },
    {
      "name": "Glimpse of Pink",
      "hex": "#fff3f4",
      "good name": ""
    },
    {
      "name": "Glimpse of Void",
      "hex": "#335588",
      "good name": "x"
    },
    {
      "name": "Glisten Green",
      "hex": "#f2efdc",
      "good name": ""
    },
    {
      "name": "Glisten Yellow",
      "hex": "#f5e6ac",
      "good name": ""
    },
    {
      "name": "Glistening",
      "hex": "#eed288",
      "good name": ""
    },
    {
      "name": "Glistening Grey",
      "hex": "#b1b3be",
      "good name": ""
    },
    {
      "name": "Glitch",
      "hex": "#2c5463",
      "good name": ""
    },
    {
      "name": "Glitchy Shader Blue",
      "hex": "#99ffff",
      "good name": ""
    },
    {
      "name": "Glitter",
      "hex": "#e6e8fa",
      "good name": ""
    },
    {
      "name": "Glitter is not Gold",
      "hex": "#fedc57",
      "good name": "x"
    },
    {
      "name": "Glitter Lake",
      "hex": "#44bbff",
      "good name": "x"
    },
    {
      "name": "Glitter Shower",
      "hex": "#88ffff",
      "good name": "x"
    },
    {
      "name": "Glitter Yellow",
      "hex": "#f8d75a",
      "good name": ""
    },
    {
      "name": "Glitterati",
      "hex": "#944a63",
      "good name": ""
    },
    {
      "name": "Glittering Gemstone",
      "hex": "#dec0e2",
      "good name": ""
    },
    {
      "name": "Glittering Sun",
      "hex": "#d3ad77",
      "good name": ""
    },
    {
      "name": "Glittery Glow",
      "hex": "#eeeddb",
      "good name": ""
    },
    {
      "name": "Glittery Yellow",
      "hex": "#f9eecd",
      "good name": ""
    },
    {
      "name": "Glitz and Glamour",
      "hex": "#965f73",
      "good name": ""
    },
    {
      "name": "Glitzy Gold",
      "hex": "#d6a02b",
      "good name": ""
    },
    {
      "name": "Glitzy Red",
      "hex": "#af413b",
      "good name": ""
    },
    {
      "name": "Global Green",
      "hex": "#696e51",
      "good name": ""
    },
    {
      "name": "Global Warming",
      "hex": "#f1d7d3",
      "good name": ""
    },
    {
      "name": "Globe Artichoke",
      "hex": "#5f6c3c",
      "good name": ""
    },
    {
      "name": "Globe Thistle",
      "hex": "#2e0329",
      "good name": ""
    },
    {
      "name": "Globe Thistle Grey Rose",
      "hex": "#998d8d",
      "good name": ""
    },
    {
      "name": "Gloomy Blue",
      "hex": "#3c416a",
      "good name": ""
    },
    {
      "name": "Gloomy Purple",
      "hex": "#8756e4",
      "good name": ""
    },
    {
      "name": "Gloomy Sea",
      "hex": "#4a657a",
      "good name": ""
    },
    {
      "name": "Glorious Gold",
      "hex": "#cba956",
      "good name": ""
    },
    {
      "name": "Glorious Green Glitter",
      "hex": "#aaee11",
      "good name": "x"
    },
    {
      "name": "Glossy Black",
      "hex": "#110011",
      "good name": "x"
    },
    {
      "name": "Glossy Gold",
      "hex": "#ffdd77",
      "good name": ""
    },
    {
      "name": "Glossy Grape",
      "hex": "#ab92b3",
      "good name": ""
    },
    {
      "name": "Glossy Kiss",
      "hex": "#eee3de",
      "good name": ""
    },
    {
      "name": "Glossy Olive",
      "hex": "#636340",
      "good name": ""
    },
    {
      "name": "Glow",
      "hex": "#f9f2da",
      "good name": ""
    },
    {
      "name": "Glow in the Dark",
      "hex": "#befdb7",
      "good name": "x"
    },
    {
      "name": "Glow Pink",
      "hex": "#d8979e",
      "good name": ""
    },
    {
      "name": "Glow Worm",
      "hex": "#bed565",
      "good name": "x"
    },
    {
      "name": "Glowing Brake Disc",
      "hex": "#ee4444",
      "good name": ""
    },
    {
      "name": "Glowing Coals",
      "hex": "#bc4d39",
      "good name": ""
    },
    {
      "name": "Glowing Firelight",
      "hex": "#af5941",
      "good name": ""
    },
    {
      "name": "Glowing Lantern",
      "hex": "#fbb736",
      "good name": ""
    },
    {
      "name": "Glowing Meteor",
      "hex": "#ee4400",
      "good name": ""
    },
    {
      "name": "Glowing Scarlet",
      "hex": "#bd4649",
      "good name": ""
    },
    {
      "name": "Glowlight",
      "hex": "#fff6b9",
      "good name": "x"
    },
    {
      "name": "Gloxinia",
      "hex": "#622e5a",
      "good name": ""
    },
    {
      "name": "Gluon Grey",
      "hex": "#1a1b1c",
      "good name": ""
    },
    {
      "name": "Gluten",
      "hex": "#ddcc66",
      "good name": ""
    },
    {
      "name": "Gnarls Green",
      "hex": "#00754b",
      "good name": ""
    },
    {
      "name": "Gnocchi Beige",
      "hex": "#ffeebb",
      "good name": ""
    },
    {
      "name": "Gnome",
      "hex": "#81a19b",
      "good name": ""
    },
    {
      "name": "Gnome Green",
      "hex": "#c4bc84",
      "good name": ""
    },
    {
      "name": "Gnu Tan",
      "hex": "#b09f84",
      "good name": ""
    },
    {
      "name": "Go Alpha",
      "hex": "#007f87",
      "good name": ""
    },
    {
      "name": "Go Bananas",
      "hex": "#f7ca50",
      "good name": ""
    },
    {
      "name": "Go Ben",
      "hex": "#786e4c",
      "good name": ""
    },
    {
      "name": "Go Go Glow",
      "hex": "#fcecd5",
      "good name": ""
    },
    {
      "name": "Go Go Green",
      "hex": "#008a7d",
      "good name": "x"
    },
    {
      "name": "Go Go Lime",
      "hex": "#c6be6b",
      "good name": ""
    },
    {
      "name": "Go Go Mango",
      "hex": "#feb87e",
      "good name": ""
    },
    {
      "name": "Go Go Pink",
      "hex": "#fdd8d4",
      "good name": ""
    },
    {
      "name": "Go Green!",
      "hex": "#00ab66",
      "good name": ""
    },
    {
      "name": "Go To Grey",
      "hex": "#dcd8d7",
      "good name": ""
    },
    {
      "name": "Goat",
      "hex": "#a89a91",
      "good name": ""
    },
    {
      "name": "Gobelin Mauve",
      "hex": "#5e5a6a",
      "good name": ""
    },
    {
      "name": "Gobi Desert",
      "hex": "#cdbba2",
      "good name": ""
    },
    {
      "name": "Gobi Sand",
      "hex": "#d4aa6f",
      "good name": ""
    },
    {
      "name": "Gobi Tan",
      "hex": "#bba587",
      "good name": ""
    },
    {
      "name": "Goblin",
      "hex": "#34533d",
      "good name": ""
    },
    {
      "name": "Goblin Blue",
      "hex": "#5f7278",
      "good name": ""
    },
    {
      "name": "Goblin Eyes",
      "hex": "#eb8931",
      "good name": ""
    },
    {
      "name": "Goblin Green",
      "hex": "#76ff7a",
      "good name": "x"
    },
    {
      "name": "Goblin Warboss",
      "hex": "#4efd54",
      "good name": ""
    },
    {
      "name": "Gobo Brown",
      "hex": "#635147",
      "good name": ""
    },
    {
      "name": "Gochujang Red",
      "hex": "#770000",
      "good name": ""
    },
    {
      "name": "God of Nights",
      "hex": "#550066",
      "good name": ""
    },
    {
      "name": "God of Rain",
      "hex": "#4466cc",
      "good name": "x"
    },
    {
      "name": "God-Given",
      "hex": "#faf4e0",
      "good name": ""
    },
    {
      "name": "God’s Own Junkyard Pink",
      "hex": "#f56991",
      "good name": ""
    },
    {
      "name": "Goddess",
      "hex": "#d0e1e8",
      "good name": "x"
    },
    {
      "name": "Goddess Green",
      "hex": "#76ad83",
      "good name": ""
    },
    {
      "name": "Goddess of Dawn",
      "hex": "#a8d4b0",
      "good name": ""
    },
    {
      "name": "Godzilla",
      "hex": "#3c4d03",
      "good name": "x"
    },
    {
      "name": "Gogo Blue",
      "hex": "#0087a1",
      "good name": ""
    },
    {
      "name": "Going Grey",
      "hex": "#83807a",
      "good name": ""
    },
    {
      "name": "Goji Berry",
      "hex": "#b91228",
      "good name": ""
    },
    {
      "name": "Goku Orange",
      "hex": "#f0833a",
      "good name": "x"
    },
    {
      "name": "Gold",
      "hex": "#ffd700",
      "good name": "x"
    },
    {
      "name": "Gold Black",
      "hex": "#2a2424",
      "good name": ""
    },
    {
      "name": "Gold Buff",
      "hex": "#ecc481",
      "good name": ""
    },
    {
      "name": "Gold Bullion",
      "hex": "#eedd99",
      "good name": ""
    },
    {
      "name": "Gold Buttercup",
      "hex": "#ffe8bb",
      "good name": "x"
    },
    {
      "name": "Gold Canyon",
      "hex": "#ae9769",
      "good name": ""
    },
    {
      "name": "Gold Coast",
      "hex": "#c78538",
      "good name": ""
    },
    {
      "name": "Gold Crest",
      "hex": "#df9938",
      "good name": ""
    },
    {
      "name": "Gold Deposit",
      "hex": "#e0ce57",
      "good name": ""
    },
    {
      "name": "Gold Digger",
      "hex": "#d1b075",
      "good name": "x"
    },
    {
      "name": "Gold Drop",
      "hex": "#d56c30",
      "good name": ""
    },
    {
      "name": "Gold Dust",
      "hex": "#a4803f",
      "good name": ""
    },
    {
      "name": "Gold Earth",
      "hex": "#dd9c6b",
      "good name": ""
    },
    {
      "name": "Gold Estate",
      "hex": "#977a41",
      "good name": ""
    },
    {
      "name": "Gold Flame",
      "hex": "#b45422",
      "good name": ""
    },
    {
      "name": "Gold Foil",
      "hex": "#d99f4d",
      "good name": ""
    },
    {
      "name": "Gold Fusion",
      "hex": "#ffb000",
      "good name": ""
    },
    {
      "name": "Gold Gleam",
      "hex": "#cfb352",
      "good name": ""
    },
    {
      "name": "Gold Hearted",
      "hex": "#e6c28c",
      "good name": ""
    },
    {
      "name": "Gold Metal",
      "hex": "#b17743",
      "good name": ""
    },
    {
      "name": "Gold of Midas",
      "hex": "#ffeac7",
      "good name": ""
    },
    {
      "name": "Gold Orange",
      "hex": "#db7210",
      "good name": ""
    },
    {
      "name": "Gold Pheasant",
      "hex": "#c6795f",
      "good name": ""
    },
    {
      "name": "Gold Plate",
      "hex": "#e6bd8f",
      "good name": ""
    },
    {
      "name": "Gold Plated",
      "hex": "#b0834f",
      "good name": ""
    },
    {
      "name": "Gold Ransom",
      "hex": "#b39260",
      "good name": ""
    },
    {
      "name": "Gold Red",
      "hex": "#eb5406",
      "good name": ""
    },
    {
      "name": "Gold Rush",
      "hex": "#c4a777",
      "good name": "x"
    },
    {
      "name": "Gold Sand",
      "hex": "#f7e5a9",
      "good name": ""
    },
    {
      "name": "Gold Season",
      "hex": "#b19971",
      "good name": ""
    },
    {
      "name": "Gold Sparkle",
      "hex": "#786b3d",
      "good name": ""
    },
    {
      "name": "Gold Spell",
      "hex": "#c19d61",
      "good name": ""
    },
    {
      "name": "Gold Spike",
      "hex": "#907047",
      "good name": ""
    },
    {
      "name": "Gold Strand",
      "hex": "#f3dfa6",
      "good name": ""
    },
    {
      "name": "Gold Taffeta",
      "hex": "#bb9a39",
      "good name": ""
    },
    {
      "name": "Gold Tangiers",
      "hex": "#9e865e",
      "good name": ""
    },
    {
      "name": "Gold Thread",
      "hex": "#fee8b0",
      "good name": ""
    },
    {
      "name": "Gold Tips",
      "hex": "#e2b227",
      "good name": ""
    },
    {
      "name": "Gold Tooth",
      "hex": "#dbb40c",
      "good name": "x"
    },
    {
      "name": "Gold Torch",
      "hex": "#bd955e",
      "good name": ""
    },
    {
      "name": "Gold Tweed",
      "hex": "#c9ab73",
      "good name": ""
    },
    {
      "name": "Gold Varnish Brown",
      "hex": "#b95e33",
      "good name": ""
    },
    {
      "name": "Gold Vein",
      "hex": "#d6b956",
      "good name": "x"
    },
    {
      "name": "Gold Vessel",
      "hex": "#eaba8a",
      "good name": ""
    },
    {
      "name": "Gold Wash",
      "hex": "#d4c19e",
      "good name": ""
    },
    {
      "name": "Gold's Great Touch",
      "hex": "#ffc265",
      "good name": ""
    },
    {
      "name": "Goldbrown",
      "hex": "#9c8a53",
      "good name": ""
    },
    {
      "name": "Golden",
      "hex": "#f5bf03",
      "good name": ""
    },
    {
      "name": "Golden Age",
      "hex": "#ceab77",
      "good name": ""
    },
    {
      "name": "Golden Appeal",
      "hex": "#e6be59",
      "good name": ""
    },
    {
      "name": "Golden Apricot",
      "hex": "#dda758",
      "good name": ""
    },
    {
      "name": "Golden Aura",
      "hex": "#d29e68",
      "good name": ""
    },
    {
      "name": "Golden Aurelia",
      "hex": "#ffee77",
      "good name": ""
    },
    {
      "name": "Golden Banner",
      "hex": "#fcc62a",
      "good name": ""
    },
    {
      "name": "Golden Bear",
      "hex": "#ba985f",
      "good name": ""
    },
    {
      "name": "Golden Beige",
      "hex": "#cea277",
      "good name": ""
    },
    {
      "name": "Golden Bell",
      "hex": "#ca8136",
      "good name": ""
    },
    {
      "name": "Golden Beryl Yellow",
      "hex": "#d9a400",
      "good name": ""
    },
    {
      "name": "Golden Blond",
      "hex": "#ccaa55",
      "good name": ""
    },
    {
      "name": "Golden Blood",
      "hex": "#ff1155",
      "good name": "x"
    },
    {
      "name": "Golden Boy",
      "hex": "#ffdd44",
      "good name": "x"
    },
    {
      "name": "Golden Brown",
      "hex": "#b27a01",
      "good name": ""
    },
    {
      "name": "Golden Buddha Belly",
      "hex": "#ffcc22",
      "good name": ""
    },
    {
      "name": "Golden Buff",
      "hex": "#f8e6c8",
      "good name": ""
    },
    {
      "name": "Golden Cadillac",
      "hex": "#ac864b",
      "good name": ""
    },
    {
      "name": "Golden Cartridge",
      "hex": "#bdb76b",
      "good name": ""
    },
    {
      "name": "Golden Chalice",
      "hex": "#e7c068",
      "good name": ""
    },
    {
      "name": "Golden Chandelier",
      "hex": "#dddd11",
      "good name": ""
    },
    {
      "name": "Golden Coin",
      "hex": "#fcd975",
      "good name": "x"
    },
    {
      "name": "Golden Cream",
      "hex": "#f7b768",
      "good name": ""
    },
    {
      "name": "Golden Crest",
      "hex": "#f6ca69",
      "good name": ""
    },
    {
      "name": "Golden Crested Wren",
      "hex": "#ccddbb",
      "good name": ""
    },
    {
      "name": "Golden Cricket",
      "hex": "#d7b056",
      "good name": ""
    },
    {
      "name": "Golden Delicious",
      "hex": "#d2d88f",
      "good name": ""
    },
    {
      "name": "Golden Dream",
      "hex": "#f1cc2b",
      "good name": ""
    },
    {
      "name": "Golden Ecru",
      "hex": "#d8c39f",
      "good name": ""
    },
    {
      "name": "Golden Egg",
      "hex": "#b29155",
      "good name": ""
    },
    {
      "name": "Golden Elm",
      "hex": "#bdd5b1",
      "good name": ""
    },
    {
      "name": "Golden Field",
      "hex": "#c39e44",
      "good name": ""
    },
    {
      "name": "Golden Fizz",
      "hex": "#ebde31",
      "good name": ""
    },
    {
      "name": "Golden Fleece",
      "hex": "#edd9aa",
      "good name": ""
    },
    {
      "name": "Golden Fog",
      "hex": "#f0ead2",
      "good name": ""
    },
    {
      "name": "Golden Foil",
      "hex": "#cccc00",
      "good name": ""
    },
    {
      "name": "Golden Foliage",
      "hex": "#bdd043",
      "good name": ""
    },
    {
      "name": "Golden Fragrance",
      "hex": "#eeee99",
      "good name": ""
    },
    {
      "name": "Golden Frame",
      "hex": "#e2b31b",
      "good name": "x"
    },
    {
      "name": "Golden Freesia",
      "hex": "#876f4d",
      "good name": ""
    },
    {
      "name": "Golden Gate",
      "hex": "#d9c09c",
      "good name": ""
    },
    {
      "name": "Golden Gate Bridge",
      "hex": "#c0362d",
      "good name": ""
    },
    {
      "name": "Golden Ginkgo",
      "hex": "#f9f525",
      "good name": "x"
    },
    {
      "name": "Golden Glam",
      "hex": "#eebb44",
      "good name": ""
    },
    {
      "name": "Golden Glitter",
      "hex": "#fbe573",
      "good name": ""
    },
    {
      "name": "Golden Glove",
      "hex": "#9e7551",
      "good name": ""
    },
    {
      "name": "Golden Glow",
      "hex": "#f9d77e",
      "good name": ""
    },
    {
      "name": "Golden Grain",
      "hex": "#c59137",
      "good name": ""
    },
    {
      "name": "Golden Granola",
      "hex": "#b8996b",
      "good name": ""
    },
    {
      "name": "Golden Grass",
      "hex": "#daa631",
      "good name": ""
    },
    {
      "name": "Golden Green",
      "hex": "#bdb369",
      "good name": ""
    },
    {
      "name": "Golden Griffon",
      "hex": "#a99058",
      "good name": ""
    },
    {
      "name": "Golden Guernsey",
      "hex": "#e1c3bb",
      "good name": ""
    },
    {
      "name": "Golden Gun",
      "hex": "#dddd00",
      "good name": ""
    },
    {
      "name": "Golden Hamster",
      "hex": "#da9e38",
      "good name": ""
    },
    {
      "name": "Golden Handshake",
      "hex": "#ffcc44",
      "good name": ""
    },
    {
      "name": "Golden Harmony",
      "hex": "#9f8046",
      "good name": ""
    },
    {
      "name": "Golden Harvest",
      "hex": "#cccc11",
      "good name": "x"
    },
    {
      "name": "Golden Haystack",
      "hex": "#eddfc1",
      "good name": ""
    },
    {
      "name": "Golden Haze",
      "hex": "#fbd897",
      "good name": ""
    },
    {
      "name": "Golden Hermes",
      "hex": "#ffffbb",
      "good name": ""
    },
    {
      "name": "Golden Hind",
      "hex": "#a37111",
      "good name": ""
    },
    {
      "name": "Golden History",
      "hex": "#bb993a",
      "good name": ""
    },
    {
      "name": "Golden Hominy",
      "hex": "#edc283",
      "good name": ""
    },
    {
      "name": "Golden Honey Suckle",
      "hex": "#ffdb29",
      "good name": ""
    },
    {
      "name": "Golden Hop",
      "hex": "#cfdd7b",
      "good name": ""
    },
    {
      "name": "Golden Impression",
      "hex": "#ffefcb",
      "good name": ""
    },
    {
      "name": "Golden Key",
      "hex": "#dd9911",
      "good name": ""
    },
    {
      "name": "Golden Kiwi",
      "hex": "#f3dd3e",
      "good name": ""
    },
    {
      "name": "Golden Koi",
      "hex": "#eaa34b",
      "good name": ""
    },
    {
      "name": "Golden Lake",
      "hex": "#d8c7a2",
      "good name": ""
    },
    {
      "name": "Golden Leaf",
      "hex": "#c48b42",
      "good name": ""
    },
    {
      "name": "Golden Lime",
      "hex": "#9a9738",
      "good name": ""
    },
    {
      "name": "Golden Lion Tamarin",
      "hex": "#ca602a",
      "good name": ""
    },
    {
      "name": "Golden Lock",
      "hex": "#f5bc1d",
      "good name": ""
    },
    {
      "name": "Golden Lotus",
      "hex": "#e9dbc4",
      "good name": ""
    },
    {
      "name": "Golden Marguerite",
      "hex": "#fdcc37",
      "good name": ""
    },
    {
      "name": "Golden Mary",
      "hex": "#f0be3a",
      "good name": ""
    },
    {
      "name": "Golden Mist",
      "hex": "#d5cd94",
      "good name": "x"
    },
    {
      "name": "Golden Moray Eel",
      "hex": "#ffcf60",
      "good name": ""
    },
    {
      "name": "Golden Mushroom",
      "hex": "#f4e8d1",
      "good name": ""
    },
    {
      "name": "Golden Nectar",
      "hex": "#ffda68",
      "good name": ""
    },
    {
      "name": "Golden Nugget",
      "hex": "#db9b59",
      "good name": "x"
    },
    {
      "name": "Golden Oak",
      "hex": "#be752d",
      "good name": ""
    },
    {
      "name": "Golden Oat Coloured",
      "hex": "#ecbe91",
      "good name": ""
    },
    {
      "name": "Golden Ochre",
      "hex": "#c77943",
      "good name": ""
    },
    {
      "name": "Golden Olive",
      "hex": "#af9841",
      "good name": ""
    },
    {
      "name": "Golden Opportunity",
      "hex": "#f7c070",
      "good name": "x"
    },
    {
      "name": "Golden Orange",
      "hex": "#d7942d",
      "good name": ""
    },
    {
      "name": "Golden Palm",
      "hex": "#aa8805",
      "good name": ""
    },
    {
      "name": "Golden Passionfruit",
      "hex": "#b4bb31",
      "good name": ""
    },
    {
      "name": "Golden Pastel",
      "hex": "#f4d9b9",
      "good name": ""
    },
    {
      "name": "Golden Patina",
      "hex": "#e4aa76",
      "good name": ""
    },
    {
      "name": "Golden Period",
      "hex": "#fedb2d",
      "good name": "x"
    },
    {
      "name": "Golden Pheasant",
      "hex": "#cf9632",
      "good name": ""
    },
    {
      "name": "Golden Pilsner",
      "hex": "#956f3f",
      "good name": ""
    },
    {
      "name": "Golden Plumeria",
      "hex": "#fbd073",
      "good name": ""
    },
    {
      "name": "Golden Pop",
      "hex": "#ebcebd",
      "good name": ""
    },
    {
      "name": "Golden Poppy",
      "hex": "#fcc200",
      "good name": ""
    },
    {
      "name": "Golden Pumpkin",
      "hex": "#ca884b",
      "good name": ""
    },
    {
      "name": "Golden Quartz Ochre",
      "hex": "#aa8a58",
      "good name": ""
    },
    {
      "name": "Golden Rain Yellow",
      "hex": "#ffb657",
      "good name": ""
    },
    {
      "name": "Golden Raspberry",
      "hex": "#f8d878",
      "good name": ""
    },
    {
      "name": "Golden Rays",
      "hex": "#f6da74",
      "good name": ""
    },
    {
      "name": "Golden Relic",
      "hex": "#e8ce49",
      "good name": "x"
    },
    {
      "name": "Golden Retriever",
      "hex": "#eedec7",
      "good name": "x"
    },
    {
      "name": "Golden Rice",
      "hex": "#e3d474",
      "good name": ""
    },
    {
      "name": "Golden Rule",
      "hex": "#daae49",
      "good name": ""
    },
    {
      "name": "Golden Sage",
      "hex": "#b09d73",
      "good name": ""
    },
    {
      "name": "Golden Sand",
      "hex": "#eace6a",
      "good name": ""
    },
    {
      "name": "Golden Schnitzel",
      "hex": "#ddbb11",
      "good name": ""
    },
    {
      "name": "Golden Slumber",
      "hex": "#b98841",
      "good name": ""
    },
    {
      "name": "Golden Snitch",
      "hex": "#f1e346",
      "good name": ""
    },
    {
      "name": "Golden Spice",
      "hex": "#c6973f",
      "good name": ""
    },
    {
      "name": "Golden Sprinkles",
      "hex": "#f6d263",
      "good name": "x"
    },
    {
      "name": "Golden Staff",
      "hex": "#f7eb83",
      "good name": ""
    },
    {
      "name": "Golden Straw",
      "hex": "#f5edae",
      "good name": ""
    },
    {
      "name": "Golden Summer",
      "hex": "#816945",
      "good name": ""
    },
    {
      "name": "Golden Syrup",
      "hex": "#ebd8b3",
      "good name": ""
    },
    {
      "name": "Golden Tainoi",
      "hex": "#ffc152",
      "good name": ""
    },
    {
      "name": "Golden Talisman",
      "hex": "#e9c89b",
      "good name": ""
    },
    {
      "name": "Golden Thistle Yellow",
      "hex": "#caa375",
      "good name": ""
    },
    {
      "name": "Golden Thread",
      "hex": "#e8c47a",
      "good name": ""
    },
    {
      "name": "Golden Wash",
      "hex": "#fffec6",
      "good name": ""
    },
    {
      "name": "Golden Weave",
      "hex": "#eadcc0",
      "good name": ""
    },
    {
      "name": "Golden West",
      "hex": "#e9ca94",
      "good name": ""
    },
    {
      "name": "Golden Yarrow",
      "hex": "#e2c74f",
      "good name": ""
    },
    {
      "name": "Golden Yellow",
      "hex": "#ffdf00",
      "good name": ""
    },
    {
      "name": "Goldenrod",
      "hex": "#fdcb18",
      "good name": ""
    },
    {
      "name": "Goldenrod Field",
      "hex": "#f0b053",
      "good name": ""
    },
    {
      "name": "Goldenrod Tea",
      "hex": "#a17841",
      "good name": ""
    },
    {
      "name": "Goldenrod Yellow",
      "hex": "#ffce8f",
      "good name": ""
    },
    {
      "name": "Goldfinch",
      "hex": "#f8dc6c",
      "good name": ""
    },
    {
      "name": "Goldfinger",
      "hex": "#eebb11",
      "good name": "x"
    },
    {
      "name": "Goldfish",
      "hex": "#f2ad62",
      "good name": "x"
    },
    {
      "name": "Goldie",
      "hex": "#c89d3f",
      "good name": ""
    },
    {
      "name": "Goldie Oldie",
      "hex": "#baad75",
      "good name": ""
    },
    {
      "name": "Goldilocks",
      "hex": "#fff39a",
      "good name": "x"
    },
    {
      "name": "Goldvreneli 1882",
      "hex": "#e7de54",
      "good name": ""
    },
    {
      "name": "Golem",
      "hex": "#836e59",
      "good name": ""
    },
    {
      "name": "Golf Blazer",
      "hex": "#53a391",
      "good name": ""
    },
    {
      "name": "Golf Course",
      "hex": "#5a9e4b",
      "good name": "x"
    },
    {
      "name": "Golf Day",
      "hex": "#5a8b3f",
      "good name": ""
    },
    {
      "name": "Golf Green",
      "hex": "#008763",
      "good name": ""
    },
    {
      "name": "Golfer Green",
      "hex": "#5e6841",
      "good name": ""
    },
    {
      "name": "Golgfag Brown",
      "hex": "#d77e70",
      "good name": ""
    },
    {
      "name": "Goluboy Blue",
      "hex": "#8bb9dd",
      "good name": ""
    },
    {
      "name": "Gomashio Yellow",
      "hex": "#cc9933",
      "good name": ""
    },
    {
      "name": "Gondola",
      "hex": "#373332",
      "good name": ""
    },
    {
      "name": "Gondolier",
      "hex": "#5db1c5",
      "good name": ""
    },
    {
      "name": "Gone Giddy",
      "hex": "#d9c737",
      "good name": ""
    },
    {
      "name": "Gonzo Violet",
      "hex": "#5d06e9",
      "good name": ""
    },
    {
      "name": "Good Graces",
      "hex": "#f3f0d6",
      "good name": ""
    },
    {
      "name": "Good Karma",
      "hex": "#333c76",
      "good name": "x"
    },
    {
      "name": "Good Life",
      "hex": "#c49e69",
      "good name": ""
    },
    {
      "name": "Good Luck",
      "hex": "#86c994",
      "good name": "x"
    },
    {
      "name": "Good Luck Charm",
      "hex": "#9d865c",
      "good name": ""
    },
    {
      "name": "Good Morning",
      "hex": "#fcfcda",
      "good name": "x"
    },
    {
      "name": "Good Morning Akihabara",
      "hex": "#f4ead5",
      "good name": ""
    },
    {
      "name": "Good Night!",
      "hex": "#46565f",
      "good name": "x"
    },
    {
      "name": "Good Samaritan",
      "hex": "#3f6782",
      "good name": ""
    },
    {
      "name": "Good-Looking",
      "hex": "#edd2a7",
      "good name": ""
    },
    {
      "name": "Goodbye Kiss",
      "hex": "#d9cac3",
      "good name": ""
    },
    {
      "name": "Goody Gumdrop",
      "hex": "#ccd87a",
      "good name": ""
    },
    {
      "name": "Goody Two Shoes",
      "hex": "#c2ba8e",
      "good name": ""
    },
    {
      "name": "Goose Bill",
      "hex": "#ffba80",
      "good name": "x"
    },
    {
      "name": "Goose Down",
      "hex": "#f4e7df",
      "good name": ""
    },
    {
      "name": "Goose Pond Green",
      "hex": "#629b92",
      "good name": ""
    },
    {
      "name": "Goose Wing Grey",
      "hex": "#a89dac",
      "good name": ""
    },
    {
      "name": "Gooseberry Fool",
      "hex": "#acb75f",
      "good name": ""
    },
    {
      "name": "Gooseberry Yellow",
      "hex": "#c7a94a",
      "good name": ""
    },
    {
      "name": "Gorā White",
      "hex": "#f0f0e0",
      "good name": ""
    },
    {
      "name": "Gordons Green",
      "hex": "#29332b",
      "good name": ""
    },
    {
      "name": "Gorgeous Green",
      "hex": "#287c37",
      "good name": ""
    },
    {
      "name": "Gorgeous Hydrangea",
      "hex": "#a495cb",
      "good name": ""
    },
    {
      "name": "Gorgeous White",
      "hex": "#e7dbd3",
      "good name": ""
    },
    {
      "name": "Gorgonzola Blue",
      "hex": "#4455cc",
      "good name": ""
    },
    {
      "name": "Gorse",
      "hex": "#fde336",
      "good name": ""
    },
    {
      "name": "Gorse Yellow Orange",
      "hex": "#e99a3c",
      "good name": ""
    },
    {
      "name": "Gorthor Brown",
      "hex": "#654741",
      "good name": ""
    },
    {
      "name": "Gory Movie",
      "hex": "#b42435",
      "good name": ""
    },
    {
      "name": "Gory Red",
      "hex": "#a30800",
      "good name": "x"
    },
    {
      "name": "Goshawk Grey",
      "hex": "#444444",
      "good name": ""
    },
    {
      "name": "Gossamer",
      "hex": "#399f86",
      "good name": ""
    },
    {
      "name": "Gossamer Green",
      "hex": "#b2cfbe",
      "good name": ""
    },
    {
      "name": "Gossamer Pink",
      "hex": "#fac8c3",
      "good name": ""
    },
    {
      "name": "Gossamer Veil",
      "hex": "#d3cec4",
      "good name": ""
    },
    {
      "name": "Gossamer Wings",
      "hex": "#e8eee9",
      "good name": ""
    },
    {
      "name": "Gossip",
      "hex": "#9fd385",
      "good name": "x"
    },
    {
      "name": "Gotham Grey",
      "hex": "#8a9192",
      "good name": ""
    },
    {
      "name": "Gothic",
      "hex": "#698890",
      "good name": "x"
    },
    {
      "name": "Gothic Amethyst",
      "hex": "#a38b93",
      "good name": ""
    },
    {
      "name": "Gothic Gold",
      "hex": "#bb852f",
      "good name": "x"
    },
    {
      "name": "Gothic Grape",
      "hex": "#473951",
      "good name": ""
    },
    {
      "name": "Gothic Olive",
      "hex": "#7c6e4f",
      "good name": ""
    },
    {
      "name": "Gothic Purple",
      "hex": "#92838a",
      "good name": ""
    },
    {
      "name": "Gothic Revival Green",
      "hex": "#a0a160",
      "good name": ""
    },
    {
      "name": "Gothic Spire",
      "hex": "#7c6b6f",
      "good name": ""
    },
    {
      "name": "Gotta Have It",
      "hex": "#d0c2b4",
      "good name": ""
    },
    {
      "name": "Gouda Gold",
      "hex": "#eecc11",
      "good name": ""
    },
    {
      "name": "Goulash",
      "hex": "#8d6449",
      "good name": ""
    },
    {
      "name": "Gould Blue",
      "hex": "#7d9ea2",
      "good name": ""
    },
    {
      "name": "Gould Gold",
      "hex": "#bc9d70",
      "good name": ""
    },
    {
      "name": "Gourmet Honey",
      "hex": "#e3cba8",
      "good name": "x"
    },
    {
      "name": "Gourmet Mushroom",
      "hex": "#968d8c",
      "good name": ""
    },
    {
      "name": "Government Green",
      "hex": "#32493e",
      "good name": ""
    },
    {
      "name": "Governor Bay",
      "hex": "#51559b",
      "good name": ""
    },
    {
      "name": "Graceful",
      "hex": "#a8c0ce",
      "good name": ""
    },
    {
      "name": "Graceful Ballerina",
      "hex": "#dd897c",
      "good name": ""
    },
    {
      "name": "Graceful Flower",
      "hex": "#bddfb2",
      "good name": ""
    },
    {
      "name": "Graceful Garden",
      "hex": "#cba9d0",
      "good name": ""
    },
    {
      "name": "Graceful Gazelle",
      "hex": "#a78a50",
      "good name": ""
    },
    {
      "name": "Graceful Green",
      "hex": "#acb7a8",
      "good name": ""
    },
    {
      "name": "Graceful Grey",
      "hex": "#beb6ac",
      "good name": ""
    },
    {
      "name": "Graceful Mint",
      "hex": "#daeed5",
      "good name": ""
    },
    {
      "name": "Graceland Grass",
      "hex": "#546c46",
      "good name": ""
    },
    {
      "name": "Gracilis",
      "hex": "#c4d5cb",
      "good name": ""
    },
    {
      "name": "Gracious",
      "hex": "#f8edd7",
      "good name": ""
    },
    {
      "name": "Gracious Glow",
      "hex": "#bab078",
      "good name": ""
    },
    {
      "name": "Gracious Rose",
      "hex": "#e3b7b1",
      "good name": ""
    },
    {
      "name": "Graham Cracker",
      "hex": "#c0a480",
      "good name": ""
    },
    {
      "name": "Graham Crust",
      "hex": "#806240",
      "good name": ""
    },
    {
      "name": "Grain Brown",
      "hex": "#cab8a2",
      "good name": ""
    },
    {
      "name": "Grain Mill",
      "hex": "#d8c095",
      "good name": ""
    },
    {
      "name": "Grain of Salt",
      "hex": "#d8dbe1",
      "good name": "x"
    },
    {
      "name": "Grain White",
      "hex": "#efe3d8",
      "good name": ""
    },
    {
      "name": "Grainfield",
      "hex": "#b79e66",
      "good name": ""
    },
    {
      "name": "Gram's Hair",
      "hex": "#f5f6f7",
      "good name": ""
    },
    {
      "name": "Gramps Shoehorn",
      "hex": "#a3896c",
      "good name": "x"
    },
    {
      "name": "Gran Torino Red",
      "hex": "#ee3300",
      "good name": ""
    },
    {
      "name": "Granada Sky",
      "hex": "#5d81bb",
      "good name": ""
    },
    {
      "name": "Grand Avenue",
      "hex": "#665a48",
      "good name": ""
    },
    {
      "name": "Grand Bleu",
      "hex": "#015482",
      "good name": "x"
    },
    {
      "name": "Grand Canal",
      "hex": "#3c797d",
      "good name": ""
    },
    {
      "name": "Grand Grape",
      "hex": "#645764",
      "good name": ""
    },
    {
      "name": "Grand Gusto",
      "hex": "#86bb9d",
      "good name": ""
    },
    {
      "name": "Grand Heron",
      "hex": "#ecece1",
      "good name": ""
    },
    {
      "name": "Grand Piano",
      "hex": "#d8d0bd",
      "good name": ""
    },
    {
      "name": "Grand Plum",
      "hex": "#6c5657",
      "good name": ""
    },
    {
      "name": "Grand Poobah",
      "hex": "#864764",
      "good name": ""
    },
    {
      "name": "Grand Purple",
      "hex": "#534778",
      "good name": ""
    },
    {
      "name": "Grand Rapids",
      "hex": "#38707e",
      "good name": ""
    },
    {
      "name": "Grand Soiree",
      "hex": "#d9c2a8",
      "good name": ""
    },
    {
      "name": "Grand Sunset",
      "hex": "#c38d87",
      "good name": "x"
    },
    {
      "name": "Grandeur Plum",
      "hex": "#92576f",
      "good name": ""
    },
    {
      "name": "Grandiflora Rose",
      "hex": "#e0ebaf",
      "good name": ""
    },
    {
      "name": "Grandiose",
      "hex": "#caa84c",
      "good name": ""
    },
    {
      "name": "Grandis",
      "hex": "#ffcd73",
      "good name": ""
    },
    {
      "name": "Grandma's Cameo",
      "hex": "#f7e7dd",
      "good name": "x"
    },
    {
      "name": "Grandma's Pink Tiles",
      "hex": "#e0b8c0",
      "good name": "x"
    },
    {
      "name": "Grandview",
      "hex": "#6b927f",
      "good name": ""
    },
    {
      "name": "Grange Hall",
      "hex": "#857767",
      "good name": ""
    },
    {
      "name": "Granita",
      "hex": "#a52350",
      "good name": ""
    },
    {
      "name": "Granite",
      "hex": "#746a5e",
      "good name": "x"
    },
    {
      "name": "Granite Black",
      "hex": "#313238",
      "good name": ""
    },
    {
      "name": "Granite Boulder",
      "hex": "#816f6b",
      "good name": ""
    },
    {
      "name": "Granite Brown",
      "hex": "#3d2d24",
      "good name": ""
    },
    {
      "name": "Granite Canyon",
      "hex": "#6c6f78",
      "good name": ""
    },
    {
      "name": "Granite Dust",
      "hex": "#d7cec4",
      "good name": ""
    },
    {
      "name": "Granite Falls",
      "hex": "#638496",
      "good name": ""
    },
    {
      "name": "Granite Green",
      "hex": "#8b8265",
      "good name": ""
    },
    {
      "name": "Granite Grey",
      "hex": "#615e5f",
      "good name": ""
    },
    {
      "name": "Granite Peak",
      "hex": "#606b75",
      "good name": ""
    },
    {
      "name": "Granny Apple",
      "hex": "#c5e7cd",
      "good name": ""
    },
    {
      "name": "Granny Smith",
      "hex": "#7b948c",
      "good name": ""
    },
    {
      "name": "Granny Smith Apple",
      "hex": "#9de093",
      "good name": ""
    },
    {
      "name": "Granola",
      "hex": "#f5ce9f",
      "good name": "x"
    },
    {
      "name": "Grant Drab",
      "hex": "#8f8461",
      "good name": ""
    },
    {
      "name": "Grant Grey",
      "hex": "#918f8a",
      "good name": ""
    },
    {
      "name": "Grant Village",
      "hex": "#6c90b2",
      "good name": ""
    },
    {
      "name": "Grant Wood Ivy",
      "hex": "#a8b989",
      "good name": ""
    },
    {
      "name": "Granular Limestone",
      "hex": "#e3e0da",
      "good name": ""
    },
    {
      "name": "Granulated Sugar",
      "hex": "#fffdf2",
      "good name": ""
    },
    {
      "name": "Grape",
      "hex": "#6c3461",
      "good name": "x"
    },
    {
      "name": "Grape Arbor",
      "hex": "#a598c7",
      "good name": ""
    },
    {
      "name": "Grape Blue",
      "hex": "#24486c",
      "good name": ""
    },
    {
      "name": "Grape Candy",
      "hex": "#905284",
      "good name": "x"
    },
    {
      "name": "Grape Cassata",
      "hex": "#dfe384",
      "good name": ""
    },
    {
      "name": "Grape Compote",
      "hex": "#6b5876",
      "good name": ""
    },
    {
      "name": "Grape Creme",
      "hex": "#bebbbb",
      "good name": ""
    },
    {
      "name": "Grape Expectations",
      "hex": "#6a587e",
      "good name": ""
    },
    {
      "name": "Grape Fizz",
      "hex": "#64435f",
      "good name": "x"
    },
    {
      "name": "Grape Gatsby",
      "hex": "#a19abd",
      "good name": ""
    },
    {
      "name": "Grape Glimmer",
      "hex": "#dccae0",
      "good name": ""
    },
    {
      "name": "Grape Green",
      "hex": "#a8e4a0",
      "good name": "x"
    },
    {
      "name": "Grape Grey",
      "hex": "#6d6166",
      "good name": ""
    },
    {
      "name": "Grape Harvest",
      "hex": "#807697",
      "good name": ""
    },
    {
      "name": "Grape Haze",
      "hex": "#606a88",
      "good name": ""
    },
    {
      "name": "Grape Hyacinth",
      "hex": "#5533cc",
      "good name": ""
    },
    {
      "name": "Grape Illusion",
      "hex": "#b4a6d5",
      "good name": ""
    },
    {
      "name": "Grape Jam",
      "hex": "#7f779a",
      "good name": ""
    },
    {
      "name": "Grape Jelly",
      "hex": "#7e667f",
      "good name": ""
    },
    {
      "name": "Grape Juice",
      "hex": "#682961",
      "good name": ""
    },
    {
      "name": "Grape Kiss",
      "hex": "#7b4368",
      "good name": "x"
    },
    {
      "name": "Grape Lavender",
      "hex": "#c2c4d4",
      "good name": ""
    },
    {
      "name": "Grape Leaf",
      "hex": "#545144",
      "good name": ""
    },
    {
      "name": "Grape Leaves",
      "hex": "#576049",
      "good name": ""
    },
    {
      "name": "Grape Mist",
      "hex": "#c5c0c9",
      "good name": ""
    },
    {
      "name": "Grape Nectar",
      "hex": "#8d5c74",
      "good name": ""
    },
    {
      "name": "Grape Oil Green",
      "hex": "#d3d9ce",
      "good name": ""
    },
    {
      "name": "Grape Parfait",
      "hex": "#8677a9",
      "good name": ""
    },
    {
      "name": "Grape Popsicle",
      "hex": "#60406d",
      "good name": ""
    },
    {
      "name": "Grape Purple",
      "hex": "#5d1451",
      "good name": ""
    },
    {
      "name": "Grape Royale",
      "hex": "#4f2d54",
      "good name": ""
    },
    {
      "name": "Grape Shake",
      "hex": "#886971",
      "good name": ""
    },
    {
      "name": "Grape Smoke",
      "hex": "#b69abc",
      "good name": ""
    },
    {
      "name": "Grape Soda",
      "hex": "#ae94a6",
      "good name": ""
    },
    {
      "name": "Grape Taffy",
      "hex": "#f4daf1",
      "good name": "x"
    },
    {
      "name": "Grape Vine",
      "hex": "#797f5a",
      "good name": ""
    },
    {
      "name": "Grape Wine",
      "hex": "#5a2f43",
      "good name": ""
    },
    {
      "name": "Grape's Treasure",
      "hex": "#beaecf",
      "good name": ""
    },
    {
      "name": "Grapeade",
      "hex": "#aa9fb2",
      "good name": ""
    },
    {
      "name": "Grapefruit",
      "hex": "#fd5956",
      "good name": "x"
    },
    {
      "name": "Grapefruit Juice",
      "hex": "#ee6d8a",
      "good name": ""
    },
    {
      "name": "Grapefruit Pulp",
      "hex": "#fe6f5e",
      "good name": ""
    },
    {
      "name": "Grapefruit Yellow",
      "hex": "#dfa01a",
      "good name": ""
    },
    {
      "name": "Grapemist",
      "hex": "#8398ca",
      "good name": ""
    },
    {
      "name": "Grapes of Italy",
      "hex": "#714a8b",
      "good name": "x"
    },
    {
      "name": "Grapes of Wrath",
      "hex": "#58424c",
      "good name": ""
    },
    {
      "name": "Grapeshot",
      "hex": "#71384b",
      "good name": ""
    },
    {
      "name": "Grapest",
      "hex": "#880066",
      "good name": "x"
    },
    {
      "name": "Grapevine",
      "hex": "#b194a6",
      "good name": ""
    },
    {
      "name": "Grapevine Canyon",
      "hex": "#62534f",
      "good name": ""
    },
    {
      "name": "Graphic Charcoal",
      "hex": "#5c5e5f",
      "good name": ""
    },
    {
      "name": "Graphic Grape",
      "hex": "#824e78",
      "good name": ""
    },
    {
      "name": "Graphical 80's Sky",
      "hex": "#0000fc",
      "good name": ""
    },
    {
      "name": "Graphite",
      "hex": "#383428",
      "good name": "x"
    },
    {
      "name": "Graphite Black",
      "hex": "#262a2b",
      "good name": "x"
    },
    {
      "name": "Graphite Black Green",
      "hex": "#32494b",
      "good name": ""
    },
    {
      "name": "Graphite Grey Green",
      "hex": "#7c7666",
      "good name": ""
    },
    {
      "name": "Grapple",
      "hex": "#92786a",
      "good name": ""
    },
    {
      "name": "Grapy",
      "hex": "#786e70",
      "good name": ""
    },
    {
      "name": "Grasping Grass",
      "hex": "#92b300",
      "good name": ""
    },
    {
      "name": "Grass",
      "hex": "#5cac2d",
      "good name": "x"
    },
    {
      "name": "Grass Blade",
      "hex": "#636f46",
      "good name": ""
    },
    {
      "name": "Grass Cloth",
      "hex": "#b8b97e",
      "good name": ""
    },
    {
      "name": "Grass Court",
      "hex": "#088d46",
      "good name": ""
    },
    {
      "name": "Grass Daisy",
      "hex": "#ceb02a",
      "good name": ""
    },
    {
      "name": "Grass Green",
      "hex": "#3f9b0b",
      "good name": ""
    },
    {
      "name": "Grass Root",
      "hex": "#c3c175",
      "good name": ""
    },
    {
      "name": "Grass Sands",
      "hex": "#a1afa0",
      "good name": ""
    },
    {
      "name": "Grass Skirt",
      "hex": "#e2dac2",
      "good name": ""
    },
    {
      "name": "Grass Stain Green",
      "hex": "#c0fb2d",
      "good name": ""
    },
    {
      "name": "Grass Valley",
      "hex": "#f4f7ee",
      "good name": ""
    },
    {
      "name": "Grasshopper",
      "hex": "#77824a",
      "good name": "x"
    },
    {
      "name": "Grasshopper Wing",
      "hex": "#87866f",
      "good name": ""
    },
    {
      "name": "Grassland",
      "hex": "#c1bca7",
      "good name": ""
    },
    {
      "name": "Grasslands",
      "hex": "#407548",
      "good name": ""
    },
    {
      "name": "Grassroots",
      "hex": "#d8c475",
      "good name": ""
    },
    {
      "name": "Grassy Field",
      "hex": "#5c7d47",
      "good name": ""
    },
    {
      "name": "Grassy Glade",
      "hex": "#d8ddca",
      "good name": ""
    },
    {
      "name": "Grassy Green",
      "hex": "#419c03",
      "good name": ""
    },
    {
      "name": "Grassy Meadow",
      "hex": "#76a55b",
      "good name": ""
    },
    {
      "name": "Grassy Savannah",
      "hex": "#9b9279",
      "good name": ""
    },
    {
      "name": "Grated Beet",
      "hex": "#a60e46",
      "good name": ""
    },
    {
      "name": "Gratefully Grass",
      "hex": "#71714e",
      "good name": ""
    },
    {
      "name": "Gratifying Green",
      "hex": "#dae2cd",
      "good name": ""
    },
    {
      "name": "Gratin Dauphinois",
      "hex": "#e0d2a9",
      "good name": "x"
    },
    {
      "name": "Gratitude",
      "hex": "#e0ead7",
      "good name": ""
    },
    {
      "name": "Grauzone",
      "hex": "#85a3b2",
      "good name": "x"
    },
    {
      "name": "Gravel",
      "hex": "#4a4b46",
      "good name": ""
    },
    {
      "name": "Gravel Dust",
      "hex": "#bab9a9",
      "good name": ""
    },
    {
      "name": "Gravel Fint",
      "hex": "#bbbbbb",
      "good name": ""
    },
    {
      "name": "Gravel Grey Blue",
      "hex": "#637a82",
      "good name": ""
    },
    {
      "name": "Gravelstone",
      "hex": "#d3c7b8",
      "good name": ""
    },
    {
      "name": "Graveyard Earth",
      "hex": "#68553a",
      "good name": ""
    },
    {
      "name": "Gravlax",
      "hex": "#ec834f",
      "good name": "x"
    },
    {
      "name": "Grayve-Yard",
      "hex": "#a1a19f",
      "good name": ""
    },
    {
      "name": "Great Blue Heron",
      "hex": "#d5e0ee",
      "good name": ""
    },
    {
      "name": "Great Coat Grey",
      "hex": "#7f8488",
      "good name": ""
    },
    {
      "name": "Great Dane",
      "hex": "#d1a369",
      "good name": ""
    },
    {
      "name": "Great Falls",
      "hex": "#9fa6b3",
      "good name": ""
    },
    {
      "name": "Great Fennel Flower",
      "hex": "#719ba2",
      "good name": ""
    },
    {
      "name": "Great Frontier",
      "hex": "#908675",
      "good name": ""
    },
    {
      "name": "Great Grape",
      "hex": "#6b6d85",
      "good name": ""
    },
    {
      "name": "Great Graphite",
      "hex": "#a5a6a1",
      "good name": ""
    },
    {
      "name": "Great Green",
      "hex": "#abb486",
      "good name": ""
    },
    {
      "name": "Great Joy",
      "hex": "#d8e6cb",
      "good name": ""
    },
    {
      "name": "Great Serpent",
      "hex": "#4a72a3",
      "good name": ""
    },
    {
      "name": "Great Tit Eggs",
      "hex": "#e9e2db",
      "good name": ""
    },
    {
      "name": "Great Void",
      "hex": "#3b5760",
      "good name": "x"
    },
    {
      "name": "Great White",
      "hex": "#bdbdc6",
      "good name": ""
    },
    {
      "name": "Grecian Gold",
      "hex": "#9e7e54",
      "good name": ""
    },
    {
      "name": "Grecian Isle",
      "hex": "#00a49b",
      "good name": ""
    },
    {
      "name": "Grecian Ivory",
      "hex": "#d6cfbe",
      "good name": ""
    },
    {
      "name": "Greedo Green",
      "hex": "#00aa66",
      "good name": ""
    },
    {
      "name": "Greedy Gecko",
      "hex": "#aa9922",
      "good name": "x"
    },
    {
      "name": "Greedy Gold",
      "hex": "#c4ce3b",
      "good name": ""
    },
    {
      "name": "Greedy Green",
      "hex": "#d1ffbd",
      "good name": ""
    },
    {
      "name": "Greek Aubergine",
      "hex": "#3d0734",
      "good name": ""
    },
    {
      "name": "Greek Blue",
      "hex": "#009fbd",
      "good name": ""
    },
    {
      "name": "Greek Flag Blue",
      "hex": "#0d5eaf",
      "good name": ""
    },
    {
      "name": "Greek Garden",
      "hex": "#8cce86",
      "good name": ""
    },
    {
      "name": "Greek Isles",
      "hex": "#bbdcf0",
      "good name": ""
    },
    {
      "name": "Greek Lavender",
      "hex": "#9b8fb0",
      "good name": ""
    },
    {
      "name": "Greek Sea",
      "hex": "#72a7e1",
      "good name": ""
    },
    {
      "name": "Greek Villa",
      "hex": "#f0ece2",
      "good name": ""
    },
    {
      "name": "Green",
      "hex": "#00ff00",
      "good name": "x"
    },
    {
      "name": "Green 383",
      "hex": "#3e3d29",
      "good name": ""
    },
    {
      "name": "Green Acres",
      "hex": "#53a144",
      "good name": ""
    },
    {
      "name": "Green Adirondack",
      "hex": "#688878",
      "good name": ""
    },
    {
      "name": "Green Agate",
      "hex": "#3f6253",
      "good name": ""
    },
    {
      "name": "Green Alabaster",
      "hex": "#c8ccba",
      "good name": ""
    },
    {
      "name": "Green Amazons",
      "hex": "#98a893",
      "good name": ""
    },
    {
      "name": "Green Apple",
      "hex": "#5edc1f",
      "good name": ""
    },
    {
      "name": "Green Apple Martini",
      "hex": "#d2c785",
      "good name": ""
    },
    {
      "name": "Green Aqua",
      "hex": "#d0e8db",
      "good name": ""
    },
    {
      "name": "Green Ash",
      "hex": "#a0daa9",
      "good name": ""
    },
    {
      "name": "Green Balloon",
      "hex": "#80c4a9",
      "good name": ""
    },
    {
      "name": "Green Balsam",
      "hex": "#a0ac9e",
      "good name": ""
    },
    {
      "name": "Green Banana",
      "hex": "#a8b453",
      "good name": ""
    },
    {
      "name": "Green Bank",
      "hex": "#79b088",
      "good name": ""
    },
    {
      "name": "Green Bark",
      "hex": "#a9c4a6",
      "good name": ""
    },
    {
      "name": "Green Bay",
      "hex": "#7e9285",
      "good name": ""
    },
    {
      "name": "Green Bayou",
      "hex": "#566e57",
      "good name": ""
    },
    {
      "name": "Green Bean Casserole",
      "hex": "#b0a36e",
      "good name": ""
    },
    {
      "name": "Green Bell Pepper",
      "hex": "#228800",
      "good name": "x"
    },
    {
      "name": "Green Belt",
      "hex": "#2d7f6c",
      "good name": ""
    },
    {
      "name": "Green Beret",
      "hex": "#516a62",
      "good name": ""
    },
    {
      "name": "Green Blob",
      "hex": "#22dd00",
      "good name": ""
    },
    {
      "name": "Green Blue",
      "hex": "#42b395",
      "good name": ""
    },
    {
      "name": "Green Blue Slate",
      "hex": "#358082",
      "good name": ""
    },
    {
      "name": "Green Bonnet",
      "hex": "#8bb490",
      "good name": ""
    },
    {
      "name": "Green Bottle",
      "hex": "#446a4b",
      "good name": ""
    },
    {
      "name": "Green Brocade",
      "hex": "#daf1e0",
      "good name": ""
    },
    {
      "name": "Green Brown",
      "hex": "#696006",
      "good name": ""
    },
    {
      "name": "Green Buoy",
      "hex": "#32a7b5",
      "good name": ""
    },
    {
      "name": "Green Bush",
      "hex": "#7f8866",
      "good name": ""
    },
    {
      "name": "Green Cacophony",
      "hex": "#bbee11",
      "good name": ""
    },
    {
      "name": "Green Cape",
      "hex": "#89ce01",
      "good name": ""
    },
    {
      "name": "Green Cast",
      "hex": "#919365",
      "good name": ""
    },
    {
      "name": "Green Caterpillar",
      "hex": "#98be3c",
      "good name": ""
    },
    {
      "name": "Green Chalk",
      "hex": "#bcdf8a",
      "good name": ""
    },
    {
      "name": "Green Charm",
      "hex": "#e7dda7",
      "good name": ""
    },
    {
      "name": "Green Coconut",
      "hex": "#868e65",
      "good name": ""
    },
    {
      "name": "Green Column",
      "hex": "#465149",
      "good name": ""
    },
    {
      "name": "Green Cow",
      "hex": "#beef69",
      "good name": ""
    },
    {
      "name": "Green Crush",
      "hex": "#62ae9e",
      "good name": ""
    },
    {
      "name": "Green Cyan",
      "hex": "#009966",
      "good name": ""
    },
    {
      "name": "Green Darner Tail",
      "hex": "#75bbfd",
      "good name": ""
    },
    {
      "name": "Green Day",
      "hex": "#bbee88",
      "good name": ""
    },
    {
      "name": "Green Daze",
      "hex": "#8bd3c6",
      "good name": ""
    },
    {
      "name": "Green Dragon",
      "hex": "#006c67",
      "good name": ""
    },
    {
      "name": "Green Dragon Spring",
      "hex": "#c1cab0",
      "good name": ""
    },
    {
      "name": "Green Dynasty",
      "hex": "#728942",
      "good name": ""
    },
    {
      "name": "Green Eggs",
      "hex": "#e3ecc5",
      "good name": ""
    },
    {
      "name": "Green Eggs and Ham",
      "hex": "#7cb68e",
      "good name": ""
    },
    {
      "name": "Green Elisabeth Ⅱ",
      "hex": "#bbcc11",
      "good name": ""
    },
    {
      "name": "Green Elliott",
      "hex": "#00bb66",
      "good name": ""
    },
    {
      "name": "Green Emulsion",
      "hex": "#daeae2",
      "good name": ""
    },
    {
      "name": "Green Energy",
      "hex": "#80905f",
      "good name": ""
    },
    {
      "name": "Green Envy",
      "hex": "#77aa00",
      "good name": "x"
    },
    {
      "name": "Green Epiphany",
      "hex": "#7efbb3",
      "good name": ""
    },
    {
      "name": "Green Essence",
      "hex": "#e9eac8",
      "good name": ""
    },
    {
      "name": "Green Eyes",
      "hex": "#7d956d",
      "good name": ""
    },
    {
      "name": "Green Fiasco",
      "hex": "#aaee00",
      "good name": ""
    },
    {
      "name": "Green Field",
      "hex": "#88aa77",
      "good name": "x"
    },
    {
      "name": "Green Fig",
      "hex": "#b3a476",
      "good name": ""
    },
    {
      "name": "Green Fingers",
      "hex": "#297e6b",
      "good name": ""
    },
    {
      "name": "Green Flash",
      "hex": "#79c753",
      "good name": ""
    },
    {
      "name": "Green Flavor",
      "hex": "#bbaa22",
      "good name": ""
    },
    {
      "name": "Green Fluorite",
      "hex": "#55bbaa",
      "good name": ""
    },
    {
      "name": "Green Fog",
      "hex": "#989a87",
      "good name": ""
    },
    {
      "name": "Green Frost",
      "hex": "#d0d6bf",
      "good name": ""
    },
    {
      "name": "Green Frosting",
      "hex": "#d8f1eb",
      "good name": ""
    },
    {
      "name": "Green Gables",
      "hex": "#324241",
      "good name": ""
    },
    {
      "name": "Green Gamora",
      "hex": "#11bb00",
      "good name": ""
    },
    {
      "name": "Green Gardens",
      "hex": "#009911",
      "good name": ""
    },
    {
      "name": "Green Garlands",
      "hex": "#008176",
      "good name": ""
    },
    {
      "name": "Green Garter",
      "hex": "#61ba85",
      "good name": ""
    },
    {
      "name": "Green Gas",
      "hex": "#00ff99",
      "good name": ""
    },
    {
      "name": "Green Gate",
      "hex": "#676957",
      "good name": ""
    },
    {
      "name": "Green Gecko",
      "hex": "#cdd47f",
      "good name": ""
    },
    {
      "name": "Green Glacier",
      "hex": "#e7f0c2",
      "good name": ""
    },
    {
      "name": "Green Glaze",
      "hex": "#eaf1e4",
      "good name": ""
    },
    {
      "name": "Green Glimmer",
      "hex": "#00bb00",
      "good name": "x"
    },
    {
      "name": "Green Glimpse",
      "hex": "#e7eae3",
      "good name": ""
    },
    {
      "name": "Green Glint",
      "hex": "#dcf1c7",
      "good name": "x"
    },
    {
      "name": "Green Glitter",
      "hex": "#dde26a",
      "good name": ""
    },
    {
      "name": "Green Globe",
      "hex": "#79aa87",
      "good name": ""
    },
    {
      "name": "Green Gloss",
      "hex": "#00955e",
      "good name": ""
    },
    {
      "name": "Green Glow",
      "hex": "#b0c965",
      "good name": ""
    },
    {
      "name": "Green Glutton",
      "hex": "#007722",
      "good name": ""
    },
    {
      "name": "Green Goanna",
      "hex": "#505a39",
      "good name": ""
    },
    {
      "name": "Green Goblin",
      "hex": "#11bb33",
      "good name": "x"
    },
    {
      "name": "Green Gold",
      "hex": "#c5b088",
      "good name": ""
    },
    {
      "name": "Green Gone Wild",
      "hex": "#73a236",
      "good name": ""
    },
    {
      "name": "Green Gooseberry",
      "hex": "#b0dfa4",
      "good name": ""
    },
    {
      "name": "Green Granite",
      "hex": "#7c9793",
      "good name": ""
    },
    {
      "name": "Green Grapple",
      "hex": "#3db9b2",
      "good name": ""
    },
    {
      "name": "Green Grass",
      "hex": "#39854a",
      "good name": ""
    },
    {
      "name": "Green Grey",
      "hex": "#7ea07a",
      "good name": ""
    },
    {
      "name": "Green Grey Mist",
      "hex": "#afa984",
      "good name": ""
    },
    {
      "name": "Green Gum",
      "hex": "#95e3c0",
      "good name": ""
    },
    {
      "name": "Green Haze",
      "hex": "#01a368",
      "good name": ""
    },
    {
      "name": "Green Herb",
      "hex": "#a4c08a",
      "good name": ""
    },
    {
      "name": "Green High",
      "hex": "#66cc22",
      "good name": ""
    },
    {
      "name": "Green Hills",
      "hex": "#007800",
      "good name": ""
    },
    {
      "name": "Green Hour",
      "hex": "#587d79",
      "good name": ""
    },
    {
      "name": "Green Iced Tea",
      "hex": "#e8e8d4",
      "good name": ""
    },
    {
      "name": "Green Illude",
      "hex": "#6e6f56",
      "good name": ""
    },
    {
      "name": "Green Incandescence",
      "hex": "#c4fe82",
      "good name": ""
    },
    {
      "name": "Green Ink",
      "hex": "#11887b",
      "good name": ""
    },
    {
      "name": "Green Jelly",
      "hex": "#349b82",
      "good name": ""
    },
    {
      "name": "Green Jewel",
      "hex": "#95dabd",
      "good name": ""
    },
    {
      "name": "Green Juice",
      "hex": "#3bde39",
      "good name": ""
    },
    {
      "name": "Green Katamari",
      "hex": "#53fe5c",
      "good name": ""
    },
    {
      "name": "Green Kelp",
      "hex": "#393d2a",
      "good name": ""
    },
    {
      "name": "Green Knoll",
      "hex": "#647f4a",
      "good name": ""
    },
    {
      "name": "Green Lacewing",
      "hex": "#8ad370",
      "good name": ""
    },
    {
      "name": "Green Lane",
      "hex": "#cad6c4",
      "good name": ""
    },
    {
      "name": "Green Lantern",
      "hex": "#9cd03b",
      "good name": ""
    },
    {
      "name": "Green Lapis",
      "hex": "#008684",
      "good name": ""
    },
    {
      "name": "Green Leaf",
      "hex": "#526b2d",
      "good name": ""
    },
    {
      "name": "Green Lentils",
      "hex": "#9c9463",
      "good name": ""
    },
    {
      "name": "Green Lily",
      "hex": "#c1cec1",
      "good name": ""
    },
    {
      "name": "Green Lizard",
      "hex": "#a7f432",
      "good name": ""
    },
    {
      "name": "Green Mallard",
      "hex": "#455f5f",
      "good name": ""
    },
    {
      "name": "Green Mana",
      "hex": "#26b467",
      "good name": "x"
    },
    {
      "name": "Green McQuarrie",
      "hex": "#555d50",
      "good name": ""
    },
    {
      "name": "Green Me",
      "hex": "#b2b55f",
      "good name": ""
    },
    {
      "name": "Green Meets Blue",
      "hex": "#8ea8a0",
      "good name": ""
    },
    {
      "name": "Green Mesh",
      "hex": "#d7d7ad",
      "good name": ""
    },
    {
      "name": "Green Milieu",
      "hex": "#8a9992",
      "good name": ""
    },
    {
      "name": "Green Minions",
      "hex": "#99dd00",
      "good name": ""
    },
    {
      "name": "Green Mirror",
      "hex": "#d7e2d5",
      "good name": ""
    },
    {
      "name": "Green Mist",
      "hex": "#bfc298",
      "good name": ""
    },
    {
      "name": "Green Moblin",
      "hex": "#008888",
      "good name": ""
    },
    {
      "name": "Green Moonstone",
      "hex": "#33565e",
      "good name": ""
    },
    {
      "name": "Green Moray",
      "hex": "#3a7968",
      "good name": ""
    },
    {
      "name": "Green Moss",
      "hex": "#857946",
      "good name": ""
    },
    {
      "name": "Green Myth",
      "hex": "#c5e1c3",
      "good name": ""
    },
    {
      "name": "Green Neon",
      "hex": "#b2ac31",
      "good name": ""
    },
    {
      "name": "Green not Found",
      "hex": "#404404",
      "good name": "x"
    },
    {
      "name": "Green Oasis",
      "hex": "#b0b454",
      "good name": ""
    },
    {
      "name": "Green Oblivion",
      "hex": "#005249",
      "good name": ""
    },
    {
      "name": "Green Ochre",
      "hex": "#9f8f55",
      "good name": ""
    },
    {
      "name": "Green Olive",
      "hex": "#8d8b55",
      "good name": "x"
    },
    {
      "name": "Green Olive Pit",
      "hex": "#bdaa89",
      "good name": ""
    },
    {
      "name": "Green Onion",
      "hex": "#c1e089",
      "good name": ""
    },
    {
      "name": "Green Onyx",
      "hex": "#989a82",
      "good name": ""
    },
    {
      "name": "Green Papaya",
      "hex": "#e5ce77",
      "good name": ""
    },
    {
      "name": "Green Parakeet",
      "hex": "#7bd5bf",
      "good name": ""
    },
    {
      "name": "Green Parlor",
      "hex": "#cfddb9",
      "good name": ""
    },
    {
      "name": "Green Patina",
      "hex": "#66d0c0",
      "good name": ""
    },
    {
      "name": "Green Paw Paw",
      "hex": "#0d6349",
      "good name": ""
    },
    {
      "name": "Green Pea",
      "hex": "#266242",
      "good name": ""
    },
    {
      "name": "Green Pear",
      "hex": "#79be58",
      "good name": ""
    },
    {
      "name": "Green People",
      "hex": "#388004",
      "good name": ""
    },
    {
      "name": "Green Pepper",
      "hex": "#97bc62",
      "good name": ""
    },
    {
      "name": "Green Pigment",
      "hex": "#00a550",
      "good name": ""
    },
    {
      "name": "Green Plaza",
      "hex": "#98a76e",
      "good name": ""
    },
    {
      "name": "Green Power",
      "hex": "#e2e1c6",
      "good name": ""
    },
    {
      "name": "Green Priestess",
      "hex": "#11dd55",
      "good name": "x"
    },
    {
      "name": "Green Revolution",
      "hex": "#009944",
      "good name": "x"
    },
    {
      "name": "Green Room",
      "hex": "#80aea4",
      "good name": ""
    },
    {
      "name": "Green Savage",
      "hex": "#888866",
      "good name": ""
    },
    {
      "name": "Green Scene",
      "hex": "#858365",
      "good name": ""
    },
    {
      "name": "Green Screen",
      "hex": "#22ff00",
      "good name": "x"
    },
    {
      "name": "Green Serpent",
      "hex": "#77bb00",
      "good name": ""
    },
    {
      "name": "Green Serpent Scepter",
      "hex": "#bbcc00",
      "good name": ""
    },
    {
      "name": "Green Serum",
      "hex": "#99dd22",
      "good name": ""
    },
    {
      "name": "Green Shade Wash",
      "hex": "#45523a",
      "good name": ""
    },
    {
      "name": "Green Sheen",
      "hex": "#d9ce52",
      "good name": ""
    },
    {
      "name": "Green Shimmer",
      "hex": "#ccfd7f",
      "good name": ""
    },
    {
      "name": "Green Silk",
      "hex": "#a2c2b0",
      "good name": ""
    },
    {
      "name": "Green Sky",
      "hex": "#859d66",
      "good name": ""
    },
    {
      "name": "Green Sleeves",
      "hex": "#a19675",
      "good name": ""
    },
    {
      "name": "Green Smoke",
      "hex": "#9ca664",
      "good name": ""
    },
    {
      "name": "Green Snow",
      "hex": "#9eb788",
      "good name": ""
    },
    {
      "name": "Green Song",
      "hex": "#d1e9c4",
      "good name": ""
    },
    {
      "name": "Green Spool",
      "hex": "#006474",
      "good name": ""
    },
    {
      "name": "Green Spring",
      "hex": "#a9af99",
      "good name": ""
    },
    {
      "name": "Green Spruce",
      "hex": "#589f7e",
      "good name": ""
    },
    {
      "name": "Green Stain",
      "hex": "#2b553e",
      "good name": ""
    },
    {
      "name": "Green Suede",
      "hex": "#73884d",
      "good name": ""
    },
    {
      "name": "Green Sulphur",
      "hex": "#ae8e2c",
      "good name": ""
    },
    {
      "name": "Green Tea",
      "hex": "#b5b68f",
      "good name": "x"
    },
    {
      "name": "Green Tea Candy",
      "hex": "#65ab7c",
      "good name": ""
    },
    {
      "name": "Green Tea Ice Cream",
      "hex": "#93b13d",
      "good name": ""
    },
    {
      "name": "Green Tea Leaf",
      "hex": "#939a89",
      "good name": ""
    },
    {
      "name": "Green Tea Mochi",
      "hex": "#90a96e",
      "good name": "x"
    },
    {
      "name": "Green Teal",
      "hex": "#0cb577",
      "good name": ""
    },
    {
      "name": "Green Tease",
      "hex": "#e3ede0",
      "good name": ""
    },
    {
      "name": "Green Thumb",
      "hex": "#779900",
      "good name": "x"
    },
    {
      "name": "Green Tilberi",
      "hex": "#d5e0d0",
      "good name": ""
    },
    {
      "name": "Green Tint",
      "hex": "#c5ccc0",
      "good name": ""
    },
    {
      "name": "Green Tone Ink",
      "hex": "#47553c",
      "good name": ""
    },
    {
      "name": "Green Tourmaline",
      "hex": "#5eab81",
      "good name": ""
    },
    {
      "name": "Green Trance",
      "hex": "#a0d9a3",
      "good name": ""
    },
    {
      "name": "Green Trellis",
      "hex": "#99a798",
      "good name": ""
    },
    {
      "name": "Green Turquoise",
      "hex": "#679591",
      "good name": ""
    },
    {
      "name": "Green Valley",
      "hex": "#3f4948",
      "good name": ""
    },
    {
      "name": "Green Veil",
      "hex": "#e0f1c4",
      "good name": ""
    },
    {
      "name": "Green Velvet",
      "hex": "#127453",
      "good name": ""
    },
    {
      "name": "Green Venom",
      "hex": "#b8f818",
      "good name": "x"
    },
    {
      "name": "Green Vibes",
      "hex": "#d4e7c3",
      "good name": ""
    },
    {
      "name": "Green Vogue",
      "hex": "#23414e",
      "good name": ""
    },
    {
      "name": "Green Wash",
      "hex": "#c6ddcd",
      "good name": ""
    },
    {
      "name": "Green Waterloo",
      "hex": "#2c2d24",
      "good name": ""
    },
    {
      "name": "Green Wave",
      "hex": "#c3dcd5",
      "good name": ""
    },
    {
      "name": "Green Weed",
      "hex": "#548f6f",
      "good name": ""
    },
    {
      "name": "Green Whisper",
      "hex": "#e3eee3",
      "good name": ""
    },
    {
      "name": "Green White",
      "hex": "#deddcb",
      "good name": ""
    },
    {
      "name": "Green With Envy",
      "hex": "#22bb33",
      "good name": "x"
    },
    {
      "name": "Green Woodpecker Olive",
      "hex": "#7d7853",
      "good name": ""
    },
    {
      "name": "Green Wrasse",
      "hex": "#13da25",
      "good name": ""
    },
    {
      "name": "Green Yellow",
      "hex": "#c6f808",
      "good name": ""
    },
    {
      "name": "Greenalicious",
      "hex": "#00dd00",
      "good name": ""
    },
    {
      "name": "Greenbelt",
      "hex": "#447d5f",
      "good name": ""
    },
    {
      "name": "Greenblack",
      "hex": "#373a3a",
      "good name": ""
    },
    {
      "name": "Greenbrier",
      "hex": "#4b9b69",
      "good name": ""
    },
    {
      "name": "Greenday",
      "hex": "#99ff00",
      "good name": ""
    },
    {
      "name": "Greene & Greene",
      "hex": "#445544",
      "good name": ""
    },
    {
      "name": "Greenella",
      "hex": "#60857a",
      "good name": ""
    },
    {
      "name": "Greener Grass",
      "hex": "#2f8351",
      "good name": ""
    },
    {
      "name": "Greener Pastures",
      "hex": "#495a4c",
      "good name": ""
    },
    {
      "name": "Greenery",
      "hex": "#88b04b",
      "good name": ""
    },
    {
      "name": "Greenette",
      "hex": "#daecc5",
      "good name": ""
    },
    {
      "name": "Greenfield",
      "hex": "#60724f",
      "good name": ""
    },
    {
      "name": "Greenfinch",
      "hex": "#bda928",
      "good name": "x"
    },
    {
      "name": "Greengage",
      "hex": "#8bc28c",
      "good name": ""
    },
    {
      "name": "Greengrass",
      "hex": "#72a355",
      "good name": ""
    },
    {
      "name": "Greenhouse",
      "hex": "#3e6334",
      "good name": "x"
    },
    {
      "name": "Greenhouse Glass",
      "hex": "#d7e7cd",
      "good name": ""
    },
    {
      "name": "Greening",
      "hex": "#dfe4d5",
      "good name": ""
    },
    {
      "name": "Greenish",
      "hex": "#40a368",
      "good name": ""
    },
    {
      "name": "Greenish Beige",
      "hex": "#c9d179",
      "good name": ""
    },
    {
      "name": "Greenish Black",
      "hex": "#454445",
      "good name": ""
    },
    {
      "name": "Greenish Blue",
      "hex": "#0b8b87",
      "good name": ""
    },
    {
      "name": "Greenish Brown",
      "hex": "#696112",
      "good name": ""
    },
    {
      "name": "Greenish Cyan",
      "hex": "#2afeb7",
      "good name": ""
    },
    {
      "name": "Greenish Grey",
      "hex": "#96ae8d",
      "good name": ""
    },
    {
      "name": "Greenish Grey Bark",
      "hex": "#66675a",
      "good name": ""
    },
    {
      "name": "Greenish Tan",
      "hex": "#bccb7a",
      "good name": ""
    },
    {
      "name": "Greenish Teal",
      "hex": "#32bf84",
      "good name": ""
    },
    {
      "name": "Greenish Turquoise",
      "hex": "#00fbb0",
      "good name": ""
    },
    {
      "name": "Greenish White",
      "hex": "#d1f1de",
      "good name": ""
    },
    {
      "name": "Greenish Yellow",
      "hex": "#cdfd02",
      "good name": ""
    },
    {
      "name": "Greenlake",
      "hex": "#007d69",
      "good name": ""
    },
    {
      "name": "Greenland",
      "hex": "#737d6a",
      "good name": ""
    },
    {
      "name": "Greenland Blue",
      "hex": "#367f9a",
      "good name": ""
    },
    {
      "name": "Greenland Green",
      "hex": "#22acae",
      "good name": ""
    },
    {
      "name": "Greenland Ice",
      "hex": "#b9d7d6",
      "good name": ""
    },
    {
      "name": "Greens",
      "hex": "#016844",
      "good name": ""
    },
    {
      "name": "Greensleeves",
      "hex": "#39766c",
      "good name": ""
    },
    {
      "name": "Greenway",
      "hex": "#419a7d",
      "good name": ""
    },
    {
      "name": "Greenwich Village",
      "hex": "#afbfbe",
      "good name": ""
    },
    {
      "name": "Greenwood",
      "hex": "#bcbaab",
      "good name": ""
    },
    {
      "name": "Greeny Glaze",
      "hex": "#067376",
      "good name": ""
    },
    {
      "name": "Gregorio Garden",
      "hex": "#cbc8dd",
      "good name": ""
    },
    {
      "name": "Greige",
      "hex": "#b0a999",
      "good name": ""
    },
    {
      "name": "Greige Violet",
      "hex": "#9c8c9a",
      "good name": ""
    },
    {
      "name": "Gremlin",
      "hex": "#a79954",
      "good name": "x"
    },
    {
      "name": "Gremolata",
      "hex": "#527e6d",
      "good name": ""
    },
    {
      "name": "Grenache",
      "hex": "#8e6268",
      "good name": ""
    },
    {
      "name": "Grenade",
      "hex": "#c32149",
      "good name": ""
    },
    {
      "name": "Grenadier",
      "hex": "#c14d36",
      "good name": ""
    },
    {
      "name": "Grenadine",
      "hex": "#ac545e",
      "good name": ""
    },
    {
      "name": "Gretchin Green",
      "hex": "#5d6732",
      "good name": ""
    },
    {
      "name": "Gretna Green",
      "hex": "#596442",
      "good name": ""
    },
    {
      "name": "Grey",
      "hex": "#808080",
      "good name": "x"
    },
    {
      "name": "Grey Aqua",
      "hex": "#88b69f",
      "good name": ""
    },
    {
      "name": "Grey Area",
      "hex": "#8f9394",
      "good name": "x"
    },
    {
      "name": "Grey Ashlar",
      "hex": "#cabab1",
      "good name": ""
    },
    {
      "name": "Grey Asparagus",
      "hex": "#465945",
      "good name": ""
    },
    {
      "name": "Grey Blue",
      "hex": "#77a1b5",
      "good name": ""
    },
    {
      "name": "Grey Blueberry",
      "hex": "#6c8096",
      "good name": ""
    },
    {
      "name": "Grey Brown",
      "hex": "#7f7053",
      "good name": ""
    },
    {
      "name": "Grey By Me",
      "hex": "#a1988b",
      "good name": ""
    },
    {
      "name": "Grey Carmine",
      "hex": "#7a5063",
      "good name": ""
    },
    {
      "name": "Grey Chateau",
      "hex": "#9fa3a7",
      "good name": ""
    },
    {
      "name": "Grey Cloth",
      "hex": "#ccc9c5",
      "good name": ""
    },
    {
      "name": "Grey Cloud",
      "hex": "#747880",
      "good name": ""
    },
    {
      "name": "Grey Clouds",
      "hex": "#b7b7b2",
      "good name": ""
    },
    {
      "name": "Grey Dawn",
      "hex": "#bbc1cc",
      "good name": ""
    },
    {
      "name": "Grey Dolphin",
      "hex": "#c8c7c5",
      "good name": ""
    },
    {
      "name": "Grey Dusk",
      "hex": "#897f98",
      "good name": ""
    },
    {
      "name": "Grey Flannel",
      "hex": "#8d9a9e",
      "good name": ""
    },
    {
      "name": "Grey Frost",
      "hex": "#b8bfc2",
      "good name": ""
    },
    {
      "name": "Grey Ghost",
      "hex": "#dddcda",
      "good name": ""
    },
    {
      "name": "Grey Glimpse",
      "hex": "#e0e4e2",
      "good name": ""
    },
    {
      "name": "Grey Gloss",
      "hex": "#a3a29b",
      "good name": ""
    },
    {
      "name": "Grey Grain",
      "hex": "#a9bdbf",
      "good name": ""
    },
    {
      "name": "Grey Green",
      "hex": "#86a17d",
      "good name": ""
    },
    {
      "name": "Grey Heather",
      "hex": "#868790",
      "good name": ""
    },
    {
      "name": "Grey Heron",
      "hex": "#89928a",
      "good name": ""
    },
    {
      "name": "Grey Jade",
      "hex": "#b9bbad",
      "good name": ""
    },
    {
      "name": "Grey Lilac",
      "hex": "#d4cacd",
      "good name": ""
    },
    {
      "name": "Grey Linnet Egg",
      "hex": "#f2e8d7",
      "good name": ""
    },
    {
      "name": "Grey Locks",
      "hex": "#72695e",
      "good name": ""
    },
    {
      "name": "Grey Marble",
      "hex": "#b9b4b1",
      "good name": "x"
    },
    {
      "name": "Grey Matter",
      "hex": "#c87f89",
      "good name": ""
    },
    {
      "name": "Grey Matters",
      "hex": "#a7a8a2",
      "good name": ""
    },
    {
      "name": "Grey Mauve",
      "hex": "#cab8ab",
      "good name": ""
    },
    {
      "name": "Grey Mist",
      "hex": "#99aeae",
      "good name": ""
    },
    {
      "name": "Grey Monument",
      "hex": "#707c78",
      "good name": ""
    },
    {
      "name": "Grey Morn",
      "hex": "#cabeb5",
      "good name": ""
    },
    {
      "name": "Grey Morning",
      "hex": "#9eb0aa",
      "good name": ""
    },
    {
      "name": "Grey Nickel",
      "hex": "#c3c3bd",
      "good name": ""
    },
    {
      "name": "Grey Nurse",
      "hex": "#d1d3cc",
      "good name": ""
    },
    {
      "name": "Grey of Darkness",
      "hex": "#a2a2a2",
      "good name": ""
    },
    {
      "name": "Grey Olive",
      "hex": "#a19a7f",
      "good name": ""
    },
    {
      "name": "Grey Owl",
      "hex": "#776f67",
      "good name": ""
    },
    {
      "name": "Grey Pearl",
      "hex": "#ced0cf",
      "good name": ""
    },
    {
      "name": "Grey Pearl Sand",
      "hex": "#b0b7be",
      "good name": ""
    },
    {
      "name": "Grey Pebble",
      "hex": "#cfcac1",
      "good name": ""
    },
    {
      "name": "Grey Pepper",
      "hex": "#84827d",
      "good name": ""
    },
    {
      "name": "Grey Pink",
      "hex": "#c3909b",
      "good name": ""
    },
    {
      "name": "Grey Pinstripe",
      "hex": "#49494d",
      "good name": ""
    },
    {
      "name": "Grey Placidity",
      "hex": "#dddde2",
      "good name": ""
    },
    {
      "name": "Grey Porcelain",
      "hex": "#86837a",
      "good name": ""
    },
    {
      "name": "Grey Purple",
      "hex": "#826d8c",
      "good name": ""
    },
    {
      "name": "Grey Ridge",
      "hex": "#847986",
      "good name": ""
    },
    {
      "name": "Grey River Rock",
      "hex": "#99a1a1",
      "good name": ""
    },
    {
      "name": "Grey Roads",
      "hex": "#c3c0bb",
      "good name": ""
    },
    {
      "name": "Grey Rose",
      "hex": "#c6b6b2",
      "good name": ""
    },
    {
      "name": "Grey Russian",
      "hex": "#8e9598",
      "good name": ""
    },
    {
      "name": "Grey Sand",
      "hex": "#e5ccaf",
      "good name": ""
    },
    {
      "name": "Grey Scape",
      "hex": "#b8b0af",
      "good name": ""
    },
    {
      "name": "Grey Screen",
      "hex": "#c6caca",
      "good name": ""
    },
    {
      "name": "Grey Shadows",
      "hex": "#c2bdba",
      "good name": ""
    },
    {
      "name": "Grey Sheep",
      "hex": "#baaaaa",
      "good name": "x"
    },
    {
      "name": "Grey Shimmer",
      "hex": "#d6d9d8",
      "good name": ""
    },
    {
      "name": "Grey Shingle",
      "hex": "#949392",
      "good name": ""
    },
    {
      "name": "Grey Spell",
      "hex": "#c8c7c2",
      "good name": ""
    },
    {
      "name": "Grey Squirrel",
      "hex": "#989081",
      "good name": ""
    },
    {
      "name": "Grey Suit",
      "hex": "#9391a0",
      "good name": ""
    },
    {
      "name": "Grey Summit",
      "hex": "#959491",
      "good name": ""
    },
    {
      "name": "Grey Teal",
      "hex": "#5e9b8a",
      "good name": ""
    },
    {
      "name": "Grey Timber Wolf",
      "hex": "#acaeb1",
      "good name": ""
    },
    {
      "name": "Grey Violet",
      "hex": "#9b8e8e",
      "good name": ""
    },
    {
      "name": "Grey Web",
      "hex": "#616669",
      "good name": "x"
    },
    {
      "name": "Grey Whisper",
      "hex": "#e6e4e4",
      "good name": ""
    },
    {
      "name": "Grey White",
      "hex": "#d7d5cb",
      "good name": ""
    },
    {
      "name": "Grey Wolf",
      "hex": "#9ca0a6",
      "good name": ""
    },
    {
      "name": "Grey Wonder",
      "hex": "#e5e8e6",
      "good name": ""
    },
    {
      "name": "Grey Wool",
      "hex": "#a9bbbc",
      "good name": ""
    },
    {
      "name": "Grey-Headed Woodpecker Green",
      "hex": "#98916c",
      "good name": ""
    },
    {
      "name": "Greybeard",
      "hex": "#d4d0c5",
      "good name": ""
    },
    {
      "name": "Greyed Jade",
      "hex": "#9bbea9",
      "good name": ""
    },
    {
      "name": "Greyhound",
      "hex": "#b2aca2",
      "good name": ""
    },
    {
      "name": "Greyish",
      "hex": "#cfcac7",
      "good name": ""
    },
    {
      "name": "Greyish Beige",
      "hex": "#a8a495",
      "good name": ""
    },
    {
      "name": "Greyish Black",
      "hex": "#555152",
      "good name": ""
    },
    {
      "name": "Greyish Blue",
      "hex": "#5e819d",
      "good name": ""
    },
    {
      "name": "Greyish Brown",
      "hex": "#7a6a4f",
      "good name": ""
    },
    {
      "name": "Greyish Green",
      "hex": "#82a67d",
      "good name": ""
    },
    {
      "name": "Greyish Pink",
      "hex": "#c88d94",
      "good name": ""
    },
    {
      "name": "Greyish Purple",
      "hex": "#887191",
      "good name": ""
    },
    {
      "name": "Greyish Teal",
      "hex": "#719f91",
      "good name": ""
    },
    {
      "name": "Greyish White",
      "hex": "#d6dee9",
      "good name": ""
    },
    {
      "name": "Greyish Yellow",
      "hex": "#877254",
      "good name": ""
    },
    {
      "name": "Greylac",
      "hex": "#948c8d",
      "good name": ""
    },
    {
      "name": "Greys Harbor",
      "hex": "#596368",
      "good name": ""
    },
    {
      "name": "Greystoke",
      "hex": "#85837e",
      "good name": ""
    },
    {
      "name": "Greystone",
      "hex": "#b7b9b5",
      "good name": "x"
    },
    {
      "name": "Greywacke",
      "hex": "#aaccbb",
      "good name": ""
    },
    {
      "name": "Greywood",
      "hex": "#9d9586",
      "good name": ""
    },
    {
      "name": "Grieving Daylily",
      "hex": "#c3571d",
      "good name": ""
    },
    {
      "name": "Griffin",
      "hex": "#8d8f8f",
      "good name": "x"
    },
    {
      "name": "Griffon Brown",
      "hex": "#70393f",
      "good name": ""
    },
    {
      "name": "Grill Master",
      "hex": "#863b2c",
      "good name": ""
    },
    {
      "name": "Grilled",
      "hex": "#633f2e",
      "good name": "x"
    },
    {
      "name": "Grilled Cheese",
      "hex": "#ffc85f",
      "good name": ""
    },
    {
      "name": "Grim Grey",
      "hex": "#e3dcd6",
      "good name": "x"
    },
    {
      "name": "Grim Pink",
      "hex": "#deadaf",
      "good name": ""
    },
    {
      "name": "Grim Purple",
      "hex": "#441188",
      "good name": ""
    },
    {
      "name": "Grim Reaper",
      "hex": "#0f1039",
      "good name": ""
    },
    {
      "name": "Grim White",
      "hex": "#f6f1f4",
      "good name": "x"
    },
    {
      "name": "Grimace",
      "hex": "#50314c",
      "good name": ""
    },
    {
      "name": "Grime",
      "hex": "#565143",
      "good name": ""
    },
    {
      "name": "Gris",
      "hex": "#a5a9a8",
      "good name": ""
    },
    {
      "name": "Gris Morado",
      "hex": "#8f8a91",
      "good name": ""
    },
    {
      "name": "Gris Náutico",
      "hex": "#bcc7cb",
      "good name": ""
    },
    {
      "name": "Gris Volcanico",
      "hex": "#797371",
      "good name": ""
    },
    {
      "name": "Grisaille",
      "hex": "#585e6f",
      "good name": ""
    },
    {
      "name": "Gristmill",
      "hex": "#a29371",
      "good name": ""
    },
    {
      "name": "Grizzle Grey",
      "hex": "#636562",
      "good name": ""
    },
    {
      "name": "Grizzly",
      "hex": "#885818",
      "good name": "x"
    },
    {
      "name": "Grog Yellow",
      "hex": "#937043",
      "good name": ""
    },
    {
      "name": "Groovy",
      "hex": "#de6491",
      "good name": ""
    },
    {
      "name": "Groovy Giraffe",
      "hex": "#eeaa11",
      "good name": "x"
    },
    {
      "name": "Gropius Grey",
      "hex": "#63615d",
      "good name": ""
    },
    {
      "name": "Gross Green",
      "hex": "#a0bf16",
      "good name": ""
    },
    {
      "name": "Grotesque Green",
      "hex": "#64e986",
      "good name": "x"
    },
    {
      "name": "Grouchy Badger",
      "hex": "#6f675c",
      "good name": ""
    },
    {
      "name": "Ground Bean",
      "hex": "#604e42",
      "good name": ""
    },
    {
      "name": "Ground Coffee",
      "hex": "#63554b",
      "good name": ""
    },
    {
      "name": "Ground Cover",
      "hex": "#a8bf8b",
      "good name": ""
    },
    {
      "name": "Ground Cumin",
      "hex": "#8a6c42",
      "good name": ""
    },
    {
      "name": "Ground Fog",
      "hex": "#cfcbc4",
      "good name": ""
    },
    {
      "name": "Ground Ginger",
      "hex": "#d9ca9f",
      "good name": ""
    },
    {
      "name": "Ground Nutmeg",
      "hex": "#a05a3b",
      "good name": ""
    },
    {
      "name": "Ground Pepper",
      "hex": "#766551",
      "good name": ""
    },
    {
      "name": "Groundcover",
      "hex": "#64634d",
      "good name": ""
    },
    {
      "name": "Grounded",
      "hex": "#d18c62",
      "good name": ""
    },
    {
      "name": "Groundwater",
      "hex": "#1100aa",
      "good name": ""
    },
    {
      "name": "Growing Nature",
      "hex": "#88cc11",
      "good name": ""
    },
    {
      "name": "Growing Season",
      "hex": "#c3cdb0",
      "good name": ""
    },
    {
      "name": "Growth",
      "hex": "#6ca178",
      "good name": ""
    },
    {
      "name": "Grubenwald",
      "hex": "#4a5b51",
      "good name": ""
    },
    {
      "name": "Grullo",
      "hex": "#a99a86",
      "good name": ""
    },
    {
      "name": "Grunervetliner",
      "hex": "#c0cf3f",
      "good name": ""
    },
    {
      "name": "Gruyère Cheese",
      "hex": "#f5deb3",
      "good name": "x"
    },
    {
      "name": "Gryphonne Sepia Wash",
      "hex": "#883f11",
      "good name": ""
    },
    {
      "name": "Gǔ Tóng Hēi Copper",
      "hex": "#634950",
      "good name": ""
    },
    {
      "name": "Guacamole",
      "hex": "#95986b",
      "good name": "x"
    },
    {
      "name": "Guardian Angel",
      "hex": "#e4e1ea",
      "good name": ""
    },
    {
      "name": "Guardian of Gardens",
      "hex": "#88aa22",
      "good name": "x"
    },
    {
      "name": "Guardsman Red",
      "hex": "#952e31",
      "good name": ""
    },
    {
      "name": "Guava Green",
      "hex": "#a18d0d",
      "good name": ""
    },
    {
      "name": "Guava Jam",
      "hex": "#e08771",
      "good name": ""
    },
    {
      "name": "Guava Jelly",
      "hex": "#ee9685",
      "good name": ""
    },
    {
      "name": "Guava Juice",
      "hex": "#f4b694",
      "good name": ""
    },
    {
      "name": "Guerrilla Forest",
      "hex": "#142d25",
      "good name": ""
    },
    {
      "name": "Guesthouse",
      "hex": "#e3e0d2",
      "good name": ""
    },
    {
      "name": "Guide Pink",
      "hex": "#eb4962",
      "good name": ""
    },
    {
      "name": "Guiding Star",
      "hex": "#fee9da",
      "good name": ""
    },
    {
      "name": "Guild Grey",
      "hex": "#d2d1cb",
      "good name": ""
    },
    {
      "name": "Guilliman Blue",
      "hex": "#6495ed",
      "good name": ""
    },
    {
      "name": "Guinea Pig",
      "hex": "#987652",
      "good name": "x"
    },
    {
      "name": "Guinea Pig White",
      "hex": "#e8e4d6",
      "good name": ""
    },
    {
      "name": "Guinean Green",
      "hex": "#4a8140",
      "good name": ""
    },
    {
      "name": "Guitar",
      "hex": "#6b4c37",
      "good name": ""
    },
    {
      "name": "Gulab Brown",
      "hex": "#8b2e19",
      "good name": ""
    },
    {
      "name": "Gulābī Pink",
      "hex": "#c772c0",
      "good name": ""
    },
    {
      "name": "Gulf Blue",
      "hex": "#343f5c",
      "good name": ""
    },
    {
      "name": "Gulf Breeze",
      "hex": "#ddded3",
      "good name": ""
    },
    {
      "name": "Gulf Harbour",
      "hex": "#225e64",
      "good name": ""
    },
    {
      "name": "Gulf Stream",
      "hex": "#74b2a8",
      "good name": ""
    },
    {
      "name": "Gulf Waters",
      "hex": "#2da6bf",
      "good name": ""
    },
    {
      "name": "Gulf Weed",
      "hex": "#686e43",
      "good name": ""
    },
    {
      "name": "Gulf Wind",
      "hex": "#bcc9cd",
      "good name": ""
    },
    {
      "name": "Gulf Winds",
      "hex": "#93b2b2",
      "good name": ""
    },
    {
      "name": "Gulfstream",
      "hex": "#01858b",
      "good name": ""
    },
    {
      "name": "Gull",
      "hex": "#918c8f",
      "good name": "x"
    },
    {
      "name": "Gull Feather",
      "hex": "#c2c2bc",
      "good name": ""
    },
    {
      "name": "Gull Grey",
      "hex": "#a4adb0",
      "good name": ""
    },
    {
      "name": "Gully",
      "hex": "#777661",
      "good name": ""
    },
    {
      "name": "Gully Green",
      "hex": "#4b6e3b",
      "good name": ""
    },
    {
      "name": "Gum Leaf",
      "hex": "#acc9b2",
      "good name": "x"
    },
    {
      "name": "Gumball",
      "hex": "#e7b2d0",
      "good name": ""
    },
    {
      "name": "Gumbo",
      "hex": "#718f8a",
      "good name": ""
    },
    {
      "name": "Gumdrop",
      "hex": "#de96c1",
      "good name": ""
    },
    {
      "name": "Gumdrop Green",
      "hex": "#2ea785",
      "good name": ""
    },
    {
      "name": "Gumdrops",
      "hex": "#ffc69d",
      "good name": ""
    },
    {
      "name": "Gummy Dolphins",
      "hex": "#06a9ca",
      "good name": "x"
    },
    {
      "name": "Gun Barrel",
      "hex": "#979d9a",
      "good name": ""
    },
    {
      "name": "Gun Corps Brown",
      "hex": "#6b593c",
      "good name": ""
    },
    {
      "name": "Gun Powder",
      "hex": "#484753",
      "good name": "x"
    },
    {
      "name": "Gundaroo Green",
      "hex": "#959984",
      "good name": ""
    },
    {
      "name": "Gunjō Blue",
      "hex": "#5d8cae",
      "good name": ""
    },
    {
      "name": "Gunmetal",
      "hex": "#536267",
      "good name": "x"
    },
    {
      "name": "Gunmetal Beige",
      "hex": "#908982",
      "good name": ""
    },
    {
      "name": "Gunmetal Green",
      "hex": "#777648",
      "good name": ""
    },
    {
      "name": "Gunmetal Grey",
      "hex": "#808c8c",
      "good name": ""
    },
    {
      "name": "Gunny Sack",
      "hex": "#dcd3bc",
      "good name": ""
    },
    {
      "name": "Guns N' Roses",
      "hex": "#ff0077",
      "good name": "x"
    },
    {
      "name": "Gunsmoke",
      "hex": "#7a7c76",
      "good name": "x"
    },
    {
      "name": "Guo Tie Dumpling",
      "hex": "#bd7e08",
      "good name": ""
    },
    {
      "name": "Guppie Green",
      "hex": "#00ff7f",
      "good name": ""
    },
    {
      "name": "Guppy Violet",
      "hex": "#ae5883",
      "good name": ""
    },
    {
      "name": "Gurkha",
      "hex": "#989171",
      "good name": ""
    },
    {
      "name": "Gustav",
      "hex": "#a49691",
      "good name": ""
    },
    {
      "name": "Gusto Gold",
      "hex": "#f8ac1d",
      "good name": ""
    },
    {
      "name": "Gutsy Grape",
      "hex": "#705284",
      "good name": ""
    },
    {
      "name": "Guy",
      "hex": "#897a68",
      "good name": ""
    },
    {
      "name": "Gyoza Dumpling",
      "hex": "#dfb46f",
      "good name": ""
    },
    {
      "name": "Gypsum",
      "hex": "#eeede4",
      "good name": ""
    },
    {
      "name": "Gypsum Rose",
      "hex": "#e2c4af",
      "good name": ""
    },
    {
      "name": "Gypsum Sand",
      "hex": "#d6cfbf",
      "good name": ""
    },
    {
      "name": "Gypsy",
      "hex": "#e59368",
      "good name": ""
    },
    {
      "name": "Gypsy Canvas",
      "hex": "#b7a467",
      "good name": ""
    },
    {
      "name": "Gypsy Caravan",
      "hex": "#d1c8d7",
      "good name": ""
    },
    {
      "name": "Gypsy Dancer",
      "hex": "#c07c7b",
      "good name": "x"
    },
    {
      "name": "Gypsy Jewels",
      "hex": "#613a57",
      "good name": ""
    },
    {
      "name": "Gypsy Magic",
      "hex": "#917d82",
      "good name": ""
    },
    {
      "name": "Gypsy Red",
      "hex": "#b6363b",
      "good name": ""
    },
    {
      "name": "Gypsy's Gown",
      "hex": "#a698a8",
      "good name": ""
    },
    {
      "name": "H₂O",
      "hex": "#bfe1e6",
      "good name": "x"
    },
    {
      "name": "Habanero",
      "hex": "#f98513",
      "good name": "x"
    },
    {
      "name": "Habanero Chile",
      "hex": "#b8473d",
      "good name": ""
    },
    {
      "name": "Habanero Gold",
      "hex": "#fed450",
      "good name": "x"
    },
    {
      "name": "Habitat",
      "hex": "#897d6d",
      "good name": ""
    },
    {
      "name": "Hacienda",
      "hex": "#9e8022",
      "good name": ""
    },
    {
      "name": "Hacienda Blue",
      "hex": "#0087a8",
      "good name": ""
    },
    {
      "name": "Hacienda Tile",
      "hex": "#b86d64",
      "good name": ""
    },
    {
      "name": "Hacienda White",
      "hex": "#f0ede7",
      "good name": ""
    },
    {
      "name": "Haddock's Sweater",
      "hex": "#277aba",
      "good name": "x"
    },
    {
      "name": "Hadfield Blue",
      "hex": "#1177ff",
      "good name": "x"
    },
    {
      "name": "Hadopelagic Water",
      "hex": "#000022",
      "good name": ""
    },
    {
      "name": "Haggis",
      "hex": "#c3c7b2",
      "good name": ""
    },
    {
      "name": "Hailey Blue",
      "hex": "#2c75ff",
      "good name": ""
    },
    {
      "name": "Hailstorm",
      "hex": "#d0d1e1",
      "good name": ""
    },
    {
      "name": "Hailstorm Grey",
      "hex": "#bdbeb9",
      "good name": ""
    },
    {
      "name": "Hair Blonde",
      "hex": "#fdcfa1",
      "good name": ""
    },
    {
      "name": "Hair Brown",
      "hex": "#8b7859",
      "good name": ""
    },
    {
      "name": "Hair Ribbon",
      "hex": "#939cc9",
      "good name": ""
    },
    {
      "name": "Hairy Brown",
      "hex": "#734a12",
