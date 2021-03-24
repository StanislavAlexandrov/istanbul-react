const allTiles = [
    '2 - Fabric Warehouse',
    '3 - Spice Warehouse',
    '4 - Fruit Warehouse',
    '5 - Post Office',
    '6 - Caravansary',
    '7 - Fountain',
    '8 - Black Market',
    '9 - Teahouse',
    '10 - Large Market',
    '11 - Small Market',
    '12 - Police Station',
];

const fabricWarehouse2 = require('../img/2-fabric-warehouse.webp').default;
const spiceWarehouse3 = require('../img/3-spice-warehouse.webp').default;
const fruitWarehouse4 = require('../img/4-fruit-warehouse.webp').default;
const postOffice5 = require('../img/5-post-office.webp').default;
const caravansary6 = require('../img/6-caravansary.webp').default;
const fountain7 = require('../img/7-fountain.webp').default;
const blackMarket8 = require('../img/8-black-market.webp').default;
const teaHouse9 = require('../img/9-teahouse.webp').default;
const largeMarket10 = require('../img/10-large-market.webp').default;
const smallMarket11 = require('../img/11-small-market.webp').default;
const policeStation12 = require('../img/12-police-station.webp').default;

const allTilesDict = {
    '2 - Fabric Warehouse': fabricWarehouse2,
    '3 - Spice Warehouse': spiceWarehouse3,
    '4 - Fruit Warehouse': fruitWarehouse4,
    '5 - Post Office': postOffice5,
    '6 - Caravansary': caravansary6,
    '7 - Fountain': fountain7,
    '8 - Black Market': blackMarket8,
    '9 - Teahouse': teaHouse9,
    '10 - Large Market': largeMarket10,
    '11 - Small Market': smallMarket11,
    '12 - Police Station': policeStation12,
};

const fabricWarehouse2S = require('../img/2-fabric-warehouse.jpg').default;
const spiceWarehouse3S = require('../img/3-spice-warehouse.jpg').default;
const fruitWarehouse4S = require('../img/4-fruit-warehouse.jpg').default;
const postOffice5S = require('../img/5-post-office.jpg').default;
const caravansary6S = require('../img/6-caravansary.jpg').default;
const fountain7S = require('../img/7-fountain.jpg').default;
const blackMarket8S = require('../img/8-black-market.jpg').default;
const teaHouse9S = require('../img/9-teahouse.jpg').default;
const largeMarket10S = require('../img/10-large-market.jpg').default;
const smallMarket11S = require('../img/11-small-market.jpg').default;
const policeStation12S = require('../img/12-police-station.jpg').default;

const allTilesDictSafari = {
    '2 - Fabric Warehouse': fabricWarehouse2S,
    '3 - Spice Warehouse': spiceWarehouse3S,
    '4 - Fruit Warehouse': fruitWarehouse4S,
    '5 - Post Office': postOffice5S,
    '6 - Caravansary': caravansary6S,
    '7 - Fountain': fountain7S,
    '8 - Black Market': blackMarket8S,
    '9 - Teahouse': teaHouse9S,
    '10 - Large Market': largeMarket10S,
    '11 - Small Market': smallMarket11S,
    '12 - Police Station': policeStation12S,
};

export default function myFunction() {
    let resultingTile = randomFrom(allTiles);
    document.querySelector('.istanbul-result').innerHTML = resultingTile;
    let iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    console.log(iOS);
    if (iOS) {
        document.querySelector('.istanbulTilePicture').srcset =
            allTilesDictSafari[resultingTile];
    } else {
        document.querySelector('.istanbulTilePicture').srcset =
            allTilesDict[resultingTile];
    }
}

function randomFrom(array) {
    return array[Math.floor(Math.random() * array.length)];
}
