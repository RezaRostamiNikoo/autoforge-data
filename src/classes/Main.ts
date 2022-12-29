import ProjectCategory from "../elementCategories/ProjectCategory";
import IForgeObject from "../Interfaces/IForgeObject";
import IForgeObjectProperties from "../Interfaces/IForgeObjectProperties";
import eElementType from "../enums/eElementType";

import ElementTypeFactory from "./ElementTypeFactory";
import LCAJsonType from "../types/LCAJsonType";
import ElementCategory from "../elementCategories/ElementCategory";
import Element from "../elements/Element";

import Category from "../lca/models/Category";

export default class Main {

    public static objectsTree: IForgeObject;
    public static objectsProperties: Array<IForgeObjectProperties>;

    public static projectCategory: ProjectCategory;
    public static lCAModels: Array<Object> = [];

    /**
     * 
     * @param objectsTree received from Forge Derivation API: /modelderivative/v2/designdata/:base64urn/metadata/:guid
     * @param objectsProperties recieved from Forge Derivation API:  /modelderivative/v2/designdata/:base64urn/metadata/:guid/properties
     */
    constructor(objectsTree: any, objectsProperties: Array<IForgeObjectProperties>) {
        Main.objectsTree = <IForgeObject>objectsTree;
        Main.objectsProperties = <Array<IForgeObjectProperties>>objectsProperties;

        this.analysisForgeObjectsTree();
    }

    private analysisForgeObjectsTree = (): void => {
        // here it creates the root category of that objects tree
        Main.projectCategory = new ProjectCategory(Main.objectsTree);

    }

    toLCAJson = (): LCAJsonType => {
        return Main.projectCategory.toLCAJson();
    }

    // private _toLCAModels = (elements: Array<ElementCategory | Element>): void => {
    //     elements.forEach(e => {
    //         if ((<Object>e).hasOwnProperty("objects")) {
    //             const { flow: fCat, process: pCat } = (<ElementCategory>e).createLCACategory();
    //             Main.lCAModels.push(fCat);
    //             Main.lCAModels.push(pCat);
    //             this._toLCAModels((<ElementCategory>e).objects)

    //         } else {


    //             Main.lCAModels.push("EEEEEEEEEEEEEEEEE");
    //         }
    //     });
    // }

    toLCAModels = (): Array<Object> => {
        const result: Array<Object> = [];
        const categories: Array<Object> = Main.projectCategory.createLCACategory();
        const flows: Array<Object> = Main.projectCategory.createLCAFlows();
        const processes: Array<Object> = Main.projectCategory.createLCAProcesses();

        result.push(...categories);
        result.push(...flows);
        result.push(...processes);

        return result;
    }

    getMaterials(): Array<string> {
        return Main.projectCategory.getMaterials().filter((value, index, arr) => arr.indexOf(value) === index);
    }
    getElementsList(): Array<object> {
        return Main.projectCategory.getElementsList();
    }
}