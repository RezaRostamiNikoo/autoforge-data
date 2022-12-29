import LCAModel_Categorizable from "./LCAModel_Categorizable";
import LCAModelType from "../enums/LCAModelType";
import LCAObjectType from "../enums/LCAObjectType";

export default class Category extends LCAModel_Categorizable {
    modelType: LCAModelType;
    category?: { "@type": string; "@id": string; categoryType: LCAModelType; };


    constructor(name: string, modelType: LCAModelType) {
        super(LCAObjectType.Category, name);
        this.modelType = modelType
    }

    public static create(name: string, modelType: LCAModelType, parent: Category | null = null): Category {
        const result = new Category(name, modelType);
        if (parent) result.addToCategory(parent);
        return result;
    }

}