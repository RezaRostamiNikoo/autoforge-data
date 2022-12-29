import LCAModelTypes from "../enums/LCAObjectType";
import FlowPropertyTypes from "../enums/FlowPropertyTypes";
import Category from "./Category";
import LCAModel_Categorizable from "./LCAModel_Categorizable";
import Mappings from "../links/Mappings";
import LCAModelType from "../enums/LCAModelType";


export default class Process extends LCAModel_Categorizable {
    public static create(name: string, flowPropertyType: FlowPropertyTypes,
        parent: Category | null, processType: "UNIT_PROCESS" = "UNIT_PROCESS"): Process {

        const result = new Process(name, processType);
        result.addInput(1, "");
        result.addOutput(2, "");
        if (!parent) return result;
        result.addToCategory(parent);

        return result;
    }

    processType: "UNIT_PROCESS";
    category?: { "@type": string; "@id": string; name: string; categoryType: LCAModelType; };
    exchanges: Array<{
        "@type": "Exchange",
        "input": boolean,
        "amount": number,
        flow: {
            "@id": string,
            // "refUnit": "m3"
        },
        // "unit": {
        //     "@id": "1c3a9695-398d-4b1f-b07e-a8715b610f70",
        // },
        flowProperty: {
            "@id": string
        },
    }> = [];




    constructor(name: string, processType: "UNIT_PROCESS" = "UNIT_PROCESS") {
        super(LCAModelTypes.PROCESS, name);
        this.processType = processType;
    }

    private addExchange(input: boolean, amount: number, flowPropertyType: FlowPropertyTypes, flowId: string) {
        this.exchanges.push({
            "@type": "Exchange",
            "input": input,
            "amount": amount,
            flow: {
                "@id": flowId,
                // "refUnit": "m3"
            },
            flowProperty: {
                "@id": Mappings.getFlowPropertyId(flowPropertyType)
            },
        });
    }
    public addInput(amount: number = 1.0, flowId: string) {
        // e00ccce8-4a26-4155-852b-22ecf5f60c7a 
        // this.addExchange(true, amount, FlowPropertyTypes.Volume, flowId)
        this.addExchange(true, amount, FlowPropertyTypes.Volume, "e00ccce8-4a26-4155-852b-22ecf5f60c7a")
    }

    public addOutput(amount: number = 1.0, flowId: string) {
        // 47ede6c3-27c4-49f7-9ec0-8c1e7e4d9a98
        // this.addExchange(true, amount, FlowPropertyTypes.Volume, flowId)
        this.addExchange(true, amount, FlowPropertyTypes.Volume, "47ede6c3-27c4-49f7-9ec0-8c1e7e4d9a98")
    }
}