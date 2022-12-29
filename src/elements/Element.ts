import Main from "../classes/Main";
import ElementCategory from "../elementCategories/ElementCategory";
import IElement from "../Interfaces/IElement";
import ILCAJsonable from "../Interfaces/ILCAJsonable"
import FlowPropertyTypes from "../lca/enums/FlowPropertyTypes";
import Category from "../lca/models/Category";
import Flow from "../lca/models/Flow";
import Process from "../lca/models/Process";
import LCAJsonType from "../types/LCAJsonType";

export default abstract class Element implements IElement, ILCAJsonable {
    objectid: number;
    name: string;
    externalId: string;
    properties: any;

    parent?: ElementCategory;


    lcaObject: {
        category: {
            flow: Category | null,
            process: Category,
        },
        process: Process | null,
        flow: Flow | null
    } = {
            category: {
                flow: null,
                process: null
            },
            flow: null,
            process: null,
        }






    constructor(data: Element, parentElementCategory: ElementCategory) {
        this.name = data.name;
        this.objectid = data.objectid;
        const properties = Main.objectsProperties.find(p => p.objectid === this.objectid);

        this.externalId = properties.externalId;
        this.properties = properties.properties;

        this.parent = parentElementCategory;
    }


    abstract getMateiral(): string;
    abstract getVolume(): string;
    abstract getUnit(): string;

    getElement(): Object {
        const result = {
            name: this.name,
            material: this.getMateiral(),
            volume: this.getVolume(),
            unit: this.getUnit()
        }

        return result;
    }

    toLCAJson(): LCAJsonType {
        return {
            name: this.name,
            material: this.getMateiral(),
            amount: this.getVolume(),
            unit: this.getUnit(),
        };
    };


    createLCAProcesses(): Array<Object> {
        const processes: Array<Object> = [];

        this.lcaObject.process = Process.create(this.getMateiral(), FlowPropertyTypes.Volume, this.parent?.lcaObject.category.process);

        processes.push(this.lcaObject.process);



        return processes;
    }


}