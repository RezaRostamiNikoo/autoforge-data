import ElementCategory from "./ElementCategory";
import FloorsElement from "../elements/FloorsElement";

export default class FloorsCategory extends ElementCategory {
    constructor(data: any) {
        super(data);
        if (!this.objects || !this.objects.length) return;

        this.objects = this.objects.map(o => {
            // checks if the object is Category or is Element
            if ((<Object>o).hasOwnProperty("objects")) {
                return new FloorsCategory(o);
            } else {
                return new FloorsElement(o);
            }
        });

        console.log("final object: ", this.objects);
    }
}

