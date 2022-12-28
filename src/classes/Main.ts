import IElementCategory from "../Interfaces/IElementCategory";
import IForgeMetadata from "../Interfaces/IForgeMetadata";
import IForgeMetadataProperties from "../Interfaces/IForgeMetadataProperties";
import eElementType from "../enums/eElementType";

import ElementTypeFactory from "./ElementTypeFactory";


export default class Main {

    private metadata: Array<IForgeMetadata>;
    private static elements: Array<IElementCategory> = [];
    public static properties: Array<IForgeMetadataProperties>;

    /**
     * 
     * @param metadata exported from forgeApi metadata
     * @param properties extracted from model: forge api -> metadata properties
     */
    constructor(metadata: any, properties: Array<IForgeMetadataProperties>) {
        this.metadata = <Array<IForgeMetadata>>metadata.model;
        Main.properties = properties;
    }

    createTree = (): void => {
        this.metadata.forEach(m => {
            for (const [value, name] of Object.entries(eElementType))
                if (m.name === name)
                    Main.elements.push(
                        ElementTypeFactory.getInstance(<eElementType>name, m)
                    );
        })
    }
}