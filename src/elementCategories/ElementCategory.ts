import IElementCategory from "../Interfaces/IElementCategory";
import Element from "../elements/Element";
import ILCAJsonable from "../Interfaces/ILCAJsonable";
import LCAJsonType from "../types/LCAJsonType";
import Category from "../lca/models/Category";
import Flow from "../lca/models/Flow";
import Process from "../lca/models/Process";
import FlowPropertyTypes from "../lca/enums/FlowPropertyTypes";
import LCAModelType from "../lca/enums/LCAModelType";

export default abstract class ElementCategory implements IElementCategory, ILCAJsonable {
    name: string;
    objectid: number;
    objects?: Array<ElementCategory | Element>

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

    constructor(data: ElementCategory, parent: ElementCategory | null = null) {
        this.name = data.name;
        this.objectid = data.objectid;
        this.objects = data.objects;

        if (parent) this.parent = parent
    }

    toLCAJson(): LCAJsonType {
        return {
            name: this.name,
            sub: this.objects.map(o => o.toLCAJson())
        };
    };

    createLCACategory() {
        const categories: Array<Object> = [];
        this.lcaObject.category = {
            flow: Category.create(this.name, LCAModelType.FLOW, this.parent?.lcaObject.category.flow),
            process: Category.create(this.name, LCAModelType.PROCESS, this.parent?.lcaObject.category.process)
        }

        categories.push(this.lcaObject.category.flow);
        categories.push(this.lcaObject.category.process);

        this.objects.forEach(c => {
            if ((<Object>c).hasOwnProperty("objects"))
                categories.push(...(<ElementCategory>c).createLCACategory())
        })

        return categories;
    }

    createLCAFlows(): Array<Object> {
        const flows: Array<Object> = [];

        this.lcaObject.flow =
            Flow.create(this.name, FlowPropertyTypes.Volume, this.lcaObject.category.flow ?? null)
        flows.push(this.lcaObject.flow);

        this.objects?.map(o => {
            if (Object(o).hasOwnProperty("objects"))
                flows.push(...(<ElementCategory>o).createLCAFlows());
        });

        return flows;
    }
    createLCAProcesses(): Array<Object> {
        const processes: Array<Object> = [];

        this.lcaObject.process =
            Process.create(this.name, FlowPropertyTypes.Volume, this.lcaObject.category.process ?? null);

        this.objects.map(o => {
            return o.createLCAProcesses();

        })


        return processes;
    }


    getMaterials(): Array<string> {
        const result: Array<string> = [];

        this.objects.forEach(o => {
            if ((<Object>o).hasOwnProperty("objects"))
                result.push(...(<ElementCategory>o).getMaterials());
            else
                result.push((<Element>o).getMateiral())
        });

        return result;
    }

    getElementsList(): Array<Object> {
        const result: Array<Object> = [];

        this.objects.forEach(o => {
            if ((<Object>o).hasOwnProperty("objects"))
                result.push(...(<ElementCategory>o).elementsList());
            else
                result.push((<Element>o).getElement())
        });

        return result;
    }
}