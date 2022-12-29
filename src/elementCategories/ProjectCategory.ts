import ElementCategory from "./ElementCategory";
import FloorsElement from "../elements/FloorsElement";
import ElementTypeFactory from "../classes/ElementTypeFactory";
import eElementType from "../enums/eElementType";

export default class ProjectCategory extends ElementCategory {
    constructor(data: any) {
        super(data, null);
        if (!this.objects || !this.objects.length) return;
        this.objects = this.objects
            .filter(o => Object.values(eElementType).some(e => e === o.name))
            .map(o => ElementTypeFactory.getInstance(<eElementType>(o.name), o, this));
    }
}

