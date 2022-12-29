import ElementCategory from "../elementCategories/ElementCategory";
import Element from "./Element";

export default class StructuralRebarElement extends Element {
    constructor(data: any, parentElementCategory: ElementCategory) {
        super(data, parentElementCategory);
    }
    
    getMateiral(): string {
        return this.properties['Materials and Finishes']?.['Material'];
    }
    getVolume(): string {
        return this.properties['Structural']?.['Reinforcement Volume']?.split(" ")[0];
    };
    getUnit(): string {
        return this.properties['Structural']?.['Reinforcement Volume']?.split(" ")[1];
    }
}