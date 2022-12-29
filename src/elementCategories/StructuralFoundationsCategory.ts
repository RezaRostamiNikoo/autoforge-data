import ElementCategory from "./ElementCategory";
import StructuralFoundationsElement from "../elements/StructuralFoundationsElement";

export default class StructuralFoundationsCategory extends ElementCategory {
    constructor(data: any, parentElementCategory: ElementCategory) {
        super(data, parentElementCategory);
        if (!this.objects || !this.objects.length) return;

        this.objects = this.objects.map(o => {
            // checks if the object is Category or is Element
            if ((<Object>o).hasOwnProperty("objects")) {
                return new StructuralFoundationsCategory(o, this);
            } else {
                return new StructuralFoundationsElement(o, this);
            }
        });
    }
}