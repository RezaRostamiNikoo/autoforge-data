const metadata = require("./data/sample1/metadata");
const properties = require("./data/sample1/properties");

const Main = require("../dist");

const m = new Main(metadata, properties);

m.createTree();