import FlowPropertyTypes from "../enums/FlowPropertyTypes";

export default class Mappings {

    public static getFlowPropertyId = (type: FlowPropertyTypes): string => {
        switch (type) {
            case FlowPropertyTypes.Volume: return "93a60a56-a3c8-22da-a746-0800200c9a66";
            case FlowPropertyTypes.Mass: return "93a60a56-a3c8-11da-a746-0800200b9a66";
            case FlowPropertyTypes.Area: return "93a60a56-a3c8-19da-a746-0800200c9a66";
            case FlowPropertyTypes.Number_of_Items: return "01846770-4cfe-4a25-8ad9-919d8d378345";
        }
    }
}