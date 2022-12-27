import ForgeMetadata from "./Forge/ForgeMetadata";

export default class Main {

    private metadata: Array<Object>;
    private properties: Array<Object>;

    /**
     * 
     * @param metadata exported from forgeApi metadata
     * @param properties extracted from model: forge api -> metadata properties
     */
    constructor(metadata: Array<Object>, properties: Array<Object>) {
        this.metadata = metadata;
        this.properties = properties;
    }


    private run = (): void => {
        const names = this.metadata.map(o => (<ForgeMetadata>o).name);


        console.log("adasdas");

    }


}



