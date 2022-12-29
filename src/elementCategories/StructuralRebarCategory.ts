import ElementCategory from "./ElementCategory";
import StructuralRebarElement from "../elements/StructuralRebarElement";

export default class StructuralRebarCategory extends ElementCategory {
    constructor(data: any, parentElementCategory: ElementCategory) {
        super(data, parentElementCategory);
        if (!this.objects || !this.objects.length) return;

        this.objects = this.objects.map(o => {
            // checks if the object is Category or is Element
            if ((<Object>o).hasOwnProperty("objects")) {
                return new StructuralRebarCategory(o, this);
            } else {
                return new StructuralRebarElement(o, this);
            }
        });
    }
}