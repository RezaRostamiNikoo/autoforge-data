import LCAObjectType from "../enums/LCAObjectType";
import LCAModelType from "../enums/LCAModelType";
import FlowPropertyTypes from "../enums/FlowPropertyTypes";
import Category from "./Category";
import Mappings from "../links/Mappings";
import LCAModel_Categorizable from "./LCAModel_Categorizable";

export default class Flow extends LCAModel_Categorizable {

    public static create(name: string, flowPropertyType: FlowPropertyTypes, parent: Category | null, flowType: string = "PRODUCT_FLOW"): Flow {
        const result = new Flow(name, flowType);
        result.flowProperties = [];
        result.flowProperties.push({
            "@type": "FlowPropertyFactor",
            referenceFlowProperty: true,
            conversionFactor: 1,
            flowProperty: {
                "@type": "FlowProperty",
                "@id": Mappings.getFlowPropertyId(flowPropertyType),
            }
        })

        if (!parent) return result;
        result.addToCategory(parent);
        return result;
    }

    flowType: string;
    category?: { "@type": string; "@id": string; name: string; categoryType: LCAModelType; };
    flowProperties: Array<{
        "@type": "FlowPropertyFactor",
        referenceFlowProperty: boolean,
        flowProperty: {
            "@type": "FlowProperty",
            "@id": string
        },
        conversionFactor: number
    }>

    constructor(name: string, flowType: string = "PRODUCT_FLOW") {
        super(LCAObjectType.Flow, name);
        this.flowType = flowType;
    }

}