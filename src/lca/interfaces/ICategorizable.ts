import LCAModelType from "../enums/LCAModelType";
import Category from "../models/Category";

export default interface ICategorizable {
    category?: {
        "@type": string,
        "@id": string,
        // name: string,
        categoryType: LCAModelType
    };

    addToCategory(parent: Category): void;
}