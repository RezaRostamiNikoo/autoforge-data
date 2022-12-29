import ElementCategory from "../elementCategories/ElementCategory";
import Element from "./Element";

export default class StructuralFoundationsElement extends Element {
    constructor(data: any, parentElementCategory: ElementCategory) {
        super(data, parentElementCategory);
    }

    getMateiral(): string {
        return this.properties['Materials and Finishes']?.['Structural Material'];
    }
    getVolume(): string {
        return this.properties['Other']?.['Volume']?.split(" ")[0];
    };
    getUnit(): string {
        return this.properties['Other']?.['Volume']?.split(" ")[1];
    }
}