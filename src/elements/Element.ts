import IElement from "../Interfaces/IElement";

export default abstract class Element implements IElement {
    objectid: number;
    name: string;
    externalId: string;
    properties: object;

    constructor(data: Element) {
        this.name = data.name;
        this.objectid = data.objectid;
        // this.externalId = data.objectid;
        // this.properties = data.properties;
    }

    getMateiral: () => string;
    getVolume: () => string;
    getUnit: () => string;
}