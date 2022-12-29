import ElementCategory from "../elementCategories/ElementCategory";
import Element from "./Element";


export default class StructuralColumnsElement extends Element {
    constructor(data: any, parentElementCategory: ElementCategory) {
        super(data, parentElementCategory);
    }

    getMateiral(): string {
        return this.properties['Materials and Finishes']?.['Structural Material'];
    }
    getVolume(): string {
        return this.properties['Dimensions']?.['Volume']?.split(" ")[0];
    };
    getUnit(): string {
        return this.properties['Dimensions']?.['Volume']?.split(" ")[1];
    }
}