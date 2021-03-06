/*
    pro.ctg=nav.id-->vue-components.js
    
    { "id": 1, "label": "办公空间", "key":"office"},
    { "id": 2, "label": "会所售楼处", "key":"club"},
    { "id": 3, "label": "酒店", "key":"hotel"},
    { "id": 4, "label": "商业空间", "key":"commerce "},
    { "id": 5, "label": "私宅样板房别墅", "key":"villa"},
    { "id": 6, "label": "文博产业", "key":"cultural "},
    { "id": 7, "label": "户外景观", "key":"outdoor"},
    { "id": 8, "label": "艺术创作", "key":"art "}
*/

var office = require("./pro-office.js");
var club = require("./pro-club.js");
var hotel = require("./pro-hotel.js");
var commerce = require("./pro-commerce.js");
var villa = require("./pro-villa.js");
var cultural = require("./pro-cultural.js");
var outdoor = require("./pro-outdoor.js");
var art = require("./pro-art.js");
module.exports = {
  proList: [
    ...office.pro,
    ...club.pro,
    ...hotel.pro,
    ...commerce.pro,
    ...villa.pro,
    ...cultural.pro,
    ...outdoor.pro,
    ...art.pro,
  ],
};
