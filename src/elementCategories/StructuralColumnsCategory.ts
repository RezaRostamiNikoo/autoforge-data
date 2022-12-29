import ElementCategory from "./ElementCategory";
import StructuralColumnsElement from "../elements/StructuralColumnsElement";

export default class StructuralColumnsCategory extends ElementCategory {
    constructor(data: any, parentElementCategory: ElementCategory) {
        super(data, parentElementCategory);
        if (!this.objects || !this.objects.length) return;

        this.objects = this.objects.map(o => {
            // checks if the object is Category or is Element
            if ((<Object>o).hasOwnProperty("objects")) {
                return new StructuralColumnsCategory(o, this);
            } else {
                return new StructuralColumnsElement(o, this);
            }
        });
    }
}