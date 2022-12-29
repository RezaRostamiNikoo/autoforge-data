import ElementCategory from "./ElementCategory";
import StructuralFramingElement from "../elements/StructuralFramingElement";

export default class StructuralFramingCategory extends ElementCategory {
    constructor(data: any, parentElementCategory: ElementCategory) {
        super(data, parentElementCategory);
        if (!this.objects || !this.objects.length) return;

        this.objects = this.objects.map(o => {
            // checks if the object is Category or is Element
            if ((<Object>o).hasOwnProperty("objects")) {
                return new StructuralFramingCategory(o, this);
            } else {
                return new StructuralFramingElement(o, this);
            }
        });
    }
}