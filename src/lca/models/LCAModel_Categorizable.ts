import LCAModel from "./LCAModel";
import ICategorizable from "../interfaces/ICategorizable";
import Category from "./Category";
import LCAModelType from "../enums/LCAModelType";

const { v4: uuidv4 } = require('uuid');

export default abstract class LCAModel_Categorizable extends LCAModel implements ICategorizable {

    category?: {
        "@type": string,
        "@id": string,
        // name: string,
        categoryType: LCAModelType
    };

    addToCategory(parent: Category) {
        this.category = {
            "@type": parent["@type"],
            "@id": parent["@id"],
            // name: parent.name,
            categoryType: parent.modelType
        }
    };
}