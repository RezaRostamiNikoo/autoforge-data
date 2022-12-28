import IElementCategory from "../Interfaces/IElementCategory";
import Element from "../elements/Element";

export default abstract class ElementCategory implements IElementCategory {
    name: String;
    objectid: Number;
    objects?: Array<ElementCategory | Element>

    constructor(data: ElementCategory) {
        this.name = data.name;
        this.objectid = data.objectid;
        this.objects = data.objects;
    }


    get volume(): String {
        throw new Error("Method not implemented.");
    }



}