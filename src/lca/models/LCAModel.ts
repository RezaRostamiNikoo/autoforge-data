import LCAObjectType from "../enums/LCAObjectType";
import LCAModelTypes from "../enums/LCAObjectType";
import ILCAModel from "../interfaces/ILCAModel";
// import { v4 as uuidv4 } from "uuid";
const { v4: uuidv4 } = require('uuid');

export default abstract class LCAModel implements ILCAModel {
    "@type": LCAObjectType;
    "@id": string;
    name: string;

    constructor(type: LCAObjectType, name: string) {
        this["@type"] = type;
        this["@id"] = uuidv4();
        this.name = name;
    }
}