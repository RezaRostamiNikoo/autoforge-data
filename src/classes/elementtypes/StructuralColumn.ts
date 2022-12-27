import IElementType from "../../Interfaces/IElementType";


export default class StructuralColumn implements IElementType {
    private rawData: Object;

    constructor(data: Object) {
        this.rawData = data;
    }
    getRawData = (): Object => {

        return "";
    };

    getVolume = (): String => {


        return "";
    };
}