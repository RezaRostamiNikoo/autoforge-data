const objectsTree = require("./data/sample1/objectsTree").data.objects[0];
const objectsProperties = require("./data/sample1/objectsProperties").data.collection;

const Main = require("../dist");

const m = new Main(objectsTree, objectsProperties);
// console.log(m.toLCAJson().find(e =>e.name == "Floors").sub[0].sub[0]);
// console.log(m.toLCAJson());
// console.log(JSON.stringify(m.toLCAModels()));
console.log(m.getElementsList());


// var cat = new Category("a1", "PROCESS");
// console.log(Category.create("this category", "PROCESS", cat));